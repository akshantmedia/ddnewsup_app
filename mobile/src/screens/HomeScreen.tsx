import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { CategoryScroller } from '../components/CategoryScroller';
import { NewsCard } from '../components/NewsCard';
import { getCategories, getNews } from '../services/api';
import { APP_CONFIG } from '../services/config';
import { Category, NewsItem } from '../types';

export const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState<string | undefined>();
  const [refreshing, setRefreshing] = useState(false);

  const fetchPage = useCallback(async (nextPage: number, reset = false) => {
    const data = await getNews(nextPage, category);
    setItems((prev) => (reset ? data.items : [...prev, ...data.items]));
    setHasMore(data.hasMore);
    setPage(nextPage);
  }, [category]);

  useEffect(() => {
    getCategories().then(setCategories).catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    fetchPage(1, true).catch(() => undefined);
  }, [category, fetchPage]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchPage(1, true);
    setRefreshing(false);
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={items}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <>
          <View style={styles.liveWrap}>
            <Text style={styles.heading}>🔴 Live DDNewsUP</Text>
            <WebView source={{ uri: APP_CONFIG.youtubeLiveEmbed }} style={styles.livePlayer} />
          </View>
          <Text style={styles.heading}>Categories</Text>
          <CategoryScroller categories={categories} active={category} onSelect={setCategory} />
        </>
      }
      renderItem={({ item }) => <NewsCard item={item} />}
      onEndReached={() => hasMore && fetchPage(page + 1).catch(() => undefined)}
      onEndReachedThreshold={0.4}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  );
};

const styles = StyleSheet.create({
  container: { padding: 12, backgroundColor: '#f3f4f6' },
  liveWrap: { marginBottom: 14 },
  livePlayer: { height: 220, borderRadius: 12, overflow: 'hidden' },
  heading: { fontSize: 18, fontWeight: '800', marginBottom: 8, marginTop: 8 }
});
