import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function GoldDisplay({currentGold, maxGold, isCollecting, setIsCollecting}) {

  const swap = () => {
    if(isCollecting){
      setIsCollecting(false)
    }else{
      setIsCollecting(true)
    }
  }

  let displayText = ''
  let buttonText = ''
  if(isCollecting){
    displayText = "You're Gonna be Rich!"
    buttonText = 'Halt Mining'
  }else{
    displayText = "You've Found Gold"
    buttonText = 'Start Mining!'
  }

  return (
    <View style={styles.container}>
        <Text style={styles.displayText}>{displayText}</Text>
        <img src={'./icons/ore.png'} style={styles.icon}/>
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
    maxWidth: 150,
    maxHeight: 150,
    padding: 10,
    alignSelf: 'center',
  },
    button: {
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
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