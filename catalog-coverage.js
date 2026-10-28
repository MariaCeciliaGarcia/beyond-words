'use strict';
(()=>{
 const c=window.JUJIAN_CATALOG;
 c.tracks=[{id:'spoken',name:'Spoken English',description:'日常生活与职业交流'},{id:'exam',name:'考试顺利',description:'写作、口头表达与改写论证'}];
 c.domains.forEach(d=>d.track='spoken');
 c.domains.push(
  {id:'ielts',track:'exam',name:'雅思',description:'练习观点、经历与描述表达；图表内容标明 Academic。'},
  {id:'cet4',track:'exam',name:'四级',description:'从清楚表达基本意思开始，练习写作连接与翻译中的常用结构。'},
  {id:'cet6',track:'exam',name:'六级',description:'练习更充分的解释、比较、让步与改写，兼顾写作和翻译。'},
  {id:'toefl',track:'exam',name:'托福',description:'练习讨论、邮件中可迁移的表达，以及个人经历与偏好的口头表达。'}
 );
 const add=(list,gid,id,name,ids)=>{const g=list.find(g=>g.id===gid);if(!g)throw Error(gid);let sub=g.children.find(s=>s.id===id);if(!sub){sub={id,name,units:[]};g.children.push(sub);}sub.units=[...new Set([...sub.units,...ids.split(' ')])];};
 const s=(...a)=>add(c.scenes,...a),f=(...a)=>add(c.functions,...a);
 s('social','contact','联络与近况','q-run-into q-get-along q-keep-touch q-catch-up');
 s('social','get-together','相约活动','q-turn-down q-might-well q-time-to q-as-long');
 s('social','conversation','交流回应','q-no-worries q-take-time q-doesnt-matter q-never-mind q-afraid q-honest q-by-way');
 s('home','care','照护与共同生活','q-look-after q-worried q-proud q-let-me q-no-need');
 s('home','home-items','找物与故障','q-look-up q-deal-with q-trouble q-worth');
 s('home','leisure','休闲选择','q-take-up q-might-well q-time-to q-worth');
 s('rhythm','habits','习惯与持续','q-give-up q-stick-to q-cut-down q-take-up q-get-around');
 s('rhythm','recent-changes','进展与变化','q-better q-time-to q-go-over');
 s('deep-talk','feelings-boundaries','感受与边界','q-worried q-proud q-get-along q-no-point');
 s('deep-talk','choices-conditions','比较与条件','q-as-long q-worth q-might-well q-doesnt-matter q-no-need');
 s('deep-talk','explanations','原因与解释','q-honest q-afraid q-no-point');
 s('travel','transport','问路与交通','q-pick-up q-drop-off q-run-into');
 s('travel','itinerary','行程安排','q-better q-go-over q-as-long q-feel-free');
 s('service','ask-staff','咨询与找物','q-trouble q-familiar q-look-up');
 s('service','service-issues','问题与调整','q-deal-with q-no-worries q-no-need q-let-me');
 s('digital','accounts-devices','账号与操作','q-familiar q-trouble q-look-up');
 f('plans','transport-help','接送与出行协助','q-pick-up q-drop-off');
 f('narrative','encounters','偶然相遇','q-run-into');
 f('relationships','contact','相处与联络','q-get-along q-keep-touch q-catch-up');
 f('needs','care-help','照护与主动帮忙','q-look-after q-let-me');
 f('information','reference','查找与复核','q-look-up q-go-over');
 f('problems','handling','处理与困难','q-deal-with q-trouble');
 f('narrative','change-habits','开始、坚持与减少','q-give-up q-stick-to q-cut-down q-take-up');
 f('plans','postpone','推迟与拖延','q-get-around');
 f('responses','refusing','拒绝机会或提议','q-turn-down');
 f('relationships','wishes-feelings','愿望、感受与期待','q-worried q-proud');
 f('thoughts','familiarity','了解与熟悉','q-familiar');
 f('needs','permission-welcome','欢迎与允许','q-feel-free');
 f('thoughts','necessity','必要性与行动时机','q-no-need q-better q-time-to');
 f('thoughts','value-options','值不值得与顺势选择','q-worth q-might-well q-no-point');
 f('responses','reassurance','安抚、耐心与撤回','q-no-worries q-take-time q-doesnt-matter q-never-mind');
 f('thoughts','tone-opening','缓和与坦率','q-afraid q-honest');
 f('responses','conversation-links','接话与转入相关话题','q-by-way');
 f('conditions','provided','条件与允许','q-as-long');
 s('w-messages','updates','提醒、更新与背景','w-heads-up w-keep-posted w-touch-base w-fill-in w-hear-back w-bear-with');
 s('w-team','handoffs','协同与交接','w-up-to-speed w-take-over w-step-in w-follow-through');
 s('w-team','capacity','工作量与担当','w-tied-up w-capacity w-take-on');
 s('w-project','preparation','准备、设置与复核','w-put-together w-set-up w-work-out w-double-check w-flag');
 s('w-project','status','进度与依赖','w-up-to-speed w-keep-posted w-tied-up');
 s('w-meeting','participation','参与和表达观点','w-run-by w-bring-up w-concern w-missing w-push-back w-to-be-clear');
 s('w-meeting','decisions','共识与总结','w-same-page w-on-board w-trade-off w-narrow-down w-rule-out');
 s('w-client','solutions','条件与交付方案','w-room w-build-on w-work-out w-trade-off');
 s('w-career','growth','动机与成长','w-credit w-build-on w-take-on');
 f('responses','updates-context','提前提醒与持续同步','w-heads-up w-keep-posted w-touch-base w-fill-in w-hear-back');
 f('narrative','getting-informed','熟悉背景与跟上进展','w-up-to-speed');
 f('thoughts','discussing','征求意见与提出议题','w-run-by w-bring-up w-concern w-missing');
 f('decisions','alignment','理解一致与支持参与','w-same-page w-on-board');
 f('progress','preparing','制作与设置','w-put-together w-set-up');
 f('progress','ownership','责任归属','w-take-over w-step-in w-take-on');
 f('progress','commitments','兑现与落实','w-follow-through w-work-out');
 f('decisions','selection','筛选与排除','w-narrow-down w-rule-out');
 f('responses','checking-notice','复核与引起注意','w-double-check w-flag');
 f('progress','workload','忙碌与负荷','w-tied-up w-capacity');
 f('decisions','objections','提出异议与代价','w-push-back w-trade-off');
 f('development','improvement','发展与改进空间','w-room w-build-on');
 f('relationships','recognition','承认贡献','w-credit');
 f('responses','waiting','请对方耐心等待','w-bear-with');
 f('responses','understanding','澄清与确认','w-to-be-clear');
 c.scopeSharing={work:'could-request permission repeat clarify thanks sorry sounds not-sure d-need d-trying d-make-sure p-done-with p-up-to p-out-of p-middle-of p-makes-sense p-fair-enough p-thing p-keep-mind p-pay-attention q-look-up q-go-over q-deal-with q-trouble q-familiar q-feel-free q-no-need q-let-me q-afraid q-honest q-take-time q-no-worries q-never-mind q-as-long q-no-point'.split(' '),daily:'w-hear-back w-set-up w-bear-with w-room'.split(' ')};
 s('w-messages','shared-responses','通用回应与表达','could-request permission repeat clarify thanks sorry sounds not-sure p-makes-sense p-fair-enough p-thing q-afraid q-honest q-take-time q-no-worries q-never-mind');
 s('w-team','shared-actions','通用协作与应对','d-need d-trying d-make-sure p-done-with p-up-to p-out-of p-middle-of p-keep-mind p-pay-attention q-look-up q-go-over q-deal-with q-trouble q-familiar q-feel-free q-no-need q-let-me q-as-long q-no-point');
 s('digital','online-confirmation','沟通与核实','w-hear-back w-bear-with');s('digital','accounts-devices','账号与操作','w-set-up');s('deep-talk','choices-conditions','比较与条件','w-room');
 const exam=[...(window.JUJIAN_EXAM_A||[]),...(window.JUJIAN_EXAM_B||[])];
 const examGroup=(id,name,description,children)=>c.scenes.push({id,name,description,domains:['ielts','cet4','cet6','toefl'],children:children.map(([id,name,ids])=>({id,name,units:ids.split(' ')}))});
 examGroup('exam-writing','写作与论证','用清楚的关系连接观点、理由、例子与限制。',[
  ['cause','原因与结果','e-lead-to e-result-from e-due-to'],['support','举例与突出重点','e-for-instance e-in-particular'],['compare','选择、比较与让步','e-rather-than e-instead-of e-both-and e-not-only e-in-contrast e-despite e-whether-or'],['solutions','方案与影响','e-one-way e-enable e-prevent e-play-role'],['reasoning','推断、评价与限制','e-suggests e-to-extent e-admittedly e-outweigh e-in-other-words e-limitation']
 ]);
 const specials=[['exam-chart','Academic 图表描述','把数值、构成与变化说准确。',['e-account-for','e-rise-from','e-remain-stable']],['exam-translation','翻译中的常用结构','说明特色、历史与规模，让中文意思自然落到英文。',['e-known-for','e-date-back','e-cover-area']],['exam-speaking','口头经历与偏好','围绕具体经历、对象和感受展开，避免空泛背诵。',['e-favourite-memory','e-when-comes','e-appreciated','e-found-particularly']]];
 for(const [id,name,description,ids]of specials)c.scenes.push({id,name,description,domains:id==='exam-chart'?['ielts']:id==='exam-translation'?['cet4','cet6']:['ielts','toefl'],children:[{id:'practice',name,units:ids}]});
 c.functions.find(g=>g.id==='responses').name='衔接与回应';
 c.functions.find(g=>g.id==='information').name='信息与背景';
 f('conditions','cause-result','原因与结果','e-lead-to e-result-from e-due-to e-enable e-prevent e-play-role');
 f('responses','examples-rephrasing','举例与换说法','e-for-instance e-in-particular e-in-other-words');
 f('conditions','exam-compare','对照与并列','e-rather-than e-instead-of e-both-and e-not-only e-in-contrast e-whether-or');
 f('conditions','qualifications','让步与依赖','e-despite');
 f('thoughts','solution','提出具体办法','e-one-way');
 f('thoughts','evaluation','谨慎推断与评价','e-suggests e-to-extent e-admittedly e-outweigh e-limitation');
 f('narrative','data-description','构成与数值变化','e-account-for e-rise-from e-remain-stable');
 f('information','background-description','特色、历史与规模','e-known-for e-date-back e-cover-area');
 f('thoughts','personal-evaluation','口头经历与评价','e-favourite-memory e-when-comes e-appreciated e-found-particularly');
 const newIds=[...(window.JUJIAN_DAILY_MORE_A||[]),...(window.JUJIAN_DAILY_MORE_B||[]),...(window.JUJIAN_DAILY_MORE_C||[]),...(window.JUJIAN_WORK_MORE_A||[]),...(window.JUJIAN_WORK_MORE_B||[]),...(window.JUJIAN_WORK_MORE_C||[]),...exam].map(u=>u.id);
 // New neutral actions join early content; nuanced forms remain later. No numerical frequency claim.
 const early='q-let-me q-no-need q-time-to q-no-worries q-take-time q-never-mind q-look-after q-pick-up q-drop-off q-worried q-proud q-familiar q-trouble q-keep-touch q-by-way q-honest q-afraid'.split(' ');
 const order=c.learningOrder;order.splice(20,0,...early);
 const middle='q-run-into q-get-along q-catch-up q-look-up q-deal-with q-give-up q-stick-to q-cut-down q-turn-down q-take-up q-go-over q-worth q-doesnt-matter q-feel-free q-better q-as-long'.split(' ');order.splice(58,0,...middle);
 const workEarly='w-heads-up w-keep-posted w-hear-back w-fill-in w-bring-up w-put-together w-set-up w-double-check w-take-over w-take-on w-tied-up w-bear-with'.split(' ');order.splice(order.indexOf('w-responsible'),0,...workEarly);
 c.learningOrder=[...new Set([...order,...newIds])];
 const kindAdds={
 state:'q-familiar q-trouble q-time-to w-up-to-speed w-tied-up w-capacity',
 feeling:'q-worried q-proud w-concern w-on-board',
 action:'q-pick-up q-drop-off q-run-into q-keep-touch q-catch-up q-look-after q-look-up q-deal-with q-give-up q-stick-to q-cut-down q-turn-down q-take-up q-go-over q-get-around q-feel-free q-better q-let-me w-heads-up w-keep-posted w-touch-base w-fill-in w-hear-back w-run-by w-bring-up w-put-together w-set-up w-take-over w-step-in w-follow-through w-work-out w-narrow-down w-rule-out w-double-check w-take-on w-push-back',
 organize:'q-no-need q-worth q-might-well q-honest q-by-way q-as-long q-no-point w-trade-off w-room w-build-on w-to-be-clear',
 respond:'q-no-worries q-take-time q-doesnt-matter q-never-mind q-afraid w-same-page w-missing w-bear-with',
 collocation:'q-get-along w-flag w-credit'
 };
 for(const kind of c.expressionKinds)kind.units=[...new Set([...kind.units,...(kindAdds[kind.id]||'').split(' ').filter(Boolean)])];
})();
