import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function Capacity({capacityCost, capacityUpgrade, maxGold}){


    return(
        <View style={styles.icon}>
          <Image source={require('../../icons/gold.png')} style={styles.iconImg}/>
            <Text style={styles.infoText}>Current Max Capacity: {maxGold}</Text>
            <TouchableOpacity style={styles.upgradeButton} onPress={capacityUpgrade}>
              <Text style={styles.buttonText}> Upgrade Capacity </Text>
            </TouchableOpacity>
              <Text style={styles.costText}>Cost: {capacityCost} </Text>
          </View>
    );
}

const styles = StyleSheet.create({
    icon: {
      alignItems: 'center',
      margin: 50,
      padding: 10,
    },
  
    upgradeButton: {
      borderWidth: 5,
      borderColor: 'black',
      borderRadius: 10,
      padding: 10,
      margin: 10,
      backgroundColor: 'black',
    },
    buttonText: {
      fontSize: 25,
      fontWeight: 'bold',
      justifyContent: 'center',
      color: 'white',
    },
  
    costText: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    iconImg: {
      maxWidth: 100,
      maxHeight: 100,
      padding: 10,
      alignSelf: 'center',
    },
    infoText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    }
  });