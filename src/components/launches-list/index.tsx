import {LaunchesContext} from 'components/contexts/launches';
import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import LaunchDetails from 'components/launch-details';
export default function LaunchesList() {
  const {launches, loading} = useContext(LaunchesContext);
  const launchesList = launches?.map((element: any, index: number) => {
    return <LaunchDetails element={element} key={index} />;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Launches List</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        {launchesList}
      </ScrollView>
    </View>
  );
}
