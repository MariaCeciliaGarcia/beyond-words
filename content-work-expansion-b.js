'use strict';
window.JUJIAN_WORK_MORE_B = (() => {
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
    make('w-put-together','整理制作成一份完整成果','put something together','put together + 方案 / 材料；put + it / them + together',
      '把所需信息、材料或人员组织起来，形成报告、方案或团队，用 put together。适合描述准备和整合工作。',
      '重点是组合成完整成果，不只是把东西放在一起；it / them 放在 put 和 together 之间。put 的过去式仍是 put。',[
      ['我会整理出一份简短的报告。',"I'll put together a short report.",'简短报告：a short report',["I'll put a short report together.","I will put a short report together."]],
      ['她为新员工整理了一份指南。','She put together a guide for new employees.','指南：a guide；新员工：new employees'],
      ['我们需要组建一个小团队。','We need to put together a small team.','小团队：a small team'],
      ['你能为会议准备一份提案吗？','Could you put together a proposal for the meeting?','提案：a proposal；为会议：for the meeting'],
      ['我已经把它整理好了。',"I've already put it together.",'已经：already；它放中间：it'],
      ['他们整理了一份常见问题清单。','They put together a list of common questions.','常见问题清单：a list of common questions'],
      ['我们会为客户准备一个演示。',"We'll put together a demo for the client.",'演示：a demo；客户：the client'],
      ['请把这些材料整合起来。','Please put these materials together.','这些材料：these materials',["Please put together these materials."]],
      ['本正在整理本季度的总结。','Ben is putting together a summary of this quarter.','正在整理：is putting together；本季度总结：a summary of this quarter'],
      ['你用了多久把它们整理好？','How long did it take you to put them together?','用了多久：how long did it take you；它们：them']
    ]),
    make('w-set-up','建立或配置可供使用的东西','set something up','set up + 系统 / 账户 / 设备；set + it + up',
      '让账户、系统、设备或安排从没有到可以使用，用 set up。既能指建立，也能指配置与准备。',
      'set up 是动词短语，setup 是名词或形容词；代词放中间。配置设备、建立账户都可用；安排会议也可说 set up a meeting。',[
      ['你能帮我设置这个账户吗？','Could you help me set up this account?','帮助：help me；这个账户：this account',["Could you help me set this account up?"]],
      ['我们为咨询设立了一个共享邮箱。','We set up a shared inbox for inquiries.','共享邮箱：a shared inbox；咨询：inquiries',["We set up a shared inbox for enquiries."]],
      ['她正在设置投影仪。','She is setting up the projector.','正在设置：is setting up；投影仪：the projector',["She's setting up the projector."]],
      ['我会在午饭前把它设置好。',"I'll set it up before lunch.",'它放中间：it；午饭前：before lunch'],
      ['我们需要建立一个简单的预订系统。','We need to set up a simple booking system.','简单的预订系统：a simple booking system'],
      ['他们在展会上搭建了一个展位。','They set up a stand at the trade fair.','展位：a stand；展会：the trade fair',["They set up a booth at the trade fair."]],
      ['请为新团队建一个共享文件夹。','Please set up a shared folder for the new team.','共享文件夹：a shared folder'],
      ['你设置好打印机了吗？','Have you set up the printer?','完成时：have you set up；打印机：the printer',["Have you set the printer up?"]],
      ['我们正在建立一个反馈渠道。','We are setting up a feedback channel.','反馈渠道：a feedback channel'],
      ['这个应用会帮你设置自动提醒。','This app will help you set up automatic reminders.','自动提醒：automatic reminders']
    ]),
    make('w-take-over','从别人手中接管工作','take over something / take over from someone','take over + 工作；take over from + 人',
      '原来由别人负责的工作改由自己接管，用 take over。可说明接管什么，或从谁手上接管。',
      'take over 强调接手的一方，hand over 强调移交的一方；take over from someone 中 from 引出原负责人。',[
      ['我会接管这个项目。',"I'll take over the project.",'这个项目：the project'],
      ['她下个月会接替本。','She will take over from Ben next month.','接替本：take over from Ben；下个月：next month',["She'll take over from Ben next month."]],
      ['你能接手客户沟通吗？','Could you take over the client communication?','客户沟通：the client communication'],
      ['他休假时我接管了他的工作。','I took over his work while he was on leave.','过去式：took；休假：on leave'],
      ['我们需要有人接手这个账户。','We need someone to take over this account.','有人做：someone to；账户：this account'],
      ['谁来接替她？','Who will take over from her?','谁：who；接替她：take over from her'],
      ['新团队已经接管了日常运营。','The new team has taken over daily operations.','完成时：has taken over；日常运营：daily operations'],
      ['我准备好接手了。',"I'm ready to take over.",'准备好：be ready to'],
      ['她会在培训之后接管排班。','She will take over the scheduling after training.','排班：the scheduling；培训后：after training',["She'll take over the scheduling after training."]],
      ['我接替这位经理之前，需要一次交接。','I need a handover before I take over from the manager.','一次交接：a handover；之前：before']
    ]),
    make('w-step-in','需要时介入帮忙或处理','step in','step in to + 动词；step in when + 情况',
      '出现空缺、困难或需要干预的情况时，主动介入，用 step in。可以临时帮忙，也可以介入解决问题。',
      '不一定接管整项长期职责；需要时介入是 step in，正式接替原负责人可用 take over。',[
      ['我可以介入帮忙解决这个问题。','I can step in to help resolve the issue.','解决问题：help resolve the issue'],
      ['负责人必须介入以制止争论。','The manager had to step in to stop the argument.','必须：had to；制止争论：stop the argument'],
      ['你不在时谁能介入帮忙？','Who can step in when you are away?','你不在时：when you are away',["Who can step in when you're away?"]],
      ['她主动介入，帮忙组织这场活动。','She stepped in to help organize the event.','过去式：stepped；组织活动：organize the event',["She stepped in to help organise the event."]],
      ['如果需要，我们会介入。',"We'll step in if needed.",'如果需要：if needed',["We will step in if it is needed."]],
      ['感谢你这么快介入帮忙。','Thanks for stepping in so quickly.','感谢：thanks for + -ing；这么快：so quickly'],
      ['培训师介入并解释了规则。','The trainer stepped in and explained the rules.','培训师：the trainer；解释规则：explained the rules'],
      ['我不想太早介入。',"I don't want to step in too early.",'太早：too early'],
      ['客户开始生气时，她介入处理了。','She stepped in when the customer became angry.','变得生气：became angry'],
      ['我们需要有人介入协调这次讨论。','We need someone to step in and coordinate the discussion.','有人：someone；协调讨论：coordinate the discussion']
    ]),
    make('w-follow-through','把承诺或计划贯彻到底','follow through on something','follow through on + 承诺 / 计划 / 决定',
      '作出承诺或决定后，继续采取行动直至落实，用 follow through on。适合讨论可靠性和执行情况。',
      '不是 follow up 的再次联系或追问；follow through 关注是否真的把承诺做完。',[
      ['我们需要兑现我们的承诺。','We need to follow through on our promises.','我们的承诺：our promises'],
      ['她总会兑现自己的承诺。','She always follows through on her commitments.','总是：always；承诺：her commitments'],
      ['他没有落实那个计划。','He did not follow through on the plan.','没有：did not；计划：the plan',["He didn't follow through on the plan."]],
      ['我会把我们谈过的行动事项落实到底。',"I'll follow through on the actions we discussed.",'行动事项：the actions；谈过的：we discussed'],
      ['他们兑现了提供额外支持的承诺。','They followed through on their promise to provide extra support.','提供额外支持的承诺：their promise to provide extra support'],
      ['我们能指望他把这个决定落实吗？','Can we count on him to follow through on this decision?','指望他：count on him；决定：this decision'],
      ['经理表扬她兑现了自己的承诺。','The manager praised her for following through on her commitments.','表扬：praised her for；承诺：her commitments'],
      ['仅仅同意还不够，我们必须落实这个计划。','Agreeing is not enough; we must follow through on the plan.','仅仅同意还不够：agreeing is not enough；必须：must'],
      ['我已经兑现了降低费用的承诺。','I have followed through on my promise to reduce costs.','降低费用：reduce costs；完成时：have followed through'],
      ['你会兑现那个承诺吗？','Will you follow through on that promise?','那个承诺：that promise']
    ]),
    make('w-work-out','商定或理清具体细节','work out the details','work out the details of + 安排 / 协议',
      '大方向已有，但时间、分工等细节还要一起理清或商定，可以说 work out the details。',
      'work out 也有锻炼等意思；这里的宾语 details 表明是在把具体安排弄清楚，不是 workout 这个名词。',[
      ['我们还需要商定这次交接的细节。','We still need to work out the details of the handover.','还需要：still need to；交接：the handover'],
      ['我会和她商定细节。',"I'll work out the details with her.",'和她：with her'],
      ['他们已经商定了协议的细节。','They have worked out the details of the agreement.','协议：the agreement；完成时：have worked out'],
      ['我们能明天理清这些细节吗？','Could we work out the details tomorrow?','明天：tomorrow'],
      ['我们来商定付款安排的细节吧。',"Let's work out the details of the payment arrangement.",'付款安排：the payment arrangement',["Let us work out the details of the payment arrangement."]],
      ['本正在和供应商商定细节。','Ben is working out the details with the supplier.','正在：is working out；供应商：the supplier'],
      ['我们需要在签字前商定细节。','We need to work out the details before signing.','签字前：before signing'],
      ['她帮我们理清了行程的细节。','She helped us work out the details of the trip.','帮我们：helped us；行程：the trip'],
      ['谁来商定安装的细节？','Who will work out the details of the installation?','安装：the installation'],
      ['我们尚未商定培训的细节。','We have not worked out the details of the training yet.','尚未：have not…yet；培训：the training',["We haven't worked out the details of the training yet."]]
    ]),
    make('w-narrow-down','逐步缩小选择或调查范围','narrow something down','narrow down + 范围；narrow + it / them + down to + 剩余选项',
      '选项或可能原因太多时，通过筛选让范围变小，用 narrow down。可以说明缩小到几个或哪几个。',
      '表示减少范围，尚不一定作出最后决定；代词放中间，to 引出筛选后留下的范围。',[
      ['我们需要缩小选项范围。','We need to narrow down the options.','选项：the options',["We need to narrow the options down."]],
      ['她把名单缩小到三名候选人。','She narrowed the list down to three candidates.','名单：the list；三名候选人：three candidates',["She narrowed down the list to three candidates."]],
      ['你能把它缩小到两个选项吗？','Could you narrow it down to two options?','它放中间：it；两个选项：two options'],
      ['我们已经把搜索范围缩小到这一地区。','We have narrowed the search down to this area.','搜索：the search；这一地区：this area',["We've narrowed the search down to this area.","We have narrowed down the search to this area."]],
      ['测试应该能帮我们缩小可能原因的范围。','The tests should help us narrow down the possible causes.','可能原因：the possible causes'],
      ['他们还没有缩小名单范围。','They have not narrowed down the list yet.','尚未：have not…yet；名单：the list',["They haven't narrowed down the list yet."]],
      ['我们先把它们缩小到三个吧。',"Let's narrow them down to three first.",'它们放中间：them；先：first',["Let us narrow them down to three first."]],
      ['预算帮助我们缩小了场地选择范围。','The budget helped us narrow down the venue options.','场地选择：the venue options'],
      ['我们能按地点缩小搜索范围吗？','Could we narrow down the search by location?','按地点：by location；搜索：the search'],
      ['我已经把选择缩小到两家供应商。','I have narrowed the choice down to two suppliers.','选择：the choice；两家供应商：two suppliers',["I've narrowed the choice down to two suppliers.","I have narrowed down the choice to two suppliers."]]
    ]),
    make('w-rule-out','排除某个可能或选项','rule something out','rule out + 可能；rule + it / them + out',
      '根据证据或条件，把某种可能或选项排除，用 rule out。不能排除时，表示它仍值得考虑。',
      '排除不等于暂时不选；cannot rule out 说明仍有可能，不是断言一定会发生。代词放中间。',[
      ['我们还不能排除人为失误。',"We can't rule out human error yet.",'人为失误：human error；还不能：cannot…yet'],
      ['测试结果排除了网络故障。','The test results ruled out a network failure.','测试结果：the test results；网络故障：a network failure'],
      ['先别排除那个选项。','Do not rule out that option yet.','先别：do not…yet；那个选项：that option',["Don't rule out that option yet."]],
      ['我们可以排除它吗？','Can we rule it out?','它放中间：it'],
      ['预算已经排除了更大的场地。','The budget has ruled out a larger venue.','更大的场地：a larger venue；完成时：has ruled out'],
      ['她不想排除任何可能性。','She does not want to rule out any possibilities.','任何可能性：any possibilities',["She doesn't want to rule out any possibilities."]],
      ['我们已经排除了这两种原因。','We have ruled out both causes.','这两种原因：both causes',["We've ruled out both causes."]],
      ['现有证据不足以排除它们。','The evidence is not enough to rule them out.','证据：the evidence；它们放中间：them'],
      ['他们没有排除延期的可能性。','They have not ruled out a delay.','延期：a delay；没有：have not',["They haven't ruled out a delay."]],
      ['这项要求排除了我们原来的供应商。','This requirement rules out our original supplier.','这项要求：this requirement；原来的供应商：our original supplier']
    ]),
    make('w-double-check','请对方再核对关键信息','Could you double-check…?','Could you double-check + 信息？；Could you double-check that / whether + 完整句子？',
      '付款、发送或操作前，请对方再核实关键细节。可以直接指出要查的信息，也可以用 that 或 whether 从句说清要确认的情况。',
      '请求对方复核，不表示已认定对方出错。whether / if 问是否成立；that 引出希望核实的具体情况。从句都用陈述语序。',[
      ['准备汇报数字，请同事帮忙：你能再核对一下这些数字吗？','Could you double-check these figures?','这些数字：these figures'],
      ['付款前请同事复核：你能在付款前再核对一下银行信息吗？','Could you double-check the bank details before making the payment?','银行信息：the bank details；付款前：before making the payment'],
      ['分享文件前问负责人：你能再确认一下每个人都有访问权限吗？','Could you double-check that everyone has access?','每个人都有访问权限：everyone has access',['Could you double-check everyone has access?','Please double-check that everyone has access.','Please double-check everyone has access.']],
      ['准备发货，问同事：你能再核对一下送货地址吗？','Could you double-check the delivery address?','送货地址：the delivery address'],
      ['订会场前请人确认：你能再核实一下房间是否可用吗？','Could you double-check whether the room is available?','房间是否可用：whether the room is available',['Could you double-check if the room is available?']],
      ['准备发邀请，向同事确认：你能再核对一下日期吗？','Could you double-check the dates?','日期：the dates'],
      ['发送邮件前请求：你能在发送前再核对一下附件吗？','Could you double-check the attachments before sending?','附件：the attachments；发送前：before sending',['Please double-check the attachments before sending.']],
      ['离开工位前请求：你能再确认一下机器已经关掉了吗？','Could you double-check that the machine is off?','机器已经关掉：the machine is off',['Could you double-check the machine is off?']],
      ['办理登记时请人帮忙：能再核对一下名字的拼写吗？','Could you double-check the spelling of the name?','名字的拼写：the spelling of the name',['Could we double-check the spelling of the name?']],
      ['准备提交报告，问同事：你能再确认一下我们用的是最新版本吗？','Could you double-check that we are using the latest version?','最新版本：the latest version',["Could you double-check that we're using the latest version?",'Could you double-check we are using the latest version?',"Could you double-check we're using the latest version?"]]
    ]),
    make('w-flag','提醒对方留意某个重要事项','draw someone’s attention to…','draw + 人的 attention + to + 事情',
      '把某个重要事项明确提出来，请对方留意。比简单的 look at 更正式，适合说明风险、差异或容易漏掉的内容。',
      'to 是介词，后面接要留意的内容。可以说 draw your attention to 或 draw the team’s attention to；重点是引起注意，不保证问题已解决。',[
      ['我想请你注意一个潜在风险。',"I'd like to draw your attention to a potential risk.",'你的注意：your attention；潜在风险：a potential risk'],
      ['感谢你提醒我们注意这个问题。','Thanks for drawing our attention to this issue.','提醒我们注意：drawing our attention；这个问题：this issue'],
      ['她提醒负责人注意这处错误。',"She drew the manager's attention to the error.",'过去式：drew；负责人的注意：the manager’s attention'],
      ['请提醒大家注意缺失的信息。',"Please draw everyone's attention to the missing information.",'大家的注意：everyone’s attention；缺失的信息：the missing information'],
      ['我会提醒法务团队注意这件事。',"I'll draw the legal team's attention to it.",'法务团队的注意：the legal team’s attention'],
      ['我们需要尽早提醒大家注意时间冲突。',"We need to draw everyone's attention to the scheduling conflict early.",'时间冲突：the scheduling conflict'],
      ['他已经提醒我们注意费用差异。',"He has drawn our attention to the difference in costs.",'过去分词：drawn；费用差异：the difference in costs'],
      ['你能提醒她注意这些要求吗？','Could you draw her attention to these requirements?','她的注意：her attention；这些要求：these requirements'],
      ['请提醒团队注意这个变化。',"Please draw the team's attention to this change.",'团队的注意：the team’s attention；变化：this change'],
      ['他们在发布前提醒我们注意一个安全问题。','They drew our attention to a safety issue before the launch.','安全问题：a safety issue；发布前：before the launch']
    ])
  ];
})();
