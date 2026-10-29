'use strict';
const ceciliaDays=()=>[...(window.BW_DAILY_MATERIALS||[])].sort((a,b)=>b.date.localeCompare(a.date));
const ceciliaDay=id=>ceciliaDays().find(d=>d.id===id);
const ceciliaIds=id=>[...new Set((ceciliaDay(id)?.items||[]).flatMap(i=>[i.unitId,...(i.practiceIds||[])]).filter(id=>unitById.has(id)))];
const ceciliaDateLabel=id=>{const d=ceciliaDay(id);return d?d.date.replace(/^(\d{4})-(\d{2})-(\d{2})$/,(_,y,m,d)=>`${y}年${Number(m)}月${Number(d)}日`):'全部日期';};
const ceciliaVisit=(id,day)=>record(id).dailyVisits?.[day];
const isCeciliaOrigin=o=>o?.domain==='cecilia'&&!!ceciliaDay(o.dateId||o.filter);
const originDay=o=>isCeciliaOrigin(o)?o.dateId||o.filter:null;
const unitInOrigin=(u,o)=>o?.domain==='cecilia'?!!u&&(o.ids||ceciliaIds(o.dateId||o.filter)).includes(u.id):!!u&&u.domains.includes(o?.domain);
function currentDayOrigin(day=filter){return {domain:'cecilia',dateId:day,tab:'scene',filter:day,subfilter:'all',search:'',page:Number(page)||1,ids:ceciliaIds(day)};}
function dateLearningPending(id,day){const r=record(id);return !ceciliaVisit(id,day)&&!(r.learn?.stage==='done'&&originDay(r.learn.origin)===day);}
function markDailyVisit(status,day=originDay(state.learn?.origin)){
 if(!day||!ceciliaIds(day).includes(lesson.id))return;
 state.dailyVisits=state.dailyVisits||{};state.dailyVisits[day]={status,at:Date.now()};
}
function ceciliaProgress(day){const ids=ceciliaIds(day);return {total:ids.length,handled:ids.filter(id=>!dateLearningPending(id,day)).length,due:ids.filter(id=>{const r=record(id);return r.enrolled&&!r.mastered&&r.schedule.due<=Date.now()}).length};}
function ceciliaNavigation(){return `<section class="track-panel"><div class="domain-tabs" role="group" aria-label="学习方向">${catalog.tracks.map(t=>button(`<strong>${esc(t.name)}</strong><span>${esc(t.description)}</span>`,'track',`domain-option ${t.id==='spoken'?'selected':''}`,`data-track="${t.id}" aria-pressed="${t.id==='spoken'}"`)).join('')}</div></section><section class="domain-panel"><div class="domain-tabs spoken-domains" role="group" aria-label="交流内容">${catalog.domains.filter(d=>d.track==='spoken').map(d=>button(`<strong>${esc(d.name)}</strong><span>${d.id==='cecilia'?'按日期学习':esc(d.description)}</span>`,'domain',`domain-option ${domain===d.id?'selected':''}`,`data-domain="${d.id}" aria-pressed="${domain===d.id}"`)).join('')}</div></section>`;}
function ceciliaBreadcrumb(day){return breadcrumbMarkup([{label:'首页',action:'home'},{label:'学习',action:'cecilia-learning-root'},{label:'Spoken English'},...(day?[{label:'Cecilia',action:'cecilia-dates'},{label:ceciliaDateLabel(day.id)}]:[{label:'Cecilia'}])]);}
function ceciliaLibraryPage(){
 const day=ceciliaDay(filter);
 if(day)return ceciliaDatePage(day);
 return `${ceciliaBreadcrumb()}<div class="page-heading"><div><p class="eyebrow">Cecilia</p><h1>Cecilia 的每日语料</h1><p class="lead">选择日期，学习当天遇见的表达。</p></div></div>${ceciliaNavigation()}<div class="list-heading"><h2>按日期选择材料</h2><span class="small">${ceciliaDays().length} 天</span></div><div class="unit-grid">${ceciliaDays().map(d=>{const p=ceciliaProgress(d.id);return `<article class="library-item daily-card"><div><p class="tag">每日材料</p><h3>${esc(ceciliaDateLabel(d.id))}</h3><p class="small">${p.handled} / ${p.total} 个表达已处理 · ${p.due} 个待复习</p><p class="small">${d.items.length} 条材料</p></div><div class="actions">${button('进入当天内容','cecilia-date','button',`data-day="${d.id}"`)}${button(p.due?'复习当天内容':'提前复习当天内容','cecilia-review-day','button secondary',`data-day="${d.id}" ${ceciliaIds(d.id).some(id=>record(id).enrolled&&!record(id).mastered)?'':'disabled'}`)}</div></article>`}).join('')}</div><div class="actions">${button('复习 Cecilia 全部到期内容','cecilia-review-all','button secondary')}</div>`;
}
function ceciliaDatePage(day){
 const ids=ceciliaIds(day.id),p=ceciliaProgress(day.id),pending=ids.find(id=>dateLearningPending(id,day.id)),query=search.trim().toLowerCase();
 const visible=ids.filter(id=>{const u=unitById.get(id);return !query||[u.meaning,u.expression].join(' ').toLowerCase().includes(query)});
 const pages=Math.max(1,Math.ceil(visible.length/24));page=Math.max(1,Math.min(Number(page)||1,pages));const shown=visible.slice((page-1)*24,page*24);
 return `${ceciliaBreadcrumb(day)}<div class="page-heading"><div><p class="eyebrow">Cecilia · ${esc(day.date)}</p><h1>这一天遇见的表达。</h1><p class="lead">已处理 ${p.handled} / ${p.total} · 待复习 ${p.due}</p></div></div><div class="actions daily-toolbar">${pending?button(record(pending).learn&&record(pending).learn.stage!=='done'?'继续当天学习':'开始当天学习','cecilia-start-day','button',`data-day="${day.id}" data-enter-default`):'<p class="section-label">这一天的表达都已处理，可以复习或选择其他日期。</p>'}${button('复习当天内容','cecilia-review-day','button secondary',`data-day="${day.id}" ${ids.some(id=>record(id).enrolled&&!record(id).mastered)?'':'disabled'}`)}${button('返回日期目录','cecilia-dates','button secondary')}</div><label class="search-label daily-search" for="library-search">查找当天表达<input id="library-search" type="search" value="${esc(search)}" placeholder="输入意思或表达" autocomplete="off"></label><div class="unit-grid">${shown.map(id=>{const u=unitById.get(id),r=record(id),visit=ceciliaVisit(id,day.id),active=r.learn&&r.learn.stage!=='done';return `<article class="library-item unit-card"><div><p class="tag">${visit?visit.status==='skip'?'当天已略过':'当天已练习':'当天未处理'}</p><h3>${esc(u.meaning)}</h3>${r.mastered?'<p class="small">已掌握 · 可以再练，也可以略过本次材料</p>':active?'<p class="small">有未完成的练习，继续时保留原题和输入。</p>':''}</div><div class="actions">${button(active?'继续练习':visit||r.mastered||r.learn?.stage==='done'?'再练一次':'开始学习','cecilia-open','button outline',`data-lesson="${id}" data-day="${day.id}" data-force="1"`)}${!visit?button('已会，跳过','cecilia-skip','text-button',`data-lesson="${id}" data-day="${day.id}"`):''}</div></article>`}).join('')}</div>${visible.length?'':'<p class="empty">没有找到对应表达，可以换个关键词。</p>'}${pages>1?`<nav class="library-pagination" aria-label="当天表达分页">${button('上一页','page','button secondary',`data-page="${page-1}" ${page===1?'disabled':''}`)}<span class="small">${page} / ${pages}</span>${button('下一页','page','button secondary',`data-page="${page+1}" ${page===pages?'disabled':''}`)}</nav>`:''}<details class="daily-source"><summary>查看当天原始材料 · ${day.items.length} 条</summary><p class="small">展开后会显示英文表达。</p>${day.items.map(i=>`<article><p lang="en"><strong>${esc(i.expression)}</strong></p><p>${esc(i.meaning)}</p>${i.usageNote?`<p class="small">${esc(i.usageNote)}</p>`:''}${[...new Set([i.unitId,...(i.practiceIds||[]),...(i.relatedIds||[])])].filter(id=>id&&ceciliaIds(day.id).includes(id)).map(id=>button('练习：'+unitById.get(id).meaning,'cecilia-open','text-button',`data-lesson="${id}" data-day="${day.id}" data-force="1"`)).join('')}</article>`).join('')}</details>`;
}
function openCeciliaUnit(id,day,force=false){
 if(!ceciliaIds(day).includes(id))return;
 const r=record(id);domain='cecilia';filter=day;subfilter='all';tab='scene';search='';lastSpoken='cecilia';
 if(r.mastered&&!force){showDialog(`<h2>这个表达你已经掌握</h2><p>${esc(unitById.get(id).meaning)}</p><div class="actions">${button('再练一次','cecilia-open','button',`data-lesson="${id}" data-day="${day}" data-force="1"`)}${button('已会，跳过','cecilia-skip','button secondary',`data-lesson="${id}" data-day="${day}"`)}</div>`);return;}
 if(dialog.open)dialog.close();selectLesson(id);domain='cecilia';filter=day;
 if(!state.learn||state.learn.stage==='done')state.learn=newLearning();
 state.learn.origin=currentDayOrigin(day);state.learn.dailyReplay=!!state.mastered;save();go('study');
}
function nextCeciliaUnit(day=originDay(state.learn?.origin),afterId=lesson.id){const ids=ceciliaIds(day),at=ids.indexOf(afterId),ordered=at<0?ids:[...ids.slice(at+1),...ids.slice(0,at)];return ordered.map(id=>unitById.get(id)).find(u=>u.id!==afterId&&dateLearningPending(u.id,day));}
function continueCeciliaDay(day){const ids=ceciliaIds(day),recent=store.resume?.learn?.id,pending=ids.find(id=>id===recent&&dateLearningPending(id,day)&&record(id).learn?.stage!=='done')||ids.find(id=>dateLearningPending(id,day));if(pending)openCeciliaUnit(pending,day);else{domain='cecilia';filter=day;go('library');}}
function reviewScopeOrigin(){return state.review?.origin||((view==='summary'||view==='mastery')?state.summary?.origin:null)||store.reviewScope||null;}
function filterReviewScope(list,scope=reviewScopeOrigin()){
 if(scope?.domain!=='cecilia')return list;
 const ids=scope.dateId?ceciliaIds(scope.dateId):[...new Set(ceciliaDays().flatMap(d=>ceciliaIds(d.id)))];return list.filter(u=>ids.includes(u.id));
}
function reviewScopeControls(){const scope=store.reviewScope;return `<div class="daily-review-scope"><span class="section-label">复习范围</span><div class="chips">${button('全部表达','review-all-scope',`chip ${!scope?'active':''}`)}${button('Cecilia 全部日期','cecilia-review-all',`chip ${scope?.domain==='cecilia'&&!scope.dateId?'active':''}`)}${ceciliaDays().map(d=>button(d.date,'cecilia-review-day',`chip ${scope?.dateId===d.id?'active':''}`,`data-day="${d.id}"`)).join('')}</div></div>`;}
function startCeciliaReview(day){store.reviewScope={domain:'cecilia',...(day?{dateId:day}:{})};domain='cecilia';filter=day||'all';lastSpoken='cecilia';save();go('review');}
function ceciliaContinuation(kind){
 const origin=kind==='review'?reviewScopeOrigin():learningOrigin(),day=originDay(origin)||origin?.dateId;
 const next=kind==='review'?nextReviewUnit():nextCeciliaUnit(day);
 return `<div class="continuation"><p class="section-label">Cecilia · ${esc(day?ceciliaDateLabel(day):'全部日期')}</p>${next?`<h3>${esc(next.meaning)}</h3>${button(kind==='review'?'复习下一个表达':'继续当天学习',kind==='review'?'next-review':'cecilia-next','button',`data-next="${next.id}" data-day="${day||''}" data-enter-default`)}`:`<h3>${kind==='review'?'这个范围内暂时没有其他到期表达':'当天的表达都已处理'}</h3>${kind==='review'?'':button('复习当天内容','cecilia-review-day','button secondary',`data-day="${day}" data-enter-default`)}`}<div class="actions">${button('返回当天内容','cecilia-date','button secondary',`data-day="${day||''}" ${!next&&kind==='review'?'data-enter-default':''}`)}${button('查看其他日期','cecilia-dates','text-button')}</div></div>`;
}
function handleCeciliaAction(action,el){const day=el.dataset.day,id=el.dataset.lesson||el.dataset.next;
 switch(action){
 case 'cecilia-learning-root':domain='daily';lastSpoken='daily';filter='all';subfilter='all';search='';page=1;go('library');return true;
 case 'cecilia-date':domain='cecilia';filter=ceciliaDay(day)?day:'all';search='';page=1;lastSpoken='cecilia';go('library');return true;
 case 'cecilia-dates':domain='cecilia';filter='all';search='';page=1;lastSpoken='cecilia';go('library');return true;
 case 'cecilia-start-day':continueCeciliaDay(day);return true;
 case 'cecilia-open':openCeciliaUnit(id,day,el.dataset.force==='1');return true;
 case 'cecilia-next':openCeciliaUnit(id,day);return true;
 case 'cecilia-skip':if(ceciliaIds(day).includes(id)){selectLesson(id);markDailyVisit('skip',day);save();if(dialog.open)dialog.close();continueCeciliaDay(day);}return true;
 case 'cecilia-review-day':startCeciliaReview(day);return true;
 case 'cecilia-review-all':startCeciliaReview();return true;
 case 'review-all-scope':store.reviewScope=null;save();go('review');return true;
 default:return false;
 }
}
