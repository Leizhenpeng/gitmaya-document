import {DefaultTheme} from 'vitepress';

const sec1 = {
    text: 'Quick Start',
    collapsible: false,
    items: [
        { text: '快速部署', link: '/guide/tutorial/deploy' },
        { text: 'GitMaya 基础概念',link:'/guide/tutorial/basic'},
        { text: '配置 GitMaya',link:'/guide/tutorial/config'},
    ],
};

const sec2 :DefaultTheme.SidebarGroup= {
    text:'飞书操作',
    collapsible: false,
    items:[
        { text: '在飞书上使用 GitMaya',link:'/guide/feishu/operate'},
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
    '/guide/': [sec1,sec2

    ],
    '/en/guide/': [{
        text: 'Guide',
        items: [
            { text: 'Getting Started', link: '/en/guide/' },
            { text: 'Introduction', link: '/en/guide/introduce' },
            { text: 'Usage', link: '/en/guide/usage' }],
    }],
};
