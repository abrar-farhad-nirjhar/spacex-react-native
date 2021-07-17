import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LaunchesStack from 'navigation/launches-navigation';
import ShipsStack from 'navigation/ships-navigation';
import MissionsStack from 'navigation/missions-navigation';
import RocketsStack from 'navigation/rockets-navigation';
import {SvgXml} from 'react-native-svg';
import {launch} from 'components/_icons/launch';
import {rocket} from 'components/_icons/rocket';
import {mission} from 'components/_icons/mission';
import {ship} from 'components/_icons/ship';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: () => {
              return <SvgXml xml={launch} height="50%" width="50%" />;
            },
          }}
          name="Launches"
          component={LaunchesStack}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => {
              return <SvgXml xml={mission} height="50%" width="50%" />;
            },
          }}
          name="Missions"
          component={MissionsStack}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => {
              return <SvgXml xml={rocket} height="50%" width="50%" />;
            },
          }}
          name="Rockets"
          component={RocketsStack}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => {
              return <SvgXml xml={ship} height="50%" width="50%" />;
            },
          }}
          name="Ships"
          component={ShipsStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
