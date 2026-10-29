'use strict';
const assert=require('node:assert');
const {setup}=require('./validate.cjs');
const e=setup(),r=e.run;
const click=(action,extra={})=>e.handlers.click({target:{closest:s=>s.startsWith('a[')?null:{dataset:{action,...extra}}}});
r("selectLesson('c28-make-do');domain='cecilia';filter='2026-10-28';state.learn=newLearning();view='study';state.learn.q.input='An unfinished thought';state.learn.q.hints=['words'];save();render();var beforeNavigation=JSON.stringify(state.learn)");
assert(r('app.innerHTML').includes('aria-label="当前位置"'));
assert(r('app.innerHTML').includes('aria-current="page"'));
assert(r('app.innerHTML').includes('data-action="cecilia-dates"'));
assert(r('app.innerHTML').includes('data-day="2026-10-28"'));
click('cecilia-date',{day:'2026-10-28'});assert.equal(r('view'),'library');assert.equal(r('filter'),'2026-10-28');assert.equal(r('JSON.stringify(state.learn)'),r('beforeNavigation'));
click('cecilia-open',{lesson:'c28-make-do',day:'2026-10-28',force:'1'});assert.equal(r('state.learn.q.input'),'An unfinished thought');assert.deepEqual(Array.from(r('state.learn.q.hints')),['words']);
// Checking a translation, revealing it and checking a saved example are distinct states.
r("selectLesson('ever');state.learn=newLearning();view='study';render()");
assert(r('app.innerHTML').includes('>查看答案</button>'));assert(!r('app.innerHTML').includes('查看表达'));
r('state.learn.q.input=lesson.entry.answers[0]');click('check');assert(r('app.innerHTML').includes('feedback-success'));
r("state.learn=newLearning();state.learn.q.input='An unlisted expression';view='study'");click('check');assert(r('app.innerHTML').includes('feedback-attention'));assert(!r('app.innerHTML').includes('这次选错了'));
r("state.learn=newLearning();view='study'");click('reveal');assert(r('app.innerHTML').includes('feedback-neutral'));assert(!r('app.innerHTML').includes('feedback-success'));
r("state.custom=[{id:'c-ui-saved',zh:'我自己的意思',en:'My own sentence.'}];state.enrolled=true;state.review={queue:['c-ui-saved'],index:0,q:newQuestionState(),results:[],retried:[],baseCount:1};view='practice';state.review.q.input='My own sentence.'");click('check');assert(r('app.innerHTML').includes('feedback-saved'));assert(!r('app.innerHTML').includes('feedback-success'));
// A choice has an authored correct answer, so only this case declares a wrong answer.
r("selectLesson('p-fair-enough');state.learn=newLearning();state.learn.stage='exercise';view='study';render()");
click('choose-answer',{choice:r('learningQuestion().choices.find(c=>c.id!==learningQuestion().correctChoice).id')});assert(r('app.innerHTML').includes('这次选错了'));assert(r('app.innerHTML').includes('feedback-incorrect'));assert(r('app.innerHTML').includes('is-incorrect'));
click('choice-next');assert.equal(r('state.learn.index'),1);
// Initial pilot comparisons stay neutral about free translation validity, with a visible attention state.
r("selectLesson('p-done-with');state.learn=newLearning();view='study';state.learn.q.input='An unlisted expression'");click('check');assert(r('app.innerHTML').includes('entry-result-attention'));assert(!r('app.innerHTML').includes('entry-result-success'));
console.log('PASS: breadcrumb return preserves current question/input/hints; answer/check labels; success, reveal, comparison, saved example and wrong-choice feedback; choice continuation.');
// Home hierarchy is stable; both entrances always retain two distinct actions.
{
 const h=setup(),hr=h.run;
 hr("view='home';render();var fixedHero=app.innerHTML.match(/<section class=\"home-intro\">[\\s\\S]*?<\\/section>/)[0]");
 let markup=hr('app.innerHTML');assert.equal((markup.match(/class="home-card home-/g)||[]).length,2);assert.equal((markup.match(/class="button home-action"/g)||[]).length,4);
 assert(!markup.includes('daily-home-entry'));assert(!markup.includes('最近更新'));assert(!markup.includes('接着上次'));assert(!markup.includes('backup-reminder'));
 assert(markup.includes('disabled aria-describedby="home-review-empty"'));assert(markup.includes('disabled aria-describedby="home-learn-empty"'));
 hr("selectLesson('p-done-with');state.learn=newLearning();state.learn.stage='exercise';state.learn.index=2;state.learn.q.input='Progress preserved';state.note={text:'My note',updatedAt:Date.now()};enrolled();startReview();state.review.q.input='Review draft';state.review.index=1;view='home';save();render()");
 assert.equal(hr('app.innerHTML.match(/<section class="home-intro">[\\s\\S]*?<\\/section>/)[0]'),hr('fixedHero'));
 assert(!hr('app.innerHTML').includes('disabled aria-describedby='));
 h.handlers.click({target:{closest:s=>s.startsWith('a[')?null:{dataset:{action:'continue-learning-home'}}}});
 assert.equal(hr('state.learn.q.input'),'Progress preserved');assert.equal(hr('state.learn.index'),2);assert.equal(hr('state.note.text'),'My note');
 h.handlers.click({target:{closest:s=>s.startsWith('a[')?null:{dataset:{action:'continue-review-home'}}}});
 assert.equal(hr('state.review.q.input'),'Review draft');assert.equal(hr('state.review.index'),1);
 // Progress categories do not count skipped work as learnt. Duplicate IDs count once.
 hr("var scopeIds=['ever','p-done-with','p-fair-enough'];for(const id of scopeIds){const r=store.records[id]=record(id);r.learn=null;r.enrolled=false;r.mastered=false;r.review=null;}record('ever').learn={stage:'done',results:[{grade:'good'}]};record('p-done-with').learn={stage:'done',results:[{grade:'skip'}]};record('p-fair-enough').mastered=true");
 let counts=JSON.parse(hr('JSON.stringify(libraryProgress([...scopeIds,scopeIds[0]]))'));assert.equal(counts.total,3);assert.equal(counts.completed,1);assert.equal(counts.mastered,1);assert.equal(counts.skipped,1);
 hr("record('ever').learn={stage:'exercise',results:[],origin:{domain:'cecilia',dateId:'2026-10-28'}};record('ever').enrolled=true;record('ever').schedule.due=1;record('ever').review={index:1};record('ever').dailyVisits={'2026-10-28':{status:'skip'}}");
 counts=JSON.parse(hr("JSON.stringify(libraryProgress(['ever'],'2026-10-28'))"));assert.equal(counts.completed,0);assert.equal(counts.skipped,1);assert.equal(counts.due,1);assert.equal(counts.pendingReview,1);
 counts=JSON.parse(hr("JSON.stringify(libraryProgress(['ever'],'2026-10-29'))"));assert.equal(counts.active,0);assert.equal(counts.completed,0);assert.equal(counts.skipped,0);
 hr("record('ever').dailyVisits['2026-10-28']={status:'done',attempted:true,at:Date.now()};record('ever').learn={stage:'entry',results:[],origin:{domain:'cecilia',dateId:'2026-10-29'}}");assert.equal(hr("libraryProgress(['ever'],'2026-10-28').completed"),1);
 hr("record('ever').dailyVisits['2026-10-28'].attempted=false");assert.equal(hr("libraryProgress(['ever'],'2026-10-28').completed"),0);
 assert(hr("ceciliaNavigation().includes('更新于')&&!ceciliaNavigation().includes('按日期学习')"));
 console.log('PASS: fixed home philosophy, symmetric four actions, empty/resume states, notes preserved, precise unique scope/date progress and library update labels.');
}
