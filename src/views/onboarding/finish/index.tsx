import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Svg, {Image} from 'react-native-svg';
import React from 'react';
import {styles} from '../../../styles';
import {GiftButton} from '../../../components/button';
import {useNavigation} from '@react-navigation/native';

export const OnboardingFinish = () => {
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
              You can use it for any event.</Text>
            <Text style={[styles.introductionText]}>
              So let's go! Click next to do your first list or find someone list.</Text>
          </View>
        </Svg>
      </View>
      <View style={[styles.bottomContainer]}>
        <GiftButton
          name={'Next'}
          click={() => navigation.navigate('Gifts', {screen: 'Home'})}
        />
      </View>
    </View>
  );
};
