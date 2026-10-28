'use strict';
window.JUJIAN_EXAM_B=(()=>{
 const u=(id,meaning,expression,formula,explanation,boundary,rows,domains=['ielts','cet4','cet6','toefl'],skill='writing')=>{const item=window.JUJIAN_BUILD('exam',id,meaning,expression,formula,explanation,boundary,rows);item.domain=domains[0];item.domains=domains;item.examSkill=skill;const spellings=[['favourite','favorite'],['colours','colors'],['organisation','organization'],['organising','organizing'],['travelling','traveling']];const pairs=[['I am',"I'm"],['I have',"I've"],['I would',"I'd"],['we are',"we're"],['it is',"it's"],['do not',"don't"],['did not',"didn't"],['cannot',"can't"]];for(const q of [item.entry,...item.learning,...item.review]){const forms=new Set(q.answers);for(const [a,b] of spellings)for(const text of [...forms])if(text.includes(a))forms.add(text.replace(a,b));for(const [full,short]of pairs)for(const s of [...forms]){const changed=window.JUJIAN_WHOLE_REPLACE(s,full,short);if(changed!==s)forms.add(changed);}q.answers=[...forms];}return item;};
 return [
 u('e-suggests','根据已给信息提出谨慎推断','This suggests that…','This suggests that + 推断的完整情况','先给出观察或例子，再说明它可能意味着什么。suggests 比 proves 更谨慎，适合证据有限的判断。','必须有前文依据；它不是凭空给观点加可信度的装饰，也不表示已经证明因果。',[
 ['前文说学生在获得反馈后修改更积极。推断：这表明反馈可能有助于学习。','This suggests that feedback may support learning.','可能有助于：may support；学习：learning'],
 ['前文说新公交开通后乘客增加。推断：这表明人们可能需要更好的公交服务。','This suggests that people may need better bus services.','更好公交服务：better bus services'],
 ['前文说志愿者参与率很高。推断：这表明居民愿意提供帮助。','This suggests that residents are willing to help.','居民：residents；愿意：be willing to'],
 ['前文说用户反复询问同一问题。推断：这表明这些说明可能不清楚。','This suggests that the instructions may be unclear.','说明：the instructions；不清楚：unclear'],
 ['前文说许多人选择较灵活的课程。推断：这表明灵活性很重要。','This suggests that flexibility matters.','灵活性：flexibility；很重要：matters'],
 ['前文说公园重新开放后使用人数上升。推断：这表明公共空间受到重视。','This suggests that public spaces are valued.','公共空间：public spaces；受到重视：be valued'],
 ['前文说价格降低后参与人数增加。推断：这表明费用可能是一个障碍。','This suggests that cost may be a barrier.','费用：cost；障碍：a barrier'],
 ['前文说学生喜欢实践任务。推断：这表明实践活动可能提高参与度。','This suggests that practical activities may increase engagement.','实践活动：practical activities；参与度：engagement'],
 ['前文说多个团队遇到同样困难。推断：这表明问题可能是普遍的。','This suggests that the problem may be widespread.','普遍的：widespread'],
 ['前文说课程调整后缺席率降低。推断：这表明这种改变可能有帮助。','This suggests that the change may be helpful.','这种改变：the change；有帮助：helpful']
 ]),
 u('e-to-extent','承认一种判断部分成立','To some extent,…','To some extent, + 部分成立的完整判断','表达有限认可，承认一种说法有道理，但不把它推广到所有情况。','后面仍要给出具体判断，必要时说明限制。不要把它与 completely 同时用于同一层面的断言。',[
 ['讨论教育中的技术：在一定程度上，技术能让学习更容易。','To some extent, technology can make learning easier.','让学习更容易：make learning easier'],
 ['谈个人责任：在一定程度上，结果取决于个人努力。','To some extent, results depend on individual effort.','个人努力：individual effort；取决于：depend on'],
 ['分析交通政策：在一定程度上，更低票价能鼓励人们乘公交。','To some extent, lower fares can encourage bus use.','更低票价：lower fares；乘公交：bus use'],
 ['讨论竞争：在一定程度上，竞争能提高表现。','To some extent, competition can improve performance.','竞争：competition；表现：performance'],
 ['评价网络信息：在一定程度上，在线评价是有用的。','To some extent, online reviews are useful.','在线评价：online reviews'],
 ['谈习惯：在一定程度上，我们的环境影响我们的选择。','To some extent, our environment influences our choices.','环境：environment；影响：influence'],
 ['讨论收入：在一定程度上，收入影响生活质量。','To some extent, income affects quality of life.','收入：income；生活质量：quality of life'],
 ['分析课堂规模：在一定程度上，班级大小会影响教学。','To some extent, class size affects teaching.','班级大小：class size'],
 ['讨论媒体：在一定程度上，广告塑造消费习惯。','To some extent, advertising shapes buying habits.','塑造：shape；消费习惯：buying habits'],
 ['分析教育机会：在一定程度上，在线课程能减少距离障碍。','To some extent, online courses can reduce distance barriers.','距离障碍：distance barriers'] ],['ielts','cet4','cet6','toefl'],'writing'),
 u('e-admittedly','先承认一个事实或限制','It is true that…','It is true that + 承认的完整情况','先承认对方提出的事实或一个真实的限制，再决定是否补充自己的不同判断。它让承认与反驳之间的关系更清楚。','后面用完整陈述句。承认事实不表示赞同所有结论；可以再解释限制或不同看法，但不必机械接 however。',[
 ['支持新设施但承认代价：诚然，这个方案很昂贵。','It is true that this plan is expensive.','这个方案：this plan；昂贵：expensive'],
 ['支持线上学习但承认局限：诚然，在线课程需要自律。','It is true that online courses require self-discipline.','需要自律：require self-discipline'],
 ['支持公共交通但承认现状：诚然，公交车有时会延误。','It is true that buses are sometimes delayed.','有时：sometimes；延误：be delayed'],
 ['讨论小组任务：诚然，小组合作并不总是容易。','It is true that group work is not always easy.','并不总是：not always'],
 ['提倡新方法：诚然，这种方法需要时间。','It is true that this approach takes time.','方法：approach；需要时间：takes time'],
 ['支持城市更新：诚然，施工会造成不便。','It is true that construction causes inconvenience.','施工：construction；不便：inconvenience'],
 ['讨论电动车：诚然，电动车的价格仍然很高。','It is true that electric cars are still expensive.','电动车：electric cars'],
 ['提倡志愿活动：诚然，并不是每个人都有空闲时间。','It is true that not everyone has free time.','并非每个人：not everyone；空闲时间：free time'],
 ['支持新规则：诚然，这些规则可能限制选择。','It is true that these rules may limit choice.','限制选择：limit choice'],
 ['谈新系统：诚然，员工需要额外培训。','It is true that staff need additional training.','额外培训：additional training'] ],['ielts','cet4','cet6','toefl'],'writing'),
 u('e-outweigh','比较两方面的重要性，给出总体判断','The benefits outweigh the costs.','收益 / 风险 / 价值 + outweigh / outweighs + 相比较的另一方','比较益处、成本或风险时，指出哪一方在重要性上更大。需要在上下文中解释权衡理由。','outweigh 后直接接比较对象，不加 than。不是仅仅比较优缺点的数量，也不能代替对风险的具体分析。',[
 ['评价一项政策：这些好处超过了成本。','The benefits outweigh the costs.','好处：benefits；成本：costs'],
 ['评价某种方案：这些风险超过了潜在的收益。','The risks outweigh the potential gains.','潜在收益：potential gains'],
 ['讨论步行通勤：健康益处超过了不便。','The health benefits outweigh the inconvenience.','健康益处：health benefits；不便：inconvenience'],
 ['权衡教育投入：长期收益超过了初期支出。','The long-term gains outweigh the initial expense.','长期收益：long-term gains；初期支出：initial expense'],
 ['评价新设备：维护成本超过了节省的费用。','The maintenance costs outweigh the savings.','维护成本：maintenance costs；节省费用：savings'],
 ['总结一个选择：这些优点超过了缺点。','The advantages outweigh the disadvantages.','优点／缺点：advantages / disadvantages'],
 ['评估便利性：隐私风险超过了便利。','The privacy risks outweigh the convenience.','隐私风险：privacy risks；便利：convenience'],
 ['讨论更大设施：额外空间的价值超过了更高的租金。','The value of the extra space outweighs the higher rent.','额外空间的价值：the value of the extra space'],
 ['权衡培训：员工培训的好处超过了短期成本。','The benefits of staff training outweigh the short-term costs.','员工培训：staff training；短期成本：short-term costs'],
 ['评价某项活动：这次经历的价值超过了花费。','The value of the experience outweighs the expense.','经历的价值：the value of the experience；花费：the expense'] ],['ielts','cet6','toefl'],'writing'),
 u('e-in-other-words','用另一种表述澄清刚才的意思','In other words,…','前述意思。In other words, + 同义的解释','把已经说过的抽象信息换成更清楚、具体的说法，而不是增加另一个独立论点。','改写应保留核心意思，不能把“可能”改成“必然”，也不能借改写加入未经说明的结论。',[
 ['前句说课程不限制上课地点。换句话说：学生可以在任何地方学习。','In other words, students can study anywhere.','任何地方：anywhere'],
 ['前句说付完标价后不用再付钱。换句话说：没有额外费用。','In other words, there are no extra charges.','没有额外费用：there are no extra charges'],
 ['前句说这是自愿项目。换句话说：人们可以选择是否参加。','In other words, people can choose whether to take part.','选择是否参加：choose whether to take part'],
 ['前句说资源不是无限的。换句话说：资源是有限的。','In other words, resources are limited.','资源：resources；有限：limited'],
 ['前句说这不是永久安排。换句话说：这种改变是暂时的。','In other words, the change is temporary.','暂时的：temporary'],
 ['前句说周五是最后期限。换句话说：这项任务必须最晚周五完成。','In other words, the task must be completed by Friday.','必须完成：must be completed；最晚周五：by Friday'],
 ['前句说大家平均分摊费用。换句话说：每个人支付同样多的钱。','In other words, everyone pays the same amount.','相同金额：the same amount'],
 ['前句说决定权在当地居民。换句话说：居民自己作出选择。','In other words, residents make the choice themselves.','居民：residents；自己：themselves'],
 ['前句说服务全天可用。换句话说：人们随时可以使用它。','In other words, people can use it at any time.','随时：at any time'],
 ['前句说不同的人需要不同的答案。换句话说：没有一个答案适用于所有人。','In other words, no single answer works for everyone.','没有一个答案：no single answer；适用于：works for']
 ]),
 u('e-limitation','指出方法或证据的一个具体局限','One limitation of…is…','One limitation of + 方法 / 证据 + is + 局限','评价某种方法或研究信息时，明确它在哪一方面不能充分支持结论。one 表示这是其中一个局限。','局限要与对象有关，不能只是泛泛说“不完美”。完整情况可接 is that…；名词短语直接接 is。',[
 ['评价问卷方法：这种方法的一个局限是样本量小。','One limitation of this method is the small sample size.','样本量小：the small sample size'],
 ['评价线上调查：在线调查的一个局限是有些人无法上网。','One limitation of online surveys is that some people lack internet access.','无法上网：lack internet access'],
 ['评价一个方案：这个方案的一个局限是成本高。','One limitation of this plan is the high cost.','高成本：the high cost'],
 ['评价资料：这些数据的一个局限是只覆盖一年。','One limitation of these data is that they cover only one year.','这些数据：these data；只覆盖一年：cover only one year'],
 ['评价比较方式：这种比较的一个局限是忽略了年龄。','One limitation of this comparison is that it ignores age.','比较：comparison；忽略：ignores'],
 ['评价课程：这门课的一个局限是缺乏实践。','One limitation of this course is the lack of practice.','缺乏实践：the lack of practice'],
 ['评价实验：这个实验的一个局限是时间短。','One limitation of this experiment is its short duration.','实验：experiment；时间短：its short duration'],
 ['评价选择：这个选项的一个局限是容量有限。','One limitation of this option is its limited capacity.','容量有限：its limited capacity'],
 ['评价证据：这些证据的一个局限是来自单一来源。','One limitation of this evidence is that it comes from a single source.','证据不可数：evidence；单一来源：a single source'],
 ['评价技术：这种技术的一个局限是需要稳定的供电。','One limitation of this technology is that it requires a reliable power supply.','稳定供电：a reliable power supply'] ],['ielts','cet6','toefl'],'writing'),
 u('e-account-for','说明某一部分占总体的比例','…account for…','部分 + account / accounts for + 数量 / 比例','描述图表或给定数据时，说清某个类别占总量的多少。先明确总量是什么，再给比例。','比例含义与 account for 表示“解释原因”的用法不同。占比说一部分占整体的多少，与上升或下降的幅度不同。',[
 ['给定数据中，公交出行占全部出行的40%。','Bus journeys account for 40% of all journeys.','全部出行：all journeys'],
 ['给定图表中，住房占总支出的30%。','Housing accounts for 30% of total spending.','总支出：total spending'],
 ['给定数据中，女性占参与者的55%。','Women account for 55% of participants.','参与者：participants'],
 ['给定图表中，线上销售占总销售额的一半。','Online sales account for half of total sales.','一半：half；总销售额：total sales'],
 ['给定数据中，这两个类别占总量的70%。','These two categories account for 70% of the total.','这两类别：these two categories；总量：the total'],
 ['给定图表中，食物占家庭支出的四分之一。','Food accounts for a quarter of household spending.','四分之一：a quarter；家庭支出：household spending'],
 ['给定数据中，年轻人占访客的60%。','Young people account for 60% of visitors.','访客：visitors'],
 ['给定图表中，汽车占交通排放的80%。','Cars account for 80% of transport emissions.','交通排放：transport emissions'],
 ['给定数据中，这一组占样本的三分之一。','This group accounts for a third of the sample.','三分之一：a third；样本：the sample'],
 ['给定图表中，可再生能源占总产量的20%。','Renewable energy accounts for 20% of total production.','可再生能源：renewable energy；总产量：total production']
 ],['ielts'],'writing'),
 u('e-rise-from','准确描述数值从起点上升到终点','…rise from…to…','数量 + rose / rises from + 起点 + to + 终点','描述给定图表中的变化，把起点和终点都写清楚，数字应有可比较的单位。','rise 是不及物动词；过去式是 rose。rose to 终点与 rose by 增量不同，不能互换数字。',[
 ['描述图表：人数从2010年的100人上升到2020年的150人。','The number rose from 100 in 2010 to 150 in 2020.','人数：the number；上升过去式：rose'],
 ['描述数据：销售额从200万元上升到300万元。','Sales rose from two million yuan to three million yuan.','百万：million；销售额：sales'],
 ['描述图表：这个比例从20%上升到35%。','The proportion rose from 20% to 35%.','比例：the proportion'],
 ['描述数据：平均年龄从30岁上升到34岁。','The average age rose from 30 to 34.','平均年龄：the average age'],
 ['描述图表：失业率从4%上升到6%。','The unemployment rate rose from 4% to 6%.','失业率：the unemployment rate'],
 ['描述数据：价格从10美元上升到15美元。','The price rose from ten dollars to fifteen dollars.','价格：the price；美元：dollars'],
 ['描述图表：每天的使用量从50升上升到80升。','Daily use rose from 50 litres to 80 litres.','每天使用量：daily use；升：litres / liters',['Daily use rose from 50 liters to 80 liters.']],
 ['描述数据：温度从15度上升到22度。','The temperature rose from 15 degrees to 22 degrees.','温度：the temperature；度：degrees'],
 ['描述图表：访客人数从500人上升到800人。','Visitor numbers rose from 500 to 800.','访客人数：visitor numbers'],
 ['描述数据：家庭收入从每月3000美元上升到4000美元。','Household income rose from 3000 dollars a month to 4000 dollars a month.','家庭收入：household income；每月：a month']
 ],['ielts'],'writing'),
 u('e-remain-stable','说明数值或状况在一段时间内保持稳定','…remain stable…','数值 / 状况 + remain / remained stable + 时间 / 数值位置','概述给定图表时，说明某项没有出现明显变化。可以进一步交代稳定在哪个数值。','stable 不表示数值绝对一动不动；若存在小波动可加 relatively。at 后说明水平，不表示变化幅度。',[
 ['描述图表：价格在整个时期保持稳定。','The price remained stable throughout the period.','整个时期：throughout the period'],
 ['描述数据：这个比例稳定在20%。','The proportion remained stable at 20%.','稳定在：remained stable at'],
 ['描述图表：访客人数在夏季保持稳定。','Visitor numbers remained stable during the summer.','访客人数：visitor numbers；夏季：during the summer'],
 ['描述数据：销售额在2018年之后保持稳定。','Sales remained stable after 2018.','销售额：sales；之后：after'],
 ['描述图表：温度保持相对稳定。','The temperature remained relatively stable.','相对：relatively'],
 ['描述数据：需求在最后两年保持稳定。','Demand remained stable in the final two years.','需求：demand；最后两年：the final two years'],
 ['描述图表：失业率稳定在5%左右。','The unemployment rate remained stable at around 5%.','失业率：the unemployment rate；左右：around'],
 ['描述数据：平均收入在这五年中保持稳定。','Average income remained stable over the five years.','平均收入：average income'],
 ['描述图表：用水量在冬季保持稳定。','Water use remained stable during the winter.','用水量：water use；冬季：during the winter'],
 ['描述数据：两个群体的人数都保持稳定。','The numbers in both groups remained stable.','两群体的人数：the numbers in both groups']
 ],['ielts'],'writing'),
 u('e-known-for','介绍一个地方或事物以什么闻名','…be known for…','对象 + be known for + 特色 / 动词-ing','介绍城市、文化或产品时，把对象与它为人所知的特点连接起来。','for 后是特点或成就；be known as 后是身份或名称。its 和 their 要与前面的主语对应。',[
 ['描述城镇：这个城镇以传统手工艺闻名。','This town is known for its traditional crafts.','传统手工艺：traditional crafts'],
 ['介绍地区：这个地区以茶闻名。','This region is known for its tea.','地区：region；茶：tea'],
 ['描述一种艺术：这种艺术以鲜艳的色彩闻名。','This art form is known for its bright colours.','艺术形式：art form；鲜艳色彩：bright colours',['This art form is known for its bright colors.']],
 ['介绍村庄：这个村庄以古老的建筑闻名。','This village is known for its old buildings.','村庄：village；古老建筑：old buildings'],
 ['描述一项活动：这个节日以热闹的庆祝活动闻名。','This festival is known for its lively celebrations.','热闹庆祝：lively celebrations'],
 ['介绍城市：这座城市以丰富的历史闻名。','This city is known for its rich history.','丰富的历史：rich history'],
 ['介绍一个博物馆：这座博物馆以珍贵的藏品闻名。','This museum is known for its valuable collections.','珍贵藏品：valuable collections'],
 ['描述湖：这个湖以清澈的水闻名。','This lake is known for its clear water.','清澈的水：clear water'],
 ['介绍产品：这种产品以耐用闻名。','This product is known for its durability.','耐用性：durability'],
 ['描述一个地区的特点：这些岛屿以美丽的海滩闻名。','These islands are known for their beautiful beaches.','这些岛屿：these islands；海滩：beaches']
 ],['cet4','cet6'],'translation'),
 u('e-date-back','说明某事物的起源可以追溯到何时','…date back to…','事物 + date / dates back to + 起源时间','介绍历史或传统时，用现在时说明它的起源在过去的哪个时期。','一般用 dates back to 而不是 is dated back to。接起点时间用 to；接距今多久，可直接用 dates back several hundred years。',[
 ['介绍起源：这个传统可以追溯到19世纪。','This tradition dates back to the nineteenth century.','19世纪：the nineteenth century'],
 ['介绍年代：这座建筑可以追溯到1850年。','This building dates back to 1850.','这座建筑：this building'],
 ['介绍历史：这些习俗可以追溯到古代。','These customs date back to ancient times.','这些习俗：these customs；古代：ancient times'],
 ['介绍起源：这项节庆可以追溯到几百年前。','This festival dates back several hundred years.','几百年：several hundred years'],
 ['介绍年代：这座桥可以追溯到18世纪。','This bridge dates back to the eighteenth century.','18世纪：the eighteenth century'],
 ['介绍起源：这种技术可以追溯到20世纪早期。','This technique dates back to the early twentieth century.','技术：technique；20世纪早期：the early twentieth century'],
 ['介绍历史：这段友谊可以追溯到我们的大学时代。','This friendship dates back to our university days.','友谊：friendship；大学时代：university days'],
 ['介绍起源：这个组织可以追溯到1980年。','This organisation dates back to 1980.','组织：organisation / organization',['This organization dates back to 1980.']],
 ['介绍历史：这些记录可以追溯到上个世纪。','These records date back to the last century.','这些记录：these records；上个世纪：the last century'],
 ['介绍起源：这种仪式可以追溯到几千年前。','This ceremony dates back thousands of years.','仪式：ceremony；几千年：thousands of years']
 ],['cet4','cet6'],'translation'),
 u('e-cover-area','用面积说明一个地方或设施的规模','…cover an area of…','地方 / 设施 + cover / covers an area of + 面积','介绍地理环境或设施规模时，准确表达占地面积。需要同时给出数值和单位。','area 前有 an。平方公里用 square kilometres，不能省成 kilometres；公顷用 hectares。',[
 ['介绍面积：这个公园占地20平方公里。','This park covers an area of 20 square kilometres.','平方公里：square kilometres / square kilometers',['This park covers an area of 20 square kilometers.']],
 ['介绍面积：这个湖的面积是50平方公里。','This lake covers an area of 50 square kilometres.','湖：lake；平方公里：square kilometres',['This lake covers an area of 50 square kilometers.']],
 ['介绍面积：校园占地100公顷。','The campus covers an area of 100 hectares.','校园：the campus；公顷：hectares'],
 ['介绍面积：这个展览占地3000平方米。','The exhibition covers an area of 3000 square metres.','展览：the exhibition；平方米：square metres',['The exhibition covers an area of 3000 square meters.']],
 ['介绍面积：这片森林面积为200平方公里。','This forest covers an area of 200 square kilometres.','森林：forest',['This forest covers an area of 200 square kilometers.']],
 ['介绍面积：这座花园占地5公顷。','This garden covers an area of five hectares.','五公顷：five hectares'],
 ['介绍面积：这个地区面积为800平方公里。','This region covers an area of 800 square kilometres.','地区：region',['This region covers an area of 800 square kilometers.']],
 ['介绍面积：这个自然保护区面积为60平方公里。','This nature reserve covers an area of 60 square kilometres.','自然保护区：nature reserve',['This nature reserve covers an area of 60 square kilometers.']],
 ['介绍面积：这座博物馆占地12000平方米。','This museum covers an area of 12000 square metres.','博物馆：museum',['This museum covers an area of 12000 square meters.']],
 ['介绍面积：这片湿地面积为30平方公里。','This wetland covers an area of 30 square kilometres.','湿地：wetland',['This wetland covers an area of 30 square kilometers.']]
 ],['cet4','cet6'],'translation'),
 u('e-favourite-memory','选出一段值得讲述的个人回忆','One of my favourite memories is…','One of my favourite memories is + 回忆中的事情 / 动词-ing','谈个人经历时，先指出一段喜欢的回忆，再自然展开时间、人物和细节。','one of 后面用 memories 复数，但主语整体是 one，后面用 is。先选一段具体回忆，再展开时间和细节。',[
 ['谈一次家庭经历：我最喜欢的回忆之一是和家人一起露营。','One of my favourite memories is camping with my family.','和家人露营：camping with my family'],
 ['谈童年：我最喜欢的回忆之一是和爷爷奶奶一起做饭。','One of my favourite memories is cooking with my grandparents.','爷爷奶奶：grandparents；一起做饭：cooking with'],
 ['谈学校经历：我最喜欢的回忆之一是参加校队。','One of my favourite memories is joining the school team.','参加校队：joining the school team'],
 ['谈旅行：我最喜欢的回忆之一是第一次看到大海。','One of my favourite memories is seeing the sea for the first time.','第一次：for the first time'],
 ['谈成长：我最喜欢的回忆之一是学会骑自行车。','One of my favourite memories is learning to ride a bike.','学会骑车：learning to ride a bike'],
 ['谈一次庆祝：我最喜欢的回忆之一是给妈妈过生日。',"One of my favourite memories is celebrating my mother's birthday.",'庆祝妈妈生日：celebrating my mother’s birthday'],
 ['谈友情：我最喜欢的回忆之一是和朋友一起看日出。','One of my favourite memories is watching the sunrise with friends.','看日出：watching the sunrise'],
 ['谈校园生活：我最喜欢的回忆之一是组织一次慈善活动。','One of my favourite memories is organising a charity event.','组织慈善活动：organising / organizing a charity event',['One of my favourite memories is organizing a charity event.']],
 ['谈一次学习经历：我最喜欢的回忆之一是完成我的第一个项目。','One of my favourite memories is completing my first project.','完成第一个项目：completing my first project'],
 ['谈家乡生活：我最喜欢的回忆之一是在乡下度过夏天。','One of my favourite memories is spending summers in the countryside.','在乡下度过夏天：spending summers in the countryside']
 ],['ielts','toefl'],'speaking'),
 u('e-when-comes','把回答聚焦到一个具体方面','When it comes to…','When it comes to + 话题名词 / 动词-ing, + 个人判断','谈偏好或经验时，先指出自己在谈哪个方面，再给出选择或评价。适合把大问题回答得更具体。','to 是介词，后面可接 -ing。它不是字面上的“来到某地”，也不需要每句话都用来开头。',[
 ['回答阅读偏好：说到书，我更喜欢小说。','When it comes to books, I prefer novels.','书：books；小说：novels'],
 ['回答交通偏好：说到旅行，我更喜欢坐火车。','When it comes to travelling, I prefer taking the train.','旅行：travelling / traveling；坐火车：taking the train',['When it comes to traveling, I prefer taking the train.']],
 ['说明学习方法：说到学习，我需要一个安静的地方。','When it comes to studying, I need a quiet place.','学习：studying；安静地方：a quiet place'],
 ['谈选择食物：说到吃的，我喜欢尝试新东西。','When it comes to food, I enjoy trying new things.','食物：food；尝试新东西：trying new things'],
 ['回答休闲问题：说到放松，我通常会去散步。','When it comes to relaxing, I usually go for a walk.','放松：relaxing；散步：go for a walk'],
 ['谈个人习惯：说到购物，我总会比较价格。','When it comes to shopping, I always compare prices.','购物：shopping；比较价格：compare prices'],
 ['谈音乐偏好：说到音乐，我更喜欢现场演出。','When it comes to music, I prefer live performances.','现场演出：live performances'],
 ['谈团队经验：说到合作，我重视清晰的沟通。','When it comes to teamwork, I value clear communication.','团队合作：teamwork；重视：value'],
 ['谈运动选择：说到运动，我更喜欢游泳。','When it comes to exercise, I prefer swimming.','运动：exercise；游泳：swimming'],
 ['谈空闲安排：说到周末，我喜欢待在户外。','When it comes to weekends, I like being outdoors.','待在户外：being outdoors']
 ],['ielts','toefl'],'speaking'),
 u('e-appreciated','回顾经历中自己特别认可的地方','What I appreciated about…was…','What I appreciated about + 经历对象 + was + 认可的方面','回顾旅行、课程或他人的帮助时，把当时真正让自己感激或觉得可贵的方面突出出来。','appreciated 不只是泛泛的喜欢，还含理解价值或感激。what 从句使用陈述语序；过去经历用 was。',[
 ['回顾课程：我很认可这门课的一点是清晰的解释。','What I appreciated about the course was the clear explanations.','课程：the course；清晰解释：the clear explanations'],
 ['回顾帮助：我很感激她的一点是她的耐心。','What I appreciated about her was her patience.','她的耐心：her patience'],
 ['回顾住宿：我很认可这家酒店的一点是周到的服务。','What I appreciated about the hotel was the thoughtful service.','周到服务：the thoughtful service'],
 ['回顾团队经历：我很认可这个团队的一点是开放的沟通。','What I appreciated about the team was the open communication.','开放沟通：the open communication'],
 ['回顾活动：我很认可这次活动的一点是轻松的氛围。','What I appreciated about the event was the relaxed atmosphere.','轻松氛围：the relaxed atmosphere'],
 ['回顾老师的帮助：我很感激这位老师的一点是详细的反馈。','What I appreciated about the teacher was the detailed feedback.','详细反馈：the detailed feedback'],
 ['回顾城市生活：我很认可这个城市的一点是便利的公共交通。','What I appreciated about the city was the convenient public transport.','便利公交：the convenient public transport'],
 ['回顾旅行：我很认可这次旅行的一点是可以自由探索。','What I appreciated about the trip was the freedom to explore.','自由探索：the freedom to explore'],
 ['回顾工作坊：我很认可这个工作坊的一点是实用的建议。','What I appreciated about the workshop was the practical advice.','工作坊：workshop；实用建议：practical advice'],
 ['回顾一次安排：我很认可这个计划的一点是它的灵活性。','What I appreciated about the plan was its flexibility.','它的灵活性：its flexibility']
 ],['ielts','toefl'],'speaking'),
 u('e-found-particularly','用具体评价回顾自己的体验','I found…particularly…','I found + 体验对象 + particularly + 形容词','描述经历时，说明自己实际觉得哪个人、事物或方面尤其如何。found 在这里是感觉、认为，不是找到失物。','特别的评价应有理由或细节支持。形容词放在宾语后，不需要再加 was；不是 I found it was difficult 的同一种结构。',[
 ['回顾课程：我觉得这门课特别有用。','I found the course particularly useful.','有用：useful'],
 ['描述旅行体验：我觉得那次旅程特别放松。','I found the journey particularly relaxing.','旅程：journey；放松的：relaxing'],
 ['谈一次学习困难：我觉得发音特别难。','I found the pronunciation particularly difficult.','发音：pronunciation；难：difficult'],
 ['描述服务经历：我觉得工作人员特别乐于助人。','I found the staff particularly helpful.','员工：staff；乐于助人：helpful'],
 ['回顾参观：我觉得这个展览特别有趣。','I found the exhibition particularly interesting.','展览：exhibition；有趣：interesting'],
 ['谈一次合作：我觉得讨论特别有价值。','I found the discussion particularly valuable.','讨论：discussion；有价值：valuable'],
 ['回顾观影：我觉得结尾特别感人。','I found the ending particularly moving.','结尾：ending；感人：moving'],
 ['谈一次搬家：我觉得整个过程特别累人。','I found the whole process particularly tiring.','整个过程：the whole process；累人：tiring'],
 ['回顾建议：我觉得她的解释特别清楚。','I found her explanation particularly clear.','她的解释：her explanation'],
 ['描述一段经历：我觉得这次挑战特别值得。','I found the challenge particularly rewarding.','挑战：challenge；值得的：rewarding']
 ],['ielts','toefl'],'speaking')
 ];})();

