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
