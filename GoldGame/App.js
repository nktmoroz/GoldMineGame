import { StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import GoldScreen from './screens/GoldScreen';
import UpgradeScreen from './screens/UpgradeScreen';
import { View } from 'react-native-web';

const Tab = createBottomTabNavigator();

export default function App() {

  const [currentGold, setCurrentGold] = useState(0);
  const [maxGold, setMaxGold] = useState(100);
  const [miningRate, setMiningRate] = useState(1);
  const [isCollecting, setIsCollecting] = useState(false);


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Account') {
              iconName = 'person-circle-outline';
            } else if (route.name === 'Mining') {
              iconName = 'diamond-outline';
            } else if (route.name === 'Upgrade') {
              iconName = 'arrow-up-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Account" component={HomeScreen} />
        <Tab.Screen name="Mining" component={GoldScreen} options={{'currentGold': currentGold}}/>
        <Tab.Screen name="Upgrade" component={UpgradeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});