// Authored equivalents for figures and units in these specific data exercises.
(()=>{
 const variants={
  'e-rise-from':{
   l2:['Sales rose from 2 million yuan to 3 million yuan.','Sales rose from 2 to 3 million yuan.','Sales rose from 2,000,000 yuan to 3,000,000 yuan.'],
   r1:['The price rose from 10 dollars to 15 dollars.','The price rose from $10 to $15.','The price rose from 10 to 15 dollars.'],
   r2:['Daily use rose from 50 to 80 litres.','Daily use rose from 50 to 80 liters.'],
   r3:['The temperature rose from 15 to 22 degrees.'],
   r5:['Household income rose from 3,000 dollars a month to 4,000 dollars a month.','Household income rose from $3,000 a month to $4,000 a month.','Household income rose from $3,000 to $4,000 per month.','Household income rose from 3000 to 4000 dollars a month.']
  },
  'e-date-back':{
   l1:['This tradition dates back to the 19th century.'],
   l4:['This festival dates back hundreds of years.'],
   l5:['This bridge dates back to the 18th century.'],
   r1:['This technique dates back to the early 20th century.']
  },
  'e-cover-area':{
   l1:['This park covers an area of 20 km².','This park covers an area of 20 square km.'],
   l2:['This lake covers an area of 50 km².'],
   l3:['The campus covers an area of 100 ha.'],
   l4:['The exhibition covers an area of 3,000 square metres.','The exhibition covers an area of 3,000 square meters.','The exhibition covers an area of 3,000 m².'],
   l5:['This forest covers an area of 200 km².'],
   r1:['This garden covers an area of 5 hectares.','This garden covers an area of 5 ha.'],
   r2:['This region covers an area of 800 km².'],
   r3:['This nature reserve covers an area of 60 km².'],
   r4:['This museum covers an area of 12,000 square metres.','This museum covers an area of 12,000 square meters.','This museum covers an area of 12,000 m².'],
   r5:['This wetland covers an area of 30 km².']
  },
  'e-account-for':{
   l1:['Bus journeys account for 40 percent of all journeys.','Bus journeys account for 40 per cent of all journeys.'],
   l2:['Housing accounts for 30 percent of total spending.','Housing accounts for 30 per cent of total spending.'],
   l3:['Women account for 55 percent of participants.','Women account for 55 per cent of participants.'],
   l4:['Online sales account for 50% of total sales.'],
   l5:['These two categories account for 70 percent of the total.'],
   r1:['Food accounts for 25% of household spending.','Food accounts for one quarter of household spending.'],
   r2:['Young people account for 60 percent of visitors.'],
   r3:['Cars account for 80 percent of transport emissions.'],
   r4:['This group accounts for one third of the sample.'],
   r5:['Renewable energy accounts for 20 percent of total production.']
  },
  'e-remain-stable':{
   l2:['The proportion remained stable at 20 percent.'],
   r3:['The unemployment rate remained stable at around 5 percent.']
  }
 };
 for(const u of window.JUJIAN_EXAM_B){const extra=variants[u.id];if(!extra)continue;for(const q of [u.entry,...u.learning,...u.review])q.answers=[...new Set([...q.answers,...(extra[q.id==='entry'?'l1':q.id]||[])])];}
})();
