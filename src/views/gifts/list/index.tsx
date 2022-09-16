import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Svg, { Image } from "react-native-svg";
import React, { useEffect, useState } from "react";
import { styles } from "../../../styles";
import { GiftCard } from "../../../components/card";
import { AppModal } from "../../../components/modal";
import { useDispatch, useSelector } from "react-redux";
import { AddGiftButton } from "../../../components/add-gift-button";
import { AddListItem } from "../../../store/redux/actions/gifts";

export const GiftList = () => {
  const {height, width} = Dimensions.get('window');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [input, setInput] = useState<string>();
  const [currentGiftList, setCurrentGiftList] = useState<string[]>([]);
  const listData = useSelector(state => state.gifts.gifts);

  const dispatch = useDispatch();
  useEffect(()=>{{
    setCurrentGiftList(listData)
  }}, [currentGiftList])

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
        <AddGiftButton text={input} setValue={i=>setInput(i)} addToList={()=> {
          dispatch(AddListItem(input));
          setCurrentGiftList([])
        }}/>
        {currentGiftList?.map(item => {
          return <GiftCard updateList={()=>setCurrentGiftList([])} key={item} name={item} />;
        })}
      </ScrollView>
    </View>
  );
};
