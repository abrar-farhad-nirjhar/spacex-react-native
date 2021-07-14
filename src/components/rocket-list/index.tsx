import {RocketsContext} from 'components/contexts/rockets';
import styles from 'components/launches-list/styles';
import ListItem from 'components/_root/list-item';
import React, {useContext} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

export default function RocketsList() {
  const {rockets, loading} = useContext(RocketsContext);
  const rocketsList = rockets?.map((element: any, index: number) => {
    return <ListItem element={element} key={index} />;
  });
  return (
    <ScrollView contentContainerStyle={styles.scroll}>{rocketsList}</ScrollView>
  );
}
