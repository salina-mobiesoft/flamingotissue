import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const pages = [
    '',
    '/about',
    '/wholesale',
    '/mgt',
    '/management',
    '/faqs',
    '/faq',
    '/products',
    '/contact-us',
    '/contact',
    '/specials',
    '/legal-agg',
    '/legal-agreement',
    '/delivery-info',
    '/delivery',
    '/priv-pol',
    '/privacy',
    '/terms-conditions',
    '/terms',
    '/returns',
    '/sitemap',
    '/gift-certificates',
    '/affiliates',
    '/account'
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>https://flamingotissue.com${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page === '' ? '1.0' : page === '/products' || page === '/wholesale' ? '0.9' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
