const assert=require('assert');
const {setup}=require('./validate.cjs');
const key='jujian.library.v2';
const click=(e,action,data={})=>e.handlers.click({target:{closest:selector=>selector==='[data-action]'?{dataset:{action,...data}}:null}});
const env=setup(),r=env.run;
const day='2026-10-28';
assert(r(`ceciliaDay('${day}').items.length>=90`));
r(`for(const d of ceciliaDays())for(const item of d.items){if(!item.expression||!item.meaning)throw Error('incomplete material');if(item.unitId&&!unitById.has(item.unitId))throw Error('missing '+item.unitId);if(!item.unitId&&!(item.note||item.usageNote||item.editorNote))throw Error('unaccounted '+item.expression);}for(const u of units.filter(u=>u.id.startsWith('c28-'))){if(u.domains.join()!=='cecilia')throw Error('public leakage '+u.id);if(!ceciliaIds('${day}').includes(u.id))throw Error('unlinked '+u.id);}`);
assert.equal(r("units.filter(u=>u.domain==='daily').length"),137);
assert.equal(r("units.filter(u=>u.domain==='work').length"),80);
click(env,'library');click(env,'domain',{domain:'cecilia'});assert(r("app.innerHTML.includes('每日材料')"));
click(env,'cecilia-date',{day});assert.equal(r('filter'),day);assert(r("app.innerHTML.includes('查看当天原始材料')"));
// Existing unfinished public practice is reused, never replaced by a new copy.
r("selectLesson('used-to');state.learn=newLearning();state.learn.stage='exercise';state.learn.index=2;state.learn.q.input='My existing draft';save();");
click(env,'cecilia-open',{lesson:'used-to',day,force:'1'});
assert.equal(r('lesson.id'),'used-to');assert.equal(r('state.learn.q.input'),'My existing draft');assert.equal(r('state.learn.index'),2);assert.equal(r('state.learn.origin.dateId'),day);
r("view='home';render()");assert(r("app.innerHTML.includes('Cecilia')"));click(env,'continue-learning-home');assert.equal(r('filter'),day);assert.equal(r('state.learn.q.input'),'My existing draft');
r('finishLearning()');assert.equal(r(`ceciliaVisit('used-to','${day}').status`),'done');assert(r(`nextLearningUnit()===undefined||ceciliaIds('${day}').includes(nextLearningUnit().id)`));
// Mastery remains global; today's status is an explicit, separate decision.
r("selectLesson('p-nerves');state.mastered=true;save()");assert(!r(`ceciliaVisit('p-nerves','${day}')`));
click(env,'cecilia-open',{lesson:'p-nerves',day,force:'1'});assert.equal(r('view'),'study');assert(r('state.mastered&&state.learn.dailyReplay'));r('finishLearning()');assert(r('state.mastered'));assert.equal(r(`ceciliaVisit('p-nerves','${day}').status`),'done');
// Another date referencing the same ID starts unhandled without duplicating mastery.
r(`window.BW_DAILY_MATERIALS.push({id:'2026-10-29',date:'2026-10-29',items:[{expression:'get on someone’s nerves',meaning:'让人心烦',unitId:'p-nerves'}]})`);
assert.equal(r("ceciliaProgress('2026-10-29').handled"),0);
click(env,'cecilia-skip',{lesson:'p-nerves',day:'2026-10-29'});assert.equal(r("ceciliaProgress('2026-10-29').handled"),1);assert(r("record('p-nerves').mastered"));
// Review stays in its selected date across rounds and reloads.
r("selectLesson('order');enrolled();selectLesson('used-to');enrolled();");click(env,'cecilia-review-day',{day});assert.equal(r('view'),'review');assert(!r("app.innerHTML.includes('data-lesson=\"order\"')"));
click(env,'start-review',{lesson:'used-to'});assert.equal(r('state.review.origin.dateId'),day);r("state.review.q.input='Review draft';save()");
const saved=JSON.parse(env.map.get(key)),restored=setup(null,saved);assert.equal(restored.run('state.review.q.input'),'Review draft');restored.run("view='home';render()");click(restored,'continue-review-home');assert.equal(restored.run('state.review.origin.dateId'),day);assert.equal(restored.run('state.review.q.input'),'Review draft');
restored.run("while(state.review)grade('good')");assert.equal(restored.run('state.summary.origin.dateId'),day);assert(restored.run(`!nextReviewUnit()||ceciliaIds('${day}').includes(nextReviewUnit().id)`));
// Portable progress carries daily processing and the date context.
const deep=setup();deep.ctx.location.hash='#library/cecilia/2026-10-28';deep.run('initializeNavigation();render()');assert.equal(deep.run('domain'),'cecilia');assert.equal(deep.run('filter'),day);assert(deep.run("routeURL('library').endsWith('#library/cecilia/2026-10-28')"));const beforeDateBack=deep.history.entries.length;click(deep,'cecilia-dates');assert.equal(deep.run('filter'),'all');assert.equal(deep.history.entries.length,beforeDateBack+1);
const text=restored.run('JSON.stringify(progressBackup())'),portable=setup();assert(portable.run(`previewProgressImport(${JSON.stringify(text)})`));assert(portable.run("applyProgressImport('merge')"));assert.equal(portable.run(`record('used-to').dailyVisits['${day}'].status`),'done');assert.equal(portable.run("record('used-to').summary.origin.dateId"),day);
const bad=JSON.parse(text);bad.data.records['used-to'].dailyVisits[day].status='invalid';assert(!portable.run(`previewProgressImport(${JSON.stringify(JSON.stringify(bad))})`));
const brokenHints=JSON.parse(text);brokenHints.data.records['used-to'].learn.pinnedEntry={id:'entry',zh:'坏提示',answers:['Test.'],lexicalHints:[null]};assert(!portable.run(`previewProgressImport(${JSON.stringify(JSON.stringify(brokenHints))})`));
console.log('PASS: all daily materials accounted for; public libraries isolated; per-date visits versus shared mastery; exact continuation; scoped review; portable daily progress and malformed-data rejection.');

