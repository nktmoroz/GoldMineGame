import { View, Text, StyleSheet } from 'react-native';
import React, {useState} from 'react';


import GoldDisplay from './components/GoldDisplay';
import GoldGenerator from './components/GoldGenerator';

export default function GoldScreen({currentGold, setCurrentGold, miningRate}) {

    maxGold = 10;
  const [isCollecting, setIsCollecting] = useState(false);

  return (
    <View style={styles.container}>
        <GoldDisplay 
        isCollecting={isCollecting} 
        setIsCollecting={setIsCollecting}
        currentGold={currentGold}
        maxGold={maxGold}
        />
        <GoldGenerator
        currentGold={currentGold}
        maxGold={maxGold}
        isCollecting={isCollecting}
        setCurrentGold={setCurrentGold}
        miningRate={miningRate}
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