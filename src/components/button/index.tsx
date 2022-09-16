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

export const AppButton = ({name, click}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.appButton]}
      onPress={() => {
        click();
      }}>
      <Text style={[styles.appButtonText]}>{name}</Text>
    </TouchableOpacity>
  );
};
