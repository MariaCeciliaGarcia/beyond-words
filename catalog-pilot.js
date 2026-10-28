'use strict';
(()=>{
 const c=window.JUJIAN_CATALOG,id='p-in-the-evening';
 c.scenes.find(g=>g.id==='rhythm').children.find(s=>s.id==='habits').units.push(id);
 c.scenes.find(g=>g.id==='home').children.find(s=>s.id==='leisure').units.push(id);
 const group=c.functions.find(g=>g.id==='narrative');
 group.children.push({id:'time-of-day',name:'说明事情发生的时段',units:[id]});
 c.expressionKinds.find(k=>k.id==='collocation')?.units.push(id);
 const pilots=['p-in-the-evening','p-done-with','p-fair-enough'];
 c.learningOrder=[...pilots,...c.learningOrder.filter(id=>!pilots.includes(id))];
})();
