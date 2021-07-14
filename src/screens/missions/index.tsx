import {MissionsProvider} from 'components/contexts/missions';
import MissionsList from 'components/missions-list';
import React from 'react';
export default function Missions() {
  return (
    <MissionsProvider>
      <MissionsList />
    </MissionsProvider>
  );
}
