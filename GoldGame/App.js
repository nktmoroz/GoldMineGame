import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import GoldScreen from './screens/GoldScreen';
import UpgradeScreen from './screens/UpgradeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <GoldScreen/>
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