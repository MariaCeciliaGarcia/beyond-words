'use strict';
// Each row is an authored prompt, an accepted expression and a short lexical hint.
window.JUJIAN_CORE = (() => {
  // Contract auxiliary have only; lexical have/to is not a general 've form.
  const mayShorten = (text, full) => {
    if(!/ have$/.test(full))return true;
    const match=new RegExp('\\b'+full+'\\s+(.+)').exec(text);
    return !!match && /^(?:(?:already|just|not|never)\s+)*(?:attached|booked|bought|changed|checked|committed|completed|contacted|decided|double-checked|finished|followed|found|got|gotten|had|heard|left|made|narrowed|opened|put|read|received|resolved|ruled|run|sent|taken|tested|worked|written)\b/.test(match[1]);
  };

  // Accept natural full/contracted combinations without changing the target meaning.
  const contractions = [
    ["I'd", 'I would'], ["We'd", 'We would'],
    ["I'm", 'I am'], ["We're", 'We are'], ["They're", 'They are'],
    ["She's", 'She is'], ["He's", 'He is'], ["There's", 'There is'],
    ["we're", 'we are'], ["they're", 'they are'],
    ["she's", 'she is'], ["he's", 'he is'], ["it's", 'it is'],
    ["isn't", 'is not'], ["aren't", 'are not']
  ];
  const acceptedForms = (answers) => {
    const forms = new Set(answers);
    for (const [short, full] of contractions) {
      for (const answer of [...forms]) {
        if (new RegExp('\\b'+short+'\\b').test(answer)) forms.add(answer.replace(new RegExp('\\b'+short+'\\b','g'), full));
        if (mayShorten(answer,full) && new RegExp('\\b'+full+'\\b').test(answer)) forms.add(answer.replace(new RegExp('\\b'+full+'\\b','g'), short));
      }
    }
    return [...forms];
  };
  const make = (id, meaning, expression, formula, explanation, boundary, checkpoint, learn, review) => {
    const questions = (rows, prefix) => rows.map(([zh, en, hint, variants = []], i) => ({id: `${prefix}${i + 1}`, zh, answers: acceptedForms([en, ...variants]), hint}));
    const learning = questions(learn, 'l'), revising = questions(review, 'r');
    return {id, meaning, expression, formula, explanation, boundary, checkpoint,
      examples: learning.slice(0, 2).map(q => ({zh:q.zh, en:q.answers[0]})),
      entry: {...learning[0], id:'entry'}, learning, review:revising};
  };
  return [
    make('order', '礼貌地说出想要的东西', "I’d like…", 'I’d / We’d like + 想要的东西',
      '点餐、买票或接受服务时，礼貌地说自己想要什么。也可以用 we 表达同行人的共同需求。',
      '想要东西时，would like 后接名词；想做某事时接 to + 动词原形。一般喜好用 like，眼前的需求用 would like。',
      '想要某件东西：I’d / We’d like + 名词；I’d 是 I would 的缩写。', [
      ['点餐时：我想要一杯茶。', "I'd like a cup of tea.", '一杯茶：a cup of tea', ['I would like a cup of tea.']],
      ['买票时：我们想要两张票。', "We'd like two tickets.", '两张票：two tickets', ['We would like two tickets.']],
      ['向服务员说：我想要菜单。', "I'd like the menu, please.", '菜单：the menu\n礼貌补充：please', ["I'd like the menu.", 'I would like the menu, please.']],
      ['订房时：我们想要一间安静的房间。', "We'd like a quiet room.", '安静的房间：a quiet room', ['We would like a quiet room.']],
      ['买衣服时：我想要大一点的尺码。', "I'd like a larger size.", '更大的尺码：a larger size / a bigger size', ['I would like a larger size.', "I'd like a bigger size."]]
    ], [
      ['点餐时：我们想要一张两人桌。', "We'd like a table for two.", '两人桌：a table for two', ['We would like a table for two.']],
      ['买票时：我想要一张去伦敦的票。', "I'd like a ticket to London.", '去某地的票：a ticket to + 地点', ['I would like a ticket to London.']],
      ['吃饭时：我想要一些水。', "I'd like some water.", '一些水：some water', ['I would like some water.']],
      ['结账时：我们想要账单。', "We'd like the bill, please.", '账单：the bill / the check', ["We'd like the bill.", "We'd like the check, please.", "We'd like the check.", 'We would like the bill, please.']],
      ['买衣服时：我想要一件蓝色衬衫。', "I'd like a blue shirt.", '蓝色衬衫：a blue shirt', ['I would like a blue shirt.']]
    ]),
    make('looking', '告诉别人正在找什么', 'I’m looking for…', '主语 + am / is / are looking for + 要找的人或物',
      '向人求助找东西、找地方，或解释别人正在找什么。for 后面放要寻找的对象。',
      'look for 是寻找，look at 是看。这里不表示已经找到，也不表示期待未来的事。',
      '寻找：be looking for；I 用 am，he / she 用 is，we / they 用 are。', [
      ['向店员说明：我正在找一件外套。', "I'm looking for a jacket.", '外套：a jacket', ['I am looking for a jacket.']],
      ['向路人说明：我们正在找车站。', "We're looking for the station.", '车站：the station', ['We are looking for the station.']],
      ['告诉朋友：她正在找她的手机。', "She's looking for her phone.", '她的手机：her phone', ['She is looking for her phone.']],
      ['告诉室友：我正在找我的钥匙。', "I'm looking for my keys.", '我的钥匙：my keys', ['I am looking for my keys.']],
      ['告诉朋友：他们正在找一家餐厅。', "They're looking for a restaurant.", '一家餐厅：a restaurant', ['They are looking for a restaurant.']]
    ], [
      ['向工作人员说明：我们正在找出口。', "We're looking for the exit.", '出口：the exit', ['We are looking for the exit.']],
      ['告诉店员：他正在找一份礼物。', "He's looking for a gift.", '礼物：a gift / a present', ['He is looking for a gift.', "He's looking for a present."]],
      ['向路人说明：我正在找一家药店。', "I'm looking for a pharmacy.", '药店：a pharmacy', ['I am looking for a pharmacy.']],
      ['告诉朋友：他们正在找他们的狗。', "They're looking for their dog.", '他们的狗：their dog', ['They are looking for their dog.']],
      ['向店员说明：她正在找一双鞋。', "She's looking for a pair of shoes.", '一双鞋：a pair of shoes', ['She is looking for a pair of shoes.']]
    ]),
    make('problem', '指出某个东西出了问题', 'There’s something wrong with…', 'There’s something wrong with + 有问题的对象',
      '知道某个东西有问题，但暂时不确定具体故障时，可以先这样说明。',
      '用于笼统说明异常，知道具体问题时也可以直接描述。对人说 something wrong with you 可能被听成人身评价，要留意语气。',
      '某物有问题：There’s something wrong with + 对象；保留 with。', [
      ['不清楚具体故障，说明：我的手机出了点问题。', "There's something wrong with my phone.", '我的手机：my phone', ['There is something wrong with my phone.']],
      ['说明：洗衣机出了点问题。', "There's something wrong with the washing machine.", '洗衣机：the washing machine', ['There is something wrong with the washing machine.']],
      ['向服务员说明：账单有点问题。', "There's something wrong with the bill.", '账单：the bill', ['There is something wrong with the bill.']],
      ['告诉室友：门锁有点问题。', "There's something wrong with the lock.", '门锁：the lock', ['There is something wrong with the lock.']],
      ['告诉工作人员：这台电脑有点问题。', "There's something wrong with this computer.", '这台电脑：this computer', ['There is something wrong with this computer.']]
    ], [
      ['说明：空调有点问题。', "There's something wrong with the air conditioner.", '空调：the air conditioner', ['There is something wrong with the air conditioner.']],
      ['说明：我的订单有点问题。', "There's something wrong with my order.", '我的订单：my order', ['There is something wrong with my order.']],
      ['告诉朋友：相机有点问题。', "There's something wrong with the camera.", '相机：the camera', ['There is something wrong with the camera.']],
      ['告诉房东：热水器有点问题。', "There's something wrong with the water heater.", '热水器：the water heater', ['There is something wrong with the water heater.']],
      ['告诉店员：这只手表有点问题。', "There's something wrong with this watch.", '这只手表：this watch', ['There is something wrong with this watch.']]
    ]),
    make('not-work', '说明某个东西不能正常使用', '…isn’t working', '物品 + isn’t / aren’t working',
      '描述设备或功能当前不能正常使用。英文主语是单数时用 isn’t，复数时用 aren’t；headphones（耳机）按复数处理。',
      '这里的 work 是运转或起作用。人 isn’t working 可能表示没在工作，不表示人出了故障。',
      '单数主语：isn’t working；复数主语：aren’t working。headphones 即使指一副耳机也用 aren’t。', [
      ['说明故障：我的手机不能用了。', "My phone isn't working.", '我的手机：my phone', ['My phone is not working.']],
      ['向工作人员说明：电梯不能用了。', "The lift isn't working.", '电梯：the lift / the elevator', ['The lift is not working.', "The elevator isn't working.", 'The elevator is not working.']],
      ['说明故障：这些灯不亮了。', "These lights aren't working.", '这些灯：these lights\n多个物品：aren’t', ['These lights are not working.']],
      ['告诉室友：冰箱不能正常用了。', "The fridge isn't working.", '冰箱：the fridge / the refrigerator', ['The fridge is not working.', "The refrigerator isn't working."]],
      ['说明故障：这两个按钮不起作用。', "These two buttons aren't working.", '这两个按钮：these two buttons', ['These two buttons are not working.']]
    ], [
      ['说明故障：打印机不能用了。', "The printer isn't working.", '打印机：the printer', ['The printer is not working.']],
      ['告诉工作人员：这些插座不能用了。', "These sockets aren't working.", '插座：sockets / outlets', ['These sockets are not working.', "These outlets aren't working."]],
      ['说明故障：遥控器不起作用。', "The remote isn't working.", '遥控器：the remote / the remote control', ['The remote is not working.', "The remote control isn't working."]],
      ['说明故障：我的耳机不能用了。', "My headphones aren't working.", '耳机：headphones；按复数处理', ['My headphones are not working.']],
      ['向工作人员说明：这台售票机不能用了。', "This ticket machine isn't working.", '售票机：a ticket machine', ['This ticket machine is not working.']]
    ]),
    make('change', '商量改用另一个安排', 'Can we…instead?', 'Can we + 动词原形 + … + instead?',
      '已有一个安排或选项时，提出用另一个选择替代它。instead 表示改为另一种做法。',
      'instead 表示改用另一个选择，原选项可以由上下文给出。要明确说替代什么，可用 instead of + 名词或动词-ing。',
      '共同改安排：Can we + 动词原形…instead?；保留 instead 的替代意思。', [
      ['原计划坐车，商量：我们能改为走路吗？', 'Can we walk instead?', '走路：walk'],
      ['原约周五，商量：我们能改为周六见吗？', 'Can we meet on Saturday instead?', '周六见：meet on Saturday'],
      ['原计划外出吃饭，商量：我们能改为在家吃吗？', 'Can we eat at home instead?', '在家吃：eat at home'],
      ['原计划坐火车，商量：我们能改为坐公交车吗？', 'Can we take the bus instead?', '坐公交车：take the bus'],
      ['原计划打电话，商量：我们能改为发消息吗？', 'Can we send a message instead?', '发消息：send a message']
    ], [
      ['原约今天，商量：我们能改为明天去吗？', 'Can we go tomorrow instead?', '明天去：go tomorrow'],
      ['原计划做饭，商量：我们能改为点披萨吗？', 'Can we order pizza instead?', '点披萨：order pizza'],
      ['原计划坐里面，商量：我们能改为坐外面吗？', 'Can we sit outside instead?', '坐外面：sit outside'],
      ['原计划坐公交，商量：我们能改为坐出租车吗？', 'Can we take a taxi instead?', '坐出租车：take a taxi'],
      ['原计划晚上谈，商量：我们能改为午饭后聊吗？', 'Can we talk after lunch instead?', '午饭后：after lunch']
    ]),
    make('used-to', '说过去常有、现在不同的习惯或情况', '…used to…', '主语 + used to + 动词原形',
      '谈过去经常做的事，或过去存在而现在不同的状态。换人称时 used to 本身不变。',
      '不用于只发生过一次的事情。不要与 be used to（习惯于）混在一起。',
      '过去的习惯或状态：used to + 动词原形；人称改变时 used to 不变。', [
      ['现在不开车上班了，说：我以前常开车上班。', 'I used to drive to work.', '开车上班：drive to work'],
      ['她现在不喝咖啡了，说：她以前常喝咖啡。', 'She used to drink coffee.', '喝咖啡：drink coffee'],
      ['现在搬家了，说：我们以前住在这儿。', 'We used to live here.', '住在这里：live here'],
      ['他现在不踢足球了，说：他以前常踢足球。', 'He used to play football.', '踢足球：play football / play soccer', ['He used to play soccer.']],
      ['他们现在不养狗了，说：他们以前养过一只狗。', 'They used to have a dog.', '养一只狗：have a dog']
    ], [
      ['现在不步行去学校了，说：我以前常步行上学。', 'I used to walk to school.', '步行上学：walk to school'],
      ['她现在搬走了，说：她以前住在伦敦。', 'She used to live in London.', '住在伦敦：live in London'],
      ['现在很少聚餐了，说：我们以前常一起吃饭。', 'We used to eat together.', '一起吃饭：eat together'],
      ['他现在起得早了，说：他以前常起得很晚。', 'He used to get up late.', '起得晚：get up late'],
      ['他们现在不去游泳了，说：他们以前每周日都去游泳。', 'They used to go swimming every Sunday.', '去游泳：go swimming\n每周日：every Sunday']
    ]),
    make('opinion', '说出自己或别人的看法', 'I think…', 'I / We / They think + 一个完整想法；He / She thinks + 一个完整想法',
      '把一个判断作为自己或别人的看法说出来。后面接有主语和谓语的完整想法。',
      'I think 把判断说成自己的看法，语气比直接断言留有余地；转述 he / she 的看法时，动词用 thinks。',
      '看法后接完整句子；he / she 作主语时用 thinks。', [
      ['说自己的看法：我觉得这很有用。', 'I think this is useful.', '有用的：useful', ['I think that this is useful.']],
      ['转述她的看法：她觉得这个太贵了。', 'She thinks this is too expensive.', '太贵：too expensive\nshe 后：thinks', ['She thinks that this is too expensive.']],
      ['说共同看法：我们觉得这个计划不错。', 'We think this plan is good.', '这个计划：this plan', ['We think that this plan is good.']],
      ['转述他的看法：他觉得我们是对的。', 'He thinks we are right.', '是对的：be right', ["He thinks we're right.", 'He thinks that we are right.']],
      ['转述他们的看法：他们觉得这里很安静。', 'They think it is quiet here.', '这里很安静：it is quiet here', ["They think it's quiet here.", 'They think that it is quiet here.']]
    ], [
      ['说自己的看法：我觉得我们来早了。', 'I think we are early.', '来早了：be early', ["I think we're early.", 'I think that we are early.']],
      ['转述她的看法：她觉得这个很容易。', 'She thinks this is easy.', '容易的：easy', ['She thinks that this is easy.']],
      ['说共同看法：我们觉得这里很安全。', 'We think it is safe here.', '安全的：safe', ["We think it's safe here.", 'We think that it is safe here.']],
      ['转述他的看法：他觉得这部电影很有趣。', 'He thinks this film is interesting.', '这部电影：this film / this movie\n有趣的：interesting', ['He thinks this movie is interesting.', 'He thinks that this film is interesting.', 'He thinks that this movie is interesting.']],
      ['转述他们的看法：他们觉得这个是更好的选择。', 'They think this is a better choice.', '更好的选择：a better choice', ['They think that this is a better choice.']]
    ]),
    make('not-sure', '说明对一件事还不确定', 'I’m not sure if…', '主语 + am / is / are not sure if + 陈述语序的句子',
      '说明自己或别人不确定一件事是否成立。if 后面用正常陈述语序。',
      '这里的 if 表示是否，不是如果。不要把直接问句的倒装语序放在 if 后面。',
      '不确定是否：not sure if + 主语 + 谓语；不使用问句倒装。', [
      ['说：我不确定商店是否开门。', "I'm not sure if the shop is open.", '商店开门：the shop is open', ['I am not sure if the shop is open.']],
      ['说：我们不确定他是否在家。', "We're not sure if he is at home.", '他在家：he is at home', ["We're not sure if he's at home.", 'We are not sure if he is at home.']],
      ['说：她不确定我们是否有时间。', "She's not sure if we have time.", '我们有时间：we have time', ['She is not sure if we have time.']],
      ['说：我不确定这里是否安全。', "I'm not sure if it is safe here.", '这里安全：it is safe here', ["I'm not sure if it's safe here.", 'I am not sure if it is safe here.']],
      ['说：他们不确定这是否免费。', "They're not sure if this is free.", '这是免费的：this is free', ['They are not sure if this is free.']]
    ], [
      ['说：我不确定她是否准备好了。', "I'm not sure if she is ready.", '她准备好了：she is ready', ["I'm not sure if she's ready.", 'I am not sure if she is ready.']],
      ['说：他不确定公交车是否停在这里。', "He's not sure if the bus stops here.", '公交车停在这里：the bus stops here', ['He is not sure if the bus stops here.']],
      ['说：我们不确定他们是否需要帮助。', "We're not sure if they need help.", '他们需要帮助：they need help', ['We are not sure if they need help.']],
      ['说：她不确定这是否是正确的地址。', "She's not sure if this is the right address.", '正确的地址：the right address', ['She is not sure if this is the right address.']],
      ['说：我不确定这里是否可以刷卡。', "I'm not sure if I can pay by card here.", '刷卡付款：pay by card\n我可以：I can；我们可以：we can', ["I'm not sure if we can pay by card here."]]
    ]),
    make('thanks', '为对方的具体帮助或行为道谢', 'Thanks for…', 'Thanks for + 动词-ing…',
      '把感谢的原因说具体。可以感谢对方已经做过或正在做的事情，例如帮忙、等待或来电。',
      'Thanks for… 是向对方道谢，for 后接动作时用 -ing；thanks to… 表示“多亏、由于”，含义不同。',
      '感谢某个动作：Thanks for + 动词-ing；不直接接动词原形。', [
      ['感谢对方：谢谢你帮我。', 'Thanks for helping me.', '帮助我：help me\nhelp 的 -ing：helping', ['Thank you for helping me.']],
      ['感谢对方：谢谢你等我们。', 'Thanks for waiting for us.', '等我们：wait for us\nwait 的 -ing：waiting', ['Thank you for waiting for us.']],
      ['感谢对方：谢谢你邀请她。', 'Thanks for inviting her.', '邀请她：invite her\ninvite 的 -ing：inviting', ['Thank you for inviting her.']],
      ['感谢对方：谢谢你送我回家。', 'Thanks for taking me home.', '送我回家：take me home\ntake 的 -ing：taking', ['Thank you for taking me home.']],
      ['感谢对方：谢谢你告诉我。', 'Thanks for telling me.', '告诉我：tell me\ntell 的 -ing：telling', ['Thank you for telling me.']]
    ], [
      ['感谢对方：谢谢你打电话来。', 'Thanks for calling.', '打电话：call\ncall 的 -ing：calling', ['Thank you for calling.']],
      ['感谢对方：谢谢你提醒我们。', 'Thanks for reminding us.', '提醒我们：remind us\nremind 的 -ing：reminding', ['Thank you for reminding us.']],
      ['朋友刚和你分享了自己的经历，感谢对方：谢谢你和我分享。', 'Thanks for sharing with me.', '与我分享：share with me\nshare 的 -ing：sharing', ['Thank you for sharing with me.', 'Thanks for sharing that with me.', 'Thank you for sharing that with me.']],
      ['感谢对方：谢谢你过来。', 'Thanks for coming.', '过来：come\ncome 的 -ing：coming', ['Thank you for coming.']],
      ['感谢对方：谢谢你帮他搬家。', 'Thanks for helping him move.', '帮他搬家：help him move / help him to move\nhelp 的 -ing：helping', ['Thank you for helping him move.', 'Thanks for helping him to move.', 'Thank you for helping him to move.']]
    ]),
    make('sorry', '为自己的具体行为道歉', 'I’m sorry for…', 'I’m / We’re sorry for + 动词-ing…',
      '为自己或己方已经做过或正在做的事情表达歉意，明确说明原因。',
      '这里为自己的行为道歉，不用来表达对别人遭遇的同情。for 后接动作时使用 -ing。',
      '为某个动作道歉：sorry for + 动词-ing；I 用 am，we 用 are。', [
      ['为自己迟到道歉。', "I'm sorry for being late.", '迟到：be late\nbe 的 -ing：being', ['I am sorry for being late.']],
      ['为打断对方道歉。', "I'm sorry for interrupting.", '打断对方：interrupt / interrupt you\n-ing：interrupting', ['I am sorry for interrupting.', "I'm sorry for interrupting you."]],
      ['替自己和同伴为弄出噪音道歉。', "We're sorry for making noise.", '弄出噪音：make noise / make a noise\nmake 的 -ing：making', ['We are sorry for making noise.', "We're sorry for making a noise."]],
      ['为自己忘了对方的名字道歉。', "I'm sorry for forgetting your name.", '忘记你的名字：forget your name\nforget 的 -ing：forgetting', ['I am sorry for forgetting your name.']],
      ['为自己让对方久等道歉。', "I'm sorry for keeping you waiting.", '让你等着：keep you waiting\nkeep 的 -ing：keeping', ['I am sorry for keeping you waiting.']]
    ], [
      ['替自己和同伴为打扰对方道歉。', "We're sorry for disturbing you.", '打扰你：disturb you\n-ing：disturbing', ['We are sorry for disturbing you.']],
      ['为自己忘了打电话道歉。', "I'm sorry for forgetting to call.", '忘了打电话：forget to call\nforget 的 -ing：forgetting', ['I am sorry for forgetting to call.']],
      ['为自己弄坏杯子道歉。', "I'm sorry for breaking the cup.", '弄坏杯子：break the cup\nbreak 的 -ing：breaking', ['I am sorry for breaking the cup.']],
      ['替自己和同伴为来晚道歉。', "We're sorry for arriving late.", '来晚：arrive late\narrive 的 -ing：arriving', ['We are sorry for arriving late.']],
      ['为自己浪费了对方的时间道歉。', "I'm sorry for wasting your time.", '浪费你的时间：waste your time\nwaste 的 -ing：wasting', ['I am sorry for wasting your time.']]
    ]),
    make('sounds', '回应听到的想法或消息', 'That sounds…', 'That sounds + 形容词',
      '听到一个提议或消息后，说它听起来怎么样。可以积极回应，也可以说听起来困难或不安全。',
      '表达听后的印象，不等于承诺参加。sounds 后接形容词，如 good；sounds like 后接名词短语，如 a good idea。',
      '听起来如何：That sounds + 形容词；that 后保留 sounds 的 s。', [
      ['朋友提议周末聚餐，你觉得听起来不错。', 'That sounds good.', '不错：good'],
      ['听到朋友的旅行计划，你觉得听起来很有趣。', 'That sounds fun.', '有趣：fun'],
      ['听到一天的行程安排，你觉得听起来很累。', 'That sounds tiring.', '让人累的：tiring'],
      ['听到一个省事的办法，你觉得听起来很容易。', 'That sounds easy.', '容易：easy'],
      ['听到餐馆的人均价格，你觉得听起来很贵。', 'That sounds expensive.', '贵：expensive']
    ], [
      ['听到朋友的新点子，你觉得听起来很有意思。', 'That sounds interesting.', '有意思：interesting'],
      ['听到一段危险的行程，你觉得听起来很危险。', 'That sounds dangerous.', '危险：dangerous'],
      ['听到一个可行的安排，你觉得听起来很好。', 'That sounds great.', '很好：great'],
      ['听到一个复杂的操作过程，你觉得听起来很难。', 'That sounds difficult.', '难：difficult'],
      ['听到朋友计划在海边躺一天，你觉得听起来很放松。', 'That sounds relaxing.', '令人放松：relaxing']
    ]),
    make('decline', '表达想参加，但说明这次不方便', 'I’d love to, but…', 'I’d / We’d love to, but + 不能参加的原因',
      '回应已经收到的邀请，先表达愿意，再解释这次不方便的原因。to 后省略对方刚邀请的动作。',
      '前面需要有邀请，不能拿来直接发起邀请。这里是婉拒，不表示一定会参加。',
      '回应邀请：I’d love to, but + 完整原因；to 和 but 都保留。', [
      ['朋友邀请你出去，你很想去，但今晚很忙。', "I'd love to, but I'm busy tonight.", '今晚很忙：be busy tonight', ["I would love to, but I'm busy tonight.", 'I would love to, but I am busy tonight.']],
      ['朋友邀请你和同伴参加，但你们明天要工作。', "We'd love to, but we have to work tomorrow.", '必须工作：have to work\n明天：tomorrow', ['We would love to, but we have to work tomorrow.']],
      ['朋友邀请你出门，你很想去，但现在太累了。', "I'd love to, but I'm too tired.", '太累：too tired', ['I would love to, but I am too tired.']],
      ['朋友邀请你参加活动，你很想去，但已经有安排了。', "I'd love to, but I already have plans.", '已经有安排：already have plans', ['I would love to, but I already have plans.']],
      ['朋友邀请你和同伴今晚聚会，但你们今晚不在城里。', "We'd love to, but we're out of town tonight.", '不在城里：be out of town', ['We would love to, but we are out of town tonight.']]
    ], [
      ['朋友邀请你参加，你很想去，但明天一早要起床。', "I'd love to, but I have to get up early tomorrow.", '早起：get up early\n必须：have to', ['I would love to, but I have to get up early tomorrow.']],
      ['朋友邀请你和同伴出门，但你们得待在家里。', "We'd love to, but we have to stay at home.", '待在家里：stay at home / stay home', ['We would love to, but we have to stay at home.', "We'd love to, but we have to stay home."]],
      ['朋友邀请你赴约，你很想去，但今天要工作。', "I'd love to, but I have to work today.", '今天要工作：have to work today', ['I would love to, but I have to work today.']],
      ['朋友邀请你参加晚餐，你很想去，但今晚没空。', "I'd love to, but I'm not free tonight.", '今晚没空：not free tonight', ['I would love to, but I am not free tonight.']],
      ['朋友邀请你和同伴旅行，但你们已经有别的安排。', "We'd love to, but we already have other plans.", '别的安排：other plans', ['We would love to, but we already have other plans.']]
    ])
  ];
})();

// Audited target-preserving alternatives.
((units)=>{
 const alternatives={
  "sounds": {
    "l2": [
      "That sounds interesting.",
      "That sounds like fun."
    ]
  },
  "not-sure": {}
};
 for(const u of units){
  if(!alternatives[u.id])continue;
  const qs=[u.entry,...u.learning,...u.review], byQuestion=alternatives[u.id];
  for(const q of qs){const added=byQuestion[q.id]||(q.id==='entry'?byQuestion.l1:null);if(added)q.answers=[...new Set([...q.answers,...added])];}
  if(u.id==='not-sure')for(const q of qs)q.answers=[...new Set(q.answers.flatMap(a=>[a,a.replace('not sure if ','not sure whether ')]))];
 }
})(window.JUJIAN_CORE);
