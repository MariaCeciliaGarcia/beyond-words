'use strict';
window.JUJIAN_DAILY_2B=(()=>{const u=(...args)=>window.JUJIAN_BUILD('daily2',...args);return [
u('d-availability','询问是否还有可用的房间、座位或时段','Is/Are there…available?','Is there + 单数…available?；Are there + 复数…available?','询问当前是否有空位、空房或可预约的时段。','available 不保证免费；注意单复数，可预约的时段可以说 any appointments。',[
['订房时问：今晚还有房间吗？','Is there a room available tonight?','一个可用房间：a room available'],
['问：还有座位吗？','Are there any seats available?','还有座位：any seats available'],
['问：明天还有可预约的时段吗？','Are there any appointments available tomorrow?','可预约的时段：appointments available'],
['问：还有单人房吗？','Is there a single room available?','单人房：a single room'],
['问：还有桌子吗？','Are there any tables available?','桌子：tables'],
['问：今晚还有双人房吗？','Is there a double room available tonight?','双人房：a double room'],
['问：还有票吗？','Are there any tickets available?','票：tickets'],
['问：今天还有预约时段吗？','Are there any appointments available today?','今天：today'],
['问：还有安静的房间吗？','Is there a quiet room available?','安静的房间：a quiet room'],
['问：还有停车位吗？','Are there any parking spaces available?','停车位：parking spaces']
]),
u('d-include','确认价格或服务包含什么','Does…include…?','Does + 单数项目/价格 + include + 包含内容?','付款或预订前，确认具体包含的内容。','主语为单数时用 Does，include 保持原形；include 后直接接包含的东西，不加 in。',[
['问：这个价格包含早餐吗？','Does the price include breakfast?','这个价格：the price；早餐：breakfast'],
['问：这张票包含午餐吗？','Does this ticket include lunch?','这张票：this ticket；午餐：lunch'],
['问：这项服务包含配送吗？','Does this service include delivery?','服务：service；配送：delivery'],
['问：这个套餐包含饮料吗？','Does this set meal include a drink?','套餐：a set meal；一杯饮料：a drink'],
['问：这次旅行包含住宿吗？','Does the trip include accommodation?','住宿：accommodation'],
['问：这个价格包含税吗？','Does the price include tax?','税：tax'],
['问：这项服务包含安装吗？','Does this service include installation?','安装：installation'],
['问：这张票包含行李吗？','Does this ticket include baggage?','行李：baggage / luggage',['Does this ticket include luggage?']],
['问：这个套餐包含甜点吗？','Does this set meal include dessert?','甜点：dessert'],
['问：房费包含早餐吗？','Does the room rate include breakfast?','房费：the room rate']
]),
u('d-try-on','询问能否试穿某件东西','Can I try…on?','Can I try + 衣物名词 + on?；代词放 try 和 on 之间','在买衣服或鞋前请求试穿。','try on 用于穿戴物；不是试吃或尝试一种活动。',[
['问店员：我能试穿这件外套吗？','Can I try this jacket on?','这件外套：this jacket',['Can I try on this jacket?']],
['问店员：我能试穿这些鞋吗？','Can I try these shoes on?','这些鞋：these shoes',['Can I try on these shoes?']],
['手里拿着衣服，问：我能试穿它吗？','Can I try it on?','它：it，放在 try 与 on 中间'],
['问店员：我能试穿这条连衣裙吗？','Can I try this dress on?','这条连衣裙：this dress',['Can I try on this dress?']],
['问店员：我能试戴这顶帽子吗？','Can I try this hat on?','这顶帽子：this hat',['Can I try on this hat?']],
['问店员：我能试穿这件衬衫吗？','Can I try this shirt on?','这件衬衫：this shirt',['Can I try on this shirt?']],
['指着鞋问：我能试穿它们吗？','Can I try them on?','它们：them，放在 try 与 on 中间'],
['问店员：我能试穿大一点的尺码吗？','Can I try a larger size on?','更大尺码：a larger size / a bigger size',['Can I try on a larger size?','Can I try a bigger size on?','Can I try on a bigger size?']],
['问店员：我能试穿这条裤子吗？','Can I try these trousers on?','这条裤子：these trousers / these pants',['Can I try on these trousers?','Can I try these pants on?','Can I try on these pants?']],
['问店员：我能试穿那件毛衣吗？','Can I try that sweater on?','那件毛衣：that sweater',['Can I try on that sweater?']]
]),
u('d-return','说明想退回购买的东西','I’d like to return…','I’d / We’d like to return + 商品','向商家提出退货需求，后面说明具体商品。','表达请求不代表一定符合退货政策；不把 return 这里译成回家。',[
['向店员说：我想退这件衬衫。',"I'd like to return this shirt.",'退货：return；这件衬衫：this shirt',['I would like to return this shirt.']],
['向店员说：我们想退这些票。',"We'd like to return these tickets.",'这些票：these tickets',['We would like to return these tickets.']],
['向店员说：我想退这双鞋。',"I'd like to return these shoes.",'这双鞋：these shoes',['I would like to return these shoes.']],
['向店员说：我想退这个包。',"I'd like to return this bag.",'这个包：this bag',['I would like to return this bag.']],
['向店员说：我们想退这台相机。',"We'd like to return this camera.",'这台相机：this camera',['We would like to return this camera.']],
['向店员说：我想退这件外套。',"I'd like to return this jacket.",'这件外套：this jacket',['I would like to return this jacket.']],
['向店员说：我想退这个充电器。',"I'd like to return this charger.",'充电器：charger',['I would like to return this charger.']],
['向店员说：我们想退这台打印机。',"We'd like to return this printer.",'打印机：printer',['We would like to return this printer.']],
['向店员说：我想退这个订单里的东西。',"I'd like to return the items in this order.",'订单里的东西：the items in this order',['I would like to return the items in this order.']],
['向店员说：我想退这只手表。',"I'd like to return this watch.",'这只手表：this watch',['I would like to return this watch.']]
]),
u('d-recommend','请对方推荐合适的选择','What would you recommend…?','What would you recommend?；可接 for + 人或用途，或 as + 用途','面对选择时，请了解情况的人给一个推荐。for 说明推荐给谁或用于什么，as 表示作为什么。','补充推荐对象或用途，能让对方更容易给出合适建议。for 后若写动作，用动词-ing，如 for travelling。',[
['第一次来餐厅，问：你会推荐什么？','What would you recommend?','推荐：recommend'],
['问店员：你会为初学者推荐什么？','What would you recommend for a beginner?','初学者：a beginner'],
['问朋友：你会推荐什么作为礼物？','What would you recommend as a gift?','作为礼物：as a gift'],
['问餐厅服务员：你会给我们推荐什么？','What would you recommend for us?','给我们：for us'],
['问店员：你会推荐什么用于旅行？','What would you recommend for travelling?','旅行用途：for travelling / traveling',['What would you recommend for traveling?']],
['问书店店员：你会推荐什么给孩子？','What would you recommend for a child?','一个孩子：a child'],
['问咖啡馆店员：你会推荐什么给喜欢甜饮的人？','What would you recommend for someone who likes sweet drinks?','喜欢甜饮的人：someone who likes sweet drinks'],
['问朋友：你会给她推荐什么？','What would you recommend for her?','给她：for her'],
['问店员：你会推荐什么用于日常使用？','What would you recommend for everyday use?','日常使用：everyday use'],
['问懂摄影的朋友：你会推荐什么用于夜间拍照？','What would you recommend for taking photos at night?','夜间拍照：take photos at night；for 后用 taking',['What would you recommend for taking pictures at night?']]
]),
u('d-without','点餐时请求去掉某种配料','Could I have…without…?','Could I / we have + 食物或饮料 + without + 配料?','提出餐饮需求，说明希望不加什么。','without 后接配料；涉及过敏还要明确说过敏，不能只靠去掉配料表达风险。',[
['点餐：能给我一杯不加糖的茶吗？','Could I have tea without sugar?','茶：tea；不加糖：without sugar',['Could I have a cup of tea without sugar?']],
['点餐：能给我一份不加洋葱的汉堡吗？','Could I have a burger without onions?','汉堡：a burger；洋葱：onions'],
['点餐：能给我们不加奶油的汤吗？','Could we have the soup without cream?','汤：the soup；奶油：cream'],
['点餐：能给我一杯不加牛奶的咖啡吗？','Could I have coffee without milk?','咖啡：coffee；牛奶：milk',['Could I have a coffee without milk?','Could I have a cup of coffee without milk?']],
['点餐：能给我一份不加奶酪的三明治吗？','Could I have a sandwich without cheese?','三明治：a sandwich；奶酪：cheese'],
['点餐：能给我一份不加酱的沙拉吗？','Could I have the salad without dressing?','沙拉：the salad；沙拉酱：dressing'],
['点餐：能给我们不加冰的饮料吗？','Could we have the drinks without ice?','饮料：the drinks；冰：ice'],
['点餐：能给我一份不加肉的意面吗？','Could I have the pasta without meat?','意面：the pasta；肉：meat'],
['点餐：能给我一份不加酱的汉堡吗？','Could I have a burger without sauce?','汉堡：a burger；酱：sauce'],
['点餐：能给我们不加糖的咖啡吗？','Could we have coffee without sugar?','不加糖：without sugar']
]),
u('d-allergy','明确说明对某种东西过敏','…be allergic to…','主语 + am / is / are allergic to + 过敏原','用于清楚转述已知的过敏信息，例如点餐前说明。','allergic to 表达过敏，不是“不喜欢吃”；to 后接具体的东西，如 peanuts。',[
['说明已知信息：我对花生过敏。',"I'm allergic to peanuts.",'对……过敏：allergic to；花生：peanuts',['I am allergic to peanuts.']],
['说明已知信息：她对牛奶过敏。',"She's allergic to milk.",'牛奶：milk',['She is allergic to milk.']],
['说明已知信息：他对鸡蛋过敏。',"He's allergic to eggs.",'鸡蛋：eggs',['He is allergic to eggs.']],
['说明已知信息：我们对猫过敏。',"We're allergic to cats.",'猫：cats',['We are allergic to cats.']],
['说明已知信息：他们对坚果过敏。',"They're allergic to nuts.",'坚果：nuts',['They are allergic to nuts.']],
['说明已知信息：我对虾过敏。',"I'm allergic to prawns.",'虾：prawns / shrimp',['I am allergic to prawns.',"I'm allergic to shrimp.",'I am allergic to shrimp.']],
['说明已知信息：她对花粉过敏。',"She's allergic to pollen.",'花粉：pollen',['She is allergic to pollen.']],
['说明已知信息：他对狗过敏。',"He's allergic to dogs.",'狗：dogs',['He is allergic to dogs.']],
['说明已知信息：我对芝麻过敏。',"I'm allergic to sesame.",'芝麻：sesame',['I am allergic to sesame.']],
['说明已知信息：他们对鱼过敏。',"They're allergic to fish.",'鱼：fish',['They are allergic to fish.']]
]),
u('d-symptom','说明不舒服的情况持续了多久','…have/has had…for…','主语 + have / has had + 不适 + for + 持续时间','就医时描述仍在持续的不适以及持续时长。','have / has had 表示不适持续到现在。for 后接时长，如 two days；since 后接起点，如 Monday。',[
['向医生描述：我头痛两天了。',"I've had a headache for two days.",'头痛：a headache；两天：two days',['I have had a headache for two days.']],
['描述：她咳嗽一周了。',"She's had a cough for a week.",'咳嗽：a cough；一周：a week',['She has had a cough for a week.']],
['描述：他胃痛一小时了。',"He's had a stomach ache for an hour.",'胃痛：a stomach ache；一小时：an hour',['He has had a stomach ache for an hour.']],
['向医生描述：我嗓子痛三天了。',"I've had a sore throat for three days.",'嗓子痛：a sore throat',['I have had a sore throat for three days.']],
['描述：他们感冒几天了。',"They've had a cold for a few days.",'感冒：a cold；几天：a few days',['They have had a cold for a few days.']],
['向医生描述：我牙痛一天了。',"I've had a toothache for a day.",'牙痛：a toothache；一天：a day',['I have had a toothache for a day.']],
['描述：她发烧两天了。',"She's had a fever for two days.",'发烧：a fever',['She has had a fever for two days.']],
['描述：他背痛一个月了。',"He's had back pain for a month.",'背痛：back pain；一个月：a month',['He has had back pain for a month.']],
['向医生描述：我耳朵痛几个小时了。',"I've had an earache for a few hours.",'耳朵痛：an earache；几小时：a few hours',['I have had an earache for a few hours.']],
['描述：她头痛一整天了。',"She's had a headache for a whole day.",'一整天：a whole day',['She has had a headache for a whole day.']]
]),
u('d-work-as','介绍自己或别人的工作身份','…work/works as…','主语 + work / works as + 职业名称','在日常认识彼此时说明做什么工作。','as 后是职业；work for 后通常是雇主，不要混用。',[
['介绍自己：我是一名教师。','I work as a teacher.','教师：a teacher'],
['介绍她：她是一名护士。','She works as a nurse.','护士：a nurse；she 后：works'],
['介绍他：他是一名厨师。','He works as a chef.','厨师：a chef'],
['介绍共同职业：我们是设计师。','We work as designers.','设计师（复数）：designers'],
['介绍他们：他们是导游。','They work as tour guides.','导游：tour guides'],
['介绍自己：我是一名翻译。','I work as a translator.','翻译：a translator'],
['介绍她：她是一名工程师。','She works as an engineer.','工程师：an engineer'],
['介绍他：他是一名司机。','He works as a driver.','司机：a driver'],
['介绍共同职业：我们是研究人员。','We work as researchers.','研究人员：researchers'],
['介绍他们：他们是摄影师。','They work as photographers.','摄影师：photographers']
]),
u('d-right-route','确认交通工具或方向是否正确','Is this the right…for/to…?','Is this the right + 交通工具/道路 + for / to + 目的地?','上车或行走前，确认是否能通向自己的目的地。','bus / train 后可用 for 或 to 引出目的地；问路常说 the right way to + 地点。',[
['问：这是去机场的正确公交车吗？','Is this the right bus for the airport?','公交车：bus；去机场：for the airport'],
['问：这是去伦敦的正确火车吗？','Is this the right train for London?','火车：train；去伦敦：for London'],
['问路：这是去车站的正确路线吗？','Is this the right way to the station?','去车站的路线：the way to the station'],
['问：这是去市中心的正确公交车吗？','Is this the right bus for the city centre?','市中心：the city centre / center',['Is this the right bus for the city center?']],
['问路：这是去酒店的正确路线吗？','Is this the right way to the hotel?','去酒店的路线：the way to the hotel'],
['问：这是去巴黎的正确火车吗？','Is this the right train for Paris?','巴黎：Paris'],
['问路：这是去海边的正确路线吗？','Is this the right way to the beach?','海边：the beach'],
['问：这是去医院的正确公交车吗？','Is this the right bus for the hospital?','医院：the hospital'],
['问路：这是去出口的正确路线吗？','Is this the right way to the exit?','出口：the exit'],
['问：这是去牛津的正确火车吗？','Is this the right train for Oxford?','牛津：Oxford']
]),
u('d-wrong-order','纠正拿错或送错的餐品','I ordered…, not…','I / We ordered + 所点的东西, not + 送错的东西','说明自己实际点了什么，并对照当前送错的东西。','只陈述订单差异，不自动变成责备对方的语气。',[
['送来咖啡，说明：我点的是茶，不是咖啡。','I ordered tea, not coffee.','点了：ordered；茶：tea；咖啡：coffee'],
['送来鸡肉，说明：我们点的是鱼，不是鸡肉。','We ordered fish, not chicken.','鱼：fish；鸡肉：chicken'],
['送来米饭，说明：我点的是面条，不是米饭。','I ordered noodles, not rice.','面条：noodles；米饭：rice'],
['送来沙拉，说明：我们点的是汤，不是沙拉。','We ordered soup, not salad.','汤：soup；沙拉：salad'],
['送来一份，说明：我点的是两份，不是一份。','I ordered two portions, not one.','两份：two portions；一份：one'],
['送来橙汁，说明：我点的是水，不是橙汁。','I ordered water, not orange juice.','水：water；橙汁：orange juice'],
['送来披萨，说明：我们点的是意面，不是披萨。','We ordered pasta, not pizza.','意面：pasta；披萨：pizza'],
['送来巧克力蛋糕，说明：我点的是芝士蛋糕，不是巧克力蛋糕。','I ordered cheesecake, not chocolate cake.','芝士蛋糕：cheesecake；巧克力蛋糕：chocolate cake'],
['送来红茶，说明：我点的是绿茶，不是红茶。','I ordered green tea, not black tea.','绿茶：green tea；红茶：black tea'],
['送来小杯，说明：我们点的是大杯，不是小杯。','We ordered large drinks, not small ones.','大杯饮料：large drinks；小杯的：small ones']
]),
u('d-payment','确认能否用某种方式付款','Can I/we pay…?','Can I / we pay + by card / in cash / with…?','付款前确认对方是否接受一种支付方式或货币。','记住具体搭配：by card、in cash、with this card。这里不是问价格。',[
['问：我能刷卡吗？','Can I pay by card?','刷卡：pay by card'],
['问：我们能付现金吗？','Can we pay in cash?','付现金：pay in cash'],
['问：我能用这张卡付款吗？','Can I pay with this card?','用这张卡：with this card'],
['问：我们能用欧元付款吗？','Can we pay in euros?','用欧元：in euros'],
['问：我能用信用卡付款吗？','Can I pay by credit card?','信用卡：credit card'],
['问：我能付现金吗？','Can I pay in cash?','现金：cash；介词：in'],
['问：我们能刷卡吗？','Can we pay by card?','刷卡：by card'],
['问：我能用借记卡付款吗？','Can I pay by debit card?','借记卡：debit card'],
['问：我们能用英镑付款吗？','Can we pay in pounds?','英镑：pounds'],
['问：我能用另一张卡付款吗？','Can I pay with another card?','另一张卡：another card']
])
];})();

