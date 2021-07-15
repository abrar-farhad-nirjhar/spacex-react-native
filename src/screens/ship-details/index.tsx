import {useRoute} from '@react-navigation/native';
import {ShipDetailsProvider} from 'components/contexts/ship-details';
import React from 'react';
import ShipDetailsComponent from 'components/ship-details';
export default function ShipDetails() {
  const route: any = useRoute();

  return (
    <ShipDetailsProvider id={route.params.id}>
      <ShipDetailsComponent />
    </ShipDetailsProvider>
  );
}
