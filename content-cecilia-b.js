'use strict';
// Authored daily material practice: every row has its own communicative situation.
window.BW_CECILIA_B = (() => {
 const lex = pairs => pairs.map(([zh,en])=>({zh,en,role:'support'}));
 const input=(id,scene,zh,en,words=[],grammar='',variants=[])=>({id,type:'input',scene,zh,target:zh,answers:[en,...variants],hint:words.map(([a,b])=>`${a}：${b}`).join('；')||grammar,lexicalHints:lex(words),grammarHints:grammar?[{text:grammar,role:'support'}]:[]});
 const unit=(id,meaning,expression,formula,explanation,boundary,entry,rows)=>{
  if(rows.length!==10)throw Error(id+' needs ten authored tasks');
  return {id,domain:'cecilia',domains:['cecilia'],collection:'cecilia',pilot:true,practiceProfile:'compose',meaning,expression,formula,explanation,boundary,checkpoint:formula,examples:rows.slice(0,2).map(q=>({zh:q.zh,en:q.answers[0]})),entry:{...entry,id:'entry'},learning:rows.slice(0,5).map((q,i)=>({...q,id:'l'+(i+1)})),review:rows.slice(5).map((q,i)=>({...q,id:'r'+(i+1)}))};
 };
 const q=(scene,zh,en,words=[],grammar='',variants=[])=>input('',scene,zh,en,words,grammar,variants);
 const recall=(scene,intent,expression,feedback,hint)=>({id:'',type:'recall',scene,intent,zh:'先想一句回应，再看表达。',target:'这时，你会怎么回应？',answers:[expression],hint,lexicalHints:[],grammarHints:[{text:hint,role:'support'}],feedback});
 const choice=(scene,target,choices,correctChoice,expression,feedback,hint,intent='')=>({id:'',type:'choice',scene,intent,zh:target,target,choices:choices.map((text,i)=>({id:['a','b','c'][i],text})),correctChoice,answers:[expression],hint,lexicalHints:[],grammarHints:[{text:hint,role:'support'}],feedback});
 const scenario=(id,meaning,expression,explanation,boundary,entry,rows,personalPrompt)=>{
  const u=unit(id,meaning,expression,expression+'（独立回应或话语标记）',explanation,boundary,entry,rows);u.practiceProfile='scenario';u.personalPrompt=personalPrompt;return u;
 };
 const units=[
 unit('c28-chance-to','说有机会做某事','a chance to do…','a chance to + 动词原形',
 '把机会与具体动作连在一起，可以说得到、拥有、错过或没有机会。这里主要是做某事的机会，不是某事发生的概率。',
 'a chance to do 指行动机会；a chance of something happening 常谈发生可能性，两种意思不能不看语境互换。',
 q('同事问你会议收获。','我有机会见到了新团队。','I had a chance to meet the new team.',[['新团队','the new team']],'过去的机会：had a chance；to 后接动词原形。'),[
 q('朋友邀请你参加开放日。','你会有机会看看实验室。','You will have a chance to see the lab.',[['实验室','the lab']],'将来：will 后接动词原形。',["You'll have a chance to see the lab."]),
 q('她说起在国外的经历。','她有机会每天练习英语。','She had a chance to practise English every day.',[['练习英语','practise English / practice English']],'过去：have 用 had；to 后不随人称变形。',['She had a chance to practice English every day.']),
 q('大家刚完成忙碌的一天。','我们没有机会讨论这个计划。','We did not have a chance to discuss the plan.',[['讨论这个计划','discuss the plan']],'过去否定：did not 后接 have。',["We didn't have a chance to discuss the plan."]),
 q('你关心同事是否完成准备。','你有机会读那份报告了吗？','Have you had a chance to read the report?',[['读报告','read the report']],'问到现在：have/has + had a chance。'),
 q('你介绍志愿活动。','它给了我一个帮助别人的机会。','It gave me a chance to help others.',[['给某人','give someone'],['帮助别人','help others']],'give 的过去式：gave。'),
 q('他们正在等项目开始。','他们希望有机会试试新工具。','They hope to have a chance to try the new tool.',[['希望做','hope to do'],['新工具','the new tool']],'hope 后用 to do；chance 后的动作也用 to do。'),
 q('讲述昨天错过的交流。','他没有机会问任何问题。','He did not have a chance to ask any questions.',[['提问','ask questions']],'否定句中可用 any。',["He didn't have a chance to ask any questions."]),
 q('你鼓励第一次参加活动的人。','这会是一个认识新朋友的机会。','This will be a chance to meet new people.',[['认识新朋友','meet new people']],'will 后用 be。'),
 q('回顾午饭时的谈话。','我们终于有机会单独聊聊了。','We finally had a chance to talk in private.',[['终于','finally'],['单独谈话','talk in private']],'过去机会：had a chance。'),
 q('你问老师是否能参加下一次活动。','我会有机会再试一次吗？','Will I have a chance to try again?',[['再试一次','try again']],'将来问句：Will + 主语 + have…?')
 ]),
 unit('c28-focus-on','把注意力集中在某件事上','focus on…','focus on + 名词 / 动词-ing',
 '说自己把主要注意力放在哪里，或请人先集中做一件事。focus on 后既能接任务，也能接具体动作。',
 'on 是介词，后接动作时用动词-ing；focus on 不自动表示排除所有其他事情，是否完全专注由上下文决定。',
 q('消息太多，你想先完成工作。','我需要专注于这份报告。','I need to focus on this report.',[['需要做','need to do'],['报告','report']],'need 后接 to + 动词原形。'),[
 q('你介绍自己的学习安排。','我每天早上专注于写作。','I focus on writing every morning.',[['写作','writing'],['每天早上','every morning']],'on 后接动作时用动词-ing。'),
 q('同事问她的工作重点。','她专注于客户的问题。','She focuses on customers\' problems.',[['客户的问题',"customers' problems"]],'第三人称单数：focuses。',["She focuses on customer problems."]),
 q('你们回顾昨天的会议。','我们专注于解决这个问题。','We focused on solving this problem.',[['解决问题','solve a problem']],'过去：focused；on 后用 solving。'),
 q('你提醒朋友先做一件事。','先专注于完成这个任务。','Focus on finishing this task first.',[['完成任务','finish a task'],['先','first']],'祈使句用动词原形；on 后用 finishing。'),
 q('有人问明天的计划。','他们会专注于测试新功能。','They will focus on testing the new feature.',[['测试','test'],['新功能','the new feature']],'will 后用 focus；on 后用 testing。',["They'll focus on testing the new feature."]),
 q('回顾考试前的准备。','我没有专注于最重要的部分。','I did not focus on the most important part.',[['最重要的部分','the most important part']],'did not 后接动词原形。',["I didn't focus on the most important part."]),
 q('你询问学习方法。','你怎样专注于一件事？','How do you focus on one thing?',[['一件事','one thing']],'一般现在时问法：How do you + 动词原形…?'),
 q('她正调整自己的习惯。','她正在专注于改善睡眠。','She is focusing on improving her sleep.',[['改善睡眠','improve her sleep']],'进行时：is focusing；on 后用 improving。',["She's focusing on improving her sleep."]),
 q('你和朋友一起讨论求职安排。','我们应该专注于自己能改变的事情。','We should focus on what we can change.',[['改变','change']],'what 引导的部分用陈述语序。'),
 q('昨天环境太吵。','他没法专注于阅读。','He could not focus on reading.',[['阅读','reading']],'过去能力否定：could not + 动词原形。',["He couldn't focus on reading."])
 ]),
 unit('c28-wonder-if','表达心里不确定的猜想或疑问','I wonder if…','主语 + wonder / wondered if + 陈述语序',
 '把一个还不知道答案的问题说出来，可以是好奇、猜测或思考。I wonder if 可以是自言自语，也可以邀请对方一起判断。',
 '从句用陈述语序。I was wondering if 常用于委婉请求，本表达也可只是内心疑问，不能总翻成“请问”。',
 q('你看到店门关着，不确定今天营业吗。','我不知道这家店今天开不开。','I wonder if this shop is open today.',[['店','shop / store'],['营业','be open']],'if 后用 this shop is，不用 is this shop。',['I wonder if this store is open today.']),[
 q('你准备联系很久没见的朋友。','我不知道她还住不住在这里。','I wonder if she still lives here.',[['仍然','still'],['住在这里','live here']],'if 从句为陈述语序；she 后用 lives。'),
 q('我们等着消息。','我们想知道他们是否收到了邮件。','We wonder if they received the email.',[['收到邮件','receive the email']],'收到发生在过去，使用 received。'),
 q('你回忆昨天找不到人的时候。','我当时想，他是不是忘了这次见面。','I wondered if he had forgotten the meeting.',[['忘记','forget'],['见面','meeting']],'先于过去猜想的动作：had + 过去分词；forget 的过去分词是 forgotten。'),
 q('她看到一栋旧楼。','她想知道这以前是不是一家学校。','She wonders if this used to be a school.',[['以前是','used to be'],['学校','school']],'she 后用 wonders；used to 后用原形。'),
 q('你们在决定周末计划。','我不知道明天会不会下雨。','I wonder if it will rain tomorrow.',[['下雨','rain'],['明天','tomorrow']],'if 在这里表示是否，可接 will 表达将来。'),
 q('朋友很久没有回复。','我不知道他是不是很忙。','I wonder if he is busy.',[['忙','busy']],'be 与主语 he 一致。',["I wonder if he's busy."]),
 q('你们回忆上次去过的小店。','我们想知道那位老板还记不记得我们。','We wonder if the owner still remembers us.',[['老板','the owner'],['记得我们','remember us']],'owner 是单数，谓语用 remembers。'),
 q('你回顾自己犹豫的一刻。','我当时不知道自己是不是犯了错。','I wondered if I had made a mistake.',[['犯错','make a mistake']],'过去之前发生的事：had made。'),
 q('她正在看一份课程介绍。','她想知道这门课是否适合初学者。','She wonders if this course is suitable for beginners.',[['适合','be suitable for'],['初学者','beginners']],'从句保留陈述语序：this course is…'),
 q('你发现一个别人没注意的细节。','我不知道这是不是重要。','I wonder if this is important.',[['重要','important']],'if 后用 this is，不用 is this。')
 ]),
 unit('c28-want-someone','说明希望某个人做什么','want someone to do…','want + 宾格人称 / 人 + to + 动词原形',
 '把自己的意愿与执行动作的人连起来。I want you to… 直接表达意愿，对不熟的人提要求时可能显得强硬。',
 'want 后的执行者用 me/him/her/us/them 等宾格，后接 to do。I want you to do 不等于 I want to do：前者由 you 执行动作。',
 q('朋友问应用应该怎么改。','我想让它提示接下来可以输入什么。','I want it to suggest what to type next.',[['提示','suggest'],['接下来输入什么','what to type next']],'want + 执行者 + to do；what to type 是疑问词 + 不定式。'),[
 q('你请朋友介绍需求。','我想让你先看看这个例子。','I want you to look at this example first.',[['看看','look at'],['例子','example']],'执行者 you 放 want 后，后接 to look。'),
 q('她告诉家人自己的期待。','她想让我们周日去看她。','She wants us to visit her on Sunday.',[['去看她','visit her'],['周日','on Sunday']],'第三人称用 wants；we 作宾语变为 us。'),
 q('昨天他安排过你的工作。','他想让我给他开发一个应用。','He wanted me to build him an app.',[['给某人开发应用','build someone an app']],'过去用 wanted；执行者 I 变 me。'),
 q('你们向维修人员说明需求。','我们想让他们检查网络连接。','We want them to check the internet connection.',[['检查','check'],['网络连接','the internet connection']],'执行者 they 作宾语用 them。'),
 q('你不希望朋友继续担心。','我不想让你为这件事担心。','I do not want you to worry about this.',[['为某事担心','worry about something']],'否定在 want 前：do not want。',["I don't want you to worry about this."]),
 q('你在确认老师的要求。','她想让我们什么时候交作业？','When does she want us to hand in the homework?',[['交作业','hand in the homework']],'does 后用 want 原形，执行者保留 us。'),
 q('你们解释昨天的安排。','我们想让他自己把所有内容打出来。','We wanted him to type everything himself.',[['把所有内容打出来','type everything'],['他自己','himself']],'him 是动作执行者；himself 强调亲自做。'),
 q('朋友不确定是否该离开。','你想让我留下来吗？','Do you want me to stay?',[['留下来','stay']],'问句用 Do you want；执行者是 me。'),
 q('家人问你弟弟的意见。','他不想让任何人替他做决定。','He does not want anyone to decide for him.',[['任何人','anyone'],['替他决定','decide for him']],'does not 后用 want 原形。',["He doesn't want anyone to decide for him."]),
 q('你说明自己为什么按回车。','我想让它进入下一步。','I want it to go to the next step.',[['进入下一步','go to the next step']],'it 是执行动作的对象，后接 to go。')
 ]),
 unit('c28-cant-take','表示已经再也受不了了','cannot take it anymore','主语 + cannot / could not take + it / 对象 + anymore',
 'take 在这里指承受。can’t take it anymore 表示忍耐已经到极限，常用于压力、噪声或反复的问题。',
 '语气强烈，通常带情绪；不是普通的“不喜欢”。it 指上下文已明确的处境。any more 也是常见拼写，不能据此判错。',
 q('噪声一直不停，你向朋友抱怨。','我再也受不了了。','I cannot take it anymore.',[],'cannot 后用 take 原形。',["I can't take it anymore.",'I cannot take it any more.',"I can't take it any more."]),[
 q('昨天等待了三个小时，你说起当时的状态。','我当时再也受不了了。','I could not take it anymore.',[],'过去的承受能力用 could not。',["I couldn't take it anymore.",'I could not take it any more.']),
 q('朋友发现她为何走开。','她再也受不了这些争吵了。','She cannot take the arguments anymore.',[['争吵','arguments']],'cannot 后接动词原形。',["She can't take the arguments anymore.",'She cannot take the arguments any more.']),
 q('你和室友一起投诉。','我们再也受不了这噪声了。','We cannot take this noise anymore.',[['这噪声','this noise']],'noise 在这里不可数。',["We can't take this noise anymore.",'We cannot take this noise any more.']),
 q('同事问他为什么辞职。','他当时再也受不了这种压力了。','He could not take the pressure anymore.',[['压力','pressure']],'过去的极限用 could not take。',["He couldn't take the pressure anymore.",'He could not take the pressure any more.']),
 q('你想确认朋友是否真的到了极限。','你真的再也受不了了吗？','Can you really not take it anymore?',[['真的','really']],'can 提到句首，not 仍修饰 take。',['Can you really not take it any more?']),
 q('昨晚邻居一直大声放音乐。','我们当时再也受不了了。','We could not take it anymore.',[],'过去用 could not；it 代指已知处境。',["We couldn't take it anymore.",'We could not take it any more.']),
 q('你的手机每天重复出现相同故障。','我再也受不了这些问题了。','I cannot take these problems anymore.',[['这些问题','these problems']],'take 可以直接接所承受的对象。',["I can't take these problems anymore.",'I cannot take these problems any more.']),
 q('他解释为什么需要休息。','他再也受不了没完没了的电话了。','He cannot take the constant calls anymore.',[['没完没了的电话','the constant calls']],'he 后仍用 cannot take，不加 s。',["He can't take the constant calls anymore.",'He cannot take the constant calls any more.']),
 q('你回顾她昨天离开会议的原因。','她当时再也受不了了。','She could not take it anymore.',[],'过去用 could not take。',["She couldn't take it anymore.",'She could not take it any more.']),
 q('大家被迫连着熬夜。','他们再也受不了这种安排了。','They cannot take this schedule anymore.',[['这种安排','this schedule']],'cannot 后接 take 原形。',["They can't take this schedule anymore.",'They cannot take this schedule any more.'])
 ]),
 unit('c28-all-have-to','说明要做的其实只有一件事','All I have to do is…','All + 主语 + have/has to do + is + 动词原形 / to do',
 '把必须完成的动作缩减到一件事，强调“只需要”。is 后常直接用动词原形，带 to 的形式也成立。',
 '只在确实可以这样简化时用；它不表示这件事一定轻松。have to 随主语变化，但 all 引出的整个动作部分后用 is。',
 q('你介绍软件的新操作。','我只需要按回车。','All I have to do is press Enter.',[['按回车','press Enter / hit Enter']],'is 后可直接用动词原形，也可用 to do。',['All I have to do is hit Enter.','All I have to do is to press Enter.']),[
 q('你告诉朋友报名步骤。','你只需要填这张表。','All you have to do is fill in this form.',[['填写表格','fill in a form / fill out a form']],'is 后可用原形。',['All you have to do is fill out this form.','All you have to do is to fill in this form.']),
 q('她的准备工作已经做完。','她只需要等回复。','All she has to do is wait for a reply.',[['等回复','wait for a reply']],'she 后用 has to。',['All she has to do is to wait for a reply.']),
 q('昨天手续很简单。','我们当时只需要出示护照。','All we had to do was show our passports.',[['出示护照','show our passports']],'过去：had to do；对应系动词用 was。',['All we had to do was to show our passports.']),
 q('你解释保存文件的最后一步。','我只需要点这个按钮。','All I have to do is click this button.',[['点击按钮','click a button']],'is 后用动作原形。',['All I have to do is to click this button.']),
 q('对方已经收到全部材料。','他们只需要确认时间。','All they have to do is confirm the time.',[['确认时间','confirm the time']],'they 后用 have to。',['All they have to do is to confirm the time.']),
 q('回顾他昨天的任务。','他当时只需要发送一封邮件。','All he had to do was send an email.',[['发送邮件','send an email']],'过去用 had to do was。',['All he had to do was to send an email.']),
 q('你说明问题解决后的状态。','我们只需要重新登录。','All we have to do is log in again.',[['重新登录','log in again']],'动作放在 is 后。',['All we have to do is to log in again.']),
 q('朋友觉得任务很多，你解释实际要求。','你只需要读第一页。','All you have to do is read the first page.',[['第一页','the first page']],'read 在这里用原形。',['All you have to do is to read the first page.']),
 q('她已经完成账号设置。','她只需要选一个日期。','All she has to do is choose a date.',[['选择日期','choose a date']],'she 后用 has，is 后用 choose。',['All she has to do is to choose a date.']),
 q('你回忆简单的取件流程。','我当时只需要说出自己的名字。','All I had to do was give my name.',[['报上名字','give my name']],'过去用 had to do was。',['All I had to do was to give my name.'])
 ]),
 unit('c28-maybe-should','试探性地提出自己或他人不如这样做','Maybe I should just…','Maybe + 主语 + should just + 动词原形',
 '提出一个还在考虑的做法。just 常带“干脆就这样”的意味，可以是简化选择，也可以透露一点无奈。',
 '这是试探想法，不是已经决定。should 后不加 to；换成 you 时成为对别人的建议，语气仍受上下文影响。',
 q('你被复杂流程弄累了。','要不我干脆明天再试吧。','Maybe I should just try again tomorrow.',[['再试','try again'],['明天','tomorrow']],'should 后直接接动词原形。'),[
 q('你已经反复修改消息。','要不我干脆给她打个电话。','Maybe I should just call her.',[['给她打电话','call her']],'should 后用 call，不加 to。'),
 q('你们讨论天气不好的出游。','要不我们干脆待在家里。','Maybe we should just stay home.',[['待在家','stay home / stay at home']],'主语换 we，should 不变。',['Maybe we should just stay at home.']),
 q('他反复找不到那个选项。','要不他干脆问工作人员。','Maybe he should just ask a member of staff.',[['工作人员','a member of staff']],'he 后也用 should ask。'),
 q('你觉得所有准备都不够完美。','要不我干脆先开始。','Maybe I should just get started.',[['开始做','get started']],'just 在 should 后、动作前。'),
 q('朋友在犹豫是否再写一封长信。','要不你干脆发条短消息。','Maybe you should just send a short message.',[['发短消息','send a short message']],'you should 可作委婉建议。'),
 q('你重新考虑学习安排。','要不我干脆先休息一下。','Maybe I should just take a break first.',[['休息一下','take a break'],['先','first']],'should 后接 take。'),
 q('一群人迟迟选不出餐厅。','要不我们干脆在这里吃。','Maybe we should just eat here.',[['在这里吃','eat here']],'should 后用 eat 原形。'),
 q('她因为来回比较越来越迷茫。','要不她干脆选最简单的那个。','Maybe she should just choose the simplest one.',[['最简单的那个','the simplest one']],'she 后 should 不加 s。'),
 q('你正考虑放弃很复杂的工具。','要不我干脆自己写下来。','Maybe I should just write it down myself.',[['写下来','write it down'],['我自己','myself']],'myself 强调亲自做，不代替主语 I。'),
 q('朋友担心自己提出的问题太简单。','要不你干脆问一下。','Maybe you should just ask.',[['问一下','ask']],'试探建议：Maybe + 主语 + should just do。')
 ]),
 unit('c28-prepare-for','为将来的考试或事情做准备','prepare for…','prepare for + 事件 / 活动',
 '说明正在为某项将来的活动做准备。考试、面试、旅行、会议都可以放在 for 后面。',
 'prepare for an exam 是备考；prepare an exam 通常是出卷或准备考试本身，不等于学生备考。prepare to do 则强调准备采取某动作。',
 q('朋友问你周末为什么没空。','我在准备一场考试。','I am preparing for an exam.',[['考试','exam']],'正在准备：be preparing for。',["I'm preparing for an exam."]),[
 q('介绍她最近的安排。','她在准备下周的面试。','She is preparing for next week\'s interview.',[['下周的面试',"next week's interview"]],'进行时用 is preparing。',["She's preparing for next week's interview."]),
 q('你说起昨天的活动。','我们为会议做了准备。','We prepared for the meeting.',[['会议','meeting']],'过去用 prepared；活动前保留 for。'),
 q('朋友今天才收到通知。','他需要准备一场考试。','He needs to prepare for an exam.',[['需要做','need to do']],'he 后用 needs；to 后用 prepare。'),
 q('你们计划下月出行。','我们应该为旅行做准备。','We should prepare for the trip.',[['旅行','trip']],'should 后用动词原形。'),
 q('你询问同学的复习进度。','你已经开始为期末考试做准备了吗？','Have you started preparing for the final exams?',[['开始做','start doing'],['期末考试','the final exams']],'问到现在的进展：Have you started…?'),
 q('介绍他们明天的训练。','他们会为比赛做准备。','They will prepare for the competition.',[['比赛','competition']],'will 后用 prepare。',["They'll prepare for the competition."]),
 q('回顾你昨天的失误。','我没有为演讲做准备。','I did not prepare for the presentation.',[['演讲','presentation']],'did not 后用 prepare。',["I didn't prepare for the presentation."]),
 q('你让家人解释最近忙什么。','她在为什么做准备？','What is she preparing for?',[],'what 代替准备的事情；for 可以保留在句末。'),
 q('你告诉同事自己可用的时间。','我需要一点时间准备面试。','I need some time to prepare for the interview.',[['一点时间','some time'],['面试','interview']],'time 后可用 to do 说明时间用途。'),
 q('说起你以前的学习习惯。','我以前总是提早为考试做准备。','I used to prepare for exams early.',[['以前常常','used to'],['提早','early']],'used to 后接 prepare 原形。')
 ]),
 unit('c28-work-pressure','说明在压力下仍能良好工作','work well under pressure','work well under pressure',
 '评价一个人在时间紧、要求高等压力下仍能有效工作的能力。可以介绍自己的特点，也可以用具体过去经历支撑评价。',
 '这是能力描述，不表示喜欢高压或从不紧张。求职时最好配实际例子；under pressure 是承受压力，不是施加压力。',
 q('面试官询问你的工作特点。','我能在压力下良好工作。','I can work well under pressure.',[['良好地','well']],'can 后接 work 原形。'),[
 q('你向新同事介绍搭档。','她能在压力下良好工作。','She can work well under pressure.',[],'she 后的 can 不加 s。'),
 q('回顾昨天紧张的交付。','我们在压力下仍然做得很好。','We worked well under pressure.',[],'过去用 worked。'),
 q('面试官让你描述团队。','我的团队在压力下工作得很好。','My team works well under pressure.',[['我的团队','my team']],'把 team 当一个整体时用 works。'),
 q('你想了解候选人的经验。','你能在压力下良好工作吗？','Can you work well under pressure?',[],'能力问句把 can 提到主语前。'),
 q('你坦诚说明自己需要的环境。','我在压力下工作得不太好。','I do not work very well under pressure.',[['不太好','not very well']],'一般现在时否定：do not work。',["I don't work very well under pressure."]),
 q('你评价他上次的表现。','他在压力下工作得很好。','He worked well under pressure.',[],'回顾过去用 worked。'),
 q('你谈到团队未来的挑战。','我们需要学会在压力下良好工作。','We need to learn to work well under pressure.',[['学会','learn to do']],'need to learn to + 动词原形。'),
 q('主管正在询问她的表现。','她在压力下工作得好吗？','Does she work well under pressure?',[],'does 后用 work 原形。'),
 q('你描述经过培训的同事。','他们现在能在压力下良好工作了。','They can work well under pressure now.',[['现在','now']],'can 后用 work；now 可放句末。'),
 q('面试官追问具体经历。','我以前必须在压力下良好工作。','I had to work well under pressure.',[['过去必须','had to']],'had to 后接 work 原形。')
 ]),
 unit('c28-just-doing','强调光做某件事就会引起反应','Just doing…makes someone…','Just + 动词-ing短语 + makes + 人 + 形容词 / 动词原形',
 '把做某事本身当作原因，强调不需要更多条件就会产生某种反应。动作短语作主语时通常按单数处理。',
 'make someone + 形容词和 make someone + 动词原形都可。表达过去的反应用 made；后接动作不加 to。',
 q('你看到一长串岗位要求就紧张。','光看这些要求就让我焦虑。','Just reading these requirements makes me anxious.',[['看要求','read requirements'],['焦虑','anxious']],'动词-ing短语作主语；make + 人 + 形容词。'),[
 q('你说起自己想旅行的心情。','光想想这次旅行就让我开心。','Just thinking about the trip makes me happy.',[['想这次旅行','think about the trip'],['开心','happy']],'动词短语作主语用 thinking。'),
 q('她对公开发言有些紧张。','光站在这里就让她紧张。','Just standing here makes her nervous.',[['站在这里','stand here'],['紧张','nervous']],'her 是宾格，后接形容词 nervous。'),
 q('回顾昨天那封消息。','光读那封邮件就让我笑了。','Just reading that email made me laugh.',[['那封邮件','that email'],['笑','laugh']],'过去用 made；其后的动作 laugh 用原形。'),
 q('你们已经很累。','光听这些安排就让我们疲惫。','Just hearing these plans makes us tired.',[['听到安排','hear plans'],['疲惫','tired']],'us 为宾格；动词-ing主语后用 makes。'),
 q('这个故事特别好笑。','光记起这件事就让他微笑。','Just remembering it makes him smile.',[['记起','remember'],['微笑','smile']],'make someone do 中 do 不加 to。'),
 q('你回顾上周的求职经历。','光填写那张表就让我压力很大。','Just filling in that form made me feel stressed.',[['填表','fill in a form'],['感到有压力','feel stressed']],'过去用 made；后接 feel 原形。',['Just filling out that form made me feel stressed.']),
 q('她对那段音乐有特别的回忆。','光听这首歌就让她想起家。','Just hearing this song makes her think of home.',[['这首歌','this song'],['想起家','think of home']],'makes 后接 her，再用 think 原形。'),
 q('你们的假期越来越近。','光谈论假期就让我们兴奋。','Just talking about the holiday makes us excited.',[['谈论假期','talk about the holiday'],['兴奋','excited']],'talking 短语作单数主语。'),
 q('回想他昨天第一次上台。','光走进那个房间就让他紧张了。','Just walking into that room made him nervous.',[['走进房间','walk into a room']],'过去反应用 made。'),
 q('有人不理解你为何怕这个任务。','光想到这件事就让我担心。','Just thinking about it makes me worry.',[['想到这件事','think about it'],['担心','worry']],'makes me 后接 worry 原形。')
 ]),
 unit('c28-stress-out','说明某件事让人压力很大','stress someone out','事情 / 人 + stress + 人 + out',
 '说某件事让人紧张、焦虑或承受很大压力，常用于非正式交流。宾语可以是具体的人或 me/him/us 等代词。',
 '代词必须夹在 stress 和 out 中间，如 stress me out；不是 stress out me。feel stressed 描述自己的感受，stress someone out 指造成压力。',
 q('朋友问你为什么很累。','这些申请让我压力很大。','These applications stress me out.',[['这些申请','these applications']],'代词宾语放 stress 与 out 之间。'),[
 q('她不喜欢临时变化。','突然的变化让她压力很大。','Sudden changes stress her out.',[['突然的变化','sudden changes']],'复数主语用 stress；宾语用 her。'),
 q('回顾昨天的经历。','那次面试让我压力很大。','That interview stressed me out.',[['那次面试','that interview']],'过去用 stressed。'),
 q('你们谈起工作安排。','紧迫的截止日期让我们压力很大。','Tight deadlines stress us out.',[['紧迫的截止日期','tight deadlines']],'we 作宾语用 us。'),
 q('你想了解朋友为什么不愿参加。','这件事让你压力很大吗？','Does this stress you out?',[],'does 后用 stress 原形。'),
 q('他在谈自己的触发因素。','过多的选择让他压力很大。','Too many choices stress him out.',[['过多选择','too many choices']],'复数 choices 后用 stress。'),
 q('昨天大家一直在催你。','他们当时让我压力很大。','They stressed me out.',[],'回顾过去用 stressed。'),
 q('你解释最近的状态。','这些问题正在让我压力很大。','These problems are stressing me out.',[['这些问题','these problems']],'进行时：are stressing。'),
 q('你对朋友说明自己已经适应了。','考试不再让我那么紧张了。','Exams do not stress me out so much anymore.',[['那么多','so much'],['不再','not … anymore']],'复数主语否定用 do not。',["Exams don't stress me out so much anymore."]),
 q('家人问她昨天为什么睡不好。','等待结果让她压力很大。','Waiting for the results stressed her out.',[['等待结果','wait for the results']],'动词-ing短语作主语；过去用 stressed。'),
 q('你想让同伴体谅团队。','别让他们压力这么大。','Do not stress them out so much.',[['这么多','so much']],'否定祈使句：Do not + 原形；代词 them 居中。',["Don't stress them out so much."])
 ]),
 unit('c28-telling-you','加强自己接下来所说的话','I’m telling you,…','I am telling you, + 完整陈述',
 '在非正式谈话里强调自己说的是认真的、相信值得对方注意。它常带笃定、劝说或反复强调的语气。',
 '不是每句话都需要这样的开头；在分歧中反复使用可能显得强硬。这里是话语标记，不等于过去向某人转述消息。',
 q('朋友不相信修电脑会很久。','我跟你讲，这会花一整天。','I am telling you, this will take all day.',[['花一整天','take all day']],'强调开场用 am telling you；后接完整判断。',["I'm telling you, this will take all day."]),[
 q('你真心向朋友推荐一家店。','我跟你讲，这里的面很好吃。','I am telling you, the noodles here are great.',[['面','noodles'],['很好','great']],'noodles 是复数，后用 are。',["I'm telling you, the noodles here are great."]),
 q('同伴觉得还来得及慢慢走。','我跟你讲，我们得现在走。','I am telling you, we need to leave now.',[['现在离开','leave now']],'need 后接 to do。',["I'm telling you, we need to leave now."]),
 q('你强调亲眼看到的情况。','我跟你讲，门当时是开着的。','I am telling you, the door was open.',[['门','door'],['开着的','open']],'强调发生在现在，所述事实可用过去时。',["I'm telling you, the door was open."]),
 q('你鼓励朋友尝试一个方法。','我跟你讲，这个办法有效。','I am telling you, this method works.',[['这个办法','this method'],['有效','work']],'单数主语 method 后用 works。',["I'm telling you, this method works."]),
 q('朋友不肯承认自己累了。','我跟你讲，你需要休息一下。','I am telling you, you need a break.',[['需要休息','need a break']],'后面的 you 是陈述句主语。',["I'm telling you, you need a break."]),
 q('你反复确认过一个事实。','我跟你讲，她没有收到那封邮件。','I am telling you, she did not receive that email.',[['收到邮件','receive an email']],'过去否定：did not + 原形。',["I'm telling you, she didn't receive that email."]),
 q('你认真评价正在发生的事。','我跟你讲，这不正常。','I am telling you, this is not normal.',[['正常','normal']],'this 后用 is；否定为 is not。',["I'm telling you, this isn't normal."]),
 q('朋友担心会输掉比赛。','我跟你讲，他们有机会。','I am telling you, they have a chance.',[['有机会','have a chance']],'they 后用 have，不用 has。',["I'm telling you, they have a chance."]),
 q('你强调一份任务的实际难度。','我跟你讲，这并不像看起来那么容易。','I am telling you, this is not as easy as it looks.',[['容易','easy'],['看起来','look']],'not as + 形容词原级 + as…',["I'm telling you, this isn't as easy as it looks."]),
 q('朋友觉得自己必须独自承担。','我跟你讲，我们可以帮忙。','I am telling you, we can help.',[['帮忙','help']],'can 后接 help 原形。',["I'm telling you, we can help."])
 ]),
 unit('c28-expect-someone','说明指望或要求谁做什么','expect someone to do…','expect + 宾格人称 / 人 + to + 动词原形',
 '说明对某人的预期或要求。公司期待员工具备能力、朋友指望对方守时等都可以使用。',
 'expect 不一定表示命令，也不保证事情会发生。执行动作的人放在 expect 后；对方作宾语时用 me/him/her/us/them 等形式。',
 q('你在看岗位要求。','他们要求我会说英语。','They expect me to speak English.',[['说英语','speak English']],'expect + 人 + to do，me 是动作执行者。'),[
 q('她向同事说明经理的要求。','经理希望我们按时完成。','The manager expects us to finish on time.',[['经理','the manager'],['按时','on time']],'单数主语用 expects，we 作宾语用 us。'),
 q('你回顾昨天的任务说明。','他们当时要求他拧紧螺丝。','They expected him to tighten the screws.',[['拧紧螺丝','tighten the screws']],'过去用 expected，he 作宾语用 him。'),
 q('你不理解朋友的要求。','你指望我做什么？','What do you expect me to do?',[],'疑问词 what 放句首，do 仍保留为执行动作。'),
 q('她说明自己没有提出过的要求。','我没有指望你知道所有答案。','I did not expect you to know all the answers.',[['知道所有答案','know all the answers']],'did not 后用 expect 原形。',["I didn't expect you to know all the answers."]),
 q('会议上解释后续安排。','我们希望她周五前回复。','We expect her to reply by Friday.',[['回复','reply']],'by + 时间点表示不晚于该时间。'),
 q('你描述老师平时的要求。','老师希望学生独立思考。','The teacher expects students to think independently.',[['学生','students'],['独立思考','think independently']],'单数主语 teacher 后用 expects。'),
 q('你问同事是否真的需要加班。','他们要求我们待到六点吗？','Do they expect us to stay until six?',[['待着','stay']],'until + 时间点表示动作持续到该时间。'),
 q('讲述你对朋友昨天的预期。','我原以为他会来得更早。','I expected him to arrive earlier.',[['到达','arrive'],['更早','earlier']],'过去预期用 expected；后接 him to arrive。'),
 q('你希望给团队合理空间。','我们不能指望他们什么都做。','We cannot expect them to do everything.',[['什么都做','do everything']],'cannot 后用 expect 原形。',["We can't expect them to do everything."]),
 q('她在解释公司的安排。','公司希望我学习使用这个工具。','The company expects me to learn to use this tool.',[['学习使用','learn to use'],['工具','tool']],'learn 后也用 to do；单数 company 后用 expects。')
 ]),
 unit('c28-find-out','通过查问或经历得知一个事实','find out…','find out + 事实 / 疑问词从句 / that从句',
 '表示发现、查明或得知先前不知道的信息，可以通过询问、调查或后来发生的事获得。',
 '不等同于找到一个具体物品的 find。find out what/why/how 后从句用陈述语序；out 与动词的组合保留。',
 q('岗位介绍说工作复杂，你入职后了解到实际情况。','我后来发现工作很简单。','I found out that the work was simple.',[['工作','work'],['简单','simple']],'find 的过去式是 found；that 从句用陈述语序。',['I found out the work was simple.']),[
 q('你准备向工作人员询问。','我会查明商店什么时候关门。','I will find out when the shop closes.',[['关门','close'],['商店','shop / store']],'when 从句用 the shop closes，不做问句倒装。',["I'll find out when the shop closes.",'I will find out when the store closes.']),
 q('你说起昨天查到的信息。','她发现会议取消了。','She found out that the meeting was cancelled.',[['会议取消','the meeting was cancelled']],'过去得知用 found out。',['She found out that the meeting was canceled.','She found out the meeting was cancelled.']),
 q('你们在调查故障。','我们需要查明发生了什么。','We need to find out what happened.',[['发生','happen']],'what 在这里充当从句主语。'),
 q('朋友想知道信息是否已经确认。','你查到他的名字了吗？','Have you found out his name?',[['他的名字','his name']],'完成时：have + found out。'),
 q('他回顾求职时得到的消息。','他后来发现要求没有那么高。','He found out that the requirements were not that high.',[['要求','requirements'],['那么高','that high']],'复数 requirements 后用 were。',["He found out that the requirements weren't that high."]),
 q('你提醒同伴先核实地点。','先查明我们需要去哪里。','Find out where we need to go first.',[['需要去','need to go'],['先','first']],'祈使句用 find；where 后用陈述语序。'),
 q('你说明她正在做的事。','她正在查明谁负责这件事。','She is finding out who is responsible for this.',[['负责','be responsible for']],'who 是从句主语，后接 is。',["She's finding out who is responsible for this."]),
 q('你回顾一次失败的搜索。','我们没有查明原因。','We did not find out why.',[['原因','why']],'did not 后用 find 原形。',["We didn't find out why."]),
 q('朋友问你能帮什么忙。','我可以查明费用是多少。','I can find out how much it costs.',[['费用是多少','how much it costs']],'嵌入问句用 it costs，不用 does it cost。'),
 q('你解释为什么暂时不能决定。','他们还没有查明全部细节。','They have not found out all the details yet.',[['全部细节','all the details']],'还未得知：have not found out…yet。',["They haven't found out all the details yet."])
 ]),
 unit('c28-open-to','表示不排斥、愿意考虑某种选择','be open to…','主语 + be open to + 名词 / 动词-ing',
 '说明自己愿意听取或考虑一种可能，还不等于已经答应。可以用于岗位、建议、合作方式或生活安排。',
 'to 是介词，后面是动作时用动词-ing。be open to doing 不表示现在正在做，也不是保证一定接受。',
 q('朋友问你是否愿意考虑实习。','我愿意考虑做实习。','I am open to doing an internship.',[['做实习','do an internship']],'to 是介词，后接 doing。',["I'm open to doing an internship."]),[
 q('同事询问你对安排的态度。','我们愿意考虑其他选择。','We are open to other options.',[['其他选择','other options']],'be 随主语 we 用 are。',["We're open to other options."]),
 q('她说明自己的求职范围。','她愿意考虑搬去另一个城市。','She is open to moving to another city.',[['搬到另一座城市','move to another city']],'to 后接 moving。',["She's open to moving to another city."]),
 q('你回顾他昨天的态度。','他当时愿意考虑这个建议。','He was open to the suggestion.',[['建议','suggestion']],'过去状态用 was。'),
 q('你询问团队能否改变安排。','你们愿意考虑下周再开始吗？','Are you open to starting next week?',[['下周开始','start next week']],'问句把 are 提到主语前；to 后用 starting。'),
 q('你说明自己愿意听意见。','我愿意考虑反馈。','I am open to feedback.',[['反馈','feedback']],'feedback 是不可数名词。',["I'm open to feedback."]),
 q('他们暂时不能改变工作地点。','他们目前不愿考虑搬家。','They are not open to moving right now.',[['搬家','move'],['目前','right now']],'否定在 be 后；to 后用 moving。',["They aren't open to moving right now.","They're not open to moving right now."]),
 q('你们回顾最初的讨论。','我们当时愿意考虑一起工作。','We were open to working together.',[['一起工作','work together']],'过去主语 we 用 were；to 后用 working。'),
 q('她希望寻找不同的办法。','她愿意考虑尝试新方法。','She is open to trying a new approach.',[['新方法','a new approach']],'to 后接 trying。',["She's open to trying a new approach."]),
 q('你不想把选择说得太窄。','我基本什么都愿意考虑。','I am open to pretty much anything.',[['基本什么都','pretty much anything']],'to 后可接代词 anything。',["I'm open to pretty much anything."]),
 q('你打听合作方是否愿意讨论。','他们愿意考虑我们的想法吗？','Are they open to our idea?',[['我们的想法','our idea']],'be 的问句前置 are。')
 ]),
 unit('c28-you-could','温和地提出一个可考虑的做法','You could…','主语 + could + 动词原形',
 '提出一种可能做法，给对方选择空间，比直接命令更温和。也可以说 we/he/she could，讨论自己或别人的选项。',
 'could 在这里表示建议或可能方案，不是在报告过去能力。它不能保证方案可行；具体限制仍要考虑。',
 q('朋友觉得正式岗位要求太高。','你可以考虑申请一个实习岗位。','You could apply for an internship.',[['申请实习岗位','apply for an internship']],'建议用 could + 动词原形。'),[
 q('同伴不知道怎样联系那家公司。','你可以给他们发一封邮件。','You could send them an email.',[['给他们发邮件','send them an email']],'could 后接 send 原形。'),
 q('你们在商量周末安排。','我们可以坐火车去。','We could take the train.',[['坐火车','take the train']],'主语换 we，could 不变。'),
 q('她还没有拿定主意。','她可以先问问老师。','She could ask the teacher first.',[['问老师','ask the teacher'],['先','first']],'she 后也用 could ask。'),
 q('朋友不知从哪里开始复习。','你可以先看自己的笔记。','You could look at your notes first.',[['看看笔记','look at your notes']],'could 后接 look 原形。'),
 q('团队预算有限。','他们可以使用免费的版本。','They could use the free version.',[['免费版本','the free version']],'could 在这里提出一个选项。'),
 q('他发现工作量太大。','他可以请人帮忙。','He could ask for help.',[['请人帮忙','ask for help']],'could 后接 ask 原形。'),
 q('你不确定哪家餐厅合适。','我们可以看看菜单。','We could check the menu.',[['看看菜单','check the menu']],'用 could 提出共同可做的事。'),
 q('朋友希望少用触控板。','你可以按回车。','You could press Enter.',[['按回车','press Enter / hit Enter']],'建议动作使用原形。',['You could hit Enter.']),
 q('她准备搬家但担心费用。','她可以先租一个小房间。','She could rent a small room first.',[['租小房间','rent a small room']],'could 后用 rent，不用 rents。'),
 q('你们不想今天仓促决定。','我们可以明天再讨论。','We could discuss it again tomorrow.',[['再讨论','discuss it again'],['明天','tomorrow']],'discuss 直接接讨论对象 it。')
 ]),
 unit('c28-apply-to','说明向哪家公司或机构提出申请','apply to…','apply to + 公司 / 学校 / 机构',
 '用 to 指申请递交给谁。也可以接 for + 岗位或项目，同时交代申请对象和申请事项。',
 'apply to a company 指向公司申请；apply for a job 指申请岗位。apply to do 是申请去做某事，to 后结构不同。',
 q('朋友问你把申请交给了哪里。','我向三家公司提出了申请。','I applied to three companies.',[['三家公司','three companies']],'向机构申请用 apply to；过去式 applied。'),[
 q('她正计划留学。','她打算向两所大学提出申请。','She plans to apply to two universities.',[['两所大学','two universities']],'plan to 后接 apply 原形。'),
 q('你向家人说明求职进度。','我们已经向那家公司提出申请了。','We have applied to that company.',[['那家公司','that company']],'完成时：have applied。',["We've applied to that company."]),
 q('你打听朋友的计划。','你会向这家公司申请吗？','Will you apply to this company?',[['这家公司','this company']],'will 问句后用 apply 原形。'),
 q('回顾他上周的选择。','他没有向那家银行提出申请。','He did not apply to that bank.',[['那家银行','that bank']],'did not 后用 apply 原形。',["He didn't apply to that bank."]),
 q('她同时说明公司和岗位。','她向一家出版社申请了编辑岗位。','She applied to a publisher for an editing position.',[['出版社','publisher'],['编辑岗位','editing position']],'to 引出机构，for 引出岗位。'),
 q('你询问同学的申请去向。','你向哪些公司提出了申请？','Which companies did you apply to?',[['哪些公司','which companies']],'to 可以放在疑问句末尾；did 后用 apply。'),
 q('你们在准备下一轮材料。','他们正在向一家国际机构提出申请。','They are applying to an international organisation.',[['国际机构','international organisation / international organization']],'进行时：are applying。',["They're applying to an international organisation.",'They are applying to an international organization.']),
 q('你介绍她每年的安排。','她每年都向几个项目主办机构提出申请。','She applies to several programme organisers every year.',[['项目主办机构','programme organisers / program organizers'],['每年','every year']],'she 的一般现在时用 applies。',['She applies to several program organizers every year.']),
 q('你和朋友还没做决定。','我们还没有向任何公司提出申请。','We have not applied to any companies yet.',[['任何公司','any companies']],'还未做：have not applied…yet。',["We haven't applied to any companies yet."]),
 q('你解释自己想先了解公司。','我想先看看再向他们提出申请。','I want to look into it before I apply to them.',[['先了解','look into it']],'before 从句可用一般现在时表达尚未发生的事。')
 ]),
 unit('c28-bar','谈标准提高、降低或门槛高低','raise the bar / lower the bar','raise / lower the bar；the bar + be + high / low',
 'bar 在这里比喻要求达到的标准。raise/lower the bar 说改变标准；the bar is lower 说相对较低的标准。',
 'the bar 不一定指最低学历等硬性门槛，也可指质量或表现标准。higher/lower 是比较，需有上下文中的比较对象。',
 q('你比较实习和正式岗位的要求。','实习岗位的门槛通常更低。','The bar is usually lower for internships.',[['实习岗位','internships'],['通常','usually']],'比较级 lower 表示比上下文中的标准低。'),[
 q('团队想做出更好的成果。','我们需要提高标准。','We need to raise the bar.',[['需要做','need to do']],'raise 在这里直接接 the bar。'),
 q('你回顾公司上次招聘。','他们提高了标准。','They raised the bar.',[],'过去式 raised。'),
 q('她不愿降低质量要求。','她不想降低标准。','She does not want to lower the bar.',[['不想做','do not want to do']],'does not 后用 want，to 后用 lower。',["She doesn't want to lower the bar."]),
 q('朋友问这次任务为什么难。','这次的标准很高。','The bar is high this time.',[['这次','this time']],'high 描述标准，不是一个动作。'),
 q('大家讨论让新人更容易加入。','我们能降低门槛吗？','Can we lower the bar?',[],'can 后用 lower 原形。'),
 q('你比较两个项目的要求。','这个项目的门槛更低。','The bar is lower for this programme.',[['项目','programme / program']],'lower 是形容词比较级。',['The bar is lower for this program.']),
 q('回顾他给团队带来的变化。','他提高了整个团队的标准。','He raised the bar for the whole team.',[['整个团队','the whole team']],'for 引出受影响的范围。'),
 q('你们不想因为赶时间降低要求。','我们不会降低标准。','We will not lower the bar.',[],'will not 后接 lower 原形。',["We won't lower the bar."]),
 q('她觉得原来的要求不合理。','她认为门槛太高了。','She thinks the bar is too high.',[['认为','think'],['太高','too high']],'she 后用 thinks。'),
 q('你回忆过去的制度。','以前的门槛没有这么高。','The bar did not use to be this high.',[['以前不','did not use to'],['这么高','this high']],'did not use to 后接 be。',["The bar didn't use to be this high."])
 ]),
 unit('c28-not-really','缓和地说明目前不太愿意或不太符合','not really…right now','主语 + 否定 + really + 状态 / 意愿 + right now',
 'really 在否定里常让拒绝或评价更缓和；right now 把范围限定在目前。它可以表示暂时不想做，也可以表示目前不太具备某种状态。',
 'not really 不总是绝对的“不”，但也不能自动理解为以后会同意。根据句子选 do not、be not 等否定结构。',
 q('朋友建议你先找实习。','我目前不太想找实习。','I do not really want an internship right now.',[['想要实习岗位','want an internship']],'really 放在 not 后；right now 限定目前。',["I don't really want an internship right now."]),[
 q('朋友问你愿不愿意聊天。','我现在不太想聊天。','I do not really feel like talking right now.',[['想聊天','feel like talking']],'feel like 后接动词-ing。',["I don't really feel like talking right now."]),
 q('同事问你是否需要帮助。','我现在不太需要帮忙。','I do not really need help right now.',[['需要帮忙','need help']],'一般现在时用 do not really need。',["I don't really need help right now."]),
 q('她正在忙别的安排。','她目前对这个不太感兴趣。','She is not really interested in this right now.',[['对某事感兴趣','be interested in something']],'状态用 is not，不加 does。',["She's not really interested in this right now."]),
 q('你们暂时没有新增计划。','我们目前不太想改变安排。','We do not really want to change the plan right now.',[['改变安排','change the plan']],'want 后接 to do。',["We don't really want to change the plan right now."]),
 q('朋友让你判断是否能决定。','我目前还不太确定。','I am not really sure right now.',[['确定','sure']],'be not really sure 描述状态。',["I'm not really sure right now."]),
 q('有人问他要不要参加活动。','他现在不太想出门。','He does not really want to go out right now.',[['出门','go out']],'does not 后用 want 原形。',["He doesn't really want to go out right now."]),
 q('你解释不能马上讨论的原因。','我们现在不太有时间讨论这个。','We do not really have time to discuss this right now.',[['有时间做','have time to do'],['讨论这个','discuss this']],'否定实义 have 用 do not have。',["We don't really have time to discuss this right now."]),
 q('她暂时不考虑换工作。','她目前不太想申请新岗位。','She does not really want to apply for a new position right now.',[['申请新岗位','apply for a new position']],'does not 后用 want，to 后用 apply。',["She doesn't really want to apply for a new position right now."]),
 q('朋友想让你试试新应用。','我现在不太需要另一个应用。','I do not really need another app right now.',[['另一个应用','another app']],'another 后接单数可数名词。',["I don't really need another app right now."]),
 q('你们还在了解基本情况。','我们目前还不太准备好做决定。','We are not really ready to decide right now.',[['准备好做决定','be ready to decide']],'ready 描述状态，用 are not。',["We aren't really ready to decide right now.","We're not really ready to decide right now."])
 ]),
 unit('c28-pressure-self','说给自己施加压力','put pressure on yourself','put pressure on + 人 / 反身代词',
 '说某个人给自己或别人增加心理负担。主语与承受者相同时，使用 myself/yourself/herself 等反身代词。',
 'pressure 这里不可数，不说 a pressure。put pressure on someone 也可表示向人施压；搭配自己时强调自我要求带来的压力。',
 q('朋友觉得自己必须立刻找到工作。','别给自己这么大压力。','Do not put so much pressure on yourself.',[['这么大','so much']],'否定祈使句：do not + 原形；you 对应 yourself。',["Don't put so much pressure on yourself."]),[
 q('你反思自己的学习安排。','我给了自己太大压力。','I put too much pressure on myself.',[['太多','too much']],'put 的过去式仍为 put；I 对应 myself。'),
 q('她总要求自己一次成功。','她给自己很大压力。','She puts a lot of pressure on herself.',[['很多','a lot of']],'一般现在时 she 后用 puts；she 对应 herself。'),
 q('你们想改变工作习惯。','我们不应该给自己这么大压力。','We should not put so much pressure on ourselves.',[['这么大','so much']],'we 对应 ourselves；should not 后用 put。',["We shouldn't put so much pressure on ourselves."]),
 q('你向朋友了解他最近的状态。','他是不是给自己太大压力了？','Is he putting too much pressure on himself?',[['太多','too much']],'进行时：is putting；he 对应 himself。'),
 q('老师给学生建议。','不要给彼此施加压力。','Do not put pressure on each other.',[['彼此','each other']],'each other 指相互，不等于 yourselves。',["Don't put pressure on each other."]),
 q('你回顾昨天对同事的要求。','我不想给她施加压力。','I did not want to put pressure on her.',[['不想做','did not want to do']],'承受者与主语不同，使用宾格 her。',["I didn't want to put pressure on her."]),
 q('大家反思备考时的行为。','他们给了自己太大压力。','They put too much pressure on themselves.',[['太多','too much']],'they 对应 themselves；put 过去式不变。'),
 q('你想知道朋友为何疲惫。','你为什么给自己这么大压力？','Why are you putting so much pressure on yourself?',[['为什么','why']],'进行时疑问句：why are you putting…?'),
 q('他决定放慢求职节奏。','他会尽量不给自己施加压力。','He will try not to put pressure on himself.',[['尽量不做','try not to do']],'try not to 后接 put；he 对应 himself。',["He'll try not to put pressure on himself."]),
 q('你们决定给新人时间。','我们不想给他们施加压力。','We do not want to put pressure on them.',[['不想做','do not want to do']],'承受者与主语不同，用 them。',["We don't want to put pressure on them."])
 ]),
 unit('c28-try-not','说尽量避免做某件事','try not to do…','try / tries / tried + not to + 动词原形',
 '表示努力避免一个动作或状态，可以用于提醒自己，也可以委婉劝别人。它表达努力方向，不保证一定做到。',
 'try not to do 是尽量不做；not try to do 是没有努力去做，否定的位置改变意思。',
 q('朋友担心自己找不到工作。','尽量不要为这件事担心。','Try not to worry about it.',[['为某事担心','worry about something']],'否定放在 to 前：try not to do。'),[
 q('你给自己定了一个习惯。','我尽量不看手机。','I try not to check my phone.',[['看手机','check my phone']],'try not to 后接动词原形。'),
 q('她希望少打断别人。','她尽量不打断别人。','She tries not to interrupt people.',[['打断别人','interrupt people']],'she 的一般现在时用 tries。'),
 q('回顾昨晚你们的努力。','我们当时尽量不吵醒他。','We tried not to wake him up.',[['吵醒他','wake him up']],'过去用 tried；代词 him 夹在 wake 和 up 之间。'),
 q('你提醒同伴给自己留余地。','尽量不要一次做太多。','Try not to do too much at once.',[['一次','at once'],['做太多','do too much']],'祈使句以 try 原形开头。'),
 q('他说起新年的目标。','他会尽量不迟到。','He will try not to be late.',[['迟到','be late']],'will 后用 try，not to 后用 be。',["He'll try not to be late."]),
 q('昨天你忍住了催促。','我当时尽量不给她施压。','I tried not to put pressure on her.',[['向她施压','put pressure on her']],'tried not to 描述过去努力避免。'),
 q('你建议他们先保持冷静。','尽量不要仓促做决定。','Try not to rush the decision.',[['仓促作决定','rush the decision']],'not to 后用 rush 原形。'),
 q('她正在学习独立思考。','她正尽量不依赖别人。','She is trying not to rely on others.',[['依赖别人','rely on others']],'进行时：is trying not to。',["She's trying not to rely on others."]),
 q('你们担心重复同样的问题。','我们会尽量不再犯同样的错。','We will try not to make the same mistake again.',[['犯同样的错','make the same mistake'],['再','again']],'will 后用 try，not to 后用 make。',["We'll try not to make the same mistake again."]),
 q('你给备考的朋友建议。','尽量不要把自己和别人比较。','Try not to compare yourself with others.',[['把自己与别人比较','compare yourself with others / compare yourself to others']],'反身代词 yourself 指动作对象是自己。',['Try not to compare yourself to others.'])
 ]),
 unit('c28-stress-about','说为某件事担忧或焦虑','stress about…','stress about + 事情 / 动词-ing',
 '在非正式交流里表示为一件事紧张、发愁。它说的是担忧本身，不是强调某个重点。',
 'stress about 是非正式说法；stress the importance of… 中 stress 则表示强调。about 后说所担忧的内容，动作通常用动词-ing。',
 q('朋友因为求职结果焦虑。','别为面试的事太焦虑。','Do not stress about the interview.',[['面试','interview']],'否定祈使句：Do not + 原形。',["Don't stress about the interview."]),[
 q('你说明最近为什么睡不好。','我一直在为截止日期担忧。','I have been stressing about the deadline.',[['截止日期','deadline']],'持续至今：have been + 动词-ing。',["I've been stressing about the deadline."]),
 q('她担心考试失利。','她在为考试焦虑。','She is stressing about the exam.',[['考试','exam']],'进行时：is stressing。',["She's stressing about the exam."]),
 q('回顾昨天的情况。','我们当时在为费用担忧。','We were stressing about the cost.',[['费用','cost']],'过去进行时：were stressing。'),
 q('你想知道朋友在担心什么。','你在为什么焦虑？','What are you stressing about?',[],'about 可以放在疑问句末尾。'),
 q('他重新安排了注意力。','他不再为小事焦虑了。','He does not stress about small things anymore.',[['小事','small things'],['不再','not … anymore']],'does not 后用 stress 原形。',["He doesn't stress about small things anymore."]),
 q('你回顾上周的求职。','我为找工作焦虑了好几天。','I stressed about finding a job for days.',[['找工作','find a job'],['好几天','for days']],'about 后用 finding；过去用 stressed。'),
 q('你提醒同伴先做好能做的事情。','别为你无法改变的事焦虑。','Do not stress about what you cannot change.',[['无法改变的事','what you cannot change']],'what 从句用陈述语序。',["Don't stress about what you can't change."]),
 q('他们要参加第一次比赛。','他们在为犯错这件事担忧。','They are stressing about making mistakes.',[['犯错','make mistakes']],'about 后接 making。',["They're stressing about making mistakes."]),
 q('她希望调整自己的状态。','她会尽量不为结果焦虑。','She will try not to stress about the results.',[['结果','results'],['尽量不','try not to']],'try not to 后用 stress 原形。',["She'll try not to stress about the results."]),
 q('朋友问你是否仍担心那个问题。','你还在为这件事焦虑吗？','Are you still stressing about it?',[['仍然','still']],'进行时疑问句：Are you…stressing…?')
 ]),
 scenario('c28-wait-no','打断自己的话，立即更正刚才说错的内容','Wait, no…',
 '发现自己刚说错时，用 Wait, no 停一下，再接更正后的信息。语气可以自然轻快，不一定是强烈否定别人。',
 '这里指自我纠正；只说 Wait, no 并没有把正确的信息说出来。等待别人和拒绝别人的语境还要看后续内容。',
 recall('你刚说约在周二，马上发现应该是周三。','先停一下，更正自己刚说的日期。','Wait, no.','可以先说 Wait, no，再把周三补上。','线索：说话人正在修正自己的信息。'),[
 choice('你刚说“见面是六点”，马上改口“Wait, no, seven.”。','这句话在做什么？',['纠正自己刚才说错的时间。','要求对方七点前一直等待。','拒绝参加见面。'],'a','Wait, no.','说话人把六点更正为七点，没有取消见面。','观察：前后两项信息是什么关系？'),
 choice('你需要使用一个自我纠正的开场。','哪种情况最贴切？',['朋友在排队，你告诉他再等一会儿。','你刚把文件名说成A，发现其实是B，马上改口。','你已经确认日期正确，正在向朋友道谢。'],'b','Wait, no.','这是发现自己信息有误后立即改口。','线索：寻找说话人需要修正自己的情境。'),
 choice('你说“Wait, no”，但还没说新的日期。','对方此时能确定什么？',['已经知道正确日期。','知道你永远不会参加。','知道你要改口，但还需要听后面的更正。'],'c','Wait, no.','开场提示更正，不自动提供正确内容。','检查：开场和具体信息是否都说出来了？'),
 choice('你在电话里报地址，发现自己说错了门牌号。','怎样接下去最符合自我纠正的目的？',['先停一下，再说出正确门牌号。','只重复原来的门牌号，不做任何更正。','要求对方为你的错误道歉。'],'a','Wait, no.','需要接正确信息，让听者知道哪里改了。','目的：让听者更新刚收到的信息。'),
 recall('你刚说文件在桌面，随后想起它在下载文件夹。','打断自己的话，准备更正位置。','Wait, no.','用这个开场后，再说明正确位置。','线索：更正的是自己刚才的信息。'),
 recall('昨天小陈报错了车次，随即改口。','替小陈想一个自然的自我纠正开场。','Wait, no.','固定开场不随过去叙述改变；后接正确车次。','线索：先标明我要改口。'),
 choice('你说“Wait, no, I sent it yesterday.”。','哪一项最符合这句话的组织方式？',['先感谢对方，再提出邀请。','先标明改口，再给更正后的发送时间。','先承诺以后发，再取消承诺。'],'b','Wait, no.','核心是更正刚才的信息。','观察：开场之后提供了什么信息？'),
 choice('你在讨论后确定朋友说的是对的，自己没有说错需要修正的内容。','仅为了表示“你说得有道理”，是否需要这个自我纠正开场？',['需要，每次同意都用。','需要，它就是有道理的意思。','不需要；如果没有改口，可直接表达认可。'],'c','Wait, no.','不能把自我纠正标记机械当成同意。','区分：更正自己与认可别人。'),
 recall('你刚说让大家按左边按钮，马上发现应该按右边。','先提醒大家你要更正，再说正确位置。','Wait, no.','开场后应明确说右边，避免听者继续按错。','线索：你的指令刚刚发生修正。'),
 choice('你已经说出“Wait, no”，正在修正自己的说法。','下面哪项还需要你补充？',['更正后的具体内容。','一段与问题无关的历史。','对方同意你已经说对的证明。'],'a','Wait, no.','这个标记只打开了更正，内容还需补上。','检查：听者是否已经知道正确答案？')
 ],'你刚说了什么，后来发现哪里需要更正？'),
 scenario('c28-whatever','带着不耐烦或放弃讨论的态度说“算了”','Whatever.',
 '在争论或反复讨论后，Whatever 可以表示不想再争、不想再管。语气可能冷淡、敷衍或不耐烦。',
 '它也能在其他语境表示任何东西或随便什么；这里练的是独立回应中带情绪的“算了”。想友好表示两个选择都行时，Either is fine 更明确，不能忽略语气。',
 recall('朋友又开始争论你们已经反复说过的小事。','你有些不耐烦，不想继续争了。','Whatever.','这样回应可能显得冷淡或敷衍，并不是温暖地解决分歧。','语气：此处是退出讨论，不是热情赞同。'),[
 choice('两人反复争论谁先迟到，其中一人翻了翻眼睛说“Whatever.”。','这里更可能是什么态度？',['认真请对方详细解释。','不耐烦，不想继续争。','热烈赞美对方。'],'b','Whatever.','翻眼睛和反复争论的上下文强调了不耐烦。','判断：结合动作和前面的争论。'),
 choice('你想对朋友表达温和、明确的“两个时间都方便”。','哪一项最稳妥？',['Either time is fine.','Whatever.，并假定绝不会显得敷衍。','用Whatever强迫对方接受自己的时间。'],'a','Whatever.','Whatever 在某些语气下可以放任选择，但不能保证听起来友好；明确说都方便更稳妥。','注意：本意相近不等于所有语气都一样。'),
 choice('同伴刚认真解释他遇到的困难，你随口说“Whatever.”就走开。','这种回应可能让对方感到什么？',['你已经提供了具体帮助。','你非常重视他的感受。','你不想听或不太在乎。'],'c','Whatever.','回应加上走开的动作，可能传达冷淡。','观察：回应是否承接了对方的困难？'),
 choice('你已经不愿再争论餐厅是谁选的。','哪种态度最符合本次练习的Whatever？',['算了，我不想再争这个。','我还想听你逐项分析。','请你再准确重复一遍。'],'a','Whatever.','它可以结束纠缠，但可能伤害交流气氛。','线索：是否愿意继续讨论。'),
 recall('争论一件小事时，对方又重复同样的指责。','你不耐烦地表示算了，不再争。','Whatever.','听起来可能带轻视；真要修复关系还需要别的表达。','语气：不是中性的接受理由。'),
 recall('小林昨天与室友争论许久，最后不想再管了。','替小林想一句略显敷衍的结束回应。','Whatever.','作为固定回应，不用因为叙述过去而变形。','线索：不耐烦地退出争论。'),
 choice('朋友说“你错了”，你说“Whatever.”，但没有解释自己同意哪一点。','听者能直接确定什么？',['你已经完全认可了他的事实判断。','你可能不想继续讨论，不能据此认定你同意。','你要求他帮忙查资料。'],'b','Whatever.','退出争论和承认对方正确不是同一件事。','区分：不争了与承认正确。'),
 choice('你想让别人知道你非常感谢对方的付出。','单独用Whatever是否清楚表达了感谢？',['是，它就是谢谢。','是，它保证很热情。','不是；需要明确表达感谢。'],'c','Whatever.','这句独立回应不承担明确感谢的功能。','检查：回应实际包含哪种态度？'),
 recall('有人不断纠缠一个你已经不想争的问题。','你决定带着不耐烦说一句算了。','Whatever.','这句能传达不想再争，也可能显得不尊重。','语气：带情绪的退出。'),
 choice('同一句Whatever在不同语调和情境中出现。','哪种判断更合理？',['结合上下文和语调判断，不能只靠字面。','不论情境都一定很礼貌。','不论情境都一定是激烈辱骂。'],'a','Whatever.','语气从随意到敷衍不等，本次重点是带情绪的结束回应。','范围：固定回应仍受上下文影响。')
 ],'什么时候你会不耐烦地说“算了”？你希望结束什么讨论？'),
 scenario('c28-thats-okay','回应小事，让对方知道没关系','That’s okay.',
 '回应小事的道歉、不能配合的情况或不太理想的安排，表示自己可以接受、对方不必太介意。',
 '它不自动代表问题已经解决，也不等于答应替对方做事。语气可以温和，也可能冷淡；严重伤害或实际后果需要更充分地回应。',
 recall('朋友为晚回你一条普通消息道歉。','你不介意，想让他别放在心上。',"That's okay.",'可以表达不介意；不说明你从此不需要回复。','目的：减轻对方对这件小事的顾虑。'),[
 choice('同伴说“抱歉，刚才打断你了”，你温和回应“That’s okay.”。','最直接表达了什么？',['你不介意这次小事。','你听懂了，但尚未表达是否介意。','你想请他进一步解释原因。'],'a',"That's okay.",'这是对小事的宽慰，不是承诺做额外工作。','检查：不要替回应补上没说的承诺。'),
 choice('朋友说今天不能陪你逛街，你确实能接受。','哪种意图适合用That’s okay回应？',['你想要求他赔偿损失。','你想让他知道没关系，不必介意。','你想表示你根本没有听懂。'],'b',"That's okay.",'可以接受他今天不能来的情况。','线索：你是否接受眼前这件事。'),
 choice('别人弄坏了你急需的设备，维修和赔偿还没商量。','单独说That’s okay能确认什么？',['维修时间和费用都已约定。','对方不需要采取任何行动。','你可能表达宽容，但具体处理仍要另说。'],'c',"That's okay.",'宽容的态度不能替代具体处理方案。','区分：态度与实际安排。'),
 choice('朋友因名字叫错一次而道歉，你并不介意。','哪个回应目的最贴切？',['告诉他这次小事没关系。','宣布自己不再与他联系。','要求他证明自己的工作能力。'],'a',"That's okay.",'小失误且你不介意，是自然的使用情境。','观察：事情轻重与你的态度。'),
 recall('同事说会议资料晚发了几分钟，对你没有影响。','温和回应没关系。',"That's okay.",'可以表示接受这次小延误，不表示今后都不需要按时发。','范围：回应当前这一次。'),
 recall('昨天安娜为忘记带一支借给你的笔道歉，你有备用笔。','替你想一句宽慰她的回应。',"That's okay.",'固定回应不随叙述时间变化。','目的：让对方知道你不介意。'),
 choice('朋友说没有你喜欢的口味，你回答“That’s okay.”。','还想点另一种口味时应怎样做？',['等对方自动知道你要什么。','另外明确说出自己的选择。','认为这句话已经给出了具体口味。'],'b',"That's okay.",'可以表示接受情况，但具体选择要另说。','检查：对方是否已经听到你的选择。'),
 choice('同事道歉后，你说“That’s okay”，但没答应接替他的任务。','对方能据此认定你接下任务了吗？',['能，任何宽慰都算接任务。','能，它是工作承诺。','不能，需要明确约定谁来做。'],'c',"That's okay.",'不介意不等于代劳。','区分：宽慰与承诺。'),
 recall('朋友说自己现在没空帮你检查句子，你并不介意。','让他知道没关系。',"That's okay.",'它能表达接受这次不能帮忙；若想约别的时间可再补充。','线索：接受当前不能配合的情况。'),
 choice('别人造成了很严重的后果，你还没想好自己的态度。','是否应为了礼貌一律说That’s okay？',['不必；应真实表达态度并商量处理。','必须，所有道歉都只能这样回答。','必须，否则就是不懂英语。'],'a',"That's okay.",'这句话表示接受或不介意，不能强迫自己在不接受时使用。','依据：回应应符合自己的真实态度。')
 ],'发生了什么小事？你为什么确实不介意，想让对方安心？'),
 scenario('c28-come-on','用语气表达不相信、劝说或催促','Oh, come on.',
 '这是一种强烈依赖语调和情境的回应。可以表示“得了吧”的不相信，也可以鼓励、催促或劝人。先判断自己此刻想表达的态度。',
 '它不是固定等于“加油”，也不是固定等于“胡说”。不耐烦的语调可能冒犯别人；认真安慰困难时不能只靠这句含糊回应。',
 recall('朋友说写一封两句话的邮件要花一整天，你觉得他夸大了。','带点不相信地回应“哎呀，得了吧”。','Oh, come on.','这里表达对夸张说法的不相信，语气不必达到辱骂。','线索：先判断你是在鼓励还是不相信。'),[
 choice('朋友开玩笑说“我一个人能搬动整栋楼”，你笑着说“Oh, come on.”。','这时更可能表达什么？',['对夸张说法的不相信。','正式通知对方去搬楼。','同意他的说法，准备一起去做。'],'a','Oh, come on.','玩笑和明显夸张的上下文支持不相信的理解。','依据：结合前一句的可信程度。'),
 choice('小朋友最后一步不敢跳，你温和地说“Come on, you can do it.”。','这里的Come on在做什么？',['讽刺他说谎。','鼓励他尝试。','宣布你不会帮他。'],'b','Oh, come on.','后面的you can do it和温和语气明确了鼓励。','观察：后面的话如何补足语气。'),
 choice('有人说自己真的很难过，你不耐烦地说“Oh, come on.”。','这可能造成什么效果？',['必然完整表达共情。','必然解决对方的问题。','可能让对方觉得你在否定他的感受。'],'c','Oh, come on.','回应的语调可能让对方觉得感受不被认真对待。','考虑：回应是否承接真实困难。'),
 choice('你想知道一句Come on是催促还是鼓励。','最需要结合什么？',['情境、语调，以及前后说的话。','只看Come这个单词的中文。','只看说话人的年龄。'],'a','Oh, come on.','单看字面不足以确定全部态度。','范围：这是强依赖情境的回应。'),
 recall('同伴坚持说一个很简单的任务绝对不可能，你觉得他说得太夸张。','略带无奈地回应“得了吧”。','Oh, come on.','这种回应可能显得不耐烦，可随后说明你为什么觉得可行。','线索：你在质疑对方的夸张判断。'),
 recall('昨天朋友说你一次都没帮过忙，你知道自己帮过多次。','替自己想一句略带不服的回应开场。','Oh, come on.','之后可举例解释；单独这句不提供证据。','目的：对不公允的说法表示不服。'),
 choice('朋友不断磨蹭，你语速较快地说“Come on, we’re late.”。','这里最可能是什么功能？',['祝贺他。','催促他快一点。','请求他重新解释一句话。'],'b','Oh, come on.','we’re late提供了催促的理由。','观察：后文说明的行动需要。'),
 choice('你用“Oh, come on”表示不相信一项说法。','这句话是否已说明你的具体理由？',['是，所有理由都自动包含了。','是，它等于一份事实证明。','没有；若需要说服对方，应另补理由。'],'c','Oh, come on.','态度明确不等于论据明确。','区分：表达态度与提供证据。'),
 recall('朋友逗你说你的猫会自己开门做饭，你笑着不信。','用一句带玩笑感的回应。','Oh, come on.','笑着说可以带玩笑的不信，不一定是生气。','线索：不信，但语气轻松。'),
 choice('对方报告严重故障，你不知道真假。','最合适的做法是什么？',['先核实信息，不机械用这句否定。','一律用Oh,come on判定是假话。','认为这句能代替所有排查。'],'a','Oh, come on.','不能把一种回应当作事实判断工具。','依据：语气选择要有真实情境支持。')
 ],'你想表达不相信、催促还是鼓励？写清前后发生了什么。'),
 scenario('c28-figured','得知结果后说与原先的判断一致','That’s what I figured.',
 '听到新信息后，表示自己原来也是这样猜想或判断的。figured 是之前形成的判断，不代表当时就有确凿证据。',
 '它不是单纯“我听懂了”，也不是“我已经查实了”。只有新信息与先前判断相符时才贴切；不必用来对坏消息显得幸灾乐祸。',
 recall('你猜朋友因为堵车而迟到，他随后解释确实遇上了堵车。','表示这和自己原来的判断一致。',"That's what I figured.",'这句说明此前的推测与新信息一致，不说明你亲自调查过。','线索：新信息与先前想法是否一致？'),[
 choice('你原先猜商店周一休息，朋友查到它确实周一不开。你说“That’s what I figured.”。','这句最直接表达什么？',['这与你原先的判断相反，让你意外。','新信息符合自己原先的推测。','你要求朋友再查一遍。'],'b',"That's what I figured.",'此前已有推测，现在得到符合的消息。','区分：先前的判断与刚获得的信息。'),
 choice('哪种情境最符合这句回应？','选择符合你真实想法的一项。',['你原来猜她在开会，后来得知她确实在开会。','你原先确信她在家，后来发现她出国了，想表达出乎意料。','你没听清任何信息，想请对方重复。'],'a',"That's what I figured.",'A中信息与旧判断相符；B是被事实纠正，C需要请求重复。','依据：是否存在相符的先前判断。'),
 choice('别人告诉你文件还没发，你回应“That’s what I figured.”。','这能证明什么？',['你此前一定看过发送记录。','你已经替对方发出文件。','你原来就这样判断，但依据仍未说明。'],'c',"That's what I figured.",'figured体现推断，不自动证明依据来源。','不要把推断误当作已核验的证据。'),
 choice('同事确认预算比原计划少，你之前也怀疑如此。','用这句回应后，若还需要处理预算问题，应怎样做？',['再明确讨论下一步安排。','认为这句已经批准了所有调整。','不再需要听具体数字。'],'a',"That's what I figured.",'想法一致不等于已做出工作决定。','检查：回应是否包含具体行动。'),
 recall('你猜应用额度尚未重置，朋友查看后确认如此。','表示你原先也是这样想的。',"That's what I figured.",'可以表达预期一致，不代表你掌握了精确重置时间。','线索：猜测得到了符合的消息。'),
 recall('昨天你猜小张在路上没信号，后来他解释确实如此。','替你想一句说明原先猜对方向的回应。',"That's what I figured.",'固定回应已经用figured表示先前推断，不需要再改另一套时态。','目的：承接符合预期的信息。'),
 choice('对方说“其实完全不是你想的那样”，而你承认自己猜错了。','用That’s what I figured表达“原来我猜错了”是否准确？',['准确，它本来就是猜错了。','不准确；这句表示与先前判断一致。','准确，因为任何结果都能这样说。'],'b',"That's what I figured.",'自己的判断被推翻时，不能假装这句表达了相反意思。','对照：一致与意外。'),
 choice('朋友告诉你他确实不喜欢拥挤的活动，你一直觉得如此。','这句回应是否必然表示你责怪他？',['必然，是明确责怪。','必然，是拒绝再邀请。','不必然；它主要承接符合原判断的信息。'],'c',"That's what I figured.",'是否有责怪还要看语气和后续内容。','范围：不要额外推断态度。'),
 recall('你猜工作人员午休去了，后来得到确认。','用简短回应说明这符合自己的想法。',"That's what I figured.",'可以自然接住消息；具体等待多久要另问。','线索：先前的判断得到了确认。'),
 choice('你想表达“这和我之前想的一样”。','回应前最该确认什么？',['这是否真的与自己此前的判断一致。','自己是否使用了最长的句子。','对方是否也用过figured这个词。'],'a',"That's what I figured.",'真实的先前判断是这个回应成立的基础。','依据：回应与自己的真实想法一致。')
 ],'你先前猜想了什么？后来听到哪条信息与你的想法一致？'),
 scenario('c28-noticed-too','发现对方也留意到了同一件事','You’ve noticed it too!',
 '得知别人也发现了同一个变化或细节时，表达“原来你也注意到了”。too 把对方的观察与自己已经有的观察连起来。',
 '需要双方指向同一件可辨认的事。注意到同一变化不等于对原因或好坏完全同意，也不能证明变化是客观结论。',
 recall('你觉得应用最近的提示变少了，朋友主动提到相同变化。','有些惊喜地表示原来他也注意到了。',"You've noticed it too!",'双方注意到了同一变化；原因和评价仍可继续讨论。','线索：是否是同一个观察。'),[
 choice('你发现网页按钮颜色变了，朋友也主动指出这件事。你说“You’ve noticed it too!”。','最直接表达了什么？',['原来朋友也留意到了同一变化。','你保证知道改变的技术原因。','你在命令朋友修改颜色。'],'a',"You've noticed it too!",'too呼应你自己已有的观察，不提供原因。','区分：共同观察与共同解释。'),
 choice('哪种情况最适合这句回应？','请选择符合“也注意到”的情境。',['你没发现任何变化，只想礼貌地结束话题。','你和朋友都发现门口新开了一家店。','朋友谈天气，你想问他如何申请工作。'],'b',"You've noticed it too!",'B明确有共同观察；C不是同一话题。','依据：双方观察是否指向同一件事。'),
 choice('你们都注意到软件变慢了。','这句回应是否证明你们知道原因？',['证明，一定是服务器故障。','证明，一定是电脑坏了。','不证明；它只表达观察上的呼应。'],'c',"You've noticed it too!",'对原因的判断需要其他信息。','不要把共同观察当成因果证据。'),
 choice('朋友指出一个你此前完全没留意的细节。','若想诚实表示“我之前没发现”，该怎样看待这句回应？',['不直接套用；它通常暗含自己也有同样观察。','必须使用，因为too不表达任何关联。','使用后就自动证明自己早已知道。'],'a',"You've noticed it too!",'没有先前观察时，需要换成符合事实的回应。','检查：too是否有可以呼应的观察。'),
 recall('你早就觉得办公室更安静了，后来同事也这样说。','表示原来对方也发现了。',"You've noticed it too!",'可以接着讨论原因，但这句本身未说明原因。','线索：另一个人也发现了同样变化。'),
 recall('昨天你和朋友先后注意到同一处拼写错误。','替当时的你想一句带一点惊喜的回应。',"You've noticed it too!",'这是当时对朋友说的话，回应仍用现在完成时。','目的：呼应双方共同的观察。'),
 choice('朋友也发现了课程改动，但认为改得更好，你却不喜欢。','还能自然说这句回应吗？',['不能，观察相同就必须评价相同。','可以呼应注意到同一改动，再另说自己的评价。','说完就表示你完全赞成他的评价。'],'b',"You've noticed it too!",'共同注意到与共同喜好是两件事。','区分：看见了什么与如何评价。'),
 choice('你说“You’ve noticed it too”，但it没有明确指代。','最可能还需要什么？',['什么都不用，它总是自动清楚。','要求对方理解任何话题。','补充或确认你们说的是哪件事。'],'c',"You've noticed it too!",'it应有明确的上下文指代。','检查：对方知道it指什么吗？'),
 recall('你发现食堂排队的人变少，朋友也提到了这一点。','用这句回应呼应他。',"You've noticed it too!",'可以表达共同观察，不必预先确定变化的原因。','线索：你们指的是同一处变化。'),
 choice('这句回应中的too主要连接什么？','根据日常回应的用法选择。',['对方的观察与自己或前文已有的相同观察。','你和对方已经同意了变化的原因。','你希望对方以后才开始注意这件事。'],'a',"You've noticed it too!",'too在这里表示也，建立相同观察的关联。','依据：它在承接怎样的信息。')
 ],'你先注意到了什么？对方后来怎么说，让你发现他也留意到了？'),
 scenario('c28-seriously','让对方知道接下来是认真的话','Seriously,…',
 '放在陈述前，用来强调自己是认真的，或把玩笑语气转为认真。后面的内容才是你真正要表达的判断或建议。',
 '这里练陈述开场的“说真的”。单独上扬语调的Seriously?常表示惊讶或质疑，不应混为一种意思。',
 recall('你们刚开完玩笑，现在你真心想让朋友休息。','先用一个开场表明接下来是认真的。','Seriously.','可以先说Seriously，再明确说出建议；开场本身不包含休息这件事。','线索：从玩笑转到认真。'),[
 choice('朋友以为你在开玩笑，你说“Seriously, I mean it.”。','这里Seriously在做什么？',['宣布对方说的一定是假话。','强调自己是认真的。','请对方把刚才的话重复一遍。'],'b','Seriously.','后面的I mean it明确强调认真。','观察：后面是陈述还是疑问。'),
 choice('哪种意图最符合本次练习的Seriously开场？','选择匹配的用途。',['玩笑之后，真心劝朋友别给自己太大压力。','只想问对方是否真的去了某处，语调上扬。','想说明一个词有多少个字母。'],'a','Seriously.','本次是强调认真陈述，不是上扬语调的反问。','区分：认真开场与惊讶问句。'),
 choice('你只说“Seriously,”，还没有接下文。','听者能直接知道哪项具体信息？',['你已经明确说出一个约定时间。','你已经给出完整求职计划。','还不知道你接下来具体要认真说什么。'],'c','Seriously.','这个词强调态度，具体内容仍需说。','检查：开场之后是否有实际信息。'),
 choice('同样拼写的Seriously，带问号并用上扬语调。','它是否总等于本次的“说真的，我是认真的”？',['不是，也可能表示惊讶或不相信。','是，语调和问号没有影响。','是，永远只用于诚恳建议。'],'a','Seriously.','语调和句子作用会改变理解。','范围：同词不同话语功能。'),
 recall('朋友以为你的夸奖只是客套，你确实觉得他做得好。','在继续夸奖前表明自己是认真的。','Seriously.','后面仍需说出具体夸奖内容。','目的：标明认真态度。'),
 recall('昨天你先开玩笑说面试很容易，随后真心提醒朋友准备。','替当时的你想一个转为认真语气的开场。','Seriously.','用于当时的直接话语，不需要改时态。','线索：你现在开始说认真的建议。'),
 choice('别人正在讲述难过的经历，你打算认真回应。','使用Seriously开场后还需要什么？',['什么都不用，它已经替代了全部关心。','符合情境的实际回应，不能只靠一个开场。','必须转移到一个笑话上。'],'b','Seriously.','认真态度不是完整回应本身。','检查：对方的真实需要是否被承接。'),
 choice('你想表达惊讶的“真的假的？”而不是强调自己的陈述。','应该怎样处理这两个用法？',['把它们当作任何时候都完全一样。','用同样的平直语调机械替换。','区分问句语调与陈述开场，根据意图选择。'],'c','Seriously.','同一个词可以承担不同话语功能。','依据：你是在问还是在强调。'),
 recall('你们聊着聊着笑起来，你想真心感谢朋友。','在感谢前用一个认真开场。','Seriously.','它标明认真，但感谢本身仍需明确说出。','目的：让后面的话显得真诚而明确。'),
 choice('你用Seriously强调一个判断。','它是否让判断自动变成事实？',['不会；认真态度与证据是否充分是两回事。','会，认真说就一定正确。','会，听者无需再核实。'],'a','Seriously.','强调自己的确信，不等于提供了证明。','区分：表达认真与证明正确。')
 ],'什么时候你想从玩笑转为认真？你接下来真正想说什么？'),
 scenario('c28-anyway','收回跑远的话题，继续主要事情','Anyway,…',
 '谈话岔开之后，用Anyway把注意力带回主要话题，或表示不再纠缠刚才的问题，继续往下说。',
 '它也能表示“不管怎样”。这里重点是谈话转回或收束；不等同于所有场合正式总结的“总而言之”，也不能用来不顾对方的重要感受。',
 recall('你们原本在商量复习，后来聊了很久天气。','把话题带回今天要怎么复习。','Anyway.','可以用Anyway开场，再明确说回学习安排。','线索：谈话是否需要回到主要事情。'),[
 choice('你们聊偏了一会儿，你说“Anyway, what time shall we meet?”。','这里Anyway主要在做什么？',['把谈话带回需要确定的见面安排。','保证无论天气如何都必须见面。','想接着深入讨论天气。'],'a','Anyway.','后文重新提出主要安排，不自动设定所有条件。','观察：后面的句子把注意力放在哪里。'),
 choice('哪种情境最适合本次的Anyway？','选择匹配的谈话需要。',['对方刚说明紧急状况，你故意无视。','聊了一阵无关内容，现在回到原本的计划。','想明确表达感谢，不准备继续别的话。'],'b','Anyway.','B有清楚的回到主线需要；A可能显得冷漠。','依据：转回主线与忽视别人不同。'),
 choice('你用“Anyway,”开场后还没有说下文。','这个词是否已经说明下一步具体要做什么？',['是，已经确定开始时间。','是，已经确认全部计划。','没有，具体内容要在后面说。'],'c','Anyway.','话题标记本身不提供安排。','检查：标记与实际信息是否都齐全。'),
 choice('朋友刚说了一件让他很难过的事。','你是否应该为了快点回主线而机械说Anyway打断？',['不应该；先承接对方的感受再考虑转回。','应该，任何情境都必须尽快转话题。','应该，它本身就是完整安慰。'],'a','Anyway.','转话题的时机会影响对方是否觉得被重视。','考虑：对方当前需要回应吗？'),
 recall('你们为一个不影响结果的小细节争论了很久。','决定不再纠缠，接着讨论怎么开始。','Anyway.','后面可接具体下一步，不等于刚才的争论已经有结论。','目的：停止纠缠，继续主要事情。'),
 recall('昨天小陈聊起很多题外话，随后想回到行程。','替他想一个自然的转回开场。','Anyway.','固定话语标记不随叙述过去而变形。','线索：从题外话回到原来的事。'),
 choice('你说“Anyway, let’s get back to the plan.”。','哪项最符合它在此处的作用？',['请大家详细介绍所有题外话。','把大家带回计划。','宣布计划已经取消。'],'b','Anyway.','get back to the plan清楚表明回到计划。','观察：后文有没有说明话题去向。'),
 choice('你想在正式报告中概括前面三项结论。','能否认为Anyway永远等于正式总结用语？',['能，任何报告都只用它。','能，它本身就列出了三项结论。','不能；要根据文体和总结目的选表达。'],'c','Anyway.','Anyway常有口语转回或不再纠缠的感觉，不是所有正式总结的万能开场。','区分：谈话转回与正式概括。'),
 recall('你们已经讨论过一个无法改变的问题，准备继续安排明天。','用一个自然的口语开场往下说。','Anyway.','可用来继续主线，但安排仍需要说清楚。','目的：接受讨论到此，继续下一件事。'),
 choice('你用Anyway结束一个岔开的段落。','为了让听者跟上，接下来最好怎样？',['明确说出要回到的话题或下一件事。','让听者猜所有安排。','认为这个词已经说明完整内容。'],'a','Anyway.','话题转向清楚，交流才连贯。','检查：听者是否知道你要说哪件事。')
 ],'谈话原本在说什么，后来聊偏到哪里？你想怎样回到主线？')
 ];

 // Human-authored exposure map: positions are entry, l1–l5, r1–r5.
 // A supporting tense/word-form hint is not a failure to recall the target chunk.
 const targetGrammar={
  'c28-chance-to':[0,2,4,6,9], 'c28-focus-on':[2,3,4,5,8],
  'c28-wonder-if':[0,1,5,9,10], 'c28-want-someone':[0,1,2,3,4,5,6,7,8,9,10],
  'c28-cant-take':[0,4,5,7,8,9,10], 'c28-all-have-to':[0,1,2,3,4,5,6,7,8,9,10],
  'c28-maybe-should':[0,1,2,3,4,5,6,7,8,9,10],
  'c28-prepare-for':[0,1,2,3,6,7,8,10], 'c28-work-pressure':[],
  'c28-just-doing':[0,1,2,3,4,5,6,7,8,9,10], 'c28-stress-out':[0,1,2,3,4,5,6,7,8,9,10],
  'c28-telling-you':[0], 'c28-expect-someone':[0,1,2,3,4,6,8,9,10],
  'c28-find-out':[0,1,2,3,4,6,7,8,9,10], 'c28-open-to':[0,1,2,3,4,5,6,7,8,9,10],
  'c28-you-could':[0,1,2,3,4,5,6,7,8,9,10], 'c28-apply-to':[0,2,3,4,5,6,7,8,9],
  'c28-bar':[0,1,2,3,4,5,6,8], 'c28-not-really':[0,1,2,3,4,5,6,7,8,9,10],
  'c28-pressure-self':[0,1,2,3,4,5,6,7,8,9,10], 'c28-try-not':[0,1,2,3,4,5,6,7,8,9,10],
  'c28-stress-about':[2,4,6,7,8,9,10]
 };
 for(const u of units){const targets=targetGrammar[u.id]||[];[u.entry,...u.learning,...u.review].forEach((task,i)=>{for(const hint of task.grammarHints||[])hint.role=targets.includes(i)?'target':'support';});}
 const byId=new Map(units.map(u=>[u.id,u]));
 function revise(id,phase,index,scene,target,options,correct,feedback,hint){
  const task=byId.get(id)[phase][index];Object.assign(task,{scene,zh:target,target,choices:options.map((text,i)=>({id:['a','b','c'][i],text})),correctChoice:correct,feedback,hint,grammarHints:[{text:hint,role:'support'}]});
 }
 // Near-neighbour responses require an actual communicative choice, not a trivia guess.
 revise('c28-wait-no','learning',1,'你刚说“I’ll send it on Tuesday”，立刻发现应该是周三。','哪句最清楚地标明你在纠正自己？',
  ['By the way, Wednesday.','Wait, no, Wednesday.','What do you mean by Wednesday?'],'b','第二句明确先改口再给出新信息；By the way用于另提话题，What do you mean在询问别人。','对照：纠正自己、另提话题、询问别人是不同动作。');
 revise('c28-wait-no','review',2,'你刚报出数量是五十，马上发现其实是十五。','哪句适合立即改口？',
  ['Wait, no, fifteen.','Anyway, it was fifty.','Did you say fifteen?'],'a','第一句改正自己的数字；第二句保留原信息，第三句是在确认别人说的话。','依据：更正的是谁刚刚说出的信息。');
 revise('c28-whatever','learning',1,'朋友问几点见面。你两个时间都方便，想友好、明确地让他选。','哪句最清楚地表达这个态度？',
  ['Whatever.','Either time is fine.','What time did you say?'],'b','Either time is fine明确说两个时间都方便。Whatever的语气可能显得敷衍；第三句是在确认听到的时间。','区分：友好地给选择，与不耐烦地退出。');
 revise('c28-whatever','review',2,'同伴又纠缠起谁先迟到，你已有些不耐烦，想说“算了，不争了”。','哪句最符合你标明的态度？',
  ['Whatever.','Could you explain that again?','That sounds like a good plan.'],'a','Whatever可以带不耐烦地结束争论；第二句想继续听解释，第三句在评价计划。','依据：你此刻是否还想继续讨论。');
 revise('c28-thats-okay','learning',1,'朋友为打断你一次而道歉。你确实不介意，想让他安心。','哪句最直接回应这次道歉？',
  ["That's okay.","That makes sense.","I see what you mean."],'a','That’s okay直接表示不介意；另两句主要承接解释或意思，未清楚表示这次道歉没关系。','对照：回应道歉与回应解释不是同一目的。');
 revise('c28-thats-okay','review',2,'朋友说今天不能陪你复习，你不介意，也想让他知道自己会找其他同学。','哪句把两层意思都说清了？',
  ["That's okay. I can ask someone else.","I understand. You still have to come.","Whatever. That's your problem."],'a','第一句接受对方不能来的情况，并说明自己的后续安排；另两句分别带强求和不耐烦。','检查：态度与下一步安排是否都符合你的本意。');
 revise('c28-come-on','learning',1,'朋友开玩笑说“一页纸我至少要读三天”，你笑着觉得他说得太夸张。','哪句最符合轻松的不相信？',
  ["That's okay. Take your time.","Oh, come on. It's only one page.","Sorry, which page do you mean?"],'b','第二句轻松质疑夸张的说法；第一句接受时长，第三句澄清是哪页。','依据：你是在接受、质疑还是澄清。');
 revise('c28-come-on','review',2,'同伴最后一步不敢尝试，你想温和鼓励，而不是质疑他说真话。','哪句配合了鼓励的目的？',
  ["Oh, come on. That's not true.","Whatever. You decide.","Come on, you can do it."],'c','第三句用you can do it明确了鼓励。第一句质疑内容，第二句把决定交回但未鼓励。','观察：后面的话让同一句开场变成什么语气。');
 revise('c28-figured','learning',1,'你原先猜她正在开会，后来得到确认。','哪句最符合“我原先也是这样想的”？',
  ["That's what I figured.","I hadn't expected that.","I didn't catch that."],'a','第一句承接符合预期的信息；第二句表示出乎预料，第三句表示没听清。','对照：符合预期、出乎意料、没听清。');
 revise('c28-figured','review',2,'你本来确信商店今天营业，朋友却查到今天关门。你想承认这出乎自己预料。','哪句符合这个真实想法？',
  ["That's what I figured.","I hadn't expected that.","That's exactly what I thought."],'b','第二句承认意外；另两句都声称与原先判断一致，不符合题中事实。','依据：新消息是印证还是推翻了旧判断。');
 revise('c28-noticed-too','learning',1,'你早就注意到应用变慢，朋友现在主动提到同一变化。','哪句最符合“原来你也注意到了”？',
  ["I hadn't noticed that.","You've noticed it too!","Do you mean the old version?"],'b','第二句呼应共同观察；第一句表示自己此前没注意到，第三句请求澄清对象。','依据：你自己此前有没有同样的观察。');
 revise('c28-noticed-too','review',2,'朋友指出门牌换了，而你此前完全没留意。你想诚实回应自己的情况。','哪句最合适？',
  ["I hadn't noticed that.","You've noticed it too!","Exactly, I saw it yesterday."],'a','第一句符合此前没留意的事实；另两句都暗含自己已有观察。','区分：你也注意到与你刚得知。');
 revise('c28-seriously','learning',1,'你们刚在开玩笑。现在你想真心劝朋友休息，表明这句建议是认真的。','哪句最贴切？',
  ["Seriously? You took a break?","By the way, where is the café?","Seriously, you need a break."],'c','第三句是认真陈述的开场；第一句用问句表示惊讶，第二句换话题。','观察：你是在提出认真建议，还是表示惊讶。');
 revise('c28-seriously','review',2,'朋友告诉你他突然辞职，你很惊讶，想问“真的假的？”，而不是强调自己的陈述。','哪句最符合这个意图？',
  ["Seriously? You quit?","Seriously, I need a break.","To be honest, I like my job."],'a','第一句通过问句表达惊讶；第二句强调自己的陈述，第三句表达坦率看法。','区分：上扬问句与认真陈述。');
 revise('c28-anyway','learning',1,'你们原本在商量何时见面，后来聊了一会儿无关的电影。你想回到见面时间。','哪句最清楚地带回主线？',
  ["By the way, have you seen another film?","Anyway, what time shall we meet?","To sum up, that film was exciting."],'b','第二句回到见面安排；第一句继续引出电影话题，第三句概括电影评价。','对照：回主线、另提话题、总结评价。');
 revise('c28-anyway','review',2,'你们已经聊过旅行安排，现在你想另提一件无关的小事：新开的咖啡馆。','哪句最明确地表示另提话题？',
  ["Anyway, let's get back to the trip.","To sum up, the trip is booked.","By the way, a new café has opened."],'c','第三句另提新话题；Anyway这里回主线，To sum up概括已有信息。','依据：你想回原话题还是引入另一件事。');

 for(const u of units.filter(x=>x.practiceProfile==='scenario'))for(const task of [u.entry,...u.learning,...u.review])for(const hint of task.grammarHints)hint.role='target';

 const dialogueExamples={
  'c28-wait-no':[
   {zh:'“周二发给你。等等，不对，周三。”',en:"I'll send it on Tuesday. Wait, no, Wednesday."},
   {zh:'“她住在这里。等等，不对，她以前住在这里。”',en:'She lives here. Wait, no, she used to live here.'}],
  'c28-whatever':[
   {zh:'争论谁对谁错后，不耐烦地说：“算了。”',en:'“You started it.” “Whatever.”'},
   {zh:'不愿再争选哪家店：“算了，你选吧。”',en:'Whatever. You choose.'}],
  'c28-thats-okay':[
   {zh:'“抱歉，回复晚了。”“没关系。”',en:'“Sorry for the late reply.” “That\'s okay.”'},
   {zh:'“今晚我不能来了。”“没关系，我们下次再聚。”',en:'“I can\'t come tonight.” “That\'s okay. We can meet another time.”'}],
  'c28-come-on':[
   {zh:'“我读这一页得花一整天。”“得了吧，就一页。”',en:'“This page will take me all day.” “Oh, come on. It\'s only one page.”'},
   {zh:'温和鼓励犹豫的同伴：“来吧，你能做到。”',en:'Come on, you can do it.'}],
  'c28-figured':[
   {zh:'“她刚才在开会。”“我原先也是这么想的。”',en:'“She was in a meeting.” “That\'s what I figured.”'},
   {zh:'“商店周一不营业。”“这和我原先想的一样。”',en:'“The shop is closed on Mondays.” “That\'s what I figured.”'}],
  'c28-noticed-too':[
   {zh:'“这个应用最近变慢了。”“原来你也注意到了！”',en:'“This app has been slower lately.” “You\'ve noticed it too!”'},
   {zh:'同事也发现办公室更安静了，你回应：“你也注意到了！”',en:"You've noticed it too! The office has been quieter."}],
  'c28-seriously':[
   {zh:'“说真的，你需要休息一下。”',en:'Seriously, you need a break.'},
   {zh:'“说真的，谢谢你帮忙。”',en:'Seriously, thank you for helping.'}],
  'c28-anyway':[
   {zh:'题外话后回到安排：“对了，我们几点见？”',en:'Anyway, what time shall we meet?'},
   {zh:'结束无关的讨论：“不管怎样，我们说回计划吧。”',en:"Anyway, let's get back to the plan."}]
 };

 // Submitted supporting expressions are practised inside natural target-chunk tasks.
 // These are authored replacements, not extra questions or a second progress record.
 function replaceInput(id,phase,index,scene,zh,en,words,grammar,role='support',variants=[]){
  const u=byId.get(id),old=u[phase][index],task=input(old.id,scene,zh,en,words,grammar,variants);
  task.grammarHints=grammar?[{text:grammar,role}]:[];u[phase][index]=task;
 }
 replaceInput('c28-all-have-to','learning',4,
  '这个工具的说明写着使用额度会按周期恢复，你在概括现在要做的事。',
  '我只需要等使用额度重置。','All I have to do is wait for the usage limit to reset.',
  [['使用额度','usage limit'],['重置','reset'],['等待某事发生','wait for something to happen']],
  '结构：All I have to do is + 动词原形；wait for + 对象 + to do 表示等待它做某事。','target',
  ['All I have to do is to wait for the usage limit to reset.']);
 replaceInput('c28-wonder-if','review',0,
  '你最近老在同一个地方出错，用带一点自嘲的口气说出自己的疑问。',
  '我不知道自己是不是越来越笨了。','I wonder if I am getting dumber.',
  [['变笨','get dumber']],
  'if 后用陈述语序；be getting + 比较级表示正在变得更……。','target',
  ["I wonder if I'm getting dumber."]);
 replaceInput('c28-telling-you','review',1,
  '朋友还认为一个已经清楚呈现的错误不存在，你认真强调自己的判断。',
  '我跟你讲，这太明显了。','I am telling you, it is so obvious.',
  [['明显的','obvious'],['这么','so']],
  '强调开场：I am telling you, 后接完整陈述。','target',
  ["I'm telling you, it's so obvious."]);
 replaceInput('c28-prepare-for','learning',2,
  '她正在准备一项取得教师资格所需的考试，你向朋友介绍她最近忙什么。',
  '她在准备取得教师资格所需的一项考试。','She is preparing for an exam required for a teaching qualification.',
  [['教师资格','a teaching qualification'],['所需的','required for']],
  '准备某项考试：prepare for + 考试；进行时用 be preparing。','target',
  ["She's preparing for an exam required for a teaching qualification."]);
 replaceInput('c28-open-to','review',3,
  '她尚未决定职业方向，但不排斥争取公立学校的长期教师工作。',
  '她愿意考虑争取公立学校的一份长期教师岗位。','She is open to trying for a permanent public-school teaching position.',
  [['争取一个岗位','try for a position'],['公立学校的长期教师岗位','a permanent public-school teaching position']],
  'be open to 后接动词-ing；try for 指争取机会，不保证已经递交正式申请。','target',
  ["She's open to trying for a permanent public-school teaching position.",
   'She is open to trying for a permanent public school teaching position.']);
 replaceInput('c28-maybe-should','learning',3,
  '你还没决定要不要争取眼前的岗位，正在试探性地说出一个想法。',
  '要不我干脆争取一下那个岗位。','Maybe I should just try for that position.',
  [['争取那个岗位','try for that position']],
  'Maybe + 主语 + should just + 动词原形，表示尚在考虑的做法。','target');
 replaceInput('c28-expect-someone','learning',0,
  '公司要求候选人在面试前了解岗位内容，你向朋友转述这个要求。',
  '公司要求我仔细阅读职位说明。','The company expects me to read the job description carefully.',
  [['职位说明','job description (JD)'],['仔细阅读','read carefully']],
  'expect + 人 + to do；单数主语 company 后用 expects。','target');
 replaceInput('c28-maybe-should','review',0,
  '任务已经让你承受不了，你在考虑是不是该停一停，而不是宣布最终决定。',
  '要不我干脆停下来吧。这压力实在太大了。','Maybe I should just stop. This is way too stressful.',
  [['停下来','stop'],['压力实在太大','way too stressful']],
  'Maybe + 主语 + should just + 动词原形；way too + 形容词表示远超过合适的程度。','target');
 replaceInput('c28-find-out','review',1,
  '你们核对了职位说明与实际工作，有具体依据发现任职要求写得过高。',
  '我们后来发现公司夸大了任职要求。','We found out that the company had exaggerated the requirements.',
  [['夸大任职要求','exaggerate the requirements']],
  'find out that 后接完整陈述；先于过去得知时刻的动作可用 had + 过去分词。','target');
 replaceInput('c28-open-to','learning',4,
  '朋友建议你先看看实习机会，你尚未决定申请，但愿意了解和考虑。',
  '我愿意了解并考虑实习机会。','I am open to looking at internship opportunities.',
  [['了解并考虑实习机会','look at internship opportunities']],
  'be open to 后接 looking；愿意考虑不等于已经决定申请。','target',
  ["I'm open to looking at internship opportunities."]);
 revise('c28-come-on','learning',0,
  '朋友开玩笑说“我读这一页至少要花一整周”，你觉得他夸张，但不想使用粗俗措辞。',
  '哪句最符合轻松、不粗俗的“哎呀，得了吧”？',
  ["Oh, come on. It's only one page.","That's bullshit.","I agree. It will take a week."],
  'a','第一句轻松质疑夸张；bullshit 是粗俗、语气更强的否定，第三句则表示赞同。',
  '比较：不相信、粗俗地否定、表示赞同，语气强度并不相同。');
 replaceInput('c28-open-to','review',4,
  '你们尚未决定下一步，但愿意了解几乎所有可能的选择。',
  '我们基本什么都愿意考虑。','We are open to pretty much anything.',
  [['基本什么都','pretty much anything']],
  'be open to 后接名词或代词；愿意考虑不代表已经接受。','target',
  ["We're open to pretty much anything."]);
 const crude=byId.get('c28-come-on').learning[0];
 crude.lexicalHints=[{zh:'胡扯（粗俗、语气强）',en:'bullshit',role:'target'}];
 crude.grammarHints.forEach(h=>h.role='target');

 for(const u of units){
  if(dialogueExamples[u.id])u.examples=dialogueExamples[u.id];
  for(const task of [u.entry,...u.learning,...u.review]){
   const variants=new Set(task.answers);
   if(window.JUJIAN_WHOLE_REPLACE)for(const [full,short]of [['I am',"I'm"],['I will',"I'll"],['I have',"I've"],['We are',"We're"],['We will',"We'll"],['We have',"We've"],['They are',"They're"],['She is',"She's"],['He is',"He's"],['It is',"It's"],['cannot',"can't"],['do not',"don't"],['does not',"doesn't"],['did not',"didn't"],['is not',"isn't"],['are not',"aren't"],['have not',"haven't"],['has not',"hasn't"]])for(const answer of [...variants])variants.add(window.JUJIAN_WHOLE_REPLACE(answer,full,short));
   task.answers=[...variants];
  }
 }

 return units;
})();
