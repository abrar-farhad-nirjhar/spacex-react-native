import {LaunchesContext} from 'components/contexts/launches';
import React, {useContext} from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import styles from './styles';
import LaunchDetails from 'components/launch-details';
import Loading from 'components/loading';
import {SvgXml} from 'react-native-svg';
import {launch} from 'components/_icons/launch';
export default function LaunchesList() {
  const {launches, loading, loadMore} = useContext(LaunchesContext);
  const launchesList = launches?.map((element: any, index: number) => {
    return <LaunchDetails element={element} key={index} />;
  });
  if (launches.length === 0 && loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {launchesList}
        {launches.length !== 0 && loading && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <SvgXml xml={launch} width="30%" height="30%" />
          </View>
        )}
        {!loading && <Button title={'Load More'} onPress={loadMore} />}
      </ScrollView>
    </View>
  );
}
