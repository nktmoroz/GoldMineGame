import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import GoldDisplay from './components/GoldDisplay';

export default function GoldScreen() {
  return (
    <View style={styles.container}>
        <GoldDisplay/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {        
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe7c9',
    width: '100%'
  },
});