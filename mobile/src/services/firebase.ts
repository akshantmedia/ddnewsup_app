import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { APP_CONFIG } from './config';

const app = getApps().length ? getApps()[0] : initializeApp(APP_CONFIG.firebase);
export const auth = getAuth(app);
