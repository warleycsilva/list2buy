import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../../styles";

interface Props {
  name: string;

  click(): void;
}

export const AppButton = ({ name, click }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => click()}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};
