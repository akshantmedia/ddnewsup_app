import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const slides = [
  'Slide 1: App overview',
  'Slide 2: Categories & News',
  'Slide 3: Videos & Shorts',
  'Slide 4: Account & Features'
];

export const IntroScreen = ({ onDone }: { onDone: () => void }) => (
  <View style={styles.root}>
    <Text style={styles.logo}>DDNewsUP</Text>
    {slides.map((slide) => <Text key={slide} style={styles.slide}>• {slide}</Text>)}
    <Button title="Get Started" onPress={onDone} />
  </View>
);

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#111827' },
  logo: { color: 'white', fontSize: 32, fontWeight: '900', marginBottom: 18 },
  slide: { color: '#e5e7eb', marginBottom: 10, fontSize: 16 }
});
