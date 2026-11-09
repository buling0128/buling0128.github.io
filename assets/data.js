/* SECTION: site-data —— 内容登记表：正文在 content/ 下的 Word 文档里，图片在 images/ 目录。设定集版本可用 sections 数组分区（type=images 图片分区 / type=text 文字分区，文字分区引用 docx）；无 sections 时整本 docx 单页显示。updated=最后更新时间；章节 part=篇章分组；版本排列=越晚越靠上。画集已去版本化：images 为扁平图片列表，drawn=绘制时间(排序依据,越新越靠前,占位值请按真实日期修正)，tags=标签数组(如 ["人物","风景"]，供关键词筛选命中)，note=图片简介(网站只读展示)。 */
window.SITE_DATA = {
  "meta": {
    "name": "布灵的创作小屋",
    "slogan": "一个安静放故事、设定与画的地方"
  },
  "notice": {
    "title": "公告",
    "content": "网站正在逐步完善，部分图片与文字仅为占位，仅供参考"
  },
  "mascot": {
    "name": "墨文绘颜",
    "imageKey": "mascot",
    "welcome": "嗨，你好，欢迎来到布灵的创作小屋，我是看板娘墨文绘颜，点击我可以和我聊天哦~",
    "hint": "点一下，换台词换动作",
    "acts": {
      "act_idle": "站立迎接",
      "act_write": "伏案写作",
      "act_paint": "提笔作画",
      "act_drink": "端杯喝水",
      "act_letter": "举信端详",
      "act_sleep": "趴桌小憩"
    },
    "lines": [
      {
        "text": "我是哪个ip里的？哼哼，我可是这个网站独一无二的看板娘，不属于任何ip",
        "act": "act_idle"
      },
      {
        "text": "想看点什么随便看，不过想在这里找点什么艺术品就别想了，老大写的也不行，画的也不行。别告诉他我这样说的啊！",
        "act": "act_write"
      },
      {
        "text": "唉，好想成为人类啊——",
        "act": "act_sleep"
      },
      {
        "text": "我的工资有多少？这个嘛……额……还是聊点别的吧……",
        "act": "act_drink"
      },
      {
        "text": "老大挖的坑也太多了吧，根本填不完吧！",
        "act": "act_write"
      },
      {
        "text": "老大总是搞些没什么用的功能，比如点击我让我说话，有心思搞这个不如赶紧去填坑",
        "act": "act_idle"
      },
      {
        "text": "我的生日是10月22日，天秤座，属蛇，你呢？",
        "act": "act_idle"
      },
      {
        "text": "猜猜我一共有多少句对话呢",
        "act": "act_letter"
      },
      {
        "text": "我叫墨文绘颜，你可以叫我小墨，也可以叫我小颜，也可以叫我墨颜，嗯……好像哪里不太对？",
        "act": "act_idle"
      },
      {
        "text": "当看板娘很累的，总有一天，我要辞掉这份工作，去看看外面的世界！",
        "act": "act_letter"
      },
      {
        "text": "你说，老大会不会再招一个看板娘来陪陪我呢，一个人还是挺孤单的",
        "act": "act_sleep"
      },
      {
        "text": "灵感咕力咕力咕力哇恰灵感咕灵感咕～灵感咕里有老大的很多灵感哦",
        "act": "act_idle"
      },
      {
        "text": "老大随手划拉的东西很可能就成为一个新的角色，可以在草稿箱中看到他们最初的模样",
        "act": "act_write"
      },
      {
        "text": "你说，我的声音会是什么样子呢？",
        "act": "act_letter"
      }
    ]
  },
  "featured": [
    {
      "type": "stories",
      "id": "yinsaimena",
      "blurb": "因赛美那的简介"
    },
    {
      "type": "gallery",
      "id": "gal_yinsaimena",
      "blurb": "《因赛美那》的配套图集：缩略图网格一页看更多，点图即可查看大图（占位说明，可替换）。"
    },
    {
      "type": "settings",
      "id": "set_yinsaimena",
      "blurb": "《因赛美那》的配套设定集：故事舞台与版本沿革（占位说明，可替换）。"
    }
  ],
  "sections": {
    "stories": {
      "label": "故事集"
    },
    "settings": {
      "label": "设定集"
    },
    "gallery": {
      "label": "画集"
    }
  },
  "stories": [
    {
      "id": "yinsaimena",
      "name": "因赛美那",
      "coverKey": "cover_xingchen",
      "created": "（待补充）",
      "genre": "（待补充）",
      "status": "（待补充）",
      "intro": "因赛美那的简介",
      "versions": [
        {
          "id": "v2606",
          "name": "2606版",
          "note": "2026复仇篇，共 48 章",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章 · 神秘的王子",
              "file": "content/stories/yinsaimena/v2606/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章 · 王子的考验",
              "file": "content/stories/yinsaimena/v2606/c2.docx"
            },
            {
              "id": "c3",
              "title": "第三章 · 逐渐亲密的二人",
              "file": "content/stories/yinsaimena/v2606/c3.docx"
            },
            {
              "id": "c4",
              "title": "第四章 · 王子的秘密",
              "file": "content/stories/yinsaimena/v2606/c4.docx"
            },
            {
              "id": "c5",
              "title": "第五章 · 家人",
              "file": "content/stories/yinsaimena/v2606/c5.docx"
            },
            {
              "id": "c6",
              "title": "第六章 · 捡到未婚妻",
              "file": "content/stories/yinsaimena/v2606/c6.docx"
            },
            {
              "id": "c7",
              "title": "第七章 · 逐星者",
              "file": "content/stories/yinsaimena/v2606/c7.docx"
            },
            {
              "id": "c8",
              "title": "第八章 · 美食城的阴霾",
              "file": "content/stories/yinsaimena/v2606/c8.docx"
            },
            {
              "id": "c9",
              "title": "第九章 · 鬼面三人",
              "file": "content/stories/yinsaimena/v2606/c9.docx"
            },
            {
              "id": "c10",
              "title": "第十章 · 雪屋",
              "file": "content/stories/yinsaimena/v2606/c10.docx"
            },
            {
              "id": "c11",
              "title": "第十一章 · 实验体",
              "file": "content/stories/yinsaimena/v2606/c11.docx"
            },
            {
              "id": "c12",
              "title": "第十二章 · 治愈法杖",
              "file": "content/stories/yinsaimena/v2606/c12.docx"
            },
            {
              "id": "c13",
              "title": "第十三章 · 星兔露",
              "file": "content/stories/yinsaimena/v2606/c13.docx"
            },
            {
              "id": "c14",
              "title": "第十四章 · 杀戮之影",
              "file": "content/stories/yinsaimena/v2606/c14.docx"
            },
            {
              "id": "c15",
              "title": "第十五章 · 占卜未来？",
              "file": "content/stories/yinsaimena/v2606/c15.docx"
            },
            {
              "id": "c16",
              "title": "第十六章 · 武庆-八强第一战",
              "file": "content/stories/yinsaimena/v2606/c16.docx"
            },
            {
              "id": "c17",
              "title": "第十七章 · 武庆-八强第二、三战",
              "file": "content/stories/yinsaimena/v2606/c17.docx"
            },
            {
              "id": "c18",
              "title": "第十八章 · 幽灵与凋灵",
              "file": "content/stories/yinsaimena/v2606/c18.docx"
            },
            {
              "id": "c19",
              "title": "第十九章 · 幽兰现身",
              "file": "content/stories/yinsaimena/v2606/c19.docx"
            },
            {
              "id": "c20",
              "title": "第二十章 · 无尽的花木人",
              "file": "content/stories/yinsaimena/v2606/c20.docx"
            },
            {
              "id": "c21",
              "title": "第二十一章 · 合作",
              "file": "content/stories/yinsaimena/v2606/c21.docx"
            },
            {
              "id": "c22",
              "title": "第二十二章 · 冰火瓶",
              "file": "content/stories/yinsaimena/v2606/c22.docx"
            },
            {
              "id": "c23",
              "title": "第二十三章 · 光之矛",
              "file": "content/stories/yinsaimena/v2606/c23.docx"
            },
            {
              "id": "c24",
              "title": "第二十四章 · 神秘的罪魁祸首",
              "file": "content/stories/yinsaimena/v2606/c24.docx"
            },
            {
              "id": "c25",
              "title": "第二十五章 · 暗处的危机",
              "file": "content/stories/yinsaimena/v2606/c25.docx"
            },
            {
              "id": "c26",
              "title": "第二十六章 · 小红帽",
              "file": "content/stories/yinsaimena/v2606/c26.docx"
            },
            {
              "id": "c27",
              "title": "第二十七章 · 承神者",
              "file": "content/stories/yinsaimena/v2606/c27.docx"
            },
            {
              "id": "c28",
              "title": "第二十八章 · 洛嘉琳的过去",
              "file": "content/stories/yinsaimena/v2606/c28.docx"
            },
            {
              "id": "c29",
              "title": "第二十九章 · 潜入酒馆",
              "file": "content/stories/yinsaimena/v2606/c29.docx"
            },
            {
              "id": "c30",
              "title": "第三十章 · 吸收元素力的水晶",
              "file": "content/stories/yinsaimena/v2606/c30.docx"
            },
            {
              "id": "c31",
              "title": "第三十一章 · 砂岩上的城市",
              "file": "content/stories/yinsaimena/v2606/c31.docx"
            },
            {
              "id": "c32",
              "title": "第三十二章 · 巡子的往事",
              "file": "content/stories/yinsaimena/v2606/c32.docx"
            },
            {
              "id": "c33",
              "title": "第三十三章 · 驱虫水明石",
              "file": "content/stories/yinsaimena/v2606/c33.docx"
            },
            {
              "id": "c34",
              "title": "第三十四章 · 千械城危机",
              "file": "content/stories/yinsaimena/v2606/c34.docx"
            },
            {
              "id": "c35",
              "title": "第三十五章 · 琥珀",
              "file": "content/stories/yinsaimena/v2606/c35.docx"
            },
            {
              "id": "c36",
              "title": "第三十六章 · 重逢",
              "file": "content/stories/yinsaimena/v2606/c36.docx"
            },
            {
              "id": "c37",
              "title": "第三十七章 · 书信",
              "file": "content/stories/yinsaimena/v2606/c37.docx"
            },
            {
              "id": "c38",
              "title": "第三十八章 · 进入灵狐山",
              "file": "content/stories/yinsaimena/v2606/c38.docx"
            },
            {
              "id": "c39",
              "title": "第三十九章 · 赤姬与山鬼",
              "file": "content/stories/yinsaimena/v2606/c39.docx"
            },
            {
              "id": "c40",
              "title": "第四十章 · 宴会",
              "file": "content/stories/yinsaimena/v2606/c40.docx"
            },
            {
              "id": "c41",
              "title": "第四十一章 · 山鬼复苏",
              "file": "content/stories/yinsaimena/v2606/c41.docx"
            },
            {
              "id": "c42",
              "title": "第四十二章 · 第二个秘密",
              "file": "content/stories/yinsaimena/v2606/c42.docx"
            },
            {
              "id": "c43",
              "title": "第四十三章 · 蔚蓝鬼镇",
              "file": "content/stories/yinsaimena/v2606/c43.docx"
            },
            {
              "id": "c44",
              "title": "第四十四章 · 凶杀案",
              "file": "content/stories/yinsaimena/v2606/c44.docx"
            },
            {
              "id": "c45",
              "title": "第四十五章 · 隐藏的巨目鬼",
              "file": "content/stories/yinsaimena/v2606/c45.docx"
            },
            {
              "id": "c46",
              "title": "第四十六章 · 丧钟为谁而鸣",
              "file": "content/stories/yinsaimena/v2606/c46.docx"
            },
            {
              "id": "c47",
              "title": "第四十七章 · 复仇幽灵",
              "file": "content/stories/yinsaimena/v2606/c47.docx"
            },
            {
              "id": "c48",
              "title": "第四十八章 · 准备返程",
              "file": "content/stories/yinsaimena/v2606/c48.docx"
            }
          ],
          "coverKey": "cover_xingchen"
        },
        {
          "id": "v25",
          "name": "25版",
          "note": "2025版，共 14 章",
          "chapters": [
            {
              "id": "c1",
              "title": "第1章 · 懒猫王子的秘密",
              "file": "content/stories/yinsaimena/v25/c1.docx"
            },
            {
              "id": "c2",
              "title": "第2章 · 海、领土和贝壳",
              "file": "content/stories/yinsaimena/v25/c2.docx"
            },
            {
              "id": "c3",
              "title": "第3章 · 王族的晚宴",
              "file": "content/stories/yinsaimena/v25/c3.docx"
            },
            {
              "id": "c4",
              "title": "第4章 · 小村庄的英雄少年",
              "file": "content/stories/yinsaimena/v25/c4.docx"
            },
            {
              "id": "c5",
              "title": "第5章 · 捡到未婚妻",
              "file": "content/stories/yinsaimena/v25/c5.docx"
            },
            {
              "id": "c6",
              "title": "第6章 · 美食城的情报官",
              "file": "content/stories/yinsaimena/v25/c6.docx"
            },
            {
              "id": "c7",
              "title": "第7章 · 幽灵与鬼面三人",
              "file": "content/stories/yinsaimena/v25/c7.docx"
            },
            {
              "id": "c8",
              "title": "第8章 · 星兔露村的幸存者",
              "file": "content/stories/yinsaimena/v25/c8.docx"
            },
            {
              "id": "c9",
              "title": "第9章 · 掌握愈元素力的少女",
              "file": "content/stories/yinsaimena/v25/c9.docx"
            },
            {
              "id": "c10",
              "title": "第10章 · 过往与家人",
              "file": "content/stories/yinsaimena/v25/c10.docx"
            },
            {
              "id": "c11",
              "title": "第11章 · 意外的会面",
              "file": "content/stories/yinsaimena/v25/c11.docx"
            },
            {
              "id": "c12",
              "title": "第12章 · 追杀厄神教之人",
              "file": "content/stories/yinsaimena/v25/c12.docx"
            },
            {
              "id": "c13",
              "title": "第13章 · 无尽的花木人",
              "file": "content/stories/yinsaimena/v25/c13.docx"
            },
            {
              "id": "c14",
              "title": "第14章 · 灵狐山的邀约",
              "file": "content/stories/yinsaimena/v25/c14.docx"
            }
          ],
          "coverKey": "cover_yuting"
        },
        {
          "id": "neo",
          "name": "neo版",
          "note": "共 1 章",
          "chapters": [
            {
              "id": "outline1",
              "title": "大纲速通 · 第一版",
              "file": "content/stories/yinsaimena/neo/outline1.docx"
            }
          ],
          "coverKey": "cover_zhiyuan"
        },
        {
          "id": "v24",
          "name": "24版",
          "note": "2024版，共 3 章",
          "chapters": [
            {
              "id": "c1",
              "title": "第1章 · 归客与旅客",
              "file": "content/stories/yinsaimena/v24/c1.docx"
            },
            {
              "id": "c2",
              "title": "第2章 · 少女与天真的幻想",
              "file": "content/stories/yinsaimena/v24/c2.docx"
            },
            {
              "id": "c3",
              "title": "第3章 · 武庆的邀请函",
              "file": "content/stories/yinsaimena/v24/c3.docx"
            }
          ],
          "coverKey": "cover_yaoguijie"
        },
        {
          "id": "v23",
          "name": "23版",
          "note": "2023版，共 48 章",
          "chapters": [
            {
              "id": "c1",
              "title": "第1章 · 相遇",
              "file": "content/stories/yinsaimena/v23/c1.docx"
            },
            {
              "id": "c2",
              "title": "第2章 · 未来",
              "file": "content/stories/yinsaimena/v23/c2.docx"
            },
            {
              "id": "c3",
              "title": "第3章 · 山路",
              "file": "content/stories/yinsaimena/v23/c3.docx"
            },
            {
              "id": "c4",
              "title": "第4章 · 决定",
              "file": "content/stories/yinsaimena/v23/c4.docx"
            },
            {
              "id": "c5",
              "title": "第5章 · 公主",
              "file": "content/stories/yinsaimena/v23/c5.docx"
            },
            {
              "id": "c6",
              "title": "第6章 · 情报",
              "file": "content/stories/yinsaimena/v23/c6.docx"
            },
            {
              "id": "c7",
              "title": "第7章 · D-4",
              "file": "content/stories/yinsaimena/v23/c7.docx"
            },
            {
              "id": "c8",
              "title": "第8章 · 风雪",
              "file": "content/stories/yinsaimena/v23/c8.docx"
            },
            {
              "id": "c9",
              "title": "第9章 · 星兔",
              "file": "content/stories/yinsaimena/v23/c9.docx"
            },
            {
              "id": "c10",
              "title": "第10章 · 封锁",
              "file": "content/stories/yinsaimena/v23/c10.docx"
            },
            {
              "id": "c11",
              "title": "第11章 · 调查",
              "file": "content/stories/yinsaimena/v23/c11.docx"
            },
            {
              "id": "c12",
              "title": "第12章 · 真相",
              "file": "content/stories/yinsaimena/v23/c12.docx"
            },
            {
              "id": "c13",
              "title": "第13章 · 断弓",
              "file": "content/stories/yinsaimena/v23/c13.docx"
            },
            {
              "id": "c14",
              "title": "第14章 · 武庆",
              "file": "content/stories/yinsaimena/v23/c14.docx"
            },
            {
              "id": "c15",
              "title": "第15章 · 拜师",
              "file": "content/stories/yinsaimena/v23/c15.docx"
            },
            {
              "id": "c16",
              "title": "第16章 · 狼群",
              "file": "content/stories/yinsaimena/v23/c16.docx"
            },
            {
              "id": "c17",
              "title": "第17章 · 紫魔",
              "file": "content/stories/yinsaimena/v23/c17.docx"
            },
            {
              "id": "c18",
              "title": "第18章 · 珠宝",
              "file": "content/stories/yinsaimena/v23/c18.docx"
            },
            {
              "id": "c19",
              "title": "第19章 · 怪盗",
              "file": "content/stories/yinsaimena/v23/c19.docx"
            },
            {
              "id": "c20",
              "title": "第20章 · 琳娜",
              "file": "content/stories/yinsaimena/v23/c20.docx"
            },
            {
              "id": "c21",
              "title": "第21章 · 迷宫",
              "file": "content/stories/yinsaimena/v23/c21.docx"
            },
            {
              "id": "c22",
              "title": "第22章 · 城堡",
              "file": "content/stories/yinsaimena/v23/c22.docx"
            },
            {
              "id": "c23",
              "title": "第23章 · 灵狐",
              "file": "content/stories/yinsaimena/v23/c23.docx"
            },
            {
              "id": "c24",
              "title": "第24章 · 双刀",
              "file": "content/stories/yinsaimena/v23/c24.docx"
            },
            {
              "id": "c25",
              "title": "第25章 · 汇合",
              "file": "content/stories/yinsaimena/v23/c25.docx"
            },
            {
              "id": "c26",
              "title": "第26章 · 格川",
              "file": "content/stories/yinsaimena/v23/c26.docx"
            },
            {
              "id": "c27",
              "title": "第27章 · 地鱼",
              "file": "content/stories/yinsaimena/v23/c27.docx"
            },
            {
              "id": "c28",
              "title": "第28章 · 殒光",
              "file": "content/stories/yinsaimena/v23/c28.docx"
            },
            {
              "id": "c29",
              "title": "第29章 · 邀约",
              "file": "content/stories/yinsaimena/v23/c29.docx"
            },
            {
              "id": "c30",
              "title": "第30章 · 风龙",
              "file": "content/stories/yinsaimena/v23/c30.docx"
            },
            {
              "id": "c31",
              "title": "第31章 · 愈雨",
              "file": "content/stories/yinsaimena/v23/c31.docx"
            },
            {
              "id": "c32",
              "title": "第32章 · 重逢",
              "file": "content/stories/yinsaimena/v23/c32.docx"
            },
            {
              "id": "c33",
              "title": "第33章 · 角斗",
              "file": "content/stories/yinsaimena/v23/c33.docx"
            },
            {
              "id": "c34",
              "title": "第34章 · 现实",
              "file": "content/stories/yinsaimena/v23/c34.docx"
            },
            {
              "id": "c35",
              "title": "第35章 · 泠羽",
              "file": "content/stories/yinsaimena/v23/c35.docx"
            },
            {
              "id": "c36",
              "title": "第36章 · 英雄",
              "file": "content/stories/yinsaimena/v23/c36.docx"
            },
            {
              "id": "c37",
              "title": "第37章 · 集结",
              "file": "content/stories/yinsaimena/v23/c37.docx"
            },
            {
              "id": "c38",
              "title": "第38章 · 魔灭",
              "file": "content/stories/yinsaimena/v23/c38.docx"
            },
            {
              "id": "c39",
              "title": "第39章 · 启航",
              "file": "content/stories/yinsaimena/v23/c39.docx"
            },
            {
              "id": "c40",
              "title": "第40章 · 迷海",
              "file": "content/stories/yinsaimena/v23/c40.docx"
            },
            {
              "id": "c41",
              "title": "第41章 · 屠杀",
              "file": "content/stories/yinsaimena/v23/c41.docx"
            },
            {
              "id": "c42",
              "title": "第42章 · 现状",
              "file": "content/stories/yinsaimena/v23/c42.docx"
            },
            {
              "id": "c43",
              "title": "第43章 · 混战",
              "file": "content/stories/yinsaimena/v23/c43.docx"
            },
            {
              "id": "c44",
              "title": "第44章 · 怨灵",
              "file": "content/stories/yinsaimena/v23/c44.docx"
            },
            {
              "id": "c45",
              "title": "第45章 · 死神",
              "file": "content/stories/yinsaimena/v23/c45.docx"
            },
            {
              "id": "c46",
              "title": "第46章 · 突破",
              "file": "content/stories/yinsaimena/v23/c46.docx"
            },
            {
              "id": "c47",
              "title": "第47章 · 兰绫",
              "file": "content/stories/yinsaimena/v23/c47.docx"
            },
            {
              "id": "c48",
              "title": "第48章 · 冲击",
              "file": "content/stories/yinsaimena/v23/c48.docx"
            }
          ],
          "coverKey": "cover_xianjing"
        },
        {
          "id": "v15",
          "name": "15版",
          "note": "章节为占位示例，请替换真实文档",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章",
              "file": "content/stories/yinsaimena/v15/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章",
              "file": "content/stories/yinsaimena/v15/c2.docx"
            }
          ],
          "coverKey": "cover_tinilapu"
        }
      ],
      "kind": "novel",
      "updated": "2026-11-02"
    },
    {
      "id": "yingzhidu",
      "name": "樱之都·奈樱",
      "coverKey": "cover_yuting",
      "created": "（待补充）",
      "genre": "（待补充）",
      "status": "（待补充）",
      "intro": "《樱之都·奈樱》的简介（待替换为你自己的介绍文字）。",
      "versions": [
        {
          "id": "v24",
          "name": "24版",
          "note": "2024版，共 3 章 / 3 篇章",
          "coverKey": "cover_yaoguijie",
          "chapters": [
            {
              "id": "c2",
              "title": "记忆之店",
              "part": "序章",
              "file": "content/stories/yingzhidu/v24/c2.docx"
            },
            {
              "id": "c3",
              "title": "风剑缘",
              "part": "风剑缘",
              "file": "content/stories/yingzhidu/v24/c3.docx"
            },
            {
              "id": "c1",
              "title": "秋风引，雨林灵1",
              "part": "秋风引，雨林灵",
              "file": "content/stories/yingzhidu/v24/c1.docx"
            }
          ]
        },
        {
          "id": "v23",
          "name": "23版",
          "note": "2023版，共 15 章 / 8 篇章",
          "coverKey": "cover_xingchen",
          "chapters": [
            {
              "id": "c1",
              "title": "烟火栀子",
              "part": "烟火栀子",
              "file": "content/stories/yingzhidu/v23/c1.docx"
            },
            {
              "id": "c2",
              "title": "花城骑士与混兽",
              "part": "花城骑士",
              "file": "content/stories/yingzhidu/v23/c2.docx"
            },
            {
              "id": "c3",
              "title": "记忆之店",
              "part": "记忆之店",
              "file": "content/stories/yingzhidu/v23/c3.docx"
            },
            {
              "id": "c4",
              "title": "风剑缘1",
              "part": "风剑缘",
              "file": "content/stories/yingzhidu/v23/c4.docx"
            },
            {
              "id": "c5",
              "title": "风剑缘2",
              "part": "风剑缘",
              "file": "content/stories/yingzhidu/v23/c5.docx"
            },
            {
              "id": "c6",
              "title": "风剑缘3",
              "part": "风剑缘",
              "file": "content/stories/yingzhidu/v23/c6.docx"
            },
            {
              "id": "c7",
              "title": "昼夜赤火歌1",
              "part": "昼夜赤火歌",
              "file": "content/stories/yingzhidu/v23/c7.docx"
            },
            {
              "id": "c8",
              "title": "昼夜赤火歌2",
              "part": "昼夜赤火歌",
              "file": "content/stories/yingzhidu/v23/c8.docx"
            },
            {
              "id": "c9",
              "title": "昼夜赤火歌3",
              "part": "昼夜赤火歌",
              "file": "content/stories/yingzhidu/v23/c9.docx"
            },
            {
              "id": "c10",
              "title": "昼夜赤火歌4",
              "part": "昼夜赤火歌",
              "file": "content/stories/yingzhidu/v23/c10.docx"
            },
            {
              "id": "c11",
              "title": "伪吸血鬼1",
              "part": "伪吸血鬼",
              "file": "content/stories/yingzhidu/v23/c11.docx"
            },
            {
              "id": "c12",
              "title": "伪吸血鬼2",
              "part": "伪吸血鬼",
              "file": "content/stories/yingzhidu/v23/c12.docx"
            },
            {
              "id": "c13",
              "title": "伪吸血鬼3",
              "part": "伪吸血鬼",
              "file": "content/stories/yingzhidu/v23/c13.docx"
            },
            {
              "id": "c14",
              "title": "逆转，孤儿变少爷，与23个 女仆的凤凰人生",
              "part": "逆转，孤儿变少爷，与23个 女仆的凤凰人生",
              "file": "content/stories/yingzhidu/v23/c14.docx"
            },
            {
              "id": "c15",
              "title": "夏日雪",
              "part": "夏日雪",
              "file": "content/stories/yingzhidu/v23/c15.docx"
            }
          ]
        },
        {
          "id": "loose",
          "name": "散装版",
          "note": "零散章节，未分篇章",
          "coverKey": "cover_yuting",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章",
              "file": "content/stories/yingzhidu/loose/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章",
              "file": "content/stories/yingzhidu/loose/c2.docx"
            }
          ]
        }
      ],
      "kind": "novel",
      "updated": "2026-11-02"
    },
    {
      "created": "（待补充）",
      "genre": "（待补充）",
      "status": "（待补充）",
      "id": "yaoguijie",
      "name": "妖鬼街",
      "coverKey": "cover_yaoguijie",
      "intro": "妖鬼街的简介（占位，可替换）。",
      "versions": [
        {
          "id": "v10",
          "name": "1.0版",
          "note": "章节为占位示例，请替换真实文档",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章",
              "file": "content/stories/yaoguijie/v10/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章",
              "file": "content/stories/yaoguijie/v10/c2.docx"
            }
          ],
          "coverKey": "cover_yaoguijie"
        }
      ],
      "kind": "comic",
      "updated": "2026-10-27"
    },
    {
      "created": "（待补充）",
      "genre": "（待补充）",
      "status": "（待补充）",
      "id": "xianjing",
      "name": "仙境",
      "coverKey": "cover_xianjing",
      "intro": "仙境的简介（占位，可替换）。",
      "versions": [
        {
          "id": "v23",
          "name": "23版",
          "note": "2023版，共 2 章",
          "chapters": [
            {
              "id": "c1",
              "title": "仙境1",
              "file": "content/stories/xianjing/v23/c1.docx"
            },
            {
              "id": "c2",
              "title": "仙境2",
              "file": "content/stories/xianjing/v23/c2.docx"
            }
          ],
          "coverKey": "cover_xianjing"
        }
      ],
      "kind": "novel",
      "updated": "2026-11-01"
    },
    {
      "created": "（待补充）",
      "genre": "（待补充）",
      "status": "（待补充）",
      "id": "tinilapu",
      "name": "提奈拉普",
      "coverKey": "cover_tinilapu",
      "intro": "提奈拉普的简介（占位，可替换）。",
      "versions": [
        {
          "id": "solo",
          "name": "独立版",
          "note": "整篇完结，1 个文档",
          "coverKey": "cover_lancoa",
          "chapters": [
            {
              "id": "full",
              "title": "全文",
              "file": "content/stories/tinilapu/solo/full.docx"
            }
          ]
        },
        {
          "id": "event",
          "name": "活动版",
          "note": "2.0版，共 3 章",
          "coverKey": "cover_tinilapu",
          "chapters": [
            {
              "id": "c1",
              "title": "第1章",
              "file": "content/stories/tinilapu/event/c1.docx"
            },
            {
              "id": "c2",
              "title": "第2章",
              "file": "content/stories/tinilapu/event/c2.docx"
            },
            {
              "id": "c3",
              "title": "第3章",
              "file": "content/stories/tinilapu/event/c3.docx"
            }
          ]
        }
      ],
      "kind": "novel",
      "updated": "2026-11-01"
    },
    {
      "created": "（待补充）",
      "genre": "（待补充）",
      "status": "（待补充）",
      "id": "lancao",
      "name": "蓝·草",
      "coverKey": "cover_lancoa",
      "intro": "蓝·草的简介（占位，可替换）。",
      "versions": [
        {
          "id": "old",
          "name": "旧版",
          "note": "章节为占位示例，请替换真实文档",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章",
              "file": "content/stories/lancao/old/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章",
              "file": "content/stories/lancao/old/c2.docx"
            }
          ],
          "coverKey": "cover_lancoa"
        },
        {
          "id": "new",
          "name": "新版",
          "note": "章节为占位示例，请替换真实文档",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章",
              "file": "content/stories/lancao/new/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章",
              "file": "content/stories/lancao/new/c2.docx"
            }
          ],
          "coverKey": "cover_yunhai"
        }
      ],
      "kind": "comic",
      "updated": "2026-10-30"
    },
    {
      "id": "guaiwumaoxianzhe",
      "name": "怪物冒险者",
      "kind": "novel",
      "coverKey": "cover_starry",
      "created": "（待补充）",
      "genre": "小说（待补充）",
      "status": "（待补充）",
      "intro": "《怪物冒险者》的简介（占位，请在登记表替换）。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "共 2 章",
          "chapters": [
            {
              "id": "c1",
              "title": "高塔与冒险者",
              "file": "content/stories/guaiwumaoxianzhe/v1/c1.docx"
            },
            {
              "id": "c2",
              "title": "可怕的魅魔",
              "file": "content/stories/guaiwumaoxianzhe/v1/c2.docx"
            }
          ]
        }
      ],
      "updated": "2026-11-01"
    },
    {
      "id": "gaosuyinchang",
      "name": "高速吟唱魔法使",
      "kind": "novel",
      "coverKey": "summer1",
      "created": "（待补充）",
      "genre": "小说（待补充）",
      "status": "（待补充）",
      "intro": "《高速吟唱魔法使》的简介（占位，请在登记表替换）。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "共 4 章",
          "chapters": [
            {
              "id": "c1",
              "title": "第1章 · 神明降临人间，誓要将大爱传播世界",
              "file": "content/stories/gaosuyinchang/v1/c1.docx"
            },
            {
              "id": "c2",
              "title": "第2章 · 阴暗女来袭，没有 朋友的精灵姐妹",
              "file": "content/stories/gaosuyinchang/v1/c2.docx"
            },
            {
              "id": "c3",
              "title": "第3章 · 课程与自我介绍，破门而入的奇怪社团",
              "file": "content/stories/gaosuyinchang/v1/c3.docx"
            },
            {
              "id": "c4",
              "title": "第4章 · 实践课展示自我，同学们个个身怀绝技",
              "file": "content/stories/gaosuyinchang/v1/c4.docx"
            }
          ]
        }
      ],
      "updated": "2026-11-01"
    },
    {
      "id": "ailinditu",
      "name": "艾琳·麦克伦的地图",
      "kind": "novel",
      "coverKey": "summer2",
      "created": "（待补充）",
      "genre": "小说（待补充）",
      "status": "（待补充）",
      "intro": "《艾琳·麦克伦的地图》的简介（占位，请在登记表替换）。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "章节为占位示例，请替换真实文档",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章",
              "file": "content/stories/ailinditu/v1/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章",
              "file": "content/stories/ailinditu/v1/c2.docx"
            }
          ]
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "yongchibuxiu",
      "name": "勇捶不朽的魔法少女",
      "kind": "novel",
      "coverKey": "summer3",
      "created": "（待补充）",
      "genre": "小说（待补充）",
      "status": "（待补充）",
      "intro": "《勇捶不朽的魔法少女》的简介（占位，请在登记表替换）。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "章节为占位示例，请替换真实文档",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章",
              "file": "content/stories/yongchibuxiu/v1/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章",
              "file": "content/stories/yongchibuxiu/v1/c2.docx"
            }
          ]
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "bulingduanpian",
      "name": "布灵的短篇故事集",
      "kind": "novel",
      "coverKey": "summer4",
      "created": "（待补充）",
      "genre": "小说（待补充）",
      "status": "（待补充）",
      "intro": "《布灵的短篇故事集》的简介（占位，请在登记表替换）。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "共 2 篇",
          "chapters": [
            {
              "id": "c1",
              "title": "Guluyoi",
              "file": "content/stories/bulingduanpian/v1/c1.docx"
            },
            {
              "id": "c2",
              "title": "ZONKUM",
              "file": "content/stories/bulingduanpian/v1/c2.docx"
            }
          ]
        }
      ],
      "updated": "2026-11-02"
    },
    {
      "id": "haitu",
      "name": "海兔岸上求生记",
      "kind": "comic",
      "coverKey": "summer5",
      "created": "（待补充）",
      "genre": "漫画（待补充）",
      "status": "（待补充）",
      "intro": "《海兔岸上求生记》的简介（占位，请在登记表替换）。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "章节为占位示例，请替换真实文档",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章",
              "file": "content/stories/haitu/v1/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章",
              "file": "content/stories/haitu/v1/c2.docx"
            }
          ]
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "duocai",
      "name": "多彩世界的旅行",
      "kind": "comic",
      "coverKey": "summer6",
      "created": "（待补充）",
      "genre": "漫画（待补充）",
      "status": "（待补充）",
      "intro": "《多彩世界的旅行》的简介（占位，请在登记表替换）。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "章节为占位示例，请替换真实文档",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章",
              "file": "content/stories/duocai/v1/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章",
              "file": "content/stories/duocai/v1/c2.docx"
            }
          ]
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "yulinling",
      "name": "雨·林灵",
      "kind": "comic",
      "coverKey": "starry1",
      "created": "（待补充）",
      "genre": "漫画（待补充）",
      "status": "（待补充）",
      "intro": "《雨·林灵》的简介（占位，请在登记表替换）。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "章节为占位示例，请替换真实文档",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章",
              "file": "content/stories/yulinling/v1/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章",
              "file": "content/stories/yulinling/v1/c2.docx"
            }
          ]
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "tuoluo",
      "name": "陀罗少女",
      "kind": "comic",
      "coverKey": "starry2",
      "created": "（待补充）",
      "genre": "漫画（待补充）",
      "status": "（待补充）",
      "intro": "《陀罗少女》的简介（占位，请在登记表替换）。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "章节为占位示例，请替换真实文档",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章",
              "file": "content/stories/tuoluo/v1/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章",
              "file": "content/stories/tuoluo/v1/c2.docx"
            }
          ]
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "wanwu",
      "name": "万物娘化",
      "kind": "comic",
      "coverKey": "starry3",
      "created": "（待补充）",
      "genre": "漫画（待补充）",
      "status": "（待补充）",
      "intro": "《万物娘化》的简介（占位，请在登记表替换）。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "章节为占位示例，请替换真实文档",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章",
              "file": "content/stories/wanwu/v1/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章",
              "file": "content/stories/wanwu/v1/c2.docx"
            }
          ]
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "canger",
      "name": "苍耳饲养指南",
      "kind": "comic",
      "coverKey": "starry4",
      "created": "（待补充）",
      "genre": "漫画（待补充）",
      "status": "（待补充）",
      "intro": "《苍耳饲养指南》的简介（占位，请在登记表替换）。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "章节为占位示例，请替换真实文档",
          "chapters": [
            {
              "id": "c1",
              "title": "第一章",
              "file": "content/stories/canger/v1/c1.docx"
            },
            {
              "id": "c2",
              "title": "第二章",
              "file": "content/stories/canger/v1/c2.docx"
            }
          ]
        }
      ],
      "updated": "2026-10-30"
    }
  ],
  "settings": [
    {
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "id": "set_yinsaimena",
      "name": "因赛美那 · 设定",
      "coverKey": "cover_xingchen",
      "intro": "《因赛美那》的设定集（占位简介，请在 content/settings 中替换正文并修改此处）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v2606",
          "name": "2606版",
          "note": "含 4 个分区：人物头像 / 人设图 / 国家 / 设定正文",
          "file": "content/settings/set_yinsaimena/v2606.docx",
          "coverKey": "cover_xingchen",
          "sections": [
            {
              "id": "avatars",
              "title": "人物头像",
              "type": "images",
              "images": [
                {
                  "imageKey": "ysmn2606_av1",
                  "title": "人物头像 001"
                },
                {
                  "imageKey": "ysmn2606_av2",
                  "title": "人物头像 002"
                },
                {
                  "imageKey": "ysmn2606_god",
                  "title": "神明头像"
                }
              ]
            },
            {
              "id": "designs",
              "title": "人设图",
              "type": "images",
              "images": [
                {
                  "imageKey": "ysmn2606_pd_jiling",
                  "title": "寂灵 · 人设 其一"
                },
                {
                  "imageKey": "ysmn2606_pd_guangxinche",
                  "title": "光昕澈 · 人设 其一"
                },
                {
                  "imageKey": "ysmn2606_pd_jiayinzi",
                  "title": "佳因子 · 人设 其一"
                },
                {
                  "imageKey": "ysmn2606_pd_chiji",
                  "title": "赤姬 · 人设 其一"
                },
                {
                  "imageKey": "ysmn2606_pd_hupo",
                  "title": "琥珀 · 人设 其一"
                },
                {
                  "imageKey": "ysmn2606_pd_buling",
                  "title": "布灵 · 人设 其一"
                },
                {
                  "imageKey": "ysmn2606_pd_bucheng",
                  "title": "布澄 · 人设 其一"
                }
              ]
            },
            {
              "id": "nations",
              "title": "国家",
              "type": "images",
              "images": [
                {
                  "imageKey": "ysmn2606_nations",
                  "title": "国家标志总览"
                }
              ]
            },
            {
              "id": "main",
              "title": "设定正文",
              "type": "text",
              "file": "content/settings/set_yinsaimena/v2606.docx"
            }
          ]
        },
        {
          "id": "v25",
          "name": "25版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_yinsaimena/v25.docx",
          "coverKey": "cover_yuting"
        },
        {
          "id": "neo",
          "name": "neo版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_yinsaimena/neo.docx",
          "coverKey": "cover_zhiyuan"
        },
        {
          "id": "v24",
          "name": "24版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_yinsaimena/v24.docx",
          "coverKey": "cover_yaoguijie"
        },
        {
          "id": "v23",
          "name": "23版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_yinsaimena/v23.docx",
          "coverKey": "cover_xianjing"
        },
        {
          "id": "v15",
          "name": "15版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_yinsaimena/v15.docx",
          "coverKey": "cover_tinilapu"
        }
      ],
      "updated": "2026-11-02"
    },
    {
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "id": "set_yingzhidu",
      "name": "樱之都·奈樱 · 设定",
      "coverKey": "cover_yuting",
      "intro": "《樱之都·奈樱》的设定集（占位简介，请在 content/settings 中替换正文并修改此处）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v24",
          "name": "24版",
          "note": "2024版设定",
          "coverKey": "cover_yaoguijie",
          "file": "content/settings/set_yingzhidu/v24.docx"
        },
        {
          "id": "v23",
          "name": "23版",
          "note": "2023版设定",
          "coverKey": "cover_xingchen",
          "file": "content/settings/set_yingzhidu/v23.docx"
        },
        {
          "id": "loose",
          "name": "散装版",
          "note": "零散设定",
          "coverKey": "cover_yuting",
          "file": "content/settings/set_yingzhidu/loose.docx"
        }
      ],
      "updated": "2026-11-02"
    },
    {
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "id": "set_yaoguijie",
      "name": "妖鬼街 · 设定",
      "coverKey": "cover_yaoguijie",
      "intro": "《妖鬼街》的设定集（占位简介，请在 content/settings 中替换正文并修改此处）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v10",
          "name": "1.0版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_yaoguijie/v10.docx",
          "coverKey": "cover_yaoguijie"
        }
      ],
      "updated": "2026-10-27"
    },
    {
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "id": "set_xianjing",
      "name": "仙境 · 设定",
      "coverKey": "cover_xianjing",
      "intro": "《仙境》的设定集（占位简介，请在 content/settings 中替换正文并修改此处）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v23",
          "name": "23版",
          "note": "2023版设定",
          "file": "content/settings/set_xianjing/v23.docx",
          "coverKey": "cover_xianjing"
        }
      ],
      "updated": "2026-11-01"
    },
    {
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "id": "set_tinilapu",
      "name": "提奈拉普 · 设定",
      "coverKey": "cover_tinilapu",
      "intro": "《提奈拉普》的设定集（占位简介，请在 content/settings 中替换正文并修改此处）。整体页面，不分章节。",
      "versions": [
        {
          "id": "event",
          "name": "活动版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_tinilapu/event.docx",
          "coverKey": "cover_tinilapu"
        },
        {
          "id": "solo",
          "name": "独立版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_tinilapu/solo.docx",
          "coverKey": "cover_lancoa"
        }
      ],
      "updated": "2026-10-27"
    },
    {
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "id": "set_lancao",
      "name": "蓝·草 · 设定",
      "coverKey": "cover_lancoa",
      "intro": "《蓝·草》的设定集（占位简介，请在 content/settings 中替换正文并修改此处）。整体页面，不分章节。",
      "versions": [
        {
          "id": "old",
          "name": "旧版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_lancao/old.docx",
          "coverKey": "cover_lancoa"
        },
        {
          "id": "new",
          "name": "新版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_lancao/new.docx",
          "coverKey": "cover_yunhai"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "set_guaiwumaoxianzhe",
      "name": "怪物冒险者 · 设定",
      "coverKey": "cover_starry",
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "intro": "《怪物冒险者》的设定集（占位简介）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_guaiwumaoxianzhe/v1.docx"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "set_gaosuyinchang",
      "name": "高速吟唱魔法使 · 设定",
      "coverKey": "summer1",
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "intro": "《高速吟唱魔法使》的设定集（占位简介）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_gaosuyinchang/v1.docx"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "set_ailinditu",
      "name": "艾琳·麦克伦的地图 · 设定",
      "coverKey": "summer2",
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "intro": "《艾琳·麦克伦的地图》的设定集（占位简介）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_ailinditu/v1.docx"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "set_yongchibuxiu",
      "name": "勇捶不朽的魔法少女 · 设定",
      "coverKey": "summer3",
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "intro": "《勇捶不朽的魔法少女》的设定集（占位简介）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_yongchibuxiu/v1.docx"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "set_bulingduanpian",
      "name": "布灵的短篇故事集 · 设定",
      "coverKey": "summer4",
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "intro": "《布灵的短篇故事集》的设定集（占位简介）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_bulingduanpian/v1.docx"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "set_haitu",
      "name": "海兔岸上求生记 · 设定",
      "coverKey": "summer5",
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "intro": "《海兔岸上求生记》的设定集（占位简介）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_haitu/v1.docx"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "set_duocai",
      "name": "多彩世界的旅行 · 设定",
      "coverKey": "summer6",
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "intro": "《多彩世界的旅行》的设定集（占位简介）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_duocai/v1.docx"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "set_yulinling",
      "name": "雨·林灵 · 设定",
      "coverKey": "starry1",
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "intro": "《雨·林灵》的设定集（占位简介）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_yulinling/v1.docx"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "set_tuoluo",
      "name": "陀罗少女 · 设定",
      "coverKey": "starry2",
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "intro": "《陀罗少女》的设定集（占位简介）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_tuoluo/v1.docx"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "set_wanwu",
      "name": "万物娘化 · 设定",
      "coverKey": "starry3",
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "intro": "《万物娘化》的设定集（占位简介）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_wanwu/v1.docx"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "set_canger",
      "name": "苍耳饲养指南 · 设定",
      "coverKey": "starry4",
      "created": "（待补充）",
      "genre": "作品设定",
      "status": "（待补充）",
      "intro": "《苍耳饲养指南》的设定集（占位简介）。整体页面，不分章节。",
      "versions": [
        {
          "id": "v1",
          "name": "1.0版",
          "note": "占位设定文档，请替换",
          "file": "content/settings/set_canger/v1.docx"
        }
      ],
      "updated": "2026-10-30"
    }
  ],
  "galleries": [
    {
      "id": "gal_yinsaimena",
      "name": "因赛美那 · 画集",
      "coverKey": "cover_xingchen",
      "intro": "《因赛美那》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "neo-i1",
          "title": "因赛美那 neo版 图1",
          "imageKey": "summer6",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "neo-i2",
          "title": "因赛美那 neo版 图2",
          "imageKey": "starry1",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "neo-i3",
          "title": "因赛美那 neo版 图3",
          "imageKey": "starry2",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "neo-i4",
          "title": "因赛美那 neo版 图4",
          "imageKey": "starry3",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v2606-i1",
          "title": "因赛美那 2606版 图1",
          "imageKey": "cover_xingchen",
          "drawn": "2026-06",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v2606-i2",
          "title": "因赛美那 2606版 图2",
          "imageKey": "cover_yuting",
          "drawn": "2026-06",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v2606-i3",
          "title": "因赛美那 2606版 图3",
          "imageKey": "cover_zhiyuan",
          "drawn": "2026-06",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v2606-i4",
          "title": "因赛美那 2606版 图4",
          "imageKey": "summer1",
          "drawn": "2026-06",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v25-i1",
          "title": "因赛美那 25版 图1",
          "imageKey": "summer2",
          "drawn": "2025",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v25-i2",
          "title": "因赛美那 25版 图2",
          "imageKey": "summer3",
          "drawn": "2025",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v25-i3",
          "title": "因赛美那 25版 图3",
          "imageKey": "summer4",
          "drawn": "2025",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v25-i4",
          "title": "因赛美那 25版 图4",
          "imageKey": "summer5",
          "drawn": "2025",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v24-i1",
          "title": "因赛美那 24版 图1",
          "imageKey": "starry4",
          "drawn": "2024",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v24-i2",
          "title": "因赛美那 24版 图2",
          "imageKey": "starry5",
          "drawn": "2024",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v24-i3",
          "title": "因赛美那 24版 图3",
          "imageKey": "starry6",
          "drawn": "2024",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v24-i4",
          "title": "因赛美那 24版 图4",
          "imageKey": "cover_yunhai",
          "drawn": "2024",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v23-i1",
          "title": "因赛美那 23版 图1",
          "imageKey": "cover_tideng",
          "drawn": "2023",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v23-i2",
          "title": "因赛美那 23版 图2",
          "imageKey": "cover_summer",
          "drawn": "2023",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v23-i3",
          "title": "因赛美那 23版 图3",
          "imageKey": "cover_starry",
          "drawn": "2023",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v23-i4",
          "title": "因赛美那 23版 图4",
          "imageKey": "cover_yaoguijie",
          "drawn": "2023",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v15-i1",
          "title": "因赛美那 15版 图1",
          "imageKey": "cover_xianjing",
          "drawn": "2015",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v15-i2",
          "title": "因赛美那 15版 图2",
          "imageKey": "cover_tinilapu",
          "drawn": "2015",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v15-i3",
          "title": "因赛美那 15版 图3",
          "imageKey": "cover_lancoa",
          "drawn": "2015",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v15-i4",
          "title": "因赛美那 15版 图4",
          "imageKey": "cover_xingchen",
          "drawn": "2015",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-27"
    },
    {
      "id": "gal_yingzhidu",
      "name": "樱之都·奈樱 · 画集",
      "coverKey": "cover_yuting",
      "intro": "《樱之都·奈樱》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "loose-i1",
          "title": "樱之都·奈樱 散装版 图1",
          "imageKey": "cover_yuting",
          "drawn": "2026-11-02",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "loose-i2",
          "title": "樱之都·奈樱 散装版 图2",
          "imageKey": "cover_zhiyuan",
          "drawn": "2026-11-02",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "loose-i3",
          "title": "樱之都·奈樱 散装版 图3",
          "imageKey": "summer1",
          "drawn": "2026-11-02",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "loose-i4",
          "title": "樱之都·奈樱 散装版 图4",
          "imageKey": "summer2",
          "drawn": "2026-11-02",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v24-i1",
          "title": "樱之都·奈樱 24版 图1",
          "imageKey": "starry1",
          "drawn": "2024",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v24-i2",
          "title": "樱之都·奈樱 24版 图2",
          "imageKey": "starry2",
          "drawn": "2024",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v24-i3",
          "title": "樱之都·奈樱 24版 图3",
          "imageKey": "starry3",
          "drawn": "2024",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v24-i4",
          "title": "樱之都·奈樱 24版 图4",
          "imageKey": "starry4",
          "drawn": "2024",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v23-i1",
          "title": "yingzhidu 23版 图1",
          "imageKey": "cover_yunhai",
          "drawn": "2023",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v23-i2",
          "title": "yingzhidu 23版 图2",
          "imageKey": "cover_tideng",
          "drawn": "2023",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v23-i3",
          "title": "yingzhidu 23版 图3",
          "imageKey": "cover_summer",
          "drawn": "2023",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v23-i4",
          "title": "yingzhidu 23版 图4",
          "imageKey": "cover_starry",
          "drawn": "2023",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-11-02"
    },
    {
      "id": "gal_yaoguijie",
      "name": "妖鬼街 · 画集",
      "coverKey": "cover_yaoguijie",
      "intro": "《妖鬼街》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "v10-i1",
          "title": "妖鬼街 1.0版 图1",
          "imageKey": "cover_summer",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v10-i2",
          "title": "妖鬼街 1.0版 图2",
          "imageKey": "cover_starry",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v10-i3",
          "title": "妖鬼街 1.0版 图3",
          "imageKey": "cover_yaoguijie",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v10-i4",
          "title": "妖鬼街 1.0版 图4",
          "imageKey": "cover_xianjing",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-27"
    },
    {
      "id": "gal_xianjing",
      "name": "仙境 · 画集",
      "coverKey": "cover_xianjing",
      "intro": "《仙境》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "v23-i1",
          "title": "仙境 1.0版 图1",
          "imageKey": "cover_tinilapu",
          "drawn": "2023",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v23-i2",
          "title": "仙境 1.0版 图2",
          "imageKey": "cover_lancoa",
          "drawn": "2023",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v23-i3",
          "title": "仙境 1.0版 图3",
          "imageKey": "cover_xingchen",
          "drawn": "2023",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v23-i4",
          "title": "仙境 1.0版 图4",
          "imageKey": "cover_yuting",
          "drawn": "2023",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-11-01"
    },
    {
      "id": "gal_tinilapu",
      "name": "提奈拉普 · 画集",
      "coverKey": "cover_tinilapu",
      "intro": "《提奈拉普》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "event-i1",
          "title": "提奈拉普 活动版 图1",
          "imageKey": "cover_zhiyuan",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "event-i2",
          "title": "提奈拉普 活动版 图2",
          "imageKey": "summer1",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "event-i3",
          "title": "提奈拉普 活动版 图3",
          "imageKey": "summer2",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "event-i4",
          "title": "提奈拉普 活动版 图4",
          "imageKey": "summer3",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "solo-i1",
          "title": "提奈拉普 独立版 图1",
          "imageKey": "summer4",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "solo-i2",
          "title": "提奈拉普 独立版 图2",
          "imageKey": "summer5",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "solo-i3",
          "title": "提奈拉普 独立版 图3",
          "imageKey": "summer6",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "solo-i4",
          "title": "提奈拉普 独立版 图4",
          "imageKey": "starry1",
          "drawn": "2026-10-27",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-27"
    },
    {
      "id": "gal_lancao",
      "name": "蓝·草 · 画集",
      "coverKey": "cover_lancoa",
      "intro": "《蓝·草》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "old-i1",
          "title": "蓝·草 旧版 图1",
          "imageKey": "starry2",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "old-i2",
          "title": "蓝·草 旧版 图2",
          "imageKey": "starry3",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "old-i3",
          "title": "蓝·草 旧版 图3",
          "imageKey": "starry4",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "old-i4",
          "title": "蓝·草 旧版 图4",
          "imageKey": "starry5",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "new-i1",
          "title": "蓝·草 新版 图1",
          "imageKey": "starry6",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "new-i2",
          "title": "蓝·草 新版 图2",
          "imageKey": "cover_yunhai",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "new-i3",
          "title": "蓝·草 新版 图3",
          "imageKey": "cover_tideng",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "new-i4",
          "title": "蓝·草 新版 图4",
          "imageKey": "cover_summer",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "gal_guaiwumaoxianzhe",
      "name": "怪物冒险者 · 画集",
      "coverKey": "cover_starry",
      "intro": "《怪物冒险者》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "v1-i1",
          "title": "怪物冒险者 1.0版 图1",
          "imageKey": "summer1",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i2",
          "title": "怪物冒险者 1.0版 图2",
          "imageKey": "summer2",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i3",
          "title": "怪物冒险者 1.0版 图3",
          "imageKey": "summer3",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i4",
          "title": "怪物冒险者 1.0版 图4",
          "imageKey": "summer4",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "gal_gaosuyinchang",
      "name": "高速吟唱魔法使 · 画集",
      "coverKey": "summer1",
      "intro": "《高速吟唱魔法使》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "v1-i1",
          "title": "高速吟唱魔法使 1.0版 图1",
          "imageKey": "summer2",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i2",
          "title": "高速吟唱魔法使 1.0版 图2",
          "imageKey": "summer3",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i3",
          "title": "高速吟唱魔法使 1.0版 图3",
          "imageKey": "summer4",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i4",
          "title": "高速吟唱魔法使 1.0版 图4",
          "imageKey": "summer5",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "gal_ailinditu",
      "name": "艾琳·麦克伦的地图 · 画集",
      "coverKey": "summer2",
      "intro": "《艾琳·麦克伦的地图》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "v1-i1",
          "title": "艾琳·麦克伦的地图 1.0版 图1",
          "imageKey": "summer3",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i2",
          "title": "艾琳·麦克伦的地图 1.0版 图2",
          "imageKey": "summer4",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i3",
          "title": "艾琳·麦克伦的地图 1.0版 图3",
          "imageKey": "summer5",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i4",
          "title": "艾琳·麦克伦的地图 1.0版 图4",
          "imageKey": "summer6",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "gal_yongchibuxiu",
      "name": "勇捶不朽的魔法少女 · 画集",
      "coverKey": "summer3",
      "intro": "《勇捶不朽的魔法少女》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "v1-i1",
          "title": "勇捶不朽的魔法少女 1.0版 图1",
          "imageKey": "summer4",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i2",
          "title": "勇捶不朽的魔法少女 1.0版 图2",
          "imageKey": "summer5",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i3",
          "title": "勇捶不朽的魔法少女 1.0版 图3",
          "imageKey": "summer6",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i4",
          "title": "勇捶不朽的魔法少女 1.0版 图4",
          "imageKey": "starry1",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "gal_bulingduanpian",
      "name": "布灵的短篇故事集 · 画集",
      "coverKey": "summer4",
      "intro": "《布灵的短篇故事集》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "v1-i1",
          "title": "布灵的短篇故事集 1.0版 图1",
          "imageKey": "summer5",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i2",
          "title": "布灵的短篇故事集 1.0版 图2",
          "imageKey": "summer6",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i3",
          "title": "布灵的短篇故事集 1.0版 图3",
          "imageKey": "starry1",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i4",
          "title": "布灵的短篇故事集 1.0版 图4",
          "imageKey": "starry2",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "gal_haitu",
      "name": "海兔岸上求生记 · 画集",
      "coverKey": "summer5",
      "intro": "《海兔岸上求生记》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "v1-i1",
          "title": "海兔岸上求生记 1.0版 图1",
          "imageKey": "summer6",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i2",
          "title": "海兔岸上求生记 1.0版 图2",
          "imageKey": "starry1",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i3",
          "title": "海兔岸上求生记 1.0版 图3",
          "imageKey": "starry2",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i4",
          "title": "海兔岸上求生记 1.0版 图4",
          "imageKey": "starry3",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "gal_duocai",
      "name": "多彩世界的旅行 · 画集",
      "coverKey": "summer6",
      "intro": "《多彩世界的旅行》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "v1-i1",
          "title": "多彩世界的旅行 1.0版 图1",
          "imageKey": "starry1",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i2",
          "title": "多彩世界的旅行 1.0版 图2",
          "imageKey": "starry2",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i3",
          "title": "多彩世界的旅行 1.0版 图3",
          "imageKey": "starry3",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i4",
          "title": "多彩世界的旅行 1.0版 图4",
          "imageKey": "starry4",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "gal_yulinling",
      "name": "雨·林灵 · 画集",
      "coverKey": "starry1",
      "intro": "《雨·林灵》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "v1-i1",
          "title": "雨·林灵 1.0版 图1",
          "imageKey": "starry2",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i2",
          "title": "雨·林灵 1.0版 图2",
          "imageKey": "starry3",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i3",
          "title": "雨·林灵 1.0版 图3",
          "imageKey": "starry4",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i4",
          "title": "雨·林灵 1.0版 图4",
          "imageKey": "starry5",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "gal_tuoluo",
      "name": "陀罗少女 · 画集",
      "coverKey": "starry2",
      "intro": "《陀罗少女》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "v1-i1",
          "title": "陀罗少女 1.0版 图1",
          "imageKey": "starry3",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i2",
          "title": "陀罗少女 1.0版 图2",
          "imageKey": "starry4",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i3",
          "title": "陀罗少女 1.0版 图3",
          "imageKey": "starry5",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i4",
          "title": "陀罗少女 1.0版 图4",
          "imageKey": "starry6",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "gal_wanwu",
      "name": "万物娘化 · 画集",
      "coverKey": "starry3",
      "intro": "《万物娘化》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "v1-i1",
          "title": "万物娘化 1.0版 图1",
          "imageKey": "starry4",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i2",
          "title": "万物娘化 1.0版 图2",
          "imageKey": "starry5",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i3",
          "title": "万物娘化 1.0版 图3",
          "imageKey": "starry6",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i4",
          "title": "万物娘化 1.0版 图4",
          "imageKey": "cover_yaoguijie",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-30"
    },
    {
      "id": "gal_canger",
      "name": "苍耳饲养指南 · 画集",
      "coverKey": "starry4",
      "intro": "《苍耳饲养指南》的画集（占位简介，可替换）。缩略图点大图查看。",
      "created": "（待补充）",
      "genre": "作品图集",
      "status": "（待补充）",
      "images": [
        {
          "id": "v1-i1",
          "title": "苍耳饲养指南 1.0版 图1",
          "imageKey": "starry5",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i2",
          "title": "苍耳饲养指南 1.0版 图2",
          "imageKey": "starry6",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i3",
          "title": "苍耳饲养指南 1.0版 图3",
          "imageKey": "cover_yaoguijie",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        },
        {
          "id": "v1-i4",
          "title": "苍耳饲养指南 1.0版 图4",
          "imageKey": "cover_xianjing",
          "drawn": "2026-10-30",
          "tags": [],
          "note": "占位示例配图。点击缩略图可查看大图。"
        }
      ],
      "updated": "2026-10-30"
    }
  ],
  "about": {
    "title": "关于本站",
    "file": "content/about.docx"
  },
  "images": {
    "mascot": "images/mascot_act_idle.png",
    "act_idle": "images/mascot_act_idle.png",
    "act_write": "images/mascot_act_write.png",
    "act_paint": "images/mascot_act_paint.png",
    "act_drink": "images/mascot_act_drink.png",
    "act_letter": "images/mascot_act_letter.png",
    "act_sleep": "images/mascot_act_sleep.png",
    "cover_xingchen": "images/cover_xingchen.jpg",
    "cover_yuting": "images/cover_yuting.jpg",
    "cover_zhiyuan": "images/cover_zhiyuan.jpg",
    "cover_yunhai": "images/cover_yunhai.jpg",
    "cover_tideng": "images/cover_tideng.jpg",
    "cover_summer": "images/cover_summer.jpg",
    "cover_starry": "images/cover_starry.jpg",
    "summer1": "images/summer1.jpg",
    "summer2": "images/summer2.jpg",
    "summer3": "images/summer3.jpg",
    "summer4": "images/summer4.jpg",
    "summer5": "images/summer5.jpg",
    "summer6": "images/summer6.jpg",
    "starry1": "images/starry1.jpg",
    "starry2": "images/starry2.jpg",
    "starry3": "images/starry3.jpg",
    "starry4": "images/starry4.jpg",
    "starry5": "images/starry5.jpg",
    "starry6": "images/starry6.jpg",
    "cover_yaoguijie": "images/cover_yaoguijie.jpg",
    "cover_xianjing": "images/cover_xianjing.jpg",
    "cover_tinilapu": "images/cover_tinilapu.jpg",
    "cover_lancoa": "images/cover_lancoa.jpg",
    "ysmn2606_av1": "images/ysmn2606_av1.png",
    "ysmn2606_av2": "images/ysmn2606_av2.png",
    "ysmn2606_god": "images/ysmn2606_god.png",
    "ysmn2606_pd_jiling": "images/ysmn2606_pd_jiling.png",
    "ysmn2606_pd_guangxinche": "images/ysmn2606_pd_guangxinche.png",
    "ysmn2606_pd_jiayinzi": "images/ysmn2606_pd_jiayinzi.png",
    "ysmn2606_pd_chiji": "images/ysmn2606_pd_chiji.png",
    "ysmn2606_pd_hupo": "images/ysmn2606_pd_hupo.png",
    "ysmn2606_pd_buling": "images/ysmn2606_pd_buling.png",
    "ysmn2606_pd_bucheng": "images/ysmn2606_pd_bucheng.png",
    "ysmn2606_nations": "images/ysmn2606_nations.png"
  },
  "insp": [
    {
      "id": "scene",
      "title": "灵感示例 · 场景速记",
      "created": "2026年10月27日",
      "intro": "存放一闪而过的画面与气氛：时间、地点、一句话。本条为格式模板，可直接改写。",
      "file": "content/insp/scene.docx",
      "updated": "2026-10-27"
    },
    {
      "id": "fragment",
      "title": "灵感示例 · 设定碎片",
      "created": "2026年10月27日",
      "intro": "还没接进世界观的设定：规则、代价、能勾出的故事。本条为格式模板，可直接改写。",
      "file": "content/insp/fragment.docx",
      "updated": "2026-10-27"
    }
  ]
};
