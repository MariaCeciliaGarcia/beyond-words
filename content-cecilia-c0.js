'use strict';
// Shared authoring kit for the 2026-11-04 Cecilia units (content-cecilia-c1..c3.js).
// Same helper shapes as content-cecilia-b.js. Not content itself.
window.BW_CECILIA_KIT=(() => {
 const lex = pairs => pairs.map(([zh,en])=>({zh,en,role:'support'}));
 const input=(id,scene,zh,en,words=[],grammar='',variants=[])=>({id,type:'input',scene,zh,target:zh,answers:[en,...variants],hint:words.map(([a,b])=>`${a}：${b}`).join('；')||grammar,lexicalHints:lex(words),grammarHints:grammar?[{text:grammar,role:'support'}]:[]});
 const unit=(id,meaning,expression,formula,explanation,boundary,entry,rows)=>{
  if(rows.length!==10)throw Error(id+' needs ten authored tasks');
  return {id,domain:'cecilia',domains:['cecilia'],collection:'cecilia',pilot:true,practiceProfile:'compose',meaning,expression,formula,explanation,boundary,checkpoint:formula,examples:rows.slice(0,2).map(q=>({zh:q.zh,en:q.answers[0]})),entry:{...entry,id:'entry'},learning:rows.slice(0,5).map((q,i)=>({...q,id:'l'+(i+1)})),review:rows.slice(5).map((q,i)=>({...q,id:'r'+(i+1)}))};
 };
 const q=(scene,zh,en,words=[],grammar='',variants=[])=>input('',scene,zh,en,words,grammar,variants);
 // Adds contracted variants (I am -> I'm ...) to every answer; call once on the finished unit list.
 const finish=units=>{
  for(const u of units){
   for(const task of [u.entry,...u.learning,...u.review]){
    const variants=new Set(task.answers);
    if(window.JUJIAN_WHOLE_REPLACE)for(const [full,short]of [['I am',"I'm"],['I will',"I'll"],['I have',"I've"],['We are',"We're"],['We will',"We'll"],['We have',"We've"],['They are',"They're"],['She is',"She's"],['He is',"He's"],['It is',"It's"],['cannot',"can't"],['do not',"don't"],['does not',"doesn't"],['did not',"didn't"],['is not',"isn't"],['are not',"aren't"],['have not',"haven't"],['has not',"hasn't"]])for(const answer of [...variants])variants.add(window.JUJIAN_WHOLE_REPLACE(answer,full,short));
    task.answers=[...variants];
   }
  }
  return units;
 };
 return {lex,input,unit,q,finish};
})();