// The daily entry is a directory, not a shortcut hardwired to the latest date.
const directory=setup(),dr=directory.run;
dr("view='home';render()");
assert(dr("app.innerHTML.includes('data-action=\"cecilia-dates\"')"));
assert(!dr("app.innerHTML.includes('data-action=\"cecilia-date\"')"));
click(directory,'cecilia-dates');
assert.equal(dr('domain'),'cecilia');assert.equal(dr('filter'),'all');
assert(dr("app.innerHTML.includes('按日期选择材料')"));
assert(dr("app.innerHTML.includes('2026年10月28日')"));
dr("window.BW_DAILY_MATERIALS.push({id:'2026-10-29',date:'2026-10-29',items:[{expression:'get on someone’s nerves',meaning:'让人心烦',unitId:'p-nerves'}]});render()");
assert(dr("app.innerHTML.indexOf('data-day=\"2026-10-29\"')<app.innerHTML.indexOf('data-day=\"2026-10-28\"')"));
click(directory,'cecilia-date',{day:'2026-10-29'});
assert.equal(dr('filter'),'2026-10-29');assert(dr("app.innerHTML.includes('返回日期目录')"));
click(directory,'cecilia-dates');assert.equal(dr('filter'),'all');
click(directory,'domain',{domain:'daily'});assert.equal(dr('domain'),'daily');
click(directory,'domain',{domain:'cecilia'});assert.equal(dr('filter'),'all');
assert(dr("app.innerHTML.includes('2026年10月29日')&&app.innerHTML.includes('2026年10月28日')"));
assert(dr("routeURL('library').endsWith('#library/cecilia')"));
console.log('PASS: visible Cecilia directory entry; new dates appear automatically in descending order; both dates open and return independently.');

click(directory,'cecilia-learning-root');assert.equal(dr('domain'),'daily');assert.equal(dr('filter'),'all');
assert(dr("app.innerHTML.includes('每日语料 · 按日期学习')"));

click(directory,'cecilia-dates');const beforeRootBack=directory.history.entries.length;click(directory,'cecilia-learning-root');assert.equal(directory.history.entries.length,beforeRootBack+1);
