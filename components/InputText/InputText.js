import React from 'react';
import {TextInput, Text, View} from 'react-native';
import style from './style';
import PropsTypes from 'prop-types';
const InputText = props => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{props.title}</Text>
      <TextInput
        secureTextEntry={props.secure}
        style={style.input}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};
InputText.propTypes = {
  title: PropsTypes.string.isRequired,
  secure: PropsTypes.bool.isRequired,
};

export default InputText;
