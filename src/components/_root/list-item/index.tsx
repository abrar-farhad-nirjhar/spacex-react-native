import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
interface Props {
  element: any;
}

export default function ListItem({element}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{element.name}</Text>
      <Text>Code Name : {element.id}</Text>
    </View>
  );
}
