import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Svg, {Image} from 'react-native-svg';
import React from 'react';
import {styles} from '../../../styles';
import {GiftButton} from '../../../components/gift-button';

export const Catalog = () => {
  const {height, width} = Dimensions.get('window');

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
      <View style={[styles.bottomContainer]}>
        <GiftButton name={'Catalog'} click={() => console.log('pressed')} />
      </View>
    </View>
  );
};
