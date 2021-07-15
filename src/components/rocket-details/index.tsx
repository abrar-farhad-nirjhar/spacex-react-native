import styles from './styles';
import React, {useContext} from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import {RocketDetailsContext} from 'components/contexts/rocket-details';
import {wikipedia} from 'components/_icons/wikipedia';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import Loading from 'components/loading';
export default function RocketDetails() {
  const {rocket, loading} = useContext(RocketDetailsContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View>
        <Text style={styles.header}>{rocket?.name}</Text>
      </View>

      <View style={styles.description}>
        <Text style={styles.descriptionText}>{rocket?.description}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          First Flight: {rocket?.first_flight}
        </Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Country: {rocket?.country}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Company :{rocket?.company}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Success Rate : {rocket?.success_rate_pct}%
        </Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Type: {rocket?.type}</Text>
      </View>

      <Text style={styles.header}>Social:</Text>
      <TouchableOpacity onPress={() => Linking.openURL(rocket?.wikipedia)}>
        <SvgXml xml={wikipedia} height="50%" width="20%" />
      </TouchableOpacity>
    </ScrollView>
  );
}
