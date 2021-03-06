import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Launches from 'screens/launches';
import ShipsStack from 'navigation/ships-navigation';
import MissionsStack from 'navigation/missions-navigation';
import RocketsStack from 'navigation/rockets-navigation';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Launches" component={Launches} />
        <Tab.Screen name="Missions" component={MissionsStack} />
        <Tab.Screen name="Rockets" component={RocketsStack} />
        <Tab.Screen name="Ships" component={ShipsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
