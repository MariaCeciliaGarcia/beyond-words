'use strict';
window.JUJIAN_WORK_3 = (() => {
  // Contract auxiliary have only; lexical have/to is not a general 've form.
  const mayShorten = (text, full) => {
    if(!/ have$/.test(full))return true;
    const match=new RegExp('\\b'+full+'\\s+(.+)').exec(text);
    return !!match && /^(?:(?:already|just|not|never)\s+)*(?:attached|booked|bought|changed|checked|committed|completed|contacted|decided|double-checked|finished|followed|found|got|gotten|had|heard|left|made|narrowed|opened|put|read|received|resolved|ruled|run|sent|taken|tested|worked|written)\b/.test(match[1]);
  };

  const pairs = [["I'm",'I am'],["We're",'We are'],["I'll",'I will'],["We'll",'We will'],["I've",'I have'],["We've",'We have'],["I'd",'I would'],["we'll",'we will'],["it's",'it is'],["that's",'that is']];
  const forms = answers => { const out = new Set(answers); for (const [a,b] of pairs) for (const s of [...out]) { if(new RegExp('\\b'+a+'\\b').test(s)) out.add(s.replace(new RegExp('\\b'+a+'\\b','g'),b)); if(mayShorten(s,b) && new RegExp('\\b'+b+'\\b').test(s)) out.add(s.replace(new RegExp('\\b'+b+'\\b','g'),a)); } return [...out]; };
  const make = (id,meaning,expression,formula,explanation,boundary,checkpoint,rows) => {
    const qs = rows.map(([zh,en,hint,variants=[]],i)=>({id:(i<5?'l':'r')+(i%5+1),zh,answers:forms([en,...variants]),hint}));
    return {id,collection:'work3',meaning,expression,formula,explanation,boundary,checkpoint,examples:qs.slice(0,2).map(q=>({en:q.answers[0],zh:q.zh})),entry:{...qs[0],id:'entry'},learning:qs.slice(0,5),review:qs.slice(5)};
  };
  return [
    make('w-requirements','请对方逐项讲解需求或流程','Could you walk me through…?','Could you walk me / us through + 需求 / 流程 / 方案？',
      '希望对方按步骤或逐项解释时，用 walk someone through something。适合了解客户需求，也适合跟同事核对流程。',
      '不只是重说刚才的话，也不是实际带人走路；需要解释对象时，不漏掉 me / us。',
      'walk 后先放 me / us；through 后放需要讲解的内容。',[
      ['了解客户需求：你能向我逐项讲解你的需求吗？','Could you walk me through your requirements?','你的需求：your requirements'],
      ['核对合作流程：你能向我们逐步讲解这个流程吗？','Could you walk us through the process?','向我们：walk us through\n这个流程：the process'],
      ['了解方案：你能向我逐项讲解你的方案吗？','Could you walk me through your proposal?','你的方案：your proposal'],
      ['核对安排：你能向我逐项讲解日程吗？','Could you walk me through the schedule?','日程：the schedule'],
      ['了解下单方式：你能向我们逐步讲解订购流程吗？','Could you walk us through the ordering process?','订购流程：the ordering process'],
      ['了解客户工作：你能向我逐步讲解你目前的工作流程吗？','Could you walk me through your current workflow?','目前的工作流程：your current workflow'],
      ['阅读文件遇到困难：你能向我逐项讲解这些说明吗？','Could you walk me through these instructions?','这些说明：these instructions'],
      ['核对方案：你能向我们逐项讲解这些选项吗？','Could you walk us through the options?','这些选项：the options'],
      ['了解对方如何使用产品：你能向我讲解一个典型的使用例子吗？','Could you walk me through a typical example?','一个典型例子：a typical example'],
      ['讨论收费项目：你能向我逐项讲解这份报价吗？','Could you walk me through this quote?','这份报价：this quote']
    ]),
    make('w-include','明确报价包含什么及不包含什么','The quote includes…, but not…','The quote includes + 包含项目, but not + 不包含项目',
      '解释已给出的报价覆盖哪些项目，同时明确排除项，让对方比较或决定时有清楚依据。',
      'includes 引出包含项，but not 引出排除项；把两者说清楚，避免双方对报价内容理解不同。',
      'quote 是单数，动词用 includes；but not 后的项目与前面保持并列。',[
      ['按已确认的报价说明：报价包含配送，但不包含安装。','The quote includes delivery, but not installation.','配送：delivery\n安装：installation'],
      ['说明报价：报价包含设计，但不包含印刷。','The quote includes design, but not printing.','设计：design\n印刷：printing'],
      ['说明报价：报价包含培训，但不包含差旅。','The quote includes training, but not travel.','培训：training\n差旅：travel'],
      ['说明报价：报价包含场地租用，但不包含餐饮。','The quote includes venue hire, but not catering.','场地租用：venue hire\n餐饮服务：catering'],
      ['说明报价：报价包含设备，但不包含运输。','The quote includes equipment, but not transport.','设备：equipment\n运输：transport'],
      ['说明报价：报价包含设置，但不包含维护。','The quote includes setup, but not maintenance.','设置：setup\n维护：maintenance'],
      ['说明报价：报价包含材料，但不包含工具。','The quote includes materials, but not tools.','材料：materials\n工具：tools'],
      ['说明报价：报价包含翻译，但不包含排版。','The quote includes translation, but not formatting.','翻译：translation\n排版：formatting'],
      ['说明报价：报价包含拍摄，但不包含剪辑。','The quote includes filming, but not editing.','拍摄：filming\n剪辑：editing'],
      ['说明报价：报价包含午饭，但不包含住宿。','The quote includes lunch, but not accommodation.','午饭：lunch\n住宿：accommodation']
    ]),
    make('w-scope','说明新增要求超出已约定范围','That falls outside…','That / This falls outside + 已约定范围',
      '对方提出额外工作时，说明它不在先前约定之内。可据此继续商量安排，而不是含糊答应。',
      '说明某项要求超出了之前约定，不等于拒绝继续协商；可接着讨论是否调整范围或另作安排。',
      'that / this 后用 falls；outside 可直接接范围，outside of 也可用于这种表达。',[
      ['对方增加任务，按已约定范围说明：那超出了约定范围。','That falls outside the agreed scope.','约定范围：the agreed scope'],
      ['对方要求额外服务，说明：这超出了我们的支持范围。','This falls outside the scope of our support.','我们的支持范围：the scope of our support'],
      ['对方提新需求，说明：那超出了原来的方案。','That falls outside the original plan.','原来的方案：the original plan'],
      ['对方增加目标，说明：这超出了项目范围。','This falls outside the project scope.','项目范围：the project scope'],
      ['核对额外工作，说明：那超出了我们约定的工作。','That falls outside the work we agreed on.','我们约定的工作：the work we agreed on'],
      ['对方要求另一项服务，说明：那超出了服务范围。','That falls outside the scope of the service.','服务范围：the scope of the service'],
      ['新增任务未约定，说明：这超出了我们最初的约定。','This falls outside our original agreement.','我们最初的约定：our original agreement'],
      ['核对额外要求，说明：那超出了当前计划。','That falls outside the current plan.','当前计划：the current plan'],
      ['对方要求更多培训，说明：这超出了培训范围。','This falls outside the scope of the training.','培训范围：the scope of the training'],
      ['新增修改不在约定内，说明：那超出了这一阶段的范围。','That falls outside the scope of this stage.','这一阶段的范围：the scope of this stage']
    ]),
    make('w-clarify-scope','澄清某项服务或工作的具体覆盖内容','Just to clarify, … covers…','Just to clarify, + 工作 / 服务 + covers + 覆盖内容',
      '双方可能对工作内容理解不一致时，先提示自己是在澄清，再把具体覆盖内容说清楚。',
      '这里核实工作内容；与列出报价包含和排除项不同，不把所有说明都当作定价说明。',
      'Just to clarify 后接完整句子；单数工作或服务后用 covers。',[
      ['怕理解有误，澄清：说明一下，这次培训涵盖基本功能。','Just to clarify, this training covers the basic features.','基本功能：the basic features'],
      ['澄清工作内容：说明一下，这次审查涵盖整个文件。','Just to clarify, this review covers the whole document.','整个文件：the whole document'],
      ['澄清服务内容：说明一下，这项服务涵盖日常支持。','Just to clarify, this service covers routine support.','日常支持：routine support'],
      ['澄清分工范围：说明一下，我们的工作涵盖内容更新。','Just to clarify, our work covers content updates.','内容更新：content updates'],
      ['澄清这一步：说明一下，这个阶段涵盖测试。','Just to clarify, this stage covers testing.','这个阶段：this stage\n测试：testing'],
      ['澄清培训内容：说明一下，这次课程涵盖新的流程。','Just to clarify, this session covers the new process.','这次课程：this session\n新的流程：the new process'],
      ['澄清检查内容：说明一下，这项检查涵盖所有的设备。','Just to clarify, this check covers all the equipment.','所有设备：all the equipment'],
      ['澄清工作内容：说明一下，这个任务涵盖数据录入。','Just to clarify, this task covers data entry.','数据录入：data entry'],
      ['澄清演示内容：说明一下，这次演示涵盖前三个步骤。','Just to clarify, this demonstration covers the first three steps.','演示：this demonstration\n前三步：the first three steps'],
      ['澄清方案范围：说明一下，这个方案涵盖两个地点。','Just to clarify, this plan covers two locations.','两个地点：two locations']
    ]),
    make('w-budget','询问某项条件是否可以协商','Is there any flexibility on…?','Is there any flexibility on + 待协商的条件？',
      '对预算、价格、日期或其他条件有困难时，先问是否有调整空间，为进一步协商打开话题。',
      '不是要求对方必须让步，也不是已经提出具体新条件。flexibility 指调整余地，是不可数名词。',
      'Is there any flexibility 后保留 on；明确想协商哪项条件。',[
      ['现有价格超出预期，询问：价格方面有商量的余地吗？','Is there any flexibility on the price?','价格：the price'],
      ['现有安排不便，询问：交付日期方面有商量的余地吗？','Is there any flexibility on the delivery date?','交付日期：the delivery date'],
      ['资源不够，询问：预算方面有调整的余地吗？','Is there any flexibility on the budget?','预算：the budget'],
      ['时间不够，询问：截止日期方面有商量的余地吗？','Is there any flexibility on the deadline?','截止日期：the deadline'],
      ['现有日程不便，询问：日程安排方面有调整的余地吗？','Is there any flexibility on the schedule?','日程：the schedule'],
      ['最低订量太多，询问：最低订购量方面有商量的余地吗？','Is there any flexibility on the minimum order quantity?','最低订购量：the minimum order quantity'],
      ['大家时间冲突，询问：会议时间方面有调整的余地吗？','Is there any flexibility on the meeting time?','会议时间：the meeting time'],
      ['希望改变启动安排，询问：开始日期方面有商量的余地吗？','Is there any flexibility on the start date?','开始日期：the start date'],
      ['现有要求难满足，询问：工作范围方面有商量的余地吗？','Is there any flexibility on the scope?','工作范围：the scope'],
      ['培训时段不便，询问：培训日期方面有调整的余地吗？','Is there any flexibility on the training dates?','培训日期：the training dates']
    ]),
    make('w-offer-option','把一种可行做法作为选项提出','One option would be to…','One option would be to + 动词原形…',
      '讨论解决办法时，提出一个可以考虑的方案。would 让它保持为备选想法，而不是宣布确定安排。',
      '一个选项不是唯一选择，也不是自己已获授权采取的动作。后续仍可讨论利弊。',
      'option 用单数；would be 后接 to + 动词原形。',[
      ['讨论时间不够的问题，提出：一种选择是把任务拆开。','One option would be to split the task.','拆分任务：split the task'],
      ['场地不够，提出：一种选择是线上开会。','One option would be to meet online.','线上开会：meet online'],
      ['客户赶时间，提出：一种选择是先发出初稿。','One option would be to send the draft first.','先发出初稿：send the draft first'],
      ['预算有限，提出：一种选择是缩小范围。','One option would be to reduce the scope.','缩小范围：reduce the scope'],
      ['人员不足，提出：一种选择是再请一位同事加入。','One option would be to bring in another colleague.','请另一位同事加入：bring in another colleague',['One option would be to add another colleague.']],
      ['想降低风险，提出：一种选择是先作一次小规模测试。','One option would be to run a small test first.','作小规模测试：run a small test'],
      ['客户难决定，提出：一种选择是先试用服务。','One option would be to try the service first.','先试用服务：try the service first'],
      ['日期冲突，提出：一种选择是把会议移到周五。','One option would be to move the meeting to Friday.','把会议移到周五：move the meeting to Friday'],
      ['价格超出预算，提出：一种选择是换一种材料。','One option would be to use a different material.','换一种材料：use a different material'],
      ['问题还不明确，提出：一种选择是安排一次通话。','One option would be to arrange a call.','安排通话：arrange a call']
    ]),
    make('w-address','承诺调查问题并说明后续动作',"We'll look into … and…",'I’ll / We’ll look into + 问题 + and + 后续动作',
      '收到问题或投诉后，表示会查明情况，并说清接下来如何反馈或处理。look into 指调查了解。',
      '先承诺调查，不能等同于已经解决；后续动作应是自己能做到的事，不随口保证结果。',
      'look into 后直接放问题；and 后接并列的动词原形，共用 will。',[
      ['收到问题，回应：我们会调查这个问题并及时告知你进展。',"We'll look into this issue and keep you updated.",'调查问题：look into this issue\n告知进展：keep you updated'],
      ['收到投诉，回应：我会调查这次延误并回复你。',"I'll look into the delay and get back to you.",'这次延误：the delay\n回复你：get back to you'],
      ['发现差错，回应：我们会调查这个错误并分享结果。',"We'll look into the error and share the findings.",'这个错误：the error\n调查结果：the findings'],
      ['客户来信，回应：我会调查你的投诉并联系团队。',"I'll look into your complaint and contact the team.",'你的投诉：your complaint'],
      ['信息不一致，回应：我们会调查这些数字并说明情况。',"We'll look into the figures and explain the situation.",'这些数字：the figures\n说明情况：explain the situation'],
      ['客户没收到订单，回应：我们会调查这份订单并给你最新消息。',"We'll look into this order and send you an update.",'给你最新消息：send you an update'],
      ['收到反馈，回应：我会调查这个问题并与你讨论。',"I'll look into the problem and discuss it with you.",'与你讨论它：discuss it with you'],
      ['数据有差异，回应：我们会调查这个差异并核对记录。',"We'll look into the difference and check the records.",'这个差异：the difference\n核对记录：check the records'],
      ['有人反映流程问题，回应：我会调查这个流程并收集反馈。',"I'll look into the process and collect feedback.",'收集反馈：collect feedback'],
      ['客户反映设备问题，回应：我们会调查这个故障并解释下一步。',"We'll look into the fault and explain the next steps.",'这个故障：the fault\n下一步：the next steps']
    ]),
    make('w-expect','告知对方最晚可以收到什么','You can expect … by…','You can expect + 将收到的东西 / 结果 + by + 最晚时间',
      '已有可靠交付安排时，让对方知道最晚何时可以期待收到文件、回复或货物。',
      '比单纯提出选项更像交付预期，不应随意承诺。by 是不晚于，不表示一定正好该时刻送达。',
      'expect 后先放收到的内容，再用 by 引出最晚时间。',[
      ['已确认交付安排，告知：你最晚周五可以收到报告。','You can expect the report by Friday.','报告：the report\n最晚周五：by Friday'],
      ['已安排回复，告知：你最晚明天可以收到答复。','You can expect a reply by tomorrow.','一份答复：a reply'],
      ['已排定任务，告知：你最晚中午可以收到更新。','You can expect an update by noon.','一则更新：an update'],
      ['已确认安排，告知：你最晚周一可以收到报价。','You can expect the quote by Monday.','报价：the quote'],
      ['已确认运输安排，告知：你最晚周四可以收到包裹。','You can expect the package by Thursday.','包裹：the package'],
      ['已安排审阅，告知：你最晚明天下午可以收到反馈。','You can expect feedback by tomorrow afternoon.','反馈：feedback（不可数）'],
      ['已确定工作安排，告知：你最晚下周可以收到初稿。','You can expect the first draft by next week.','初稿：the first draft'],
      ['已确认发送时间，告知：你最晚今天结束前可以收到确认邮件。','You can expect the confirmation email by the end of the day.','确认邮件：the confirmation email'],
      ['已排定发送时间，告知：你最晚周二可以收到日程表。','You can expect the schedule by Tuesday.','日程表：the schedule'],
      ['已安排评审，告知：你最晚本周结束前可以收到结果。','You can expect the results by the end of the week.','结果：the results\n本周结束：the end of the week']
    ]),
    make('w-experience','说明自己或他人在哪方面有经验','…have / has experience in…','主语 + have / has experience in + 领域 / 动词-ing',
      '在面试或工作介绍中，说明自己在哪个领域或哪种工作上有经验。experience 表示经验时是不可数名词。',
      'experience in… 概括经验领域；要介绍一次具体经历，可继续说明当时做了什么。',
      '经验用 experience，不加 a 或复数；in 后写领域，动作用 -ing。',[
      ['面试自述：我有客户服务方面的经验。','I have experience in customer service.','客户服务：customer service'],
      ['介绍同事：她有组织活动的经验。','She has experience in organizing events.','组织活动：organize events\n-ing：organizing',['She has experience in organising events.']],
      ['介绍团队：我们有员工培训方面的经验。','We have experience in staff training.','员工培训：staff training'],
      ['介绍能力：我有管理小团队的经验。','I have experience in managing small teams.','管理小团队：manage small teams'],
      ['介绍同事：他有销售方面的经验。','He has experience in sales.','销售：sales\nhe 后：has'],
      ['求职自述：我有撰写报告的经验。','I have experience in writing reports.','写报告：write reports\n-ing：writing'],
      ['介绍团队：我们有处理订单的经验。','We have experience in processing orders.','处理订单：process orders'],
      ['介绍同事：她有数据录入方面的经验。','She has experience in data entry.','数据录入：data entry'],
      ['面试自述：我有与供应商合作的经验。','I have experience in working with suppliers.','与供应商合作：work with suppliers'],
      ['介绍同事：他们有项目协调方面的经验。','They have experience in project coordination.','项目协调：project coordination']
    ]),
    make('w-previous','讲述上一份工作中做过什么','In my previous role, I…','In my previous role, I + 过去式…',
      '介绍上一份工作的职责或成果，用具体动作说明当时做过什么。前一岗位已结束，动作通常用一般过去时。',
      'previous role 指前一岗位；与概括经验领域不同，这句话要接具体做过的事。',
      'previous role 是前一岗位；后面的动作使用一般过去时。',[
      ['面试自述：在上一份工作中，我管理一个小团队。','In my previous role, I managed a small team.','管理：manage → managed\n小团队：a small team'],
      ['面试自述：在上一份工作中，我处理客户咨询。','In my previous role, I handled customer enquiries.','处理：handle → handled\n客户咨询：customer enquiries',['In my previous role, I handled customer inquiries.']],
      ['面试自述：在上一份工作中，我准备每周报告。','In my previous role, I prepared weekly reports.','准备：prepare → prepared'],
      ['面试自述：在上一份工作中，我培训新员工。','In my previous role, I trained new staff.','培训：train → trained'],
      ['面试自述：在上一份工作中，我与供应商合作。','In my previous role, I worked with suppliers.','合作：work with\n过去式：worked'],
      ['求职介绍：在上一份工作中，我组织团队活动。','In my previous role, I organized team events.','组织：organize → organized',['In my previous role, I organised team events.']],
      ['求职介绍：在上一份工作中，我更新公司网站。','In my previous role, I updated the company website.','更新：update → updated'],
      ['求职介绍：在上一份工作中，我协调送货安排。','In my previous role, I coordinated deliveries.','协调：coordinate → coordinated\n送货：deliveries'],
      ['面试自述：在上一份工作中，我撰写培训材料。','In my previous role, I wrote training materials.','写：write → wrote\n培训材料：training materials'],
      ['面试自述：在上一份工作中，我建立了一个新的流程。','In my previous role, I created a new process.','建立：create → created\n新流程：a new process']
    ]),
    make('w-example','用具体事例支撑刚说的能力','One example of this is…','One example of this is + 具体事例的名词短语',
      '先说某项能力或做法，再引出能说明它的具体事例。this 指刚才提到的内容。',
      '例子要能说明前面的观点；若没有可回指的内容，先把观点说清楚，再用 of this 衔接。',
      'one example 是单数，用 is；of this 回指前面的能力。',[
      ['刚说善于带团队，举例：一个例子是我去年带领的项目。','One example of this is the project I led last year.','我去年带领的项目：the project I led last year\nlead 过去式：led'],
      ['刚说善于培训，举例：一个例子是我制作的培训指南。','One example of this is the training guide I created.','培训指南：the training guide\n我制作的：I created'],
      ['刚说善于改进流程，举例：一个例子是我引入的新流程。','One example of this is the new process I introduced.','我引入的新流程：the new process I introduced'],
      ['刚说组织能力强，举例：一个例子是我组织的团队活动。','One example of this is the team event I organized.','团队活动：the team event\n组织：organized',['One example of this is the team event I organised.']],
      ['刚说写作清楚，举例：一个例子是我上个月写的报告。','One example of this is the report I wrote last month.','上个月写的报告：the report I wrote last month'],
      ['刚说善于解决问题，举例：一个例子是我解决的那次送货问题。','One example of this is the delivery problem I resolved.','送货问题：the delivery problem\n解决：resolved'],
      ['刚说善于做演示，举例：一个例子是我周一作的演示。','One example of this is the presentation I gave on Monday.','作演示：give a presentation\n过去式：gave'],
      ['刚说能改善工作安排，举例：一个例子是我制定的日程表。','One example of this is the schedule I developed.','我制定的日程表：the schedule I developed'],
      ['刚说能帮助同事学习，举例：一个例子是我编写的说明。','One example of this is the set of instructions I wrote.','一套说明：the set of instructions\n我写的：I wrote'],
      ['刚说善于合作，举例：一个例子是我参与的团队项目。','One example of this is the team project I worked on.','团队项目：the team project\n我参与的：I worked on']
    ]),
    make('w-strength','明确说出自己的一项优势','One of my strengths is…','One of my strengths is + 优势名词 / 动词-ing',
      '在面试或发展谈话中，明确说出自己的一项优势，再用相关事例说明。',
      'is 后可接优势名词，如 teamwork，也可接动词-ing，如 staying calm under pressure。',
      'one of 后用复数 strengths，但整个主语是 one，用 is。',[
      ['面试自述：我的一项优势是解决问题。','One of my strengths is problem-solving.','解决问题的能力：problem-solving'],
      ['面试自述：我的一项优势是在压力下保持冷静。','One of my strengths is staying calm under pressure.','保持冷静：stay calm\n在压力下：under pressure'],
      ['介绍优势：我的一项优势是注重细节。','One of my strengths is attention to detail.','注重细节：attention to detail'],
      ['介绍优势：我的一项优势是清楚地解释想法。','One of my strengths is explaining ideas clearly.','清楚地解释：explain clearly'],
      ['面试自述：我的一项优势是团队合作。','One of my strengths is teamwork.','团队合作：teamwork'],
      ['发展谈话：我的一项优势是安排工作。','One of my strengths is organizing work.','安排工作：organize work',['One of my strengths is organising work.']],
      ['面试自述：我的一项优势是快速学习。','One of my strengths is learning quickly.','快速学习：learn quickly'],
      ['面试自述：我的一项优势是认真倾听。','One of my strengths is listening carefully.','认真倾听：listen carefully'],
      ['介绍优势：我的一项优势是适应变化。','One of my strengths is adapting to change.','适应变化：adapt to change'],
      ['介绍优势：我的一项优势是建立关系。','One of my strengths is building relationships.','建立关系：build relationships']
    ]),
    make('w-interest','具体说明岗位或机会吸引自己的地方','What interests me about … is…','What interests me about + 岗位 / 机会 + is + 吸引点',
      '说明岗位、团队或项目具体吸引自己的地方。what 开头的部分把注意力引向后面的吸引点。',
      '这是陈述句，不作问句倒装。what 开头的部分整体作主语，用 interests；is 后说明具体吸引点。',
      '保留 What interests me about；后面用 is 引出真正的吸引点。',[
      ['面试回答：这个岗位吸引我的是学习的机会。','What interests me about this role is the chance to learn.','这个岗位：this role\n学习机会：the chance to learn'],
      ['面试回答：这个团队吸引我的是合作方式。','What interests me about this team is the way people work together.','大家合作的方式：the way people work together'],
      ['求职沟通：这个项目吸引我的是解决实际问题的机会。','What interests me about this project is the chance to solve real problems.','解决实际问题：solve real problems'],
      ['面试回答：这个岗位吸引我的是工作内容的多样性。','What interests me about this role is the variety of tasks.','工作内容的多样性：the variety of tasks'],
      ['求职沟通：这家公司吸引我的是它对质量的重视。','What interests me about this company is its focus on quality.','对质量的重视：its focus on quality'],
      ['面试回答：这个岗位吸引我的是客户接触。','What interests me about this role is the customer contact.','客户接触：the customer contact'],
      ['讨论工作机会：这个机会吸引我的是成长空间。','What interests me about this opportunity is the room for growth.','成长空间：the room for growth'],
      ['面试回答：这个项目吸引我的是国际团队。','What interests me about this project is the international team.','国际团队：the international team'],
      ['求职沟通：这个岗位吸引我的是改进流程的机会。','What interests me about this role is the chance to improve processes.','改进流程：improve processes'],
      ['面试回答：这个团队吸引我的是它对反馈的重视。','What interests me about this team is its focus on feedback.','对反馈的重视：its focus on feedback']
    ]),
    make('w-improve','说明自己正在努力提升什么',"I'm working on improving…",'I’m / We’re working on improving + 待提升方面',
      '在面试或发展谈话中，说明自己正在持续改进的能力或工作方式。',
      '这里不是说已经掌握，而是说明正在努力。work on 后用 -ing；具体做法可以另外补充。',
      '写 working on improving，不写 working on improve；improve 后接提升对象。',[
      ['发展谈话：我正在努力提高我的演示技巧。',"I'm working on improving my presentation skills.",'演示技巧：presentation skills'],
      ['自我介绍：我正在努力改进我的时间管理。',"I'm working on improving my time management.",'时间管理：time management'],
      ['团队汇报：我们正在努力改进沟通。',"We're working on improving our communication.",'我们的沟通：our communication'],
      ['面试回答：我正在努力提高我的写作技巧。',"I'm working on improving my writing skills.",'写作技巧：writing skills'],
      ['发展谈话：我正在努力提高我的英语发音。',"I'm working on improving my English pronunciation.",'英语发音：English pronunciation'],
      ['发展谈话：我正在努力提高我的倾听技巧。',"I'm working on improving my listening skills.",'倾听技巧：listening skills'],
      ['团队讨论：我们正在努力改进计划流程。',"We're working on improving our planning process.",'计划流程：planning process'],
      ['面试回答：我正在努力提高我的谈判技巧。',"I'm working on improving my negotiation skills.",'谈判技巧：negotiation skills'],
      ['发展谈话：我正在努力提高我的打字速度。',"I'm working on improving my typing speed.",'打字速度：typing speed'],
      ['团队汇报：我们正在努力改善客户体验。',"We're working on improving the customer experience.",'客户体验：the customer experience']
    ]),
    make('w-feedback','礼貌征求对具体工作的反馈',"I'd appreciate your feedback on…",'I’d appreciate your feedback on + 工作 / 表现 / 材料',
      '向熟悉情况的人说明，希望听到对某项工作的评价和改进意见。appreciate 表达感谢对方愿意投入时间。',
      '这里请求具体反馈，不是说已经收到反馈；feedback 是不可数名词，不加 a 或复数 s。',
      'appreciate 后直接接 your feedback；on 后明确希望评价什么。',[
      ['交出初稿后请求：希望你能对我的初稿给些反馈。',"I'd appreciate your feedback on my draft.",'我的初稿：my draft'],
      ['完成演示后请求：希望你能对我的演示给些反馈。',"I'd appreciate your feedback on my presentation.",'我的演示：my presentation'],
      ['讨论方案时请求：希望你能对这个提案给些反馈。',"I'd appreciate your feedback on this proposal.",'这个提案：this proposal'],
      ['发展谈话中请求：希望你能对我的进展给些反馈。',"I'd appreciate your feedback on my progress.",'我的进展：my progress'],
      ['准备培训时请求：希望你能对这些培训材料给些反馈。',"I'd appreciate your feedback on these training materials.",'这些培训材料：these training materials'],
      ['做完任务后请求：希望你能对我的工作给些反馈。',"I'd appreciate your feedback on my work.",'我的工作：my work'],
      ['试行新办法后请求：希望你能对这个新流程给些反馈。',"I'd appreciate your feedback on the new process.",'新流程：the new process'],
      ['准备面试时请求：希望你能对我的简历给些反馈。',"I'd appreciate your feedback on my CV.",'我的简历：my CV / my resume',["I'd appreciate your feedback on my resume."]],
      ['完成设计后请求：希望你能对这个版式给些反馈。',"I'd appreciate your feedback on this layout.",'这个版式：this layout'],
      ['写好说明后请求：希望你能对这些说明给些反馈。',"I'd appreciate your feedback on these instructions.",'这些说明：these instructions']
    ]),
    make('w-goal','说明自己或团队想达到的成长目标','My / Our goal is to…','My / Our goal is to + 动词原形…',
      '明确自己或团队想达到的结果，适合发展谈话、职业规划或团队讨论。',
      '说的是希望达到的结果，不是已经取得的成果；若要说明当前的改进过程，可用 be working on…。',
      'goal 在本句中是单数；is 后用 to + 动词原形。',[
      ['发展谈话：我的目标是成为团队负责人。','My goal is to become a team leader.','成为团队负责人：become a team leader'],
      ['团队规划：我们的目标是改善客户支持。','Our goal is to improve customer support.','改善客户支持：improve customer support'],
      ['个人规划：我的目标是更有信心地沟通。','My goal is to communicate more confidently.','更有信心地沟通：communicate more confidently'],
      ['发展谈话：我的目标是独立管理一个项目。','My goal is to manage a project independently.','独立地：independently'],
      ['团队规划：我们的目标是缩短回复时间。','Our goal is to reduce response times.','缩短回复时间：reduce response times'],
      ['个人规划：我的目标是培养新技能。','My goal is to develop new skills.','培养新技能：develop new skills'],
      ['发展谈话：我的目标是承担更多责任。','My goal is to take on more responsibility.','承担更多责任：take on more responsibility'],
      ['团队规划：我们的目标是分享更多知识。','Our goal is to share more knowledge.','分享更多知识：share more knowledge'],
      ['个人规划：我的目标是把想法解释得更清楚。','My goal is to explain ideas more clearly.','把想法解释得更清楚：explain ideas more clearly'],
      ['团队规划：我们的目标是提高工作质量。','Our goal is to improve the quality of our work.','我们工作的质量：the quality of our work']
    ]),
  ];
})();

