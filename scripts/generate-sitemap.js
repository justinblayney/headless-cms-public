const fs = require('fs');
const { resolve } = require('path');

// Wrap everything inside an async function to support dynamic imports
(async () => {
  // Dynamically import 'globby'
  const { globby } = await import('globby');

  // Define the URL of your website
  const SITE_URL = 'https://justinblayney.com';

  // Globby patterns to find pages
  const pages = await globby([
    'pages/**/*.js', // All JS files inside the pages folder
    '!pages/_*.js', // Exclude special Next.js files
    '!pages/api' // Exclude API route files
  ]);

  // Generate the sitemap XML structure
  const sitemap = `
    ${pages
      .map((page) => {
        const path = page
          .replace('pages', '')
          .replace('.js', '')
          .replace('/index', '');

        const route = path === '/index' ? '' : path;

        return `
          <url>
            <loc>${SITE_URL}${route}</loc>
          </url>
        `;
      })
      .join('')}
  `;

  // Final sitemap template
  const sitemapFinal = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemap}
    </urlset>`;

  // Write sitemap to the public directory
  fs.writeFileSync(resolve(__dirname, '../public/sitemap.xml'), sitemapFinal);
})();
