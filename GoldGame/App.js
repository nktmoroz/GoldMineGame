import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import GoldScreen from './screens/GoldScreen';
import UpgradeScreen from './screens/UpgradeScreen';

const Tab = createBottomTabNavigator

export default function App() {

  const [currentGold, setCurrentGold] = useState(0);
  const [miningRate, setMiningRate] = useState(1);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Gold') {
              iconName = focused ? 'battery-full' : 'battery-full-outline';
            } else if (route.name === 'Upgrade') {
              iconName = focused ? 'wifi' : 'wifi-outline';
            }

            // Return the Ionicons component with the selected icon
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        {/* Define our screens */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Gold" component={GoldScreen} />
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