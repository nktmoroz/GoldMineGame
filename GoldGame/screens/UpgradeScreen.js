import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function UpgradeScreen() {
  return (
    <View style={styles.container}>
      <Text>Upgrade Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                    
    justifyContent: 'center',   
    alignItems: 'center',       
  },
});