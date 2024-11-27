import { View, Text, StyleSheet } from 'react-native';
import React, {useState} from 'react';


import GoldDisplay from './components/GoldDisplay';
import GoldGenerator from './components/GoldGenerator';

export default function GoldScreen({currentGold, maxGold}) {

  currentGold = 0;
  maxGold = 100;

  const [isCollecting = false, setIsCollecting] = useState();

  return (
    <View style={styles.container}>
        <GoldDisplay 
        isCollecting={isCollecting} 
        setIsCollecting={setIsCollecting}
        currentGold={currentGold}
        maxGold={maxGold}
        />
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