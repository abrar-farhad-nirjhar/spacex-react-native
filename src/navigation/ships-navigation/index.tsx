import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ships from 'screens/ships';
import ShipDetails from 'screens/ship-details';
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName={'Ships List'}>
      <Stack.Screen name={'Ships List'} component={Ships} />
      <Stack.Screen name={'Ship Details'} component={ShipDetails} />
    </Stack.Navigator>
  );
}
