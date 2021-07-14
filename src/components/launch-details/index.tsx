import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
interface Props {
  element?: any;
}

export default function LaunchDetails({element}: Props) {
  const {mission_name, details, launch_year, launch_site} = element;
  return (
    <View style={styles.container}>
      <Text style={styles.mission}>{element.mission_name}</Text>
      <Text style={styles.details}>{element.details}</Text>
      <Text style={styles.site}>Site: {element.launch_site?.site_name}</Text>
      <Text style={styles.year}>{element.launch_year}</Text>
    </View>
  );
}
