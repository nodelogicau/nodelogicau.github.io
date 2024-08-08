import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Node Logic",
  description: "Standards-based communication and collaboration",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Coucou', link: '/coucou' },
      { text: 'Coucal', link: '/coucal' },
    ],

//     sidebar: [
//       {
//         text: 'Examples',
//         items: [
//           { text: 'Markdown Examples', link: '/markdown-examples' },
//           { text: 'Runtime API Examples', link: '/api-examples' }
//         ]
//       }
//     ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nodelogicau' }
    ]
  }
})
