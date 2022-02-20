import React from 'react';
import { StyleSheet, View } from 'react-native';
import Splash from './src/splash-screen';

export default function App() {
  return (
      <View style={styles.container}>
        <Splash/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
