
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: 'PUBG Mobile',
    seo: {
        title: '官网 | 下载、更新、攻略 - 官方正版入口',
        description: '欢迎访问PUBG Mobile中心，提供最新游戏下载、更新日志、游戏攻略和玩家社区，支持安卓与iOS系统，一站式掌握刺激战场动态。',
        keywords: ['PUBG Mobile', 'PUBG Mobile 官网', 'PUBG Mobile 下载', '吃鸡手游', '刺激战场', '地铁逃生', '和平精英国际服', 'PUBG Mobile 更新', 'PUBG Mobile 攻略', 'pubgm apk', 'pubgm 安卓下载', 'PUBG Mobile iOS下载'],
        ogImage: 'https://cdn.apks.cc/blinko/1753974441995-1753974441505-share.jpg',
    },
    analytics: {
        customBodyScript: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?b2e255a5512aa46a4f692adf9c8bfe00";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
        `,
        customHeadHtml: `
            <meta name="baidu-site-verification" content="codeva-9XyV2k6cAS" />
        `,
    },
    header: {
        logo: {
            url: 'https://cdn.apks.cc/blinko/1753973194134-1753973193794-nav_logo.png',
            alt: 'PUBG Mobile Logo',
        },
    },
    hero: {
        backgroundImage: 'https://cdn.apks.cc/blinko/1753975129551-1753975127906-downloadbj.png',
        title: '史诗级大逃杀巨作',
        description: '超多活动，等你游玩, 在PUBG MOBILE登上颠峰，尽情开火。 PUBG MOBILE是原创的大逃杀手机游戏，也是手机射击游戏巅峰之作。',
    },
    downloads: {
        googlePlay: {
            url: 'https://play.google.com/store/apps/details?id=com.tencent.ig',
            backgroundImage: 'https://cdn.apks.cc/blinko/1753972567787-1753972566208-google_apk_download.png',
            srText: '在 Google Play 下载',
        },
        appStore: {
            url: 'https://apps.apple.com/hk/app/pubg-mobile/id1330123889',  backgroundImage: 'https://cdn.apks.cc/blinko/1753972022261-1753972021905-app_store.png',
            srText: '在 App Store 下载',
        },
        apk: {
            backgroundImage: 'https://cdn.apks.cc/blinko/1753971933326-1753971932556-apk_download.png',
            line1: 'Android Download',
            line2: '安卓下载',
            dialog: {
                title: '选择下载渠道',
                description: '请选择您偏好的下载方式。',
                panUrl: 'https://www.123pan.com/s/4H3LVv-gUpI',
                officialUrl: 'https://f.gbcass.com/PUBGMOBILE_Global_3.9.0_uawebsite_livik01_9275A2699.apk',
            }
        },
    },
    video: {
        id: 'video',
        title: '地铁逃生4.0版本即将来袭！',
        url: 'https://cdn.apks.cc/blinko/%5Btwi%5D%40PUBG%20_twi.mp4',
        playerTitle: 'pubgm4.0版本',
        navLabel: '官方频道',
        enabled: true,
    },
    footer: {
        description: '推荐收藏，分享给您的好友吧！这里是您获取《PUBG Mobile》新闻、更新和社区信息的最终目的地。这是一个非官方的粉丝自制网站。',
        copyright: '© {year} PUBG Mobile. 保留所有权利. 游戏内容和材料均为其各自发行商及其许可人的商标和版权。',
        feedback: {
            email: 'apkscc-feedback@foxmail.com',
            buttonText: '反馈建议',
            dialogTitle: '提交您的反馈',
            dialogDescription: '我们非常重视您的意见，请填写以下信息。您的建议将帮助我们改进网站。',
        }
    },
    sections: [
        {
            id: 'community',
            title: '交流广场',
            navLabel: '社区',
            enabled: false,
            items: [],
        },
        {
            id: 'articles',
            title: '最新文章',
            navLabel: '资讯',
            items: [
                {
                    slug: 'pubgm-4.0-news-0826',
                    title: '《PUBG Mobile》4.0版本即将来袭！',
                    summary: '他是否很友善，還是只是有點淘氣？',
                    content: `## PUBG MOBILE 4.0 版本即將發布，您很快就能知道 Ghostie 是否是您的盟友。敬請期待更多詳情！`,
                    author: '猫咪蒲公英',
                    date: '2025年8月26日',
                    imageUrl: 'https://cdn.apks.cc/blinko/GzHoaW7XkAARM8F.jpg',
                    imageHint: 'phone sim card',
                  },
                {
                    slug: 'pubgm-login-solution-sim-card',
                    title: '《PUBG Mobile》登录失败/卡加载？新用户必读的“拔卡”终极解决方案',
                    summary: '遇到《PUBG Mobile》国际服登录不了、一直卡在加载画面的问题？这通常不是网络问题，而是区域限制所致。本文将详细教你如何通过最简单的“拔SIM卡”方法，顺利进入游戏，解决新玩家的燃眉之急。',
                    content: `## 为什么我的《PUBG Mobile》进不去？\n\n很多新玩家在首次安装并登录《PUBG Mobile》国际服时，会遇到一个令人困惑的问题：游戏一直卡在加载界面，或者提示“服务器没有响应”、“登录失败”。即使开了游戏加速器，问题依旧。\n\n其实，这大概率不是你的网络问题，而是游戏针对特定区域的网络限制策略。对于身处中国大陆地区的玩家，游戏客户端会检测你手机内的SIM卡信息，如果识别到是大陆地区的SIM卡，就会阻止你登录国际服。\n\n### “拔卡大法”：最简单有效的解决方案\n\n这个方法经过无数玩家验证，是目前解决新用户登录问题的最有效手段，操作步骤非常简单：\n\n1.  **彻底关闭游戏**：确保《PUBG Mobile》应用已从后台完全关闭。\n2.  **取出SIM卡**：打开你的手机卡槽，将中国大陆地区的SIM卡取出来。\n3.  **连接Wi-Fi**：确保你的手机连接在可用的Wi-Fi网络下。\n4.  **开启加速器**：打开你常用的游戏加速器，并选择《PUBG Mobile》国际服的合适节点（如亚服、日韩服）。\n5.  **重新启动游戏**：在无SIM卡、已连接Wi-Fi并开启加速器的状态下，重新打开游戏。\n\n此时，你应该能顺利通过加载界面，看到登录选项（如Twitter, Facebook, Google Play等）。\n\n> **重要提示**：成功登录并创建角色后，你就可以将SIM卡插回手机了。之后再玩游戏，就不再需要拔卡了，这个“拔卡”操作通常只需要在第一次登录时进行。\n\n这个小技巧虽然简单，但却能解决大部分新手的登录难题。如果你正被这个问题困扰，不妨立刻试试看！`,
                    author: '猫咪蒲公英',
                    date: '2025年8月20日',
                    imageUrl: 'https://cdn.apks.cc/blinko/kv3.jpg',
                    imageHint: 'phone sim card',
                  },
                  {
                    slug: 'pubgm-metro-royale-accelerator-recommendation',
                    title: '《PUBG Mobile》地铁逃生加速器哪个好？告别高延迟、掉线，稳定“摸金”必备利器',
                    summary: '玩《PUBG Mobile》地铁逃生模式，最怕的就是关键时刻网络延迟、掉线，导致“辛辛苦苦几十年，一朝回到解放前”。本文为你深度分析并推荐几款稳定高效的游戏加速器，助你获得流畅的网络体验，成为地铁里的常胜将军。',
                    content: `## 地铁逃生模式：网络稳定是第一生产力\n\n《PUBG Mobile》的“地铁逃生”（Metro Royale）模式以其高风险、高回报的紧张刺激玩法，吸引了大量玩家投身其中“摸金”。在这个模式里，一身价值不菲的六级甲、高级枪械和满满一背包的战利品，可能因为一次网络卡顿或掉线就付之东流。因此，一个稳定、低延迟的网络环境，其重要性甚至超过了枪法。\n\n### 为什么需要加速器？\n\n由于《PUBG Mobile》的服务器在海外，中国大陆玩家直连会面临物理距离远、网络波动大的问题，导致游戏内延迟（ping值）居高不下，容易出现人物瞬移、开门延迟、子弹“打不中人”甚至直接掉线的情况。\n\n游戏加速器通过在国内架设服务器，建立一条通往海外游戏服务器的专属“高速公路”，可以有效解决这些问题，显著降低延迟，防止掉线。\n\n### 如何选择合适的加速器？\n\n市面上的加速器琳琅满目，选择时可以关注以下几点：\n\n*   **专线节点**：是否提供《PUBG Mobile》的优化专线，特别是亚服、日韩等热门服务器节点。\n*   **稳定性**：加速效果是否稳定，会不会频繁断流。可以先通过试用或选择有口碑的老牌加速器。\n*   **延迟表现**：加速后的ping值能降低到多少。一般来说，绿色ping值（100ms以下）就能保证流畅游戏。\n*   **价格与服务**：月费、季费等价格是否合理，客服响应是否及时。\n\n### 几款主流加速器推荐（排名不分先后）\n\n1.  **UU加速器**：用户基数大，线路节点丰富，针对主流游戏的支持都比较好，是很多玩家的首选。\n2.  **迅游手游加速器**：老牌加速器厂商，技术积累雄厚，加速效果稳定，尤其在高峰时段表现依然坚挺。\n3.  **奇游加速器**：主打电竞级网络优化，延迟控制得不错，也提供了很多海外游戏的下载更新服务。\n\n> **小贴士**：没有一款加速器是“万能”的，因为每个人的本地网络环境（运营商、地区）都不同。强烈建议在付费前，先利用每个加速器提供的免费试用时间，亲自测试在你手机上的实际效果，选择体感最流畅的一款。\n\n选对加速器，你的“摸金”之路就成功了一半。祝你在地铁逃生模式中满载而归！`,
                    author: '网络优化师',
                    date: '2025年8月20日',
                    imageUrl: 'https://cdn.apks.cc/blinko/part4.jpg',
                    imageHint: 'network connection speed',
                  },
                  {
                    slug: 'apple-app-store-switch-region-guide',
                    title: '如何在iPhone/iPad上切换App Store到港澳台区，下载《PUBG Mobile》等海外游戏？',
                    summary: '想玩《PUBG Mobile》国际服，却发现在国区App Store里搜不到？别担心，这只是因为游戏没有在国区上架。本文将提供详细的图文教程，教你如何轻松将你的Apple ID切换到香港、澳门或台湾地区，顺利下载游戏。',
                    content: `## 前提准备：一个非国区的Apple ID\n\n首先，你需要一个非中国大陆地区的Apple ID。你可以自己注册，也可以通过一些渠道购买。注册时，地区选择香港、台湾或澳门均可。**请注意，切换地区可能会影响你已有的订阅服务，建议使用一个专门用于下载海外应用的“小号”ID。**\n\n### 切换App Store地区步骤\n\n1.  **退出当前国区账号**：\n    *   打开你的iPhone或iPad上的“App Store”。\n    *   点击右上角的头像图标。\n    *   滚动到页面最底部，点击“退出登录”。\n\n2.  **登录新的Apple ID**：\n    *   在同一个页面，输入你准备好的非国区Apple ID的账号和密码，点击“登录”。\n\n3.  **同意条款与补充信息**：\n    *   首次登录时，系统会弹出一个窗口，提示“此Apple ID尚未在iTunes Store使用过”，点击“检查”。\n    *   在接下来的页面，勾选“同意条款与条件”，然后点击“下一步”。\n    *   现在你需要填写付款信息。**关键步骤来了**：\n        *   **付款方式**：选择“无”或“None”。如果没有这个选项，说明你的账号存在未完成的订单或订阅，需要处理完才能切换。\n        *   **地址信息**：你需要填写真实的地址格式。可以通过地图软件或地址生成器获取一个对应区域（如香港）的地址、电话号码。例如，香港的电话号码是8位数。\n    *   填写完毕后，点击“下一步”。\n\n4.  **完成切换与下载**：\n    *   你会看到提示“Apple ID已完成”，点击“继续”。\n    *   此时，你的App Store就已经成功切换到你选择的区域了。商店的语言可能会变成繁体中文或英文。\n    *   现在，在搜索框中输入“PUBG Mobile”，你就能找到并下载官方正版的《PUBG Mobile》了。\n\n> **温馨提示**：下载完成后，你可以按照同样的路径，退出这个海外ID，重新登录回你自己的国区账号，这不会影响已经安装好的游戏正常使用和更新（更新时可能需要再次登录海外ID）。\n\n通过以上步骤，你就可以轻松绕开地区限制，畅玩包括《PUBG Mobile》在内的各种精彩游戏了。`,
                    author: '苹果达人',
                    date: '2025年8月20日',
                    imageUrl: 'https://cdn.apks.cc/blinko/part6.jpg',
                    imageHint: 'mobile app store',
                  },
            ]
        },
        {
            id: 'updates',
            title: '版本更新日志',
            navLabel: '更新日志',
            items: [
                {
                    slug: 'version-3-2-0',
                    version: '3.2.0',
                    title: '3.2版本：机甲聚变',
                    summary: '机甲聚变更新现已上线！驾驶巨型机甲，探索全新的钢铁方舟，并掌握全新的喷气背包机制。',
                    content: `## 3.2版本：机甲聚变更新\n\n3.2版本引入了激动人心的机甲聚变模式。玩家现在可以找到并驾驶强大的机甲，每种机甲都有独特的能力。\n\n- **行者号**：一种适合侦察的敏捷机甲。\n- **利维坦号**：一种重武装野兽，能够施展毁灭性的火力。\n\n全新的“钢铁方舟”据点已加入艾伦格。这座巨大的飞行堡垒是一个高风险、高回报的降落点，充满了顶级战利品。\n\n为了帮助穿越战场，所有玩家现在都配备了个人喷气背包，可以进行短暂的飞行，实现惊人的机动性。\n\n本次更新还包括各种生活质量改进、新的赛季通行证以及对几种突击步枪的重新平衡。`,
                    date: '2024年7月28日',
                    imageUrl: 'https://cdn.apks.cc/blinko/unnamed%20(5).webp',
                    imageHint: 'giant robot',
                },
                {
                    slug: 'version-3-1-0',
                    version: '3.1.0',
                    title: '3.1版本：天方夜谭',
                    summary: '通过天方夜谭更新，步入一个充满魔法和神秘的世界。发现全新的神灯岛，并驾驭飞毯。',
                    content: `## 3.1版本：天方夜谭更新\n\n天方夜谭更新为战场带来了一丝魔力。全新的神灯岛是一个充满活力、宝藏丰富的地点，拥有互动元素。敲响锣鼓召唤补给，或者寻找可以满足你获得强大战利品愿望的神灯精灵。\n\n**飞毯**是一种全新的双人载具，可以在地图上进行安静而迅速的移动，非常适合隐蔽的转移。\n\n此补丁还引入了全新的**AMR狙击步枪**，即使是3级头盔也能一枪击破，并修复了大量错误和进行了性能优化。`,
                    date: '2024年6月15日',
                    imageUrl: 'https://cdn.apks.cc/blinko/unnamed%20(6).webp',
                    imageHint: 'desert city',
                },
            ]
        }
    ]
};

export const getArticleBySlug = (slug: string) => {
    for (const section of siteConfig.sections) {
      if (!section.items) continue;
      const article = section.items.find((item: any) => item.slug === slug);
      if (article) {
        return article;
      }
    }
    return null;
  };
  
export interface Article {
    slug: string;
    title: string;
    summary: string;
    content: string;
    author?: string;
    date: string;
    imageUrl: string;
    imageHint: string;
    version?: string;
}

export interface Section {
    id: string;
    title: string;
    navLabel: string;
    enabled?: boolean;
    items: Article[];
}
  
export interface Update extends Article {}
  

    

    



    

    




    

    