import {ShipDetailsContext} from 'components/contexts/ship-details';
import styles from './styles';
import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ListImageItem from 'components/_root/list-image-item';
import ListItem from 'components/_root/list-item';
import Loading from 'components/loading';
export default function ShipDetails() {
  const {ship, loading} = useContext(ShipDetailsContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.header}>{ship?.name}</Text>
      {ship && <ListImageItem element={ship} />}
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Year Built : {ship?.year_built}
        </Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Attempted Landings : {ship?.attempted_landings}
        </Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Successful Landings : {ship?.successful_landings}
        </Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Status : {ship?.status}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Speed : {ship?.speed_kn}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>URL : {ship?.url}</Text>
      </View>

      <Text style={styles.header}>Missions List:</Text>

      <View>
        {ship?.missions.map((element: any, index: number) => (
          <ListItem key={index} element={element} />
        ))}
      </View>
    </ScrollView>
  );
}
