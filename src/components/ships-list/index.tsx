import {useNavigation} from '@react-navigation/core';
import {ShipsContext} from 'components/contexts/ships';
import styles from 'components/launches-list/styles';
import Loading from 'components/loading';
import {launch} from 'components/_icons/launch';
import ListImageItem from 'components/_root/list-image-item';
import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';

export default function ShipsList() {
  const {ships, loading, loadMore} = useContext(ShipsContext);
  const navigation = useNavigation();
  if (ships.length === 0 && loading) {
    return <Loading />;
  }
  const shipsList = ships?.map((element: any, index: number) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate('Ship Details', {id: element.id})}>
        <ListImageItem element={element} />
      </TouchableOpacity>
    );
  });
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      {shipsList}
      {ships.length !== 0 && loading && (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <SvgXml xml={launch} width="30%" height="30%" />
        </View>
      )}
      {!loading && <Button title={'Load More'} onPress={loadMore} />}
    </ScrollView>
  );
}
