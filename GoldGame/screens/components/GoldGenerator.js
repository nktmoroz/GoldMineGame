import { View, Text, StyleSheet } from 'react-native';
import React, {useState} from 'react';

export default function GoldGenerator({currentGold, maxGold}) {

  currentGold = 0;
  maxGold = 100;

  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {        
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});