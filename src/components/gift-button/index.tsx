import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../../styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {invertColor, randomColor} from '../../utils/color';

interface Props {
  name: string;

  click(): void;
}

export const GiftButton = ({name, click}: Props) => {
  const boxSize = Math.floor(Math.random() * (200 - 100 + 1) + 100);
  const stripesColor = randomColor();
  const boxColor = randomColor();
  const scaleAnimationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSequence(
          withTiming(1.2, {
            duration: 200,
          }),
          withTiming(1.4, {
            duration: 200,
          }),
          withTiming(1.2, {
            duration: 200,
          }),
          withTiming(1, {
            duration: 200,
          }),
        ),
      },
      {
        translateY: withSequence(
          withTiming(-Math.floor(Math.random() * (200 - 100 + 1) + 100), {
            duration: 300,
          }),
          withTiming(0, {
            duration: 300,
          }),
          withTiming(Math.floor(Math.random() * (-100 - 100 + 1) + 100), {
            duration: 300,
          }),
          withTiming(0, {
            duration: 300,
          }),
        ),
      },
      {
        translateX: withSequence(
          withTiming(Math.floor(Math.random() * (-110 - 50 + 1) + 50), {
            duration: 300,
          }),
          withTiming(0, {
            duration: 300,
          }),
          withTiming(Math.floor(Math.random() * (1 - 10 + 1) + 10), {
            duration: 300,
          }),
          withTiming(0, {
            duration: 300,
          }),
        ),
      },
      {
        rotate: withSequence(
          withTiming(`${Math.floor(Math.random() * (92) - 45)}deg`, {
            duration: 300,
          }),
        ),
      },
    ],
  }));
  return (
    <Animated.View style={[scaleAnimationStyle]}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            width: boxSize,
            height: boxSize,
            backgroundColor: boxColor,
          },
        ]}
        onPress={() => {
          click();
        }}>
        <View
          style={[styles.horizontalStrip, {backgroundColor: boxColor != stripesColor ? stripesColor : randomColor()}]}
        />
        <View style={[styles.verticalStrip, {backgroundColor:stripesColor}]}>
          <Text style={[styles.buttonText, {color: invertColor(stripesColor)}]}>{name}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
