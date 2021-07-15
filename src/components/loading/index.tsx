import {launch} from 'components/_icons/launch';
import React from 'react';
import {View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';

export default function Loading() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <SvgXml xml={launch} height="50%" width="50%" />
      <Text></Text>
    </View>
  );
}
