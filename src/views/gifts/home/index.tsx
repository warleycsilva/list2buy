import {Dimensions, StyleSheet, View} from 'react-native';
import Svg, {Image} from 'react-native-svg';
import React from 'react';
import {styles} from '../../../styles';
import {GiftButton} from '../../../components/button';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const {height, width} = Dimensions.get('window');
  const navigation = useNavigation();
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
        <GiftButton
          name={'My List'}
          click={() => navigation.navigate('Gifts', {screen: 'GiftList'})}
        />
        <GiftButton
          name={'Catalog'}
          click={() => navigation.navigate('Gifts', {screen: 'Catalog'})}
        />
        <GiftButton
          name={'Find List'}
          click={() => navigation.navigate('Gifts', {screen: 'Search'})}
        />
        <GiftButton
          name={'About'}
          click={() => navigation.navigate('Onboarding', {screen: 'Introduction'})}
        />
      </View>
    </View>
  );
};
