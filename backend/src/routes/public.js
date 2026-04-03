import { Router } from 'express';
import { fetchRssItems } from '../services/rssService.js';

const router = Router();

router.get('/posts', async (req, res) => {
  const page = Number(req.query.page || 1);
  const limit = 10;
  const category = req.query.category;
  const all = await fetchRssItems();
  const filtered = category ? all.filter((i) => i.category === category) : all;
  const start = (page - 1) * limit;
  const items = filtered.slice(start, start + limit);
  res.json({ items, hasMore: start + limit < filtered.length });
});

router.get('/categories', async (_req, res) => {
  const all = await fetchRssItems();
  const uniq = [...new Set(all.map((i) => i.category).filter(Boolean))].slice(0, 20);
  const categories = uniq.map((name, i) => ({ id: name, name, image: `https://picsum.photos/seed/cat-${i}/80/80` }));
  res.json({ categories });
});

router.get('/trending', async (_req, res) => {
  const all = await fetchRssItems();
  res.json({ items: all.slice(0, 6) });
});

router.get('/videos', (_req, res) => res.json({ items: [], source: 'YouTube Data API sync placeholder' }));
router.get('/shorts', (_req, res) => res.json({ items: [], source: 'YouTube Shorts sync placeholder' }));

export default router;
