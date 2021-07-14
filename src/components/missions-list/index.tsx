import {MissionsContext} from 'components/contexts/missions';
import styles from 'components/launches-list/styles';
import ListItem from 'components/_root/list-item';
import React, {useContext} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

export default function MissionsList() {
  const {missions, loading} = useContext(MissionsContext);
  console.log(missions);
  const missionList = missions?.map((element: any, index: number) => {
    return <ListItem element={element} key={index} />;
  });
  return (
    <ScrollView contentContainerStyle={styles.scroll}>{missionList}</ScrollView>
  );
}
