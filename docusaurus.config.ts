import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ExpTech 技術文件',
  tagline: 'ExpTech 技術文件',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://exptech.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ExptechTW', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['en', 'zh-Hant', 'ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/exptechtw/docs/tree/main/',
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/exptechtw/docs/tree/main/',
          editLocalizedFiles: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ExpTech 技術文件',
      logo: {
        alt: 'ExpTech Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        {
          type: 'docSidebar',
          sidebarId: 'jsApiWrapperSidebar',
          position: 'left',
          label: 'API Wrapper',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cdpsSidebar',
          position: 'left',
          label: 'CDPS',
        },
        {
          href: 'https://github.com/exptechtw/docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '技術文件',
          items: [
            {
              label: 'API',
              to: '/docs/api/earthquake/report',
            },
            {
              label: 'API Wrapper',
              to: '/docs/js/installation',
            },
            {
              label: 'CDPS',
              to: '/docs/cdps/start/',
            },
          ],
        },
        {
          title: 'ExpTech Studio',
          items: [
            {
              label: '服務條款',
              href: 'https://exptech.com.tw/tos',
            },
            {
              label: '隱私權聲明',
              href: 'https://raw.githubusercontent.com/ExpTechTW/TREM/Release/terms/privacy_policy',
            },
          ],
        },
        {
          title: '社群連結',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@exptechtw',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/exptech.tw',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/exptech-studio',
            },
          ],
        },
        {
          title: '其他連結',
          items: [
            {
              label: '部落格',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ExpTechTW',
            },
            {
              label: 'Ko-fi',
              href: 'https://ko-fi.com/exptech',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ExpTech Studio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
