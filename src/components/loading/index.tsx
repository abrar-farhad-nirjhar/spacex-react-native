import {launch} from 'components/_icons/launch';
import React from 'react';
import {View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import styles from './style';
export default function Loading() {
  return (
    <View style={styles.pageStyle}>
      <SvgXml xml={launch} height="50%" width="50%" />
      <Text></Text>
    </View>
  );
}
