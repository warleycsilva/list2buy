import {Text, View} from 'react-native';
import React from 'react';
import { styles } from "../../styles";

interface Props {
  name: string;
}

export const GiftList = ({name}: Props) => {
  return (
    <View style={[styles.giftCard]}>
      <Text>{name}</Text>
    </View>
  );
};
