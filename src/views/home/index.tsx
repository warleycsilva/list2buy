import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Svg, {Image} from 'react-native-svg';
import React from 'react';
import {styles} from '../../styles';
import {AppButton} from '../../components/button';

export const Home = () => {
  const {height, width} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height} width={width}>
          <Image
            href={require('./../../assets/lamp_bg.jpg')}
            width={width}
            height={height}
            preserveAspectRatio={'xMidYMid slice'}
          />
        </Svg>
      </View>
      <View style={styles.bottomContainer}>
        <AppButton name={'My List'} click={() => console.log('pressed')} />
        <AppButton name={'Catalog'} click={() => console.log('pressed')} />
        <AppButton name={'Scan a Product'} click={() => console.log('pressed')} />
      </View>
    </View>
  );
};
