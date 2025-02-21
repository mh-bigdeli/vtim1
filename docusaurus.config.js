// @ts-check

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['fa', 'en'],
    localeConfigs: {
      fa: {
        label: 'فارسی',
        direction: 'rtl',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },
  title: 'VISION TRANSFORM IMMIGRATION',
  tagline: 'Transform The Way You Immigrate To Canada',
  url: 'https://www.vision-transform.com/',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'mh-bigdeli', // Usually your GitHub org/user name.
  projectName: 'vtim1', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    /*     announcementBar: {
      id: 'assembly',
      content:
        'Would you like to stake your tokens? <a target="_blank" href="https://assembly.sc">Read more</a> about Assembly, the upcoming permissionless Smart Contract network.',
      backgroundColor: '#da7ad7',
      textColor: '#000000',
      isCloseable: true,
    }, */
    image: 'img/iota-wiki.png',
    algolia: {
      appId: 'YTLE56KAO4',
      apiKey: '75358d60d302f7f93f630d63128abb03',
      indexName: 'iota',
      contextualSearch: true,
    },
    matomo: {
      matomoUrl: 'https://matomo.antonionardella.it/',
      siteId: '6',
    },
    /*  hotjar: {
      applicationId: '2809821',
    }, */
    imageZoom: {
      selector:
        '.markdown :not(a) > img:not(.image-gallery-image):not(.image-gallery-thumbnail-image)',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        background: 'rgba(0, 0, 0, 0.6)',
      },
    },
    imageSlider: {
      videoPlaceholder: '/img/infographics/video-placeholder.png',
    },
    prism: {
      additionalLanguages: ['java', 'rust', 'solidity', 'toml'],
    },
    cards: [
      {
        title: 'VTIMS',
        image: 'img/canada-1280.png',
        link: 'learn/an-introduction-to-vti',
        description: 'Learn about Vision Transform Immigration Consultancy.',
      },
      {
        title: 'Our Services',
        image: 'img/RCIC_EN_HORZ_CLR_POS_TM_resized-Cloth.png',
        link: 'participate/visa-services',
        description: 'Service excellence',
      },
      {
        title: 'Team',
        image: 'img/Team2.png',
        link: 'learn/vtims-team',
        description: 'A great team makes the whole difference!',
      },
    ],
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'IOTA Wiki Logo',
        src: 'img/logo-vtims.png',
        srcDark: 'img/logo-vtims.png',
      },
      items: [
        {
          label: 'About Us',
          to: 'learn/an-introduction-to-vti',
          activeBaseRegex: '^/learn/.*',
        },
        {
          label: 'Our Services',
          to: 'participate/visa-services',
          activeBaseRegex: '^/participate/.*',
        },
        {
          label: 'Contact Us',
          to: 'contact/contactus',
          activeBaseRegex: '^/contact/.*',
        },
        /* {
          label: 'Build',
          to: '#',
          layout: [
            '0 1 3 4',
            '0 1 3 4',
            '5 1 3 2',
            '5 1 3 2',
            '. 1 3 2',
            '. 1 3 2',
            '. 1 3 2',
          ],
          items_: [
            {
              label: 'Getting Started',
              items: [
                {
                  label: 'Getting Started',
                  sublabel: 'IOTA development basics',
                  to: 'build/welcome',
                  icon: '\ue902',
                  activeBaseRegex: '^/(build|blueprints)/.*',
                },
              ],
            },
            {
              label: 'Chrysalis (IOTA 1.5)',
              items: [
                {
                  label: 'Chrysalis Docs',
                  sublabel: 'Mainnet documentation',
                  to: 'chrysalis-docs/welcome',
                  icon: '\ue901',
                  activeBaseRegex: '^/chrysalis-docs.*',
                },
                {
                  label: 'Bee Node',
                  sublabel: 'IOTA node written in Rust',
                  to: 'bee/welcome',
                  icon: '\ue900',
                  activeBaseRegex: '^/bee/.*',
                },
                {
                  label: 'Hornet Node',
                  sublabel: 'IOTA node written in Go',
                  to: 'hornet/welcome',
                  icon: '\ue904',
                  activeBaseRegex: '^/hornet/.*',
                },
                {
                  label: 'Chronicle Permanode',
                  sublabel: 'IOTA permanode',
                  to: 'chronicle.rs/welcome',
                  icon: '\ue90c',
                  activeBaseRegex: '^/chronicle.rs/.*',
                },
              ],
            },
            {
              label: 'Coordicide (IOTA 2.0)',
              items: [
                {
                  label: 'Coordicide Specs',
                  sublabel: 'Decentralizing IOTA',
                  to: 'IOTA-2.0-Research-Specifications/Preface',
                  icon: '\ue906',
                  activeBaseRegex: 'IOTA-2.0-Research-Specifications/.*',
                },
                {
                  label: 'GoShimmer Node',
                  sublabel: 'IOTA 2.0 node',
                  to: 'goshimmer/welcome',
                  icon: '\ue903',
                  activeBaseRegex: '^/goshimmer/.*',
                },
              ],
            },
            {
              label: 'Libraries',
              items: [
                {
                  label: 'Client',
                  sublabel: 'Interact with the IOTA network',
                  to: 'iota.rs/welcome',
                  icon: '\ue907',
                  activeBaseRegex: '^/iota.rs/.*',
                },
                {
                  label: 'Wallet',
                  sublabel: 'Build IOTA wallets',
                  to: 'wallet.rs/welcome',
                  icon: '\ue90a',
                  activeBaseRegex: '^/wallet.rs/.*',
                },
                {
                  label: 'Stronghold',
                  sublabel: 'Handle secrets securely',
                  to: 'stronghold.rs/welcome',
                  icon: '\ue909',
                  activeBaseRegex: '^/stronghold.rs/.*',
                },
                {
                  label: 'Identity',
                  sublabel: 'Identity framework',
                  to: 'identity.rs/introduction',
                  icon: '\ue905',
                  activeBaseRegex: '^/identity.rs/.*',
                },
                {
                  label: 'Streams',
                  sublabel: 'Share data securely',
                  to: 'streams/welcome',
                  icon: '\ue908',
                  activeBaseRegex: '^/streams/.*',
                },
              ],
            },
            {
              label: 'Smart Contracts',
              items: [
                {
                  label: 'Wasp Node',
                  sublabel: 'Smart contract node',
                  to: 'smart-contracts/overview',
                  icon: '\ue90b',
                  activeBaseRegex: '^/smart-contracts/.*',
                },
              ],
            },
            {
              label: 'Integrations',
              items: [
                {
                  label: 'Streams and Identity',
                  sublabel: 'Integrate IOTA seamlessly',
                  to: 'integration-services/welcome',
                  icon: '\ue90d',
                  activeBaseRegex: '^/integration-services/.*',
                },
              ],
            },
          ],
        }, */
        { to: '/blog', label: 'Immigration News', position: 'right' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'About Us',
          items: [
            {
              label: 'About VTIMS',
              to: 'learn/an-introduction-to-vti',
            },
            {
              label: 'VTIMS Team',
              to: 'learn/vtims-team',
            },
            /* {
              label: 'Wallets',
              to: 'learn/wallets/what-is-a-wallet',
            },
            {
              label: 'Networks',
              to: 'learn/networks/iota-1.5-chrysalis',
            },
            {
              label: 'Glossary',
              to: 'learn/glossary',
            },
            {
              label: 'Research',
              to: 'learn/research/research-outline',
            },
            {
              label: 'Future of IOTA',
              to: 'learn/future/future-of-iota',
            }, */
          ],
        },
        {
          title: 'Our Services',
          items: [
            {
              label: 'Temporary Resident Visa',
              to: 'participate/visa-services',
            },
            {
              label: 'Immigration Services',
              to: 'participate/immigration-services',
            },
            {
              label: 'Settlement Services',
              href: 'participate/settlement-services',
            },
            /* {
              label: 'Funding',
              to: 'participate/funding/edf-funding',
            },
            {
              label: 'Use Cases',
              to: 'participate/use-cases/industry-applications',
            },
            {
              label: 'Frameworks',
              to: 'participate/frameworks/introduction',
            }, */
          ],
        },
        /*        {
          title: 'BUILD',
          items: [
            {
              label: 'Getting Started',
              to: 'build/welcome',
            },
            {
              label: 'Fundamentals',
              to: 'build/fundamentals/cryptography',
            },
            {
              label: 'Exchange Integration',
              to: 'build/exchange-integration/exchange-integration-guide',
            },
            {
              label: 'Tutorials',
              to: 'build/tutorials/twitch',
            },
          ],
        }, */
      ],
      logo: {
        alt: 'VTIMS Logo',
        src: 'img/logo-vtims.png',
        href: 'https://www.vision-transform.com/',
      },
      copyright: `© ${new Date().getFullYear()} VTIMS.`,
    },
    socials: [
      /* {
        url: 'https://www.youtube.com/c/iotafoundation',
        backgroundColor: 'var(--ifm-color-gray-900)',
      },
      {
        url: 'https://www.github.com/iotaledger/',
        backgroundColor: '#2C3850',
      }, */
      /* {
        url: 'https://discord.iota.org/',
        backgroundColor: '#4B576F',
      }, */
      /* {
        url: 'https://www.twitter.com/iota/',
        backgroundColor: '#6A768E',
      }, */
      /* {
        url: 'https://www.reddit.com/r/iota/',
        backgroundColor: '#7D89A1',
      }, */
      /*  {
        url: 'https://www.linkedin.com/company/iotafoundation/',
        backgroundColor: '#8995AD',
      },
      {
        url: 'https://www.instagram.com/iotafoundation/',
        backgroundColor: '#99A5BD',
      }, */
    ],
    colorMode: {
      defaultMode: 'dark',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: {
          showReadingTime: false,
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    'plugin-image-zoom',
    [
      '@jlvandenhout/docusaurus-plugin-docs-editor',
      {
        docs: {
          // The path to the docs section in your repository
          path: 'internal',
          // The username that owns the docs, defaults to siteConfig.organizationName
          owner: 'iota-community',
          // The repository that contains the docs, defaults to siteConfig.projectName
          repo: 'iota-wiki',
        },
        // GitHub OAuth Application settings
        github: {
          // REQUIRED - The Client ID you got from the GitHub OAuth App setup
          clientId: '30a8f5a21215004e81ca',
          // REQUIRED - The plugin will append the authorization code to this URL
          tokenUrl:
            'https://iota-wiki-github-oauth-login.iotaledger.workers.dev',
          // The request method to use (GET or POST), defaults to GET
          method: 'POST',
        },
      },
    ],
    'docusaurus-plugin-matomo',
    /* 'docusaurus-plugin-hotjar', */
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'internal/learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./internal/learn/sidebars.ts'),

        // General config
        // editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'participate',
        path: 'internal/participate',
        routeBasePath: 'participate',
        sidebarPath: require.resolve('./internal/participate/sidebars.ts'),

        // General config
        // editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contact',
        path: 'internal/contact',
        routeBasePath: 'contact',
        sidebarPath: require.resolve('./internal/contact/sidebars.ts'),

        // General config
        // editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ]
    /*    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'build',
        path: 'internal/build',
        routeBasePath: 'build',
        sidebarPath: require.resolve('./internal/build/sidebars.ts'),

        // General config
        // editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
 */
  ],
};
