import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Missions from 'screens/missions';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName={'Missions List'}>
      <Stack.Screen name={'Missions List'} component={Missions} />
      {/* <Stack.Screen
        name={ScreensEnum.LocationDetails}
        component={LocationDetails}
      /> */}
    </Stack.Navigator>
  );
}
