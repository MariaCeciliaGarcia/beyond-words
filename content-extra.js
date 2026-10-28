window.JUJIAN_EXTRA = [
  {
    id: 'ever',
    meaning: '问有没有过某种经历',
    expression: 'Have / Has … ever + 过去分词…?',
    formula: 'Have + I / you / we / they + ever + 过去分词…?；Has + he / she + ever + 过去分词…?',
    explanation: '询问到现在为止是否有过某种经历。问不同的人时，留意 have 和 has 的变化。',
    boundary: '问到现在为止的经历。若要问某次事情何时发生，改用一般过去时；现在完成时通常不与 yesterday 等明确过去时间搭配。',
    checkpoint: '主语是 he / she 时用 has；have / has 后的主要动词用过去分词。',
    examples: [
      { en: 'Have you ever travelled alone?', zh: '你有没有独自旅行过？' },
      { en: 'Has she ever tried yoga?', zh: '她有没有尝试过瑜伽？' }
    ],
    entry: { id: 'entry', zh: '你有没有独自旅行过？', answers: ['Have you ever travelled alone?', 'Have you ever traveled alone?'], hint: '独自旅行：travel alone；travel 过去分词：travelled / traveled' },
    learning: [
      { id: 'l1', zh: '她有没有尝试过瑜伽？', answers: ['Has she ever tried yoga?'], hint: '尝试瑜伽：try yoga\ntry 的过去分词：tried\n她：she；与 has 搭配', frame: 'Has + she + ever + 过去分词…?' },
      { id: 'l2', zh: '他们有没有独自旅行过？', answers: ['Have they ever travelled alone?', 'Have they ever traveled alone?'], hint: '他们：they\n独自旅行：travel alone\ntravel 的过去分词：travelled / traveled', frame: 'Have + they + ever + 过去分词…?' },
      { id: 'l3', zh: '你有没有误过飞机？', answers: ['Have you ever missed a flight?'], hint: '误过飞机：miss a flight\nmiss 的过去分词：missed', frame: 'Have + you + ever + 过去分词…?' },
      { id: 'l4', zh: '他有没有去过日本？', answers: ['Has he ever been to Japan?'], hint: '他：he；与 has 搭配\n去过某地：been to + 地点\n日本：Japan', frame: 'Has + he + ever + 过去分词…?' },
      { id: 'l5', zh: '我们以前有没有吃过泰国菜？', answers: ['Have we ever eaten Thai food?', 'Have we ever tried Thai food?'], hint: '我们：we\n泰国菜：Thai food\neat / try 的过去分词：eaten / tried', frame: 'Have + we + ever + 过去分词…?' }
    ],
    review: [
      { id: 'r1', zh: '你有没有尝试过滑雪？', answers: ['Have you ever tried skiing?'], hint: '尝试滑雪：try skiing\ntry 的过去分词：tried' },
      { id: 'r2', zh: '她有没有独自去电影院看过电影？', answers: ['Has she ever been to the cinema alone?', 'Has she ever gone to the movies alone?', 'Has she ever gone to the cinema alone?', 'Has she ever been to the movies alone?'], hint: '她：she；与 has 搭配\n去电影院看电影：go to the cinema / the movies\n去过的经历：been to；独自：alone', frame: 'Has + she + ever + 过去分词…?' },
      { id: 'r3', zh: '你有没有错过末班公交车？', answers: ['Have you ever missed the last bus?'], hint: '末班公交车：the last bus\nmiss 的过去分词：missed', frame: 'Have + you + ever + 过去分词…?' },
      { id: 'r4', zh: '他有没有去过海边？', answers: ['Has he ever been to the seaside?', 'Has he ever been to the beach?'], hint: '他：he；与 has 搭配\n去过某地：been to + 地点\n海边：the seaside / the beach', frame: 'Has + he + ever + 过去分词…?' },
      { id: 'r5', zh: '我们以前有没有自己做过面包？', answers: ['Have we ever made our own bread?', 'Have we ever made bread ourselves?'], hint: '我们自己的面包：our own bread\n亲自：ourselves\nmake 的过去分词：made', frame: 'Have + we + ever + 过去分词…?' }
    ]
  },
  {
    id: 'rather',
    meaning: '说出这次更想做的选择',
    expression: "I'd / We'd / She'd rather + 动词原形…",
    formula: '主语 + would rather + 动词原形…；I would 可缩写为 I’d。',
    explanation: '在眼前的选择中，说自己或某个人更愿意做什么。另一个选项可以由上文给出，不必每次都说 than。',
    boundary: 'would rather + 动词原形表达更愿意做什么；不愿意做时用 would rather not + 动词原形。另一个选项可以由上下文给出。',
    checkpoint: 'rather 后直接接动词原形，不在这个位置加 to，也不直接接名词。',
    examples: [
      { en: "I'd rather walk.", zh: '正在商量走路还是坐车：我更想走路。' },
      { en: "We'd rather eat at home.", zh: '正在商量出去吃还是在家吃：我们更想在家吃。' }
    ],
    entry: { id: 'entry', zh: '朋友提议坐车，你这次更想走路。说：我更想走路。', answers: ["I'd rather walk.", 'I would rather walk.'], hint: '步行：walk' },
    learning: [
      { id: 'l1', zh: '正在商量出去吃还是在家吃，说：我们更想在家吃。', answers: ["We'd rather eat at home.", 'We would rather eat at home.'], hint: '我们更愿意：we would rather / we’d rather\n在家吃：eat at home' },
      { id: 'l2', zh: '可以选茶或咖啡，你说：我更想喝茶。', answers: ["I'd rather have tea.", 'I would rather have tea.', "I'd rather drink tea.", 'I would rather drink tea.'], hint: '喝茶：have tea / drink tea\n我更愿意：I would rather / I’d rather' },
      { id: 'l3', zh: '朋友问她想出去还是待在家。你知道：她更想待在家。', answers: ["She'd rather stay at home.", 'She would rather stay at home.', "She'd rather stay home.", 'She would rather stay home.'], hint: '她更愿意：she would rather / she’d rather\n待在家：stay at home / stay home' },
      { id: 'l4', zh: '可以坐公交或走路，你们说：我们这次更想坐公交。', answers: ["We'd rather take the bus.", 'We would rather take the bus.'], hint: '坐公交：take the bus\n我们更愿意：we would rather / we’d rather' },
      { id: 'l5', zh: '问过他要现在走还是再等，转述：他更想再等一会儿。', answers: ["He'd rather wait a little longer.", 'He would rather wait a little longer.', "He'd rather wait a bit longer.", 'He would rather wait a bit longer.'], hint: '他更愿意：he would rather / he’d rather\n再等一会儿：wait a little longer / wait a bit longer' }
    ],
    review: [
      { id: 'r1', zh: '可以点外卖或自己做饭，你说：我更想自己做饭。', answers: ["I'd rather cook.", 'I would rather cook.', "I'd rather cook for myself.", 'I would rather cook for myself.'], hint: '做饭：cook\n为自己：for myself（可省略）' },
      { id: 'r2', zh: '他们在商量今天还是明天出发，转述：他们更想明天出发。', answers: ["They'd rather leave tomorrow.", 'They would rather leave tomorrow.'], hint: '他们更愿意：they would rather / they’d rather\n明天出发：leave tomorrow' },
      { id: 'r3', zh: '正在商量去电影院还是在家看，说：我们这次更想在家看电影。', answers: ["We'd rather watch a movie at home.", 'We would rather watch a movie at home.', "We'd rather watch a film at home.", 'We would rather watch a film at home.'], hint: '看电影：watch a movie / watch a film\n在家：at home' },
      { id: 'r4', zh: '她可以坐车或骑车去，转述：她这次更想骑车。', answers: ["She'd rather cycle.", 'She would rather cycle.', "She'd rather ride a bike.", 'She would rather ride a bike.'], hint: '骑车：cycle / ride a bike\n她更愿意：she would rather / she’d rather' },
      { id: 'r5', zh: '朋友问要坐室内还是室外，你说：我更想坐外面。', answers: ["I'd rather sit outside.", 'I would rather sit outside.'], hint: '坐在外面：sit outside\n我更愿意：I would rather / I’d rather' }
    ]
  },
  {
    id: 'could-request',
    meaning: '请对方帮忙做件事',
    expression: 'Could you + 动词原形…?',
    formula: 'Could you + 动词原形 + 其他内容？',
    explanation: '请面前的人帮忙完成一个具体动作。这里的 could 用来提出请求，不是在叙述过去。',
    boundary: 'could 让请求语气较缓和；是否得体还取决于双方关系和事情给对方带来的负担。',
    checkpoint: '请求对方做事用 Could you，后面的动作直接用动词原形。',
    examples: [
      { en: 'Could you open the window?', zh: '你能把窗户打开吗？' },
      { en: 'Could you take a photo of us?', zh: '你能帮我们拍张照吗？' }
    ],
    entry: { id: 'entry', zh: '屋里有点闷，请对方把窗户打开。', answers: ['Could you open the window?', 'Could you please open the window?', 'Could you open the window, please?'], hint: '开窗：open the window' },
    learning: [
      { id: 'l1', zh: '桌上的盐离你有点远，请对方把盐递给你。', answers: ['Could you pass me the salt?', 'Could you please pass me the salt?', 'Could you pass me the salt, please?'], hint: '把盐递给我：pass me the salt\n盐：salt' },
      { id: 'l2', zh: '和朋友合影，请旁边的人帮你们拍张照。', answers: ['Could you take a photo of us?', 'Could you take a picture of us?', 'Could you please take a photo of us?'], hint: '拍照：take a photo / take a picture\n给我们拍：of us' },
      { id: 'l3', zh: '她的手里拿满了东西，请对方帮她开门。', answers: ['Could you open the door for her?', 'Could you please open the door for her?'], hint: '开门：open the door\n帮她：for her' },
      { id: 'l4', zh: '你在找地方坐，请对方把这个包挪一下。', answers: ['Could you move this bag?', 'Could you please move this bag?', 'Could you move this bag, please?'], hint: '挪动：move\n这个包：this bag' },
      { id: 'l5', zh: '打电话时想记下地址，请对方等一分钟。', answers: ['Could you wait a minute?', 'Could you please wait a minute?', 'Could you wait a minute, please?'], hint: '等一分钟：wait a minute\n请求语气：Could you…?' }
    ],
    review: [
      { id: 'r1', zh: '你够不到架子上的杯子，请对方把那个杯子递给你。', answers: ['Could you pass me that cup?', 'Could you please pass me that cup?'], hint: '递给我：pass me\n那个杯子：that cup' },
      { id: 'r2', zh: '屋里有点冷，请对方把窗户关上。', answers: ['Could you close the window?', 'Could you please close the window?', 'Could you close the window, please?'], hint: '关窗：close the window' },
      { id: 'r3', zh: '他们需要找前台，请对方帮他们指一下路。', answers: ['Could you show them the way to reception?', 'Could you show them the way to the front desk?', 'Could you please show them the way to the front desk?'], hint: '给他们指路：show them the way\n前台：reception / the front desk' },
      { id: 'r4', zh: '朋友答应给你地址，请他把地址发给你。', answers: ['Could you send me the address?', 'Could you please send me the address?', 'Could you send me the address, please?'], hint: '发给我：send me\n地址：the address' },
      { id: 'r5', zh: '你们正在搬东西，请对方把门扶住。', answers: ['Could you hold the door for us?', 'Could you please hold the door for us?'], hint: '把门扶住：hold the door\n帮我们：for us' }
    ]
  },
  {
    id: 'invite',
    meaning: '邀请对方参加活动或询问参加意愿',
    expression: 'Would + 人称 + like to + 动词原形…?',
    formula: 'Would + you / he / she / they + like to + 动词原形…?',
    explanation: '面对本人时，用 Would you like to…? 发出邀请；向熟悉情况的人询问第三人的意愿时，可以换成 he、she 或 they。',
    boundary: 'Would you like to…? 邀请对方做事；Would you like + 名词可用来提供东西。问平时的喜好用 Do you like…?',
    checkpoint: 'would 后接主语，like 后保留 to，之后用动词原形；换人称时 would 不变。',
    examples: [
      { en: 'Would you like to join us for dinner?', zh: '你愿意和我们一起吃晚饭吗？' },
      { en: 'Would she like to come too?', zh: '和朋友商量邀请她的姐姐：她愿意也一起来吗？' }
    ],
    entry: { id: 'entry', zh: '邀请朋友和你们一起吃晚饭。问：你愿意和我们一起吃晚饭吗？', answers: ['Would you like to join us for dinner?'], hint: '和我们一起吃晚饭：join us for dinner' },
    learning: [
      { id: 'l1', zh: '邀请朋友和你一起散步：你愿意和我去散步吗？', answers: ['Would you like to go for a walk with me?', 'Would you like to take a walk with me?'], hint: '去散步：go for a walk / take a walk\n和我：with me' },
      { id: 'l2', zh: '你们准备喝咖啡，邀请对方一起：你愿意和我们一起喝杯咖啡吗？', answers: ['Would you like to have a coffee with us?', 'Would you like to have coffee with us?', 'Would you like to join us for coffee?'], hint: '喝咖啡：have coffee / have a coffee\n和我们：with us\n加入我们喝咖啡：join us for coffee' },
      { id: 'l3', zh: '邀请朋友到家里来：你愿意周六过来吗？', answers: ['Would you like to come over on Saturday?'], hint: '到家里来：come over\n周六：on Saturday' },
      { id: 'l4', zh: '正和朋友商量聚餐，询问她姐姐的意愿：她愿意也一起来吗？', answers: ['Would she like to come too?', 'Would she like to join us too?'], hint: '她：she\n也：too\n来：come；加入我们：join us' },
      { id: 'l5', zh: '邀请朋友一起看电影：你愿意和我去看电影吗？', answers: ['Would you like to see a movie with me?', 'Would you like to see a film with me?', 'Would you like to go to the movies with me?', 'Would you like to go to the cinema with me?'], hint: '看电影：see a movie / see a film\n和我：with me' }
    ],
    review: [
      { id: 'r1', zh: '邀请朋友周日一起吃午饭：你愿意周日和我们一起吃午饭吗？', answers: ['Would you like to have lunch with us on Sunday?', 'Would you like to join us for lunch on Sunday?'], hint: '吃午饭：have lunch\n和我们：with us\n周日：on Sunday' },
      { id: 'r2', zh: '邀请朋友去公园：你愿意和我去公园吗？', answers: ['Would you like to go to the park with me?'], hint: '去公园：go to the park\n和我：with me' },
      { id: 'r3', zh: '和朋友商量出游，询问他父母的意愿：他们愿意和我们一起去吗？', answers: ['Would they like to go with us?', 'Would they like to come with us?'], hint: '他们：they\n和我们一起：with us\n去 / 来：go / come' },
      { id: 'r4', zh: '邀请朋友今晚过来：你愿意今晚过来吗？', answers: ['Would you like to come over tonight?'], hint: '过来：come over\n今晚：tonight（前面不加 on）' },
      { id: 'r5', zh: '和朋友商量邀请她弟弟，询问他的意愿：他愿意和我们一起吃晚饭吗？', answers: ['Would he like to join us for dinner?', 'Would he like to have dinner with us?'], hint: '他：he\n一起吃晚饭：join us for dinner / have dinner with us' }
    ]
  },
  {
    id: 'time-work',
    meaning: '确认这个时间是否方便',
    expression: 'Does [时间] work for [某人]?' ,
    formula: 'Does + 一个候选时间 + work for + 人称宾格？',
    explanation: '正在商量同一件活动时，提出一个时间，确认是否方便。work for 在这里表示对某人可行，不是工作。',
    boundary: '用来核对已经提出的时间是否方便。若想开放地问何时有空，可说 When would be a good time for you?',
    checkpoint: '句首用 Does，后面的 work 保持原形；for 后用 you、us、her、him 或 them。',
    examples: [
      { en: 'Does Saturday afternoon work for you?', zh: '周六下午你方便吗？' },
      { en: 'Does noon work for her?', zh: '中午十二点她方便吗？' }
    ],
    entry: { id: 'entry', zh: '你们正在约见面。确认：周六下午你方便吗？', answers: ['Does Saturday afternoon work for you?'], hint: '周六下午：Saturday afternoon；对你方便：work for you' },
    learning: [
      { id: 'l1', zh: '正在约时间：明天上午你方便吗？', answers: ['Does tomorrow morning work for you?'], hint: '明天上午：tomorrow morning\n对你可行：work for you' },
      { id: 'l2', zh: '正在安排午饭，向朋友确认她姐姐的时间：中午十二点她方便吗？', answers: ['Does noon work for her?', 'Does twelve o\'clock work for her?', 'Does twelve noon work for her?', 'Does 12 p.m. work for her?', 'Does 12 pm work for her?'], hint: '中午十二点：noon / twelve o’clock\n她（宾格）：her' },
      { id: 'l3', zh: '正在约见面：周五晚上你方便吗？', answers: ['Does Friday evening work for you?', 'Does Friday night work for you?'], hint: '周五晚上：Friday evening / Friday night\n时间短语作主语：前面不加 on' },
      { id: 'l4', zh: '你和同伴核对共同的日程：上午十点我们方便吗？', answers: ['Does ten in the morning work for us?', 'Does ten a.m. work for us?', 'Does 10 a.m. work for us?', 'Does 10 am work for us?'], hint: '上午十点：ten in the morning / ten a.m.\n我们（宾格）：us' },
      { id: 'l5', zh: '和朋友安排聚会，核对他父母的时间：周日下午他们方便吗？', answers: ['Does Sunday afternoon work for them?'], hint: '周日下午：Sunday afternoon\n他们（宾格）：them' }
    ],
    review: [
      { id: 'r1', zh: '正在约晚饭：今晚七点你方便吗？', answers: ['Does seven tonight work for you?', 'Does 7 tonight work for you?'], hint: '今晚七点：seven tonight\n确认候选时间：Does…work for you?' },
      { id: 'r2', zh: '正在约电话时间：明天下午你方便吗？', answers: ['Does tomorrow afternoon work for you?'], hint: '明天下午：tomorrow afternoon' },
      { id: 'r3', zh: '向朋友确认她弟弟能否参加：周六上午他方便吗？', answers: ['Does Saturday morning work for him?'], hint: '周六上午：Saturday morning\n他（宾格）：him' },
      { id: 'r4', zh: '你和同伴核对行程：周一上午我们方便吗？', answers: ['Does Monday morning work for us?'], hint: '周一上午：Monday morning\n我们（宾格）：us' },
      { id: 'r5', zh: '和朋友安排见面：下周末他们方便吗？', answers: ['Does next weekend work for them?'], hint: '下周末：next weekend\n他们（宾格）：them' }
    ]
  },
  {
    id: 'longer',
    meaning: '问这件事还要多久完成',
    expression: 'How much longer will [it / 事项] take?',
    formula: 'How much longer will + it / 简短事项名词短语 + take?',
    explanation: '事情已经在进行时，询问剩余耗时。用 it 时，双方都要清楚正在说哪件事。',
    boundary: '不是首次询问总耗时，也不是等待任何人或事件的万能问法。语气和情境不同，可能有催问的感觉。',
    checkpoint: '保留 longer 表示还需多久；will 后先放事项，末尾用动词原形 take。',
    examples: [
      { en: 'How much longer will it take?', zh: '双方知道正在说哪件事：这还要多久？' },
      { en: 'How much longer will the repair take?', zh: '维修已经开始：这次维修还要多久完成？' }
    ],
    entry: { id: 'entry', zh: '维修正在进行，对方知道你在说什么。问：这还要多久？', answers: ['How much longer will it take?'], hint: '花费时间：take；还要多久：how much longer' },
    learning: [
      { id: 'l1', zh: '师傅已经在修车。问：这次维修还要多久完成？', answers: ['How much longer will the repair take?'], hint: '这次维修：the repair\n还要多久：how much longer' },
      { id: 'l2', zh: '你们已经坐车走了一段路。问：这段行程还要多久？', answers: ['How much longer will the trip take?', 'How much longer will the journey take?'], hint: '这段行程：the trip / the journey\n耗时：take' },
      { id: 'l3', zh: '朋友正在做饭，你们刚聊过这件事。问：这还要多久？', answers: ['How much longer will it take?'], hint: '指刚才说过的事：it\n还要多久：how much longer' },
      { id: 'l4', zh: '这次清洁已经开始。问：这次清洁还要多久完成？', answers: ['How much longer will the cleaning take?'], hint: '这次清洁：the cleaning\n将还需：will…take' },
      { id: 'l5', zh: '店员正在检查你的手机，双方正在谈这次检查。问：这还要多久？', answers: ['How much longer will it take?'], hint: '已经明确的这件事：it\n还要多久：how much longer' }
    ],
    review: [
      { id: 'r1', zh: '你们正在谈已经开始的电脑维修。问：这次维修还要多久？', answers: ['How much longer will the repair take?'], hint: '这次维修：the repair\n耗时：take' },
      { id: 'r2', zh: '你们已经在路上。问：这段行程还要多久？', answers: ['How much longer will the trip take?', 'How much longer will the journey take?'], hint: '这段行程：the trip / the journey\n还要多久：how much longer' },
      { id: 'r3', zh: '家里正在做清洁，你刚和对方谈过进度。问：这还要多久？', answers: ['How much longer will it take?'], hint: '指刚谈过的事：it\n剩余时间：how much longer' },
      { id: 'r4', zh: '店里已经开始清洁你的地毯。问：这次清洁还要多久？', answers: ['How much longer will the cleaning take?'], hint: '这次清洁：the cleaning\nwill 后的主要动词：take' },
      { id: 'r5', zh: '朋友正在组装桌子，你们正在谈进度。问：这还要多久？', answers: ['How much longer will it take?'], hint: '这件已在谈的事：it\n剩余时间：how much longer' }
    ]
  },
  {
    id: 'where',
    meaning: '打听物品或地点在哪里',
    expression: 'Do you know where … is / are?',
    formula: 'Do you know where + 东西 / 地点 + is / are?',
    explanation: '先问对方是否知道，再问东西或地点在哪里。where 后用陈述语序，主语在 is / are 前面。',
    boundary: 'where 问位置，后面用陈述语序。要问怎么到达某地，可用 How do I get to…?',
    checkpoint: '写 where my keys are，不把直接问句的 where are my keys 原样接到 know 后面。',
    examples: [
      { en: 'Do you know where my keys are?', zh: '你知道我的钥匙在哪里吗？' },
      { en: 'Do you know where the station is?', zh: '你知道车站在哪里吗？' }
    ],
    entry: { id: 'entry', zh: '你知道我的钥匙在哪里吗？', answers: ['Do you know where my keys are?'], hint: '我的钥匙：my keys；从句用陈述语序：where my keys are' },
    learning: [
      { id: 'l1', zh: '你知道我的包在哪里吗？', answers: ['Do you know where my bag is?'], hint: '我的包：my bag（单数）\n间接问句语序：where + my bag + is', frame: 'Do you know where + 单数主语 + is?' },
      { id: 'l2', zh: '你知道她的眼镜在哪里吗？', answers: ['Do you know where her glasses are?'], hint: '她的眼镜：her glasses（复数形式）\n复数搭配：are', frame: 'Do you know where + 复数主语 + are?' },
      { id: 'l3', zh: '你知道洗手间在哪里吗？', answers: ['Do you know where the bathroom is?', 'Do you know where the restroom is?', 'Do you know where the toilet is?'], hint: '洗手间：the bathroom / the restroom / the toilet\n位置：where + 主语 + is' },
      { id: 'l4', zh: '你知道我们的票在哪里吗？', answers: ['Do you know where our tickets are?'], hint: '我们的票：our tickets（复数）\n复数搭配：are', frame: 'Do you know where + 复数主语 + are?' },
      { id: 'l5', zh: '你知道公交车站在哪里吗？', answers: ['Do you know where the bus stop is?'], hint: '公交车站：the bus stop\n陈述语序：主语 + is' }
    ],
    review: [
      { id: 'r1', zh: '你知道我的手机在哪里吗？', answers: ['Do you know where my phone is?'], hint: '我的手机：my phone\n单数搭配：is' },
      { id: 'r2', zh: '你知道他的鞋在哪里吗？', answers: ['Do you know where his shoes are?'], hint: '他的鞋：his shoes（复数）\n复数搭配：are', frame: 'Do you know where + 复数主语 + are?' },
      { id: 'r3', zh: '你知道出口在哪里吗？', answers: ['Do you know where the exit is?'], hint: '出口：the exit\n陈述语序：the exit + is' },
      { id: 'r4', zh: '你知道他们的行李在哪里吗？', answers: ['Do you know where their luggage is?', 'Do you know where their bags are?'], hint: '他们的行李：their luggage（不可数，用 is）\n他们的包：their bags（复数，用 are）', frame: 'Do you know where + 主语 + is / are?' },
      { id: 'r5', zh: '你知道火车站在哪里吗？', answers: ['Do you know where the train station is?', 'Do you know where the railway station is?'], hint: '火车站：the train station / the railway station\n陈述语序：主语 + is' }
    ]
  },
  {
    id: 'cost',
    meaning: '询问商品或服务的价格',
    expression: 'How much is / are …?',
    formula: 'How much is + 单数 / 不可数主语？；How much are + 复数主语？',
    explanation: '询问要买的东西或某项服务多少钱。单数用 is，复数用 are。',
    boundary: '这里问价格，不问数量；不把 how much 和询问可数数量的 how many 混用。',
    checkpoint: '检查所问的东西是单数还是复数，再选 is 或 are。',
    examples: [
      { en: 'How much is this sandwich?', zh: '这个三明治多少钱？' },
      { en: 'How much are these tickets?', zh: '这些票多少钱？' }
    ],
    entry: { id: 'entry', zh: '这个三明治多少钱？', answers: ['How much is this sandwich?'], hint: '这个三明治：this sandwich；单数：is' },
    learning: [
      { id: 'l1', zh: '这件衬衫多少钱？', answers: ['How much is this shirt?'], hint: '这件衬衫：this shirt\n单数：is' },
      { id: 'l2', zh: '这些苹果多少钱？', answers: ['How much are these apples?'], hint: '这些苹果：these apples\n复数：are', frame: 'How much are + 复数主语?' },
      { id: 'l3', zh: '理一次发多少钱？', answers: ['How much is a haircut?'], hint: '理一次发：a haircut\n问价格：How much is…?' },
      { id: 'l4', zh: '这双鞋多少钱？', answers: ['How much are these shoes?', 'How much is this pair of shoes?'], hint: '这双鞋：these shoes（用 are）\n这一双鞋：this pair of shoes（pair 是单数，用 is）', frame: 'How much are + 复数主语? / How much is + 单数主语?' },
      { id: 'l5', zh: '配送费多少钱？', answers: ['How much is delivery?', 'How much is the delivery charge?', 'How much is the delivery fee?'], hint: '配送：delivery\n配送费：the delivery charge / the delivery fee' }
    ],
    review: [
      { id: 'r1', zh: '这个蛋糕多少钱？', answers: ['How much is this cake?'], hint: '这个蛋糕：this cake\n单数：is' },
      { id: 'r2', zh: '这些明信片多少钱？', answers: ['How much are these postcards?'], hint: '这些明信片：these postcards\n复数：are', frame: 'How much are + 复数主语?' },
      { id: 'r3', zh: '一张票多少钱？', answers: ['How much is a ticket?', 'How much is one ticket?'], hint: '一张票：a ticket / one ticket\n单数：is' },
      { id: 'r4', zh: '这些橙子多少钱？', answers: ['How much are these oranges?'], hint: '这些橙子：these oranges\n复数：are', frame: 'How much are + 复数主语?' },
      { id: 'r5', zh: '这杯咖啡多少钱？', answers: ['How much is this coffee?', 'How much is this cup of coffee?'], hint: '这杯咖啡：this coffee / this cup of coffee\n问价格：How much is…?' }
    ]
  },
  {
    id: 'permission',
    meaning: '确认这样做是否可以',
    expression: 'Is it okay if I / we / … + 一般现在时…?',
    formula: 'Is it okay if + 主语 + 一般现在时的动作…?',
    explanation: '行动前确认对方是否允许或介意。可以问自己、同伴或另一位相关的人这样做是否可以。',
    boundary: '这是日常许可确认，不是让对方替你完成动作；正式规定是否允许，仍需要向有权决定的人确认。',
    checkpoint: 'if 后保留主语；he / she 的一般现在时动作要用正确的第三人称单数形式。',
    examples: [
      { en: 'Is it okay if I sit here?', zh: '我坐这里可以吗？' },
      { en: 'Is it okay if she joins us?', zh: '她加入我们可以吗？' }
    ],
    entry: { id: 'entry', zh: '想坐到别人旁边，先问：我坐这里可以吗？', answers: ['Is it okay if I sit here?', 'Is it OK if I sit here?'], hint: '坐在这里：sit here' },
    learning: [
      { id: 'l1', zh: '想让屋里通风，先问：我打开窗户可以吗？', answers: ['Is it okay if I open the window?', 'Is it OK if I open the window?'], hint: '打开窗户：open the window\n我：I' },
      { id: 'l2', zh: '和朋友约好活动，先确认：我们带些吃的可以吗？', answers: ['Is it okay if we bring some food?', 'Is it OK if we bring some food?'], hint: '带些吃的：bring some food\n我们：we' },
      { id: 'l3', zh: '想邀请姐姐加入已约好的活动，先问同伴：她加入我们可以吗？', answers: ['Is it okay if she joins us?', 'Is it OK if she joins us?'], hint: '加入我们：join us\nshe 后的动词：joins', frame: 'Is it okay if + she + 动词第三人称单数…?' },
      { id: 'l4', zh: '在花店想给花拍张照，先问店员：我拍张照可以吗？', answers: ['Is it okay if I take a photo?', 'Is it OK if I take a photo?', 'Is it okay if I take a picture?', 'Is it OK if I take a picture?'], hint: '拍张照：take a photo / take a picture\n我：I' },
      { id: 'l5', zh: '你们需要提前离开聚会，问主人：我们早点走可以吗？', answers: ['Is it okay if we leave early?', 'Is it OK if we leave early?'], hint: '早点走：leave early\n我们：we' }
    ],
    review: [
      { id: 'r1', zh: '想用朋友的充电器，先问：我用一下你的充电器可以吗？', answers: ['Is it okay if I use your charger?', 'Is it OK if I use your charger?'], hint: '用你的充电器：use your charger\n我：I' },
      { id: 'r2', zh: '朋友邀请你们去做客，你想带弟弟，先问：他一起来可以吗？', answers: ['Is it okay if he comes too?', 'Is it OK if he comes too?'], hint: '也来：come too\nhe 后的动词：comes', frame: 'Is it okay if + he + 动词第三人称单数…?' },
      { id: 'r3', zh: '在店里等同伴，先问工作人员：我们先在这里等可以吗？', answers: ['Is it okay if we wait here?', 'Is it OK if we wait here?'], hint: '在这里等：wait here\n我们：we' },
      { id: 'r4', zh: '想借朋友的笔，先问：我借一下你的笔可以吗？', answers: ['Is it okay if I borrow your pen?', 'Is it OK if I borrow your pen?'], hint: '借你的笔：borrow your pen\n我：I' },
      { id: 'r5', zh: '和主人确认同伴的安排：他们晚点来可以吗？', answers: ['Is it okay if they come later?', 'Is it OK if they come later?'], hint: '晚点来：come later\n他们：they' }
    ]
  },
  {
    id: 'suggest',
    meaning: '提议大家一起做某件事',
    expression: "Why don't we + 动词原形…?",
    formula: 'Why don’t we + 动词原形 + 其他内容？',
    explanation: '提出包含自己在内的共同方案，问对方是否愿意这样做。这里不是追问为什么没有做某件事。',
    boundary: 'we 包括说话人，用来提出共同方案。换成 Why don’t you…? 就是在建议对方行动；这里的 why 不要求解释原因。',
    checkpoint: '共同提议用 Why don’t we，后面的动作直接用动词原形。',
    examples: [
      { en: "Why don't we take a break?", zh: '我们休息一下怎么样？' },
      { en: "Why don't we eat at home?", zh: '我们在家吃怎么样？' }
    ],
    entry: { id: 'entry', zh: '大家走累了，你提议：我们休息一下怎么样？', answers: ["Why don't we take a break?"], hint: '休息一下：take a break' },
    learning: [
      { id: 'l1', zh: '正在商量晚饭，你提议：我们在家吃怎么样？', answers: ["Why don't we eat at home?"], hint: '在家吃：eat at home\n共同提议：Why don’t we…?' },
      { id: 'l2', zh: '天气不错，你提议：我们去散步怎么样？', answers: ["Why don't we go for a walk?", "Why don't we take a walk?"], hint: '去散步：go for a walk / take a walk' },
      { id: 'l3', zh: '你和朋友一起去车站，正在商量交通方式。你提议：我们坐公交怎么样？', answers: ["Why don't we take the bus?"], hint: '坐公交：take the bus' },
      { id: 'l4', zh: '大家都渴了，你提议：我们喝点水怎么样？', answers: ["Why don't we have some water?", "Why don't we drink some water?"], hint: '喝点水：have some water / drink some water' },
      { id: 'l5', zh: '今天时间太晚了，你提议：我们明天再试怎么样？', answers: ["Why don't we try again tomorrow?"], hint: '再试：try again\n明天：tomorrow' }
    ],
    review: [
      { id: 'r1', zh: '正在商量周末活动，你提议：我们去公园怎么样？', answers: ["Why don't we go to the park?"], hint: '去公园：go to the park' },
      { id: 'r2', zh: '大家不知道谁能帮忙，你提议：我们问问她怎么样？', answers: ["Why don't we ask her?"], hint: '问问她：ask her\n她（宾格）：her' },
      { id: 'r3', zh: '你们想留个纪念，你提议：我们拍张照怎么样？', answers: ["Why don't we take a photo?", "Why don't we take a picture?"], hint: '拍张照：take a photo / take a picture' },
      { id: 'r4', zh: '晚饭后正在商量做什么，你提议：我们看部电影怎么样？', answers: ["Why don't we watch a movie?", "Why don't we watch a film?"], hint: '看部电影：watch a movie / watch a film' },
      { id: 'r5', zh: '你和同伴点了不同的菜，想互相尝尝。你提议：我们分着吃怎么样？', answers: ["Why don't we share?", "Why don't we share the food?"], hint: '分着吃 / 分享：share\n这些食物：the food（可按情境省略）' }
    ]
  },
  {
    id: 'clarify',
    meaning: '确认对方刚才的意思',
    expression: 'Do you mean…?',
    formula: 'Do you mean + 要确认的词语 / 简短意思？',
    explanation: '你听到了对方的话，但不确定意思时，提出自己的理解请对方确认。可以确认时间、地点、人物或一个简短意思。',
    boundary: '用来确认自己对意思的理解。若只是没听清、想请对方重复，可说 Could you say that again?',
    checkpoint: '确认对方的意思用 Do you mean；把不确定的具体内容放在后面。',
    examples: [
      { en: 'Do you mean this Friday?', zh: '你是说这周五吗？' },
      { en: 'Do you mean we should wait here?', zh: '你的意思是我们应该在这里等吗？' }
    ],
    entry: { id: 'entry', zh: '听到对方说“周五”，想确认：你是说这周五吗？', answers: ['Do you mean this Friday?'], hint: '这周五：this Friday' },
    learning: [
      { id: 'l1', zh: '对方提到明天，你想确认：你是说明天上午吗？', answers: ['Do you mean tomorrow morning?'], hint: '明天上午：tomorrow morning' },
      { id: 'l2', zh: '对方说到门口碰面，你想确认是否要出门：你是说在外面吗？', answers: ['Do you mean outside?'], hint: '在外面：outside' },
      { id: 'l3', zh: '对方提到自己的姐妹，但没说年纪，你想确认：你是说你的姐姐吗？', answers: ['Do you mean your older sister?', 'Do you mean your elder sister?'], hint: '你的姐姐：your older sister / your elder sister' },
      { id: 'l4', zh: '对方提议换一班车，你想确认：你是说下一班公交吗？', answers: ['Do you mean the next bus?'], hint: '下一班公交：the next bus' },
      { id: 'l5', zh: '对方指了指这里，你想确认完整意思：你的意思是我们应该在这里等吗？', answers: ['Do you mean we should wait here?'], hint: '我们应该：we should\n在这里等：wait here', frame: 'Do you mean + we should + 动词原形…?' }
    ],
    review: [
      { id: 'r1', zh: '对方说周末见，你想确认：你是说这周六吗？', answers: ['Do you mean this Saturday?'], hint: '这周六：this Saturday' },
      { id: 'r2', zh: '对方提到附近的咖啡馆，你想确认：你是说那个新开的咖啡馆吗？', answers: ['Do you mean the new cafe?', 'Do you mean the new café?'], hint: '那个新开的咖啡馆：the new cafe / the new café' },
      { id: 'r3', zh: '谈到那对兄妹时，对方说他们家有人要来，你想确认：你是说他们的父母吗？', answers: ['Do you mean their parents?'], hint: '他们的父母：their parents' },
      { id: 'r4', zh: '对方建议换一种尺寸，你想确认：你是说更大的那个吗？', answers: ['Do you mean the bigger one?', 'Do you mean the larger one?'], hint: '更大的那个：the bigger one / the larger one' },
      { id: 'r5', zh: '你和朋友谈到另一位同伴的安排，想确认：你的意思是他今天很忙吗？', answers: ["Do you mean he's busy today?", 'Do you mean he is busy today?'], hint: '他今天很忙：he is busy today\n缩写：he is → he’s', frame: 'Do you mean + he is + 状态…?' }
    ]
  },
  {
    id: 'repeat',
    meaning: '没听清时请对方再说一遍',
    expression: 'Could you say that again? / Could you repeat…?',
    formula: 'Could you say that again?；Could you repeat + 没听清的内容？',
    explanation: '没有听清或没记住时，请对方重说。可以用 that 指刚才的话，也可以点明需要重复的信息。',
    boundary: '这里请求重复，不是询问对方话语的含义。repeat 本身已有重复的意思，不必再加 again；放慢速度是另一种请求。',
    checkpoint: 'Could you 后用 say 或 repeat 原形；say that again 与 repeat that 都可，不把 say 和 repeat 连用。',
    examples: [
      { en: 'Could you say that again?', zh: '你能再说一遍吗？' },
      { en: 'Could you repeat the address?', zh: '你能重复一下地址吗？' }
    ],
    entry: { id: 'entry', zh: '没听清对方刚才的话，请对方再说一遍。', answers: ['Could you say that again?', 'Could you repeat that?', 'Could you please say that again?', 'Could you please repeat that?'], hint: '再说一遍：say that again / repeat that' },
    learning: [
      { id: 'l1', zh: '没听清刚才的话：你能再说一遍吗？', answers: ['Could you say that again?', 'Could you repeat that?', 'Could you please say that again?', 'Could you say that again, please?'], hint: '再说一遍：say that again\n重复刚才的话：repeat that' },
      { id: 'l2', zh: '没听清地址：你能重复一下地址吗？', answers: ['Could you repeat the address?', 'Could you please repeat the address?', 'Could you repeat the address, please?'], hint: '重复：repeat\n地址：the address' },
      { id: 'l3', zh: '没记住号码：你能重复一下那个号码吗？', answers: ['Could you repeat that number?', 'Could you repeat the number?', 'Could you please repeat that number?'], hint: '那个号码：that number / the number\n重复：repeat' },
      { id: 'l4', zh: '没听清她叫什么：你能重复一下她的名字吗？', answers: ['Could you repeat her name?', 'Could you please repeat her name?'], hint: '她的名字：her name\n重复：repeat' },
      { id: 'l5', zh: '没听清最后一部分：你能重复一下最后一部分吗？', answers: ['Could you repeat the last part?', 'Could you please repeat the last part?'], hint: '最后一部分：the last part\nrepeat 后直接接内容：不加 to' }
    ],
    review: [
      { id: 'r1', zh: '电话里声音断了一下：你能再说一遍吗？', answers: ['Could you say that again?', 'Could you repeat that?', 'Could you please say that again?'], hint: '再说一遍：say that again / repeat that' },
      { id: 'r2', zh: '没记住他的号码：你能重复一下他的电话号码吗？', answers: ['Could you repeat his phone number?', 'Could you please repeat his phone number?'], hint: '他的电话号码：his phone number\n重复：repeat' },
      { id: 'r3', zh: '没听清集合时间：你能重复一下时间吗？', answers: ['Could you repeat the time?', 'Could you please repeat the time?'], hint: '时间：the time\n重复：repeat' },
      { id: 'r4', zh: '要记下对方的邮箱：你能重复一下你的电子邮箱地址吗？', answers: ['Could you repeat your email address?', 'Could you repeat your e-mail address?', 'Could you please repeat your email address?'], hint: '你的电子邮箱地址：your email address\n重复：repeat' },
      { id: 'r5', zh: '没听清价格：你能重复一下价格吗？', answers: ['Could you repeat the price?', 'Could you please repeat the price?', 'Could you repeat the price, please?'], hint: '价格：the price\n重复：repeat' }
    ]
  }
];
