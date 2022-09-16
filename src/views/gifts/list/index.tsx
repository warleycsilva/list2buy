import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import Svg, {Image} from 'react-native-svg';
import React, { useState } from 'react';
import {styles} from '../../../styles';
import {GiftButton} from '../../../components/gift-button';
import { GiftCard } from "../../../components/card";
import { AppButton } from '../../../components/button';
import { AppModal } from '../../../components/modal';

export const GiftList = () => {
  const {height, width} = Dimensions.get('window');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

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
        {modalVisible && <AppModal/>}
        <AppButton name={"+ New Item"} click={()=> setModalVisible(!modalVisible)} />
        <GiftCard name={"teste1"}/>
        <GiftCard name={"teste2"}/>
        <GiftCard name={"teste2"}/>
      </ScrollView>
    </View>
  );
};
