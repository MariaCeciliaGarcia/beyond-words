'use strict';
window.JUJIAN_WORK_MORE_C = (() => {
  // Contract auxiliary have only; lexical have/to is not a general 've form.
  const mayShorten = (text, full) => {
    if(!/ have$/.test(full))return true;
    const match=new RegExp('\\b'+full+'\\s+(.+)').exec(text);
    return !!match && /^(?:(?:already|just|not|never)\s+)*(?:attached|booked|bought|changed|checked|committed|completed|contacted|decided|double-checked|finished|followed|found|got|gotten|had|heard|left|made|narrowed|opened|put|read|received|resolved|ruled|run|sent|taken|tested|worked|written)\b/.test(match[1]);
  };

  const make = (...args) => {
    const u = window.JUJIAN_BUILD('work-expansion', ...args);
    u.domain = 'work';
    const pairs = [["I'm",'I am'],["I'll",'I will'],["We're",'We are'],["We'll",'We will'],["I've",'I have'],["We've",'We have'],["I'd",'I would'],["don't",'do not'],["can't",'cannot']];
    for (const q of [...u.learning,...u.review]) { const a = new Set(q.answers); for (const [x,y] of pairs) for (const s of [...a]) { if(new RegExp('\\b'+x+'\\b').test(s))a.add(s.replace(new RegExp('\\b'+x+'\\b','g'),y)); if(mayShorten(s,y) && new RegExp('\\b'+y+'\\b').test(s))a.add(s.replace(new RegExp('\\b'+y+'\\b','g'),x)); } q.answers = [...a]; }
    u.entry = {...u.learning[0],id:'entry'};
    return u;
  };
  return [
    make('w-tied-up','正忙于某事，暂时抽不开身','be tied up with something','be tied up with + 当前占用时间的事情',
      '临时被工作或事务占住时间，不能马上处理另一件事时，用 be tied up。可以说明在忙什么，也可只说暂时抽不开身。',
      '强调当前无法腾身，不一定是整个团队长期满负荷；不是被绳子绑住的字面意思。',[
      ['我现在忙着处理一个客户问题，抽不开身。',"I'm tied up with a client issue right now.",'客户问题：a client issue；现在：right now'],
      ['她整个上午都在忙着开会。','She is tied up with meetings all morning.','会议：meetings；整个上午：all morning',["She's tied up with meetings all morning."]],
      ['我们眼下正忙着发布工作。',"We're tied up with the launch at the moment.",'发布工作：the launch；眼下：at the moment'],
      ['本现在抽不开身吗？','Is Ben tied up right now?','本：Ben；现在：right now'],
      ['我昨天忙着处理一次紧急维修。','I was tied up with an urgent repair yesterday.','过去状态：was；紧急维修：an urgent repair'],
      ['她现在忙于准备审计。','She is tied up with audit preparation right now.','审计准备：audit preparation',["She's tied up with audit preparation right now."]],
      ['抱歉，我目前抽不开身。',"Sorry, I'm tied up at the moment.",'抱歉：sorry；目前：at the moment'],
      ['我们明天要忙着搬办公室。',"We'll be tied up with the office move tomorrow.",'明天要：will be；搬办公室：the office move'],
      ['他刚才在忙着打电话。','He was tied up with a call.','过去状态：was；电话：a call'],
      ['如果你现在抽不开身，我可以稍后再来。','If you are tied up now, I can come back later.','如果：if；稍后再来：come back later',["If you're tied up now, I can come back later."]]
    ]),
    make('w-capacity','已满负荷，无法再加工作','be at capacity','人 / 团队 + be at capacity',
      '团队或个人目前能承担的工作已经排满，可用 at capacity 说明没有余力再接新任务。适合讨论资源与工作量。',
      '这里强调承载能力已满；不是仅仅此刻在忙。说明满负荷后，可以继续讨论优先顺序、分工或资源。',[
      ['我们的团队这周已经满负荷了。','Our team is at capacity this week.','我们的团队：our team；这周：this week'],
      ['我目前的工作已经排满了。',"I'm at capacity at the moment.",'目前：at the moment'],
      ['设计团队已经满负荷了吗？','Is the design team at capacity?','设计团队：the design team'],
      ['我们在旺季时处于满负荷状态。','We are at capacity during the busy season.','旺季期间：during the busy season'],
      ['她已经满负荷，不能再接一个项目了。','She is already at capacity and cannot take on another project.','已经：already；再接项目：take on another project',["She's already at capacity and can't take on another project.","She is already at capacity and can't take on another project."]],
      ['支持团队这整个月都满负荷。','The support team is at capacity all month.','支持团队：the support team；整个月：all month'],
      ['如果我们已经满负荷，就得重新安排优先顺序。','If we are at capacity, we need to reprioritize.','重新安排优先顺序：reprioritize',["If we're at capacity, we need to reprioritize.","If we are at capacity, we need to reprioritise."]],
      ['他们昨天告诉我，他们的团队已经满负荷了。','They told me yesterday that their team was at capacity.','告诉我：told me；过去状态：was'],
      ['在这次交接期间，我会处于满负荷状态。',"I'll be at capacity during the handover.",'交接期间：during the handover'],
      ['我们已经满负荷，需要额外支持。','We are at capacity and need extra support.','额外支持：extra support',["We're at capacity and need extra support."]]
    ]),
    make('w-take-on','接受新的工作或责任','take something on','take on + 工作 / 责任；take + it + on',
      '决定承担一项任务、角色或更多责任，用 take on。可用于主动争取机会，也可说明没有余力再接工作。',
      'take on 可以是全新的任务；take over 特别指从别人手上接管。代词作宾语时放在中间。',[
      ['我目前不能再接更多工作。',"I can't take on more work at the moment.",'更多工作：more work；目前：at the moment'],
      ['她愿意承担更多责任。','She is willing to take on more responsibility.','愿意：be willing to；更多责任：more responsibility',["She's willing to take on more responsibility."]],
      ['我们决定接下这个项目。','We decided to take on the project.','决定：decided to；项目：the project'],
      ['你确定自己能接下它吗？','Are you sure you can take it on?','你确定吗：are you sure；它放中间：it'],
      ['本去年接下了一个新角色。','Ben took on a new role last year.','过去式：took；新角色：a new role'],
      ['团队不应该接下超过自身能力的工作。','The team should not take on more than it can handle.','超过能处理的：more than it can handle',["The team shouldn't take on more than it can handle."]],
      ['我很高兴接下这个挑战。',"I'm happy to take on this challenge.",'很高兴：be happy to；挑战：this challenge'],
      ['她已经接下了培训新员工的任务。','She has taken on the task of training new staff.','培训新员工的任务：the task of training new staff'],
      ['你为什么接下了它？','Why did you take it on?','为什么过去式：why did you；它放中间：it'],
      ['我们需要先讨论，再承担新的职责。','We need to discuss this before taking on new responsibilities.','先讨论这个：discuss this；新职责：new responsibilities']
    ]),
    make('w-push-back','对提议或要求提出异议','push back on something','push back on + 提议 / 要求 / 决定',
      '认为某个要求或计划不合理，明确表达反对或要求重新考虑，用 push back on。比轻微保留意见更有力度。',
      'push back on a proposal 是提出异议；push back a deadline 是推迟截止时间，两者结构和意思不同。',[
      ['我们需要对这个不切实际的要求提出异议。','We need to push back on this unrealistic request.','不切实际的要求：this unrealistic request'],
      ['她对增加工作时间的提议提出了异议。','She pushed back on the proposal to extend working hours.','过去式：pushed；延长工作时间的提议：the proposal to extend working hours'],
      ['我想对这项改动提出异议。',"I'd like to push back on this change.",'这项改动：this change'],
      ['客户对新的收费提出了异议。','The client pushed back on the new fees.','新收费：the new fees'],
      ['我们能对这个决定提出异议吗？','Can we push back on this decision?','这个决定：this decision'],
      ['团队对周末工作的要求提出了异议。','The team pushed back on the requirement to work weekends.','周末工作的要求：the requirement to work weekends'],
      ['他没有对这个安排提出异议。','He did not push back on the arrangement.','没有：did not；安排：the arrangement',["He didn't push back on the arrangement."]],
      ['如果这个目标不现实，我们应该提出异议。','If this target is unrealistic, we should push back on it.','这个目标：this target；对它：on it'],
      ['供应商已经对这些条款提出了异议。','The supplier has pushed back on the terms.','条款：the terms；完成时：has pushed back'],
      ['我理解你为什么对这个提议提出异议。','I understand why you are pushing back on this proposal.','理解为什么：understand why；正在：are pushing back',["I understand why you're pushing back on this proposal."]]
    ]),
    make('w-trade-off','说明得到好处时需付出的代价','The trade-off is…','The trade-off is + 代价；The trade-off is that + 完整句子',
      '一个方案有优点，也要接受某个不足或代价时，用 The trade-off is 引出要牺牲的部分，帮助比较选择。',
      '不是单列缺点，而是说明为得到某种好处需要接受什么代价；名词 trade-off 通常带连字符。',[
      ['方案能更快完成。说明代价：代价是更高的成本。','The trade-off is a higher cost.','更高成本：a higher cost'],
      ['方案更便宜，但：代价是我们的灵活性会降低。','The trade-off is that we have less flexibility.','完整句子：we have less flexibility',["The trade-off is we have less flexibility."]],
      ['集中管理能提高一致性。说明：代价是决策速度更慢。','The trade-off is slower decision-making.','更慢的决策：slower decision-making'],
      ['远程办公省去通勤。说明：代价是面对面交流减少。','The trade-off is less face-to-face contact.','更少的面对面交流：less face-to-face contact'],
      ['小团队沟通更快。说明：代价是每个人的工作量更大。','The trade-off is a heavier workload for everyone.','每个人更大的工作量：a heavier workload for everyone'],
      ['我们可以更早交付。说明：代价是我们测试的时间会更少。','The trade-off is that we have less time for testing.','测试时间更少：we have less time for testing',["The trade-off is we have less time for testing."]],
      ['这条路线更省钱。说明：代价是交货时间更长。','The trade-off is a longer delivery time.','更长交货时间：a longer delivery time'],
      ['标准化流程更简单。说明：代价是可定制的选项更少。','The trade-off is fewer customization options.','更少的定制选项：fewer customization options',["The trade-off is fewer customisation options."]],
      ['升级能带来更多功能。说明：代价是上手更费力。','The trade-off is a steeper learning curve.','上手更费力：a steeper learning curve'],
      ['少招人可省预算。说明：代价是我们无法像以前那么快地处理请求。','The trade-off is that we cannot handle requests as quickly.','处理请求：handle requests；同样快：as quickly',["The trade-off is that we can't handle requests as quickly.","The trade-off is we cannot handle requests as quickly."]]
    ]),
    make('w-room','指出仍有改进或调整空间','There is room for…','There is room for + 改进 / 调整 / 协商',
      '不必把现状全盘否定，也可以说某方面仍有 room，表示有可能进一步改善、调整或商量。',
      '这里的 room 是不可数的“空间、余地”，不加 a，也不用复数 rooms；for 后放名词。',[
      ['这个设计还有改进空间。','There is room for improvement in this design.','改进：improvement；在这个设计中：in this design',["There's room for improvement in this design."]],
      ['时间安排还有调整余地吗？','Is there room for adjustment in the schedule?','调整：adjustment；时间安排：the schedule'],
      ['我们处理投诉的方式还有改进空间。','There is room for improvement in how we handle complaints.','处理投诉的方式：how we handle complaints',["There's room for improvement in how we handle complaints."]],
      ['这些条款还有协商余地。','There is room for negotiation on these terms.','协商：negotiation；这些条款：these terms',["There's room for negotiation on these terms."]],
      ['这个流程还有简化空间。','There is room for simplification in this process.','简化：simplification；流程：this process',["There's room for simplification in this process."]],
      ['我们在沟通方面还有改进空间。','There is room for improvement in our communication.','我们的沟通：our communication',["There's room for improvement in our communication."]],
      ['预算还有调整空间。','There is room for adjustment in the budget.','调整：adjustment；预算：the budget',["There's room for adjustment in the budget."]],
      ['两队之间还有进一步合作的空间。','There is room for further cooperation between the two teams.','进一步合作：further cooperation；两队之间：between the two teams',["There's room for further cooperation between the two teams."]],
      ['这个回复的语气还有改进空间。','There is room for improvement in the tone of this reply.','这个回复的语气：the tone of this reply',["There's room for improvement in the tone of this reply."]],
      ['这个角色还有发展空间。','There is room for growth in this role.','发展：growth；这个角色：this role',["There's room for growth in this role."]]
    ]),
    make('w-build-on','在已有成果或优势上继续推进','build on something','build on + 成果 / 优势 / 已有想法',
      '把已有的进展、经验或想法作为基础继续发展，用 build on。常用于提议下一步、反馈和团队讨论。',
      '不是从头重做，也不是字面上的盖楼；on 引出可以利用的已有基础。build 的过去式是 built。',[
      ['我们应该在已有的进展上继续推进。','We should build on the progress we have made.','已有的进展：the progress we have made',["We should build on the progress we've made."]],
      ['我想在你的想法上再补充一点。',"I'd like to build on your idea.",'你的想法：your idea'],
      ['她利用自己的经验进一步发展了这项服务。','She built on her experience to develop the service.','过去式：built；发展服务：develop the service'],
      ['新计划建立在我们的优势之上。','The new plan builds on our strengths.','新计划：the new plan；优势：our strengths'],
      ['我们怎样在这次成功的基础上继续发展？','How can we build on this success?','这次成功：this success'],
      ['培训是在你已有知识的基础上开展的。','The training builds on what you already know.','已有知识：what you already know'],
      ['我们来继续完善她的建议吧。',"Let's build on her suggestion.",'她的建议：her suggestion',["Let us build on her suggestion."]],
      ['他们在试点结果的基础上开发了新流程。','They built on the pilot results to develop a new process.','试点结果：the pilot results；新流程：a new process'],
      ['这个项目以我们现有的合作关系为基础继续推进。','This project builds on our existing partnership.','现有合作关系：our existing partnership'],
      ['我希望在上次的反馈基础上继续改进。','I hope to build on the feedback from last time.','上次的反馈：the feedback from last time']
    ]),
    make('w-credit','承认某人的贡献或长处','give someone credit for something','give + 人 + credit for + 贡献 / doing',
      '明确承认别人的贡献、努力或优点，可以说 give someone credit for。for 后说值得认可的具体事情。',
      'credit 指认可，不是借贷。give someone credit for 是承认别人的功劳；直接说 I give you credit… 有时像勉强认可，注意语气。take credit for 则是把功劳归给自己。',[
      ['我们应该认可她为解决这个问题作出的贡献。','We should give her credit for solving the problem.','认可她：give her credit；解决问题：solving the problem'],
      ['他肯定了团队付出的努力。','He gave the team credit for their hard work.','过去式：gave；辛勤工作：their hard work'],
      ['我要肯定你在压力下保持冷静这一点。','I give you credit for staying calm under pressure.','保持冷静：staying calm；压力下：under pressure'],
      ['请肯定本提出这个想法的贡献。','Please give Ben credit for the idea.','这个想法：the idea'],
      ['她认可了我为赶上截止日期作出的努力。','She gave me credit for meeting the deadline.','赶上截止日期：meeting the deadline'],
      ['我们不该忘记肯定支持团队的耐心。','We should not forget to give the support team credit for their patience.','别忘记：should not forget to；耐心：their patience',["We shouldn't forget to give the support team credit for their patience."]],
      ['我认可他承认错误这一点。','I give him credit for admitting the mistake.','承认错误：admitting the mistake'],
      ['经理肯定了她及时发现风险的贡献。','The manager gave her credit for spotting the risk early.','及时发现风险：spotting the risk early'],
      ['他们认可了我们改善流程的贡献。','They gave us credit for improving the process.','改善流程：improving the process'],
      ['你得肯定她愿意尝试这一点。','You have to give her credit for being willing to try.','你得：you have to；愿意尝试：being willing to try']
    ]),
    make('w-bear-with','请对方稍等，容我处理一下','Bear with me.','Bear with me + while + 需要时间做的事',
      '查资料、处理技术问题或暂时需要组织思路时，请对方给自己一点耐心，可以说 Bear with me。',
      'bear 是“耐心容忍”，不是 bare；单独说时让对方短暂等待，接 while 可说明等待的原因。',[
      ['你正在查一条信息。请对方稍等：稍等我一下。','Bear with me.','耐心等我：bear with me'],
      ['请稍等我查一下记录。','Please bear with me while I check the records.','我查记录时：while I check the records'],
      ['请稍等我打开这个文件。','Bear with me while I open the file.','打开文件：open the file'],
      ['请稍等我整理一下思路。','Bear with me while I gather my thoughts.','整理思路：gather my thoughts'],
      ['请稍等我修复这个连接问题。','Please bear with me while I fix the connection.','修复连接：fix the connection'],
      ['你演示时软件卡住了。请大家耐心等你：稍等我一下。','Bear with me.','耐心等我：bear with me'],
      ['请稍等我找一下那封邮件。','Bear with me while I find that email.','那封邮件：that email'],
      ['请稍等我确认一下价格。','Please bear with me while I confirm the price.','确认价格：confirm the price'],
      ['请稍等我重新启动电脑。','Bear with me while I restart my computer.','重新启动电脑：restart my computer'],
      ['请稍等我接通正确的部门。','Please bear with me while I connect you to the right department.','把你接通到：connect you to；正确部门：the right department']
    ]),
    make('w-to-be-clear','明确强调自己的真实意思','To be clear, …','To be clear, + 完整句子',
      '担心自己的立场、要求或承诺被误解时，用 To be clear 引出需要明确的重点。常用于纠正误解或清楚划定界线。',
      '不必每次说明都加这个开头；语气较直接，反复使用可能显得不耐烦。比 Just to clarify 更常突出说话人明确的立场。',[
      ['澄清你的立场：说清楚一点，我并不是要求你周末工作。',"To be clear, I'm not asking you to work weekends.",'并不是要求：am not asking；周末工作：work weekends',["To be clear, I am not asking you to work on weekends.","To be clear, I'm not asking you to work on weekends."]],
      ['明确要求：说清楚一点，所有访客都必须登记。','To be clear, all visitors must sign in.','所有访客：all visitors；登记：sign in'],
      ['纠正误解：说清楚一点，这还不是最终决定。','To be clear, this is not the final decision.','最终决定：the final decision',["To be clear, this isn't the final decision."]],
      ['强调你的意思：说清楚一点，我支持这个目标。','To be clear, I support the goal.','支持：support；这个目标：the goal'],
      ['明确安排：说清楚一点，参加是自愿的。','To be clear, attendance is optional.','参加：attendance；自愿的：optional'],
      ['澄清承诺：说清楚一点，我们还没有承诺日期。','To be clear, we have not committed to a date yet.','承诺日期：commit to a date；还没有：have not…yet',["To be clear, we haven't committed to a date yet."]],
      ['明确底线：说清楚一点，安全是第一位的。','To be clear, safety comes first.','安全：safety；第一位：comes first'],
      ['纠正误解：说清楚一点，我说的是流程，不是你个人。','To be clear, I am talking about the process, not you personally.','说的是流程：talking about the process；你个人：you personally',["To be clear, I'm talking about the process, not you personally."]],
      ['明确状态：说清楚一点，这份文件仍然是草稿。','To be clear, this document is still a draft.','这份文件：this document；仍是草稿：is still a draft'],
      ['澄清目的：说清楚一点，我们需要的是反馈，不是批准。','To be clear, we need feedback, not approval.','反馈：feedback；批准：approval']
    ])
  ];
})();
