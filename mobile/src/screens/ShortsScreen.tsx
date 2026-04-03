import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const ShortsScreen = () => (
  <View style={styles.root}><Text style={styles.text}>YouTube Shorts feed integration ready via /shorts API.</Text></View>
);

const styles = StyleSheet.create({ root: { flex: 1, alignItems: 'center', justifyContent: 'center' }, text: { padding: 20 } });
