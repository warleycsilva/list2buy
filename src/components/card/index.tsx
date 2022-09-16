import {Text, View} from 'react-native';
import React from 'react';
import { styles } from "../../styles";
import Svg, { Image } from "react-native-svg";

interface Props {
  name: string;
}

export const GiftCard = ({name}: Props) => {
  const imageSize = 30
  return (
    <View style={[styles.giftCard]}>
      <Svg height={imageSize} width={imageSize}>
        <Image
          href={require('../../assets/gift_icon.png')}
          width={imageSize}
          height={imageSize}
          preserveAspectRatio={'xMidYMid slice'}
        />
      </Svg>
      <Text style={[styles.cardText]}>{name}</Text>
    </View>
  );
};
