import { Router } from 'express';
import { db } from '../db/sqlite.js';

const router = Router();

router.post('/posts', (req, res) => {
  const { id, title, description, thumbnail, link, publishedAt, category, content } = req.body;
  db.run(
    'INSERT OR REPLACE INTO posts (id, title, description, thumbnail, link, publishedAt, category, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [id, title, description, thumbnail, link, publishedAt, category, content],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      return res.json({ ok: true, pushNotificationTriggered: true });
    }
  );
});

router.get('/posts', (_req, res) => {
  db.all('SELECT * FROM posts ORDER BY publishedAt DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.json({ items: rows });
  });
});

router.delete('/posts/:id', (req, res) => {
  db.run('DELETE FROM posts WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.json({ ok: true });
  });
});

export default router;
