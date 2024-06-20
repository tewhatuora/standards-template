// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
module.exports = async function createConfig() {
  const { remarkKroki } = await import('remark-kroki');
  return {
    title: 'Health New Zealand | Te Whatu Ora Standards Template',
    favicon: '/standards-tmplate/imgfavicon-32x32.png',

    // Set the production url of your site here
    url: 'https://middlewarenewzealand.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/standards-template/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'tewhatuora', // Usually your GitHub org/user name.
    projectName: 'standards-template', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en-nz',
      locales: ['en-nz'],
    },
    presets: [
      [
        'redocusaurus',
        {
          specs: [
            {
              spec: 'docs/api-development/api-specifications/example-agency-spec.yaml',
              route: '/api-specifications/example-agency-specification',
            },
          ],
          theme: {
            primaryColor: '#1890ff',
          },
        },
      ],
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: '/',
            sidebarPath: require.resolve('./sidebars.js'),
            remarkPlugins: [
              [
                remarkKroki,
                {
                  alias: ['plantuml'],
                  server: 'https://kroki.io',
                }
              ]
            ],
            versions: {
              current: {
                label: 'Draft',
                path: 'draft',
              },
            },
          },
          theme: {
            customCss: [require.resolve('./src/css/custom.css'), require.resolve('@asyncapi/react-component/styles/default.min.css')],
          },
          gtag: {
            trackingID: 'G-KPWKEMHLL1',
            anonymizeIP: true,
          },
        }),
      ],
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
          respectPrefersColorScheme: true,
        },
        navbar: {
          title: 'Example Collateral Hosting',
          hideOnScroll: false,
          logo: {
            alt: 'Health New Zealand | Te Whatu Ora logo',
            src: '/standards-tmplate/imgtwo.svg',
            srcDark: '/standards-tmplate/imgtwo-dark-theme-logo.svg',
          },
          items: [
            {
              type: 'docsVersionDropdown',
              position: 'right',
            },
            {
              href: 'https://github.com/tewhatuora/standards-template/issues',
              label: 'Raise issue',
              position: 'right',
              target: '_blank',
              style: {'font-size': '0.9125rem'}
            }
          ]
        },
        footer: {
          links: [
            {
              title: 'About',
              items: [
                {
                  label: 'Accessibility',
                  href: 'https://www.tewhatuora.govt.nz/about-our-site/accessibility/',
                },
                {
                  label: 'Privacy & security',
                  href: 'https://www.tewhatuora.govt.nz/about-our-site/privacy-and-security/',
                },
                {
                  label: 'Example Contact',
                  href: '/contact',
                },
                {
                  label: 'Example Terms of use',
                  href: '/terms-of-use',
                },
                {
                  label: 'Legal and copyright',
                  href: 'https://www.tewhatuora.govt.nz/about-our-site/legal-and-copyright/',
                },
                {
                  html: `
                      </br>
                      <a href="https://www.govt.nz" target="_blank" rel="noreferrer noopener" aria-label="Hiso">
                        <img src="/standards-tmplate/imggovt-nz.png" alt="Te Kāwanatanga o Aotearoa — New Zealand Government" style="float:left;width:7.5rem;height:auto;" />
                      </a>
                    `,
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Raise issue',
                  href: 'https://github.com/tewhatuora/standards-template/issues',
                },
                {
                  label: 'Hira Marketplace',
                  href: 'https://marketplace.hira.health.nz',
                },
                {
                  label: 'Health New Zealand | Te Whatu Ora',
                  href: 'https://www.tewhatuora.govt.nz',
                },
                {
                  label: 'Contributors',
                  href: '/Examplecontributors'
                },
                {
                  html: `
                      </br>
                      </br>
                      <a href="https://www.tewhatuora.govt.nz/health-services-and-programmes/digital-health/data-and-digital-standards/approved-standards" target="_blank" rel="noreferrer noopener" aria-label="Hiso">
                        <img src="/standards-tmplate/imghiso-logo.png" alt="Hiso" style="width:300px;height:auto;" />
                      </a>
                    `,
                },
              ],
            },
          ],
        },
        prism: {
          theme: lightTheme,
          darkTheme: darkTheme,
          additionalLanguages: ['bash', 'diff', 'json'],
        },
      }),
      markdown: {
        mermaid: true,
      },
      themes: [
        '@docusaurus/theme-mermaid',
        [
          require.resolve('@easyops-cn/docusaurus-search-local'),
          /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
          ({
            hashed: true,
            indexBlog: false,
            docsRouteBasePath: '/',
          }),
        ],
      ],
  };
}
