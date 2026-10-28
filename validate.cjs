const fs=require('fs'),vm=require('vm'),assert=require('assert');
const root=__dirname+'/';
function setup(legacy=null,saved=null,options={}){
 const map=options.map||new Map(),handlers={},listeners={},elements=new Map(),downloads=[],blobs=new Map();
 if(legacy)map.set('jujian.have-ever.v1',JSON.stringify(legacy));
 if(saved)map.set('jujian.library.v2',JSON.stringify(saved));
 const el=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',insertAdjacentHTML(_position,html){this.innerHTML+=html},textContent:'',value:'',hidden:true,open:false,classList:{add(){},remove(){}},querySelector(){return null},focus(){},setSelectionRange(){},select(){},addEventListener(){},showModal(){this.open=true},close(){this.open=false}});return elements.get(id);};
 const history={state:null,entries:[],replaceState(state,_,url){this.state=state;this.entries[this.entries.length-1]={state,url};},pushState(state,_,url){this.state=state;this.entries.push({state,url});}};
 const ctx={window:{addEventListener:(t,f)=>listeners[t]=f,scrollTo(){}},localStorage:{getItem:k=>map.get(k)||null,setItem:(k,v)=>{if(options.failWrites)throw Error('quota');if(options.failKey===k&&options.failCount>0){options.failCount--;throw Error('quota once');}map.set(k,v)},removeItem:k=>map.delete(k)},Blob:class{constructor(parts){this.parts=parts}},URL:{createObjectURL:b=>{const id='blob:test-'+blobs.size;blobs.set(id,b);return id},revokeObjectURL(){}},document:{body:{appendChild(){}},createElement:()=>({click(){downloads.push({filename:this.download,text:blobs.get(this.href).parts.join('')})},remove(){}}),getElementById:el,addEventListener:(t,f)=>handlers[t]=f},history,location:{pathname:'/',search:'',hash:''},crypto:require('crypto').webcrypto,setTimeout:()=>0,clearTimeout(){},Date,console};
 vm.createContext(ctx);
 const files=[...fs.readFileSync(root+'index.html','utf8').matchAll(/<script src="([^"?]+)/g)].map(x=>x[1]);
 for(const file of files)vm.runInContext(fs.readFileSync(root+file,'utf8'),ctx,{filename:file});
 return {ctx,map,handlers,listeners,history,el,downloads,run:source=>vm.runInContext(source,ctx)};
}
module.exports={setup};
if(require.main===module){
const env=setup();const r=env.run;
const total=r('units.length');assert.equal(total,261+r('(window.BW_CECILIA_A||[]).length+(window.BW_CECILIA_B||[]).length'));
assert.equal(r('new Set(units.map(u=>u.id)).size'),total);
assert.equal(r('units.reduce((n,u)=>n+u.learning.length+u.review.length,0)'),total*10);
r(`for(const u of units){
 for(const field of ['id','meaning','expression','formula','explanation','boundary','checkpoint'])if(!u[field])throw Error(u.id+field);
 if(u.learning.length!==5||u.review.length!==5||u.examples.length!==2)throw Error(u.id+' counts');
 for(const [kind,qs] of [['l',u.learning],['r',u.review]])qs.forEach((q,i)=>{if(q.id!==kind+(i+1)||!q.zh||!q.hint||!q.answers.length)throw Error(u.id+' '+q.id);for(const a of q.answers)if(!matches(a,q.answers))throw Error('match');});
 const scenes=catalog.scenes.flatMap(g=>g.children).filter(c=>c.units.includes(u.id));
 const functions=catalog.functions.flatMap(g=>g.children).filter(c=>c.units.includes(u.id));
 if(!scenes.length||functions.length!==1)throw Error(u.id+' taxonomy');
}
for(const group of [...catalog.scenes,...catalog.functions])for(const sub of group.children){if(!sub.units.length||sub.units.some(id=>!unitById.has(id)))throw Error(sub.id);}
`);
// Exercise every content unit through learning, custom creation, review and scheduling.
r(`for(const u of units){
 selectLesson(u.id);state.learn=newLearning();view='study';render();
 const entryMarkup=app.innerHTML;
 if(entryMarkup.includes('class="large-expression"')||entryMarkup.includes(u.expression))throw Error('entry leakage '+u.id);
 state.learn.stage='intro';render();if(!app.innerHTML.includes(esc(u.expression)))throw Error('intro '+u.id);
 state.learn.stage='exercise';enrolled();
 for(let i=0;i<5;i++){const q=u.learning[i];state.learn.q.input=q.answers[0];state.learn.q.checked=true;state.learn.q.revealed=true;render();if(questionType(q)==='choice'){state.learn.q.choice=q.correctChoice;render();if(!app.innerHTML.includes('判断正确'))throw Error('choice feedback '+u.id);}else if(!app.innerHTML.includes(questionType(q)==='input'?'答对了':'可以这样回应'))throw Error('feedback '+u.id);grade('good');}
 if(state.learn.stage!=='custom'||state.learn.index!==5)throw Error('custom stage '+u.id);
 state.custom.push({id:'c-'+u.id,zh:'我自己的意思',en:'My own sentence.'});finishLearning();
 startReview();for(let i=0;i<3;i++){if(!reviewQuestion())throw Error('review '+u.id);if(questionType(reviewQuestion())==='choice')state.review.q.choice=reviewQuestion().correctChoice;grade('good');}
 if(state.review||!state.summary||state.schedule.streak!==1)throw Error('schedule '+u.id);
}`);
assert.equal(r('availableUnits().length'),total);
assert.equal(r('units.filter(u=>record(u.id).custom.length===1).length'),total);
// Record isolation, mastery and round-trip local persistence.
r("selectLesson('ever');state.mastered=true;save();selectLesson('order');state.draft.zh='订单草稿';save();");
assert.equal(r("record('ever').mastered"),true);assert.equal(r("record('order').mastered"),false);
const restored=setup(null,JSON.parse(env.map.get('jujian.library.v2')));
assert.equal(restored.run('lesson.id'),'order');assert.equal(restored.run('state.draft.zh'),'订单草稿');
assert.equal(restored.run("record('ever').mastered"),true);
const legacy={version:1,enrolled:true,mastered:false,learn:{stage:'exercise',index:2,q:{input:'my draft',revealed:false,hints:[],checked:false},results:[]},review:null,custom:[{id:'c-legacy',zh:'旧例句',en:'Old sentence.'}],draft:{zh:'旧草稿',en:''},cursor:2,schedule:{due:123,streak:2,last:0},history:[],summary:null,lastView:'study'};
const migration=setup(legacy);
assert.equal(migration.run('lesson.id'),'ever');assert.equal(migration.run('state.learn.index'),2);
assert.equal(migration.run('state.learn.q.input'),'my draft');assert.equal(migration.run('state.custom[0].en'),'Old sentence.');
assert.equal(migration.run('state.schedule.streak'),2);assert.equal(migration.map.get('jujian.have-ever.v1'),JSON.stringify(legacy));
// Unfinished historical rounds keep their original prompts, even after a v2 upgrade.
const prior=JSON.parse(JSON.stringify(legacy));
prior.review={queue:['r2','r3','r4'],index:0,q:{input:'Have you ever been to the cinema alone?',revealed:false,hints:['frame'],checked:false},results:[],retried:[],baseCount:3,scheduled:true};
const upgrading=setup(prior,{version:2,activeId:'ever',records:{ever:JSON.parse(JSON.stringify(prior))},ui:{view:'practice'}});
assert(upgrading.run('reviewQuestion().zh').startsWith('你'));
upgrading.run('state.learn.index=3');assert(upgrading.run('learningQuestion().zh').startsWith('你'));
const upgradedAgain=setup(prior,JSON.parse(upgrading.map.get('jujian.library.v2')));
assert(upgradedAgain.run('reviewQuestion().zh').startsWith('你'));
upgrading.run('startReview()');assert(upgrading.run('pool().find(q=>q.id==="r2").zh').startsWith('她'));
upgrading.run('state.learn=newLearning();state.learn.stage="exercise";state.learn.index=3');assert(upgrading.run('learningQuestion().zh').startsWith('他'));
// Both classification axes point to one record.
// Filters do not fabricate unit labels.
r("view='library';tab='scene';filter='home';subfilter='home-items';search='';render();");
assert(r("app.innerHTML.includes('找物与故障')"));assert(!r("app.innerHTML.includes('邀请对方参加活动或询问参加意愿')"));
r("tab='function';filter='information';subfilter='time-left';render();");
assert(r("app.innerHTML.includes('还要多久')"));
// Every collection has authored content, and both domains paginate without empty shells.
assert.equal(r("units.filter(u=>u.domain==='daily').length"),137);
assert.equal(r("units.filter(u=>u.domain==='work').length"),80);
for(const [id,count] of [['daily1',25],['daily2',24],['daily3',24],['work1',16],['work2',16],['work3',16]])assert.equal(r(`units.filter(u=>u.collection==='${id}').length`),count);
r("view='library';domain='work';filter='all';subfilter='all';search='';page=2;render()");
assert.equal((r('app.innerHTML').match(/class="library-item unit-card"/g)||[]).length,24);
assert(r("app.innerHTML.includes('2 / '+Math.ceil(units.filter(u=>u.domains.includes('work')).length/24))"));
r("page=1;render()");
assert.equal((r('app.innerHTML').match(/class="library-item unit-card"/g)||[]).length,24);
assert(!r("app.innerHTML.includes('问有没有过某种经历')"));
r("domain='daily';tab='scene';filter='deep-talk';subfilter='feelings-boundaries';render()");
assert(r("app.innerHTML.includes('个人边界')"));
// A target viewed after an unmatched answer cannot become independent success.
const feedback=setup();feedback.run("selectLesson('order');state.learn=newLearning();state.learn.stage='exercise';view='study';state.learn.q.input='I like tea.';");
feedback.handlers.click({target:{closest:selector=>selector==='[data-action]'?{dataset:{action:'check'}}:null}});
assert.equal(feedback.run('state.learn.q.exposed'),true);
feedback.run("grade('good')");
assert.equal(feedback.run('state.learn.results[0].help'),true);
// Restoring a unit from history does not revert either unit's record.
feedback.run("selectLesson('ever');state.learn=newLearning();state.learn.q.input='ever draft';save();selectLesson('order');");
feedback.ctx.location.hash='#study/ever';feedback.listeners.popstate();
assert.equal(feedback.run('lesson.id'),'ever');assert.equal(feedback.run('state.learn.q.input'),'ever draft');
assert.equal(feedback.run("record('order').learn.index"),1);
console.log('PASS: '+total+' units / '+(total*10)+' exercises; taxonomy coverage; every-unit learning/custom/review; independent progress, mastery, persistence, legacy migration; category filters.');

// Retired edition filters never hide content or reappear after restoring old UI state.
const oldEdition=setup(null,{version:2,activeId:'w-previous',records:{},ui:{view:'library',domain:'work',collection:'work1'}});
assert.equal(oldEdition.run("units.filter(u=>u.domain===domain).length"),80);
assert(!oldEdition.run("app.innerHTML.includes('按辑浏览')||app.innerHTML.includes('5 道学习题')||app.innerHTML.includes('第一辑')"));
// Every initial attempt offers working, opt-in frame and lexical hints, with no English initially exposed.
const entryHints=setup();
entryHints.run(`for(const u of units){
 selectLesson(u.id);state.learn=newLearning();view='study';render();
 if(questionType(u.entry)==='input'){if(!app.innerHTML.includes('句式提示')||(window.getQuestionHelp(u.entry).words.length&&!app.innerHTML.includes('词语提示')))throw Error('missing entry hint '+u.id);}else if(!app.innerHTML.includes('data-action="hint"'))throw Error('missing recall hint '+u.id);
 if(app.innerHTML.includes('class="hint-box"'))throw Error('hint leaked '+u.id);
 state.learn.q.input='my partial answer';
}`);
entryHints.handlers.click({target:{closest:selector=>selector==='[data-action]'?{dataset:{action:'hint',hint:'words'}}:null}});
assert.equal(entryHints.run('state.learn.q.input'),'my partial answer');
assert(entryHints.run('state.learn.q.supportSeen'));assert(!entryHints.run('state.learn.q.usedHint'));
assert(entryHints.run("app.innerHTML.includes('class=\"hint-box\"')"));
assert(!entryHints.run("app.innerHTML.includes('可以这样说')"));
console.log('PASS: retired edition UI, preserved old content scope, all-unit entry hints and input persistence.');

// Learner-facing content cannot contain internal syllabus or authoring commentary.
r(`for(const u of units){
 const text=[u.meaning,u.explanation,u.boundary,u.checkpoint,...u.learning.flatMap(q=>[q.zh,q.hint]),...u.review.flatMap(q=>[q.zh,q.hint])].join(' ');
 if(/本单元|首期|本辑|题目会|题干会|以后再练|以后再学|后续再学/.test(text))throw Error('editorial leakage '+u.id);
}`);
assert.equal(r('catalog.expressionKinds.length'),6);
r(`for(const kind of catalog.expressionKinds){if(kind.units.length<4||kind.units.some(id=>!unitById.has(id)))throw Error('kind coverage '+kind.id);}`);
console.log('PASS: six expression kinds, content tone guard, new units in both taxonomy axes.');

assert.equal(r('catalog.learningOrder.length'),total);
assert.equal(r('new Set(catalog.learningOrder).size'),total);
r(`if(catalog.learningOrder.some(id=>!unitById.has(id)))throw Error('invalid learning order');`);
console.log('PASS: learning order covers every unit exactly once.');

r(`for(const u of units)if(!u.entry.hint)throw Error('missing authored initial hint '+u.id);`);
console.log('PASS: all 261 source hints retained; transferable display rules checked separately.');
const pinnedHint=setup();
pinnedHint.run("selectLesson('invite');state.learn=newLearning();state.learn.pinnedEntry={...lesson.entry,hint:''};state.learn.q.input='Would you';state.learn.q.hints=['frame'];view='study';render();");
assert(pinnedHint.run("app.innerHTML.includes('动词原形')&&!app.innerHTML.includes('join us for dinner')"));
assert.equal(pinnedHint.run('state.learn.q.input'),'Would you');
pinnedHint.run("state.learn.q.revealed=true;render()");
assert(!pinnedHint.run("app.innerHTML.includes('想不起来时，先看一点提示')"));
console.log('PASS: old initial snapshot gets a rule hint without losing input; revealed states hide obsolete instructions.');

// Each scope has real content and matching scene/goal classifications.
r(`for(const u of units)for(const scope of u.domains){
 if(!catalog.domains.some(d=>d.id===scope))throw Error('invalid scope '+scope);
 if(!catalog.scenes.some(g=>(g.domain===scope||g.domains?.includes(scope))&&g.children.some(c=>c.units.includes(u.id))))throw Error('missing scene in '+scope+':'+u.id);
}`);
for(const [id,count]of [['ielts',39],['cet4',28],['cet6',30],['toefl',33]])assert.equal(r(`units.filter(u=>u.domains.includes('${id}')).length`),count);
const sharing=setup();sharing.run("domain='work';selectLesson('q-deal-with');state.learn=newLearning();state.learn.q.input='We need to';save();");
assert.equal(sharing.run('domain'),'work');sharing.run("domain='daily';selectLesson('q-deal-with');");assert.equal(sharing.run('state.learn.q.input'),'We need to');
sharing.run("domain='cet6';selectLesson('e-lead-to');state.learn=newLearning();state.learn.q.input='A lack of sleep';save();domain='ielts';selectLesson('e-lead-to');");
assert.equal(sharing.run('state.learn.q.input'),'A lack of sleep');assert.equal(sharing.run('domain'),'ielts');
sharing.run("domain='toefl';view='library';tab='scene';filter='all';subfilter='all';search='';page=1;render()");
assert(sharing.run("app.innerHTML.includes('考试顺利')&&app.innerHTML.includes('按练习目标')&&!app.innerHTML.includes('Academic 图表描述')"));
assert(!sharing.run("units.filter(u=>u.domains.includes('cet4')).some(u=>u.examSkill==='speaking')"));
console.log('PASS: two learning directions, four real exam libraries, correct exam task boundaries, shared progress across scopes.');

r(`for(const u of units.filter(u=>u.id.startsWith('q-')||u.collection==='work-expansion'))if(!catalog.expressionKinds.some(k=>k.units.includes(u.id)))throw Error('missing expression type '+u.id);`);
const writingTone=setup();writingTone.run("selectLesson('e-lead-to');state.learn=newLearning();view='study';render()");
assert(writingTone.run("app.innerHTML.includes('先想，再写。')&&app.innerHTML.includes('试着用英文写')&&!app.innerHTML.includes('先说，再写。')"));
writingTone.run("state.learn.stage='custom';render()");assert(writingTone.run("app.innerHTML.includes('在写作中用到')&&!app.innerHTML.includes('放进你的生活')"));
writingTone.run("domain='toefl';tab='function';filter='all';subfilter='all';view='library';render()");
assert(!writingTone.run("app.innerHTML.includes('展开与论证')"));
console.log('PASS: expanded type coverage and exam-specific instructions/functional navigation.');

// Language-form regression: matchability cannot establish grammatical validity.
const invalidEnglish=/hisn'tes|(?:'ve|'re|'s|'m)n't\b|\b(?:I've|We've|They've|You've) (?:experience|concerns|trouble|to |more time)|\b(?:she|he|it) is (?:been|had)\b/i;
assert(invalidEnglish.test("I'ven't got it."));assert(invalidEnglish.test("I've trouble remembering names."));
assert(!invalidEnglish.test("She is done with the computer."));
const englishForms=JSON.parse(r('JSON.stringify(units.flatMap(u=>[u.entry,...u.learning,...u.review].flatMap(q=>q.answers.map(a=>({id:u.id,q:q.id,a})))))'));
for(const item of englishForms)assert(!invalidEnglish.test(item.a.replace(/[’‘]/g,"'")),item.id+': '+item.a);
assert.equal(r(`window.JUJIAN_WHOLE_REPLACE("I haven't done it.",'I have',"I've")`),"I haven't done it.");
assert.equal(r(`window.JUJIAN_WHOLE_REPLACE('I have trouble.','I have',"I've")`),'I have trouble.');
assert.equal(r(`window.JUJIAN_WHOLE_REPLACE('I have finished it.','I have',"I've")`),"I've finished it.");
r(`for(const [id,qid,answer]of [
 ['e-rise-from','l2','Sales rose from 2 million yuan to 3 million yuan.'],
 ['e-rise-from','r5','Household income rose from $3,000 to $4,000 per month.'],
 ['e-date-back','l1','This tradition dates back to the 19th century.'],
 ['e-cover-area','r4','This museum covers an area of 12,000 square meters.'],
 ['s-pain','l1','I have pain in my chest.']
 ])if(!matches(answer,unitById.get(id).learning.concat(unitById.get(id).review).find(q=>q.id===qid).answers))throw Error('missing natural variant '+id);`);
assert(!r("catalog.scenes.find(g=>g.id==='wellbeing').children.flatMap(c=>c.units).includes('could-request')"));
assert(!r("unitById.get('w-room').domains.includes('daily')"));
assert(r("catalog.scenes.find(g=>g.id==='service').children.find(c=>c.id==='food-shopping').units.includes('d-allergy')"));
assert(r("catalog.scenes.find(g=>g.id==='exam-writing').name==='通用写作基础'"));
console.log('PASS: generated English forms, numeric variants, actual-context scene mapping and task-fit distinctions.');

assert.equal(r(`window.JUJIAN_WHOLE_REPLACE('He is going over his notes.','is not',"isn't")`),'He is going over his notes.');
// Old drafts keep their original question when a lesson's actual task changes.
const oldDraft=setup();
const oldSaved=JSON.parse(oldDraft.run("JSON.stringify({version:2,activeId:'w-double-check',records:{'w-double-check':{...emptyState(),learn:{stage:'exercise',index:1,q:{input:'I will double-check the bank details',revealed:false,hints:['words'],checked:false},results:[]},review:{queue:['r1','r2','r3'],index:0,q:{input:'I have double-checked the dates.',revealed:false,hints:[],checked:false},results:[],retried:[],baseCount:3,scheduled:true}}},ui:{view:'study',domain:'work'}})"));
const migratedDraft=setup(null,oldSaved);
assert.equal(migratedDraft.run('state.learn.q.input'),'I will double-check the bank details');
assert(migratedDraft.run('learningQuestion().answers[0]').startsWith("I'll double-check"));
assert(migratedDraft.run('state.learn.pinnedLesson'));
migratedDraft.run("view='practice';render()");assert(migratedDraft.run('reviewQuestion().zh').includes('我已经'));
migratedDraft.run("state.learn=newLearning();view='study';render()");assert(migratedDraft.run('learningQuestion().answers[0]').startsWith('Could you double-check'));
migratedDraft.run('startReview()');assert(!migratedDraft.run('state.review.pinnedQuestions'));
for(const snapshot of JSON.parse(r('JSON.stringify(Object.values(window.JUJIAN_PREVIOUS_CONTENT))'))){for(const q of [snapshot.entry,...snapshot.learning,...snapshot.review])for(const a of q.answers)assert(!invalidEnglish.test(a),a);}
console.log('PASS: content corrections preserve unfinished old prompts/drafts; new rounds use corrected tasks.');
const examIndex=JSON.parse(fs.readFileSync(root+'exam-taxonomy.json','utf8'));
assert.equal(examIndex.units.length,44);
for(const item of examIndex.units){const actual=JSON.parse(r(`JSON.stringify(unitById.get('${item.id}'))`));assert.deepEqual(item.domains,actual.domains);assert.equal(item.meaning,actual.meaning);assert(r(`catalog.functions.find(g=>g.id==='${item.functionGroup}').children.find(t=>t.id==='${item.functionSubgroup}').units.includes('${item.id}')`));}
console.log('PASS: published exam metadata agrees with actual content and functional classification.');
// Continuation follows the selected scope and does not discard saved work.
const flow=setup();const f=flow.run;
const clickFlow=(action,extra={})=>flow.handlers.click({target:{closest:selector=>selector==='[data-action]'?{dataset:{action,...extra}}:null}});
f("view='library';domain='work';tab='scene';filter='all';subfilter='all';search='';selectLesson('w-previous');state.learn=newLearning();view='study';render();");
assert(f('app.innerHTML.includes(\'标记为已掌握\')'));
assert(!f('app.innerHTML.includes(\'menu-toggle\')'));
const nextID=f('nextLearningUnit().id');assert(f('nextLearningUnit().domains.includes(\'work\')'));
f(`store.records['${nextID}']=emptyState();store.records['${nextID}'].learn={...newLearning(),stage:'exercise',index:2,q:{...newQuestionState(),input:'Keep this draft'},results:[]};`);
clickFlow('master');clickFlow('confirm-master');assert.equal(f('view'),'mastery');assert(f('app.innerHTML.includes(\'学习\')'));
clickFlow('undo-master');assert.equal(f('view'),'study');assert.equal(f('state.mastered'),false);
clickFlow('master');clickFlow('confirm-master');
// Changing unrelated UI state cannot redirect the saved learning sequence.
f("domain='daily';filter='all';search='unrelated';");assert.equal(f('nextLearningUnit().id'),nextID);
clickFlow('next-learning',{next:nextID});assert.equal(f('lesson.id'),nextID);assert.equal(f('domain'),'work');assert.equal(f('state.learn.q.input'),'Keep this draft');assert.equal(f('state.learn.index'),2);
const flowReload=setup(null,JSON.parse(flow.map.get('jujian.library.v2')));assert.equal(flowReload.run('state.learn.origin.domain'),'work');assert.equal(flowReload.run('state.learn.q.input'),'Keep this draft');
f("view='library';domain='daily';search='Have you ever';filter='all';subfilter='all';selectLesson('ever');state.learn=newLearning();view='study';");
assert.equal(f('nextLearningUnit()'),undefined);assert(f('continuationMarkup().includes(\'返回当前选择\')'));
f("domain='work';search='stale';");clickFlow('origin-library');assert.equal(f('domain'),'daily');assert.equal(f('search'),'Have you ever');
f("selectLesson('ever');state.enrolled=true;state.schedule.due=Date.now()-100;selectLesson('order');state.enrolled=true;state.schedule.due=Date.now()+999999;selectLesson('w-previous');state.mastered=false;state.enrolled=true;state.review={queue:['r1'],index:0,q:newQuestionState()};state.schedule.due=Date.now()+999999;selectLesson('order');");assert.equal(f('nextReviewUnit().id'),'w-previous');
clickFlow('next-review',{next:'w-previous'});assert.equal(f('view'),'practice');assert.equal(f('state.review.queue[0]'),'r1');
assert(f("promptMarkup({zh:'朋友说今天太累不想聊天，你接受：可以理解。'}).includes('试着用英文')"));
assert(f("promptMarkup({zh:'今天晚上我在家。'}).includes('今天晚上我在家。')"));
assert(f("promptMarkup({zh:'这很合理。',scene:'讨论出发时间',dialogue:'The roads will be busy.'}).includes('对方说')"));
console.log('PASS: visible mastery, undo, next learning/review, stable origin across scopes/reload, exact-search boundary, unfinished input preservation, layered prompts.');
const sameScope=setup(null,{version:2,activeId:'q-deal-with',records:{'q-deal-with':{learn:{stage:'entry',index:0,q:{input:'draft',hints:[]},results:[]}}},ui:{view:'study',domain:'ielts'}});
sameScope.run("selectLesson('q-deal-with')");assert(sameScope.run('lesson.domains.includes(domain)'));assert(sameScope.run('nextLearningUnit().domains.includes(lesson.domain)'));
f("selectLesson('ever');state.mastered=false;view='mastery';render();");assert.notEqual(f('view'),'mastery');
f("view='study';state.learn.stage='done';render();");clickFlow('detail');assert.equal(f('view'),'detail');clickFlow('return-detail');assert.equal(f('view'),'study');
f("state.mastered=true;state.learn.stage='exercise';state.learn.q.input='Recovered draft';view='mastered';render();");clickFlow('restore');assert.equal(f('view'),'study');assert.equal(f('state.learn.q.input'),'Recovered draft');
console.log('PASS: same-ID scope repair, no stale mastered confirmation, return from own examples, restore directly into saved practice.');

assert(f("promptMarkup({zh:'现场有人需要救护车，你请旁人帮忙：你能替我叫救护车吗？'}).includes('试着用英文')"));
// Approved pilots: real UI actions, distinct task evidence, and reachable personal drafts.
let pilotEnv=setup();let pRun=pilotEnv.run;
const pClick=(action,extra={})=>pilotEnv.handlers.click({target:{closest:selector=>selector==='[data-action]'?{dataset:{action,...extra}}:null}});
for(const id of ['p-in-the-evening','p-done-with','p-fair-enough']){
 pRun(`selectLesson('${id}');view='library';state.learn=newLearning();view='study';render();`);
 assert(!pRun('app.innerHTML.includes(lesson.expression)'));
 const scenario=pRun('scenarioUnit()');
 if(scenario){assert(!pRun('app.innerHTML.includes(\'id="answer"\')'));pClick('reveal');}
 else {pRun('state.learn.q.input=lesson.entry.answers[0]');pClick('check');}
 assert.equal(pRun('state.learn.stage'),'intro');assert(!pRun('app.innerHTML.includes(\'data-action="entry-intro"\')'));
 if(!scenario){pClick('edit-entry');assert.equal(pRun('state.learn.stage'),'entry');assert.equal(pRun('state.learn.q.revealed'),false);pClick('check');}
 pClick('intro-next');
 for(let i=0;i<5;i++){
  const type=pRun('questionType(learningQuestion())');
  if(type==='input'){pRun('state.learn.q.input=learningQuestion().answers.at(-1)');pClick('check');assert(pRun('app.innerHTML.includes(\'答对了\')'));pClick('grade',{grade:'good'});}
  else if(type==='choice'){
   assert(!pRun('app.innerHTML.includes(\'id="answer"\')'));const correct=pRun('learningQuestion().correctChoice');
   pClick('choose-answer',{choice:correct});assert(pRun('app.innerHTML.includes(\'判断正确\')'));assert(!pRun('app.innerHTML.includes(\'data-action="grade"\')'));
   const saved=JSON.parse(pilotEnv.map.get('jujian.library.v2'));pilotEnv=setup(null,saved);pRun=pilotEnv.run;assert.equal(pRun('state.learn.q.choice'),correct);pClick('choice-next');
  }else{assert(!pRun('app.innerHTML.includes(\'id="answer"\')'));pClick('reveal');pClick('grade',{grade:'good'});}
  assert.equal(pRun('state.learn.index'),i+1);
 }
 assert.equal(pRun('state.learn.stage'),'custom');
 if(scenario)pRun("state.draft.scene='朋友想独自休息';state.draft.intent='';");else pRun("state.draft.zh='我晚上处理这件事';state.draft.en='';");
 pClick('finish-learn');assert.equal(pRun('state.learn.stage'),'done');assert.equal(pRun('state.custom.length'),0);assert(pRun('app.innerHTML.includes(\'继续填写草稿\')'));
 pClick('resume-custom');assert.equal(pRun('state.learn.stage'),'custom');assert(pRun('draftPresent()'));
 if(scenario){pRun("state.draft.intent='我愿意尊重他';");pClick('save-scenario');assert.equal(pRun('state.custom[0].kind'),'scenario');assert(!pRun('app.innerHTML.includes(\'id="custom-en"\')'));}
 else{pRun("state.draft.en='I work on it in the evening.'");pClick('save-custom');}
 assert.equal(pRun('state.custom.length'),1);assert(!pRun('draftPresent()'));pClick('continue-create');assert.equal(pRun('state.learn.savedCustom'),false);pClick('finish-learn');
 pClick('detail');if(scenario){assert(pRun('app.innerHTML.includes(\'我的场景\')'));pClick('edit-custom',{id:pRun('state.custom[0].id')});assert(!pRun('dialog.innerHTML.includes(\'edit-en\')'));pClick('close-dialog');}pClick('return-detail');assert.equal(pRun('view'),'study');
 pClick('start-review');let rounds=0;
 while(pRun('!!state.review')){
  const type=pRun('questionType(reviewQuestion())');
  const before=pRun('JSON.stringify([state.review.index,state.review.queue,state.review.retried])');pClick('supplement');pClick('close-dialog');assert.equal(pRun('JSON.stringify([state.review.index,state.review.queue,state.review.retried])'),before);
  if(type==='choice'){const wrong=pRun('reviewQuestion().choices.find(x=>x.id!==reviewQuestion().correctChoice).id');pClick('choose-answer',{choice:wrong});pClick('choice-next');}
  else{pClick('reveal');pClick('grade',{grade:'hard'});}
  if(++rounds>5)throw Error('unbounded review');
 }
 assert.equal(rounds,5);assert.equal(pRun('view'),'summary');assert.equal(pRun('state.summary.results.length'),5);
 if(scenario){assert(!pRun('app.innerHTML.includes(\'独立回忆（自评）\')'));assert(pRun('app.innerHTML.includes(\'判断答对\')'));}
}
// Existing Fair Enough rounds and personal English remain stored, without reintroducing typing.
const oldFairEnv=setup();oldFairEnv.run("selectLesson('p-fair-enough');state.learn=newLearning();state.learn.contentRevision='1.4.0';state.learn.stage='exercise';state.learn.index=2;state.learn.q.input='Keep my old English';state.custom=[{id:'c-old-fair',zh:'我接受朋友的理由',en:'Fair enough.'}];store.pilotRevision=null;save();");
const oldFairReload=setup(null,JSON.parse(oldFairEnv.map.get('jujian.library.v2')));
oldFairReload.run("view='study';render()");assert.equal(oldFairReload.run('state.learn.q.input'),'Keep my old English');assert(oldFairReload.run('!!state.learn.pinnedLearning'));assert(!oldFairReload.run('app.innerHTML.includes(\'id="answer"\')'));
assert.equal(oldFairReload.run('state.custom[0].en'),'Fair enough.');assert.equal(oldFairReload.run('questionType(pool().find(q=>q.id===\'c-old-fair\'))'),'recall');
console.log('PASS: three pilot profiles, opt-in hints, actual answer/choice actions, snapshot refresh, no Fair typing, personal scenario edit/review, reachable drafts, old progress preservation, bounded review and accurate result labels.');

// Editing an existing personal scene must not consume a separate unfinished draft.
pRun("state.draft.scene='另一个没写完的场景';state.draft.intent='未完成的态度';");
const existingScene=pRun('state.custom[0].id');pClick('detail');pClick('edit-custom',{id:existingScene});
pilotEnv.el('edit-scene').value='改好的旧场景';pilotEnv.el('edit-intent').value='我愿意接受';pClick('commit-scenario',{id:existingScene});
assert.equal(pRun('state.custom[0].scene'),'改好的旧场景');assert.equal(pRun('state.draft.scene'),'另一个没写完的场景');assert.equal(pRun('state.draft.intent'),'未完成的态度');
pRun("view='library';search='Fair enough';filter='all';subfilter='all';selectLesson('p-fair-enough');state.learn.origin=captureLearningOrigin();view='study';state.learn.stage='done';render();");
assert(pRun("continuationMarkup().includes('看看其他板块')"));pClick('browse-other');assert.equal(pRun('search'),'');assert.equal(pRun('domain'),'daily');
console.log('PASS: editing personal scenes preserves other drafts; widening an exhausted selection is explicit.');

// Reading hierarchy preserves required information without repeating guidance.
const hierarchy=setup();const h=hierarchy.run;
h("selectLesson('p-done-with');state.learn=newLearning();view='study';render()");
assert.equal(h("app.innerHTML.split(esc(lesson.meaning)).length-1"),1);
assert(!h("app.innerHTML.includes('meaning-title')||app.innerHTML.includes('已熟练的表达可以')||app.innerHTML.includes('先想一想，你会怎么说')"));
assert(h("app.innerHTML.includes('你想接着用同事面前的电脑。')&&app.innerHTML.includes('试着用英文问')&&app.innerHTML.includes('你用完这台电脑了吗？')"));
assert(h("app.innerHTML.indexOf('prompt-background')<app.innerHTML.indexOf('prompt-task')"));
assert(h(`app.innerHTML.indexOf('composition-help')>app.innerHTML.indexOf('input-toolbar')&&app.innerHTML.indexOf('composition-help')<app.innerHTML.indexOf('id="answer"')`));
h("selectLesson('p-in-the-evening');state.learn=newLearning();state.learn.stage='exercise';render()");
assert(h("app.innerHTML.includes('I usually read ____.')&&app.innerHTML.includes('填入整个时间语块')&&app.innerHTML.includes('先说完整句。')"));
h("selectLesson('p-fair-enough');state.learn=newLearning();view='study';render()");
assert(h(`app.innerHTML.includes('这时，你会怎么回应？')&&app.innerHTML.includes('你的态度')&&!app.innerHTML.includes('id="answer"')`));
h("state.learn.stage='exercise';state.learn.index=2;render()");
assert(h("app.innerHTML.indexOf('prompt-task')<app.innerHTML.indexOf('prompt-candidates')"));
assert(h("promptMarkup({zh:'原题必须保留',type:'recall'}).includes('原题必须保留')"));
assert(h("!promptMarkup({zh:'今天晚上我在家。'}).includes('prompt-background')"));
console.log('PASS: one task hierarchy, preserved context and legacy text, correct input/recall labels, adjacent comparison choices, and task-specific instructions.');

}
