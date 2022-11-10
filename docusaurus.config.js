// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

async function createConfig() {
  const gfm = (await import('remark-gfm')).default

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'Archmage',
    tagline: 'Take you into the Web3 world',
    url: 'https://archmage.live',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.svg',

    // GitHub pages deployment config.
    organizationName: 'archmage-live',
    projectName: 'archmage-portal',

    i18n: {
      defaultLocale: 'en',
      locales: ['en']
    },

    markdown: {
      mermaid: true
    },

    themes: ['@docusaurus/theme-mermaid'],

    plugins: ['docusaurus-plugin-sass'],

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.ts'),
            editUrl:
              'https://github.com/archmage-live/archmage-portal/tree/main/',
            remarkPlugins: [gfm]
          },
          blog: {
            showReadingTime: true,
            editUrl:
              'https://github.com/archmage-live/archmage-portal/tree/main/'
          },
          theme: {
            customCss: require.resolve('./src/css/custom.scss')
          }
        })
      ]
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          hideOnScroll: true,
          title: 'Archmage',
          logo: {
            alt: 'Archmage Logo',
            src: 'img/logo.svg'
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Docs'
            },
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'API'
            },
            {
              href: 'https://plugins.archmage.live',
              position: 'left',
              label: 'Plugins'
            },
            { to: '/blog', label: 'Blog', position: 'left' },
            {
              type: 'localeDropdown',
              position: 'right'
            },
            {
              href: 'https://github.com/archmage-live',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository'
            }
          ]
        },
        footer: {
          logo: {
            alt: 'Archmage Logo',
            src: 'img/logo.svg',
            href: 'https://archmage.live',
            width: 160
          },
          links: [
            {
              title: 'Learn More'
            },
            {
              title: 'Docs',
              items: [
                {
                  label: 'Tutorial',
                  to: '/docs/intro'
                }
              ]
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Stack Overflow',
                  href: 'https://stackoverflow.com/questions/tagged/docusaurus'
                },
                {
                  label: 'Discord',
                  href: 'https://discordapp.com/invite/docusaurus'
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/docusaurus'
                }
              ]
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog'
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/archmage-live'
                }
              ]
            }
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Archmage, Inc.`
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme
        },
        algolia: {
          appId: 'X1Z85QJPUV',
          apiKey: 'bf7211c161e8205da2f933a02534105a',
          indexName: 'archmage'
        },
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true
          }
        },
        mermaid: {
          theme: { light: 'neutral', dark: 'forest' }
        }
      })
  }

  return config
}

module.exports = createConfig
