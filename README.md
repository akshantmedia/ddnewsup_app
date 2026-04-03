# DDNewsUP Mobile + Backend Platform

Production-ready starter implementation for a cross-platform DDNewsUP news app with scalable backend APIs and CMS endpoints.

## Included

- **React Native (Expo) mobile app** with:
  - Splash + 4-slide intro
  - Bottom tabs: Home, Videos, Shorts, Account
  - Live YouTube sticky section
  - Category horizontal list
  - Infinite news feed (RSS-backed)
  - Bookmarks (local persistence)
  - Dark/Light theme support
- **Node.js backend** with:
  - DDNewsUP RSS ingestion (`/api/posts`)
  - Categories + trending endpoints
  - Admin CMS APIs (`/api/admin/posts` CRUD)
  - SQLite persistence for admin-authored posts

## Structure

- `mobile/` – Expo React Native app
- `backend/` – Express API + admin endpoints

## Run locally

```bash
npm install
npm run start -w backend
npm run start -w mobile
```

## Environment Variables (Mobile)

Set in `mobile/.env`:

- `EXPO_PUBLIC_API_BASE_URL`
- `EXPO_PUBLIC_YT_LIVE_EMBED`
- `EXPO_PUBLIC_YT_CHANNEL_ID`
- `EXPO_PUBLIC_ADMOB_BANNER_ID`
- `EXPO_PUBLIC_FIREBASE_API_KEY`
- `EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `EXPO_PUBLIC_FIREBASE_PROJECT_ID`
- `EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `EXPO_PUBLIC_FIREBASE_MSG_SENDER_ID`
- `EXPO_PUBLIC_FIREBASE_APP_ID`

## Next Steps to ship to stores

1. Configure Firebase Auth (Email, Google, Phone OTP), Messaging, Remote Config.
2. Add AdMob ad unit IDs and placements in feed/article screens.
3. Wire `/api/videos` and `/api/shorts` to YouTube Data API scheduler.
4. Add paid subscriptions (Razorpay/Play Billing/App Store).
5. Generate signed **APK/AAB** and **IPA** with CI/CD.
