import React from 'react';
import style from './style';
import PropTypes from 'prop-types';
import {Pressable, View, Text} from 'react-native';
const Category = props => {
  return (
    <View style={style.CategoryContainer}>
      <Pressable style={style.button} onPress={props.onPress}>
        <Text style={style.title}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default Category;
