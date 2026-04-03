import express from 'express';
import cors from 'cors';
import publicRoutes from './routes/public.js';
import adminRoutes from './routes/admin.js';
import { initDb } from './db/sqlite.js';

initDb();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));
app.use('/api', publicRoutes);
app.use('/api/admin', adminRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`DDNewsUP backend running on :${port}`);
});
