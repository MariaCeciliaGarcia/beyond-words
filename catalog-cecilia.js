'use strict';
(() => {
 const c=window.JUJIAN_CATALOG;
 c.domains.push({id:'cecilia',track:'spoken',name:'Cecilia',description:'每天遇见的表达，按日期收好，接着学、接着复习。'});
 c.collections.push({id:'cecilia',domain:'cecilia',name:'Cecilia',description:'每日材料'});
 const added=[...(window.BW_CECILIA_A||[]),...(window.BW_CECILIA_B||[])];
 c.scenes.push({id:'cecilia-dates',name:'每日语料',domain:'cecilia',description:'按日期整理的表达。',children:(window.BW_DAILY_MATERIALS||[]).map(d=>({id:d.id,name:d.date,units:[...new Set(d.items.flatMap(i=>[i.unitId,...(i.practiceIds||[])]).filter(Boolean))]}))});
 c.functions.push({id:'cecilia-expressions',name:'每日表达',description:'来自每天材料的表达。',children:[{id:'cecilia-compose',name:'组织表达',units:added.filter(u=>u.practiceProfile!=='scenario').map(u=>u.id)},{id:'cecilia-responses',name:'自然接话',units:added.filter(u=>u.practiceProfile==='scenario').map(u=>u.id)}].filter(x=>x.units.length)});
 c.learningOrder=[...(c.learningOrder||[]),...added.map(u=>u.id)];
 for(const u of added){const k=c.expressionKinds?.find(k=>k.id===(u.practiceProfile==='scenario'?'response':'pattern'))||c.expressionKinds?.[0];if(k&&!k.units.includes(u.id))k.units.push(u.id);}
})();
