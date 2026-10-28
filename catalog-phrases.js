'use strict';
(()=>{
 const c=window.JUJIAN_CATALOG;
 const add=(list,gid,id,name,unitIds)=>{const g=list.find(g=>g.id===gid);if(!g)throw Error(gid);let sub=g.children.find(s=>s.id===id);if(!sub){sub={id,name,units:[]};g.children.push(sub);}sub.units=[...new Set([...sub.units,...unitIds.split(' ')])];};
 const s=(...args)=>add(c.scenes,...args),f=(...args)=>add(c.functions,...args);
 s('home','home-items','找物与故障','p-done-with p-out-of p-figure-out p-get-rid-of');
 s('home','help-at-home','家务互助','p-middle-of p-put-off p-make-effort p-pay-attention p-keep-mind');
 s('home','leisure','休闲选择','p-up-to p-mood-for p-end-up');
 s('social','conversation','交流回应','p-thing p-you-know-what p-makes-sense p-fair-enough p-speaking-of p-turns-out p-like-most');
 s('social','get-to-know','了解彼此','p-make-effort p-take-granted');
 s('social','get-together','相约活动','p-up-to p-put-off p-keep-mind');
 s('rhythm','recent-changes','进展与变化','p-done-with p-middle-of p-end-up p-turns-out');
 s('rhythm','habits','习惯与持续','p-make-effort p-put-off p-get-rid-of');
 s('deep-talk','feelings-boundaries','感受与边界','p-nerves p-cant-stand p-fed-up p-mood-for p-last-thing p-take-granted');
 s('deep-talk','explanations','原因与解释','p-thing p-turns-out p-makes-sense p-fair-enough');
 s('deep-talk','choices-conditions','比较与条件','p-up-to p-like-most p-keep-mind');
 s('travel','itinerary','行程安排','p-up-to p-end-up p-put-off p-keep-mind');
 s('service','food-shopping','点餐选购','p-mood-for p-out-of');
 s('digital','accounts-devices','账号与操作','p-figure-out p-get-rid-of');
 f('progress','complete-busy','完成与忙碌','p-done-with p-middle-of');
 f('needs','supplies','物品与余量','p-out-of');
 f('thoughts','decision-right','交给谁决定','p-up-to');
 f('relationships','irritation','心烦与厌烦','p-nerves p-cant-stand p-fed-up');
 f('thoughts','current-mood','当下的兴致','p-mood-for');
 f('problems','finding-solutions','想清与处理','p-figure-out p-get-rid-of');
 f('narrative','outcomes','事情的最终结果','p-end-up p-turns-out');
 f('plans','postpone','推迟与拖延','p-put-off');
 f('thoughts','focus','引出和突出重点','p-thing p-like-most');
 f('relationships','intentions','说明不愿造成的影响','p-last-thing');
 f('responses','conversation-links','接话与转入相关话题','p-you-know-what p-speaking-of');
 f('responses','accepting','理解与接受','p-makes-sense p-fair-enough');
 f('narrative','deliberate-effort','有意识的努力','p-make-effort');
 f('relationships','appreciation','珍惜与重视','p-take-granted');
 f('thoughts','attention-consideration','留意与考虑','p-pay-attention p-keep-mind');
 // Coverage tags are editorial metadata, not extra learner navigation or levels.
 c.expressionKinds=[
  {id:'state',name:'状态与进展',units:['p-done-with','p-up-to','p-out-of','p-middle-of']},
  {id:'feeling',name:'情绪与态度',units:['p-nerves','p-cant-stand','p-fed-up','p-mood-for']},
  {id:'action',name:'做事与应对',units:['p-figure-out','p-end-up','p-put-off','p-get-rid-of']},
  {id:'organize',name:'组织想法与强调',units:['p-thing','p-like-most','p-turns-out','p-last-thing']},
  {id:'respond',name:'自然接话',units:['p-you-know-what','p-makes-sense','p-fair-enough','p-speaking-of']},
  {id:'collocation',name:'固定搭配',units:['p-make-effort','p-take-granted','p-pay-attention','p-keep-mind']}
 ];
 // Approximate learning order: everyday usefulness and production effort, not measured frequency or CEFR.
 c.learningOrder=(
  'order d-need could-request permission thanks sorry sounds p-makes-sense p-fair-enough p-up-to '+
  'where cost looking not-work problem d-offer-help d-payment d-without p-out-of p-done-with '+
  'd-book d-try-on d-return invite suggest time-work repeat clarify change decline '+
  'opinion not-sure rather d-rather-not d-work-as d-origin d-feeling p-mood-for p-cant-stand p-thing '+
  'd-about-to d-trying d-just d-not-yet p-middle-of d-because d-thats-why d-depends d-too d-enough '+
  'd-get-to d-right-route d-wrong-order d-availability d-include d-recommend d-allergy d-symptom d-frequency longer '+
  'ever used-to d-last-time d-duration d-habit d-look-forward d-get-used p-nerves p-fed-up p-figure-out '+
  'p-put-off p-get-rid-of p-pay-attention p-keep-mind p-make-effort p-end-up p-you-know-what p-speaking-of p-turns-out p-take-granted '+
  'd-didnt-mean d-what-mean d-make-sure d-cant-seem d-as-far-know d-even-though d-as-as d-mind-if d-wondering d-appreciate-if '+
  'd-supposed d-wish d-should-have d-what-if p-like-most p-last-thing '+
  'w-take-care w-help-with w-let-know w-call w-audio w-attached w-confirm w-get-back '+
  'w-responsible w-who-handle w-cover w-copy w-start w-add w-back w-agree '+
  'w-due w-completed w-waiting w-next-step w-on-track w-running-behind w-priority w-deadline '+
  'w-reaching w-following w-make-sure w-hand-over w-requirements w-include w-budget w-offer-option '+
  'w-experience w-previous w-strength w-goal w-improve w-feedback w-example w-interest '+
  'w-point w-perspective w-summarize w-weigh w-scope w-clarify-scope w-address w-expect'
 ).split(' ');
})();
