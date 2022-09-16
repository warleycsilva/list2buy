import {Alert, Modal, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {invertColor, randomColor} from '../../utils/color';
import { styles } from '../../styles';

interface Props {
}

export const AppModal = ({}: Props) => {
  return (
    <Modal
      style={[styles.appModal]}
      animationType="slide"
      visible
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <Text>Hello World</Text>
    </Modal>
  );
};
