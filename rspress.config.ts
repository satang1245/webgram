import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Webgram',
  description: 'learn blog',
  icon: '/webgram-symbol-transfer.png',
  logo: {
    light: '/webgram-logo.jpg',
    dark: 'webgram-logo-dark.png'
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/satang1245/webgram' },
    ],
    footer: {
      message: '© Webgram. All rights reserved.',
    },
  },
  sidebar: {
    'javascript': [
      {
        text: '자바스크립트란?',
        items: [
          {
            text: '자바스크립트 소개',
            link: '/javascript/introduction',
          },
          {
            text: 'Installation',
            link: '/guide/getting-started/installation',
          },
        ],
      },
      {
        text: 'Advanced',
        items: [
          // Fill in the link string directly
          '/guide/advanced/customization',
          '/guide/advanced/markdown',
        ],
      },
    ],
  },
});