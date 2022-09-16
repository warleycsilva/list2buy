import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import Svg, {Image} from 'react-native-svg';
import React, {useState} from 'react';
import {styles} from '../../../styles';
import {GiftButton} from '../../../components/gift-button';
import {GiftCard} from '../../../components/card';
import {AppButton} from '../../../components/button';
import {AppModal} from '../../../components/modal';
import { useDispatch, useSelector } from "react-redux";
import {Gift} from '../../../models/gifts';
import { AddGiftButton } from "../../../components/add-gift-button";
import { AddListItem } from "../../../store/redux/actions/gifts";

export const GiftList = () => {
  const {height, width} = Dimensions.get('window');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [input, setInput] = useState<string>();
  const listData = useSelector(state => state.gifts.gifts);
  const dispatch = useDispatch();
  const currentGiftList: string[] = listData;

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height} width={width}>
          <Image
            href={require('../../../assets/lamp_bg.png')}
            width={width}
            height={height}
            preserveAspectRatio={'xMidYMid slice'}
          />
        </Svg>
      </View>
      <ScrollView style={[styles.listContainer]}>
        {modalVisible && <AppModal />}
        <AddGiftButton text={input} setValue={i=>setInput(i)} addToList={()=> dispatch(AddListItem(input))} />
        {currentGiftList?.map(item => {
          return <GiftCard key={item} name={item} />;
        })}
      </ScrollView>
    </View>
  );
};