// Audited target-preserving alternatives.
((units)=>{
 const alternatives={
  "w-scope": {},
  "w-example": {},
  "w-experience": {}
};
 for(const u of units){
  if(!alternatives[u.id])continue;
  const qs=[u.entry,...u.learning,...u.review], byQuestion=alternatives[u.id];
  for(const q of qs){const added=byQuestion[q.id]||(q.id==='entry'?byQuestion.l1:null);if(added)q.answers=[...new Set([...q.answers,...added])];}
  if(u.id==='w-scope')for(const q of qs)q.answers=[...new Set(q.answers.flatMap(a=>[a,a.replace('falls outside ','falls outside of ')]))];
  if(u.id==='w-example')for(const q of qs)q.answers=[...new Set(q.answers.flatMap(a=>[a,(/\bthat I\b/.test(a)?a:a.replace(/ I (led|created|introduced|organized|organised|wrote|resolved|gave|developed|worked)\b/,' that I $1'))]))];
  if(u.id==='w-experience')for(const q of qs)q.answers=[...new Set(q.answers.flatMap(a=>[a,a.replace(/experience in (customer service|staff training|sales|data entry|project coordination)([.])/,'experience with $1$2'),a.replace(/experience in ((?:organizing|organising|managing|writing|processing|working) )/,'experience $1')]))];
 }
})(window.JUJIAN_WORK_3);
