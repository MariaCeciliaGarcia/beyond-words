'use strict';
window.JUJIAN_WORK_MORE_A = (() => {
  // Contract auxiliary have only; lexical have/to is not a general 've form.
  const mayShorten = (text, full) => {
    if(!/ have$/.test(full))return true;
    const match=new RegExp('\\b'+full+'\\s+(.+)').exec(text);
    return !!match && /^(?:(?:already|just|not|never)\s+)*(?:attached|booked|bought|changed|checked|committed|completed|contacted|decided|double-checked|finished|followed|found|got|gotten|had|heard|left|made|narrowed|opened|put|read|received|resolved|ruled|run|sent|taken|tested|worked|written)\b/.test(match[1]);
  };

  const make = (...args) => {
    const u = window.JUJIAN_BUILD('work-expansion', ...args);
    u.domain = 'work';
    const pairs = [["I'm",'I am'],["I'll",'I will'],["We're",'We are'],["We'll",'We will'],["I've",'I have'],["We've",'We have'],["I'd",'I would'],["don't",'do not'],["can't",'cannot'],["you're",'you are'],["we're",'we are']];
    for (const q of [...u.learning,...u.review]) { const a = new Set(q.answers); for (const [x,y] of pairs) for (const s of [...a]) { if(new RegExp('\\b'+x+'\\b').test(s))a.add(s.replace(new RegExp('\\b'+x+'\\b','g'),y)); if(mayShorten(s,y) && new RegExp('\\b'+y+'\\b').test(s))a.add(s.replace(new RegExp('\\b'+y+'\\b','g'),x)); } q.answers = [...a]; }
    u.entry = {...u.learning[0],id:'entry'};
    return u;
  };
  return [
    make('w-heads-up','提前提醒，让对方有所准备','give someone a heads-up','give + 人 + a heads-up about + 事情',
      '预计某件事会影响同事时，提前告诉对方，方便安排。a heads-up 常用于日常工作交流，比正式通知更口语化。',
      'heads-up 是名词，前面用 a；重点是提前提醒，不是事情发生后汇报。',[
      ['客户下周要来，你对同事说：我会提前提醒团队这次来访。',"I'll give the team a heads-up about the visit.",'团队：the team；来访：the visit'],
      ['请提前提醒我一下时间安排的变化。','Please give me a heads-up about any schedule changes.','时间安排的变化：any schedule changes'],
      ['我们提前提醒了前台这批来宾要到。','We gave reception a heads-up about the visitors.','前台：reception；来宾：the visitors'],
      ['他提前提醒了我审查的事。','He gave me a heads-up about the review.','过去式：gave；审查：the review'],
      ['设备要停用，你提醒负责人：请提前提醒工作人员这次停机。','Please give the staff a heads-up about the shutdown.','工作人员：the staff；停机：the shutdown'],
      ['我要提前提醒财务部这笔大额付款。',"I'll give finance a heads-up about the large payment.",'财务部：finance；大额付款：the large payment'],
      ['她提前提醒了我们交付会延迟。','She gave us a heads-up about the delivery delay.','交付延迟：the delivery delay'],
      ['请提前提醒销售团队这次价格变动。','Please give the sales team a heads-up about the price change.','销售团队：the sales team；价格变动：the price change'],
      ['我们会提前提醒承包商这次检查。',"We'll give the contractor a heads-up about the inspection.",'承包商：the contractor；检查：the inspection'],
      ['他们提前提醒了我临时改动的事。','They gave me a heads-up about the last-minute change.','临时改动：the last-minute change']
    ]),
    make('w-keep-posted','持续告知事情的最新进展','keep someone posted','keep + 人 + posted on + 事情',
      '事情还在推进时，承诺有新进展会继续告知，或请对方持续更新。适合等待审批、调查结果或交付状态。',
      'posted 在这里表示了解最新情况；一次告知可用 let someone know，keep someone posted 强调后续持续同步。',[
      ['审批还没结束，你告诉同事：我会持续告诉你审批的最新进展。',"I'll keep you posted on the approval process.",'审批流程：the approval process'],
      ['请随时告诉我们维修的最新进展。','Please keep us posted on the repairs.','维修：the repairs'],
      ['我们会持续告诉客户调查的最新进展。',"We'll keep the client posted on the investigation.",'调查：the investigation'],
      ['她一直在向我更新招聘的进展。',"She's been keeping me posted on the hiring process.",'一直在：has been keeping；招聘流程：the hiring process',["She has been keeping me posted on the hiring process."]],
      ['请随时告诉团队你的进展。','Please keep the team posted on your progress.','你的进展：your progress'],
      ['我会持续告诉你发货的最新情况。',"I'll keep you posted on the shipment.",'发货：the shipment'],
      ['请随时告诉我谈判的最新进展。','Please keep me posted on the negotiations.','谈判：the negotiations'],
      ['我们会持续告诉大家办公室搬迁的最新安排。',"We'll keep everyone posted on the office move.",'办公室搬迁：the office move'],
      ['他一直向我们更新搜索的进展。','He kept us posted on the search.','过去式：kept；搜索：the search'],
      ['请随时告诉客户退款的最新进度。','Please keep the customer posted on the refund.','退款：the refund']
    ]),
    make('w-touch-base','简短联系，同步一下情况','touch base with someone','touch base with + 人 + about + 事情',
      '想用一段简短交流核对情况、保持联系时，可以说 touch base。常见于同事间，语气较轻松。',
      '不是完整汇报或深入讨论的保证；base 用单数。with 引出联系人，about 引出话题。',[
      ['我明天会跟你简短聊一下这份提案。',"I'll touch base with you about the proposal tomorrow.",'提案：the proposal；明天放句末'],
      ['我们周五跟设计团队简短碰一下进度吧。',"Let's touch base with the design team on Friday.",'设计团队：the design team；周五：on Friday',["Let us touch base with the design team on Friday."]],
      ['你能跟米娅简短联系一下预算的事吗？','Could you touch base with Mia about the budget?','预算：the budget'],
      ['她今天早上和我简短沟通过。','She touched base with me this morning.','过去式：touched；今天早上：this morning'],
      ['我想就下一步跟你简短聊一下。',"I'd like to touch base with you about the next steps.",'下一步：the next steps'],
      ['我们发布后再简短同步一下吧。',"Let's touch base after the launch.",'发布后：after the launch',["Let us touch base after the launch."]],
      ['请就时间安排跟供应商简短联系一下。','Please touch base with the supplier about the schedule.','供应商：the supplier；时间安排：the schedule'],
      ['他每周一都跟团队简短沟通。','He touches base with the team every Monday.','第三人称：touches；每周一：every Monday'],
      ['我要就这次交接跟她简短聊一下。',"I'll touch base with her about the handover.",'她：her；交接：the handover'],
      ['我们能在会议前简短碰一下吗？','Could we touch base before the meeting?','会议前：before the meeting']
    ]),
    make('w-fill-in','给错过信息的人补充情况','fill someone in on something','fill + 人 + in on + 事情',
      '对方缺席或不了解背景时，把他错过的重要情况补上。可用于会后补充信息、新人接手或解释事情经过。',
      '人放在 fill 和 in 之间；on 后是需要补充的事情。不是填写表格的 fill in a form。',[
      ['你错过了会议，问同事：你能给我补充一下会议内容吗？','Could you fill me in on the meeting?','给我补充：fill me in；会议：the meeting'],
      ['我会把最新进展告诉她。',"I'll fill her in on the latest developments.",'她：her；最新进展：the latest developments'],
      ['请把背景情况告诉我们的新同事。','Please fill our new colleague in on the background.','新同事：our new colleague；背景：the background'],
      ['他把客户的反馈告诉了我们。','He filled us in on the client feedback.','过去式：filled；客户反馈：the client feedback'],
      ['你能告诉我我不在期间发生了哪些变化吗？','Could you fill me in on the changes while I was away?','变化：the changes；我不在时：while I was away'],
      ['我们会把讨论的内容告诉负责人。',"We'll fill the manager in on the discussion.",'负责人：the manager；讨论：the discussion'],
      ['请给我补充一下这个问题的情况。','Please fill me in on the issue.','这个问题：the issue'],
      ['她把谈判的情况告诉了我。','She filled me in on the negotiations.','谈判：the negotiations'],
      ['我会把决定告诉本。',"I'll fill Ben in on the decision.",'决定：the decision'],
      ['你能给我们补充一下事情经过吗？','Could you fill us in on what happened?','事情经过：what happened']
    ]),
    make('w-up-to-speed','尽快了解情况，跟上工作','get up to speed on something','get up to speed on + 项目 / 系统 / 情况',
      '刚加入或离开一段时间后，需要掌握足够的背景与最新信息，才能参与工作，可以说 get up to speed。',
      '这里说了解和熟悉到能跟上，不是实际加快移动速度；get 强调进入这种状态。',[
      ['我需要先熟悉一下这个项目的情况。','I need to get up to speed on the project.','需要：need to；项目：the project'],
      ['她正在熟悉这套新系统。',"She's getting up to speed on the new system.",'正在：is getting；新系统：the new system',["She is getting up to speed on the new system."]],
      ['这份简报会帮助你了解最新的变化。','This briefing will help you get up to speed on the changes.','简报：this briefing；帮助：help you'],
      ['我们得先了解客户的需求。','We need to get up to speed on the client requirements.','客户需求：the client requirements'],
      ['我花了一周熟悉了流程。','It took me a week to get up to speed on the process.','花我一周：it took me a week'],
      ['请给我一点时间了解账户的情况。','Please give me some time to get up to speed on the account.','给我一点时间：give me some time；账户：the account'],
      ['他很快熟悉了安全规定。','He quickly got up to speed on the safety rules.','过去式：got；安全规定：the safety rules'],
      ['我们需要了解最新的进展。','We need to get up to speed on the latest developments.','最新进展：the latest developments'],
      ['这段录像帮助她熟悉了这套软件。','The recording helped her get up to speed on the software.','录像：the recording；软件：the software'],
      ['你熟悉这项新政策了吗？','Have you got up to speed on the new policy?','完成时：have you got；新政策：the new policy',["Have you gotten up to speed on the new policy?"]]
    ]),
    make('w-hear-back','收到对方的回复','hear back from someone','hear back from + 人 / 机构',
      '发出消息、申请或请求之后，收到对方回应用 hear back。没有收到回复时，常与 not yet 或 still waiting 连用。',
      'hear from 也可指任何来信来电；hear back 特别表示对先前联系的回复。hear 的过去式是 heard。',[
      ['我们还没收到供应商的回复。',"We haven't heard back from the supplier yet.",'还没：have not…yet；供应商：the supplier',["We have not heard back from the supplier yet."]],
      ['你收到人力资源部的回复了吗？','Have you heard back from HR?','完成时：have you heard；人力资源部：HR'],
      ['我今天早上收到了客户的回复。','I heard back from the client this morning.','过去式：heard；今天早上：this morning'],
      ['她还在等律师回复。',"She's still waiting to hear back from the lawyer.",'还在等：is still waiting；律师：the lawyer',["She is still waiting to hear back from the lawyer."]],
      ['我希望最晚周五能收到他们的回复。','I hope to hear back from them by Friday.','希望：hope to；最晚周五：by Friday'],
      ['我们昨天收到了房东的回复。','We heard back from the landlord yesterday.','房东：the landlord；昨天：yesterday'],
      ['他还没收到支持团队的回复。',"He hasn't heard back from the support team yet.",'还没：has not…yet；支持团队：the support team',["He has not heard back from the support team yet."]],
      ['你预计什么时候会收到他们的回复？','When do you expect to hear back from them?','预计：expect to'],
      ['我一收到诊所的回复就会告诉你。',"I'll let you know as soon as I hear back from the clinic.",'一…就：as soon as；诊所：the clinic'],
      ['我们需要在订票前收到组织方的回复。','We need to hear back from the organizers before booking the tickets.','组织方：the organizers；订票前：before booking the tickets',["We need to hear back from the organisers before booking the tickets."]]
    ]),
    make('w-run-by','先让对方过目或听听意见','run something by someone','run + 想法 / 草稿 + by + 人',
      '在继续做之前，先把想法或方案告诉某人听听看。常用于非正式征求意见或确认是否合适。',
      '不保证对方已正式批准；代词放中间，如 run it by you。run 的过去式是 ran。',[
      ['我想先听听你对这个想法的意见。',"I'd like to run this idea by you.",'这个想法：this idea；让你听听：by you'],
      ['你能先让法务团队过目这段措辞吗？','Could you run this wording by the legal team?','措辞：this wording；法务团队：the legal team'],
      ['我们先听听经理对这个计划的意见吧。',"Let's run the plan by the manager first.",'计划：the plan；先：first',["Let us run the plan by the manager first."]],
      ['我昨天已经让她看过了。','I ran it by her yesterday.','过去式：ran；它放在中间：it'],
      ['发送之前，请先让我过目这封邮件。','Please run the email by me before sending it.','邮件：the email；发送前：before sending it'],
      ['他想先听听我们对这个建议的意见。','He wants to run the suggestion by us.','建议：the suggestion；我们：us'],
      ['我能先给你看一下这份草稿吗？','Could I run this draft by you?','草稿：this draft'],
      ['我们得先听听财务部对这些数字的意见。','We need to run the figures by finance first.','数字：the figures；财务部：finance'],
      ['她已经让客户看过了这些选项。','She has already run the options by the client.','已经：has already run；选项：the options'],
      ['我会先给你看一下这份议程。',"I'll run the agenda by you first.",'议程：the agenda']
    ]),
    make('w-bring-up','在谈话中提出一个话题','bring something up','bring up + 话题；bring + it / them + up',
      '把尚未讨论的事情带入对话用 bring up。可用于提出问题、提醒某件事或说明是谁先提起。',
      '表达的是把话题提出，不保证已经解决。代词必须放中间，如 bring it up；过去式是 brought。',[
      ['我会在会上提出这个问题。',"I'll bring up the issue at the meeting.",'这个问题：the issue；会上：at the meeting',["I'll bring the issue up at the meeting.","I will bring the issue up at the meeting."]],
      ['谢谢你提起这件事。','Thanks for bringing that up.','感谢做某事：thanks for + -ing'],
      ['她提出了关于安全的一个担忧。','She brought up a concern about safety.','过去式：brought；关于安全的担忧：a concern about safety',["She brought a concern about safety up."]],
      ['我们现在需要提这件事吗？','Do we need to bring it up now?','它放在中间：it；现在：now'],
      ['请在电话里提一下时间安排。','Please bring up the schedule on the call.','时间安排：the schedule；电话里：on the call',["Please bring the schedule up on the call."]],
      ['我不想在大家面前提出这件事。',"I don't want to bring it up in front of everyone.",'大家面前：in front of everyone'],
      ['谁先提起了这个想法？','Who first brought up the idea?','谁先：who first；这个想法：the idea',["Who brought up the idea first?"]],
      ['他在讨论中提出了成本的问题。','He brought up the cost during the discussion.','成本：the cost；讨论中：during the discussion'],
      ['如果没人提，我们再提出这些问题。',"We'll bring up these questions if no one else does.",'这些问题：these questions；如果别人不提：if no one else does'],
      ['我很高兴你提起了这件事。',"I'm glad you brought it up.",'很高兴：be glad；提起了它：brought it up']
    ]),
    make('w-same-page','确认彼此理解一致','be on the same page','be on the same page about + 事情',
      '确认大家对目标、要求或安排有相同理解时用 on the same page。通常用于继续行动前的对齐。',
      '不是要求每个人观点完全相同，而是确认对当前事情的理解和预期一致；page 用单数。',[
      ['我们对优先事项的理解一致吗？','Are we on the same page about the priorities?','优先事项：the priorities'],
      ['我想确保我们对截止日期的理解一致。','I want to make sure we are on the same page about the deadline.','确保：make sure；截止日期：the deadline',["I want to make sure we're on the same page about the deadline."]],
      ['她和客户对下一步的理解一致。','She and the client are on the same page about the next steps.','下一步：the next steps'],
      ['我们对预算的理解并不一致。','We are not on the same page about the budget.','不一致：are not；预算：the budget',["We're not on the same page about the budget.","We aren't on the same page about the budget."]],
      ['大家对各自的职责都理解一致了吗？','Is everyone on the same page about their responsibilities?','大家：everyone；各自的职责：their responsibilities'],
      ['我们现在对时间安排的理解一致了。','We are on the same page about the schedule now.','时间安排：the schedule；现在：now',["We're on the same page about the schedule now."]],
      ['先确保双方对范围的理解一致。','First, make sure both sides are on the same page about the scope.','双方：both sides；范围：the scope'],
      ['你和本对这个决定的理解一致吗？','Are you and Ben on the same page about the decision?','你和本：you and Ben；决定：the decision'],
      ['看起来我们对目标的理解一致。','It looks like we are on the same page about the goals.','看起来：it looks like；目标：the goals',["It looks like we're on the same page about the goals."]],
      ['在开始之前，我们需要对预期达成一致理解。','We need to be on the same page about expectations before we start.','预期：expectations；开始之前：before we start']
    ]),
    make('w-on-board','愿意支持或参与某个计划','be on board with something','be on board with + 想法 / 计划 / 做法',
      '表示愿意接受并支持某项安排，比单纯听懂多了一层参与或配合的意思。常用于征求团队支持。',
      'on board 在这里不是登上交通工具；了解一致可用 on the same page，支持计划可用 on board。',[
      ['我支持这个计划。',"I'm on board with the plan.",'计划：the plan'],
      ['团队支持这个新做法吗？','Is the team on board with the new approach?','团队：the team；新做法：the new approach'],
      ['她完全支持这个想法。',"She's fully on board with the idea.",'完全：fully；想法：the idea',["She is fully on board with the idea."]],
      ['我们还不支持这个提议。',"We're not on board with the proposal yet.",'还没：not…yet；提议：the proposal',["We are not on board with the proposal yet.","We aren't on board with the proposal yet."]],
      ['客户支持这些改动。','The client is on board with the changes.','客户：the client；改动：the changes'],
      ['大家都愿意配合这个时间安排吗？','Is everyone on board with the schedule?','大家：everyone；时间安排：the schedule'],
      ['我支持先从小范围开始这个想法。',"I'm on board with the idea of starting small.",'先小范围开始这个想法：the idea of starting small'],
      ['他们完全支持这项决定。','They are fully on board with the decision.','他们：they；决定：the decision',["They're fully on board with the decision."]],
      ['你支持这个折中方案吗？','Are you on board with the compromise?','折中方案：the compromise'],
      ['本并不支持这个改变。','Ben is not on board with the change.','这个改变：the change',["Ben isn't on board with the change."]]
    ]),
    make('w-concern','有具体顾虑，需要继续讨论','have concerns about something','have / has concerns about + 事情',
      '对风险、可行性或影响有顾虑时，用 have concerns about 能直接指出需要讨论的对象，适合评估方案。',
      'concerns 是顾虑，不是已经证实的错误。与情绪上的 worried 相比，这种说法更突出有待处理的考虑。',[
      ['我对这个时间安排有顾虑。','I have concerns about the schedule.','时间安排：the schedule'],
      ['她对数据安全有顾虑。','She has concerns about data security.','第三人称：has；数据安全：data security'],
      ['你对这份合同有任何顾虑吗？','Do you have any concerns about the contract?','任何：any；合同：the contract'],
      ['我们对在没有测试的情况下继续推进有顾虑。','We have concerns about moving forward without testing.','推进：moving forward；没有测试：without testing'],
      ['客户对成本有一些顾虑。','The client has some concerns about the cost.','一些：some；成本：the cost'],
      ['我理解你对工作量的顾虑。','I understand your concerns about the workload.','理解：understand；工作量：the workload'],
      ['他们对长期维护有顾虑。','They have concerns about long-term maintenance.','长期维护：long-term maintenance'],
      ['本对在周末上线有顾虑。','Ben has concerns about launching over the weekend.','上线：launching；周末期间：over the weekend'],
      ['团队对这个供应商有顾虑吗？','Does the team have concerns about the supplier?','团队：the team；供应商：the supplier'],
      ['我们对这些结果的准确性有严重顾虑。','We have serious concerns about the accuracy of these results.','严重：serious；结果的准确性：the accuracy of these results']
    ]),
    make('w-missing','请对方指出自己是否遗漏了什么','Am I missing anything?','Am I missing anything?',
      '概述信息、核对清单或提出分析后，用这个问题邀请别人补充。anything 可以指漏掉的信息、步骤或考虑因素。',
      '语气应保持开放；若带质问语气，也可能听起来像在挑战对方。不是询问某人是否想念某件事。',[
      ['你列出了发布前要做的事，想请同事补充。问：我漏掉什么了吗？','Am I missing anything?','遗漏：missing；任何事情：anything'],
      ['你总结了客户的要求，想确认是否完整。问：我漏掉什么了吗？','Am I missing anything?','疑问开头：am I'],
      ['你讲完对成本的分析，想知道有没有忽略的因素。问：我漏掉什么了吗？','Am I missing anything?','遗漏：missing'],
      ['你核对好会议要带的材料，请同事检查。问：我漏掉什么了吗？','Am I missing anything?','不确定是否有遗漏：anything'],
      ['你复述了交接事项，邀请前任补充。问：我漏掉什么了吗？','Am I missing anything?','现在进行形式：am…missing'],
      ['你列好报销所需的文件，向财务确认。问：我漏掉什么了吗？','Am I missing anything?','疑问开头：am I'],
      ['你解释了故障原因，想听取不同观察。问：我漏掉什么了吗？','Am I missing anything?','遗漏：missing'],
      ['你讲完活动筹备进展，想检查有无空缺。问：我漏掉什么了吗？','Am I missing anything?','任何事情：anything'],
      ['你核对新员工入职流程，请负责人补充。问：我漏掉什么了吗？','Am I missing anything?','疑问开头：am I'],
      ['你归纳了双方的分歧，想确认是否全面。问：我漏掉什么了吗？','Am I missing anything?','遗漏：missing']
    ])
  ];
})();
