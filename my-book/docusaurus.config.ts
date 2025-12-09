import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A textbook for Physical AI & Humanoid Robotics',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  // Production URL and baseUrl for GitHub Project Pages (repo = "book")
  url: 'https://shaikhtayyaba97.github.io',
  baseUrl: '/book/',

  // GitHub pages config
  organizationName: 'Shaikhtayyaba97',
  projectName: 'book',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // serve docs at site root
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
            'https://github.com/Shaikhtayyaba97/book/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },

    navbar: {
      title: 'Physical AI Book',
      logo: { alt: 'Book Logo', src: 'img/logo.svg' },
      items: [
        { to: '/', label: 'Book', position: 'left' },
        {
          href: 'https://github.com/Shaikhtayyaba97/book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Book Home', to: '/' }],
        },
        {
          title: 'More',
          items: [{ label: 'GitHub', href: 'https://github.com/Shaikhtayyaba97/book' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shaikhtayyaba97.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
