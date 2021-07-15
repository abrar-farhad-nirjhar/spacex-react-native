import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
interface Props {
  element: any;
}

//DEV

export default function ListImageItem({element}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: element.image}} />
      </View>
      <Text style={styles.name}>{element.name}</Text>
    </View>
  );
}
