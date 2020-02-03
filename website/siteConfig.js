/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "Verdoc",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: "/img/facebook_link_cover.png",
    infoLink: "https://verdoc.io/",
    pinned: true
  }
];

const siteConfig = {
  title: "Verdoc", // Title for your website.
  tagline: "Make your company paperless.",
  url: "https://docs.verdoc.io/", // Your website URL
  baseUrl: "/", // Base URL for your project */
  subscribeLanding: "https://verdoc.io/",
  existingLanding: "https://existing.co/",
  githubUrl: "https://github.com/verdoc-io/verdoc-documents",
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "Verdoc",
  organizationName: "TheExisting",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { href: "https://verdoc.io/", label: "Home" },
    { doc: "api_ref/registration_api/how_to_register", label: "Docs" },
    { href: "https://github.com/verdoc-io/verdoc-documents", label: "Github" },
    { search: true }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/logo_verdoc_white.svg",
  footerIcon: "img/logo_v_white.svg",
  footerTheExisting: "img/existing_white.svg",
  favicon: "img/favicon.ico",

  algolia: {
    apiKey: "cbf5678af4041a6947432610278f74d6",
    indexName: "verdoc_document",
    placeholder: "Ask me something..."

    // algoliaOptions: {
    //   facetFilters: ["language:LANGUAGE", "version:VERSION"]
    // }
  },
  /* Colors for website */
  colors: {
    primaryColor: "#5856d6",
    secondaryColor: "#7a78d4"
  },

  /* Custom fonts for website */

  fonts: {
    myFont: ["Courier", "Times New Roman", "Serif"],
    myOtherFont: ["-apple-system", "system-ui"]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `© ${new Date().getFullYear()} Verdoc. All Rights Reserved.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    // theme: "default",
    // theme: "atom-one-dark",
    // theme: "dracula",
    // theme: "solarized-dark",
    theme: "railscasts",
    version: "9.15.8"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://code.jquery.com/jquery-3.4.1.js",
    "/js/codeblock.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"
  ],

  // stylesheets: [
  //   "/css/custom.css",
  //   "/css/algolia.css",
  //   "/css/codeblock.css",
  //   "/css/footer.css",
  //   "/css/table.css"
  // ],
  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/facebook_link_cover.png",
  twitterImage: "img/facebook_link_cover.png",

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/facebook/test-site',
  docsSideNavCollapsible: false,
  scrollToTop: true,
  enableUpdateTime: true,
  enableUpdateBy: true,
  disableHeaderTitle: true
};

module.exports = siteConfig;
