import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { NewsItem } from '../types';
import { useBookmarks } from '../store/useBookmarks';

type Props = { item: NewsItem };

export const NewsCard = ({ item }: Props) => {
  const { ids, toggle } = useBookmarks();
  return (
    <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(item.link)}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumb} />
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{new Date(item.publishedAt).toLocaleString()}</Text>
        <Text style={styles.bookmark} onPress={() => toggle(item.id)}>{ids.includes(item.id) ? '★ Bookmarked' : '☆ Bookmark'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', borderRadius: 14, overflow: 'hidden', marginBottom: 12, elevation: 2 },
  thumb: { width: '100%', height: 180 },
  content: { padding: 12 },
  title: { fontSize: 16, fontWeight: '700' },
  description: { marginTop: 6, color: '#4b5563' },
  date: { marginTop: 8, fontSize: 12, color: '#6b7280' },
  bookmark: { marginTop: 8, color: '#2563eb', fontWeight: '600' }
});
