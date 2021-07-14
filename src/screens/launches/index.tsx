import React from 'react';
import {LaunchesProvider} from 'components/contexts/launches';
import LaunchesList from 'components/launches-list';
export default function Launches() {
  return (
    <LaunchesProvider>
      <LaunchesList />
    </LaunchesProvider>
  );
}
