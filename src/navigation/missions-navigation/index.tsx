import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Missions from 'screens/missions';
import MissionDetails from 'screens/mission-details';
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName={'Missions List'}>
      <Stack.Screen name={'Missions List'} component={Missions} />
      <Stack.Screen name={'Mission Details'} component={MissionDetails} />
    </Stack.Navigator>
  );
}
