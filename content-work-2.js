'use strict';
window.JUJIAN_WORK_2 = (() => {
  // Contract auxiliary have only; lexical have/to is not a general 've form.
  const mayShorten = (text, full) => {
    if(!/ have$/.test(full))return true;
    const match=new RegExp('\\b'+full+'\\s+(.+)').exec(text);
    return !!match && /^(?:(?:already|just|not|never)\s+)*(?:attached|booked|bought|changed|checked|committed|completed|contacted|decided|double-checked|finished|followed|found|got|gotten|had|heard|left|made|narrowed|opened|put|read|received|resolved|ruled|run|sent|taken|tested|worked|written)\b/.test(match[1]);
  };

  const pairs = [["I'm",'I am'],["We're",'We are'],["They're",'They are'],["She's",'She is'],["He's",'He is'],["I'll",'I will'],["We'll",'We will'],["I've",'I have'],["We've",'We have'],["They've",'They have'],["we've",'we have'],["they've",'they have'],["I'd",'I would'],["can't",'cannot'],["it's",'it is'],["we're",'we are']];
  const forms = answers => { const out = new Set(answers); for (const [a,b] of pairs) for (const s of [...out]) { if(new RegExp('\\b'+a+'\\b').test(s)) out.add(s.replace(new RegExp('\\b'+a+'\\b','g'),b)); if(mayShorten(s,b) && new RegExp('\\b'+b+'\\b').test(s)) out.add(s.replace(new RegExp('\\b'+b+'\\b','g'),a)); } return [...out]; };
  const make = (id,meaning,expression,formula,explanation,boundary,checkpoint,rows) => {
    const qs = rows.map(([zh,en,hint,variants=[]],i)=>({id:(i<5?'l':'r')+(i%5+1),zh,answers:forms([en,...variants]),hint}));
    return {id,collection:'work2',meaning,expression,formula,explanation,boundary,checkpoint,examples:qs.slice(0,2).map(q=>({en:q.answers[0],zh:q.zh})),entry:{...qs[0],id:'entry'},learning:qs.slice(0,5),review:qs.slice(5)};
  };
  return [
    make('w-on-track','说明目前进度有望达到目标','…be on track to…','主语 + am / is / are on track to + 动词原形',
      '根据目前进度，预计能达到某个目标或按时完成。to 后说明具体成果，而不是只说“进展不错”。',
      '这是基于当前进度的判断，不是保证；事情还没有完成，不用它代替完成情况汇报。',
      'on track 后用 to + 动词原形；be 随主语变化。',[
      ['汇报当前进度：我们有望按时完成。',"We're on track to finish on time.",'按时完成：finish on time'],
      ['汇报个人进度：我有望最晚周五完成报告。',"I'm on track to finish the report by Friday.",'完成报告：finish the report\n最晚周五：by Friday'],
      ['介绍她的进度：她有望达到目标。',"She's on track to meet the target.",'达到目标：meet the target'],
      ['汇报团队进度：我们有望下周启动项目。',"We're on track to launch the project next week.",'启动项目：launch the project'],
      ['介绍他们的进度：他们有望本月完成测试。',"They're on track to complete the testing this month.",'完成测试：complete the testing'],
      ['汇报当前进度：我们有望赶上截止日期。',"We're on track to meet the deadline.",'赶上截止日期：meet the deadline'],
      ['汇报个人进度：我有望明天发出初稿。',"I'm on track to send the draft tomorrow.",'发出初稿：send the draft'],
      ['介绍他的进度：他有望本周完成培训。',"He's on track to finish the training this week.",'完成培训：finish the training'],
      ['汇报团队进度：我们有望最晚周一准备好房间。',"We're on track to have the room ready by Monday.",'使房间准备好：have the room ready'],
      ['介绍他们的进度：他们有望按计划交付订单。',"They're on track to deliver the order as planned.",'交付订单：deliver the order\n按计划：as planned']
    ]),
    make('w-running-behind','说明某项工作进度落后','…be running behind on…','主语 + am / is / are running behind on + 工作事项',
      '坦诚说明某项工作没有跟上原定进度，为协调帮助或调整安排提供信息。',
      '这里说进度落后，不是完全没有做，也不是人走在后面。on 后明确是哪项工作。',
      '保留 running behind on；running 的 n 双写。',[
      ['报告进度风险：我们在报告这项工作上进度落后了。',"We're running behind on the report.",'报告：the report\n进度落后：running behind'],
      ['向同事说明：我在准备演示这项工作上进度落后了。',"I'm running behind on the presentation.",'这次演示：the presentation'],
      ['说明团队情况：他们在测试这项工作上进度落后了。',"They're running behind on the testing.",'测试工作：the testing'],
      ['汇报情况：我们在网站更新上进度落后了。',"We're running behind on the website update.",'网站更新：the website update'],
      ['说明她的进度：她在整理文件这项工作上进度落后了。',"She's running behind on the paperwork.",'文件手续工作：the paperwork'],
      ['向主管说明：我在培训这件事上进度落后了。',"I'm running behind on the training.",'培训：the training'],
      ['汇报团队情况：我们在处理订单上进度落后了。',"We're running behind on the orders.",'这些订单：the orders'],
      ['说明他的进度：他在修改初稿上进度落后了。',"He's running behind on the revisions.",'修改工作：the revisions'],
      ['汇报活动筹备：我们在准备工作上进度落后了。',"We're running behind on the preparations.",'准备工作：the preparations'],
      ['说明另一团队情况：他们在做客户调研上进度落后了。',"They're running behind on the customer research.",'客户调研：the customer research']
    ]),
    make('w-waiting','说明须等待的条件及后续动作',"We're waiting for … before…",'主语 + be waiting for + 所需人 / 事物 + before + 后续动作句',
      '解释工作暂时不能推进，是因为还在等某个人或某项信息。before 后交代收到或到位后才会做什么。',
      '是在报告依赖条件，不是简单问多久；before 后谈将来的后续动作时通常用一般现在时。',
      '等待对象前保留 for；before 后写主语和动词，不机械加 will。',[
      ['说明受阻原因：我们在等批准，然后才开始。',"We're waiting for approval before we start.",'批准：approval\n开始：start'],
      ['说明个人进度：我在等这些数字，然后才完成报告。',"I'm waiting for the figures before I finish the report.",'这些数字：the figures'],
      ['说明团队安排：我们在等确认，然后才预订房间。',"We're waiting for confirmation before we book the room.",'确认：confirmation\n预订：book'],
      ['说明她的安排：她在等反馈，然后才修改初稿。',"She's waiting for feedback before she revises the draft.",'修改初稿：revise the draft\nshe 后：revises'],
      ['说明安排：他们在等送货，然后才布置房间。',"They're waiting for the delivery before they set up the room.",'送货：the delivery\n布置：set up'],
      ['解释暂未回复：我在等更多信息，然后才回复。',"I'm waiting for more information before I reply.",'更多信息：more information'],
      ['说明项目依赖：我们在等测试结果，然后才继续。',"We're waiting for the test results before we continue.",'测试结果：the test results'],
      ['说明他的安排：他在等经理，然后才作决定。',"He's waiting for the manager before he makes a decision.",'作决定：make a decision\nhe 后：makes'],
      ['解释为何未发送：我们在等地址，然后才寄出包裹。',"We're waiting for the address before we send the package.",'地址：the address\n包裹：the package'],
      ['解释为何未开会：我们在等安娜，然后才开始会议。',"We're waiting for Anna before we start the meeting.",'安娜：Anna\n开始会议：start the meeting']
    ]),
    make('w-completed','汇报到目前已经完成的事',"So far, we've…",'So far, + 主语 + have / has + 过去分词…',
      '在一个仍在进行的阶段中，说明截至现在已做到哪一步。用现在完成时把过去完成的部分与当前进度联系起来。',
      '不代表整个项目都完成；不与 yesterday 等明确结束的过去时间放在同一完成时分句中。',
      'so far 表示到目前为止；he / she 用 has，主要动词用过去分词。',[
      ['阶段汇报：到目前为止，我们已经完成了初稿。',"So far, we've completed the first draft.",'完成：complete → completed\n初稿：the first draft'],
      ['个人汇报：到目前为止，我已经检查了三份订单。',"So far, I've checked three orders.",'检查：check → checked\n三份订单：three orders'],
      ['介绍她的进度：到目前为止，她已经培训了两位同事。','So far, she has trained two colleagues.','培训：train → trained'],
      ['团队汇报：到目前为止，我们已经收到了五份回复。',"So far, we've received five replies.",'收到：receive → received\n回复：replies'],
      ['介绍他们的进度：到目前为止，他们已经测试了这个系统。',"So far, they've tested the system.",'测试：test → tested'],
      ['阶段汇报：到目前为止，我们已经解决了两个问题。',"So far, we've resolved two issues.",'解决：resolve → resolved'],
      ['个人汇报：到目前为止，我已经写好了议程。',"So far, I've written the agenda.",'写：write → written\n议程：the agenda'],
      ['介绍他的进度：到目前为止，他已经联系了所有供应商。','So far, he has contacted all the suppliers.','联系：contact → contacted'],
      ['团队汇报：到目前为止，我们已经作出了一项决定。',"So far, we've made one decision.",'作决定：make a decision\n过去分词：made'],
      ['个人汇报：到目前为止，我已经发出了邀请。',"So far, I've sent the invitations.",'发出：send → sent\n邀请：the invitations']
    ]),
    make('w-due','说明任务应在何时前完成','…is / are due by…','交付物 / 任务 + is / are due by + 截止时间',
      '明确工作成果的最晚提交时间。due 在这里表示应完成或应交付；by 包括在该时间之前完成的可能。',
      'due by 说明最晚应完成或提交的时间，不是开始时间，也不是对实际完成进度的预测。',
      '单数主语用 is，复数用 are；截止时间前保留 by。',[
      ['核对期限：报告最晚周五交。','The report is due by Friday.','报告：the report\n最晚周五：by Friday'],
      ['说明提交要求：这些表格最晚明天交。','These forms are due by tomorrow.','这些表格：these forms\n复数：are'],
      ['说明期限：初稿最晚中午交。','The draft is due by noon.','初稿：the draft\n中午：noon'],
      ['提醒团队：这些修改最晚周一完成。','The revisions are due by Monday.','这些修改：the revisions'],
      ['核对期限：这份提案最晚本周结束前交。','The proposal is due by the end of the week.','提案：the proposal\n本周结束：the end of the week'],
      ['说明提交期限：反馈最晚周二交。','The feedback is due by Tuesday.','反馈：the feedback（不可数，用 is）'],
      ['提醒团队：会议记录最晚明天上午交。','The meeting notes are due by tomorrow morning.','会议记录：the meeting notes'],
      ['说明期限：申请最晚月底前交。','The application is due by the end of the month.','申请：the application\n月底：the end of the month'],
      ['核对交付：更新后的日程表最晚今天交。','The updated schedule is due by the end of today.','更新后的日程表：the updated schedule',['The updated schedule is due by the end of the day.']],
      ['提醒同事：这些数字最晚下午三点交。','The figures are due by three this afternoon.','这些数字：the figures\n下午三点：three this afternoon',['The figures are due by 3 this afternoon.']]
    ]),
    make('w-priority','明确当前应优先完成什么','The priority is to…','The priority is to + 动词原形…',
      '有多项工作需要做时，指出当前应该先投入精力的目标。to 后接动作，便于团队据此安排。',
      '说明工作顺序，不等于其他事都不重要；如果只是提出下一项步骤而非轻重次序，用 next step 更准确。',
      'is 后用 to + 动词原形；priority 在本结构中是单数。',[
      ['大家任务很多，明确：当前优先事项是解决这个问题。','The priority is to resolve this issue.','解决这个问题：resolve this issue'],
      ['安排当天工作：优先事项是联系客户。','The priority is to contact the client.','联系客户：contact the client'],
      ['临近提交时说：优先事项是完成报告。','The priority is to finish the report.','完成报告：finish the report'],
      ['发现信息缺失时说：优先事项是核实这些事实。','The priority is to check the facts.','核实事实：check the facts'],
      ['安排人手：优先事项是培训新员工。','The priority is to train the new staff.','培训新员工：train the new staff'],
      ['讨论工作顺序：优先事项是确认日程。','The priority is to confirm the schedule.','确认日程：confirm the schedule'],
      ['准备上线时说：优先事项是测试这个系统。','The priority is to test the system.','测试系统：test the system'],
      ['活动快开始了：优先事项是准备好会议室。','The priority is to get the meeting room ready.','使会议室准备好：get the meeting room ready'],
      ['处理投诉时说：优先事项是理解客户的需求。',"The priority is to understand the client's needs.",'理解客户的需求：understand the client’s needs'],
      ['协调团队时说：优先事项是分配工作。','The priority is to divide the work.','分配工作：divide the work']
    ]),
    make('w-next-step','说明接下来的一步是什么','The next step is to…','The next step is to + 动词原形…',
      '在讨论流程或完成一部分工作后，明确接下来要做的一个动作。',
      '强调流程中接下来要做什么；若想说明哪项工作最重要，可用 The priority is to…。',
      'step 用单数；is 后写 to + 动词原形。',[
      ['初稿已完成，说明：下一步是收集反馈。','The next step is to collect feedback.','收集反馈：collect feedback'],
      ['方案已讨论，说明：下一步是确认预算。','The next step is to confirm the budget.','确认预算：confirm the budget'],
      ['文件已检查，说明：下一步是发送报告。','The next step is to send the report.','发送报告：send the report'],
      ['流程已说明，接着说：下一步是填写表格。','The next step is to complete the form.','填写表格：complete the form'],
      ['需求已确认，说明：下一步是准备报价。','The next step is to prepare a quote.','准备一份报价：prepare a quote'],
      ['报名已结束，说明：下一步是联系参与者。','The next step is to contact the participants.','联系参与者：contact the participants'],
      ['测试已结束，说明：下一步是审查结果。','The next step is to review the results.','审查结果：review the results'],
      ['人员已选定，说明：下一步是安排培训。','The next step is to arrange training.','安排培训：arrange training'],
      ['时间已确认，说明：下一步是预订会议室。','The next step is to book the meeting room.','预订会议室：book the meeting room'],
      ['同事已同意方案，说明：下一步是更新日程表。','The next step is to update the schedule.','更新日程表：update the schedule']
    ]),
    make('w-deadline','委婉协商延长某项期限','Would it be possible to extend … until…?','Would it be possible to extend + 期限 / 可延长事项 + until + 新的截止时间？',
      '向能决定期限的人询问是否可以延长，给出希望延到的日期或时间。',
      '是在提出请求，不是宣布已获延期。extend 是延长，until 后的新时间应晚于原约定。',
      'possible 后保留 to；extend 后明确对象，until 或 to 后放新的截止时间。',[
      ['原截止周三，协商：能否把截止日期延到周五？','Would it be possible to extend the deadline until Friday?','截止日期：the deadline\n延到周五：until Friday'],
      ['原截止今天，协商：能否把截止日期延到明天？','Would it be possible to extend the deadline until tomorrow?','明天：tomorrow'],
      ['原定本周交，协商：能否把提交期限延到下周？','Would it be possible to extend the submission deadline until next week?','提交期限：the submission deadline'],
      ['原定本周四截止，协商：能否把审阅期延到下周一？','Would it be possible to extend the review period until next Monday?','审阅期：the review period'],
      ['原定上午截止，协商：能否把截止时间延到下午三点？','Would it be possible to extend the deadline until three this afternoon?','下午三点：three this afternoon',['Would it be possible to extend the deadline until 3 this afternoon?']],
      ['原定今天截止，协商：能否把反馈期限延到周二？','Would it be possible to extend the feedback deadline until Tuesday?','反馈期限：the feedback deadline'],
      ['原定周五截止，协商：能否把测试期延到下周一？','Would it be possible to extend the testing period until next Monday?','测试期：the testing period'],
      ['原定今天交，协商：能否把截止时间延到明天中午？','Would it be possible to extend the deadline until noon tomorrow?','明天中午：noon tomorrow'],
      ['原定月中结束，协商：能否把申请期延到月底？','Would it be possible to extend the application period until the end of the month?','申请期：the application period\n月底：the end of the month'],
      ['原截止周三，协商：能否把报告的截止日期延到周四？','Would it be possible to extend the report deadline until Thursday?','报告的截止日期：the report deadline']
    ]),
    make('w-start','提议会议先讨论哪一项','Shall we start with…?','Shall we start with + 议题 / 动词-ing？',
      '在共同讨论开始时，提议先处理哪个议题，也可以建议先做一个简短动作。',
      '这是包含自己的议程建议，不是直接询问何时开会。shall we 保持共同商量的语气。',
      'start 后保留 with；with 后若写动作，用 -ing。',[
      ['开始会议，提议：我们先讨论议程好吗？','Shall we start with the agenda?','议程：the agenda'],
      ['项目例会上提议：我们先讨论最新进展好吗？','Shall we start with the latest update?','最新进展：the latest update'],
      ['团队初次见面，提议：我们先作简短介绍好吗？','Shall we start with a quick introduction?','简短介绍：a quick introduction'],
      ['准备讨论方案，提议：我们先讨论预算好吗？','Shall we start with the budget?','预算：the budget'],
      ['检查任务前提议：我们先核对日程好吗？','Shall we start with checking the schedule?','核对日程：check the schedule'],
      ['开始评审，提议：我们先讨论你的问题好吗？','Shall we start with your questions?','你的问题：your questions'],
      ['会议开始，提议：我们先讨论上周的结果好吗？',"Shall we start with last week's results?",'上周的结果：last week’s results'],
      ['培训开始，提议：我们先看一个例子好吗？','Shall we start with an example?','一个例子：an example'],
      ['团队开会，提议：我们先讨论当前的困难好吗？','Shall we start with the current challenges?','当前的困难：the current challenges'],
      ['准备讨论提案，提议：我们先回顾一下目标好吗？','Shall we start with reviewing the goals?','回顾目标：review the goals']
    ]),
    make('w-add','在讨论中补充一个观点',"I'd like to add that…",'I’d like to add that + 主语 + 谓语',
      '已有讨论内容时，礼貌地补充一个相关事实或看法。that 后放完整句子。',
      '这里是补充发言，不是要求把某件东西加进清单。若尚未轮到自己，仍需要合适时机进入讨论。',
      'add 后接有主语和谓语的完整想法；that 可以保留，也可以省略。',[
      ['补充讨论：我想补充一点，我们需要更多时间。',"I'd like to add that we need more time.",'需要更多时间：need more time'],
      ['补充信息：我想补充一点，房间已经订好了。',"I'd like to add that the room is already booked.",'房间已订好：the room is already booked'],
      ['补充意见：我想补充一点，这个选项更便宜。',"I'd like to add that this option is cheaper.",'这个选项：this option\n更便宜：cheaper'],
      ['补充事实：我想补充一点，客户已经同意了。',"I'd like to add that the client has agreed.",'客户已同意：the client has agreed'],
      ['补充说明：我想补充一点，她明天有空。',"I'd like to add that she is available tomorrow.",'有空：available'],
      ['补充信息：我想补充一点，我们已经测试过这个系统。',"I'd like to add that we have tested the system.",'已测试：have tested'],
      ['补充看法：我想补充一点，培训很重要。',"I'd like to add that training is important.",'培训：training\n重要的：important'],
      ['补充事实：我想补充一点，截止日期是周五。',"I'd like to add that the deadline is Friday.",'截止日期：the deadline'],
      ['补充说明：我想补充一点，他们需要一个明确的答复。',"I'd like to add that they need a clear answer.",'明确的答复：a clear answer'],
      ['补充信息：我想补充一点，这也会影响我们的团队。',"I'd like to add that this also affects our team.",'也影响：also affects\n我们的团队：our team']
    ]),
    make('w-point','先承认对方观点再提出保留意见','I see your point, but…','I see your point, but + 保留意见的完整句子',
      '表示理解对方为什么这样想，再说明不同考虑。它有助于让异议回应到具体观点上。',
      '理解不等于同意。but 后应有实际理由或顾虑，避免只机械套礼貌开头。',
      '保留 I see your point；but 后接完整想法。',[
      ['对方建议加快，回应：我理解你的意思，但我们需要更多时间。','I see your point, but we need more time.','需要更多时间：need more time'],
      ['对方建议换方案，回应：我理解你的意思，但这个选项成本更高。','I see your point, but this option costs more.','成本更高：costs more'],
      ['对方建议今天决定，回应：我理解你的意思，但我们还没准备好。',"I see your point, but we're not ready yet.",'还没准备好：not ready yet'],
      ['对方建议重做，回应：我理解你的意思，但截止日期就是明天。','I see your point, but the deadline is tomorrow.','截止日期：the deadline'],
      ['对方建议简化检查，回应：我理解你的意思，但质量很重要。','I see your point, but quality is important.','质量：quality'],
      ['对方建议增添功能，回应：我理解你的意思，但我们的预算有限。','I see your point, but our budget is limited.','预算有限：our budget is limited'],
      ['对方建议周一开会，回应：我理解你的意思，但她周一不在。',"I see your point, but she is away on Monday.",'周一不在：be away on Monday'],
      ['对方建议暂不联系客户，回应：我理解你的意思，但客户需要一个答复。','I see your point, but the client needs an answer.','客户需要：the client needs'],
      ['对方建议增加工作，回应：我理解你的意思，但我们已经有很多任务了。','I see your point, but we already have a lot of tasks.','已经有很多任务：already have a lot of tasks'],
      ['对方建议立即实施，回应：我理解你的意思，但我们应该先测试它。','I see your point, but we should test it first.','应该先测试：should test it first']
    ]),
    make('w-perspective','说明从哪个角度看问题','From … perspective,…','From + 所属关系 / 某种角色 + perspective, + 完整判断',
      '讨论方案时指出判断的出发点，例如自己的角度、客户的角度，或成本和使用体验的角度。',
      '不是在替某个人断言其真实想法，而是明确考虑的视角。不要把 perspective 误写成表示前景的 prospect。',
      '可用 from my perspective，或 from a customer’s perspective；后面接完整想法。',[
      ['说明自己的角度：从我的角度看，这个计划是可行的。','From my perspective, this plan is workable.','我的角度：my perspective\n可行的：workable'],
      ['考虑客户体验：从客户的角度看，流程太慢了。',"From the customer's perspective, the process is too slow.",'客户的角度：the customer’s perspective\n流程：the process'],
      ['说明团队角度：从我们的角度看，培训很有用。','From our perspective, the training is useful.','我们的角度：our perspective'],
      ['讨论成本：从成本的角度看，这个选项更好。','From a cost perspective, this option is better.','成本角度：a cost perspective'],
      ['考虑新员工：从新员工的角度看，这些说明不够清楚。',"From a new employee's perspective, these instructions are unclear.",'新员工：a new employee\n不清楚的：unclear'],
      ['提出自己的判断：从我的角度看，这值得一试。','From my perspective, this is worth trying.','值得尝试：worth trying'],
      ['考虑用户：从用户的角度看，这个页面更容易使用。',"From a user's perspective, this page is easier to use.",'用户角度：a user’s perspective\n更容易使用：easier to use'],
      ['说明团队角度：从我们的角度看，截止日期太紧了。','From our perspective, the deadline is too tight.','截止日期很紧：the deadline is tight'],
      ['考虑长期影响：从长期的角度看，这会节省时间。','From a long-term perspective, this will save time.','长期角度：a long-term perspective\n节省时间：save time'],
      ['考虑供应商：从供应商的角度看，这个日程很难执行。',"From the supplier's perspective, this schedule is difficult to follow.",'供应商：the supplier\n难以执行：difficult to follow']
    ]),
    make('w-agree','确认大家是否已对某项决定达成一致','Are we all agreed on…?','Are we all agreed on + 共同决定的事项？',
      '讨论即将结束时，核对大家是否已对某个安排或决定达成一致。agreed 在这里描述一致的状态。',
      '不是用自己的同意代替别人的意见。这个问句适用于共同讨论，不宜把沉默自动视为同意。',
      '句首 Are，主语 we；agreed 后保留 on。',[
      ['讨论后核对：我们都同意这个计划了吗？','Are we all agreed on this plan?','这个计划：this plan'],
      ['定下时间前核对：我们都同意这个日期了吗？','Are we all agreed on the date?','这个日期：the date'],
      ['讨论费用后核对：我们都同意这个预算了吗？','Are we all agreed on the budget?','这个预算：the budget'],
      ['会议结束前核对：我们都对下一步达成一致了吗？','Are we all agreed on the next steps?','下一步：the next steps'],
      ['分工后核对：我们都对各自的职责达成一致了吗？','Are we all agreed on our roles?','我们的职责：our roles'],
      ['安排工作后核对：我们都同意这个日程了吗？','Are we all agreed on the schedule?','这个日程：the schedule'],
      ['讨论后核对：我们都同意这个方法了吗？','Are we all agreed on this approach?','这个方法：this approach'],
      ['准备提交前核对：我们都同意这个最终版本了吗？','Are we all agreed on the final version?','最终版本：the final version'],
      ['定期限前核对：我们都同意这个截止日期了吗？','Are we all agreed on the deadline?','截止日期：the deadline'],
      ['明确工作轻重后核对：我们都对这些优先事项达成一致了吗？','Are we all agreed on the priorities?','优先事项：the priorities']
    ]),
    make('w-summarize','用简短话收束刚才的讨论','To sum up,…','To sum up, + 讨论所得的完整句子',
      '在讲解或讨论末尾，提炼已经谈过的重点、结论或共同安排。sum up 是总结，不是引入完全没讨论的新要求。',
      '后面的内容应能从前文得到；一句总结不意味着所有人已同意，仍可另行核对。',
      '开头用 To sum up；后面的总结要构成完整句子。',[
      ['已讨论完方案，简短总结：总之，我们需要更多时间。','To sum up, we need more time.','需要更多时间：need more time'],
      ['讨论后总结：总之，截止日期是周五。','To sum up, the deadline is Friday.','截止日期：the deadline'],
      ['已商定分工，总结：总之，我会准备报告。',"To sum up, I'll prepare the report.",'准备报告：prepare the report'],
      ['介绍完进度，总结：总之，项目在按计划推进。','To sum up, the project is on track.','按计划推进：be on track'],
      ['已决定后续，总结：总之，我们会先测试这个系统。',"To sum up, we'll test the system first.",'先测试：test the system first'],
      ['讨论后总结：总之，预算没有变化。','To sum up, the budget has not changed.','没有变化：has not changed',["To sum up, the budget hasn't changed."]],
      ['已明确要求，总结：总之，质量是优先事项。','To sum up, quality is the priority.','质量：quality\n优先事项：the priority'],
      ['汇报完成部分后总结：总之，我们已经完成了第一阶段。','To sum up, we have completed the first stage.','已完成：have completed\n第一阶段：the first stage',["To sum up, we've completed the first stage."]],
      ['已商定安排，总结：总之，她会联系客户。','To sum up, she will contact the client.','她会联系：she will contact'],
      ['比较后总结：总之，第二个选项更实用。','To sum up, the second option is more practical.','第二个选项：the second option\n更实用：more practical']
    ]),
    make('w-back','把讨论带回先前的话题','Could we come back to…?','Could we come back to + 先前的话题？',
      '讨论偏离主题，或需要重新查看先前的点时，提议大家把注意力带回去。',
      '这里的 come back to 指回到议题，不是回到地点。不要用它引出从未讨论过的新话题。',
      'Could we 后用 come 原形；back 后保留 to。',[
      ['讨论偏题，提议：我们能回到预算这个话题吗？','Could we come back to the budget?','预算：the budget'],
      ['刚讨论过日期，想重新核对：我们能回到截止日期这个话题吗？','Could we come back to the deadline?','截止日期：the deadline'],
      ['讨论跑远了，提议：我们能回到最初的问题吗？','Could we come back to the original question?','最初的问题：the original question'],
      ['想再讨论刚才的一点：我们能回到你的建议吗？','Could we come back to your suggestion?','你的建议：your suggestion'],
      ['需要收拢讨论：我们能回到主要问题吗？','Could we come back to the main issue?','主要问题：the main issue'],
      ['日程问题还没谈完：我们能回到日程这个话题吗？','Could we come back to the schedule?','日程：the schedule'],
      ['刚才跳过一个事项：我们能回到第一个选项吗？','Could we come back to the first option?','第一个选项：the first option'],
      ['刚讨论过结果，想继续：我们能回到测试结果吗？','Could we come back to the test results?','测试结果：the test results'],
      ['讨论偏题，提议：我们能回到客户的需求吗？',"Could we come back to the client's needs?",'客户的需求：the client’s needs'],
      ['刚才没谈完：我们能回到分工这个话题吗？','Could we come back to our roles?','我们的分工：our roles']
    ]),
    make('w-weigh','指出某个选择的主要优点','The main advantage of … is…','The main advantage of + 方案 / 动词-ing + is + 优点',
      '比较选项时，把某一方案最重要的好处说清楚。优点可用名词短语，也可用 that 引出的完整句子。',
      '这里只陈述主要优点，不代表没有缺点或已经选定。of 后若放动作，用 -ing。',
      'advantage 在本句中是单数，用 is；of 后动作写成 -ing。',[
      ['比较方案：这个选项的主要优点是成本更低。','The main advantage of this option is the lower cost.','这个选项：this option\n更低的成本：the lower cost'],
      ['比较办公安排：远程工作的主要优点是灵活性。','The main advantage of working remotely is flexibility.','远程工作：work remotely\n灵活性：flexibility'],
      ['比较工具：这个系统的主要优点是易于使用。','The main advantage of this system is that it is easy to use.','易于使用：easy to use'],
      ['比较会面形式：线上开会的主要优点是节省时间。','The main advantage of meeting online is that it saves time.','线上开会：meet online\n节省时间：saves time'],
      ['讨论安排：早点开始的主要优点是我们有更多时间。','The main advantage of starting early is that we have more time.','早点开始：start early'],
      ['比较方案：这个计划的主要优点是简单。','The main advantage of this plan is its simplicity.','它的简单性：its simplicity'],
      ['比较团队安排：一起工作的主要优点是我们可以分享想法。','The main advantage of working together is that we can share ideas.','分享想法：share ideas'],
      ['比较工具：这个工具的主要优点是速度。','The main advantage of this tool is its speed.','它的速度：its speed'],
      ['比较活动日期：选择周五的主要优点是每个人都有空。','The main advantage of choosing Friday is that everyone is available.','选择：choose → choosing\n每个人都有空：everyone is available'],
      ['比较服务：这个服务的主要优点是可靠性。','The main advantage of this service is its reliability.','它的可靠性：its reliability']
    ]),
  ];
})();

// Audited target-preserving alternatives.
((units)=>{
 const alternatives={
  "w-add": {},
  "w-deadline": {},
  "w-weigh": {
    "l1": [
      "The main advantage of this option is lower cost."
    ],
    "l3": [
      "The main advantage of this system is its ease of use."
    ]
  }
};
 for(const u of units){
  if(!alternatives[u.id])continue;
  const qs=[u.entry,...u.learning,...u.review], byQuestion=alternatives[u.id];
  for(const q of qs){const added=byQuestion[q.id]||(q.id==='entry'?byQuestion.l1:null);if(added)q.answers=[...new Set([...q.answers,...added])];}
  if(u.id==='w-add')for(const q of qs)q.answers=[...new Set(q.answers.flatMap(a=>[a,a.replace('add that ','add ')]))];
  if(u.id==='w-deadline')for(const q of qs)q.answers=[...new Set(q.answers.flatMap(a=>[a,a.replace(' until ',' to ')]))];
 }
})(window.JUJIAN_WORK_2);
