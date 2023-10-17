import React from 'react';
import {View, Image} from 'react-native';
import Bladge from '../Bladge/Bladge';
import PropTypes from 'prop-types';
import style from './style';
import TitleText from '../TitleText/TitleText';
const ProductList = props => {
  return (
    <View style={style.container}>
      <View>
        <View style={style.Bladge}>
          <Bladge title={props.title} />
        </View>
        <Image
          style={style.image}
          source={{
            uri: props.url,
          }}
        />
      </View>
      <View style={style.TitleText}>
        <TitleText
          titelFontSize={16}
          fontColor="#0A043C"
          fontWeight="600"
          title={props.name}
        />
      </View>
      <View style={style.AmountText}>
        <TitleText
          titelFontSize={16}
          fontColor="#156CF7"
          fontWeight="600"
          title={'$' + props.amount}
        />
      </View>
    </View>
  );
};

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProductList;
