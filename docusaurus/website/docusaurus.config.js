/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const siteConfig = {
  title: 'Create Tezos Dapp',
  tagline: 'Set up a modern web app by running one command.',
  url: 'https://create-tezos-dapp.dev',
  baseUrl: '/',
  projectName: 'create-tezos-dapp',
  organizationName: 'facebook',
  favicon: 'img/favicon/favicon.png',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl:
            'https://github.com/waylad/create-tezos-dapp/edit/main/docusaurus/website',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/logo-og.png',
    announcementBar: {
      id: 'support_ukraine',
      content:
        'Support Ukraine 🇺🇦 <a target="_blank" rel="noopener noreferrer" \
        href="https://opensource.waylad.com/support-ukraine"> Help Provide Humanitarian Aid to Ukraine</a>.',
      backgroundColor: '#20232a',
      textColor: '#fff',
      isCloseable: false,
    },
    algolia: {
      appId: 'AUJYIQ70HN',
      apiKey: '25243dbf9049cf036e87f64b361bd2b9',
      indexName: 'create-tezos-dapp',
    },
    navbar: {
      title: 'Create Tezos Dapp',
      logo: {
        alt: 'Create Tezos Dapp Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'docs/getting-started', label: 'Docs', position: 'right' },
        {
          href: 'https://reactjs.org/community/support.html',
          label: 'Help',
          position: 'right',
        },
        {
          href: 'https://www.github.com/waylad/create-tezos-dapp',
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
              label: 'Get Started',
              to: 'docs/getting-started',
            },
            {
              label: 'Learn React',
              href: 'https://reactjs.org/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/create-tezos-dapp',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/waylad/create-tezos-dapp/discussions',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/reactjs',
            },
            {
              label: 'Contributor Covenant',
              href: 'https://www.contributor-covenant.org/version/1/4/code-of-conduct',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://www.github.com/waylad/create-tezos-dapp',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
    },
  },
};

module.exports = siteConfig;
