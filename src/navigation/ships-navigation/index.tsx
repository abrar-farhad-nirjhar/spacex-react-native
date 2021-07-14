import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ships from 'screens/ships';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName={'Ships List'}>
      <Stack.Screen name={'Ships List'} component={Ships} />
      {/* <Stack.Screen
        name={ScreensEnum.LocationDetails}
        component={LocationDetails}
      /> */}
    </Stack.Navigator>
  );
}
