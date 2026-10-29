'use strict';
const assert=require('node:assert');
const {setup}=require('./validate.cjs');
const e=setup(),r=e.run;
const click=(action,extra={})=>e.handlers.click({target:{closest:s=>s.startsWith('a[')?null:{dataset:{action,...extra}}}});
const saved=()=>JSON.parse(e.map.get('jujian.library.v2'));
r("selectLesson('p-done-with');state.learn=newLearning();state.learn.stage='exercise';view='study';render()");
// No prompt before a learning attempt. After checking: entry exists and editing never advances the question.
assert(!r('app.innerHTML').includes('记个要点'));
r('state.learn.q.input=learningQuestion().answers[0]');click('check');assert(r('app.innerHTML').includes('记个要点'));
click('notes-edit',{noteKind:'unit',noteId:'',noteSurface:'question',noteLesson:'p-done-with'});
assert(r('app.innerHTML').includes('note-input'));
e.handlers.input({target:{dataset:{noteEditor:'true',noteKind:'unit',noteId:'',noteLesson:'p-done-with'},value:'勿漏 with。\nbe 随时间变化。',closest:()=>null}});
assert.equal(saved().records['p-done-with'].note.text,'勿漏 with。\nbe 随时间变化。');
assert.equal(r('state.learn.index'),0);
click('grade',{grade:'good'});assert.equal(r('state.learn.index'),1);
const reload=setup(null,saved());assert.equal(reload.run("record('p-done-with').note.text"),'勿漏 with。\nbe 随时间变化。');assert.equal(reload.run('state.learn.index'),1);
// Review starts with a collapsed note, only reading it before the answer marks assisted recall.
r('enrolled();startReview()');assert(r('app.innerHTML').includes('我的笔记'));assert(!r('app.innerHTML').includes('勿漏 with。'));
click('notes-toggle',{noteKind:'unit',noteId:'',noteSurface:'question',noteLesson:'p-done-with'});assert(r('app.innerHTML').includes('勿漏 with。'));assert.equal(r('state.review.q.noteBeforeSeen'),true);
click('reveal');assert(r('app.innerHTML').includes('勿漏 with。'));click('grade',{grade:'good'});assert.equal(r('state.review.results[0].noteHelp'),true);assert.equal(r('state.review.results[0].help'),true);
r('state.review.q.revealed=true;render()');click('notes-edit',{noteKind:'unit',noteId:'',noteSurface:'question',noteLesson:'p-done-with'});r("saveNoteText('unit','','新的语块笔记')");assert.equal(r('state.review.q.noteBeforeSeen'),undefined);
// Personal draft notes persist without requiring an English sentence; saving attaches them to that example.
r("state.review=null;state.learn.stage='custom';view='study';state.draft={zh:'我用完电脑了。',en:'I am done with the computer.'};saveNoteText('draft','','这条例句只说用完，不是物品耗尽。');render()");
assert(r('app.innerHTML').includes('custom-layout'));click('save-custom');assert.equal(r('state.custom[0].note.text'),'这条例句只说用完，不是物品耗尽。');assert.equal(r('state.draft.note'),undefined);
r("state.draft={zh:'第二条草稿',en:'',note:{text:'未完成例句的笔记',updatedAt:1}};saveNoteText('custom',state.custom[0].id,'这句要保留 with the computer');save()");
assert.equal(r('state.draft.note.text'),'未完成例句的笔记');assert.equal(r('state.custom.length'),1);
// Both shared expression and matching personal note show after a personal review, never on unrelated questions.
r("state.review={queue:[state.custom[0].id],index:0,q:newQuestionState(),results:[],retried:[],baseCount:1,scheduled:true};view='practice';render()");
assert(!r('app.innerHTML').includes('这句要保留 with the computer'));
r('state.review.q.revealed=true;render()');assert(r('app.innerHTML').includes('这句要保留 with the computer'));assert(r('app.innerHTML').includes('新的语块笔记'));
r("selectLesson('ever');state.learn=newLearning();state.learn.stage='exercise';state.learn.q.revealed=true;view='study';render()");assert(!r('app.innerHTML').includes('新的语块笔记'));
// Scene creation and scene review also retain individual notes.
r("selectLesson('p-fair-enough');state.learn=newLearning();state.learn.stage='custom';view='study';state.draft.scene='朋友想改到明天见面';state.draft.intent='接受理由';saveNoteText('draft','','先理解对方的理由，再接受');");click('save-scenario');assert.equal(r('state.custom[0].note.text'),'先理解对方的理由，再接受');assert.equal(r('state.draft.note'),undefined);
r("state.learn.stage='done';view='detail';render()");assert(r('app.innerHTML').includes('personal-detail'));assert(r('app.innerHTML').includes('这个场景的笔记'));
// Full portable backup, replace/undo and a legacy backup without notes.
const payload=r('JSON.stringify(progressBackup())');const target=setup(),tr=target.run;
tr(`previewProgressImport(${JSON.stringify(payload)});applyProgressImport('replace')`);assert.equal(tr("record('p-done-with').custom[0].note.text"),'这句要保留 with the computer');assert.equal(tr("record('p-done-with').draft.note.text"),'未完成例句的笔记');assert.equal(tr("record('p-fair-enough').custom[0].note.text"),'先理解对方的理由，再接受');
tr("selectLesson('p-done-with');saveNoteText('unit','','导入前的笔记')");tr(`previewProgressImport(${JSON.stringify(payload)});applyProgressImport('replace');undoProgressImport()`);assert.equal(tr("record('p-done-with').note.text"),'导入前的笔记');
const legacy=saved();for(const x of Object.values(legacy.records)){delete x.note;delete x.draft.note;for(const c of x.custom)delete c.note;}assert.doesNotThrow(()=>tr(`checkedProgress(${JSON.stringify(legacy)})`));
const bad=saved();bad.records['p-done-with'].note={text:123,updatedAt:1};assert.throws(()=>tr(`checkedProgress(${JSON.stringify(bad)})`));
// An emptied note is a real edit and must not be revived from an older backup on merge.
r("selectLesson('p-done-with');saveNoteText('unit','','')");assert.equal(r("recordHasProgress({note:{text:'only note',updatedAt:1}})"),true);const old=JSON.parse(payload).data;r(`previewProgressImport(${JSON.stringify(payload)});applyProgressImport('merge')`);assert.equal(r("record('p-done-with').note.text"),'');
// Notes are plain text, not executable markup, and failed persistence is reported honestly.
r("saveNoteText('unit','','<img src=x onerror=alert(1)>');state.review=null;state.learn.stage='exercise';state.learn.q.revealed=true;view='study';render()");assert(!r('app.innerHTML').includes('<img src=x'));assert(r('app.innerHTML').includes('&lt;img'));
const blocked=setup(null,null,{failWrites:true});assert.equal(blocked.run("saveNoteText('unit','','quota failure')"),false);
// Saving notes uses the same keyboard protection as other multiline personal fields.
let pressed=0,prevented=0;assert.equal(r('state.learn.index')>=0,true);e.ctx.noteTest={key:'Enter',metaKey:true,target:{dataset:{noteEditor:'true'},closest:()=>({querySelector:()=>({click:()=>pressed++})})},preventDefault:()=>prevented++};assert.equal(r('handleNoteKeydown(noteTest)'),true);assert.equal(pressed,1);assert.equal(prevented,1);e.ctx.noteTest.metaKey=false;assert.equal(r('handleNoteKeydown(noteTest)'),false);
// AI copy prompts contain the intention, required target and a concise word/grammar explanation request.
r("selectLesson('p-done-with')");const prompt=r("personalCheckPrompt({zh:'我做完了',en:'I done'})");assert(prompt.includes('be done with'));assert(prompt.includes('I done'));assert(prompt.includes('关键单词'));assert(prompt.includes('句式语法'));assert(prompt.includes('最多3点'));assert(!prompt.includes('只给英文'));
console.log('PASS: notes autosave, advance/reload, collapsed recall, personal examples/scenes, backup/undo/legacy, deletion, failed saves, escaping, shortcuts and concise AI explanations.');

// Choice results expose the same note entry and retain it through immediate next-question navigation.
const choiceFlow=setup(),cr=choiceFlow.run;const choose=(action,extra={})=>choiceFlow.handlers.click({target:{closest:s=>s.startsWith('a[')?null:{dataset:{action,...extra}}}});
cr("selectLesson('p-fair-enough');state.learn=newLearning();state.learn.stage='exercise';view='study';render()");
choose('choose-answer',{choice:cr('learningQuestion().correctChoice')});assert(cr('app.innerHTML').includes('记个要点'));cr("saveNoteText('unit','','这句是接受理由，不是热情赞同。')");choose('choice-next');assert.equal(cr('state.learn.index'),1);assert.equal(cr('state.note.text'),'这句是接受理由，不是热情赞同。');
assert(!r("personalCheckPrompt({zh:'我做完了'})").includes('我的尝试'));
assert(r('progressCounts(store).notes')>0);
console.log('PASS: choice-note continuation, empty-English AI request, and backup note counts.');
