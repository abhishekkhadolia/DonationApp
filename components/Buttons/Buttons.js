import React from 'react';
import {Pressable, View, Text} from 'react-native';
import style from './style';
const Buttons = props => {
  return (
    <View>
      <Pressable style={style.button} onPress={props.onPress}>
        <Text style={style.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

export default Buttons;
