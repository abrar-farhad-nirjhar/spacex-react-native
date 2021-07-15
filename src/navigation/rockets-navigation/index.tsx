import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Rockets from 'screens/rockets';
import RocketDetails from 'screens/rocket-details';
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName={'Rockets List'}>
      <Stack.Screen name={'Rockets List'} component={Rockets} />
      <Stack.Screen name={'Rocket Details'} component={RocketDetails} />
    </Stack.Navigator>
  );
}
