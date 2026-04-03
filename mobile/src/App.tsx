import React, { useEffect, useState } from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme, View, Text, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HomeScreen } from './screens/HomeScreen';
import { VideosScreen } from './screens/VideosScreen';
import { ShortsScreen } from './screens/ShortsScreen';
import { AccountScreen } from './screens/AccountScreen';
import { IntroScreen } from './screens/IntroScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();
  const [loading, setLoading] = useState(true);
  const [seenIntro, setSeenIntro] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('seen_intro').then((v) => {
      setSeenIntro(v === '1');
      setTimeout(() => setLoading(false), 1200);
    });
  }, []);

  if (loading) {
    return <View style={styles.splash}><Text style={styles.logo}>DDNewsUP</Text></View>;
  }

  if (!seenIntro) {
    return <IntroScreen onDone={() => AsyncStorage.setItem('seen_intro', '1').then(() => setSeenIntro(true))} />;
  }

  return (
    <PaperProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home 🏠" component={HomeScreen} />
          <Tab.Screen name="Videos ▶️" component={VideosScreen} />
          <Tab.Screen name="Shorts 🎬" component={ShortsScreen} />
          <Tab.Screen name="Account 👤" component={AccountScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  splash: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#111827' },
  logo: { color: 'white', fontWeight: '900', fontSize: 42 }
});
