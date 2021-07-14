import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Launches from 'screens/launches';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName={'Launces List'}>
      <Stack.Screen name={'Launches List'} component={Launches} />
      {/* <Stack.Screen
        name={ScreensEnum.LocationDetails}
        component={LocationDetails}
      /> */}
    </Stack.Navigator>
  );
}
