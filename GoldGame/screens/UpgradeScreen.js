import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';

export default function UpgradeScreen({currentGold, setCurrentGold, maxGold, setMaxGold, miningRate, setMiningRate, isCollecting, setIsCollecting}) {

  const [capacityCost, setCapacityCost] = useState(10);
  const [rateCost, setRateCost] = useState(10);

  const capacityUpgrade = () => {
    if(currentGold >= capacityCost){
      setMaxGold (maxGold + 50)
      setCurrentGold(currentGold - capacityCost)
      setCapacityCost (Math.floor(capacityCost * 1.5))
      setIsCollecting(false)
    }
  }

  const rateUpgrade = () => {
    if(currentGold >= rateCost){
      setMiningRate (miningRate + 1)
      setCurrentGold(currentGold - rateCost)
      setRateCost (Math.floor(rateCost * 1.5))
      setIsCollecting(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your Upgrade</Text>
        <View style={styles.upgradeBoxes}>
          <View style={styles.icon}>
          <Image source={require('../icons/gold.png')} style={styles.iconImg}/>
            <TouchableOpacity style={styles.upgradeButton} onPress={capacityUpgrade}>
              <Text style={styles.buttonText}> Upgrade Capacity </Text>
            </TouchableOpacity>
              <Text style={styles.costText}>Cost: {capacityCost} </Text>
          </View>
          <View style={styles.icon}>
          <Image source={require('../icons/axe.png')} style={styles.iconImg}/>
            <TouchableOpacity style={styles.upgradeButton} onPress={rateUpgrade}>
              <Text style={styles.buttonText}> Upgrade Mining Rate </Text>
            </TouchableOpacity>
            <Text style={styles.costText}>Cost: {rateCost} </Text>
          </View>
        </View>
        <Text style={styles.count}>Current Gold: {currentGold}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                    
    justifyContent: 'center',   
    alignItems: 'center',     
    backgroundColor: '#D3D3D3',  
    width: '100%'
  },

  upgradeBoxes: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    border: 10,
  },

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
    margin: 20,
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
  title: {
    fontWeight: 'bold',
    fontSize: 50
  },
  count: {
    fontWeight: 'bold',
    fontSize: 25
  }
});