import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';

export default function GoldGenerator({isCollecting, setIsCollecting, maxGold, currentGold, setCurrentGold, miningRate, miningSpeed}) {

    count = currentGold; //keeps track of current gold during useEffect
    useEffect(()=> {
        if(isCollecting & currentGold < maxGold){
            const timer = setInterval(() => {
                setCurrentGold(prev => prev + miningRate); //updates the current gold count based on the rate of mining
                count += miningRate;
                if(count >= maxGold){ //stops interval if capacity is reached
                    clearInterval(timer)
                    setIsCollecting(false)
                }
            }, 500); //mines gold per second
            return () => clearInterval(timer);
        }
    }, [isCollecting]);//starts whenever isCollecting is updated

  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {        
    justifyContent: 'center',
    alignItems: 'center'
  },
});