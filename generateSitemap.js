const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');
const { join } = require('path');

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://URL.com' });

  sitemap.write({ url: '/' });
  sitemap.write({ url: '/about' });
  sitemap.write({ url: '/gallery' });
  sitemap.write({ url: '/plan-your-visit' });
  sitemap.write({ url: '/privacy-policy' });
  sitemap.write({ url: '/support' });
  sitemap.write({ url: '/terms-conditions' });

  sitemap.end();

  const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);
  sitemap.pipe(writeStream);
}

generateSitemap();
