import {useNavigation} from '@react-navigation/core';
import {RocketsContext} from 'components/contexts/rockets';
import styles from 'components/launches-list/styles';
import ListItem from 'components/_root/list-item';
import React, {useContext} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Text, Button, View} from 'react-native';
import Loading from 'components/loading';
import {SvgXml} from 'react-native-svg';
import {launch} from 'components/_icons/launch';
import root from 'utils/root-style';

export default function RocketsList() {
  const {rockets, loading, loadMore} = useContext(RocketsContext);

  if (rockets.length === 0 && loading) {
    return <Loading />;
  }
  const navigation = useNavigation();
  const rocketsList = rockets?.map((element: any, index: number) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate('Rocket Details', {id: element.id})}>
        <ListItem element={element} />
      </TouchableOpacity>
    );
  });
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      {rocketsList}
      {rockets.length !== 0 && loading && (
        <View style={root.loadingRoot}>
          <SvgXml xml={launch} width="30%" height="30%" />
        </View>
      )}
      {!loading && <Button title={'Load More'} onPress={loadMore} />}
    </ScrollView>
  );
}
