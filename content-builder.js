'use strict';
// All prompts below are authored. This helper only assembles the shared schema.
window.JUJIAN_BUILD = (collection, id, meaning, expression, formula, explanation, boundary, rows) => {
  if(rows.length!==10)throw new Error(`${id}: expected ten authored exercises`);
  const questions=rows.map(([zh,en,hint,variants=[]],i)=>({id:(i<5?'l':'r')+(i%5+1),zh,answers:[en,...variants],hint}));
  return {id,collection,meaning,expression,formula,explanation,boundary,checkpoint:formula,
    examples:questions.slice(0,2).map(q=>({en:q.answers[0],zh:q.zh})),
    entry:{...questions[0],id:'entry'},learning:questions.slice(0,5),review:questions.slice(5)};
};
// Replace a complete expression, never a prefix of another word or contraction.
window.JUJIAN_WHOLE_REPLACE = (text,from,to) => {
 const escaped=from.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 const pattern=new RegExp('\\b'+escaped+'\\b','g');
 return text.replace(pattern,(match,offset,original)=>{
  if(/ have$/.test(from)&&/'ve$/.test(to)){
   const tail=original.slice(offset+match.length).trimStart();
   const auxiliary=/^(?:(?:not|already|just|never|ever|recently|finally|still)\s+)*(?:been|had|got|gotten|done|seen|heard|found|read|written|taken|made|sent|received|completed|finished|checked|decided|changed|booked|tried|used|met|lost|forgotten|learned|learnt|worked|put|narrowed|ruled|committed|missed|eaten)\b/;
   if(!auxiliary.test(tail))return match;
  }
  return to;
 });
};
// Expand only known full forms; ambiguous contracted forms are never guessed.
window.JUJIAN_MORE_UNIT = (domain,...args) => {
 const unit=window.JUJIAN_BUILD(domain,...args);unit.domain=domain;unit.domains=[domain];
 const pairs=[['I am',"I'm"],['I will',"I'll"],['I would',"I'd"],['I have',"I've"],['We are',"We're"],['We will',"We'll"],['We have',"We've"],['They are',"They're"],['She is',"She's"],['He is',"He's"],['It is',"It's"],['That is',"That's"],['cannot',"can't"],['do not',"don't"],['does not',"doesn't"],['did not',"didn't"],['is not',"isn't"],['are not',"aren't"],['have not',"haven't"],['has not',"hasn't"]];
 for(const q of [unit.entry,...unit.learning,...unit.review]){const out=new Set(q.answers);for(const [full,short]of pairs)for(const answer of [...out]){const changed=window.JUJIAN_WHOLE_REPLACE(answer,full,short);if(changed!==answer)out.add(changed);}q.answers=[...out];}
 return unit;
};
