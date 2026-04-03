export const APP_CONFIG = {
  apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api',
  youtubeLiveEmbed: process.env.EXPO_PUBLIC_YT_LIVE_EMBED ?? 'https://www.youtube.com/embed/live_stream?channel=UC_x5XG1OV2P6uZZ5FSM9Ttw',
  youtubeChannelId: process.env.EXPO_PUBLIC_YT_CHANNEL_ID ?? '',
  admobBannerId: process.env.EXPO_PUBLIC_ADMOB_BANNER_ID ?? '',
  firebase: {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY ?? '',
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN ?? '',
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID ?? '',
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET ?? '',
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MSG_SENDER_ID ?? '',
    appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID ?? ''
  }
};
