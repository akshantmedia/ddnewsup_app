import axios from 'axios';
import { APP_CONFIG } from './config';
import { Category, NewsItem } from '../types';

const http = axios.create({ baseURL: APP_CONFIG.apiBaseUrl, timeout: 10000 });

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await http.get('/categories');
  return data.categories;
};

export const getNews = async (page: number, category?: string): Promise<{ items: NewsItem[]; hasMore: boolean }> => {
  const { data } = await http.get('/posts', { params: { page, category } });
  return { items: data.items, hasMore: data.hasMore };
};

export const getTrending = async (): Promise<NewsItem[]> => {
  const { data } = await http.get('/trending');
  return data.items;
};
