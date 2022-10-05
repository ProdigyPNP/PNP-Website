// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ProdigyPNP',
  tagline: 'Hacking Prodigy, the math game.',
  url: 'https://prodigypnp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://github.com/prodigypnp.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ProdigyPNP', // Usually your GitHub org/user name.
  projectName: 'ProdigyMathGameHacking', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ProdigyPNP/ProdigyPNP.github.io/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ProdigyPNP/ProdigyPNP.github.io/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'prodigy hack, prodigy hacking, prodigypnp, pnp, p-np, prodigy, prodigy math, prodigy game, prodigy math game, pmgh, prodigy-hacking, phex, prodigyx, prodigyapi'}
      ],
      navbar: {
        title: 'ProdigyPNP',
        logo: {
          alt: 'Logo',
          src: 'https://github.com/prodigypnp.png',
        },
        items: [
          {
            to: '/docs/category/tutorials',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ProdigyPNP/ProdigyMathGameHacking',
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
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/orgs/ProdigyPNP/discussions',
              },
              {
                label: 'Discord',
                href: 'https://dsc.gg/ProdigyPNP',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ProdigyPNP',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ProdigyPNP',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ProdigyPNP.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};



module.exports = config;
