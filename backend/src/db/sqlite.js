import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('./backend/data.sqlite');

export const initDb = () => {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      thumbnail TEXT,
      link TEXT,
      publishedAt TEXT,
      category TEXT,
      content TEXT
    )`);
  });
};
