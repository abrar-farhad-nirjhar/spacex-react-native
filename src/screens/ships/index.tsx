import {ShipsProvider} from 'components/contexts/ships';
import React from 'react';
import {View, Text} from 'react-native';
import ShipsList from 'components/ships-list';
export default function Ships() {
  return (
    <ShipsProvider>
      <ShipsList />
    </ShipsProvider>
  );
}
