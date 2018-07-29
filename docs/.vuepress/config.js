module.exports = {
  title: 'ARC',
  themeConfig: {
    lastUpdated: true, // string | boolean
  },
  locales: {
    '/': {
      lang: 'en-US',
      description: "arkceajin's blog",
      categories: 'Categories',
      selectText: 'Languages',
      label: 'English',
      unclassified: 'Unclassified',
      algolia: {}
    },
    '/ja/': {
      lang: 'ja-JP',
      description: "arkceajin's blog",
      categories: 'カテゴリ',
      selectText: '言語',
      label: '日本語',
      unclassified: '未分類',
      algolia: {}
    },
    '/zh/': {
      lang: 'zh-CN',
      description: 'arkceajin\'s blog',
      categories: '文章分类',
      selectText: '选择语言',
      label: '简体中文',
      unclassified: '未分类',
      algolia: {}
    }
  }
}