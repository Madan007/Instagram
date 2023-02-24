import {Pressable, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface IButton {
  text?: string;
  onPress?: () => void;
}

const defaultFunction = () => {};

const Button = (props: IButton) => {
  const {text = '', onPress = defaultFunction} = props;

  return (
    <Pressable onPress={() => onPress()} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
