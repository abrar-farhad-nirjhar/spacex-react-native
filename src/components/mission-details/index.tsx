import {MissionDetailsContext} from 'components/contexts/mission-details';
import Loading from 'components/loading';
import {twitter} from 'components/_icons/twitter';
import {website} from 'components/_icons/website';
import {wikipedia} from 'components/_icons/wikipedia';
import React, {useContext} from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import styles from './styles';

export default function MissionDetails() {
  const {mission, loading} = useContext(MissionDetailsContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.header}>{mission?.name}</Text>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{mission?.description}</Text>
      </View>
      <Text style={styles.socialHeader}>Social:</Text>
      <View style={styles.social}>
        <TouchableOpacity
          style={{width: 33}}
          onPress={() => Linking.openURL(mission.twitter)}>
          <SvgXml xml={twitter} width="100%" height="100%" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: 33}}
          onPress={() => Linking.openURL(mission.wikipedia)}>
          <SvgXml xml={wikipedia} width="100%" height="100%" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: 33}}
          onPress={() => Linking.openURL(mission.website)}>
          <SvgXml xml={website} width="100%" height="100%" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
