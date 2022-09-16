import {Text, View} from 'react-native';
import React from 'react';

interface Props {
  name: string;
}

export const GiftsHeader = ({name}: Props) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
