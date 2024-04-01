import {DefaultTheme} from 'vitepress';

const sec1 = {
    text: 'Quick Start',
    collapsible: false,
    items: [
        { text: 'GitMaya 介绍', link: '/guide/tutorial/intro' },
        { text: '快速部署', link: '/guide/tutorial/deploy' },
        { text: 'GitMaya 基础概念',link:'/guide/tutorial/basic'},
        { text: 'GitMaya 配置',link:'/guide/tutorial/config'},
    ],
};

const sec2 :DefaultTheme.SidebarGroup= {
    text:'飞书操作',
    collapsible: false,
    items:[
        { text: '在飞书群聊交互 Github',link:'/guide/feishu/operate'},
        { text: 'Issue 操作',link:'/guide/feishu/issue'},
        { text: 'Pr 操作',link:'/guide/feishu/pr'},
        { text: '未来计划',link:'/guide/feishu/future'},
    ]
}

// const sec3 :DefaultTheme.SidebarGroup= {
//     text:'顺便提提',
//     items:[
//         {text:'配合其他插件',link:'/guide/other/otherPlugin'},
//         {text:'结束语',link:'/guide/other/end'},
//         {text:'致谢',link:'/guide/other/thanks'},
//     ]
// }




export const sidebar: DefaultTheme.Sidebar = {
    '/guide/': [sec1, sec2

    ],
    '/en/guide/': [{
        text: 'Guide',
        items: [
            { text: 'Getting Started', link: '/en/guide/' },
            { text: 'Introduction', link: '/en/guide/introduce' },
            { text: 'Usage', link: '/en/guide/usage' }],
    }],
};
