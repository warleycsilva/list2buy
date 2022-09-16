import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Svg, {Image} from 'react-native-svg';
import React from 'react';
import {styles} from '../../../styles';
import {GiftButton} from '../../../components/gift-button';
import {useNavigation} from '@react-navigation/native';
import { OnboardingFinish } from "../finish";

export const OnboardingIntroduction = () => {
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
          <View style={[styles.introductionContainer]}>
            <Text style={[styles.introductionText]}>
              Hi! List2Buy is a app to make your wish list and keep it in your phone...</Text>
          </View>
        </Svg>
      </View>
      <View style={[styles.bottomContainer]}>
        <GiftButton
          name={'Next'}
          click={() => navigation.navigate('Onboarding', {screen: 'Finish'})}
        />
      </View>
    </View>
  );
};
