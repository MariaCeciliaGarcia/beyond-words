'use strict';
/* Lexical support and reusable rules are different kinds of help. Old snapshots
   retain their original hints; new authored questions can specify both explicitly. */
(() => {
 const stopWords = new Set(('a an the i you he she it we they me us him her them my our your their someone somebody something be am is are was were have has had do does did can could will would shall should may might must not no to of for in on at with from by as and or if that this there what how when where why its one so than then please').split(' '));
 const norm = value=>String(value||'').toLowerCase().replace(/[’‘]/g,"'");
 const enTokens = value=>(norm(value).match(/[a-z]+(?:'[a-z]+)?/g)||[]).map(word=>word.replace(/(?:ing|ed|s)$/,''));
 const grammarLabel = /过去分词|过去式|动词变化|动词形式|原形|单数|复数|第三人称|完成时|现在时|过去时|时态|主语|宾语|宾格|主格|助动词|系动词|从句|语序|句式|结构|开头|语块|语气|固定短回应|前面不|不加|后接|放中间|放在|(?:\b(?:that|if|she|he|be|have|has)\b.*后)|^-?ing$/i;
 const relationLabels = /最晚|不晚于|之前|以前|到.*为止|截止|届时/;
 const clean = text=>String(text||'').replace(/[’]/g,"'").trim();
 function isTargetLexical(en,unit=typeof lesson!=='undefined'?lesson:null){
  if(!unit)return true;
  const anchors=enTokens(unit.expression).filter(t=>t.length>2&&!stopWords.has(t));
  const words=new Set(enTokens(en));
  return anchors.some(t=>words.has(t));
 }
 function explicitLexical(items){return (items||[]).flatMap(item=>{
  if(typeof item==='string')return item.trim()?[{text:item,role:'support'}]:[];
  if(!item||typeof item!=='object')return [];
  const role=item.role==='target'?'target':'support';
  if(typeof item.text==='string')return item.text.trim()?[{text:item.text,role}]:[];
  const zh=item.zh||item.label,en=item.en||item.value;
  return typeof zh==='string'&&typeof en==='string'&&zh.trim()&&en.trim()?[{text:`${zh}：${en}`,role}]:[];
 });}
 function explicitGrammar(items){return (items||[]).flatMap(item=>{
  if(typeof item==='string')return item.trim()?[{text:item,role:'support'}]:[];
  if(!item||typeof item!=='object')return [];
  const role=item.role==='target'?'target':'support';
  if(typeof item.text==='string')return item.text.trim()?[{text:item.text,role}]:[];
  const zh=item.zh||item.label,en=item.en||item.value;
  return typeof zh==='string'&&typeof en==='string'&&zh.trim()&&en.trim()?[{text:`${zh}：${en}`,role}]:[];
 });}
 function legacyHelp(q){
  const words=[],grammar=[];
  // A complete answer or metalinguistic instruction is never recycled as a vocabulary hint.
  const chunks=String(q.hint||'').split(/[\n；;]/).map(s=>s.trim()).filter(Boolean);
  for(const chunk of chunks){
   const match=chunk.match(/^([^：:]+)[：:]\s*(.+)$/);if(!match)continue;
   let label=match[1].trim(),value=match[2].trim();if(!/[A-Za-z]/.test(value))continue;
   if(grammarLabel.test(label)){
    if(/过去分词/.test(label)&&/[a-z]/i.test(label))words.push({text:`${label.replace(/的?过去分词/,'动词变化')}：${value}（过去分词）`,role:'support'});
    else if(/过去式|动词变化|动词形式|原形|单数|复数|宾格|主格/.test(label))words.push({text:`${label}：${value}`,role:'support'});
    continue;
   }
   // Grammar is generalized; the replaceable noun/time word remains directly available.
   if(/^by\s+/i.test(value)&&relationLabels.test(label)){
    grammar.push({text:'截止：by + 时间点表示不晚于该时间，包含截止点。',role:'support'});
    const tail=value.replace(/^by\s+/i,'');if(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)$/i.test(tail))words.push({text:`${{monday:'周一',tuesday:'周二',wednesday:'周三',thursday:'周四',friday:'周五',saturday:'周六',sunday:'周日'}[tail.toLowerCase()]}：${tail}`,role:'support'});
    continue;
   }
   if(/^(?:will|shall)\s+(?:be|have|do|[a-z]+)$/i.test(value)&&/将来|未来|以后/.test(label)){
    grammar.push({text:'将来：will + 动词原形；be 的原形仍是 be。',role:'support'});continue;
   }
   if(/^on\s+(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)(?:s)?$/i.test(value)){
    const day=value.replace(/^on\s+/i,'').replace(/s$/,'');words.push({text:`${label.replace(/每(?:个)?/,'').replace(/（.*?）/g,'')}：${day}`,role:'support'});
    grammar.push({text:'星期：on + 星期；表示每逢这一天时，星期名称可用复数。',role:'support'});continue;
   }
   if(/去过某地/.test(label)&&/been to/.test(value)){grammar.push({text:'经历：have/has been to + 地点表示去过某地。',role:'support'});continue;}
   // Skip sentence-sized fragments and grammatical templates instead of revealing the answer.
   const englishPart=value.replace(/（.*?）/g,'').trim();
   const tokens=englishPart.match(/[A-Za-z]+(?:['’][a-z]+)?/g)||[];
   if(/\+|…|\.\.\.|[\u4e00-\u9fff]/.test(englishPart)||tokens.length>10||/^(?:I|We|He|She|They|You|It|There)\s+(?:am|is|are|was|were|will|would|could|should|have|has|had|do|does|did)\b/i.test(englishPart))continue;
   if(/^(?:将来|过去|现在进行|完成时|否定|疑问|被动|比较|语法|结构|句型|人称|一般现在)/.test(label))continue;
   const target=isTargetLexical(englishPart);
   words.push({text:`${label}：${value}`,role:target?'target':'support'});
  }
  return {words,grammar};
 }
 function uniqueHelp(items){const seen=new Set();return items.filter(item=>{const key=clean(item.text);if(!key||seen.has(key))return false;seen.add(key);return true;});}
 function getQuestionHelp(q){
  const legacy=legacyHelp(q);
  const isResponse=typeof questionType==='function'&&questionType(q)!=='input';
  let words=Array.isArray(q.lexicalHints)?explicitLexical(q.lexicalHints):legacy.words;
  let grammar=Array.isArray(q.grammarHints)?explicitGrammar(q.grammarHints):legacy.grammar;
  const rule=typeof expressionHint==='function'?expressionHint(q):'';
  if(!Array.isArray(q.grammarHints)&&rule){
   grammar=grammar.filter(item=>!(item.text.startsWith('将来：')&&/will/.test(rule))&&!(item.text.startsWith('截止：')&&/by \+ 时间点/.test(rule)));
   grammar.unshift({text:rule,role:'target'});
  }
  const formula=q.frame||(typeof lesson!=='undefined'?lesson.formula:'');
  if(!isResponse&&formula&&!grammar.some(item=>clean(item.text)===clean(formula)))grammar.unshift({text:`表达结构：${formula}`,role:'target'});
  // Pragmatic-choice help concerns tone and context, never an option or verbatim response.
  if(isResponse){
   words=[];
   if(Array.isArray(q.grammarHints))grammar=explicitGrammar(q.grammarHints);
   else grammar=rule?[{text:rule,role:'target'}]:[];
   if(q.guidance)grammar.unshift({text:q.guidance,role:'target'});
   // Authored vocabulary may explain a comparison response (e.g. a rude word).
   // Never mine the old free-text hint or a correct answer for such guidance.
   if(Array.isArray(q.lexicalHints))grammar=[...explicitLexical(q.lexicalHints),...grammar];
  }
  return {words:uniqueHelp(words),frame:uniqueHelp(grammar),response:isResponse};
 }
 function renderQuestionHintContent(q,kind){
  const items=getQuestionHelp(q)[kind==='words'?'words':'frame'];
  if(!items.length)return '<p class="small">这题所需词语已在题面给出，可以先试着表达。</p>';
  const escape=typeof esc==='function'?esc:value=>String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  return `<div class="question-hint-lines">${items.map(item=>`<p class="question-hint-line">${escape(item.text)}</p>`).join('')}</div>`;
 }
 function markQuestionHelp(q,qs,kind){
  const help=getQuestionHelp(q),items=help[kind==='words'?'words':'frame'];
  if(items.some(item=>item.role==='target')){qs.usedHint=true;qs.targetSeen=true;}
  if(items.some(item=>item.role==='support'))qs.supportSeen=true;
 }
 // Compatibility map for the existing expressionHint API: only authored rules,
 // never answer-derived grammar. The new renderer still prefers explicit fields.
 const compatibility=window.JUJIAN_HINT_RULES||(window.JUJIAN_HINT_RULES={});
 for(const unit of [...(window.BW_CECILIA_A||[]),...(window.BW_CECILIA_B||[])]){
  if(compatibility[unit.id])continue;
  const core=`句式：${unit.formula}`;
  const authored=q=>{const first=(q.grammarHints||[]).map(x=>typeof x==='string'?x:x.text).find(Boolean);return first?(first.includes('：')?first:`用法：${first}`):core;};
  compatibility[unit.id]={core,entry:authored(unit.entry),learning:unit.learning.map(authored),review:unit.review.map(authored)};
 }
 Object.assign(window,{getQuestionHelp,renderQuestionHintContent,markQuestionHelp});
})();
var getQuestionHelp=window.getQuestionHelp;
var renderQuestionHintContent=window.renderQuestionHintContent;
var markQuestionHelp=window.markQuestionHelp;
