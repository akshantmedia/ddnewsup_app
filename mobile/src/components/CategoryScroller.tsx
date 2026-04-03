import React from 'react';
import { ScrollView, TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { Category } from '../types';

type Props = {
  categories: Category[];
  active?: string;
  onSelect: (id?: string) => void;
};

export const CategoryScroller = ({ categories, active, onSelect }: Props) => (
  <View style={styles.wrapper}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={[styles.card, !active && styles.active]} onPress={() => onSelect(undefined)}>
        <Text style={styles.label}>All</Text>
      </TouchableOpacity>
      {categories.map((c) => (
        <TouchableOpacity key={c.id} style={[styles.card, active === c.id && styles.active]} onPress={() => onSelect(c.id)}>
          <Image source={{ uri: c.image }} style={styles.image} />
          <Text style={styles.label}>{c.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  wrapper: { paddingVertical: 8 },
  card: { marginRight: 10, backgroundColor: '#e8ecff', borderRadius: 12, padding: 8, minWidth: 72, alignItems: 'center' },
  active: { backgroundColor: '#c7d2fe' },
  image: { width: 28, height: 28, borderRadius: 14, marginBottom: 4 },
  label: { fontSize: 12, fontWeight: '600' }
});
