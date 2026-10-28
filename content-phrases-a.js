'use strict';
window.JUJIAN_PHRASES_A=(()=>{
  // Contract auxiliary have only; lexical have/to is not a general 've form.
  const mayShorten = (text, full) => {
    if(!/ have$/.test(full))return true;
    const match=new RegExp('\\b'+full+'\\s+(.+)').exec(text);
    return !!match && /^(?:(?:already|just|not|never)\s+)*(?:attached|booked|bought|changed|checked|committed|completed|contacted|decided|double-checked|finished|followed|found|got|gotten|had|heard|left|made|narrowed|opened|put|read|received|resolved|ruled|run|sent|taken|tested|worked|written)\b/.test(match[1]);
  };

 const expand=answers=>{const pairs=[["I'm",'I am'],["We're",'We are'],["They're",'They are'],["You're",'You are'],["She's",'She is'],["He's",'He is'],["It's",'It is'],["That's",'That is'],["can't",'cannot'],["isn't",'is not'],["aren't",'are not'],["don't",'do not'],["doesn't",'does not'],["I'll",'I will'],["We'll",'We will']];const out=new Set(answers);for(const [a,b] of pairs)for(const s of [...out])if(new RegExp('\\b'+a+'\\b').test(s))out.add(s.replace(new RegExp('\\b'+a+'\\b','g'),b));return [...out];};
 const u=(...args)=>{const unit=window.JUJIAN_BUILD('daily-phrases',...args);unit.domain='daily';for(const q of [unit.entry,...unit.learning,...unit.review])q.answers=expand(q.answers);return unit;};
 return [
 u('p-done-with','说明一件事已做完或东西已用完','…be done with…','主语 + am / is / are done with + 事情 / 物品',
 '告诉别人一项事情已经做完，或自己不再需要使用某样东西。可以用来交接物品、结束手头任务。',
 'done with 强调已经结束处理或使用。带强烈语气时，I’m done with this 也可表示不想再继续；后面接人时，可能有不再来往的意思。',[
 ['把杂志递给朋友：这本杂志我看完了。',"I'm done with this magazine.",'这本杂志：this magazine'],
 ['告诉家人可以出门了：我们做完家务了。',"We're done with the chores.",'家务：the chores'],
 ['说明电脑现在可用：她用完电脑了。',"She's done with the computer.",'电脑：the computer'],
 ['准备交回资料：他用完这些文件了。',"He's done with these documents.",'这些文件：these documents'],
 ['告诉同事打印机空出来了：他们用完打印机了。',"They're done with the printer.",'打印机：the printer'],
 ['把充电器还给室友：我用完你的充电器了。',"I'm done with your charger.",'你的充电器：your charger'],
 ['准备交卷：我们做完这份测验了。',"We're done with the test.",'这份测验：the test'],
 ['通知下一位使用者：她用完会议室了。',"She's done with the meeting room.",'会议室：the meeting room'],
 ['准备离开食堂：他们吃完午饭了。',"They're done with lunch.",'午饭：lunch'],
 ['合上书后说：这本书我看完了。',"I'm done with this book.",'这本书：this book']
 ]),
 u('p-up-to','说明一件事由谁决定','It’s up to…','It’s up to + 人；也可接 to + 动词原形，说明由谁决定的事',
 '把选择权交给某人，或说明最后由谁决定。常用于商量吃什么、去哪儿和如何安排。',
 'It’s up to you 是由你决定，语气冷淡时也可能显得不想参与。be up to 还有其他意思；这里的 up to 后面是有决定权的人。',[
 ['朋友让你选餐厅，你把决定权交还给他：由你决定。',"It's up to you.",'你：you'],
 ['商量谁决定出发时间：由我们决定。',"It's up to us.",'我们作宾语：us'],
 ['说明谁选电影：由她来选电影。',"It's up to her to choose the film.",'她：her；选电影：choose the film / choose the movie',["It's up to her to choose the movie."]],
 ['说明谁决定寄送地址：由他们选择寄送地址。',"It's up to them to choose the delivery address.",'他们：them；选择寄送地址：choose the delivery address'],
 ['告诉家人你有最后决定权：由我决定。',"It's up to me.",'我作宾语：me'],
 ['商量谁选音乐：由他决定。',"It's up to him.",'他作宾语：him'],
 ['说明谁安排地点：由你姐姐决定。',"It's up to your sister.",'你姐姐：your sister'],
 ['共同策划活动：由我们决定在哪里见面。',"It's up to us to decide where to meet.",'决定在哪里见面：decide where to meet'],
 ['说明父母的选择权：由他们决定是否来。',"It's up to them to decide whether to come.",'决定是否来：decide whether to come'],
 ['对朋友说：由你决定什么时候离开。',"It's up to you to decide when to leave.",'决定什么时候离开：decide when to leave']
 ]),
 u('p-out-of','说明某样东西已经用完','…be out of…','主语 + am / is / are out of + 已用完的东西',
 '说明手头的某种物品已经没有了，提醒补充、购买或更换安排。',
 'out of 在这里说没有剩余，不是人在某处外面。表示某种东西卖完也可用 out of，但不表示这个地方永久不卖。',[
 ['早餐时发现没奶了：我们牛奶用完了。',"We're out of milk.",'牛奶：milk'],
 ['准备买票：我现金用完了。',"I'm out of cash.",'现金：cash'],
 ['在厨房检查食材：她鸡蛋用完了。',"She's out of eggs.",'鸡蛋：eggs'],
 ['解释为什么无法继续打印：我们纸用完了。',"We're out of paper.",'纸：paper；不可数'],
 ['对顾客说明：我们面包卖完了。',"We're out of bread.",'面包：bread；不可数'],
 ['收拾浴室时说：我们洗发水用完了。',"We're out of shampoo.",'洗发水：shampoo'],
 ['准备调味时说：我盐用完了。',"I'm out of salt.",'盐：salt'],
 ['说明为什么没法换上新电池：他手头已经没有电池了。',"He's out of batteries.",'电池（复数）：batteries；手头没有可用的电池：out of batteries'],
 ['出发前提醒同伴：我们饮用水用完了。',"We're out of drinking water.",'饮用水：drinking water'],
 ['查看柜子后说：他们咖啡用完了。',"They're out of coffee.",'咖啡：coffee']
 ]),
 u('p-middle-of','说明正忙于一件尚未做完的事','…be in the middle of…','主语 + be in the middle of + 事情 / 动词-ing',
 '说明一件事正进行着，常用来解释为什么暂时不方便被打断；不要求事情恰好做到一半。',
 'of 后接动作时用 -ing：in the middle of cooking。单说 in the middle of something 可以不交代具体在忙什么。',[
 ['暂时不能接电话：我正忙着做晚饭。',"I'm in the middle of cooking dinner.",'做晚饭：cook dinner；-ing：cooking'],
 ['请对方稍等：我们正开着会。',"We're in the middle of a meeting.",'一场会议：a meeting'],
 ['告诉朋友稍后再找她：她正忙着学习。',"She's in the middle of studying.",'学习：study；-ing：studying'],
 ['解释他为什么没接电话：他正忙着洗车。',"He's in the middle of washing the car.",'洗车：wash the car'],
 ['请访客稍等：他们正在吃午饭。',"They're in the middle of lunch.",'午饭：lunch'],
 ['回复同事：我正忙着写一封邮件。',"I'm in the middle of writing an email.",'写邮件：write an email；-ing：writing'],
 ['请朋友晚点来：我们正忙着收拾行李。',"We're in the middle of packing.",'收拾行李：pack；-ing：packing'],
 ['解释她现在不方便说话：她正忙着给宝宝洗澡。',"She's in the middle of bathing the baby.",'给宝宝洗澡：bathe the baby；-ing：bathing'],
 ['向打来电话的人解释：我正忙着做点事。',"I'm in the middle of something.",'不具体说明在忙什么：something'],
 ['暂时不能出门：他们正忙着打扫厨房。',"They're in the middle of cleaning the kitchen.",'打扫厨房：clean the kitchen']
 ]),
 u('p-nerves','表达某个人或某种行为让人心烦','…get on someone’s nerves','烦人的人 / 事 + get / gets on + my / your / his / her / our / their + nerves',
 '直接表达某个人、声音或反复发生的行为让自己心烦。常用于熟人间抱怨，语气比简单说不喜欢更强。',
 'nerves 用复数。说 You’re getting on my nerves 是在直接责备对方，容易显得不耐烦；不是委婉请求。',[
 ['向朋友抱怨噪音：这个声音真让我心烦。','This noise really gets on my nerves.','这个声音：this noise；主语单数：gets'],
 ['说明室友正在烦你：他现在真让我心烦。',"He's really getting on my nerves.",'正在让人心烦：is getting on'],
 ['说重复听到的内容：这些广告真让我们心烦。','These ads really get on our nerves.','这些广告：these ads；我们的：our'],
 ['替朋友解释：不断被打断让她心烦。','Constant interruptions get on her nerves.','不断的打断：constant interruptions'],
 ['抱怨反复出现的声音：那首歌开始让我心烦了。',"That song is starting to get on my nerves.",'开始：is starting to'],
 ['说让他烦躁的行为：大声咀嚼让他心烦。','Loud chewing gets on his nerves.','大声咀嚼：loud chewing'],
 ['谈自己等候时的感受：背景音乐真让我心烦。','The background music really gets on my nerves.','背景音乐：the background music'],
 ['直接告诉对方正在惹你烦：你现在真让我心烦。',"You're really getting on my nerves.",'你正在：you’re / you are'],
 ['抱怨手机不停响：这些通知真让我们心烦。','These notifications really get on our nerves.','这些通知：these notifications'],
 ['解释她为何不耐烦：反复被问同一个问题让她心烦。','Being asked the same question over and over gets on her nerves.','被问同一个问题：being asked the same question；反复：over and over']
 ]),
 u('p-cant-stand','强烈表达受不了某种事物或行为','…can’t stand…','主语 + can’t stand + 人 / 事物 / 动词-ing',
 '表示非常讨厌或无法忍受某个人、某种情况或行为，常用于明确表达强烈的个人感受。',
 '比 don’t like 语气强。stand 在这里是忍受，不是站立；后接动作通常用 -ing。直接说 I can’t stand you 很伤人。',[
 ['谈对噪音的感受：我受不了大声的音乐。',"I can't stand loud music.",'大声的音乐：loud music'],
 ['说明她的感受：她受不了排队等候。',"She can't stand waiting in line.",'排队等候：wait in line / wait in a queue / queue；-ing：waiting / queuing / queueing',['She cannot stand waiting in line.',"She can't stand queuing.","She can't stand queueing.","She can't stand waiting in a queue."]],
 ['说共同不喜欢的天气：我们受不了这种炎热。',"We can't stand this heat.",'这种炎热：this heat'],
 ['谈他的反感：他受不了被打断。',"He can't stand being interrupted.",'被打断：be interrupted；-ing：being'],
 ['说他们对香烟的反感：他们受不了烟味。',"They can't stand the smell of smoke.",'烟味：the smell of smoke'],
 ['解释为什么关掉电视：我受不了这个节目。',"I can't stand this show.",'这个节目：this show'],
 ['解释她为什么不愿进那家人多的店：她受不了拥挤的地方。',"She can't stand crowded places.",'拥挤的地方：crowded places'],
 ['说自己的反感：我受不了浪费食物。',"I can't stand wasting food.",'浪费食物：waste food；-ing：wasting'],
 ['谈他的睡眠习惯：他受不了开着灯睡觉。',"He can't stand sleeping with the light on.",'开着灯睡觉：sleep with the light on'],
 ['说明共同感受：我们受不了一直被催。',"We can't stand being rushed all the time.",'被催：be rushed；一直：all the time']
 ]),
 u('p-fed-up','表达对持续或反复发生的事感到厌烦','…be fed up with…','主语 + be fed up with + 人 / 事情 / 动词-ing',
 '表达某件事持续太久或一再发生，已经让人烦了、受够了。常带积累起来的不满。',
 '常用于非正式交流，语气较强。with 后接动作时用 -ing；fed up 不是吃饱了，也不等于普通的身体疲劳。',[
 ['抱怨一再等人：我受够等待了。',"I'm fed up with waiting.",'等待：wait；-ing：waiting'],
 ['说共同受够的事：我们受够这些延误了。',"We're fed up with these delays.",'这些延误：these delays'],
 ['说明她长期的不满：她受够了这份工作。',"She's fed up with this job.",'这份工作：this job'],
 ['说他不想再处理的事：他受够了每天做饭。',"He's fed up with cooking every day.",'每天做饭：cook every day'],
 ['说明他们反复遇到的问题：他们受够这些噪音了。',"They're fed up with the noise.",'这些噪音：the noise'],
 ['向朋友抱怨通勤：我受够每天开车了。',"I'm fed up with driving every day.",'每天开车：drive every day；-ing：driving'],
 ['说明共同困扰：我们受够反复的取消了。',"We're fed up with the repeated cancellations.",'反复的取消：the repeated cancellations'],
 ['解释她为什么想搬家：她受够了吵闹的邻居。',"She's fed up with her noisy neighbours.",'吵闹的邻居：noisy neighbours / neighbors',["She's fed up with her noisy neighbors."]],
 ['解释他的情绪：他受够了被忽视。',"He's fed up with being ignored.",'被忽视：be ignored；-ing：being'],
 ['说明你想调整生活：我受够每个周末都加班了。',"I'm fed up with working every weekend.",'每个周末加班：work every weekend']
 ]),
 u('p-mood-for','说明当下有没有心情做某件事','…be in the mood for…','主语 + be (not) in the mood for + 事物 / 动词-ing',
 '说自己此刻想不想要某样东西或参加某种活动，强调当下心情，不是长期爱好。',
 'for 后用名词或 -ing。也可以说 in the mood to + 动词原形。not in the mood 常用于拒绝眼前活动，不表示永远不喜欢。',[
 ['挑选晚饭：我现在想吃披萨。',"I'm in the mood for pizza.",'披萨：pizza'],
 ['商量晚上干什么：我们现在想看一部喜剧。',"We're in the mood for a comedy.",'一部喜剧：a comedy'],
 ['说明她今天的心情：她现在没心情参加聚会。',"She's not in the mood for a party.",'没心情：not in the mood；聚会：a party'],
 ['解释他暂时不想聊天：他现在没心情聊天。',"He's not in the mood for talking.",'聊天：talk；-ing：talking',["He's not in the mood to talk."]],
 ['说朋友们此刻的兴致：他们现在想跳舞。',"They're in the mood for dancing.",'跳舞：dance；-ing：dancing',["They're in the mood to dance."]],
 ['挑选午餐：我现在想吃点辣的。',"I'm in the mood for something spicy.",'点辣的：something spicy'],
 ['拒绝今晚的活动：我们现在没心情出去。',"We're not in the mood for going out.",'出去：go out',["We're not in the mood to go out."]],
 ['说她想怎么放松：她现在想喝杯茶。',"She's in the mood for a cup of tea.",'一杯茶：a cup of tea'],
 ['说明自己当下不想争论：我现在没心情争论。',"I'm not in the mood for arguing.",'争论：argue；-ing：arguing',["I'm not in the mood to argue."]],
 ['商量今天的安排：我们现在想去散散步。',"We're in the mood for a walk.",'散散步：a walk']
 ]),
 u('p-figure-out','通过思考或尝试弄明白一件事','…figure out…','figure out + 问题 / how、why 等引导的内容；figure it out',
 '通过想一想、检查或试一试，理解原因或找到办法。也可以说还没想明白、需要弄清楚。',
 '代词放中间：figure it out，不说 figure out it。它强调理解或解决的过程；find out 更侧重得知信息。',[
 ['解释你解决了操作问题：我弄明白怎么用它了。','I figured out how to use it.','弄明白过去式：figured out；怎么用它：how to use it'],
 ['说明共同的进展：我们弄清楚问题了。','We figured out the problem.','这个问题：the problem',['We figured the problem out.']],
 ['说她已经找到路线：她弄明白怎么去那里了。','She figured out how to get there.','怎么去那里：how to get there'],
 ['说明他仍然困惑：他弄不明白这个。',"He can't figure it out.",'这个用代词：it；代词放 figure 和 out 中间'],
 ['讨论漏水原因：我们需要弄清楚为什么会漏水。','We need to figure out why it is leaking.','为什么会漏水：why it is leaking',["We need to figure out why it's leaking."]],
 ['研究设备开关后说：我弄明白怎么关掉它了。','I figured out how to turn it off.','关掉它：turn it off'],
 ['讨论接下来的计划：我们需要想清楚下一步做什么。','We need to figure out what to do next.','下一步做什么：what to do next'],
 ['说她理解了操作方法：她自己弄明白了。','She figured it out herself.','她自己：herself'],
 ['看着不熟悉的地图说：我弄不明白这张地图。',"I can't figure out this map.",'这张地图：this map',["I can't figure this map out."]],
 ['大家比较路线后选定了公交：他们弄明白该坐哪班公交了。','They figured out which bus to take.','坐哪班公交：which bus to take']
 ]),
 u('p-end-up','讲述事情最后发展成了什么结果','…end up doing…','主语 + end / ended up + 动词-ing',
 '说一番变化后最后做了什么，常带原本没计划这样、事情绕了一圈的意味。',
 '后接动作时用 -ing，不是 end up to do。结果可以好也可以坏；不能一律译为失败或糟糕的结局。',[
 ['原本想出去吃，后来改变安排：我们最后在家做了饭。','We ended up cooking at home.','最后：ended up；在家做饭：cook at home'],
 ['本想坐公交却错过了：我最后步行回家了。','I ended up walking home.','步行回家：walk home'],
 ['她只想帮一会儿，后来继续留下：她最后留到了很晚。','She ended up staying late.','留到很晚：stay late'],
 ['原本想随便逛逛：他们最后买了一台新电视。','They ended up buying a new TV.','买一台新电视：buy a new TV'],
 ['一番推迟后说：他最后取消了行程。','He ended up cancelling the trip.','取消行程：cancel the trip；-ing：cancelling / canceling',['He ended up canceling the trip.']],
 ['原计划只看一集：我最后看了一整季。','I ended up watching the whole season.','一整季：the whole season'],
 ['试了几条路线之后：我们最后坐了出租车。','We ended up taking a taxi.','坐出租车：take a taxi'],
 ['她原来想学别的专业：她最后学了设计。','She ended up studying design.','学设计：study design'],
 ['原本只打算短暂停留：他们最后住了一个月。','They ended up staying for a month.','住一个月：stay for a month'],
 ['本想买新的却修好了旧的：我最后修好了旧自行车。','I ended up fixing my old bike.','修好旧自行车：fix my old bike']
 ]),
 u('p-put-off','把一件事推迟到以后再做','…put off…','put off + 事情 / 动词-ing；put it off',
 '决定暂时不做某件事，把活动或任务推后。可以中性地调整时间，也可以抱怨自己拖延。',
 'put 的过去式仍是 put。代词放中间：put it off。接动作时用 -ing；put someone off 还可能是让某人失去兴趣，意思不同。',[
 ['商量家里的安排：我们需要推迟这次聚会。','We need to put off the party.','聚会：the party',['We need to put the party off.']],
 ['承认自己的拖延：我一直拖着不给他打电话。','I keep putting off calling him.','一直：keep；打电话给他：call him'],
 ['说明大家的决定：他们推迟了搬家。','They put off moving house.','搬家：move house；-ing：moving'],
 ['把事情说清楚后提醒自己：我不能再拖这件事了。',"I can't put it off any longer.",'这件事用 it；再：any longer'],
 ['讨论旅行安排：我们把旅行推迟到了六月。','We put off the trip until June.','直到六月：until June',['We put the trip off until June.']],
 ['说她一直不愿开始：她一直拖着不收拾行李。','She keeps putting off packing.','她一直：she keeps；收拾行李：packing'],
 ['原来要今天打扫，商量改变安排：我们推迟了打扫厨房。','We put off cleaning the kitchen.','打扫厨房：clean the kitchen'],
 ['解释计划变化：他推迟了买车。','He put off buying a car.','买车：buy a car'],
 ['朋友已有预约却又想改期，你提醒：别再推迟这次预约了。',"Don't put off your appointment again.",'你的预约：your appointment；再次：again',["Don't put your appointment off again."]],
 ['讨论计划中的外出：他们把野餐推迟到了周日。','They put off the picnic until Sunday.','野餐：the picnic；直到周日：until Sunday',['They put the picnic off until Sunday.']]
 ]),
 u('p-get-rid-of','处理掉不想留的东西或摆脱困扰','…get rid of…','get / got rid of + 不想留的东西 / 困扰',
 '让某种不需要的东西离开自己的生活，或消除某个困扰。可以是丢掉、送走或清除，具体做法由情境决定。',
 '不要漏掉 of。它不规定一定扔进垃圾桶；用来谈人时会显得很不友善。',[
 ['整理衣柜：我想处理掉这些旧衣服。','I want to get rid of these old clothes.','这些旧衣服：these old clothes'],
 ['清理房间后说：我们处理掉了旧沙发。','We got rid of the old sofa.','过去式：got rid of；旧沙发：the old sofa'],
 ['说明她手机恢复空间的原因：她删掉了那些从来没用过的应用。','She got rid of the apps she never used.','从来没用过的应用：the apps she never used'],
 ['家里有异味：我们需要去掉这个气味。','We need to get rid of this smell.','这个气味：this smell'],
 ['说他已经整理好：他处理掉了坏椅子。','He got rid of the broken chair.','坏椅子：the broken chair'],
 ['清理手机：我需要删掉这些重复的照片。','I need to get rid of these duplicate photos.','重复的照片：duplicate photos'],
 ['打扫房间：他们清除了灰尘。','They got rid of the dust.','灰尘：the dust'],
 ['谈想改掉的习惯：我想改掉这个坏习惯。','I want to get rid of this bad habit.','这个坏习惯：this bad habit'],
 ['清理冰箱后说：我们处理掉了过期的食物。','We got rid of the expired food.','过期的食物：the expired food'],
 ['说广告弹窗的问题：她想去掉这些广告。','She wants to get rid of these ads.','这些广告：these ads；她想：she wants']
 ])
 ];})();
