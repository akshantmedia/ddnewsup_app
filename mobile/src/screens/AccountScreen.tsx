import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { auth } from '../services/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export const AccountScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('Use Firebase for OTP/Google/Email auth.');

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    setMessage('Logged in');
  };

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    setMessage('Signed up');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Account</Text>
      <TextInput mode="outlined" label="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput mode="outlined" label="Password" value={password} secureTextEntry onChangeText={setPassword} style={styles.input} />
      <Button mode="contained" onPress={() => login().catch((e) => setMessage(e.message))}>Login</Button>
      <Button mode="outlined" onPress={() => signup().catch((e) => setMessage(e.message))} style={styles.btn}>Signup</Button>
      <Button onPress={() => signOut(auth).then(() => setMessage('Logged out'))}>Logout</Button>
      <Text style={styles.msg}>{message}</Text>
      <Text style={styles.links}>Subscription • Terms • Privacy • Publish Post (Admin CMS)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 16, gap: 10 },
  title: { fontSize: 24, fontWeight: '700' },
  input: { marginBottom: 8 },
  btn: { marginTop: 4 },
  msg: { color: '#374151' },
  links: { color: '#2563eb', marginTop: 12 }
});
