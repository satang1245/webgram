import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Webgram',
  description: '',
  icon: '/webgram-symbol-transfer.png',
  logo: {
    light: '/webgram-logo.jpg',
    dark: '/webgram-logo-dark.png'
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/satang1245/webgram' },
      { icon: 'twitter', mode: 'link', content: 'https://twitter.com/satang1245' }
    ],
    footer: {
      message: '© Webgram. All rights reserved.',
    }
  }
});