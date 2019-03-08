const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Learn the React Serverless Stack', // Navigation and Site Title
  siteTitleAlt: 'React Serverless', // Alternative Site title for SEO
  siteTitleShort: 'React Serverless', // short_name for manifest
  siteHeadline: 'Creating marvelous art & blazginly fast websites', // Headline for schema.org JSONLD
  siteUrl: '', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',
  author: 'nxsyed', // 

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@nxsyed', // Twitter Username
  ogSiteName: 'React Serverless', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.react,
  backgroundColor: tailwind.colors.blue,
}
