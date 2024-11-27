import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';

export default function GoldGenerator({currentGold, maxGold, isCollecting, setCurrentGold}) {

    useEffect(()=> {
        if(isCollecting){
            const timer = setInterval(() => {
                setCurrentGold(prev => prev + 1);
            }, 1000);
        }
    }, [seconds]);

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