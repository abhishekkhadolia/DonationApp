import React from 'react';
import {Text, View} from 'react-native';
import PropsTypes from 'prop-types';
import style from './style';
const Bladge = props => {
  return (
    <View style={style.container}>
      <Text style={style.inputTitle}>{props.title}</Text>
    </View>
  );
};

Bladge.propTypes = {
  title: PropsTypes.string.isRequired,
};
export default Bladge;
