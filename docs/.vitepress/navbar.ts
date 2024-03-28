import {DefaultTheme} from 'vitepress/types/default-theme';
const tutorial = [
    { text: '快速上手', link: '/guide/tutorial/deploy'},
    { text: 'GitMaya 基础概念', link: '/guide/tutorial/basic'},
    { text: '配置 GitMaya',link:'/guide/tutorial/config'},
];

const feishu = [
    { text: '在飞书上使用 GitMaya',link:'/guide/feishu/operate'},
];


export const navbar: DefaultTheme.NavItem[] = [
    { text: 'Quick Start', items: tutorial , activeMatch: '^/guide/tutorial',},
    {
        text: '详细文档',
       items: feishu,
        activeMatch: '^/guide/feishu',
    },
    // { text: '产品故事', link: 'https://support.qq.com/products/431975/team/' },
    // { text: '用户反馈', link: 'https://support.qq.com/product/431975' }
];

export const navbar_en: DefaultTheme.NavItem[] = [
    { text: 'Guide', link: '/en/guide/', activeMatch: '^/en/guide/' },
    { text: 'Product Story', link: 'https://support.qq.com/products/431975/team/' },
    { text: 'FeedBack', link: 'https://support.qq.com/product/431975' },
];

