'use strict';
// 2026-11-04 daily material units, batch 1.
window.BW_CECILIA_C=(window.BW_CECILIA_C||[]).concat((() => {
  const {unit,q,finish}=window.BW_CECILIA_KIT;
  const units=[
 unit('c1104-majoring-in','自我介绍时说明专业与学生身份',"a master's student majoring in…","a master's student majoring in + 专业",
 "介绍自己或他人的专业与身份时，先说身份（a master's student / an undergraduate），再用 majoring in 带出专业，最后可加 at + 学校。面试、自我介绍和实习申请里很常用。",
 "majoring in 前面要有身份名词或 be 动词；说“我主修……”也可以直接用 I major in…。专业名称用 major in，研究方向才用 specialise in。",
 q('面试官请你做一个简短的自我介绍。',"我是四川大学一名主修日语语言文学的硕士生。","I am a master's student majoring in Japanese Language and Literature at Sichuan University.",[['日语语言文学','Japanese Language and Literature'],['四川大学','Sichuan University']],"身份 + majoring in + 专业 + at + 学校。",["I am a master's student majoring in Japanese language and literature at Sichuan University."]),[
 q('招聘会上，你向朋友介绍一位新认识的人。',"她是复旦大学一名主修经济学的硕士生。","She is a master's student majoring in economics at Fudan University.",[['经济学','economics'],['复旦大学','Fudan University']],"第三人称：She is…；a 用在 master's 前。",["She's a master's student majoring in economics at Fudan University."]),
 q('你向实习主管介绍新来的同学。',"他是一名主修计算机科学的本科生。","He is an undergraduate majoring in computer science.",[['本科生','undergraduate'],['计算机科学','computer science']],"undergraduate 以元音开头，前面用 an。",["He's an undergraduate majoring in computer science."]),
 q('面试官问你本科读了什么。',"我本科主修英语，现在学习翻译。","I majored in English as an undergraduate, and now I study translation.",[['本科时','as an undergraduate'],['学习翻译','study translation']],"本科是过去的事：majored in。",["I majored in English as an undergraduate, and I now study translation.","As an undergraduate, I majored in English, and now I study translation."]),
 q('在实习前的见面会上，同事想了解你。',"你主修市场营销吗？","Are you majoring in marketing?",[['市场营销','marketing']],"现在的专业用进行时：Are you majoring in…?",["Do you major in marketing?"]),
 q('你在面试中谈到家人的影响。',"我姐姐是浙江大学一名主修化学的博士生。","My sister is a doctoral student majoring in chemistry at Zhejiang University.",[['博士生','doctoral student'],['化学','chemistry']],"身份换成 doctoral student，结构不变。",["My sister is a PhD student majoring in chemistry at Zhejiang University.","My sister's a doctoral student majoring in chemistry at Zhejiang University."]),
 q('面试官问你目前在做什么研究。',"我是一名主修日语的硕士生，正在写一篇关于翻译的毕业论文。","I am a master's student majoring in Japanese, and I am writing my thesis on translation.",[['毕业论文','thesis'],['关于翻译','on translation']],"用 and 连接身份和正在做的事。",["I'm a master's student majoring in Japanese, and I'm writing my thesis on translation.","I am a master's student majoring in Japanese, and I am writing my thesis about translation."]),
 q('你在写招聘说明，介绍理想的实习生。',"我们正在寻找一名主修数据科学的硕士生。","We are looking for a master's student majoring in data science.",[['寻找','look for'],['数据科学','data science']],"look for 用进行时；身份短语放在 for 后面。",["We are looking for a master's student who is majoring in data science.","We are looking for a master's student who majors in data science."]),
 q('你向面试官回顾第一次实习。',"我第一次实习时，是一名主修金融的本科生。","I was an undergraduate majoring in finance when I did my first internship.",[['金融','finance'],['第一次实习','my first internship']],"过去身份：was an undergraduate majoring in…。",["When I did my first internship, I was an undergraduate majoring in finance."]),
 q('新同事和你第一次聊天。',"你在大学主修什么？","What are you majoring in?",[['主修','major in']],"疑问词 What 放在句首，介词 in 留在句尾。",["What do you major in?","What are you majoring in at university?"]),
 q('你向面试官介绍实习团队。',"这里大多数实习生是主修设计的学生。","Most of the interns here are students majoring in design.",[['大多数','most of'],['设计','design']],"students majoring in… 作名词后置修饰。",["Most of the interns here are students who are majoring in design.","Most of the interns here are students who major in design."])
 ]),
 unit('c1104-be-expected-to','说预计会做某事，或被期待、被要求做某事','be expected to do…','be expected to + 动词原形',
 "be expected to 有两种常见意思：一是“预计会……”，多用于毕业、结果、到达时间；二是“被期待／被要求做……”，多用于职场规范，主语常是人。到底是哪种，要看主语和上下文。",
 "“预计”用 be expected to；说自己心里的预期时也可用 I expect to do。“被要求”语气比 must 柔和，说的是一种默认要求；真正的硬性规定另用 be required to。",
 q('面试官问你什么时候毕业。',"我预计2027年6月毕业。","I am expected to graduate in June 2027.",[['毕业','graduate']],"预计：be expected to + 动词原形。",["I expect to graduate in June 2027."]),[
 q('你向招聘负责人说明朋友的情况。',"她预计在五月前完成毕业论文。","She is expected to finish her thesis by May.",[['完成','finish'],['毕业论文','thesis']],"第三人称：is expected to。",["She's expected to finish her thesis by May.","She is expected to finish her dissertation by May."]),
 q('实习第一天，主管介绍规则。',"实习生需要参加每周例会。","Interns are expected to attend the weekly meeting.",[['实习生','intern'],['每周例会','the weekly meeting']],"被期待做：复数主语用 are expected to。",["Interns are expected to attend the weekly team meeting."]),
 q('你回忆上一份实习的要求。',"我们当时被要求在一天内回复客户。","We were expected to reply to clients within a day.",[['回复','reply to'],['一天内','within a day']],"过去的要求：were expected to。",["We were expected to respond to clients within a day.","We were expected to reply to customers within a day."]),
 q('新人担心自己什么都不会。',"你不必在第一天就什么都懂。","You are not expected to know everything on your first day.",[['什么都懂','know everything'],['第一天','your first day']],"否定：are not expected to；to 后接动词原形。",["You aren't expected to know everything on your first day.","You're not expected to know everything on your first day."]),
 q('面试前，你向招聘邮箱确认着装。',"我需要穿西装去面试吗？","Am I expected to wear a suit to the interview?",[['西装','a suit'],['去面试','to the interview']],"一般疑问句：Am I expected to…?",["Am I expected to wear a suit for the interview?"]),
 q('面试官介绍入职后的要求。',"新员工将被要求用英语写报告。","New hires will be expected to write reports in English.",[['新员工','new hires'],['写报告','write reports']],"将来：will be expected to。",["New employees will be expected to write reports in English.","New hires will be expected to write their reports in English."]),
 q('同事告诉你考核的消息。',"结果预计下周公布。","The results are expected to be announced next week.",[['结果','the results'],['公布','announce']],"事物作主语时，to 后用被动：to be announced。",["The results are expected to be published next week."]),
 q('你在入职前给主管发邮件。',"入职前我需要准备什么？","What am I expected to prepare before I start?",[['准备','prepare'],['入职','start']],"疑问词 What 开头：What am I expected to…?",["What am I expected to prepare before my first day?","What am I expected to prepare before I start work?"]),
 q('你在解释同事缺席的原因。',"她本来预计上周加入我们，但她还在国外。","She was expected to join us last week, but she is still abroad.",[['加入','join'],['在国外','abroad']],"过去的预计：was expected to。",["She was expected to join us last week, but she's still abroad."]),
 q('你向面试官讲述一次项目经历。',"我本来不需要带领这个项目，但我主动提出了。","I was not expected to lead the project, but I volunteered.",[['带领项目','lead the project'],['主动提出','volunteer']],"过去否定：was not expected to。",["I wasn't expected to lead the project, but I volunteered.","I was not expected to lead the project, but I offered to."])
 ]),
 unit('c1104-in-terms-of','就某一方面而言，概括说明','In terms of…, …','In terms of + 名词, 句子',
 "In terms of 用来划定谈论的方面，意思是“就……方面而言”。面试时可以用它分条概括，比如先说语言，再说经验。后面接名词或名词短语，逗号后面再给出具体内容。",
 "In terms of 后面接名词，不接完整句子；它只用来划定角度，不要每句话都用。意思简单时，直接用 For… 或 About… 也可以。",
 q('面试官请你概括自己的语言能力。',"就语言而言，我会说日语和英语。","In terms of languages, I speak Japanese and English.",[['语言','languages'],['说','speak']],"In terms of + 名词, 句子。",["In terms of languages, I can speak Japanese and English.","In terms of language skills, I speak Japanese and English."]),[
 q('面试官问你有什么相关经历。',"就经验而言，我在两家公司实习过。","In terms of experience, I have interned at two companies.",[['实习','intern'],['两家公司','two companies']],"到现在为止的经历：have interned。",["In terms of experience, I have worked as an intern at two companies.","In terms of experience, I've interned at two companies."]),
 q('你和朋友比较两份录用通知。',"就薪资而言，这两份工作差不多。","In terms of salary, the two offers are similar.",[['薪资','salary'],['录用通知','offer']],"逗号前划定方面，逗号后给结论。",["In terms of pay, the two offers are similar.","In terms of salary, the two jobs are similar."]),
 q('面试官问你在团队里是什么样的人。',"就团队合作而言，我觉得我是个好的倾听者。","In terms of teamwork, I think I am a good listener.",[['团队合作','teamwork'],['倾听者','listener']],"I think 后面可以直接接句子。",["In terms of teamwork, I think I'm a good listener.","In terms of teamwork, I believe I am a good listener."]),
 q('你向朋友介绍你的实习。',"就工作量而言，这份实习相当灵活。","In terms of workload, this internship is quite flexible.",[['工作量','workload'],['灵活','flexible']],"in terms of 后的名词一般不加冠词。",["In terms of workload, this internship is fairly flexible.","In terms of workload, this internship is pretty flexible."]),
 q('面试官问你的英语和日语各有什么特点。',"就写作而言，我对英语比对日语更有信心。","In terms of writing, I am more confident in English than in Japanese.",[['更有信心','more confident'],['英语','English']],"比较：more confident in A than in B。",["In terms of writing, I'm more confident in English than in Japanese.","In terms of writing, I am more confident in English than I am in Japanese."]),
 q('面试官请你反思自己的不足。',"就技能而言，你觉得自己还需要提高什么？","In terms of skills, what do you think you still need to improve?",[['提高','improve'],['还需要','still need to']],"疑问句里 what do you think 后用陈述语序。",["In terms of skills, what do you think you still need to work on?"]),
 q('你向朋友评价想入职的公司。',"就公司文化而言，我很满意。","In terms of company culture, I am very satisfied.",[['公司文化','company culture'],['满意','satisfied']],"in terms of 后面接名词短语。",["In terms of company culture, I'm very satisfied.","In terms of company culture, I am really satisfied."]),
 q('面试官问你如何安排工作。',"就时间管理而言，我每天都会做计划。","In terms of time management, I make a plan every day.",[['时间管理','time management'],['做计划','make a plan']],"习惯用一般现在时。",["In terms of time management, I always make a plan for each day.","In terms of time management, I make a plan for every day."]),
 q('你对比两个实习地点。',"就地点而言，这个办公室对我来说很方便。","In terms of location, the office is very convenient for me.",[['地点','location'],['方便','convenient']],"convenient for + 人。",["In terms of location, the office is really convenient for me."]),
 q('你向实习主管介绍一位同学。',"就成绩而言，她是班上最好的学生。","In terms of grades, she was the top student in her class.",[['成绩','grades'],['班上最好的学生','the top student in her class']],"过去的事实：was。",["In terms of grades, she was the best student in her class.","In terms of grades, she was the top student in the class."])
 ]),
 unit('c1104-score-on','说在某次考试或测试中得了多少分','score … on…','score + 分数 + on + 考试／测试',
 "score 作动词，表示在考试、测验中得到多少分，考试名称前用 on。除了具体分数，也可以说 score well / score full marks。介绍语言能力和考试成绩时很常用。",
 "考试名称前用 on；“通过考试”用 pass，“参加考试”用 take，三者不能互换。score 后面接的是分数，要写 score 173 on the JLPT N1，不能写 score the JLPT N1。",
 q('面试官问你的日语水平。',"我在日语能力考试N1中得了173分。","I scored 173 on the JLPT N1.",[['日语能力考试N1','the JLPT N1']],"score + 分数 + on + 考试名称。",["I scored 173 on the JLPT N1 exam."]),[
 q('你向招聘负责人介绍同学的口语成绩。',"她在口语测试中得了90分。","She scored 90 on the speaking test.",[['口语测试','the speaking test']],"过去式：scored。",["She scored 90 on the speaking exam."]),
 q('面试官问你的英语成绩。',"我在英语六级考试中得了580分。","I scored 580 on CET-6.",[['英语六级','CET-6']],"CET-6 前一般不加冠词；加 the 也可以。",["I scored 580 on the CET-6.","I scored 580 on the CET-6 exam."]),
 q('你和同学聊起备考。',"你在TJM-4中得了多少分？","What did you score on the TJM-4?",[['TJM-4','the TJM-4']],"疑问词 What 作 score 的宾语，did 后用原形。",["How many points did you score on the TJM-4?"]),
 q('你向老师说明下一步目标。',"我希望在下次模拟考试中得到100分以上。","I hope to score above 100 on the next mock test.",[['希望','hope to'],['模拟考试','mock test']],"hope to + 动词原形。",["I hope to score over 100 on the next mock test.","I hope to score more than 100 on the next mock exam."]),
 q('面试官请你介绍专业考试经历。',"我在TJM-4中得了85分，这是全国日语专业考试之一。","I scored 85 on the TJM-4, one of the national Japanese-major exams.",[['全国日语专业考试','the national Japanese-major exams'],['之一','one of']],"同位语：one of… 补充说明考试。",["I scored 85 on the TJM-4, which is one of the national Japanese-major exams.","I scored 85 on the TJM-4, one of the national exams for Japanese majors."]),
 q('你向老师介绍一位同学的表现。',"他在听力部分得了满分。","He scored full marks on the listening section.",[['满分','full marks'],['听力部分','the listening section']],"full marks 表示满分。",["He scored full marks in the listening section.","He scored full marks on the listening part."]),
 q('你向老师汇报备考进展。',"我第二次模拟考试比第一次高了20分。","I scored 20 points higher on the second mock exam than on the first.",[['高20分','20 points higher'],['第二次模拟考试','the second mock exam']],"比较：scored 20 points higher on A than on B。",["I scored 20 points higher on the second mock test than on the first.","I scored 20 points higher on the second mock exam than I did on the first."]),
 q('同学问你备考的结果。',"你在TJM-8中考得好吗？","Did you score well on the TJM-8?",[['TJM-8','the TJM-8'],['考得好','score well']],"副词 well 修饰 score。",["Did you score well on the TJM-8 exam?"]),
 q('你在读岗位的语言要求。',"申请人必须在日语能力考试N1中至少得160分。","Applicants must score at least 160 on the JLPT N1.",[['申请人','applicants'],['至少','at least']],"must 后接动词原形。",["Applicants have to score at least 160 on the JLPT N1.","Applicants must score a minimum of 160 on the JLPT N1."]),
 q('面试官问你和同学相比如何。',"我同学在日语能力考试N1中得了160分，我得了173分。","My classmate scored 160 on the JLPT N1, and I scored 173.",[['同学','classmate'],['日语能力考试N1','the JLPT N1']],"后一分句可省略 on the JLPT N1。",["My classmate scored 160 on the JLPT N1, and I scored 173 on it.","My classmate scored 160 on the JLPT N1, and I scored 173 on the same test."])
 ])
  ];
  return finish(units);
})());
