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
const rules=setup();assert.equal(rules.run('Object.keys(window.JUJIAN_HINT_RULES).length'),261);rules.run(`for(const u of units){if(!window.JUJIAN_HINT_RULES[u.id])throw Error('missing core '+u.id);selectLesson(u.id);for(const q of [u.entry,...u.learning,...u.review]){const hint=expressionHint(q);if(!hint||!hint.includes('：')||hint.length>130)throw Error(u.id+q.id);}}`);
rules.run("selectLesson('p-done-with')");assert(rules.run("expressionHint(lesson.learning[3]).includes('will 后接动词原形')&&expressionHint(lesson.learning[3]).includes('不晚于')&&!expressionHint(lesson.learning[3]).includes('by Friday')"));assert(rules.run("personalCheckPrompt({zh:'我到八点会做完'}).includes('be done with')"));
console.log('PASS: resume learning/review; portable export/import/undo; damaged storage fallback; schema rejection; fresh empty merge; cross-tab record merge/conflict preservation; generation barrier; failed-import rollback; 2871 transferable hints and target-bound AI prompts.');
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
