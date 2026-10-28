'use strict';
// Authored, transferable rules. No hint is assembled from fragments of an answer.
// Load after content-pilot.js. Keep the original content hints intact for history.
(() => {
  const core = {
    'ever':'完成时：have/has 后用过去分词；ever 问到现在为止的经历。',
    'rather':'搭配：would rather 后直接接动词原形，不加 to。',
    'could-request':'请求：could 后用动词原形；问句把主语放在 could 后。',
    'invite':'邀请：would like to 后接动词原形；问句把主语放在 would 后。',
    'time-work':'搭配：work for + 人表示对某人合适；do/does 后的 work 用原形。',
    'longer':'问法：how much longer 问还需多久；will 问句后面的动词用原形。',
    'where':'从句：know 后的 where 从句用主语在前、谓语在后的陈述语序。',
    'cost':'问价：be 与所问物品的单复数一致，不按价格数字选择。',
    'permission':'许可：if 后用完整陈述句；这里的一般现在时可表达待许可的动作。',
    'suggest':'提议：why don’t we 后接动词原形，表示共同商量。',
    'clarify':'确认：mean 后可接词组或完整意思；确认意思不等于已同意。',
    'repeat':'搭配：repeat 可直接接内容；say 表示再说时需有指代内容和 again。',
    'order':'搭配：would like 后接想要的名词；接动作时才用 to + 动词原形。',
    'looking':'进行时：be 后接 looking；for 引出寻找的对象。',
    'problem':'搭配：something wrong with + 对象表示某处有问题，with 不省略。',
    'not-work':'状态：be not working 表示当前不能正常运转；be 与物品单复数一致。',
    'change':'替代：instead 表示改用另一安排；can 后接动词原形。',
    'used-to':'过去习惯：used to 后接动词原形，不等于 be used to doing。',
    'opinion':'从句：think 后可接完整判断；主句的动词与主语一致。',
    'not-sure':'从句：not sure if 后用陈述语序，不把从句改成倒装问句。',
    'thanks':'介词：for 后接名词或动词-ing，说明感谢的原因。',
    'sorry':'介词：sorry for 后接名词或动词-ing，说明道歉的原因。',
    'sounds':'系动词：sound 后接形容词描述听感；单数第三人称用 sounds。',
    'decline':'婉拒：先回应邀请，再用 but 接完整原因；love to 中的 to 指前述动作。',
    'd-habit':'习惯：tend to 后接动词原形；一般现在时随主语调整 tend。',
    'd-trying':'进行时：be trying to + 动词原形表示正在努力做某事。',
    'd-need':'搭配：need to 后接动词原形；need 作实义动词时随主语变化。',
    'd-about-to':'临近动作：be about to 后接动词原形，表示马上要做。',
    'd-just':'完成时：have/has + just + 过去分词，说明刚发生的事。',
    'd-not-yet':'完成时：have/has 后加 not，再接过去分词；yet 常在句末。',
    'd-origin':'来源：originally 修饰来自何处；from 后接地方，be 随主语变化。',
    'd-frequency':'频率：how often 问多常发生；do/does 后面的实义动词用原形。',
    'd-last-time':'过去：the last time 后的事件用一般过去时，不再做问句倒装。',
    'd-duration':'持续：how long 配合完成时问持续多久；have/has 后保留 been。',
    'd-get-to':'到达：get to 后接目的地；do 问句中的 get 用原形。',
    'd-book':'搭配：would like to + 动词原形表达礼貌意愿，book 后接预约对象。',
    'd-availability':'存在问句：there 后的名词决定用 is 还是 are；available 描述可用状态。',
    'd-include':'问句：do/does 后的 include 用原形；助动词与所问项目一致。',
    'd-try-on':'可分短语：衣物代词放 try 与 on 之间，完整名词可放在后面。',
    'd-return':'搭配：would like to 后接动作原形；return 后直接接退还的物品。',
    'd-recommend':'推荐：for 引出适用的人或用途，as 引出所推荐的角色或类别。',
    'd-without':'介词：without 后接不想要的成分名词；请求中的 could 后用原形。',
    'd-allergy':'搭配：allergic 后用 to 引出过敏原，to 在这里是介词。',
    'd-symptom':'持续：have/has had 用来连接过去开始与现在；for 后接时间长度。',
    'd-work-as':'职业：as 引出身份或职业；单数可数职业通常需要冠词。',
    'd-right-route':'路线：to 引出目的地，for 可说明交通工具通往的方向；right 表示选对。',
    'd-wrong-order':'对照：先说实际点的东西，再用 not 对照送错的东西，顺序别反。',
    'd-payment':'搭配：by 表付款方式，in cash 表现金；with 可引出所用工具。',
    'd-because':'因果：because 后接原因的完整句子，不只接一个原因名词。',
    'd-thats-why':'因果：why 后接结果的完整句子，先分清理由与结果。',
    'd-even-though':'让步：even though 后接完整情况，主句表达出乎预期的结果。',
    'd-depends':'条件：depend on 后接决定事情的条件；on 不省略。',
    'd-as-as':'比较：as 与 as 之间用形容词原级；not 表示没有达到同等程度。',
    'd-enough':'程度：形容词放 enough 前，后面的动作使用 to + 动词原形。',
    'd-too':'程度：too + 形容词 + to do 表示程度过高而不能做。',
    'd-wish':'愿望：wish 后的 could + 动词原形表示当前难实现的愿望。',
    'd-should-have':'过去评价：should have 后接过去分词，谈当时本应做的事。',
    'd-supposed':'原定安排：过去的 be supposed to 后接动词原形，不自动表示实际做了。',
    'd-wondering':'婉问：wondering if 后用陈述语序；was 可用来缓和当前请求。',
    'd-offer-help':'主动帮忙：would like + 宾格人称 + to do，说明谁来执行动作。',
    'd-mind-if':'婉问：would you mind if 后可用过去式，表示客气而非已发生。',
    'd-appreciate-if':'请求：appreciate it if 中的 it 保留；could 后接动词原形。',
    'd-feeling':'感受：feel 后接形容词；when 后用完整句子说明触发的情况。',
    'd-look-forward':'介词：look forward to 中的 to 后接名词或动词-ing。',
    'd-get-used':'适应：get used to 中的 to 是介词，动作写成动词-ing。',
    'd-rather-not':'否定意愿：would rather not 后接动词原形，不加 to。',
    'd-didnt-mean':'否定：didn’t 后用 mean 原形；mean to do 表示本来打算做。',
    'd-what-if':'假设：what if 后用完整情况；一般现在时可设想接下来会发生什么。',
    'd-make-sure':'确认：开头说明核实目的，后面仍须保留所用问句的正常语序。',
    'd-what-mean':'澄清：what I mean 作整体主语，is 后接真正想表达的完整意思。',
    'd-as-far-know':'范围：先限定自己所知的程度，再陈述信息，不表示绝对确定。',
    'd-cant-seem':'搭配：can’t 后用 seem 原形，seem 后用 to + 动词原形。',
    'w-responsible':'职责：responsible for 后接事项或动词-ing，不接不定式。',
    'w-take-care':'搭配：take care of 后接待处理事项，of 不省略。',
    'w-who-handle':'主语问句：who 直接作执行者，后接 be + 动词-ing，不额外加 do。',
    'w-help-with':'帮助：help 通常作不可数名词；with 后接事项或动词-ing。',
    'w-let-know':'使役：let + 宾格人称 + 动词原形；if 后用完整条件句。',
    'w-make-sure':'从句：make sure 后接有主语和谓语的完整情况，that 可以省略。',
    'w-hand-over':'交接：hand 的代词宾语放 over 前；to 后接接手的人。',
    'w-cover':'搭配：cover 后直接接工作，cover for 后接人；while 后用完整情况。',
    'w-reaching':'联系：reach out about 后接联系事项，about 说明话题。',
    'w-following':'跟进：follow up on 后接此前的事项，on 引出跟进对象。',
    'w-attached':'完成时：have 后接过去分词；for 后用名词短语说明文件用途。',
    'w-get-back':'回复：get back to + 人；by + 时间点表示不晚于该时间。',
    'w-copy':'抄送：先放收件人，再用 in on 引出邮件或通信。',
    'w-call':'目的：to + 动词原形可说明安排通话要做什么。',
    'w-audio':'听感：hear 后接听到的对象，clearly 修饰听清的程度。',
    'w-confirm':'从句：whether/if 引出是否；从句保持主语在前的陈述语序。',
    'w-on-track':'进度：on track to 后接动词原形，表示按当前进展有望完成。',
    'w-running-behind':'搭配：running behind on 后接进度落后的工作事项。',
    'w-waiting':'先后：wait for 引出等待对象；before 时间从句谈将来时通常用现在时。',
    'w-completed':'完成时：so far 指到目前为止，后面常用 have/has + 过去分词。',
    'w-due':'截止：due 描述应完成的状态；by 引出的时间点包含在期限内。',
    'w-priority':'结构：priority 作单数主语；to + 动词原形说明优先做的事。',
    'w-next-step':'结构：next step 作单数主语；不定式说明接下来的动作。',
    'w-deadline':'期限：extend 后接要延长的对象；until/to + 时间点引出延长后的截止点。',
    'w-start':'议程：start with 后接先讨论的事项；若接动作，使用动词-ing。',
    'w-add':'补充：add that 后接完整观点，不能缺少从句的主语或谓语。',
    'w-point':'转折：先承认对方的观点，再在 but 后接完整的保留意见。',
    'w-perspective':'视角：perspective 前说明是谁的立场，后面接完整判断。',
    'w-agree':'共识：agreed on 后接已商定的事项；be 问句把 be 放主语前。',
    'w-summarize':'总结：开头引出归纳，后面应是讨论所得的完整结论。',
    'w-back':'回题：come back to 后接先前话题，to 在这里是介词。',
    'w-weigh':'优点：of 后接方案名词或动词-ing；advantage 为单数时用 is。',
    'w-requirements':'讲解：walk + 宾格人称 + through + 内容，表示带某人逐步了解。',
    'w-include':'范围：includes 后接包含项，but not 后接平行的不包含项。',
    'w-scope':'范围：fall outside 后可直接接约定范围，单数主语用 falls。',
    'w-clarify-scope':'澄清：开头之后用完整句子，cover 的形式与工作或服务的单复数一致。',
    'w-budget':'协商：flexibility 是不可数名词；on 后接可协商的条件。',
    'w-offer-option':'方案：option 作单数主语；would be 后用不定式说明做法。',
    'w-address':'调查：look into 后接问题；并列的后续动作可共用同一助动词。',
    'w-expect':'预期：expect 后先说将收到什么，再用 by 引出最晚时间。',
    'w-experience':'经验：此处 experience 不可数；in 后接领域或动词-ing。',
    'w-previous':'经历：回顾已结束的岗位工作时，主要动作用一般过去时。',
    'w-example':'举例：example 作单数主语；of this 回指前面提到的能力或情况。',
    'w-strength':'数量：one of 后接复数名词，但整个主语的核心是 one。',
    'w-interest':'主语从句：what interests me about 引出对象，is 后再说吸引点。',
    'w-improve':'介词：work on 后若接动作，用动词-ing，不用原形。',
    'w-feedback':'搭配：appreciate 直接接反馈；feedback 不可数，on 引出评价对象。',
    'w-goal':'目标：goal 作单数主语，to + 动词原形说明想实现的动作。',
    'p-done-with':'状态：be done with 后接事情或物品；完成使用不等于把东西耗尽。',
    'p-up-to':'决定权：up to 后接有决定权的人；接动作时再用 to + 动词原形。',
    'p-out-of':'短缺：out of 后接缺少的东西；这是存量不足，不是位置在外面。',
    'p-middle-of':'进行中：in the middle of 后接事情名词或动词-ing。',
    'p-nerves':'感受：引出感到烦躁的人的所有格，nerves 保持复数。',
    'p-cant-stand':'搭配：stand 表示忍受时，可接名词或动词-ing。',
    'p-fed-up':'搭配：fed up with 后接厌烦的对象或动词-ing。',
    'p-mood-for':'搭配：in the mood for 后接名词或动词-ing，表示当下意愿。',
    'p-figure-out':'弄清：figure 的代词宾语放 out 前；疑问词从句用陈述语序。',
    'p-end-up':'结果：end up 后接动词-ing，描述最后实际发生的情况。',
    'p-put-off':'推迟：put off 后可接名词或动词-ing；代词宾语放中间。',
    'p-get-rid-of':'摆脱：get rid of 后接要除去的对象，of 不省略。',
    'p-thing':'重点：引出真正要考虑的完整情况，that 可以引导后面的从句。',
    'p-like-most':'主语从句：what…like most about 引出对象，is 后再说最喜欢的方面。',
    'p-turns-out':'新发现：turns out 后接完整情况；that 可以省略。',
    'p-last-thing':'语义：the last thing 在这里表示最不想要；不定式说明那个动作。',
    'p-you-know-what':'话语功能：先引起注意，再接想告诉对方的完整内容。',
    'p-makes-sense':'理解：回应理由是否说得通，不必表示愿意接受对方的选择。',
    'p-fair-enough':'态度：区分听懂理由、愿意接受与尚未决定，不替回应补出没说的话。',
    'p-speaking-of':'话题：of 后接刚提过或相关的事物，再转入相关的新内容。',
    'p-make-effort':'搭配：effort 前保留冠词；后用不定式说明努力做什么。',
    'p-take-granted':'搭配：take 后先放被视为理所当然的人或事，再接 for granted。',
    'p-pay-attention':'介词：pay attention to 中的 to 后接关注对象或动词-ing。',
    'p-keep-mind':'记住：名词信息可放 keep 后；完整情况用 keep in mind that 引出。',
    'q-pick-up':'可分短语：人称代词必须放 pick 与 up 中间，完整名词位置较灵活。',
    'q-drop-off':'可分短语：代词放 drop 与 off 中间，地点另用介词或地点副词说明。',
    'q-run-into':'偶遇：run into 后直接接遇见的人，不能把代词插在中间。',
    'q-get-along':'关系：get along with 后接相处的人，well 可说明相处得好。',
    'q-keep-touch':'联系：with 引出保持联系的人，in touch 中的介词不省略。',
    'q-catch-up':'近况：with 引出交谈对象；这里是叙旧，不是字面追赶。',
    'q-look-after':'照顾：look after 后直接接照看的对象，不把代词放在两个词之间。',
    'q-look-up':'查找：信息代词放 look 与 up 中间，完整名词可放在后面。',
    'q-deal-with':'处理：deal with 后直接接问题或事项，with 不省略。',
    'q-give-up':'放弃：give up 可接名词或动词-ing；代词宾语放中间。',
    'q-stick-to':'坚持：stick to 中的 to 是介词，后接计划名词或动词-ing。',
    'q-cut-down':'减少：cut down on 后接被减少的事物或动词-ing。',
    'q-turn-down':'拒绝：代词宾语放 turn 与 down 中间，不放在整个短语后。',
    'q-take-up':'开始爱好：take up 后接活动名词或动词-ing，不表示已经学会。',
    'q-go-over':'检查：go over 后接要重看的内容，over 不省略。',
    'q-get-around':'终于着手：get around to 中的 to 是介词，后面用动词-ing。',
    'q-worried':'担心：worried about 后接人或事情，be 与主语和时间一致。',
    'q-proud':'自豪：proud of 后接令某人自豪的对象，of 不省略。',
    'q-familiar':'熟悉：人作主语时，familiar with 引出熟悉的事物。',
    'q-trouble':'困难：have trouble 后接动词-ing；trouble 在这里不加 a。',
    'q-feel-free':'许可：feel free to 后接动词原形，表示对方可以放心去做。',
    'q-no-need':'必要性：need 作名词，后用不定式说明没有必要做的事。',
    'q-worth':'值得：worth 后接动词-ing，不用 to + 动词原形。',
    'q-might-well':'提议：might as well 后接动词原形，表示眼下不妨这样做。',
    'q-better':'建议：had better 后接动词原形；否定把 not 放在 better 后。',
    'q-time-to':'时机：time 后用不定式说明现在该做的事，不指动作持续多久。',
    'q-no-worries':'回应：先看是在接道歉、感谢还是顾虑，再想如何让对方放宽心。',
    'q-take-time':'语气：表达不催促对方，不等于要求对方立即行动。',
    'q-doesnt-matter':'从句：if/whether 后接完整情况；主句表示该情况不影响结果。',
    'q-never-mind':'语用：表示不用再介意或继续处理，别与要求重复的话混淆。',
    'q-afraid':'委婉告知：afraid 后接不太好的完整消息，此处不一定表示恐惧。',
    'q-honest':'语用：引出自己的真实想法，后面仍需完整表达具体看法。',
    'q-by-way':'话题：引出顺带补充的事情，不把它当作因果连接词。',
    'q-as-long':'条件：as long as 后用完整条件句，表示只要条件成立即可。',
    'q-no-point':'介词：point in 后接动词-ing，说明做某事没有意义。',
    'q-let-me':'使役：let 后接宾格人称，再接不带 to 的动词原形。',
    'w-heads-up':'提醒：give 后先接人，再接 a heads-up；about 引出提醒的事项。',
    'w-keep-posted':'告知进展：keep + 人 + posted；on 引出持续通报的事情。',
    'w-touch-base':'沟通：with 引出联系的人，about 引出简短沟通的事项。',
    'w-fill-in':'补充信息：fill 后先接人，in on 后接需要让对方了解的事情。',
    'w-up-to-speed':'了解情况：get up to speed on 后接需要熟悉的项目或系统。',
    'w-hear-back':'收到回复：from 引出回复来源，back 表示对先前联系的回应。',
    'w-run-by':'征求意见：run 后先放想法或材料，by 后接要请教的人。',
    'w-bring-up':'提出话题：代词宾语放 bring 与 up 中间，不放在 up 后面。',
    'w-same-page':'理解一致：about 引出双方需要对齐认识的事项。',
    'w-on-board':'支持：with 引出愿意支持的想法或做法，不只表示已听懂。',
    'w-concern':'顾虑：have concerns about 后接担忧对象，不表示已经判定一定出问题。',
    'w-missing':'自查：问自己是否遗漏信息，be + 动词-ing，不额外加 do。',
    'w-put-together':'整理：代词宾语放 put 与 together 中间，名词位置较灵活。',
    'w-set-up':'设置：代词宾语放 set 与 up 中间，说明建立或配置的对象。',
    'w-take-over':'接手：take over 后接工作；from 后接原先负责的人。',
    'w-step-in':'介入：to + 动词原形说明介入目的，when 从句说明介入时机。',
    'w-follow-through':'落实：on 后接先前的承诺或决定，强调把事情做到底。',
    'w-work-out':'细节：work out 后接要商定的内容，of 引出所属的安排。',
    'w-narrow-down':'缩小范围：代词放 narrow 与 down 中间，to 引出留下的选项。',
    'w-rule-out':'排除：代词宾语放 rule 与 out 中间，不表示只是降低可能性。',
    'w-double-check':'核对：可直接接信息名词；接 that/whether 从句时用陈述语序。',
    'w-flag':'提醒注意：attention 前说明是谁的注意力，to 后接需关注的事项。',
    'w-tied-up':'占用时间：tied up with 后接当前使人忙碌的事情。',
    'w-capacity':'负荷：at capacity 描述已满负荷的状态，不在 capacity 前加 a。',
    'w-take-on':'承担：代词宾语放 take 与 on 中间，说明接下的工作或责任。',
    'w-push-back':'异议：push back on 后接不愿直接接受的要求或决定。',
    'w-trade-off':'取舍：代价名词可直接放 is 后，完整情况需用 that 从句引出。',
    'w-room':'空间：这里的 room 不可数，for 引出可改进或调整的方面。',
    'w-build-on':'基础：build on 后接已有成果，表示在此基础上继续发展。',
    'w-credit':'认可：give 后先接人，credit for 后接贡献名词或动词-ing。',
    'w-bear-with':'请求耐心：with 后接需要被耐心等待的人，while 可引出等待的原因。',
    'w-to-be-clear':'澄清：引出要明确说明的完整情况，别把开头短语当作主句。',
    'e-lead-to':'因果：lead to 的 to 是介词，后接结果名词或动词-ing。',
    'e-result-from':'因果方向：result from 先说结果，再用 from 引出原因。',
    'e-due-to':'介词：due to 后接原因名词或动词-ing，不直接接独立完整句子。',
    'e-for-instance':'举例：后面的具体例子应支持前面的概括，不只是换一个空泛判断。',
    'e-in-particular':'强调：短语靠近要突出的对象，不表示只有这一项。',
    'e-rather-than':'平行：对比两项选择时，两边尽量用对应的词组或动作形式。',
    'e-instead-of':'介词：instead of 后接名词或动词-ing，不直接接完整句子。',
    'e-both-and':'并列：both 与 and 连接语法作用相同的两部分。',
    'e-not-only':'并列：not only 与 but also 连接对应成分，不让两边结构失衡。',
    'e-in-contrast':'对照：后面用完整情况，与前述对象在同一方面比较。',
    'e-despite':'让步：despite 后接名词或动词-ing，不加 of，也不直接接完整从句。',
    'e-whether-or':'选择：whether 与 or 引出平行的两种可能，先分清各自范围。',
    'e-one-way':'方法：前一个不定式说明目标，后一个不定式说明实现做法。',
    'e-enable':'使能：enable + 人 + to + 动词原形，不能省略执行动作的人。',
    'e-prevent':'阻止：prevent + 对象 + from + 动词-ing。',
    'e-play-role':'作用：a role in 后接领域名词或动词-ing，in 不省略。',
    'e-suggests':'推断：suggest that 后接完整判断，这里不是 suggest doing 的建议结构。',
    'e-to-extent':'限定：说明判断只是部分成立，后面仍需完整说出判断。',
    'e-admittedly':'让步：that 后接承认成立的完整情况，不等于放弃后续保留意见。',
    'e-outweigh':'比较：outweigh 直接接被比较的另一方，不加 than。',
    'e-in-other-words':'改述：用另一种说法解释同一个意思，不借此新增无关结论。',
    'e-limitation':'局限：of 后接方法或证据；one limitation 作单数主语。',
    'e-account-for':'比例：account for 后接占比或数量，主语是构成整体的那一部分。',
    'e-rise-from':'变化：from 引出起点、to 引出终点；rise 是不及物动词。',
    'e-remain-stable':'状态：remain 后接形容词描述不变，不再额外加 be。',
    'e-known-for':'特色：known for 后接出名的特色；别与表示被谁知道的 by 混淆。',
    'e-date-back':'起源：date back to 后接时间；主动形式已能表示历史起点。',
    'e-cover-area':'面积：an area of 后接面积数值和单位，cover 随主语与时间变化。',
    'e-favourite-memory':'数量：one of 后接复数 memories，但整个主语按单数处理。',
    'e-when-comes':'话题：when it comes to 中的 to 是介词，后接名词或动词-ing。',
    'e-appreciated':'主语从句：what I appreciated about 引出经历，was 后说认可的方面。',
    'e-found-particularly':'宾补：find 后先放体验对象，再用 particularly + 形容词描述感受。',
    's-pain':'疼痛：a pain 可指一处疼痛，pain 也可不可数；in 引出疼痛部位。',
    's-hurts':'从句：when 后接触发疼痛的完整情况，不只放一个动作名词。',
    's-call-help':'求助：call 后接要联系的服务或人员，for + 人说明为谁打电话。',
    's-incident':'存在完成时：there 后事件的单复数决定用 has 还是 have，再接 been。',
    'et-request':'目的：writing to 中的 to 后接动词原形；request 后说明请求的事物。',
    'et-possible':'婉问：possible 后用 to + 动词原形，说明想请准许的动作。',
    'et-problem':'从句：that 后接有主语和谓语的完整问题，不只接一个问题名词。',
    'et-alternative':'条件：if 从句先提出条件，主句再说条件不满足时的替代方案。',
    'et-partial-agree':'让步：while 引出认可的完整观点，主句保留自己的不同判断。',
    'et-add':'补充：add that 后接完整观点，would 在这里使表达较委婉。',
    'et-main-reason':'理由：先明确是哪项选择的原因，再用 that 引出完整理由。',
    'et-overview':'概述：while 两侧各用完整变化趋势，突出总体对照。',
    'et-consistently':'比较：higher than 引出对照对象，consistently 表示整个所述时段都如此。',
    'et-fall':'变化：from 引出起点、to 引出终点；fall 的过去式用于已结束的时段。',
    'et-important-part':'变化至今：have/has 后接过去分词；part of 后接所融入的领域。',
    'et-over-past':'延续至今：over the past + 时间段常配完成时，have/has 后接过去分词。',
    'p-in-the-evening':'时段：in 用于一天中的时段；说习惯时 evening 可用单数或复数。'
  };

  const rules = {
    future:'将来：will 后接动词原形，be 也保持原形。',
    modal:'情态动词：后接动词原形；问句把主语放在情态动词后。',
    perfect:'完成时：have/has 后接过去分词，助动词与主语一致。',
    pastNegative:'过去否定：did not 后接动词原形，不能再用过去式。',
    presentNegative:'现在否定：do/does not 后接动词原形，does 用于单数第三人称。',
    pastQuestion:'过去问句：did 后放主语，再用动词原形。',
    presentQuestion:'现在问句：do/does 后放主语，再用动词原形。',
    beQuestion:'be 问句：把 be 放主语前，并与主语的单复数和时间一致。',
    beNegative:'be 否定：not 放在 be 后，be 仍随主语和时间变化。',
    pastBe:'过去状态：be 用 was/were，选择取决于主语。',
    thirdPerson:'主谓一致：一般现在时中，单数第三人称的实义动词要变形。',
    pastAction:'过去动作：已结束的过去事件用过去式；有 did 时改用原形。',
    pastHabit:'过去习惯：used to 后的动作仍用原形，不再变成过去式。'
  };

  // These recognizers choose a whole reviewed rule. They never copy matched words.
  const pastVerbs = new Set('added agreed arranged asked attached became booked bought brought called changed checked chose cleaned closed came completed cooked covered cut decided declined delivered discussed drank dropped ended felt fell figured filled finished followed found gave got grew had handed heard helped included joined kept knew left liked lived looked lost made meant met missed moved needed offered ordered paid picked planned played prepared put raised ran read received reduced remained replied returned rose ruled said saw sent set shared showed spoke spent started stayed stopped studied suggested took told tried turned understood used visited waited walked wanted watched went worked wrote'.split(' '));
  function sentenceRule(q) {
    if(q.type==='choice'||q.type==='recall'||q.stem)return '';
    const text=(q.answers?.[0]||'').replace(/[‘’]/g,"'").toLowerCase();
    if(/\bwill\b|\b(?:i|he|she|it|we|they|you)'ll\b/.test(text))return rules.future;
    if(/\b(?:did not|didn't)\b/.test(text))return rules.pastNegative;
    if(/\b(?:do not|does not|don't|doesn't)\b/.test(text))return rules.presentNegative;
    if(/^did\b/.test(text))return rules.pastQuestion;
    if(/^(?:do|does)\b/.test(text))return rules.presentQuestion;
    if(/^(?:am|is|are|was|were)\b/.test(text))return rules.beQuestion;
    if(/\b(?:am not|is not|are not|was not|were not|isn't|aren't|wasn't|weren't)\b|\b(?:i'm|he's|she's|it's|we're|they're|you're) not\b/.test(text))return rules.beNegative;
    if(/\b(?:can|could|would|should|might|must|shall)\b|\b(?:can't|couldn't|wouldn't|shouldn't)\b|\b(?:i|we|he|she|they|you)'d (?:like|love|rather|appreciate|add)\b/.test(text))return rules.modal;
    // 's + adjective is usually BE; have + adjective + noun can be lexical HAVE.
    // Only unambiguous contracted HAVE / 's been|had and reviewed participles qualify.
    if(/\b(?:i|we|they|you)'ve\b|\b(?:he|she|it)'s (?:already |just |not |never )*(?:been|had)\b|\b(?:have|has|haven't|hasn't) (?:already |just |not |never )*(?:attached|become|been|booked|bought|brought|changed|checked|committed|completed|decided|done|eaten|finished|followed|found|got|gotten|had|heard|kept|left|lost|made|met|narrowed|put|pushed|read|received|ruled|run|seen|sent|set|taken|tried|worked|written)\b/.test(text))return rules.perfect;
    if(/\b(?:was|were)\b/.test(text))return rules.pastBe;
    if(/\b(?:i|we|they|you|he|she|it) used to\b/.test(text))return rules.pastHabit;
    const start=/^(?:i|we|they|you|he|she|it|this|that)\s+(?:(?:usually|often|sometimes|always|rarely|never|already|just|still)\s+)*([a-z]+)\b/.exec(text);
    if(start&&pastVerbs.has(start[1])&&!['read','put','cut','set'].includes(start[1])&&!/\bhad better\b/.test(text))return rules.pastAction;
    if(start&&/^(?:he|she|it|this|that)\b/.test(text)&&/s$/.test(start[1])&&!['is','was','has','does'].includes(start[1]))return rules.thirdPerson;
    return '';
  }

  const overrides = {
    'p-in-the-evening':{
      entry:'习惯：频率副词通常放实义动词前；晚上时段用 in，习惯可用 evening/evenings。',
      l1:'时段：in 用于一天中的时段；表达习惯时可用单数或复数。',
      l2:'习惯：一般现在时中，单数第三人称的实义动词要变形。',
      l3:'过去习惯：回忆已结束的那段生活，主要动作用一般过去时。',
      l4:'将来：will 后接动词原形；晚上时段的具体日期由场景说明。',
      l5:'频率：do not usually 表示通常不做；助动词后用动词原形。',
      r1:'习惯：一般现在时中，单数第三人称的实义动词要变形。',
      r2:'过去状态：be 用 was/were；频率副词通常放在 be 后。',
      r3:'习惯问句：do/does 后接主语和动词原形，频率副词通常在实义动词前。',
      r4:'过去否定：did not 后接动词原形，不能再用过去式。',
      r5:'将来：will 后接动词原形；send 可接人＋物，也可接物＋to＋人。'
    },
    'p-done-with':{
      entry:'be 问句：把 be 放在主语前；done with 后接结束使用的对象。',
      l1:'状态：done with 前需要 be；be 的形式取决于主语和时间。',
      l2:'be 问句：把 be 放在主语前，并与主语的单复数一致。',
      l3:'过去否定：be 用 was/were，not 紧跟 be；具体钟点前用 at。',
      l4:'将来：will 后接动词原形；截止：by + 时间点表示不晚于该时间。',
      l5:'用法：done 关注是否结束使用，不要求杯中完全没有剩余。',
      r1:'否定：not 放在 be 后；yet 常在否定句末表示还未完成。',
      r2:'过去状态：be 用 was/were；截止：by + 时间点表示不晚于该时间。',
      r3:'将来问句：will 后接主语和动词原形；截止：by + 时间点表示不晚于该时间。',
      r4:'过去状态：用 was/were；already 表已完成，不强制使用过去完成时。',
      r5:'否定：not 放在 be 后；with 后接尚未结束的事情。'
    },
    'p-fair-enough':{
      entry:'态度：先想自己是否愿意接受，而不只是听懂对方的理由。',
      l1:'依据：只判断回应实际说出的态度，不补出别的决定。',
      l2:'意图：区分愿意接受、听懂但不接受，以及尚未决定。',
      l3:'比较：是否自然与侧重点是两回事，别先假定只能有一种自然说法。',
      l4:'目的：把想表达的态度逐项对照，看回应是否全部覆盖。',
      l5:'态度：先想你是否接受对方的理由，再想具体安排是否还需另说。',
      r1:'态度：替场景中的说话者回应，先判断他是否愿意接受。',
      r2:'依据：只判断这句回应表达的态度，不推断额外偏好。',
      r3:'比较：自然程度与表达重点分别判断，允许语用功能有重叠。',
      r4:'回应：先抓住小组的接受态度，固定回应不随人称或时间变形。',
      r5:'目的：逐项检查回应已表达什么、哪些意思还需另说。'
    }
  };

  // Discover content arrays by schema, then explicitly apply the three pilots last.
  const byId = new Map();
  for(const key of Object.keys(window)) {
    if(!key.startsWith('JUJIAN_'))continue;
    const value=window[key];
    if(!Array.isArray(value))continue;
    for(const u of value)if(u?.id&&u.entry&&Array.isArray(u.learning)&&Array.isArray(u.review))byId.set(u.id,u);
  }
  for(const u of window.JUJIAN_PILOT||[])byId.set(u.id,u);
  const signature=q=>JSON.stringify([q.zh,q.scene,q.intent,q.type,q.answers]);
  const authoredQuestion=(id,q)=>{
    const unit=byId.get(id);
    return unit&&[unit.entry,...unit.learning,...unit.review].find(x=>x.id===q.id&&signature(x)===signature(q));
  };
  function hintFor(id,q) {
    if(!q||!core[id])return '';
    if(q.type==='choice'&&!authoredQuestion(id,q))return core[id];
    if(id==='p-fair-enough'&&!authoredQuestion(id,q))return core[id];
    if(authoredQuestion(id,q)&&overrides[id]?.[q.id])return overrides[id][q.id];
    const base=core[id],grammar=sentenceRule(q);
    // A unit already about this grammar does not need the same rule twice.
    const repeated=grammar&&(
      grammar===rules.modal&&/动词原形|原形/.test(base)||
      grammar===rules.future&&/will|将来/.test(base)||
      grammar===rules.perfect&&/完成时|过去分词/.test(base)||
      grammar===rules.pastHabit&&id==='used-to'||
      grammar===rules.beQuestion&&/be 问句|be 与|be 随|存在问句/.test(base)||
      grammar===rules.thirdPerson&&/单数第三人称|单复数|随主语|单数主语/.test(base)
    );
    return grammar&&!repeated?`${base}\n${grammar}`:base;
  }
  window.JUJIAN_HINT_RULES=Object.fromEntries([...byId].filter(([id])=>core[id]).map(([id,u])=>[
    id,{core:core[id],entry:hintFor(id,u.entry),learning:u.learning.map(q=>hintFor(id,q)),review:u.review.map(q=>hintFor(id,q))}
  ]));
  // Historical pinned questions must be evaluated by their own text, not new indices.
  window.JUJIAN_HINT_FOR_QUESTION=hintFor;
})();
