import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const VideosScreen = () => (
  <View style={styles.root}><Text style={styles.text}>YouTube Full Videos auto-sync via backend endpoint /videos.</Text></View>
);

const styles = StyleSheet.create({ root: { flex: 1, alignItems: 'center', justifyContent: 'center' }, text: { padding: 20 } });
