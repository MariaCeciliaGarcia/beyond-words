'use strict';
window.JUJIAN_WORK_1 = (() => {
  // Contract auxiliary have only; lexical have/to is not a general 've form.
  const mayShorten = (text, full) => {
    if(!/ have$/.test(full))return true;
    const match=new RegExp('\\b'+full+'\\s+(.+)').exec(text);
    return !!match && /^(?:(?:already|just|not|never)\s+)*(?:attached|booked|bought|changed|checked|committed|completed|contacted|decided|double-checked|finished|followed|found|got|gotten|had|heard|left|made|narrowed|opened|put|read|received|resolved|ruled|run|sent|taken|tested|worked|written)\b/.test(match[1]);
  };

  const pairs = [["I'm",'I am'],["We're",'We are'],["They're",'They are'],["She's",'She is'],["He's",'He is'],["I'll",'I will'],["We'll",'We will'],["I've",'I have'],["We've",'We have'],["I'd",'I would'],["can't",'cannot'],["it's",'it is'],["you're",'you are'],["we're",'we are'],["I'll",'I will'],["Who's",'Who is']];
  const forms = answers => { const out = new Set(answers); for (const [a,b] of pairs) for (const s of [...out]) { if(new RegExp('\\b'+a+'\\b').test(s)) out.add(s.replace(new RegExp('\\b'+a+'\\b','g'),b)); if(mayShorten(s,b) && new RegExp('\\b'+b+'\\b').test(s)) out.add(s.replace(new RegExp('\\b'+b+'\\b','g'),a)); } return [...out]; };
  const make = (id,meaning,expression,formula,explanation,boundary,checkpoint,rows) => {
    const qs = rows.map(([zh,en,hint,variants=[]],i)=>({id:(i<5?'l':'r')+(i%5+1),zh,answers:forms([en,...variants]),hint}));
    return {id,collection:'work1',meaning,expression,formula,explanation,boundary,checkpoint,examples:qs.slice(0,2).map(q=>({en:q.answers[0],zh:q.zh})),entry:{...qs[0],id:'entry'},learning:qs.slice(0,5),review:qs.slice(5)};
  };
  return [
    make('w-responsible','说明自己或同事负责什么','…am / is / are responsible for…','主语 + be responsible for + 职责 / 动词-ing',
      '介绍日常分工或明确某项任务由谁负责。for 后可以接工作事项，也可以接动作的 -ing 形式。',
      '这里说职责，不是主动承诺马上代办。也不把 responsible for 一律理解成出了问题应受责备。',
      '按主语选择 am / is / are；responsible 后保留 for，动作改用 -ing。',[
      ['向新同事介绍职责：我负责客户支持。',"I'm responsible for customer support.",'客户支持：customer support'],
      ['介绍她的分工：她负责安排会议。',"She's responsible for scheduling meetings.",'安排会议：schedule meetings\n-ing：scheduling'],
      ['介绍团队职责：我们负责培训新员工。',"We're responsible for training new staff.",'培训新员工：train new staff'],
      ['说明他的职责：他负责每周的报告。',"He's responsible for the weekly report.",'每周的报告：the weekly report'],
      ['说明他们的职责：他们负责检查订单。',"They're responsible for checking orders.",'检查订单：check orders'],
      ['向同事介绍职责：我负责办公室的物品采购。',"I'm responsible for buying office supplies.",'采购办公用品：buy office supplies'],
      ['说明我们的职责：我们负责更新网站。',"We're responsible for updating the website.",'更新网站：update the website\n-ing：updating'],
      ['说明她的职责：她负责活动预算。',"She's responsible for the event budget.",'活动预算：the event budget'],
      ['说明他们的职责：他们负责准备会议室。',"They're responsible for preparing the meeting room.",'准备会议室：prepare the meeting room'],
      ['说明他的职责：他负责联系供应商。',"He's responsible for contacting suppliers.",'联系供应商：contact suppliers']
    ]),
    make('w-take-care','主动接下眼前的一项工作',"I'll take care of…",'I’ll / We’ll take care of + 要处理的事项',
      '同事需要有人处理一件事时，主动表示由自己或己方来办。take care of 在这里指处理、照管某项工作。',
      '这句话是接下任务的承诺，比介绍固定职责更具体。只对自己能承接的事情使用。',
      'take care of 后放事项；不漏掉 of；I’ll 是 I will。',[
      ['会议室还没订，你主动接下：我来负责预订。',"I'll take care of the booking.",'预订这件事：the booking'],
      ['客人快到了，你们主动说：我们来安排午饭。',"We'll take care of lunch.",'午饭安排：lunch'],
      ['同事忙不过来，你接下任务：我来处理这些邮件。',"I'll take care of these emails.",'这些邮件：these emails'],
      ['活动需要物料，你主动说：我来处理打印的事。',"I'll take care of the printing.",'打印这件事：the printing'],
      ['对合作团队说：我们来处理送货安排。',"We'll take care of the delivery arrangements.",'送货安排：the delivery arrangements'],
      ['大家讨论谁来办，你主动说：我来处理这份订单。',"I'll take care of this order.",'这份订单：this order'],
      ['会议后你主动说：我来整理会议记录。',"I'll take care of the meeting notes.",'会议记录：the meeting notes'],
      ['有人需要准备，你们说：我们来准备设备。',"We'll take care of the equipment.",'设备：the equipment'],
      ['同事需要帮忙，你说：我来处理这些更改。',"I'll take care of these changes.",'这些更改：these changes'],
      ['大家分配任务，你说：我来办登记的事。',"I'll take care of the registration.",'登记手续：the registration']
    ]),
    make('w-who-handle','询问当前由谁经手某项工作',"Who's handling…?",'Who is handling + 当前的工作事项？',
      '问目前是谁在接手、处理某件事。现在进行时把重点放在当前安排，不是询问长期岗位名称。',
      '问的是当前经手人，不是请听者立即接任务。who 作主语，直接接 is handling，不加 does。',
      'Who’s 是 Who is；handling 是 handle 去掉 e 再加 -ing。',[
      ['不清楚当前分工，问：谁在处理这份订单？',"Who's handling this order?",'处理：handle → handling\n这份订单：this order'],
      ['问目前分工：谁在负责预订？',"Who's handling the booking?",'预订：the booking'],
      ['准备找经手人：谁在处理客户的问题？',"Who's handling the client's question?",'客户的问题：the client’s question'],
      ['准备活动，问：谁在负责登记？',"Who's handling registration?",'登记工作：registration'],
      ['核对当前分工：谁在处理送货的事？',"Who's handling the delivery?",'送货：the delivery'],
      ['邮件需要回复，问：谁在处理这封邮件？',"Who's handling this email?",'这封邮件：this email'],
      ['找当前经手人：谁在处理这笔付款？',"Who's handling this payment?",'这笔付款：this payment'],
      ['访客明天来，问：谁在安排这次来访？',"Who's handling the visit?",'这次来访：the visit'],
      ['问目前分工：谁在处理这些申请？',"Who's handling these applications?",'这些申请：these applications'],
      ['需要找到经手人：谁在处理这次投诉？',"Who's handling this complaint?",'这次投诉：this complaint']
    ]),
    make('w-help-with','委婉说明自己需要协助','I could use some help with…','I / We could use some help with + 事项 / 动词-ing',
      '向同事表示有些工作需要帮忙。could use 在这里是“很需要、用得上”，不是说过去能使用什么。',
      '说明需要协助，仍留给对方安排空间；不等于已经把整项任务交给对方。',
      '保留 some help with；with 后是事项，若写动作则用 -ing。',[
      ['忙不过来，向同事求助：我需要有人帮忙处理这份报告。','I could use some help with this report.','这份报告：this report'],
      ['你们遇到困难：我们需要有人帮忙安排日程。','We could use some help with scheduling.','日程安排：scheduling'],
      ['请同事协助：我需要有人帮忙核对这些数字。','I could use some help with checking these numbers.','核对这些数字：check these numbers'],
      ['活动临近，你说：我需要有人帮忙准备会议室。','I could use some help with setting up the meeting room.','布置会议室：set up the meeting room'],
      ['你们人手不足：我们需要有人帮忙处理这些订单。','We could use some help with these orders.','这些订单：these orders'],
      ['向同事求助：我需要有人帮忙检查这份清单。','I could use some help with checking this list.','检查这份清单：check this list'],
      ['资料太多：我们需要有人帮忙整理这些文件。','We could use some help with organizing these files.','整理文件：organize files\n-ing：organizing',['We could use some help with organising these files.']],
      ['准备发言，求助：我需要有人帮忙准备这次演示。','I could use some help with this presentation.','这次演示：this presentation'],
      ['软件操作不熟：我需要有人帮忙使用这个系统。','I could use some help with using this system.','使用系统：use this system\n-ing：using'],
      ['活动结束后求助：我们需要有人帮忙收拾。','We could use some help with cleaning up.','收拾：clean up']
    ]),
    make('w-let-know','请同事在某种情况出现时告知','Let me know if…','Let me / us know if + 主语 + 谓语',
      '告诉同事：如果出现某种需要、变化或问题，请通知自己或团队。这里的 if 引出条件。',
      '不是问“是否知道”。如果要确认一个已约定的事实，可用确认问句；这里是在建立后续沟通。',
      'let 后用 me / us，know 不加 to；if 条件句按实际主语写。',[
      ['给同事留话：如果你需要帮助，请告诉我。','Let me know if you need help.','需要帮助：need help'],
      ['交接前说：如果有什么变化，请告诉我们。','Let us know if anything changes.','有变化：anything changes'],
      ['安排会议时说：如果周五不方便，请告诉我。',"Let me know if Friday doesn't work for you.",'周五不方便：Friday doesn’t work for you',['Let me know if Friday does not work for you.']],
      ['发资料后说：如果你有任何问题，请告诉我。','Let me know if you have any questions.','有任何问题：have any questions'],
      ['安排任务时说：如果他们需要更多时间，请告诉我们。','Let us know if they need more time.','他们需要更多时间：they need more time'],
      ['准备发货前说：如果地址有变化，请告诉我。','Let me know if the address changes.','地址改变：the address changes'],
      ['协作时说：如果你遇到任何问题，请告诉我们。','Let us know if you run into any problems.','遇到问题：run into problems'],
      ['给同事留话：如果她想参加会议，请告诉我。','Let me know if she wants to join the meeting.','她想加入：she wants to join'],
      ['提交初稿后说：如果你想要任何修改，请告诉我。',"Let me know if you'd like any changes.",'想要修改：would like any changes',['Let me know if you would like any changes.']],
      ['出发前说：如果你会迟到，请告诉我们。',"Let us know if you're going to be late.",'会迟到：be going to be late']
    ]),
    make('w-make-sure','提醒核实或确保一件事','Please make sure…','Please make sure + 主语 + 谓语',
      '工作交付或操作前，请对方检查重要事项确实成立。后面接完整内容；可加 that 连接。',
      '比一般建议更像明确要求，语气要配合关系。不要把它当成表达自己不确定的说法。',
      'sure 后保留完整主语和谓语；that 可以省略。',[
      ['发邮件前提醒：请确认附件已经附上。','Please make sure the file is attached.','文件已附上：the file is attached',['Please make sure that the file is attached.']],
      ['提交前提醒：请确保数字是正确的。','Please make sure the numbers are correct.','数字正确：the numbers are correct',['Please make sure that the numbers are correct.']],
      ['迎接访客前提醒：请确保会议室准备好了。','Please make sure the meeting room is ready.','会议室准备好：the meeting room is ready',['Please make sure that the meeting room is ready.']],
      ['邀请团队前提醒：请确认每个人都有链接。','Please make sure everyone has the link.','每个人有：everyone has',['Please make sure that everyone has the link.']],
      ['分享前提醒：请确认你使用的是最新版本。',"Please make sure you're using the latest version.",'正在使用：be using\n最新版本：the latest version',['Please make sure that you are using the latest version.']],
      ['填写订单时提醒：请确认地址正确。','Please make sure the address is correct.','地址正确：the address is correct',['Please make sure that the address is correct.']],
      ['出差前提醒：请确认她有日程表。','Please make sure she has the schedule.','她有：she has\n日程表：the schedule',['Please make sure that she has the schedule.']],
      ['提交前提醒：请确保所有问题都有回答。','Please make sure all the questions are answered.','问题得到回答：the questions are answered',['Please make sure that all the questions are answered.']],
      ['开会前提醒：请确认麦克风已打开。','Please make sure the microphone is on.','麦克风已打开：the microphone is on',['Please make sure that the microphone is on.']],
      ['交接时提醒：请确保这些文件已保存。','Please make sure these files are saved.','文件已保存：the files are saved',['Please make sure that these files are saved.']]
    ]),
    make('w-hand-over','说明工作或资料将交接给谁',"I'll hand … over to…",'I’ll hand + 工作 / 资料 + over to + 接手人',
      '把正在处理的工作、责任或资料交给另一位同事继续处理。hand 后放交接内容，over to 后放接手人。',
      '强调交接，不只是发一份副本；交接内容和接手人都应明确。代词 it / them 放在 hand 与 over 之间。',
      '保留 over to；用 it / them 代替工作或资料时写 hand it / them over。',[
      ['交接安排：我会把这个项目交接给她。',"I'll hand this project over to her.",'这个项目：this project\n交给她：over to her'],
      ['说明安排：我会把这些文件交给你。',"I'll hand these files over to you.",'这些文件：these files'],
      ['说明后续负责人：我会把这个账户交接给马克。',"I'll hand this account over to Mark.",'这个账户：this account\n马克：Mark'],
      ['说明交接：我们会把日常工作交接给新团队。',"We'll hand the daily work over to the new team.",'日常工作：the daily work\n新团队：the new team'],
      ['刚谈过一项任务，说明：我会把它交接给他。',"I'll hand it over to him.",'它：it\n交给他：over to him'],
      ['交接安排：我会把这项任务交接给安娜。',"I'll hand this task over to Anna.",'这项任务：this task\n安娜：Anna'],
      ['说明安排：我们会把这些订单交接给销售团队。',"We'll hand these orders over to the sales team.",'这些订单：these orders\n销售团队：the sales team'],
      ['说明交接：我会把会议记录交给你。',"I'll hand the meeting notes over to you.",'会议记录：the meeting notes'],
      ['刚谈过一批文件，说明：我会把它们交给她。',"I'll hand them over to her.",'它们：them\n交给她：over to her'],
      ['说明离职前安排：我会把我的职责交接给同事。',"I'll hand my responsibilities over to my colleague.",'我的职责：my responsibilities\n我的同事：my colleague']
    ]),
    make('w-cover','请同事在自己暂离时顶班','Could you cover … while…?','Could you cover + 工作 + while…?；Could you cover for + 人 + while…?',
      '因为自己要开会、吃饭或休假，请同事在那段时间代为照看工作。cover 在这里是暂时顶替。',
      '不是让对方永久接手，也不是表示支付费用。while 后说明同一时段的情况，通常不用将来式。',
      'Could you 后用 cover 原形；while 后写完整句子。',[
      ['你要去吃午饭，请同事顶一下：我吃午饭时，你能替我看一下前台吗？',"Could you cover reception while I'm at lunch?",'照看前台：cover reception\n在吃午饭：be at lunch'],
      ['你要开会，请同事顶一下：我开会时，你能替我一下吗？',"Could you cover for me while I'm in a meeting?",'替我顶一下：cover for me\n在开会：be in a meeting'],
      ['你要接电话，请求：我接电话时，你能替我看一下服务台吗？',"Could you cover the desk while I take this call?",'服务台：the desk\n接这个电话：take this call'],
      ['你要外出，请求：我不在时，你能替我照看商店吗？',"Could you cover the shop while I'm away?",'照看商店：cover the shop\n不在：be away'],
      ['你要休假，请求：我休假时，你能代替我履行工作职责吗？',"Could you cover my duties while I'm on leave?",'我的工作职责：my duties\n休假：be on leave'],
      ['你要去培训，请求：我参加培训时，你能替我照看前台吗？',"Could you cover reception while I'm at training?",'参加培训：be at training'],
      ['你要短暂离开，请求：我出去时，你能替我一下吗？',"Could you cover for me while I step out?",'出去一下：step out\n替我：cover for me'],
      ['你要给访客带路，请求：我带访客参观时，你能替我看一下服务台吗？',"Could you cover the desk while I show the visitors around?",'带访客参观：show the visitors around'],
      ['你们要开短会，请求：我们开会时，你能替我们看一下前台吗？',"Could you cover reception while we're in a meeting?",'我们在开会：we are in a meeting'],
      ['你要休息，请求：我休息时，你能替我一下吗？',"Could you cover for me while I take a break?",'休息一下：take a break']
    ]),
    make('w-reaching','说明主动联系对方的事项',"I'm reaching out about…",'I’m / We’re reaching out about + 联系的事项',
      '在工作邮件、消息或初次联系中交代为何联系。reach out 在这里是主动与人沟通，不是伸手。',
      '这里开启联系；如果是在追踪已有沟通或未答复事项，可用 following up on。不要每次普通对话都套这个开场。',
      'be reaching out 后保留 about，再放具体事项。',[
      ['写工作邮件，交代联系事项：我联系你是想谈谈周五的会议。',"I'm reaching out about Friday's meeting.",'周五的会议：Friday’s meeting'],
      ['给合作方发消息：我们联系你是想谈谈这次培训。',"We're reaching out about the training session.",'这次培训：the training session'],
      ['首次联系供应商：我联系你是想谈谈我们的订单。',"I'm reaching out about our order.",'我们的订单：our order'],
      ['联系同事询问信息：我联系你是想谈谈新的日程。',"I'm reaching out about the new schedule.",'新的日程：the new schedule'],
      ['联系合作团队：我们联系你是想谈谈这次活动。',"We're reaching out about the event.",'这次活动：the event'],
      ['给同事发消息：我联系你是想谈谈项目的更新。',"I'm reaching out about the project update.",'项目的更新：the project update'],
      ['写工作邮件：我联系你是想谈谈你的申请。',"I'm reaching out about your application.",'你的申请：your application'],
      ['联系场地方：我们联系你是想谈谈会议室预订。',"We're reaching out about the meeting room booking.",'会议室预订：the meeting room booking'],
      ['联系同事：我联系你是想谈谈下周的来访。',"I'm reaching out about next week's visit.",'下周的来访：next week’s visit'],
      ['联系客户：我联系你是想谈谈你的反馈。',"I'm reaching out about your feedback.",'你的反馈：your feedback']
    ]),
    make('w-following','跟进已沟通过的事情',"I'm following up on…",'I’m / We’re following up on + 之前的事项',
      '对之前的请求、邮件、谈话或安排再次联系，询问进展或接着处理。on 后点明之前沟通的事项。',
      '不是第一次提出一个全新话题。follow up on 不等于催促，具体语气取决于后续内容。',
      '保留 following up on；on 后明确之前的事项。',[
      ['上周发过请求，今天跟进：我想跟进一下上周的请求。',"I'm following up on last week's request.",'上周的请求：last week’s request'],
      ['昨天发过邮件，今天跟进：我想跟进一下昨天的邮件。',"I'm following up on yesterday's email.",'昨天的邮件：yesterday’s email'],
      ['此前谈过送货安排：我们想跟进一下送货安排。',"We're following up on the delivery arrangements.",'送货安排：the delivery arrangements'],
      ['已提交订单，联系对方：我想跟进一下我们的订单。',"I'm following up on our order.",'我们的订单：our order'],
      ['此前讨论过提案，今天说：我想跟进一下这份提案。',"I'm following up on the proposal.",'这份提案：the proposal'],
      ['昨天谈过一个问题，今天说：我想跟进一下我们的谈话。',"I'm following up on our conversation.",'我们的谈话：our conversation'],
      ['之前有个待办请求：我们想跟进一下预订请求。',"We're following up on the booking request.",'预订请求：the booking request'],
      ['已收到反馈，今天继续处理：我想跟进一下你的反馈。',"I'm following up on your feedback.",'你的反馈：your feedback'],
      ['申请已发出：我想跟进一下我的申请。',"I'm following up on my application.",'我的申请：my application'],
      ['上次会议留了事项：我们想跟进一下周一的会议。',"We're following up on Monday's meeting.",'周一的会议：Monday’s meeting']
    ]),
    make('w-attached','说明附件及供对方做什么',"I've attached … for…",'I’ve / We’ve attached + 文件 + for + 用途',
      '发送文件后，用现在完成时告诉对方附件已附上，并说明是供参考、审阅或留存。',
      '只在文件确实已附上时使用；是通知已做的动作，不是承诺稍后发送。',
      'have 后用 attached；for 后说明用途，如 your review / reference。',[
      ['文件已附上，写：我已附上报告，供你审阅。',"I've attached the report for your review.",'报告：the report\n供你审阅：for your review'],
      ['发给团队：我们已附上日程表，供你参考。',"We've attached the schedule for your reference.",'日程表：the schedule\n供你参考：for your reference'],
      ['发邮件说明：我已附上笔记，供你参考。',"I've attached the notes for your reference.",'笔记：the notes'],
      ['发给主管：我已附上初稿，供你审阅。',"I've attached the draft for your review.",'初稿：the draft'],
      ['把确认件发给客户：我已附上确认函，供你留存。',"I've attached the confirmation for your records.",'确认函：the confirmation\n供你留存：for your records'],
      ['给同事发文件：我已附上清单，供你参考。',"I've attached the checklist for your reference.",'清单：the checklist'],
      ['发团队邮件：我们已附上提案，供你审阅。',"We've attached the proposal for your review.",'提案：the proposal'],
      ['发给参与者：我已附上议程，供你参考。',"I've attached the agenda for your reference.",'议程：the agenda'],
      ['提交文件：我已附上修改后的版本，供你审阅。',"I've attached the revised version for your review.",'修改后的版本：the revised version'],
      ['发送手续文件：我们已附上签好的表格，供你留存。',"We've attached the signed form for your records.",'签好的表格：the signed form']
    ]),
    make('w-get-back','承诺在某个时间前回复',"I'll get back to you by…",'I’ll / We’ll get back to you by + 最晚回复时间',
      '需要先核实或处理时，告知对方最晚何时会回复。by 表示不晚于该时间，不要求正好那个时刻。',
      '这里承诺回复，不承诺问题一定已解决；不是表示自己会回到某个地点。',
      '保留 get back to you；截止时间前用 by。',[
      ['需要先核实，承诺：我最晚周五回复你。',"I'll get back to you by Friday.",'最晚周五：by Friday'],
      ['团队还在查资料：我们最晚明天下午回复你。',"We'll get back to you by tomorrow afternoon.",'最晚明天下午：by tomorrow afternoon'],
      ['需要问同事：我最晚中午回复你。',"I'll get back to you by noon.",'中午：noon'],
      ['需要核对安排：我最晚今天结束前回复你。',"I'll get back to you by the end of the day.",'今天结束前：by the end of the day',['I will get back to you by the end of today.']],
      ['需要内部确认：我们最晚下周一回复你。',"We'll get back to you by next Monday.",'下周一：next Monday'],
      ['要先检查文件：我最晚下午三点回复你。',"I'll get back to you by three this afternoon.",'下午三点：three this afternoon',['I will get back to you by 3 this afternoon.']],
      ['等内部消息，承诺：我最晚明天上午回复你。',"I'll get back to you by tomorrow morning.",'明天上午：tomorrow morning'],
      ['团队需要讨论：我们最晚本周结束前回复你。',"We'll get back to you by the end of the week.",'本周结束前：by the end of the week'],
      ['要先核实价格：我最晚周二回复你。',"I'll get back to you by Tuesday.",'周二：Tuesday'],
      ['需要协调人员：我们最晚今晚回复你。',"We'll get back to you by tonight.",'最晚今晚：by tonight']
    ]),
    make('w-copy','说明邮件会抄送给谁',"I'll copy … in on…",'I’ll copy + 人 + in on + 邮件 / 通信',
      '发送工作邮件时，把相关同事加入抄送名单，让他们同时收到信息。copy someone in on something 是自然的邮件表达。',
      'copy someone in on… 和 copy someone on… 都可表示邮件抄送；把已收到的邮件转发给别人用 forward。',
      'copy 后先放人；in on 后放邮件或通信。',[
      ['说明发送安排：我会把这封邮件抄送给你。',"I'll copy you in on this email.",'抄送给你：copy you in on\n这封邮件：this email',["I'll copy you on this email."]],
      ['说明安排：我会把回复抄送给她。',"I'll copy her in on the reply.",'她（宾格）：her\n回复：the reply',["I'll copy her on the reply."]],
      ['告诉同事：我会把确认邮件抄送给马克。',"I'll copy Mark in on the confirmation email.",'确认邮件：the confirmation email',["I'll copy Mark on the confirmation email."]],
      ['说明沟通安排：我们会把项目邮件抄送给你。',"We'll copy you in on the project emails.",'项目邮件：the project emails',["We'll copy you on the project emails."]],
      ['写邮件时告诉团队：我会把这封邮件抄送给经理。',"I'll copy the manager in on this message.",'经理：the manager\n这条消息：this message',["I'll copy the manager on this message."]],
      ['告诉同事：我会把那封邮件抄送给他。',"I'll copy him in on that email.",'他（宾格）：him\n那封邮件：that email',["I'll copy him on that email."]],
      ['说明安排：我会把回复抄送给团队。',"I'll copy the team in on the reply.",'团队：the team',["I'll copy the team on the reply."]],
      ['告诉合作方：我们会把确认邮件抄送给他们。',"We'll copy them in on the confirmation email.",'他们（宾格）：them',["We'll copy them on the confirmation email."]],
      ['告诉同事：我会把所有更新邮件抄送给你。',"I'll copy you in on all the update emails.",'所有更新邮件：all the update emails',["I'll copy you on all the update emails."]],
      ['说明安排：我会把这封邮件抄送给安娜。',"I'll copy Anna in on this email.",'安娜：Anna',["I'll copy Anna on this email."]]
    ]),
    make('w-call','商量安排一次有目的的通话','Could we schedule a call to…?','Could we schedule a call to + 动词原形…？',
      '向同事或合作方提议安排一次电话或线上语音沟通，并说明要解决什么事。',
      '这是商量安排通话，不是已经确定时间。to 后表达通话目的，不等于一般邀请参加休闲活动。',
      'schedule a call 后用 to + 动词原形说明目的。',[
      ['想口头核对细节，问：我们能安排一次通话讨论细节吗？','Could we schedule a call to discuss the details?','安排通话：schedule a call\n讨论细节：discuss the details'],
      ['想确认安排，问：我们能安排一次通话核对日程吗？','Could we schedule a call to check the schedule?','核对日程：check the schedule'],
      ['需要协作，问：我们能安排一次通话明确分工吗？','Could we schedule a call to clarify our roles?','明确分工：clarify our roles'],
      ['想讨论后续，问：我们能安排一次通话讨论下一步吗？','Could we schedule a call to discuss the next steps?','下一步：the next steps'],
      ['有问题待解决，问：我们能安排一次通话解决这个问题吗？','Could we schedule a call to resolve this issue?','解决问题：resolve this issue'],
      ['文件复杂，问：我们能安排一次通话一起过一下报告吗？','Could we schedule a call to go through the report?','仔细过一遍：go through\n报告：the report'],
      ['需要了解客户，问：我们能安排一次通话讨论你的需求吗？','Could we schedule a call to discuss your needs?','你的需求：your needs'],
      ['方案有变化，问：我们能安排一次通话讨论这些更改吗？','Could we schedule a call to discuss these changes?','这些更改：these changes'],
      ['想减少往返邮件，问：我们能安排一次通话回答你的问题吗？','Could we schedule a call to answer your questions?','回答你的问题：answer your questions'],
      ['准备交接，问：我们能安排一次通话计划交接吗？','Could we schedule a call to plan the handover?','计划交接：plan the handover']
    ]),
    make('w-audio','说明远程沟通中听不清谁或什么',"I can't hear … clearly",'I / We can’t hear + 人 / 声音 + clearly',
      '通话中说明声音不清楚，让对方知道沟通受阻。hear 是听到，clearly 说明清晰程度。',
      '先说明音频问题，不等于已经请求重复或放慢。也不表示自己没理解对方的意思。',
      'can’t 后用 hear 原形；clearly 通常放在宾语后。',[
      ['线上会议音质不好，说：我听不清你说话。',"I can't hear you clearly.",'听到：hear\n清楚地：clearly'],
      ['团队共用设备，说明：我们听不清她说话。',"We can't hear her clearly.",'她（宾格）：her'],
      ['通话断断续续，说：我听不清他说话。',"I can't hear him clearly.",'他（宾格）：him'],
      ['播放材料时说：我听不清录音。',"I can't hear the recording clearly.",'录音：the recording'],
      ['会议中说明：我们听不清发言人说话。',"We can't hear the speaker clearly.",'发言人：the speaker'],
      ['电话音质不好，说：我听不清那个号码。',"I can't hear the number clearly.",'那个号码：the number'],
      ['线上会议说明：我听不清他们说话。',"I can't hear them clearly.",'他们（宾格）：them'],
      ['有人介绍地址，说：我们听不清地址。',"We can't hear the address clearly.",'地址：the address'],
      ['视频播放声音太小，说：我听不清视频里的声音。',"I can't hear the audio in the video clearly.",'视频里的声音：the audio in the video'],
      ['通话时说明：我听不清你的问题。',"I can't hear your question clearly.",'你的问题：your question']
    ]),
    make('w-confirm','请对方核实一个待确认的事实','Could you confirm whether…?','Could you confirm whether + 主语 + 谓语？',
      '需要可靠信息以继续工作时，请对方明确确认某事是否成立。whether 后使用陈述语序。',
      '比自己表达“不确定”更进一步，是向掌握信息的人要确认；不能只把直接问句原样接在 whether 后。',
      'whether 或 if 引出是否；从句用陈述语序，主语在 be / 助动词前。',[
      ['发出邀请后确认：你能确认一下会议是否仍按计划进行吗？','Could you confirm whether the meeting is still going ahead?','仍将进行：is still going ahead'],
      ['核对收件情况：你能确认一下是否已收到文件吗？',"Could you confirm whether you've received the file?",'收到文件：have received the file',['Could you confirm whether you have received the file?']],
      ['安排来访，问：你能确认一下她是否会参加吗？','Could you confirm whether she will attend?','她会参加：she will attend'],
      ['准备下单，问：你能确认一下价格是否包含配送吗？','Could you confirm whether the price includes delivery?','价格包括配送：the price includes delivery'],
      ['准备发布，问：你能确认一下这个版本是否为最终版吗？','Could you confirm whether this version is final?','最终的：final'],
      ['核对场地，问：你能确认一下会议室是否已预订吗？','Could you confirm whether the room has been booked?','已被预订：has been booked'],
      ['准备交付，问：你能确认一下周五是否仍是截止日吗？','Could you confirm whether Friday is still the deadline?','截止日：the deadline'],
      ['分配任务前问：你能确认一下他们是否需要帮助吗？','Could you confirm whether they need help?','他们需要：they need'],
      ['准备发消息，问：你能确认一下这个地址是否正确吗？','Could you confirm whether this address is correct?','地址正确：this address is correct'],
      ['安排远程会议，问：你能确认一下我们是否能使用这个链接吗？','Could you confirm whether we can use this link?','我们可以使用：we can use\n这个链接：this link']
    ]),
  ];
})();

// Audited target-preserving alternatives.
((units)=>{
 const alternatives={
  "w-confirm": {},
  "w-hand-over": {}
};
 for(const u of units){
  if(!alternatives[u.id])continue;
  const qs=[u.entry,...u.learning,...u.review], byQuestion=alternatives[u.id];
  for(const q of qs){const added=byQuestion[q.id]||(q.id==='entry'?byQuestion.l1:null);if(added)q.answers=[...new Set([...q.answers,...added])];}
  if(u.id==='w-confirm')for(const q of qs)q.answers=[...new Set(q.answers.flatMap(a=>[a,a.replace('confirm whether ','confirm if ')]))];
  if(u.id==='w-hand-over')for(const q of qs)q.answers=[...new Set(q.answers.flatMap(a=>[a,a.replace(/hand (?!it over|them over)(.+?) over to /,'hand over $1 to ')]))];
 }
})(window.JUJIAN_WORK_1);
