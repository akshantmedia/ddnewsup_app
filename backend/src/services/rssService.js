import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: ['media:thumbnail', 'category']
  }
});

const RSS_URL = 'https://ddnewsup.in/feed/';

export const fetchRssItems = async () => {
  const feed = await parser.parseURL(RSS_URL);
  return (feed.items || []).map((item, idx) => ({
    id: item.guid || item.link || `rss-${idx}`,
    title: item.title || '',
    description: item.contentSnippet || '',
    thumbnail: item['media:thumbnail']?.$.url || 'https://placehold.co/600x400?text=DDNewsUP',
    link: item.link || '',
    publishedAt: item.pubDate || new Date().toISOString(),
    category: Array.isArray(item.category) ? item.category[0] : (item.category || 'General')
  }));
};
