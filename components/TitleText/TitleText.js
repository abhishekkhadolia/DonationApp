import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
const TitleText = props => {
  return (
    <View>
      <Text
        style={[
          style.text,
          props.fontColor && {color: props.fontColor},
          props.titelFontSize && {fontSize: props.titelFontSize},
          props.fontWeight && {fontWeight: props.fontWeight},
        ]}>
        {props.title}
      </Text>
    </View>
  );
};

TitleText.propTypes = {
  title: PropTypes.string.isRequired,
  titelFontSize: PropTypes.number.isRequired,
  fontColor: PropTypes.string.isRequired,
  fontWeight: PropTypes.string.isRequired,
};

export default TitleText;
