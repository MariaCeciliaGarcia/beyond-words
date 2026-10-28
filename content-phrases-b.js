'use strict';
window.JUJIAN_PHRASES_B = (() => {
  // Contract auxiliary have only; lexical have/to is not a general 've form.
  const mayShorten = (text, full) => {
    if(!/ have$/.test(full))return true;
    const match=new RegExp('\\b'+full+'\\s+(.+)').exec(text);
    return !!match && /^(?:(?:already|just|not|never)\s+)*(?:attached|booked|bought|changed|checked|committed|completed|contacted|decided|double-checked|finished|followed|found|got|gotten|had|heard|left|made|narrowed|opened|put|read|received|resolved|ruled|run|sent|taken|tested|worked|written)\b/.test(match[1]);
  };

  const contractions = [
    ["I'm", 'I am'], ["I'll", 'I will'], ["I'd", 'I would'], ["I've", 'I have'],
    ["We're", 'We are'], ["We'll", 'We will'], ["We've", 'We have'],
    ["They're", 'They are'], ["She's", 'She is'], ["He's", 'He is'],
    ["we're", 'we are'], ["we'll", 'we will'], ["we've", 'we have'],
    ["they're", 'they are'], ["she's", 'she is'], ["he's", 'he is'], ["it's", 'it is'],
    ["don't", 'do not'], ["doesn't", 'does not'], ["didn't", 'did not'],
    ["isn't", 'is not'], ["aren't", 'are not'], ["can't", 'cannot'],
    ["haven't", 'have not'], ["hasn't", 'has not']
  ];
  const accepted = answers => {
    const out = new Set(answers);
    for (const [short,full] of contractions) for (const s of [...out]) {
      if(new RegExp('\\b'+short+'\\b').test(s)) out.add(s.replace(new RegExp('\\b'+short+'\\b','g'),full));
      if(mayShorten(s,full) && new RegExp('\\b'+full+'\\b').test(s)) out.add(s.replace(new RegExp('\\b'+full+'\\b','g'),short));
    }
    for (const s of [...out]) {
      if(s.startsWith('The thing is, ')) out.add(s.replace('The thing is, ','The thing is that '));
      if(s.startsWith('It turns out that ')) out.add(s.replace('It turns out that ','It turns out '));
      if(s.includes(' like most about ')) out.add(s.replace(' like most about ',' like the most about '));
      if(s.includes(' likes most about ')) out.add(s.replace(' likes most about ',' likes the most about '));
      if(s.startsWith('You know what? ')) out.add(s.replace('You know what? ','You know what, '));
      if(s.startsWith('Fair enough. ')) out.add(s.replace('Fair enough. ','Fair enough, '));
    }
    return [...out];
  };
  const u = (id,meaning,expression,formula,explanation,boundary,rows) => window.JUJIAN_BUILD(
    'daily-phrases',id,meaning,expression,formula,explanation,boundary,
    rows.map(([zh,en,hint,variants=[]])=>[zh,en,hint,accepted([en,...variants]).slice(1)])
  );
  return [
    u('p-thing','引出眼前真正需要考虑的问题','The thing is,…','The thing is, + 完整情况；也可用 The thing is that…',
      '在已有讨论中，把注意力引向一个关键情况，常用来说明顾虑或现实困难。thing 不指某件具体物品。',
      '后面要说出与当前讨论相关的重点；它不是澄清自己某个词是什么意思，也不是对所有消息都适用的开场。',[
      ['朋友提议今天搬家，你说出实际困难：问题是，我还没有拿到钥匙。',"The thing is, I haven't got the keys yet.",'还没拿到钥匙：haven’t got the keys yet'],
      ['大家想打车，你提醒关键情况：问题是，我们有六个人。','The thing is, there are six of us.','我们有六个人：there are six of us'],
      ['朋友建议去那家店，你说明顾虑：问题是，它周一不开门。',"The thing is, it isn't open on Mondays.",'周一营业：be open on Mondays'],
      ['同伴想再加一个景点，你说明限制：问题是，我们只有一个小时。','The thing is, we only have an hour.','只有一个小时：only have an hour'],
      ['朋友提议发消息确认，你说出问题：问题是，我没有她的号码。',"The thing is, I don't have her number.",'她的号码：her number'],
      ['同伴提议订那个房间，你说明关键情况：问题是，它只有一张床。','The thing is, it only has one bed.','只有一张床：only has one bed'],
      ['朋友催你决定，你说明顾虑：问题是，我还没有读过细节。',"The thing is, I haven't read the details yet.",'读过细节：have read the details；还没：haven’t…yet'],
      ['同伴建议他开车，你提醒事实：问题是，他不会开车。',"The thing is, he can't drive.",'他不会开车：he can’t drive'],
      ['朋友想临时过夜，你说明现实困难：问题是，我们没有空房间。',"The thing is, we don't have a spare room.",'空房间：a spare room'],
      ['大家想等她再出发，你说明限制：问题是，我们的火车六点发车。','The thing is, our train leaves at six.','六点发车：leaves at six']
    ]),
    u('p-like-most','突出最喜欢的一个方面','What I like most about…is…','What + 主语 + like / likes most about + 对象 + is + 最喜欢的方面',
      '谈到一个地方、活动或事物时，专门把最喜欢的方面提出来。前半句引出话题，is 后的信息才是重点。',
      'what 开头的部分不是问句，不作倒装。like most 和 like the most 都可；所说的是喜好，后面要明确指出喜欢的方面。',[
      ['谈新住处，突出喜爱之处：我最喜欢这个公寓的一点是它的采光。','What I like most about this flat is the light.','这个公寓：this flat / this apartment；采光：the light',['What I like most about this apartment is the light.']],
      ['谈出游感受：我们最喜欢这里的一点是安静。','What we like most about this place is the peace and quiet.','这里：this place；安静：the peace and quiet'],
      ['她说过自己的喜好，你转述：她最喜欢这个房子的一点是花园。','What she likes most about this house is the garden.','这个房子：this house；花园：the garden'],
      ['说明乘车偏好：我最喜欢坐火车的一点是能看书。','What I like most about taking the train is being able to read.','坐火车：taking the train；能看书：being able to read'],
      ['谈课程感受：我最喜欢这门课的一点是它的实用建议。','What I like most about this course is the practical advice.','这门课：this course；实用建议：the practical advice'],
      ['他讲过用餐感受，你转述：他最喜欢这家餐厅的一点是它的食物。','What he likes most about this restaurant is the food.','这家餐厅：this restaurant；食物：the food'],
      ['说明共同喜好：我们最喜欢这个社区的一点是公园。','What we like most about this neighbourhood is the park.','这个社区：this neighbourhood / this neighborhood；公园：the park',['What we like most about this neighborhood is the park.']],
      ['谈空闲活动：我最喜欢周末的一点是睡懒觉。','What I like most about weekends is sleeping in.','周末：weekends；睡懒觉：sleeping in'],
      ['他们说过旅游感受，你转述：他们最喜欢这家酒店的一点是位置。','What they like most about this hotel is the location.','这家酒店：this hotel；位置：the location'],
      ['说明自己的感受：我最喜欢自己做饭的一点是能尝试新口味。','What I like most about cooking for myself is trying new flavours.','自己做饭：cooking for myself；尝试新口味：trying new flavours / flavors',['What I like most about cooking for myself is trying new flavors.']]
    ]),
    u('p-turns-out','告诉别人刚发现的实际情况','It turns out that…','It turns out (that) + 新发现的完整情况',
      '原先不了解、猜错或还没核实时，后来发现实际情况，用它引出这个发现。后面可以说现在的事实，也可以说过去发生的事。',
      '不是单纯报告一个早就知道的事实。turns out 引出发现，that 可以省略；后面仍按事实发生的时间选择时态。',[
      ['原以为要付钱，查过后告诉同伴：原来这项服务是免费的。','It turns out that this service is free.','这项服务：this service；免费的：free'],
      ['原以为朋友住得远，刚得知：原来她住在隔壁。','It turns out that she lives next door.','住在隔壁：lives next door'],
      ['原以为周日能去，查过后说：原来博物馆周日不开门。',"It turns out that the museum isn't open on Sundays.",'博物馆：the museum；周日营业：be open on Sundays'],
      ['刚找到原因，告诉同伴：原来我们订错日期了。','It turns out that we booked the wrong date.','订错日期：booked the wrong date'],
      ['原以为他没去过，听他说后发现：原来他以前在这里住过。','It turns out that he used to live here.','以前住这里：used to live here'],
      ['原以为钱包丢了，刚找到：原来我的钱包在外套里。','It turns out that my wallet was in my coat.','我的钱包：my wallet；在外套里：in my coat'],
      ['原以为要换车，刚确认：原来这班公交直达机场。','It turns out that this bus goes straight to the airport.','直达机场：goes straight to the airport'],
      ['原以为订单没有发出，查看后发现：原来他们昨天已经寄出了。','It turns out that they sent it yesterday.','昨天寄出了：sent it yesterday'],
      ['原以为朋友不能来，刚得知：原来她可以加入我们。','It turns out that she can join us.','可以加入我们：can join us'],
      ['原以为要买新线，检查后发现：原来我们已经有合适的线了。','It turns out that we already have the right cable.','合适的线：the right cable；已经有：already have']
    ]),
    u('p-last-thing','强调自己最不愿造成的结果','The last thing I want is to…','The last thing I / we want is to + 动词原形',
      '在可能引起误会或造成麻烦时，强调那恰恰是自己最不愿做的事，常用于安抚或说明本意。',
      'last 不是动作顺序中的“最后一件事”，而是强烈表示不愿意。它说明意图，不等于影响已经消除。',[
      ['担心对方误会，说明本意：我最不想做的就是浪费你的时间。','The last thing I want is to waste your time.','浪费你的时间：waste your time'],
      ['讨论可能打扰邻居的安排，说明：我们最不想做的就是打扰邻居。','The last thing we want is to disturb the neighbours.','打扰邻居：disturb the neighbours / neighbors',['The last thing we want is to disturb the neighbors.']],
      ['话题有些敏感，说明本意：我最不想做的就是让你难堪。','The last thing I want is to embarrass you.','让你难堪：embarrass you'],
      ['担心家人焦虑，说明：我最不想做的就是让他们担心。','The last thing I want is to worry them.','让他们担心：worry them'],
      ['朋友可能觉得有压力，说明：我们最不想做的就是给你压力。','The last thing we want is to put pressure on you.','给你压力：put pressure on you'],
      ['讨论一次分歧，说明本意：我最不想做的就是引发争吵。','The last thing I want is to start an argument.','引发争吵：start an argument'],
      ['担心损害彼此关系，说明：我最不想做的就是失去你的信任。','The last thing I want is to lose your trust.','失去你的信任：lose your trust'],
      ['大家在找解决办法，说明：我们最不想做的就是增加更多麻烦。','The last thing we want is to cause more trouble.','增加更多麻烦：cause more trouble'],
      ['你提出了不同意见，安抚朋友：我最不想做的就是伤你的感情。','The last thing I want is to hurt your feelings.','伤你的感情：hurt your feelings'],
      ['解释不愿临时加要求的原因：我们最不想做的就是让事情更难。','The last thing we want is to make things harder.','让事情更难：make things harder']
    ]),
    u('p-you-know-what','引起注意，接着说新想法或发现','You know what?','You know what? + 想告诉对方的完整内容',
      '聊天中想到一个主意、决定或想补充的消息时，先用它把对方的注意力引过来，再继续说内容。',
      '是非正式的会话引子，通常不是真的考对方知道什么。它与 You know what I mean? 核对对方是否理解的作用不同。',[
      ['商量怎么去时想到新主意，接话：知道吗？我们可以走路去。','You know what? We could walk.','我们可以走路：we could walk'],
      ['刚找到失物，想告诉朋友：知道吗？我找到钥匙了。',"You know what? I've found my keys.",'找到钥匙：have found my keys'],
      ['讨论后改变决定，接话：知道吗？我改变主意了。',"You know what? I've changed my mind.",'改变主意：have changed my mind'],
      ['试过一个办法后有新发现，接话：知道吗？这个确实有用。','You know what? This actually works.','确实有用：actually works'],
      ['商量去哪儿坐时想到新主意，接话：知道吗？咱们试试那家新咖啡馆吧。',"You know what? Let's try that new cafe.",'试试那家新咖啡馆：try that new cafe / café',["You know what? Let's try that new café."]],
      ['听完一首歌后发现自己喜欢，告诉朋友：知道吗？我其实喜欢这首歌。','You know what? I actually like this song.','其实喜欢：actually like；这首歌：this song'],
      ['商量行程时有新想法，接话：知道吗？我们其实不需要车。',"You know what? We don't actually need a car.",'其实不需要车：don’t actually need a car'],
      ['大家还在争论谁来办，你作出决定：知道吗？这事我来处理。',"You know what? I'll take care of it.",'处理它：take care of it'],
      ['看过资料后找到新办法，接话：知道吗？我们可以在网上做这件事。','You know what? We could do this online.','在网上做这件事：do this online'],
      ['聊着聊着有个新决定，告诉朋友：知道吗？我打算加入读书会。',"You know what? I'm going to join the book club.",'打算加入读书会：be going to join the book club']
    ]),
    u('p-makes-sense','回应解释或想法说得通','That makes sense.','That makes sense.（独立回应）',
      '听到解释后理解了其中的道理，或觉得某个想法合理时这样回应。that 指刚才的话。',
      '表示理解或认可其中的道理，不等于保证会照做。sense 不可数；that 作主语时用 makes。',[
      ['朋友解释雨天路上会堵，建议早出发。你回应：有道理。','That makes sense.','说得通：make sense；that 后：makes'],
      ['朋友解释为何要买往返票，你理解了：这就说得通了。','That makes sense.','说得通：make sense；that 后：makes'],
      ['朋友说明选这个时间的原因，你认可：有道理。','That makes sense.','说得通：make sense；that 后：makes'],
      ['同伴解释先买票可以省时，你认可：有道理。','That makes sense.','说得通：make sense；that 后：makes'],
      ['朋友解释自己的选择，你认可其中的道理：有道理。','That makes sense.','说得通：make sense；that 后：makes'],
      ['朋友说明一个更方便的办法，你回应：有道理。','That makes sense.','说得通：make sense；that 后：makes'],
      ['室友解释为什么要关窗，你理解了：有道理。','That makes sense.','说得通：make sense；that 后：makes'],
      ['朋友说明便宜的方案反而花时间，你认可：有道理。','That makes sense.','说得通：make sense；that 后：makes'],
      ['朋友解释为何先检查文件，你认可：有道理。','That makes sense.','说得通：make sense；that 后：makes'],
      ['朋友解释为何把聚会改到周末，你理解了：有道理。','That makes sense.','说得通：make sense；that 后：makes']
    ]),
    u('p-fair-enough','接受对方给出的理由或选择','Fair enough.','Fair enough.（独立回应）',
      '听过对方的理由后，表示可以理解、可以接受；即使原先有别的想法，也愿意尊重对方的选择。',
      '常见于非正式交谈，不一定表示热烈赞同。说得很生硬时可能显得敷衍，可接一句回应说明自己接受了什么。',[
      ['朋友说今天太累不想聊天，你接受：可以理解。','Fair enough.','开头词：fair；语气：理解并接受理由'],
      ['对方说还需要一点时间决定，你接受：可以理解。','Fair enough.','开头词：fair；语气：理解并接受理由'],
      ['朋友说想自己付款，你尊重他的选择：可以理解。','Fair enough.','开头词：fair；语气：理解并接受理由'],
      ['同伴说不想进那家太贵的店，你接受：可以理解。','Fair enough.','开头词：fair；语气：理解并接受理由'],
      ['朋友说现在不想讨论这件事，你尊重：可以理解。','Fair enough.','开头词：fair；语气：理解并接受理由'],
      ['朋友解释周五没空，你接受：可以理解。','Fair enough.','开头词：fair；语气：理解并接受理由'],
      ['室友说正在开会，现在帮不了忙，你接受：可以理解。','Fair enough.','开头词：fair；语气：理解并接受理由'],
      ['朋友说想一个人走走，你尊重：可以理解。','Fair enough.','开头词：fair；语气：理解并接受理由'],
      ['对方解释为什么今天不能回复，你接受：可以理解。','Fair enough.','开头词：fair；语气：理解并接受理由'],
      ['朋友说想换个自己熟悉的办法，你接受：可以理解。','Fair enough.','开头词：fair；语气：理解并接受理由']
    ]),
    u('p-speaking-of','顺着刚提到的话题说一件相关的事','Speaking of…','Speaking of + 刚提到的主题, + 相关的新内容',
      '对方的话让你想起一件相关的事时，用它接过话题，再把讨论带向相邻的新内容。',
      'of 后的主题应与刚才的话有关；不是毫无关联地换话题。of 后可接人、事物或动作-ing。',[
      ['朋友刚提到咖啡，你顺势补充：说到咖啡，我知道附近有家好咖啡馆。','Speaking of coffee, I know a good cafe nearby.','附近的好咖啡馆：a good cafe / café nearby',['Speaking of coffee, I know a good café nearby.']],
      ['朋友刚提到旅行，你补充自己的安排：说到旅行，我下个月要去日本。',"Speaking of travel, I'm going to Japan next month.",'下个月去日本：be going to Japan next month'],
      ['大家刚提到安娜，你补充消息：说到安娜，她昨天给我打了电话。','Speaking of Anna, she called me yesterday.','昨天给我打电话：called me yesterday'],
      ['朋友刚提到做饭，你顺着说：说到做饭，我需要买些米。','Speaking of cooking, I need to buy some rice.','做饭：cooking；买些米：buy some rice'],
      ['聊天刚提到书，你补充近况：说到书，我刚看完一本好书。',"Speaking of books, I've just finished a good one.",'刚看完一本好书：have just finished a good one'],
      ['朋友刚提到电影，你接着问：说到电影，你看过那部新片吗？','Speaking of films, have you seen the new one?','电影：films / movies；你看过吗：have you seen…?',['Speaking of movies, have you seen the new one?']],
      ['同伴刚说起周末，你补充安排：说到周末，我们周日要搬家。',"Speaking of the weekend, we're moving on Sunday.",'周末：the weekend；周日搬家：are moving on Sunday'],
      ['朋友刚提到音乐，你顺势邀请：说到音乐，你愿意听听这个吗？','Speaking of music, would you like to hear this?','听听这个：hear this'],
      ['大家刚提到购物，你补充：说到购物，我们已经没咖啡了。',"Speaking of shopping, we've run out of coffee.",'购物：shopping；咖啡用完了：have run out of coffee'],
      ['朋友刚提到那家餐厅，你接着说：说到那家餐厅，我已经订好桌了。',"Speaking of that restaurant, I've booked a table.",'那家餐厅：that restaurant；订好一张桌：have booked a table']
    ]),
    u('p-make-effort','有意识地为一件事付出努力','make an effort to…','主语 + make / makes an effort to + 动词原形',
      '某件事并不总是自然做到，需要自己多花精力时，用 make an effort 表示有意识地去努力。',
      '说付出的努力，不保证最后成功。effort 前有 an，动作前用 to；常用搭配是 make an effort。',[
      ['说明自己如何维系友谊：我会努力保持联系。','I make an effort to stay in touch.','保持联系：stay in touch'],
      ['她谈过学习方法，你转述：她会努力每天阅读。','She makes an effort to read every day.','每天阅读：read every day；she 后：makes'],
      ['说明共同生活的做法：我们会努力让厨房保持整洁。','We make an effort to keep the kitchen tidy.','保持厨房整洁：keep the kitchen tidy'],
      ['他谈过与人相处的做法，你转述：他会努力认真倾听。','He makes an effort to listen carefully.','认真倾听：listen carefully'],
      ['说明自己的日常做法：我会努力记住别人的名字。',"I make an effort to remember people's names.",'别人的名字：people’s names'],
      ['说明旅行时的做法：我们会努力说当地的语言。','We make an effort to speak the local language.','说当地语言：speak the local language'],
      ['说明她平时如何与邻居相处：她会努力认识邻居。','She makes an effort to get to know her neighbours.','认识她的邻居：get to know her neighbours / neighbors',['She makes an effort to get to know her neighbors.']],
      ['说明平时如何关心家人：我会努力多打电话回家。','I make an effort to call home more often.','多打电话回家：call home more often'],
      ['他们说想减少浪费，你转述：他们会努力少用塑料。','They make an effort to use less plastic.','少用塑料：use less plastic'],
      ['说明一起出门时的做法：我们会努力准时到。','We make an effort to arrive on time.','准时到：arrive on time']
    ]),
    u('p-take-granted','把身边的支持或便利当作理所当然','take … for granted','主语 + take / takes + 人或事物 + for granted',
      '因为某个人或某种便利一直都在，渐渐忽略其价值、忘了珍惜时，用这个表达。',
      'take someone for granted 往往带不被珍惜的意味。take it for granted that… 还可表示未经核实就认定某事为真，与珍惜人或事物的侧重点不同。',[
      ['回顾自己以前的态度：我以前总把她的帮助当作理所当然。','I used to take her help for granted.','以前常常：used to；她的帮助：her help'],
      ['谈一项容易忽略的便利：我们常把干净的水当作理所当然。','We often take clean water for granted.','常常：often；干净的水：clean water'],
      ['想让朋友知道你珍惜对方：我不想把你当作理所当然。',"I don't want to take you for granted.",'不想：don’t want to；你：you'],
      ['评价他的相处方式：他把父母为他做的事当作理所当然。','He takes his parents for granted.','他的父母：his parents；he 后：takes'],
      ['提醒自己珍惜友情：我不该把朋友的支持当作理所当然。',"I shouldn't take my friends' support for granted.",'朋友的支持：my friends’ support；不该：shouldn’t',['I should not take my friends\' support for granted.']],
      ['谈容易被忽略的生活条件：我们常把自己的健康当作理所当然。','We often take our health for granted.','我们的健康：our health'],
      ['反思过去的生活：我以前总把空闲时间当作理所当然。','I used to take my free time for granted.','我的空闲时间：my free time'],
      ['她明确说过珍惜家人的支持，转述：她没有把他们的支持当作理所当然。',"She doesn't take their support for granted.",'他们的支持：their support；she 的否定：doesn’t take'],
      ['一起提醒自己珍惜环境：我们不该把这些公园当作理所当然。',"We shouldn't take these parks for granted.",'这些公园：these parks；不该：shouldn’t',['We should not take these parks for granted.']],
      ['反思自己的态度：我以前总把他的耐心当作理所当然。','I used to take his patience for granted.','他的耐心：his patience']
    ]),
    u('p-pay-attention','把注意力放到具体的人或事情上','pay attention to…','主语 + pay / pays attention to + 注意的对象',
      '有意识地看、听或思考某件事，而不是让它从自己眼前或耳边过去。可以说明自己的做法，也可以提醒别人留意。',
      'attention 通常不可数，不加 an；对象前用 to。pay attention 强调当下留意，keep…in mind 强调考虑事情时记得某条信息。',[
      ['开始组装前提醒同伴：请留意这些说明。','Please pay attention to these instructions.','这些说明：these instructions'],
      ['聊自己的购物习惯：我会留意价格。','I pay attention to prices.','价格（复数）：prices'],
      ['她说自己会仔细听，你转述：她会认真听别人说的话。','She pays attention to what people say.','别人说的话：what people say；she 后：pays'],
      ['一起找路，提醒：我们需要留意路标。','We need to pay attention to the signs.','路标：the signs；需要：need to'],
      ['做决定时说明自己的做法：我会留意细节。','I pay attention to details.','细节：details'],
      ['谈出行安排时提醒：请留意最后一班火车的时间。','Please pay attention to the time of the last train.','最后一班火车的时间：the time of the last train'],
      ['他解释自己会听取意见，转述：他会留意反馈。','He pays attention to feedback.','反馈：feedback'],
      ['向同伴提醒当前情况：我们需要留意天气。','We need to pay attention to the weather.','天气：the weather'],
      ['对方正在解释重要的事，你说明自己的反应：我正在认真听你说的话。',"I'm paying attention to what you're saying.",'正在留意：am paying attention；你说的话：what you’re saying',["I'm paying attention to what you are saying."]],
      ['他们谈到最近开始注意的问题，你转述：他们更留意食品标签了。','They pay more attention to food labels.','更留意：pay more attention；食品标签：food labels']
    ]),
    u('p-keep-mind','考虑或安排事情时记住一个重要因素','keep … in mind','keep + 重要信息 + in mind；Keep in mind that + 完整情况',
      '选方案、作计划或判断事情时，把相关信息放在心里一并考虑。也可回应别人，表示自己会记住这条提醒。',
      '不只是把内容背下来，而是作决定时别忽略它。代词放在 keep 和 in mind 之间，如 keep that in mind；完整情况可用 keep in mind that…。',[
      ['订住处前提醒同伴：请把我们的预算考虑进去。','Please keep our budget in mind.','我们的预算：our budget'],
      ['朋友给了建议，你回应：我会记住这一点的。',"I'll keep that in mind.",'这一点：that；我会：I will'],
      ['安排行程时说明：我们需要把回程时间考虑进去。','We need to keep the return time in mind.','回程时间：the return time'],
      ['讨论是否邀请她时提醒：要记得她每到周末都要工作。','Keep in mind that she works at weekends.','她周末工作：she works at weekends / on weekends',['Keep in mind that she works on weekends.']],
      ['他讲过规划时的考虑，转述：他会把家人的需要放在心上。','He keeps his family\'s needs in mind.','家人的需要：his family’s needs；he 后：keeps'],
      ['一起挑家具，提醒同伴：请记得房间的大小。','Please keep the size of the room in mind.','房间的大小：the size of the room'],
      ['选择旅行方案时说明：我们应该把天气考虑进去。','We should keep the weather in mind.','天气：the weather；应该：should'],
      ['朋友提了一个以后可能用上的建议，你回应：我会把你的建议记在心里的。',"I'll keep your suggestion in mind.",'你的建议：your suggestion'],
      ['安排晚餐时提醒：要记得他们是素食者。','Keep in mind that they are vegetarian.','他们是素食者：they are vegetarian',['Keep in mind that they are vegetarians.']],
      ['她解释自己的考虑方式，转述：她总把别人的感受放在心上。',"She always keeps other people's feelings in mind.",'别人的感受：other people’s feelings；总是：always']
    ]),
  ];
})();

// Audited target-preserving alternatives.
((units)=>{
 const alternatives={
  "p-like-most": {
    "l1": [
      "What I like most about this flat is the natural light.",
      "What I like most about this apartment is the natural light.",
      "What I like the most about this flat is the natural light.",
      "What I like the most about this apartment is the natural light."
    ]
  },
  "p-speaking-of": {
    "r3": [
      "Speaking of music, would you like to listen to this?"
    ]
  }
};
 for(const u of units){
  if(!alternatives[u.id])continue;
  const qs=[u.entry,...u.learning,...u.review], byQuestion=alternatives[u.id];
  for(const q of qs){const added=byQuestion[q.id]||(q.id==='entry'?byQuestion.l1:null);if(added)q.answers=[...new Set([...q.answers,...added])];}

 }
})(window.JUJIAN_PHRASES_B);
