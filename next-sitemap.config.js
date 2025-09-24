/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://maythematics.com', // replace with your actual domain
    generateRobotsTxt: true,            // generates robots.txt automatically
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/*'], // <-- excludes admin pages from sitemap
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', disallow: ['/admin'] }, // block /admin from crawlers
        ],
    },
};
