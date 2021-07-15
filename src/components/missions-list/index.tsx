import {useNavigation} from '@react-navigation/core';
import {MissionsContext} from 'components/contexts/missions';
import styles from 'components/launches-list/styles';
import Loading from 'components/loading';
import {launch} from 'components/_icons/launch';
import ListItem from 'components/_root/list-item';
import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';

export default function MissionsList() {
  const {missions, loading, loadMore} = useContext(MissionsContext);

  const navigation = useNavigation();

  if (missions.length === 0 && loading) {
    return <Loading />;
  }

  const missionList = missions?.map((element: any, index: number) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() =>
          navigation.navigate('Mission Details', {id: element.id})
        }>
        <ListItem element={element} />
      </TouchableOpacity>
    );
  });
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      {missionList}
      {missions.length !== 0 && loading && (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <SvgXml xml={launch} width="30%" height="30%" />
        </View>
      )}
      {!loading && <Button title={'Load More'} onPress={loadMore} />}
    </ScrollView>
  );
}
