import {Alert, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { styles } from "../../styles";
import Svg, { Image } from "react-native-svg";
import { useDispatch } from 'react-redux';
import { RemoveListItem } from '../../store/redux/actions/gifts';

interface Props {
  name: string;
  updateList(): void;
}

export const GiftCard = ({name,updateList}: Props) => {
  const imageSize = 30
  const dispatch = useDispatch()
  return (
    <TouchableOpacity style={[styles.giftCard]}
    onPress={()=>{
      Alert.alert("Delete item", "Are you sure?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Confirm",
            onPress: () => {
              dispatch(RemoveListItem(name));
              updateList()
            },
            style: "cancel",
          },
        ])
    }}>
      <Svg height={imageSize} width={imageSize}>
        <Image
          href={require('../../assets/gift_icon.png')}
          width={imageSize}
          height={imageSize}
          preserveAspectRatio={'xMidYMid slice'}
        />
      </Svg>
      <Text style={[styles.cardText]}>{name}</Text>
    </TouchableOpacity>
  );
};
