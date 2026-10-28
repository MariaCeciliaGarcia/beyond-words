const assert=require('assert');const {setup}=require('./validate.cjs');
const key='jujian.library.v2';
const action=(env,name,extra={})=>env.handlers.click({target:{closest:s=>s==='[data-action]'?{dataset:{action:name,...extra}}:null}});
const data=env=>JSON.parse(env.map.get(key));
const backup=d=>JSON.stringify({format:'jujian-progress',formatVersion:1,exportedAt:new Date().toISOString(),data:d});
const call=(env,fn,arg)=>env.run(`${fn}(JSON.parse(${JSON.stringify(JSON.stringify(arg))}))`);
const fresh=setup();fresh.run("selectLesson('p-done-with');state.learn=newLearning();state.learn.stage='exercise';state.learn.index=3;state.learn.q.input='He will';state.learn.q.hints=['words'];view='study';save();");
let restored=setup(null,data(fresh));assert.equal(restored.run('state.learn.q.input'),'He will');assert.equal(restored.run('state.learn.index'),3);
restored.run("view='home';render()");assert(restored.run("app.innerHTML.includes('继续学习')"));action(restored,'continue-learning-home');assert.equal(restored.run('view'),'study');assert.equal(restored.run('state.learn.q.input'),'He will');assert.equal(restored.run('state.learn.index'),3);
restored.run('enrolled();startReview();state.review.index=1;state.review.q.input="review draft";save();view="home";render()');action(restored,'continue-review-home');assert.equal(restored.run('view'),'practice');assert.equal(restored.run('state.review.index'),1);assert.equal(restored.run('state.review.q.input'),'review draft');
const payload=restored.run('JSON.stringify(progressBackup())');const imported=setup();assert(imported.run(`previewProgressImport(${JSON.stringify(payload)})`));assert(imported.run('applyProgressImport("merge")'));assert.equal(imported.run("record('p-done-with').learn.q.input"),'He will');assert.equal(imported.run("record('p-done-with').review.q.input"),'review draft');
action(imported,'continue-review-home');assert.equal(imported.run('lesson.id'),'p-done-with');assert.equal(imported.run('state.review.index'),1);
const stable=imported.map.get(key);assert(!imported.run('previewProgressImport("broken")'));assert.equal(imported.map.get(key),stable);
const invalid=data(restored);invalid.records['p-done-with'].learn.index=5;assert.throws(()=>call(imported,'checkedProgress',invalid));invalid.records['p-done-with'].learn.index=2;invalid.records['p-done-with'].learn.pinnedLearning=[];assert.throws(()=>call(imported,'checkedProgress',invalid));
// Malformed main snapshots recover from a good copy; neither good copy means no overwrite.
const recoveryMap=new Map([[key,'{"version":2,"records":{"order":null}}'],[key+'.recovery',fresh.map.get(key)]]);const recovered=setup(null,null,{map:recoveryMap});assert.equal(recovered.run('state.learn.q.input'),'He will');
const damaged=new Map([[key,'{broken']]);const blocked=setup(null,null,{map:damaged});assert(blocked.run('progressReadOnly'));assert.equal(damaged.get(key),'{broken');
// Empty fresh-browser records cannot beat real imported progress merely because they are newer.
const ever=setup();ever.run("selectLesson('ever');state.learn=newLearning();state.learn.q.input='Have you';view='study';save();");const empty=setup();empty.run('state.updatedAt=Date.now()+100000;save()');assert(empty.run(`previewProgressImport(${JSON.stringify(backup(data(ever)))})`));assert(empty.run("applyProgressImport('merge')"));assert.equal(empty.run("record('ever').learn.q.input"),'Have you');
// Per-record merge, same-unit conflict preservation and deletion do not revive old data.
const shared=new Map();const tabA=setup(null,null,{map:shared});tabA.run("selectLesson('order');state.learn=newLearning();state.learn.q.input='LOCAL_DRAFT_TO_PRESERVE';view='study';save()");const tabB=setup(null,null,{map:shared});
tabB.run("selectLesson('ever');state.learn=newLearning();state.learn.q.input='Other unit';view='study';save()");tabA.run('save()');assert.equal(data(tabA).records.ever.learn.q.input,'Other unit');
const remote=data(tabA);remote.records.order.updatedAt+=100;remote.records.order.learn.q.input='REMOTE_DRAFT';tabA.run(`handleProgressStorage({key:KEY,newValue:${JSON.stringify(JSON.stringify(remote))}})`);assert.equal(tabA.run("record('order').learn.q.input"),'REMOTE_DRAFT');assert(shared.get(key+'.conflict-history').includes('LOCAL_DRAFT_TO_PRESERVE'));
// Replacing then saving from a stale tab must not resurrect omitted records; undo restores them.
const beforeReplace=data(tabA),replaceWith=data(ever);assert(tabA.run(`previewProgressImport(${JSON.stringify(backup(replaceWith))})`));assert(tabA.run("applyProgressImport('replace')"));assert(!data(tabA).records.order);tabB.run('save()');assert(!data(tabB).records.order);tabA.run('undoProgressImport()');assert(data(tabA).records.order);assert.equal(data(tabA).records.order.learn.q.input,beforeReplace.records.order.learn.q.input);
// Failed import retains the previous successful undo journal and runtime state.
const opts={};const transaction=setup(null,data(fresh),opts);assert(transaction.run(`previewProgressImport(${JSON.stringify(backup(data(ever)))})`));assert(transaction.run("applyProgressImport('replace')"));const journal=transaction.map.get(key+'.before-import');const current=data(transaction);opts.failKey=key;opts.failCount=1;
assert(transaction.run(`previewProgressImport(${JSON.stringify(backup(data(fresh)))})`));assert.equal(transaction.run("applyProgressImport('replace')"),false);assert.equal(transaction.map.get(key+'.before-import'),journal);assert.deepEqual(data(transaction).records,current.records);
// Download payload is a portable backup, and every task gets an actual transferable rule.
const downloaded=setup(null,data(fresh));downloaded.run('exportProgress()');assert.equal(downloaded.downloads.length,1);const file=JSON.parse(downloaded.downloads[0].text);assert.equal(file.format,'jujian-progress');assert.equal(file.data.records['p-done-with'].learn.index,3);assert(file.data.backupMeta.exportedAt);
const rules=setup();assert.equal(rules.run('Object.keys(window.JUJIAN_HINT_RULES).length'),rules.run('units.length'));rules.run(`for(const u of units){if(!window.JUJIAN_HINT_RULES[u.id])throw Error('missing core '+u.id);selectLesson(u.id);for(const q of [u.entry,...u.learning,...u.review]){const hint=expressionHint(q);if(!hint||!hint.includes('：'))throw Error(u.id+q.id);}}`);
rules.run("selectLesson('p-done-with')");assert(rules.run("expressionHint(lesson.learning[3]).includes('will 后接动词原形')&&expressionHint(lesson.learning[3]).includes('不晚于')&&!expressionHint(lesson.learning[3]).includes('by Friday')"));assert(rules.run("personalCheckPrompt({zh:'我到八点会做完'}).includes('be done with')"));
console.log('PASS: resume learning/review; portable export/import/undo; damaged storage fallback; schema rejection; fresh empty merge; cross-tab record merge/conflict preservation; generation barrier; failed-import rollback; all-unit help coverage and target-bound AI prompts.');
// Other malformed-but-valid JSON must fail before changing persistent progress.
const invalidCursor=data(fresh);invalidCursor.records['p-done-with'].cursor='not a number';assert.throws(()=>call(imported,'checkedProgress',invalidCursor));
const invalidHint=data(fresh);invalidHint.records['p-done-with'].learn.pinnedLearning=[{id:'l1',zh:'test',answers:['Test.'],hint:{bad:true}}];assert.throws(()=>call(imported,'checkedProgress',invalidHint));
(async()=>{
 const ai=setup();let copied='';ai.ctx.navigator={clipboard:{writeText:async value=>{copied=value;}}};
 ai.run("selectLesson('p-done-with');state.draft.zh='我到八点会做完这张表';");await ai.run('copyPersonalCheck()');assert(copied.includes('我到八点会做完这张表')&&copied.includes('be done with')&&copied.includes('必须使用'));
 ai.run("state.custom=[{id:'c-edit',zh:'原中文',en:'Original.'}];state.draft.zh='另一条草稿';editCustom('c-edit');");ai.el('edit-zh').value='尚未保存的中文';ai.el('edit-en').value='Unsaved English.';ai.ctx.navigator.clipboard.writeText=async()=>{throw Error('denied');};await ai.run("copyPersonalCheck('c-edit')");
 assert(ai.el('dialog').innerHTML.includes('edit-zh')&&ai.el('dialog').innerHTML.includes('ai-fallback'));assert.equal(ai.el('edit-zh').value,'尚未保存的中文');assert.equal(ai.el('edit-en').value,'Unsaved English.');assert.equal(ai.run('state.draft.zh'),'另一条草稿');
 ai.el('dialog').close();ai.run("selectLesson('p-fair-enough');state.draft.scene='朋友想休息';state.draft.intent='我接受';");ai.ctx.navigator.clipboard.writeText=async value=>{copied=value;};await ai.run('copyPersonalCheck()');assert(copied.includes('朋友想休息')&&copied.includes('我接受')&&copied.includes('Fair enough.')&&!copied.includes('译成'));
 console.log('PASS: rejected malformed cursor/question metadata; AI clipboard payloads and denied-copy editor preservation.');
})().catch(error=>{console.error(error);process.exitCode=1;});

