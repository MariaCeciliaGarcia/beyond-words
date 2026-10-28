'use strict';
// The three approved learning profiles share navigation and storage with the library.
function scenarioUnit(){return lesson.practiceProfile==='scenario';}
function questionType(q){return q.type||(scenarioUnit()?'recall':'input');}
function personalLabel(){return scenarioUnit()?'我的场景':'我的例句';}
function draftPresent(){return scenarioUnit()?!!(state.draft.scene?.trim()||state.draft.intent?.trim()):!!(state.draft.zh?.trim()||state.draft.en?.trim());}
function pilotHint(q,qs){return !qs.revealed?`<div class="hint-wrap recall-tools">${button(qs.hints.includes('words')?'收起场合提示':'场合提示','hint','hint-button',`data-hint="words" aria-expanded="${qs.hints.includes('words')}"`)}</div>${qs.hints.includes('words')?`<div class="hint-box">${window.renderQuestionHintContent(q,'frame')}</div>`:''}`:'';}
function pilotQuestionSheet(q,qs,context){
 const entry=context==='entry',choice=questionType(q)==='choice';
 const selected=q.choices?.find(x=>x.id===qs.choice),correct=choice&&qs.revealed&&qs.choice===q.correctChoice;
 const choices=choice?`<div class="scenario-options" role="group" aria-label="选择回应的含义">${q.choices.map((x,i)=>button(`<span class="option-letter" aria-hidden="true">${String.fromCharCode(65+i)}</span><span>${esc(x.text)}</span>`,'choose-answer',`scenario-option ${qs.choice===x.id?'is-selected':''} ${qs.revealed&&x.id===q.correctChoice?'is-answer':''}`,`data-choice="${x.id}" aria-pressed="${qs.choice===x.id}" ${qs.revealed?'disabled':''}`)).join('')}</div>`:'';
 return `<section class="sheet question-sheet scenario-sheet"><div class="question-heading">${promptMarkup(q)}</div>${pilotHint(q,qs)}${choices}${!choice&&!qs.revealed?`<p class="recall-help">先在心里想一句，或自己说一遍。</p><div class="actions">${button('看表达','reveal')}</div>`:''}
 ${qs.revealed?`<div class="answer-box ${correct?'is-correct':'is-comparison'}" aria-live="polite"><p class="result">${choice?(correct?'判断正确':'再看看这里的意思'):'可以这样回应'}</p>${choice?`<p class="answer-explanation"><strong>${esc(q.choices.find(x=>x.id===q.correctChoice)?.text||'')}</strong></p>`:`<p class="answer-en" lang="en">${esc(q.answers[0])}</p>`}<p>${esc(q.feedback|| (q.id.startsWith('c-')?'对照自己的场景：你是否愿意接受对方的理由或选择？':'这句可以表达接受对方的理由或选择。'))}</p>
 ${choice?`<div class="actions">${button('下一题','choice-next')}</div>`:`<div class="response-panel"><p class="section-label">这次想起来了吗？</p><div class="grade-row">${button('会了','grade','','data-grade="good"')}${button('不熟','grade','','data-grade="hard"')}${button('不会','grade','','data-grade="again"')}</div><p class="small">按自己刚才的回忆判断。</p></div>`}<div class="answer-followups">${button('看看讲解','supplement','utility-link')}</div></div>`:''}</section>`;
}
function pilotEntryFeedback(){
 const attempt=state.learn?.entryAttempt;
 if(!attempt||!attempt.input?.trim())return '';
 const q=state.learn.pinnedEntry||lesson.entry,correct=attempt.checked&&matches(attempt.input,q.answers);
 return `<div class="entry-feedback"><p class="section-label">${correct?'这次表达出来了':'对照一下刚才的尝试'}</p>${correct?`<p class="en">${esc(attempt.input)}</p>`:`<p class="small">你写的：${esc(attempt.input)}</p><p class="en">${esc(q.answers[0])}</p>`}${!correct?'<p class="small">看看本题表达怎样使用这个语块，也可以回去修改。</p>':''}${button('返回修改','edit-entry','utility-link')}</div>`;
}
function personalDraftForm(){return `<label class="section-label" for="custom-scene">发生了什么？</label><textarea id="custom-scene" maxlength="600" placeholder="写下对方说了什么，或当时发生了什么。">${esc(state.draft.scene||'')}</textarea><label class="section-label" for="custom-intent">你想表达什么态度？</label><textarea id="custom-intent" maxlength="300" placeholder="写下你想通过这个回应表达的态度。">${esc(state.draft.intent||'')}</textarea>${personalCheckControl()}`;}
function pilotCustomPage(){
 const saved=state.learn.savedCustom;
 return `<section class="sheet"><p class="eyebrow section-badge">最后一步 / 我的场景</p><h2>想想你什么时候会这样回应。</h2><p class="lead">写下发生了什么，以及你想表达的态度，不需要另造英文句子。</p>${saved?`<h3>场景已保存</h3>${customList(false)}<div class="actions">${button('继续创建','continue-create','button secondary')}${button('结束创建','finish-learn')}</div>`:`${personalDraftForm()}<div class="actions">${button('保存场景','save-scenario')}${button('稍后再写','finish-learn','button secondary')}</div>`}<div class="muted-box">${saved?'保存的场景会用于之后的回忆练习。':'写好后对照一下：'+esc(lesson.personalPrompt||'这个回应能表达你在该场景中的态度吗？')}保存不代表场景用法已经过自动判断。</div></section>`;
}
function personalQuestion(c){
 if(scenarioUnit())return {id:c.id,type:'recall',zh:'先想一句回应，再看表达。',target:'先想一句回应，再看表达。',scene:c.scene||c.zh,intent:c.intent||'',answers:[c.kind==='scenario'?lesson.expression:c.en||lesson.expression],hint:'态度：结合你保存的场景，回忆这个回应的用途。',feedback:'这是你保存的个人场景。对照一下：这句回应能表达你当时的态度吗？场景不贴切时可以修改。'};
 return {id:c.id,zh:c.zh,answers:[c.en],hint:'先试着表达你保存的意思；想不起来时再看原句。'};
}
function pilotStatsMarkup(results){
 const choices=results.filter(r=>r.kind==='choice'),recalls=results.filter(r=>r.kind!=='choice'&&r.grade!=='skip');
 return `<div class="stats"><div class="stat"><strong>${choices.filter(r=>r.choiceCorrect).length}</strong><span>判断答对</span></div><div class="stat"><strong>${recalls.filter(r=>r.grade==='good').length}</strong><span>回忆出来（自评）</span></div><div class="stat"><strong>${results.filter(r=>r.grade==='hard'||r.grade==='again').length}</strong><span>需要再练</span></div></div>`;
}
function editScenario(id){
 editingCustom=id||null;const c=state.custom.find(x=>x.id===id);
 showDialog(`<h2>${c?'修改场景':'新增场景'}</h2><label class="section-label" for="edit-scene">发生了什么？</label><textarea id="edit-scene" maxlength="600">${esc(c?.scene||c?.zh||state.draft.scene||'')}</textarea><label class="section-label" for="edit-intent">你想表达什么态度？</label><textarea id="edit-intent" maxlength="300">${esc(c?.intent||state.draft.intent||'')}</textarea><p class="small">对照：${esc(lesson.personalPrompt||'这个回应能表达你当时的态度吗？')}</p><div class="ai-check-tools">${button('复制 AI 核对指令','copy-ai-check','button secondary',`data-id="${id||''}"`)}</div><div class="actions">${button('保存','commit-scenario','button',`data-id="${id||''}"`)}${button('取消','close-dialog','button secondary')}</div>`);
}
function saveScenario(scene,intent,id){
 if(!scene.trim()||!intent.trim()){toast('请写下场景和你想表达的态度');return false;}
 const existing=state.custom.find(x=>x.id===id);
 if(existing)Object.assign(existing,{kind:'scenario',scene:scene.trim(),intent:intent.trim()});
 else state.custom.push({id:`c-${crypto.randomUUID()}`,kind:'scenario',scene:scene.trim(),intent:intent.trim()});
 if(!existing){state.draft.scene='';state.draft.intent='';}save();return true;
}
