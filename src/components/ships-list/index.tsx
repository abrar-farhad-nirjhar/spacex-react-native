import {ShipsContext} from 'components/contexts/ships';
import styles from 'components/launches-list/styles';
import ListImageItem from 'components/_root/list-image-item';
import React, {useContext} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

export default function ShipsList() {
  const {ships, loading} = useContext(ShipsContext);
  const shipsList = ships?.map((element: any, index: number) => {
    return <ListImageItem element={element} key={index} />;
  });
  return (
    <ScrollView contentContainerStyle={styles.scroll}>{shipsList}</ScrollView>
  );
}