// Keep one current personal example per expression, including legacy backups.
{
 const single=setup(),sr=single.run;
 sr("selectLesson('ever');state.enrolled=true;state.custom=[{id:'c-old',zh:'旧意思',en:'Old personal sentence.'},{id:'c-new',zh:'最近的意思',en:'Latest personal sentence.'}];state.review={queue:['c-old'],index:0,q:{...newQuestionState(),input:'Unfinished review draft'},results:[],retried:[],baseCount:1,scheduled:true};state.draft={zh:'未保存草稿',en:'Unsaved.'};");
 const legacy=JSON.parse(sr('JSON.stringify(store)')),loaded=setup(null,legacy),lr=loaded.run;
 assert.equal(lr('state.custom.length'),1);assert.equal(lr('state.custom[0].id'),'c-new');assert.equal(lr('reviewQuestion().answers[0]'),'Old personal sentence.');assert.equal(lr('state.review.q.input'),'Unfinished review draft');assert.equal(lr('state.draft.zh'),'未保存草稿');
 lr("state.learn=newLearning();state.learn.stage='custom';state.draft={zh:'替换后的意思',en:'Replacement personal sentence.'};view='study'");action(loaded,'save-custom');assert.equal(lr('state.custom.length'),1);assert.equal(lr('state.custom[0].id'),'c-new');assert.equal(lr('state.custom[0].en'),'Replacement personal sentence.');
 action(loaded,'continue-create');lr("state.draft={zh:'再换一句',en:'Another personal sentence.'}");action(loaded,'save-custom');assert.equal(lr('state.custom.length'),1);assert.equal(lr('state.custom[0].en'),'Another personal sentence.');assert.equal(lr('reviewQuestion().answers[0]'),'Old personal sentence.');
 const again=setup(null,data(loaded));assert.equal(again.run('state.custom.length'),1);assert.equal(again.run('state.custom[0].en'),'Another personal sentence.');
 lr("state.review=null");assert.equal(lr("pool().filter(q=>q.id.startsWith('c-')).length"),1);assert.equal(lr("pool().find(q=>q.id.startsWith('c-')).answers[0]"),'Another personal sentence.');
 lr("selectLesson('p-fair-enough');saveScenario('场景一','接受');saveScenario('场景二','理解');");assert.equal(lr('state.custom.length'),1);assert.equal(lr('state.custom[0].scene'),'场景二');
 const currentId=lr('state.custom[0].id');lr(`state.draft.scene='另一条未保存场景';state.draft.intent='草稿态度';saveScenario('编辑当前场景','编辑态度',${JSON.stringify(currentId)})`);assert.equal(lr('state.custom.length'),1);assert.equal(lr('state.draft.scene'),'另一条未保存场景');
 const imported=setup();assert(call(imported,'previewProgressImport',backup(legacy)));assert(imported.run("applyProgressImport('replace')"));assert.equal(imported.run("record('ever').custom.length"),1);
 console.log('PASS: one latest personal example/scenario; repeated save replaces; legacy load/import compacts; pending review snapshot and draft preserved; future review uses only the latest.');
}
