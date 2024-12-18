import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import { Context } from '../../App';

export default function GoldDisplay () {

  const {gold, max, rate, collect} = useContext(Context)

  const [currentGold, setCurrentGold] = gold
  const [maxGold, setMaxGold] = max
  const [isCollecting, setIsCollecting] = collect

  //changes isCollecting from true to false or vice versa
  const swap = () => {
    if(isCollecting){
      setIsCollecting(false)
    }else{
      setIsCollecting(true)
    }
  }

  //set text display based on whether or not gold is being collected
  let displayText = ''
  let buttonText = ''
  if(isCollecting){
    displayText = "We're Gonna Be Rich!"
    buttonText = 'Halt Mining'
  }else{
    displayText = "A Gold Deposit!"
    buttonText = 'Start Mining!'
  }

  return (
    <View style={styles.container}>
        <Text style={styles.displayText}>{displayText}</Text>
        <Image source={require('../../icons/ore.png')} style={styles.icon}/>
        <Text style={styles.displayText}>Current Gold: {currentGold}/{maxGold}</Text>
        <TouchableOpacity style={styles.button} onPress={()=> {swap()}}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',   
    alignItems: 'center',
  },
  icon: {
    maxWidth: 200,
    maxHeight: 200,
    padding: 10,
    alignSelf: 'center',
  },
    button: {
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: 'white',
  },
  displayText: {
    fontSize: 40,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
},
});