import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../styles';

interface Props {
  text?: string;
  setValue(v: string): void;
  addToList(): void;
}

export const AddGiftButton = ({text, setValue, addToList}: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  return (
    <>
      {!isEditing && (
        <TouchableOpacity
          onPress={() => {
            setIsEditing(!isEditing);
          }}>
          <View style={[styles.appButton]}>
            <Text style={[styles.appButtonText]}>{'New item'}</Text>
          </View>
        </TouchableOpacity>
      )}
      {isEditing && (
        <View style={[styles.row]}>
          <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={t => setValue(t)}
          />
          <TouchableOpacity
            style={[styles.addButton]}
            onPress={() => {
              if (!text) {
                Alert.alert('Alert', 'You need to write something.');
                return;
              }
              setIsEditing(!isEditing);
              setValue('');
              addToList();
            }}>
            <Text style={[styles.addButtonText]}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};
