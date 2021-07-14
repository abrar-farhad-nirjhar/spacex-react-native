import {RocketProvider} from 'components/contexts/rockets';
import RocketsList from 'components/rocket-list';
import React from 'react';
import {View, Text} from 'react-native';
export default function Rockets() {
  return (
    <RocketProvider>
      <RocketsList />
    </RocketProvider>
  );
}
