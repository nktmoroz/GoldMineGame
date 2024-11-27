import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useEffect, useContext} from 'react';
import { Context } from '../../App';
import { PushNotificationIOS } from 'react-native';

export default function GoldGenerator() {

    const {gold, max, rate, collect} = useContext(Context)

  const [currentGold, setCurrentGold] = gold
  const [maxGold, setMaxGold] = max
  const [miningRate, setMiningRate] = rate
  const [isCollecting, setIsCollecting] = collect


    count = currentGold; //keeps track of current gold during useEffect
    useEffect(()=> {
        if(isCollecting & currentGold < maxGold){
            const timer = setInterval(() => {
                setCurrentGold(prev => prev + miningRate); //updates the current gold count based on the rate of mining
                count += miningRate;
                if(count + miningRate >= maxGold){ //stops interval if capacity is reached
                    setCurrentGold(maxGold) //failsafe to prevent acquiring more than maximum gold
                    clearInterval(timer)
                    setIsCollecting(false)
                }
            }, 500); //mines gold per half second
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