'use strict';
// Canonical previous prompts for unfinished rounds; invalid generated alternatives removed.
window.JUJIAN_PREVIOUS_CONTENT={
  "rather": {
    "metadata": {
      "meaning": "说出这次更想做的选择",
      "expression": "I'd / We'd / She'd rather + 动词原形…",
      "formula": "主语 + would rather + 动词原形…；I would 可缩写为 I’d。",
      "explanation": "在眼前的选择中，说自己或某个人更愿意做什么。另一个选项可以由上文给出，不必每次都说 than。",
      "boundary": "would rather + 动词原形表达更愿意做什么；不愿意做时用 would rather not + 动词原形。另一个选项可以由上下文给出。",
      "checkpoint": "rather 后直接接动词原形，不在这个位置加 to，也不直接接名词。",
      "examples": [
        {
          "en": "I'd rather walk.",
          "zh": "正在商量走路还是坐车：我更想走路。"
        },
        {
          "en": "We'd rather eat at home.",
          "zh": "正在商量出去吃还是在家吃：我们更想在家吃。"
        }
      ]
    },
    "entry": {
      "id": "entry",
      "zh": "朋友提议坐车，你这次更想走路。说：我更想走路。",
      "answers": [
        "I'd rather walk.",
        "I would rather walk."
      ],
      "hint": "步行：walk"
    },
    "learning": [
      {
        "id": "l1",
        "zh": "在出去吃和在家吃之间，我们更想在家吃。",
        "answers": [
          "We'd rather eat at home.",
          "We would rather eat at home."
        ],
        "hint": "我们更愿意：we would rather / we’d rather\n在家吃：eat at home"
      },
      {
        "id": "l2",
        "zh": "现在可以喝茶或咖啡。我更想喝茶。",
        "answers": [
          "I'd rather have tea.",
          "I would rather have tea.",
          "I'd rather drink tea.",
          "I would rather drink tea."
        ],
        "hint": "喝茶：have tea / drink tea\n我更愿意：I would rather / I’d rather"
      },
      {
        "id": "l3",
        "zh": "朋友问她想出去还是待在家。你知道：她更想待在家。",
        "answers": [
          "She'd rather stay at home.",
          "She would rather stay at home.",
          "She'd rather stay home.",
          "She would rather stay home."
        ],
        "hint": "她更愿意：she would rather / she’d rather\n待在家：stay at home / stay home"
      },
      {
        "id": "l4",
        "zh": "可以坐公交或走路。我们这次更想坐公交。",
        "answers": [
          "We'd rather take the bus.",
          "We would rather take the bus."
        ],
        "hint": "坐公交：take the bus\n我们更愿意：we would rather / we’d rather"
      },
      {
        "id": "l5",
        "zh": "问他要现在走还是再等一会儿，他更想再等一会儿。",
        "answers": [
          "He'd rather wait a little longer.",
          "He would rather wait a little longer.",
          "He'd rather wait a bit longer.",
          "He would rather wait a bit longer."
        ],
        "hint": "他更愿意：he would rather / he’d rather\n再等一会儿：wait a little longer / wait a bit longer"
      }
    ],
    "review": [
      {
        "id": "r1",
        "zh": "可以点外卖或自己做饭。我更想自己做饭。",
        "answers": [
          "I'd rather cook.",
          "I would rather cook.",
          "I'd rather cook for myself.",
          "I would rather cook for myself."
        ],
        "hint": "做饭：cook\n为自己：for myself（可省略）"
      },
      {
        "id": "r2",
        "zh": "他们在商量今天还是明天出发。他们更想明天出发。",
        "answers": [
          "They'd rather leave tomorrow.",
          "They would rather leave tomorrow."
        ],
        "hint": "他们更愿意：they would rather / they’d rather\n明天出发：leave tomorrow"
      },
      {
        "id": "r3",
        "zh": "比起去电影院，我们这次更想在家看电影。",
        "answers": [
          "We'd rather watch a movie at home.",
          "We would rather watch a movie at home.",
          "We'd rather watch a film at home.",
          "We would rather watch a film at home."
        ],
        "hint": "看电影：watch a movie / watch a film\n在家：at home"
      },
      {
        "id": "r4",
        "zh": "她可以坐车或骑车去。她这次更想骑车。",
        "answers": [
          "She'd rather cycle.",
          "She would rather cycle.",
          "She'd rather ride a bike.",
          "She would rather ride a bike."
        ],
        "hint": "骑车：cycle / ride a bike\n她更愿意：she would rather / she’d rather"
      },
      {
        "id": "r5",
        "zh": "朋友问要坐室内还是室外。我更想坐外面。",
        "answers": [
          "I'd rather sit outside.",
          "I would rather sit outside."
        ],
        "hint": "坐在外面：sit outside\n我更愿意：I would rather / I’d rather"
      }
    ]
  },
  "d-include": {
    "metadata": {
      "meaning": "确认价格或服务包含什么",
      "expression": "Does…include…?",
      "formula": "Does + 单数项目/价格 + include + 包含内容?",
      "explanation": "付款或预订前，确认具体包含的内容。",
      "boundary": "主语为单数时用 Does，include 保持原形；include 后直接接包含的东西，不加 in。",
      "checkpoint": "Does + 单数项目/价格 + include + 包含内容?",
      "examples": [
        {
          "en": "Does the price include breakfast?",
          "zh": "问：这个价格包含早餐吗？"
        },
        {
          "en": "Does this ticket include lunch?",
          "zh": "问：这张票包含午餐吗？"
        }
      ]
    },
    "entry": {
      "id": "entry",
      "zh": "问：这个价格包含早餐吗？",
      "answers": [
        "Does the price include breakfast?"
      ],
      "hint": "这个价格：the price；早餐：breakfast"
    },
    "learning": [
      {
        "id": "l1",
        "zh": "问：这个价格包含早餐吗？",
        "answers": [
          "Does the price include breakfast?"
        ],
        "hint": "这个价格：the price；早餐：breakfast"
      },
      {
        "id": "l2",
        "zh": "问：这张票包含午餐吗？",
        "answers": [
          "Does this ticket include lunch?"
        ],
        "hint": "这张票：this ticket；午餐：lunch"
      },
      {
        "id": "l3",
        "zh": "问：这项服务包含配送吗？",
        "answers": [
          "Does this service include delivery?"
        ],
        "hint": "服务：service；配送：delivery"
      },
      {
        "id": "l4",
        "zh": "问：这个套餐包含饮料吗？",
        "answers": [
          "Does this meal include a drink?"
        ],
        "hint": "套餐：meal；一杯饮料：a drink"
      },
      {
        "id": "l5",
        "zh": "问：这次旅行包含住宿吗？",
        "answers": [
          "Does the trip include accommodation?"
        ],
        "hint": "住宿：accommodation"
      }
    ],
    "review": [
      {
        "id": "r1",
        "zh": "问：这个价格包含税吗？",
        "answers": [
          "Does the price include tax?"
        ],
        "hint": "税：tax"
      },
      {
        "id": "r2",
        "zh": "问：这项服务包含安装吗？",
        "answers": [
          "Does this service include installation?"
        ],
        "hint": "安装：installation"
      },
      {
        "id": "r3",
        "zh": "问：这张票包含行李吗？",
        "answers": [
          "Does this ticket include baggage?",
          "Does this ticket include luggage?"
        ],
        "hint": "行李：baggage / luggage"
      },
      {
        "id": "r4",
        "zh": "问：这个套餐包含甜点吗？",
        "answers": [
          "Does this meal include dessert?"
        ],
        "hint": "甜点：dessert"
      },
      {
        "id": "r5",
        "zh": "问：房费包含早餐吗？",
        "answers": [
          "Does the room rate include breakfast?"
        ],
        "hint": "房费：the room rate"
      }
    ]
  },
  "d-enough": {
    "metadata": {
      "meaning": "说明某方面还不足以做一件事",
      "expression": "…not…enough to…",
      "formula": "主语 + be 的否定形式 + 形容词 + enough to + 动词原形",
      "explanation": "某种条件还不够，因此暂时做不了后面的动作。",
      "boundary": "修饰形容词时 enough 放后面，如 big enough；修饰名词时放前面，如 enough time。",
      "checkpoint": "主语 + be 的否定形式 + 形容词 + enough to + 动词原形",
      "examples": [
        {
          "en": "I'm not well enough to go out.",
          "zh": "说：我还不够健康，不能出去。"
        },
        {
          "en": "This bag isn't big enough to hold the laptop.",
          "zh": "说：这个包不够大，装不下电脑。"
        }
      ]
    },
    "entry": {
      "id": "entry",
      "zh": "说：我还不够健康，不能出去。",
      "answers": [
        "I'm not well enough to go out.",
        "I am not well enough to go out."
      ],
      "hint": "身体好：well；出去：go out"
    },
    "learning": [
      {
        "id": "l1",
        "zh": "说：我还不够健康，不能出去。",
        "answers": [
          "I'm not well enough to go out.",
          "I am not well enough to go out."
        ],
        "hint": "身体好：well；出去：go out"
      },
      {
        "id": "l2",
        "zh": "说：这个包不够大，装不下电脑。",
        "answers": [
          "This bag isn't big enough to hold the laptop.",
          "This bag is not big enough to hold the laptop."
        ],
        "hint": "装下电脑：hold the laptop"
      },
      {
        "id": "l3",
        "zh": "说：她还不够自信，不能独自旅行。",
        "answers": [
          "She isn't confident enough to travel alone.",
          "She is not confident enough to travel alone."
        ],
        "hint": "自信：confident；独自旅行：travel alone"
      },
      {
        "id": "l4",
        "zh": "说：这里不够安静，没法学习。",
        "answers": [
          "It isn't quiet enough to study here.",
          "It is not quiet enough to study here."
        ],
        "hint": "安静：quiet；在这里学习：study here"
      },
      {
        "id": "l5",
        "zh": "说：我们还不够熟练，不能参加比赛。",
        "answers": [
          "We aren't skilled enough to compete.",
          "We are not skilled enough to compete."
        ],
        "hint": "熟练：skilled；比赛：compete"
      }
    ],
    "review": [
      {
        "id": "r1",
        "zh": "说：这个房间不够亮，看不了书。",
        "answers": [
          "This room isn't bright enough to read in.",
          "This room is not bright enough to read in."
        ],
        "hint": "明亮：bright；在里面看书：read in"
      },
      {
        "id": "r2",
        "zh": "说：他还不够强壮，搬不动它。",
        "answers": [
          "He isn't strong enough to lift it.",
          "He is not strong enough to lift it."
        ],
        "hint": "强壮：strong；抬起：lift"
      },
      {
        "id": "r3",
        "zh": "说：我还不够清醒，开不了车。",
        "answers": [
          "I'm not awake enough to drive.",
          "I am not awake enough to drive."
        ],
        "hint": "清醒：awake；开车：drive"
      },
      {
        "id": "r4",
        "zh": "说：这张桌子不够大，放不下这些盘子。",
        "answers": [
          "This table isn't big enough to hold these plates.",
          "This table is not big enough to hold these plates."
        ],
        "hint": "放下这些盘子：hold these plates"
      },
      {
        "id": "r5",
        "zh": "说：他们跑得还不够快，赶不上公交。",
        "answers": [
          "They aren't fast enough to catch the bus.",
          "They are not fast enough to catch the bus."
        ],
        "hint": "快：fast；赶上公交：catch the bus"
      }
    ]
  },
  "w-let-know": {
    "metadata": {
      "meaning": "请同事在某种情况出现时告知",
      "expression": "Let me know if…",
      "formula": "Let me / us know if + 主语 + 谓语",
      "explanation": "告诉同事：如果出现某种需要、变化或问题，请通知自己或团队。这里的 if 引出条件。",
      "boundary": "不是问“是否知道”。如果要确认一个已约定的事实，可用确认问句；这里是在建立后续沟通。",
      "checkpoint": "let 后用 me / us，know 不加 to；if 条件句按实际主语写。",
      "examples": [
        {
          "en": "Let me know if you need help.",
          "zh": "给同事留话：如果你需要帮助，请告诉我。"
        },
        {
          "en": "Let us know if anything changes.",
          "zh": "交接前说：如果有什么变化，请告诉我们。"
        }
      ]
    },
    "entry": {
      "id": "entry",
      "zh": "给同事留话：如果你需要帮助，请告诉我。",
      "answers": [
        "Let me know if you need help."
      ],
      "hint": "需要帮助：need help"
    },
    "learning": [
      {
        "id": "l1",
        "zh": "给同事留话：如果你需要帮助，请告诉我。",
        "answers": [
          "Let me know if you need help."
        ],
        "hint": "需要帮助：need help"
      },
      {
        "id": "l2",
        "zh": "交接前说：如果有什么变化，请告诉我们。",
        "answers": [
          "Let us know if anything changes."
        ],
        "hint": "有变化：anything changes"
      },
      {
        "id": "l3",
        "zh": "安排会议时说：如果周五不方便，请告诉我。",
        "answers": [
          "Let me know if Friday doesn't work for you.",
          "Let me know if Friday does not work for you."
        ],
        "hint": "周五不方便：Friday doesn’t work for you"
      },
      {
        "id": "l4",
        "zh": "发资料后说：如果你有任何问题，请告诉我。",
        "answers": [
          "Let me know if you have any questions."
        ],
        "hint": "有任何问题：have any questions"
      },
      {
        "id": "l5",
        "zh": "安排任务时说：如果他们需要更多时间，请告诉我们。",
        "answers": [
          "Let us know if they need more time."
        ],
        "hint": "他们需要更多时间：they need more time"
      }
    ],
    "review": [
      {
        "id": "r1",
        "zh": "准备发货前说：如果地址有变化，请告诉我。",
        "answers": [
          "Let me know if the address changes."
        ],
        "hint": "地址改变：the address changes"
      },
      {
        "id": "r2",
        "zh": "协作时说：如果你遇到任何问题，请告诉我们。",
        "answers": [
          "Let us know if you run into any problems."
        ],
        "hint": "遇到问题：run into problems"
      },
      {
        "id": "r3",
        "zh": "给同事留话：如果她要加入会议，请告诉我。",
        "answers": [
          "Let me know if she wants to join the meeting."
        ],
        "hint": "她想加入：she wants to join"
      },
      {
        "id": "r4",
        "zh": "提交初稿后说：如果你想要任何修改，请告诉我。",
        "answers": [
          "Let me know if you'd like any changes.",
          "Let me know if you would like any changes."
        ],
        "hint": "想要修改：would like any changes"
      },
      {
        "id": "r5",
        "zh": "出发前说：如果你会迟到，请告诉我们。",
        "answers": [
          "Let us know if you're going to be late.",
          "Let us know if you are going to be late."
        ],
        "hint": "会迟到：be going to be late"
      }
    ]
  },
  "w-get-back": {
    "metadata": {
      "meaning": "承诺在某个时间前回复",
      "expression": "I'll get back to you by…",
      "formula": "I’ll / We’ll get back to you by + 最晚回复时间",
      "explanation": "需要先核实或处理时，告知对方最晚何时会回复。by 表示不晚于该时间，不要求正好那个时刻。",
      "boundary": "这里承诺回复，不承诺问题一定已解决；不是表示自己会回到某个地点。",
      "checkpoint": "保留 get back to you；截止时间前用 by。",
      "examples": [
        {
          "en": "I'll get back to you by Friday.",
          "zh": "需要先核实，承诺：我最晚周五回复你。"
        },
        {
          "en": "We'll get back to you by tomorrow afternoon.",
          "zh": "团队还在查资料：我们最晚明天下午回复你。"
        }
      ]
    },
    "entry": {
      "id": "entry",
      "zh": "需要先核实，承诺：我最晚周五回复你。",
      "answers": [
        "I'll get back to you by Friday.",
        "I will get back to you by Friday."
      ],
      "hint": "最晚周五：by Friday"
    },
    "learning": [
      {
        "id": "l1",
        "zh": "需要先核实，承诺：我最晚周五回复你。",
        "answers": [
          "I'll get back to you by Friday.",
          "I will get back to you by Friday."
        ],
        "hint": "最晚周五：by Friday"
      },
      {
        "id": "l2",
        "zh": "团队还在查资料：我们最晚明天下午回复你。",
        "answers": [
          "We'll get back to you by tomorrow afternoon.",
          "We will get back to you by tomorrow afternoon."
        ],
        "hint": "最晚明天下午：by tomorrow afternoon"
      },
      {
        "id": "l3",
        "zh": "需要问同事：我最晚中午回复你。",
        "answers": [
          "I'll get back to you by noon.",
          "I will get back to you by noon."
        ],
        "hint": "中午：noon"
      },
      {
        "id": "l4",
        "zh": "需要核对安排：我最晚今天下班前回复你。",
        "answers": [
          "I'll get back to you by the end of the day.",
          "I will get back to you by the end of today.",
          "I will get back to you by the end of the day.",
          "I'll get back to you by the end of today."
        ],
        "hint": "今天结束前：by the end of the day"
      },
      {
        "id": "l5",
        "zh": "需要内部确认：我们最晚下周一回复你。",
        "answers": [
          "We'll get back to you by next Monday.",
          "We will get back to you by next Monday."
        ],
        "hint": "下周一：next Monday"
      }
    ],
    "review": [
      {
        "id": "r1",
        "zh": "要先检查文件：我最晚下午三点回复你。",
        "answers": [
          "I'll get back to you by three this afternoon.",
          "I will get back to you by 3 this afternoon.",
          "I will get back to you by three this afternoon.",
          "I'll get back to you by 3 this afternoon."
        ],
        "hint": "下午三点：three this afternoon"
      },
      {
        "id": "r2",
        "zh": "等内部消息，承诺：我最晚明天上午回复你。",
        "answers": [
          "I'll get back to you by tomorrow morning.",
          "I will get back to you by tomorrow morning."
        ],
        "hint": "明天上午：tomorrow morning"
      },
      {
        "id": "r3",
        "zh": "团队需要讨论：我们最晚本周结束前回复你。",
        "answers": [
          "We'll get back to you by the end of the week.",
          "We will get back to you by the end of the week."
        ],
        "hint": "本周结束前：by the end of the week"
      },
      {
        "id": "r4",
        "zh": "要先核实价格：我最晚周二回复你。",
        "answers": [
          "I'll get back to you by Tuesday.",
          "I will get back to you by Tuesday."
        ],
        "hint": "周二：Tuesday"
      },
      {
        "id": "r5",
        "zh": "需要协调人员：我们最晚今晚回复你。",
        "answers": [
          "We'll get back to you by tonight.",
          "We will get back to you by tonight."
        ],
        "hint": "最晚今晚：by tonight"
      }
    ]
  },
  "p-up-to": {
    "metadata": {
      "meaning": "说明一件事由谁决定",
      "expression": "It’s up to…",
      "formula": "It’s up to + 人；也可接 to + 动词原形，说明由谁决定的事",
      "explanation": "把选择权交给某人，或说明最后由谁决定。常用于商量吃什么、去哪儿和如何安排。",
      "boundary": "It’s up to you 是由你决定，语气冷淡时也可能显得不想参与。be up to 还有其他意思；这里的 up to 后面是有决定权的人。",
      "checkpoint": "It’s up to + 人；也可接 to + 动词原形，说明由谁决定的事",
      "examples": [
        {
          "en": "It's up to you.",
          "zh": "朋友让你选餐厅，你把决定权交还给他：由你决定。"
        },
        {
          "en": "It's up to us.",
          "zh": "商量谁决定出发时间：由我们决定。"
        }
      ]
    },
    "entry": {
      "id": "entry",
      "zh": "朋友让你选餐厅，你把决定权交还给他：由你决定。",
      "answers": [
        "It's up to you.",
        "It is up to you."
      ],
      "hint": "你：you"
    },
    "learning": [
      {
        "id": "l1",
        "zh": "朋友让你选餐厅，你把决定权交还给他：由你决定。",
        "answers": [
          "It's up to you.",
          "It is up to you."
        ],
        "hint": "你：you"
      },
      {
        "id": "l2",
        "zh": "商量谁决定出发时间：由我们决定。",
        "answers": [
          "It's up to us.",
          "It is up to us."
        ],
        "hint": "我们作宾语：us"
      },
      {
        "id": "l3",
        "zh": "说明谁选电影：由她来选电影。",
        "answers": [
          "It's up to her to choose the film.",
          "It's up to her to choose the movie.",
          "It is up to her to choose the film.",
          "It is up to her to choose the movie."
        ],
        "hint": "她：her；选电影：choose the film / choose the movie"
      },
      {
        "id": "l4",
        "zh": "说明最后由谁核定地址：由他们确认地址。",
        "answers": [
          "It's up to them to confirm the address.",
          "It is up to them to confirm the address."
        ],
        "hint": "他们：them；确认地址：confirm the address"
      },
      {
        "id": "l5",
        "zh": "告诉家人你有最后决定权：由我决定。",
        "answers": [
          "It's up to me.",
          "It is up to me."
        ],
        "hint": "我作宾语：me"
      }
    ],
    "review": [
      {
        "id": "r1",
        "zh": "商量谁选音乐：由他决定。",
        "answers": [
          "It's up to him.",
          "It is up to him."
        ],
        "hint": "他作宾语：him"
      },
      {
        "id": "r2",
        "zh": "说明谁安排地点：由你姐姐决定。",
        "answers": [
          "It's up to your sister.",
          "It is up to your sister."
        ],
        "hint": "你姐姐：your sister"
      },
      {
        "id": "r3",
        "zh": "共同策划活动：由我们决定在哪里见面。",
        "answers": [
          "It's up to us to decide where to meet.",
          "It is up to us to decide where to meet."
        ],
        "hint": "决定在哪里见面：decide where to meet"
      },
      {
        "id": "r4",
        "zh": "说明父母的选择权：由他们决定是否来。",
        "answers": [
          "It's up to them to decide whether to come.",
          "It is up to them to decide whether to come."
        ],
        "hint": "决定是否来：decide whether to come"
      },
      {
        "id": "r5",
        "zh": "对朋友说：由你决定什么时候离开。",
        "answers": [
          "It's up to you to decide when to leave.",
          "It is up to you to decide when to leave."
        ],
        "hint": "决定什么时候离开：decide when to leave"
      }
    ]
  },
  "p-figure-out": {
    "metadata": {
      "meaning": "通过思考或尝试弄明白一件事",
      "expression": "…figure out…",
      "formula": "figure out + 问题 / how、why 等引导的内容；figure it out",
      "explanation": "通过想一想、检查或试一试，理解原因或找到办法。也可以说还没想明白、需要弄清楚。",
      "boundary": "代词放中间：figure it out，不说 figure out it。它强调理解或解决的过程；find out 更侧重得知信息。",
      "checkpoint": "figure out + 问题 / how、why 等引导的内容；figure it out",
      "examples": [
        {
          "en": "I figured out how to use it.",
          "zh": "解释你解决了操作问题：我弄明白怎么用它了。"
        },
        {
          "en": "We figured out the problem.",
          "zh": "说明共同的进展：我们弄清楚问题了。"
        }
      ]
    },
    "entry": {
      "id": "entry",
      "zh": "解释你解决了操作问题：我弄明白怎么用它了。",
      "answers": [
        "I figured out how to use it."
      ],
      "hint": "弄明白过去式：figured out；怎么用它：how to use it"
    },
    "learning": [
      {
        "id": "l1",
        "zh": "解释你解决了操作问题：我弄明白怎么用它了。",
        "answers": [
          "I figured out how to use it."
        ],
        "hint": "弄明白过去式：figured out；怎么用它：how to use it"
      },
      {
        "id": "l2",
        "zh": "说明共同的进展：我们弄清楚问题了。",
        "answers": [
          "We figured out the problem.",
          "We figured the problem out."
        ],
        "hint": "这个问题：the problem"
      },
      {
        "id": "l3",
        "zh": "说她已经找到路线：她弄明白怎么去那里了。",
        "answers": [
          "She figured out how to get there."
        ],
        "hint": "怎么去那里：how to get there"
      },
      {
        "id": "l4",
        "zh": "说明他仍然困惑：他弄不明白这个。",
        "answers": [
          "He can't figure it out.",
          "He cannot figure it out."
        ],
        "hint": "这个用代词：it；代词放 figure 和 out 中间"
      },
      {
        "id": "l5",
        "zh": "讨论漏水原因：我们需要弄清楚为什么会漏水。",
        "answers": [
          "We need to figure out why it is leaking.",
          "We need to figure out why it's leaking."
        ],
        "hint": "为什么会漏水：why it is leaking"
      }
    ],
    "review": [
      {
        "id": "r1",
        "zh": "修好设备后说：我弄明白怎么关掉它了。",
        "answers": [
          "I figured out how to turn it off."
        ],
        "hint": "关掉它：turn it off"
      },
      {
        "id": "r2",
        "zh": "讨论接下来的计划：我们需要想清楚下一步做什么。",
        "answers": [
          "We need to figure out what to do next."
        ],
        "hint": "下一步做什么：what to do next"
      },
      {
        "id": "r3",
        "zh": "说她理解了操作方法：她自己弄明白了。",
        "answers": [
          "She figured it out herself."
        ],
        "hint": "她自己：herself"
      },
      {
        "id": "r4",
        "zh": "看着不熟悉的地图说：我弄不明白这张地图。",
        "answers": [
          "I can't figure out this map.",
          "I can't figure this map out.",
          "I cannot figure out this map.",
          "I cannot figure this map out."
        ],
        "hint": "这张地图：this map"
      },
      {
        "id": "r5",
        "zh": "大家比较路线后选定了公交：他们弄明白该坐哪班公交了。",
        "answers": [
          "They figured out which bus to take."
        ],
        "hint": "坐哪班公交：which bus to take"
      }
    ]
  },
  "p-get-rid-of": {
    "metadata": {
      "meaning": "处理掉不想留的东西或摆脱困扰",
      "expression": "…get rid of…",
      "formula": "get / got rid of + 不想留的东西 / 困扰",
      "explanation": "让某种不需要的东西离开自己的生活，或消除某个困扰。可以是丢掉、送走或清除，具体做法由情境决定。",
      "boundary": "不要漏掉 of。它不规定一定扔进垃圾桶；用来谈人时会显得很不友善。",
      "checkpoint": "get / got rid of + 不想留的东西 / 困扰",
      "examples": [
        {
          "en": "I want to get rid of these old clothes.",
          "zh": "整理衣柜：我想处理掉这些旧衣服。"
        },
        {
          "en": "We got rid of the old sofa.",
          "zh": "清理房间后说：我们处理掉了旧沙发。"
        }
      ]
    },
    "entry": {
      "id": "entry",
      "zh": "整理衣柜：我想处理掉这些旧衣服。",
      "answers": [
        "I want to get rid of these old clothes."
      ],
      "hint": "这些旧衣服：these old clothes"
    },
    "learning": [
      {
        "id": "l1",
        "zh": "整理衣柜：我想处理掉这些旧衣服。",
        "answers": [
          "I want to get rid of these old clothes."
        ],
        "hint": "这些旧衣服：these old clothes"
      },
      {
        "id": "l2",
        "zh": "清理房间后说：我们处理掉了旧沙发。",
        "answers": [
          "We got rid of the old sofa."
        ],
        "hint": "过去式：got rid of；旧沙发：the old sofa"
      },
      {
        "id": "l3",
        "zh": "说明她手机恢复空间的原因：她删掉了不用的应用。",
        "answers": [
          "She got rid of the apps she never used."
        ],
        "hint": "不用的应用：the apps she never used"
      },
      {
        "id": "l4",
        "zh": "家里有异味：我们需要去掉这个气味。",
        "answers": [
          "We need to get rid of this smell."
        ],
        "hint": "这个气味：this smell"
      },
      {
        "id": "l5",
        "zh": "说他已经整理好：他处理掉了坏椅子。",
        "answers": [
          "He got rid of the broken chair."
        ],
        "hint": "坏椅子：the broken chair"
      }
    ],
    "review": [
      {
        "id": "r1",
        "zh": "清理手机：我需要删掉这些重复的照片。",
        "answers": [
          "I need to get rid of these duplicate photos."
        ],
        "hint": "重复的照片：duplicate photos"
      },
      {
        "id": "r2",
        "zh": "打扫房间：他们清除了灰尘。",
        "answers": [
          "They got rid of the dust."
        ],
        "hint": "灰尘：the dust"
      },
      {
        "id": "r3",
        "zh": "谈想改掉的习惯：我想改掉这个坏习惯。",
        "answers": [
          "I want to get rid of this bad habit."
        ],
        "hint": "这个坏习惯：this bad habit"
      },
      {
        "id": "r4",
        "zh": "清理冰箱后说：我们处理掉了过期的食物。",
        "answers": [
          "We got rid of the expired food."
        ],
        "hint": "过期的食物：the expired food"
      },
      {
        "id": "r5",
        "zh": "说广告弹窗的问题：她想去掉这些广告。",
        "answers": [
          "She wants to get rid of these ads."
        ],
        "hint": "这些广告：these ads；她想：she wants"
      }
    ]
  },
  "p-make-effort": {
    "metadata": {
      "meaning": "有意识地为一件事付出努力",
      "expression": "make an effort to…",
      "formula": "主语 + make / makes an effort to + 动词原形",
      "explanation": "某件事并不总是自然做到，需要自己多花精力时，用 make an effort 表示有意识地去努力。",
      "boundary": "说付出的努力，不保证最后成功。effort 前有 an，动作前用 to；常用搭配是 make an effort。",
      "checkpoint": "主语 + make / makes an effort to + 动词原形",
      "examples": [
        {
          "en": "I make an effort to stay in touch.",
          "zh": "说明自己如何维系友谊：我会努力保持联系。"
        },
        {
          "en": "She makes an effort to read every day.",
          "zh": "她谈过学习方法，你转述：她会努力每天阅读。"
        }
      ]
    },
    "entry": {
      "id": "entry",
      "zh": "说明自己如何维系友谊：我会努力保持联系。",
      "answers": [
        "I make an effort to stay in touch."
      ],
      "hint": "保持联系：stay in touch"
    },
    "learning": [
      {
        "id": "l1",
        "zh": "说明自己如何维系友谊：我会努力保持联系。",
        "answers": [
          "I make an effort to stay in touch."
        ],
        "hint": "保持联系：stay in touch"
      },
      {
        "id": "l2",
        "zh": "她谈过学习方法，你转述：她会努力每天阅读。",
        "answers": [
          "She makes an effort to read every day."
        ],
        "hint": "每天阅读：read every day；she 后：makes"
      },
      {
        "id": "l3",
        "zh": "说明共同生活的做法：我们会努力让厨房保持整洁。",
        "answers": [
          "We make an effort to keep the kitchen tidy."
        ],
        "hint": "保持厨房整洁：keep the kitchen tidy"
      },
      {
        "id": "l4",
        "zh": "他谈过与人相处的做法，你转述：他会努力认真倾听。",
        "answers": [
          "He makes an effort to listen carefully."
        ],
        "hint": "认真倾听：listen carefully"
      },
      {
        "id": "l5",
        "zh": "说明自己的日常做法：我会努力记住别人的名字。",
        "answers": [
          "I make an effort to remember people's names."
        ],
        "hint": "别人的名字：people’s names"
      }
    ],
    "review": [
      {
        "id": "r1",
        "zh": "说明旅行时的做法：我们会努力说当地的语言。",
        "answers": [
          "We make an effort to speak the local language."
        ],
        "hint": "说当地语言：speak the local language"
      },
      {
        "id": "r2",
        "zh": "她说想与邻居更熟悉，你转述：她会努力认识邻居。",
        "answers": [
          "She makes an effort to get to know her neighbours.",
          "She makes an effort to get to know her neighbors."
        ],
        "hint": "认识她的邻居：get to know her neighbours / neighbors"
      },
      {
        "id": "r3",
        "zh": "说明自己要多关心家人：我会努力多打电话回家。",
        "answers": [
          "I make an effort to call home more often."
        ],
        "hint": "多打电话回家：call home more often"
      },
      {
        "id": "r4",
        "zh": "他们说想减少浪费，你转述：他们会努力少用塑料。",
        "answers": [
          "They make an effort to use less plastic."
        ],
        "hint": "少用塑料：use less plastic"
      },
      {
        "id": "r5",
        "zh": "说明一起出门时的做法：我们会努力准时到。",
        "answers": [
          "We make an effort to arrive on time."
        ],
        "hint": "准时到：arrive on time"
      }
    ]
  },
  "q-get-around": {
    "metadata": {
      "meaning": "终于腾出时间做一直想做的事",
      "expression": "get around to doing…",
      "formula": "get / got around to + 动词-ing",
      "explanation": "原本打算做，但一直被别的事占着，后来终于做了；否定式常说还没顾上。",
      "boundary": "to 是介词，后接 -ing。它说明拖到后来才做，不表示随便绕路。",
      "checkpoint": "get / got around to + 动词-ing",
      "examples": [
        {
          "en": "I finally got around to fixing that door.",
          "zh": "拖了好久后说：我终于修好那扇门了。"
        },
        {
          "en": "I have not got around to replying yet.",
          "zh": "解释未回复：我还没顾上回复。"
        }
      ]
    },
    "entry": {
      "id": "entry",
      "zh": "拖了好久后说：我终于修好那扇门了。",
      "answers": [
        "I finally got around to fixing that door."
      ],
      "hint": "终于：finally；修门：fix that door"
    },
    "learning": [
      {
        "id": "l1",
        "zh": "拖了好久后说：我终于修好那扇门了。",
        "answers": [
          "I finally got around to fixing that door."
        ],
        "hint": "终于：finally；修门：fix that door"
      },
      {
        "id": "l2",
        "zh": "解释未回复：我还没顾上回复。",
        "answers": [
          "I have not got around to replying yet.",
          "I have not gotten around to replying yet.",
          "I've not got around to replying yet.",
          "I've not gotten around to replying yet.",
          "I haven't got around to replying yet.",
          "I haven't gotten around to replying yet."
        ],
        "hint": "回复：replying"
      },
      {
        "id": "l3",
        "zh": "说她最近的进展：她终于整理照片了。",
        "answers": [
          "She finally got around to sorting out her photos."
        ],
        "hint": "整理照片：sorting out her photos"
      },
      {
        "id": "l4",
        "zh": "说大家拖延的事：我们终于订好酒店了。",
        "answers": [
          "We finally got around to booking the hotel."
        ],
        "hint": "订酒店：booking the hotel"
      },
      {
        "id": "l5",
        "zh": "问朋友：你顾上读那本书了吗？",
        "answers": [
          "Have you got around to reading that book?",
          "Have you gotten around to reading that book?"
        ],
        "hint": "读那本书：reading that book"
      }
    ],
    "review": [
      {
        "id": "r1",
        "zh": "说自己的待办：我还没顾上打扫。",
        "answers": [
          "I have not got around to cleaning yet.",
          "I have not gotten around to cleaning yet.",
          "I've not got around to cleaning yet.",
          "I've not gotten around to cleaning yet.",
          "I haven't got around to cleaning yet.",
          "I haven't gotten around to cleaning yet."
        ],
        "hint": "打扫：cleaning"
      },
      {
        "id": "r2",
        "zh": "说他的进展：他终于给我打电话了。",
        "answers": [
          "He finally got around to calling me."
        ],
        "hint": "给我打电话：calling me"
      },
      {
        "id": "r3",
        "zh": "说共同的拖延：我们还没顾上拆箱子。",
        "answers": [
          "We have not got around to unpacking yet.",
          "We have not gotten around to unpacking yet.",
          "We've not got around to unpacking yet.",
          "We've not gotten around to unpacking yet.",
          "We haven't got around to unpacking yet.",
          "We haven't gotten around to unpacking yet."
        ],
        "hint": "拆箱子：unpacking"
      },
      {
        "id": "r4",
        "zh": "提醒朋友一件待办：你什么时候能顾上修自行车？",
        "answers": [
          "When will you get around to fixing your bike?"
        ],
        "hint": "修自行车：fixing your bike"
      },
      {
        "id": "r5",
        "zh": "回顾拖延后完成的事：我终于更新地址了。",
        "answers": [
          "I finally got around to updating my address."
        ],
        "hint": "更新地址：updating my address"
      }
    ]
  },
  "w-double-check": {
    "metadata": {
      "meaning": "再核对一次以避免错误",
      "expression": "double-check something",
      "formula": "double-check + 信息；double-check that + 完整句子",
      "explanation": "已有信息但想再确认是否准确，用 double-check。适合核对数字、地址、设置或是否完成某件事。",
      "boundary": "不是怀疑对方一定出错，而是多核实一次；也可接 whether / if 从句核实是否如此。",
      "checkpoint": "double-check + 信息；double-check that + 完整句子",
      "examples": [
        {
          "en": "Could you double-check these figures?",
          "zh": "你能再核对一下这些数字吗？"
        },
        {
          "en": "I'll double-check the bank details before making the payment.",
          "zh": "我会在付款前再核对一下银行信息。"
        }
      ]
    },
    "entry": {
      "id": "entry",
      "zh": "你能再核对一下这些数字吗？",
      "answers": [
        "Could you double-check these figures?"
      ],
      "hint": "这些数字：these figures"
    },
    "learning": [
      {
        "id": "l1",
        "zh": "你能再核对一下这些数字吗？",
        "answers": [
          "Could you double-check these figures?"
        ],
        "hint": "这些数字：these figures"
      },
      {
        "id": "l2",
        "zh": "我会在付款前再核对一下银行信息。",
        "answers": [
          "I'll double-check the bank details before making the payment.",
          "I will double-check the bank details before making the payment."
        ],
        "hint": "银行信息：the bank details；付款前：before making the payment"
      },
      {
        "id": "l3",
        "zh": "请再确认一下每个人都有访问权限。",
        "answers": [
          "Please double-check that everyone has access.",
          "Please double-check everyone has access."
        ],
        "hint": "每个人都有访问权限：everyone has access"
      },
      {
        "id": "l4",
        "zh": "她正在再核对送货地址。",
        "answers": [
          "She is double-checking the delivery address.",
          "She's double-checking the delivery address."
        ],
        "hint": "正在：is double-checking；送货地址：the delivery address"
      },
      {
        "id": "l5",
        "zh": "我们需要再核实一下房间是否可用。",
        "answers": [
          "We need to double-check whether the room is available.",
          "We need to double-check if the room is available."
        ],
        "hint": "房间是否可用：whether the room is available"
      }
    ],
    "review": [
      {
        "id": "r1",
        "zh": "我已经再核对过日期了。",
        "answers": [
          "I've double-checked the dates.",
          "I have double-checked the dates."
        ],
        "hint": "完成时：have double-checked；日期：the dates"
      },
      {
        "id": "r2",
        "zh": "发送之前请再核对附件。",
        "answers": [
          "Please double-check the attachments before sending."
        ],
        "hint": "附件：the attachments；发送前：before sending"
      },
      {
        "id": "r3",
        "zh": "他再确认了机器已经关掉。",
        "answers": [
          "He double-checked that the machine was off.",
          "He double-checked the machine was off."
        ],
        "hint": "机器已经关掉：the machine was off"
      },
      {
        "id": "r4",
        "zh": "我们能再核对一下名字的拼写吗？",
        "answers": [
          "Could we double-check the spelling of the name?"
        ],
        "hint": "名字的拼写：the spelling of the name"
      },
      {
        "id": "r5",
        "zh": "我想再确认一下我们用的是最新版本。",
        "answers": [
          "I want to double-check that we are using the latest version.",
          "I want to double-check that we're using the latest version.",
          "I want to double-check we are using the latest version."
        ],
        "hint": "最新版本：the latest version"
      }
    ]
  },
  "w-trade-off": {
    "metadata": {
      "meaning": "说明得到好处时需付出的代价",
      "expression": "The trade-off is…",
      "formula": "The trade-off is + 代价；The trade-off is that + 完整句子",
      "explanation": "一个方案有优点，也要接受某个不足或代价时，用 The trade-off is 引出要牺牲的部分，帮助比较选择。",
      "boundary": "不是单列缺点，而是说明为得到某种好处需要接受什么代价；名词 trade-off 通常带连字符。",
      "checkpoint": "The trade-off is + 代价；The trade-off is that + 完整句子",
      "examples": [
        {
          "en": "The trade-off is a higher cost.",
          "zh": "方案能更快完成。说明代价：代价是更高的成本。"
        },
        {
          "en": "The trade-off is that we have less flexibility.",
          "zh": "方案更便宜，但：代价是我们的灵活性会降低。"
        }
      ]
    },
    "entry": {
      "id": "entry",
      "zh": "方案能更快完成。说明代价：代价是更高的成本。",
      "answers": [
        "The trade-off is a higher cost."
      ],
      "hint": "更高成本：a higher cost"
    },
    "learning": [
      {
        "id": "l1",
        "zh": "方案能更快完成。说明代价：代价是更高的成本。",
        "answers": [
          "The trade-off is a higher cost."
        ],
        "hint": "更高成本：a higher cost"
      },
      {
        "id": "l2",
        "zh": "方案更便宜，但：代价是我们的灵活性会降低。",
        "answers": [
          "The trade-off is that we have less flexibility.",
          "The trade-off is we have less flexibility."
        ],
        "hint": "完整句子：we have less flexibility"
      },
      {
        "id": "l3",
        "zh": "集中管理能提高一致性。说明：代价是决策速度更慢。",
        "answers": [
          "The trade-off is slower decision-making."
        ],
        "hint": "更慢的决策：slower decision-making"
      },
      {
        "id": "l4",
        "zh": "远程办公省去通勤。说明：代价是面对面交流减少。",
        "answers": [
          "The trade-off is less face-to-face contact."
        ],
        "hint": "更少的面对面交流：less face-to-face contact"
      },
      {
        "id": "l5",
        "zh": "小团队沟通更快。说明：代价是每个人的工作量更大。",
        "answers": [
          "The trade-off is a heavier workload for everyone."
        ],
        "hint": "每个人更大的工作量：a heavier workload for everyone"
      }
    ],
    "review": [
      {
        "id": "r1",
        "zh": "我们可以更早交付。说明：代价是我们测试的时间会更少。",
        "answers": [
          "The trade-off is that we have less time for testing.",
          "The trade-off is we have less time for testing."
        ],
        "hint": "测试时间更少：we have less time for testing"
      },
      {
        "id": "r2",
        "zh": "这条路线更省钱。说明：代价是交货时间更长。",
        "answers": [
          "The trade-off is a longer delivery time."
        ],
        "hint": "更长交货时间：a longer delivery time"
      },
      {
        "id": "r3",
        "zh": "标准化流程更简单。说明：代价是可定制的选项更少。",
        "answers": [
          "The trade-off is fewer customization options.",
          "The trade-off is fewer customisation options."
        ],
        "hint": "更少的定制选项：fewer customization options"
      },
      {
        "id": "r4",
        "zh": "升级能带来更多功能。说明：代价是学习过程更陡峭。",
        "answers": [
          "The trade-off is a steeper learning curve."
        ],
        "hint": "更陡峭的学习曲线：a steeper learning curve"
      },
      {
        "id": "r5",
        "zh": "少招人可省预算。说明：代价是我们无法像以前那么快地处理请求。",
        "answers": [
          "The trade-off is that we cannot handle requests as quickly.",
          "The trade-off is that we can't handle requests as quickly.",
          "The trade-off is we cannot handle requests as quickly.",
          "The trade-off is we can't handle requests as quickly."
        ],
        "hint": "处理请求：handle requests；同样快：as quickly"
      }
    ]
  },
  "e-whether-or": {
    "metadata": {
      "meaning": "把两种可能性放入同一个判断",
      "expression": "whether…or…",
      "formula": "whether + 可能性A + or + 可能性B",
      "explanation": "谈论尚未确定的两种选择，或表达不论哪一种情况都成立。",
      "boundary": "whether 不能随意写成 weather。whether…or… 可表达间接选择，不需要按直接问句倒装。",
      "checkpoint": "whether + 可能性A + or + 可能性B",
      "examples": [
        {
          "en": "Students can decide whether to study alone or with others.",
          "zh": "讨论学习方式：学生可以决定独自学习还是与他人学习。"
        },
        {
          "en": "We need to consider whether to hold the event indoors or outdoors.",
          "zh": "讨论活动安排：我们需要考虑在室内还是室外举办活动。"
        }
      ]
    },
    "entry": {
      "id": "entry",
      "zh": "讨论学习方式：学生可以决定独自学习还是与他人学习。",
      "answers": [
        "Students can decide whether to study alone or with others."
      ],
      "hint": "独自学习：study alone；与他人：with others"
    },
    "learning": [
      {
        "id": "l1",
        "zh": "讨论学习方式：学生可以决定独自学习还是与他人学习。",
        "answers": [
          "Students can decide whether to study alone or with others."
        ],
        "hint": "独自学习：study alone；与他人：with others"
      },
      {
        "id": "l2",
        "zh": "讨论活动安排：我们需要考虑在室内还是室外举办活动。",
        "answers": [
          "We need to consider whether to hold the event indoors or outdoors."
        ],
        "hint": "举办活动：hold the event；室内／外：indoors / outdoors"
      },
      {
        "id": "l3",
        "zh": "分析消费选择：人们应该考虑租房还是买房。",
        "answers": [
          "People should consider whether to rent or buy a home."
        ],
        "hint": "租／买房：rent or buy a home"
      },
      {
        "id": "l4",
        "zh": "说明规则适用：无论学生住在校内还是校外，这项服务都可用。",
        "answers": [
          "The service is available whether students live on campus or off campus."
        ],
        "hint": "校内／校外：on campus / off campus"
      },
      {
        "id": "l5",
        "zh": "讨论政策：关键问题是这项政策会有帮助还是造成伤害。",
        "answers": [
          "The key question is whether this policy will help or cause harm."
        ],
        "hint": "关键问题：the key question；造成伤害：cause harm"
      }
    ],
    "review": [
      {
        "id": "r1",
        "zh": "谈职业选择：她还没有决定工作还是继续学习。",
        "answers": [
          "She has not decided whether to work or continue studying."
        ],
        "hint": "还没决定：has not decided；继续学习：continue studying"
      },
      {
        "id": "r2",
        "zh": "解释普遍需求：无论人们年轻还是年老，都需要支持。",
        "answers": [
          "People need support whether they are young or old."
        ],
        "hint": "年轻／年老：young / old"
      },
      {
        "id": "r3",
        "zh": "讨论调查：我们想知道参与者偏好速度还是质量。",
        "answers": [
          "We want to know whether participants prefer speed or quality."
        ],
        "hint": "参与者：participants；速度／质量：speed / quality"
      },
      {
        "id": "r4",
        "zh": "比较方法：教师需要决定采用考试还是项目。",
        "answers": [
          "Teachers need to decide whether to use tests or projects."
        ],
        "hint": "考试／项目：tests / projects"
      },
      {
        "id": "r5",
        "zh": "强调机会平等：无论人们住在城市还是乡村，都应该获得教育机会。",
        "answers": [
          "People should have access to education whether they live in cities or villages."
        ],
        "hint": "获得教育机会：have access to education；城市／乡村：cities / villages"
      }
    ]
  }
};
