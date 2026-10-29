'use strict';
function expressionHint(q){
 const rules=window.JUJIAN_HINT_RULES?.[lesson.id];
 if(!rules)return q.hint||'先回忆这个表达的结构，再根据情境调整。';
 if(q.id.startsWith('c-'))return rules.core;
 const canonical=unitById.get(lesson.id),candidate=q.id==='entry'?canonical.entry:[...canonical.learning,...canonical.review].find(x=>x.id===q.id);
 if(candidate&&candidate.zh===q.zh&&candidate.answers.some(a=>q.answers.includes(a)))return q.id==='entry'?rules.entry:rules[q.id[0]==='l'?'learning':'review'][Number(q.id.slice(1))-1]||rules.core;
 return window.JUJIAN_HINT_FOR_QUESTION?.(lesson.id,q)||rules.core;
}
function personalCheckPrompt(content){
 if(scenarioUnit())return `情境：${content.scene||content.zh||''}；想表达：${content.intent||''}
用“${lesson.expression}”回应是否自然？给出合适的回应，再用中文简要解释必要的词语、语法或语气，最多3点、每点一句。不适用时说明原因，不要硬套。`;
 const attempt=content.en?.trim()?`
我的尝试：${content.en.trim()}
请先核对并给出自然表达。`:'请给出一条自然英文。';
 return `意思：${content.zh||''}
必须使用“${lesson.expression}”，可按语境调整人称和时态。${attempt}
再用中文简要解释关键单词／搭配和句式语法，最多3点、每点一句；不适用时简短说明，不要硬套。`;
}
function personalCheckControl(id=''){
 const ready=id|| (scenarioUnit()?state.draft.scene?.trim()&&state.draft.intent?.trim():state.draft.zh?.trim());
 return `<div class="ai-check-tools">${button('复制 AI 核对指令','copy-ai-check','button secondary',`data-id="${esc(id)}" ${ready?'':'disabled'}`)}</div>`;
}
async function copyPersonalCheck(id){
 let content;
 if(dialog.open&&document.getElementById(scenarioUnit()?'edit-scene':'edit-zh'))content=scenarioUnit()?{scene:document.getElementById('edit-scene').value,intent:document.getElementById('edit-intent').value}:{zh:document.getElementById('edit-zh').value,en:document.getElementById('edit-en').value};
 else content=id?state.custom.find(c=>c.id===id):state.draft;
 if(!content||(scenarioUnit()?!(content.scene?.trim()&&content.intent?.trim()):!content.zh?.trim())){toast(scenarioUnit()?'先写下场景和你想表达的态度':'先写下中文意思');return;}
 const text=personalCheckPrompt(content);
 try{if(typeof navigator==='undefined'||!navigator.clipboard?.writeText)throw Error('clipboard');await navigator.clipboard.writeText(text);toast('指令已复制，粘贴给你常用的 AI 即可');}
 catch{
  const editor=dialog.open&&/id="edit-(?:zh|scene)"/.test(dialog.innerHTML);
  if(editor){const markup=`<h3>核对指令</h3><p class="small">当前浏览器未能自动复制，可以选中下方文字复制。填写中的内容已保留。</p><textarea id="ai-copy-text" readonly>${esc(text)}</textarea>${button('收起指令','close-ai-copy','button secondary')}`;let region=dialog.querySelector('#ai-fallback');if(region)region.innerHTML=markup;else dialog.insertAdjacentHTML('beforeend',`<div id="ai-fallback">${markup}</div>`);}
  else showDialog(`<h2>AI 核对指令</h2><p class="small">当前浏览器未能自动复制，已为你准备好文字。</p><textarea id="ai-copy-text" readonly>${esc(text)}</textarea><p class="small">选中复制后，粘贴给你常用的 AI。</p><div class="actions">${button('返回继续填写','close-dialog')}</div>`);
  const field=document.getElementById('ai-copy-text');field.focus();field.select?.();
 }

}
function updateCopyControls(){const el=app.querySelector('[data-action="copy-ai-check"][data-id=""]');if(el)el.disabled=scenarioUnit()?!(state.draft.scene?.trim()&&state.draft.intent?.trim()):!state.draft.zh?.trim();}
function orderedContinuation(id,origin){
 const scope=origin&&catalog.domains.some(d=>d.id===origin.domain)?origin:{domain:unitById.get(id)?.domain||domain,tab:'scene',filter:'all',subfilter:'all',search:''};
 const ordered=(scope.ids||learningSelection(scope).map(u=>u.id)).map(id=>unitById.get(id)).filter(u=>unitInOrigin(u,scope));
 const at=ordered.findIndex(u=>u.id===id),rest=at<0?ordered:[...ordered.slice(at+1),...ordered.slice(0,at)];
 const unit=rest.find(u=>!record(u.id).mastered&&record(u.id).learn?.stage!=='done');
 return unit?{unit,origin:scope,next:true}:null;
}
function learningResumeTarget(){
 const recent=store.resume?.learn?.id||store.activeId,last=unitById.get(recent),r=last&&record(recent);
 if(last&&r.learn&&(!r.mastered||r.learn.dailyReplay)&&r.learn.stage!=='done')return {unit:last,origin:r.learn.origin};
 if(last&&r.learn&&isCeciliaOrigin(r.learn.origin)){const next=nextCeciliaUnit(originDay(r.learn.origin),recent);if(next)return {unit:next,origin:r.learn.origin,next:true};return null;}
 const unfinished=learningUnits().sort((a,b)=>Number(record(b.id).updatedAt||0)-Number(record(a.id).updatedAt||0));
 if(unfinished.length)return {unit:unfinished[0],origin:record(unfinished[0].id).learn.origin};

 if(last&&r.learn)return orderedContinuation(last.id,r.learn.origin);
 return null;
}
function reviewResumeTarget(){
 const recent=store.resume?.review?.id,last=unitById.get(recent);
 if(last&&record(recent).review&&!record(recent).mastered)return last;
 const active=filterReviewScope(availableUnits(),store.resume?.review?.origin||store.reviewScope||null),pending=active.filter(u=>record(u.id).review).sort((a,b)=>Number(record(b.id).updatedAt||0)-Number(record(a.id).updatedAt||0));
 return pending[0]||active.sort((a,b)=>record(a.id).schedule.due-record(b.id).schedule.due)[0]||null;
}
function learningStatusFor(unit){const l=record(unit.id).learn;const prefix=isCeciliaOrigin(l?.origin)?'Cecilia · '+ceciliaDateLabel(originDay(l.origin))+' · ':'';return prefix+(!l?'下一个表达':({entry:'初次尝试',intro:'看讲解',exercise:`学习题 ${Math.max(l.results.length,l.index)+1} / ${(l.pinnedLearning||unit.learning).length}`,custom:unit.practiceProfile==='scenario'?'写自己的场景':'写自己的例句',done:'已完成'}[l.stage]));}
function continueLearningHome(){
 const target=learningResumeTarget();if(!target){go('library');return;}
 selectLesson(target.unit.id);if(target.origin)applyLearningOrigin(target.origin);
 if(!state.learn)state.learn=newLearning();if(target.origin){state.learn.origin=target.origin;state.learn.dailyReplay=!!state.mastered&&isCeciliaOrigin(target.origin);}
 save();go('study');
}
function continueReviewHome(){if(store.resume?.review?.origin)store.reviewScope=store.resume.review.origin;const target=reviewResumeTarget();if(!target){go('review');return;}selectLesson(target.id);if(state.review)go('practice');else startReview();}
function supportHomePage(){
 const learn=learningResumeTarget(),review=reviewResumeTarget(),r=review&&record(review.id),due=filterReviewScope(availableUnits(),store.resume?.review?.origin||store.reviewScope||null).filter(u=>record(u.id).schedule.due<=Date.now()).length;
 return `<section class="home-intro ${learn||review?'has-resume':''}">${learn||review?'':'<p class="eyebrow">一点一点，把表达变成自己的。</p>'}<h1>${learn||review?'接着上次，继续练。':'想说的话，<br>练到能用出来。'}</h1>${learn||review?'':'<p class="lead">学习和复习，各自保留进度。</p>'}</section><section class="home-grid"><article class="home-card"><h2>学习</h2>${learn?`<p class="resume-meaning">${esc(learn.unit.meaning)}</p><p class="small">${learningStatusFor(learn.unit)}</p>`:'<p>按场景或表达功能，找到想练的内容。</p>'}<div class="actions">${button(learn?'继续学习':'开始学习',learn?'continue-learning-home':'library')}${learn?button('选择新表达','library','text-button'):''}</div>${ceciliaDays().length?`<div class="daily-home-entry">${button('<span><strong>Cecilia</strong><small>每日语料 · 按日期学习</small></span><span aria-hidden="true">→</span>','cecilia-dates','daily-home-link')}<p class="small">最近更新：${esc(ceciliaDateLabel(ceciliaDays()[0].id))} · ${ceciliaDays().length} 天材料</p></div>`:''}</article><article class="home-card review"><h2>复习</h2>${review?`<p class="resume-meaning">${esc(review.meaning)}</p><p class="small">${(r.review?.origin||store.resume?.review?.origin)?.domain==='cecilia'?'Cecilia · '+ceciliaDateLabel((r.review?.origin||store.resume?.review?.origin).dateId)+' · ':''}${r.review?`本轮 ${r.review.index+1} / ${r.review.queue.length} 题`:r.schedule.due<=Date.now()?`${due} 个表达到期`:'尚未到期，也可以提前练习'}</p>`:'<p>先学习一个表达，再回来巩固。</p>'}<div class="actions">${button(r?.review?'继续复习':review?r.schedule.due<=Date.now()?'开始复习':'提前复习':'查看复习库',review?'continue-review-home':'review')}${review?button('查看复习库','review','text-button'):''}</div></article></section>${backupReminder()}`;
}
