import { StyleSheet} from 'react-native';
import React, {useState, useContext} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import GoldScreen from './screens/GoldScreen';
import UpgradeScreen from './screens/UpgradeScreen';
import Notification from './screens/components/notification';

const Tab = createBottomTabNavigator();
export const Context = React.createContext();

export default function App() {

  const [currentGold, setCurrentGold] = useState(0); //gold earned
  const [maxGold, setMaxGold] = useState(100); //maximum gold held
  const [miningRate, setMiningRate] = useState(1); //how much gold is mined per tick
  const [isCollecting, setIsCollecting] = useState(false); //is gold being mined or not


  return (
    <Context.Provider value={{gold: [currentGold,setCurrentGold], max: [maxGold,setMaxGold], rate: [miningRate,setMiningRate], collect:[isCollecting,setIsCollecting]}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => { //set icon for navigation bar
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
          {/*Setup screens */}
          <Tab.Screen name="Account" component={HomeScreen} />
          <Tab.Screen name="Mining" component={GoldScreen}/>
          <Tab.Screen name="Upgrade" component={UpgradeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
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