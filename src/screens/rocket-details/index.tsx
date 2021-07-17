import {useRoute} from '@react-navigation/native';
import {RocketDetailsProvider} from 'components/contexts/rocket-details';
import React from 'react';
import RocketDetailsComponent from 'components/rocket-details';
export default function RocketDetails() {
  const route: any = useRoute();
  return (
    <RocketDetailsProvider id={route.params.id}>
      <RocketDetailsComponent />
    </RocketDetailsProvider>
  );
}
