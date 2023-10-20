// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Spacehub туслах",
  tagline: "Spacehub аппын заавар",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://help.spacehub.mn",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "spacehub-mn", // Usually your GitHub org/user name.
  projectName: "app-support", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "mn",
    locales: ["mn"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.

        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "8DVP8D0IC2",
        indexName: "netlify_f748018c-10b7-485c-a27c-3fe997fb2032_main_all",
        apiKey: "154dfc27f26a114116e6c31d66b4218c",
        contextualSearch: false,
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        // title: 'My Site',
        logo: {
          alt: "Spacehub logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "dashboard/view-contract",
            position: "left",
            label: "ҮХХ эзэмшигч",
          },
          // {
          //   type: 'doc',
          //   docId: 'lessor/contract/view-contract-details',
          //   position: 'left',
          //   label: 'Түрээслүүлэгч',
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Цахим хаягууд",
            items: [
              {
                label: "Slack",
                href: "https://spacehub-cs.slack.com/",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/spacehub.mn",
              },
              {
                label: "Цахим хуудас",
                href: "https://spacehub.mn",
              },
            ],
          },
          {
            title: "Холбоо барих",
            items: [
              {
                label: "Цахим шуудан",
                href: "mailto:info@spacehub.mn",
              },
              {
                label: "Утас",
                href: "tel:+97677774242",
              },
            ],
          },
          {
            title: "Бусад",
            items: [
              {
                label: "Лого татах",
                href: "https://spacehub.mn/spacehub-assets.zip",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Спэйсхаб ХХК.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
