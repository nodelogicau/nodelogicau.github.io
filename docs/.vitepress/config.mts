import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Node Logic",
  description: "Open standards productivity tools",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Coucal Workspaces', link: '/coucal/workspaces' },
      { text: 'Coucal Workflows', link: '/coucal/workflows' },
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
