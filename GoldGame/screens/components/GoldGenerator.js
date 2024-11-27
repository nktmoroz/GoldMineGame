import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';

export default function GoldGenerator({isCollecting, maxGold, currentGold, setCurrentGold, miningRate}) {

    count = currentGold;
    useEffect(()=> {
        if(isCollecting & currentGold < maxGold){
            const timer = setInterval(() => {
                setCurrentGold(prev => prev + miningRate);
                count += miningRate;
                console.log('current gold:' + count)
                if(count >= maxGold){
                    clearInterval(timer)
                }
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [isCollecting]);

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text>Start</Text>
        </TouchableOpacity>
        <Text>Current Gold: {currentGold}/{maxGold}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {        
    justifyContent: 'center',
    alignItems: 'center'
  },
});