// Audited target-preserving alternatives.
((units)=>{
 const alternatives={
  "d-availability": {
    "l1": [
      "Are there any rooms available tonight?"
    ],
    "l4": [
      "Are there any single rooms available?"
    ],
    "r1": [
      "Are there any double rooms available tonight?"
    ],
    "r4": [
      "Are there any quiet rooms available?"
    ]
  },
  "d-include": {
    "l4": [
      "Does this meal include a drink?"
    ],
    "r4": [
      "Does this meal include dessert?"
    ]
  },
  "d-symptom": {
    "l3": [
      "He's had a stomachache for an hour.",
      "He has had a stomachache for an hour."
    ]
  },
  "d-right-route": {}
};
 for(const u of units){
  if(!alternatives[u.id])continue;
  const qs=[u.entry,...u.learning,...u.review], byQuestion=alternatives[u.id];
  for(const q of qs){const added=byQuestion[q.id]||(q.id==='entry'?byQuestion.l1:null);if(added)q.answers=[...new Set([...q.answers,...added])];}
  if(u.id==='d-right-route')for(const q of qs)q.answers=[...new Set(q.answers.flatMap(a=>[a,a.replace(/(right (?:bus|train)) for /,'$1 to ')]))];
 }
})(window.JUJIAN_DAILY_2B);
