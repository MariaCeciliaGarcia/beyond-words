'use strict';
// Three authored pilots. Loaded by the app after the existing content collections.
window.JUJIAN_PILOT = (() => {
  const input = (id, zh, answers, hint, extra = {}) => ({id, type:'input', zh, target:zh, answers, hint, ...extra});
  const recall = (id, zh, scene, intent, feedback) => ({
    id, type:'recall', zh, target:zh, scene, intent,
    answers:['Fair enough.'], hint:'开头：fair', feedback
  });
  const choice = (id, zh, scene, choices, correctChoice, hint, feedback, extra = {}) => ({
    id, type:'choice', zh, target:zh, scene,
    answers:['Fair enough.'], choices:choices.map((text, i) => ({id:['a','b','c'][i], text})),
    correctChoice, hint, feedback, ...extra
  });
  return [
    {
      id:'p-in-the-evening', collection:'daily1', domain:'daily', domains:['daily'],
      pilot:true, practiceProfile:'compose', meaning:'说明事情发生在晚上这个时段',
      expression:'in the evening', formula:'动作或状态 + in the evening',
      explanation:'把事情放到晚上这个时段。说日常习惯时，可以用 in the evening，也可以用 in the evenings；说某一次安排时，具体是哪天由上下文说明。',
      boundary:'in the evening 不单独等于“今晚”。this evening、tonight 可以指今晚，但没有调用本次练习的目标语块。习惯场景中的 in the evenings 也自然；不要把复数形式直接套到一次性的安排里。',
      checkpoint:'保留整个时间语块 in the evening；人称、时态和问句变化放在句子的其他部分。',
      examples:[
        {zh:'我通常晚上读书。', en:'I usually read in the evening.'},
        {zh:'我们有时晚上出门。', en:'We sometimes go out in the evening.'}
      ],
      entry:input('entry','我通常晚上散步。',[
        'I usually go for a walk in the evening.', 'I usually go for a walk in the evenings.',
        'In the evening, I usually go for a walk.', 'In the evenings, I usually go for a walk.'
      ],'散步：go for a walk', {scene:'朋友问你平时什么时候散步。'}),
      learning:[
        input('l1','填入整个时间语块，表达“我通常晚上阅读”。', ['in the evening','in the evenings'],
          '语块开头：in', {stem:'I usually read ____.', inputLabel:'填入整个时间语块',target:'我通常晚上阅读。'}),
        input('l2','她通常晚上做饭。', [
          'She usually cooks in the evening.', 'She usually cooks in the evenings.',
          'In the evening, she usually cooks.', 'In the evenings, she usually cooks.'
        ], '做饭：cook；她通常做：usually cooks'),
        input('l3','我们通常晚上工作。', [
          'We usually worked in the evening.', 'We usually worked in the evenings.',
          'At that time, we usually worked in the evening.', 'At that time, we usually worked in the evenings.'
        ], '过去的工作：worked', {scene:'你在回忆以前那段时间的作息。'}),
        input('l4','我晚上给你打电话。', [
          "I'll call you in the evening.", 'I will call you in the evening.',
          "In the evening, I'll call you.", 'In the evening, I will call you.'
        ], '给你打电话：call you；将来：will', {scene:'明天白天你很忙，答应朋友晚上打电话。'}),
        input('l5','他们一般晚上不喝咖啡。', [
          "They don't usually drink coffee in the evening.", 'They do not usually drink coffee in the evening.',
          "They don't usually drink coffee in the evenings.", 'They do not usually drink coffee in the evenings.',
          'They usually do not drink coffee in the evening.', 'They usually do not drink coffee in the evenings.'
        ], '喝咖啡：drink coffee；一般不：do not usually')
      ],
      review:[
        input('r1','他通常晚上锻炼。', [
          'He usually exercises in the evening.', 'He usually exercises in the evenings.',
          'He usually works out in the evening.', 'He usually works out in the evenings.'
        ], '锻炼：exercise / work out；注意 he 后的形式'),
        input('r2','我们晚上经常很忙。', [
          'We were often busy in the evening.', 'We were often busy in the evenings.'
        ], '过去的“我们很忙”：we were busy', {scene:'你在回想以前的作息。'}),
        input('r3','你通常晚上学习吗？', [
          'Do you usually study in the evening?', 'Do you usually study in the evenings?'
        ], '一般现在时问句开头：Do you'),
        input('r4','他们晚上不工作。', [
          "They didn't work in the evening.", 'They did not work in the evening.',
          "They didn't work in the evenings.", 'They did not work in the evenings.'
        ], '过去的否定：did not + 动词原形', {scene:'你在说明过去那段时间的作息。'}),
        input('r5','我晚上把照片发给你。', [
          "I'll send you the photos in the evening.", 'I will send you the photos in the evening.',
          "I'll send the photos to you in the evening.", 'I will send the photos to you in the evening.'
        ], '把照片发给你：send you the photos；将来：will', {scene:'明天白天你要开会，答应朋友晚上发照片。'})
      ]
    },
    {
      id:'p-done-with', collection:'daily-phrases', domain:'daily', domains:['daily'],
      pilot:true, practiceProfile:'compose', meaning:'说明事情做完了，或东西用好了',
      expression:'be done with…', formula:'主语 + be done with + 事情 / 东西',
      explanation:'说明一件事已经做完，或自己不再需要使用某样东西。可以用来确认任务进度、交接物品，也可以说还没做完或问将来何时能做完。',
      boundary:'东西“用好了”不一定表示耗尽：咖啡喝好了，也可能还有剩余。带强烈语气的 I’m done with this 还可能表示不想再继续，不能只凭这几个词确定。',
      checkpoint:'保留 done with + 事情 / 东西；be 随人称、时间和问句变化。',
      examples:[
        {zh:'我作业做完了。', en:"I'm done with my homework."},
        {zh:'你用完这台电脑了吗？', en:'Are you done with this computer?'}
      ],
      entry:input('entry','你用完这台电脑了吗？', [
        'Are you done with this computer?', 'Are you done with the computer?'
      ],'这台电脑：this computer', {scene:'你想接着用同事面前的电脑。'}),
      learning:[
        input('l1','我洗完碗了。', ["I'm done with the dishes.", 'I am done with the dishes.'], '洗碗这件事：the dishes'),
        input('l2','她用完笔记本电脑了吗？', ['Is she done with the laptop?'], '笔记本电脑：the laptop；问她是否：Is she'),
        input('l3','六点时我们还没做完这些工作。', [
          "We weren't done with the work at six.", 'We were not done with the work at six.',
          "At six, we weren't done with the work yet.", 'At six, we were not done with the work yet.',
          "At six, we weren't done with the work.", 'At six, we were not done with the work.'
        ], '过去的否定：were not；六点：at six', {scene:'你在说明昨天的进度。'}),
        input('l4','他最晚周五会做完这份报告。', [
          "He'll be done with the report by Friday.", 'He will be done with the report by Friday.'
        ], '将来：will be；最晚周五：by Friday', {scene:'你在说明预计进度。'}),
        input('l5','这杯咖啡你喝好了吗？', ['Are you done with your coffee?', 'Are you done with the coffee?'],
          '你的咖啡：your coffee；问对方是否：Are you', {
            scene:'你准备收杯，先确认对方是否还需要这杯咖啡。',
            feedback:'done 表示已经喝好、不再需要这杯咖啡，不要求喝光。回答 Yes 表示喝好了，可以收杯。'
          })
      ],
      review:[
        input('r1','我还没用完这本书。', [
          "I'm not done with this book yet.", 'I am not done with this book yet.',
          "I'm not done with the book yet.", 'I am not done with the book yet.'
        ], '还没：not … yet', {scene:'你正在用这本书查资料，别人想借走。'}),
        input('r2','最晚到中午，她就已经处理完这些文书工作了。', [
          'She was done with the paperwork by noon.', 'She was already done with the paperwork by noon.',
          'By noon, she was done with the paperwork.', 'By noon, she was already done with the paperwork.'
        ], '文书工作：the paperwork；最晚到中午：by noon', {scene:'你在回顾她昨天的进度。'}),
        input('r3','你最晚五点能用完这辆车吗？', ['Will you be done with the car by five?', 'Will you be done with this car by five?'],
          '将来问句开头：Will you be；最晚五点：by five', {scene:'朋友借了车，你确认五点时自己能否接着用。'}),
        input('r4','他们已经吃完晚饭了。', [
          'They were already done with dinner.', 'They were done with dinner already.'
        ], '过去的状态：were；已经：already', {scene:'昨天你到的时候，他们已经吃完晚饭。'}),
        input('r5','我们还没讨论完。', [
          "We aren't done with the discussion yet.", 'We are not done with the discussion yet.',
          "We're not done with the discussion yet."
        ], '讨论：the discussion；还没：not … yet', {scene:'会议中还有问题没谈完，你提醒大家继续。'})
      ]
    },
    {
      id:'p-fair-enough', collection:'daily-phrases', domain:'daily', domains:['daily'],
      pilot:true, practiceProfile:'scenario', meaning:'接受对方给出的理由或选择',
      expression:'Fair enough.', formula:'Fair enough.（独立回应）',
      explanation:'用简短回应表示对方的理由或选择可以接受。即使自己原先有别的想法，也可以用它表达愿意尊重对方。它不必是热烈赞同，也不必是不情愿地让步。',
      boundary:'Fair enough 侧重接受理由或选择；That makes sense 侧重理由说得通，两者有时都自然。单独说 Fair enough 不一定把安慰、帮助或具体安排说完整，须看你想表达的全部意图。语气和上下文也影响听感。',
      checkpoint:'先看自己是否愿意接受，再检查还有哪些意思需要另说；固定回应本身不随人称、时态变化。',
      examples:[
        {zh:'“今晚我想待在家，今天太累了。”“可以理解。”', en:'“I’d rather stay in tonight. I’ve had a long day.” “Fair enough.”'},
        {zh:'“能换家餐厅吗？我不太喜欢辣的。”“可以理解。”', en:'“Could I choose a different restaurant? I don’t really like spicy food.” “Fair enough.”'}
      ],
      entry:recall('entry','先想一句简短英文回应，再看表达。',
        '你约朋友出门，朋友说今天很累，想待在家。', '你接受他的理由，尊重他今天不出门的选择。',
        'Fair enough. 可以接受朋友今天不出门的理由，不代表你也决定待在家。'),
      learning:[
        choice('l1','你回应 Fair enough.，最直接表达了什么？',
          '你约朋友出门，朋友说今天很累，想待在家。',
          ['你接受朋友今天不出门的理由和选择。','你也决定今天待在家。','你认为自己原来的邀请很糟糕。'], 'a',
          '依据：不要替回应补出没说的话',
          '这句表达接受朋友的理由，没说明你也待在家，也没评价原来的邀请。'),
        choice('l2','哪一项中 Fair enough 最贴合你标明的态度？', '',
          ['朋友想各付各的，你愿意尊重他的选择。','对方解释迟到原因，你听懂了，但仍不能接受。','对方提出改期，你尚未决定，想先问原因。'], 'a',
          '判断：回应与你此刻的态度是否一致',
          'A 已明确愿意接受选择。B 的听懂不等于接受；C 此刻尚未表达接受。这里比较的是指定态度，不是说后两类场景永远不能使用这句回应。'),
        choice('l3','平常聊天时，这两句回应都可能自然吗？',
          '朋友说路上车多，所以想早点出发。',
          ['只有 Fair enough 自然。','只有 That makes sense 自然。','都可能自然。'], 'c',
          '比较：是否自然与侧重点是两回事',
          'Fair enough 更直接接受他的选择或理由；That makes sense 更直接认可理由说得通。两者实际作用会重叠，不能仅凭这两句话断定谁更热情。',
          {candidates:'Fair enough. ／ That makes sense.'}),
        choice('l4','单独说 Fair enough，表达到了哪一步？',
          '同事说妈妈住院了，今天不能替你值班。',
          ['已经明确表达了关心，也承诺提供帮助。','接受不能替班的理由；对他和家人的关心尚未明确说出。','表示你没听懂，需要他再解释。'], 'b',
          '对照：回应覆盖了你的哪些目的',
          '它可以接受同事不能替班的理由；若还想明确表达关心，需要另补一句。这不等于这句话绝对不适合当前场景。',
          {intent:'你想接受他的理由，同时表达对他和家人的关心。'}),
        recall('l5','用刚学的固定回应接一句。先自己想，再看表达。',
          '同事说手头有两项急事，想午饭后再交草稿。', '你接受他延后交草稿的理由。',
          'Fair enough. 可以接受延后的理由；它本身没有确认一个精确的交稿时间。')
      ],
      review:[
        recall('r1','替小林想一句刚学的简短英文回应，再看表达。',
          '昨天小林约同学一起复习。同学说想先自己整理笔记，再一起讨论。', '小林愿意接受同学的学习安排。',
          '这句接受同学的安排，不等于不愿以后一起合作。'),
        choice('r2','你回应 Fair enough.，最直接说明什么？',
          '你请安娜帮忙搬箱子，她解释刚伤了手，搬不了。',
          ['你也更喜欢自己一个人搬。','你接受了她不能搬的理由。','你要求她再给一个更充分的理由。'], 'b',
          '依据：只判断回应实际说出的态度',
          '它表示理由可以接受，没说明你更想独自搬，也不是继续要求她证明理由。后续怎么搬仍要另作安排。'),
        choice('r3','平常聊天时，这两句回应都可能自然吗？',
          '对方说今天坐公交，因为停车太贵了。',
          ['只有 Fair enough 自然。','只有 That makes sense 自然。','都可能自然。'], 'c',
          '比较：是否自然与侧重点是两回事',
          '前者更直接接受他的出行选择或理由，后者更直接认可理由说得通；实际作用会重叠。不能只凭这两句话判断谁支持得更热烈。',
          {candidates:'Fair enough. ／ That makes sense.'}),
        recall('r4','你代表小组，用刚学的固定回应接一句，再看表达。',
          '我们原本想今晚开小组会。他们解释明天要考试，想今晚先复习。', '我们接受今晚不聚的理由。',
          '可以代表“我们”接受他们的理由。固定回应本身不用变形，也不单独敲定下一次开会的日期。'),
        choice('r5','单独说 Fair enough，表达到了哪一步？',
          '对方说现在不太想谈面试的事。',
          ['接受现在不谈；“以后也愿意听”尚未明确说出。','只表示听懂了，还没有表达接受。','主要表达安慰，没有对现在谈不谈表态。'], 'a',
          '检查：回应覆盖了你的哪些目的',
          '它可以完成接受界限这一部分；若还想明确表示以后也愿意听，需要另补一句。这不等于 Fair enough 绝对不适合这个场景。',
          {intent:'尊重他现在不谈的界限，也让他知道以后你愿意听。'})
      ]
    }
  ];
})();

// Authored lexical support for the deadline example: give the noun, generalize the time rule.
(() => {
 const q=window.JUJIAN_PILOT.find(u=>u.id==='p-done-with').learning[3];
 q.lexicalHints=[{zh:'报告',en:'report',role:'support'},{zh:'周五',en:'Friday',role:'support'}];
})();
