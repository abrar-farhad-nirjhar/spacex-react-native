import {useRoute} from '@react-navigation/core';
import {MissionDetailsProvider} from 'components/contexts/mission-details';
import React from 'react';
import MissionDetailsComponent from 'components/mission-details';

export default function MissionDetails() {
  const route: any = useRoute();
  return (
    <MissionDetailsProvider id={route.params.id}>
      <MissionDetailsComponent />
    </MissionDetailsProvider>
  );
}
