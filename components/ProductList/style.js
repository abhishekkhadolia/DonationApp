import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  image: {
    width: horizontalScale(135),
    height: verticalScale(150),
    borderRadius: 20,
  },
  Bladge: {
    position: 'absolute',
    top: verticalScale(12),
    left: horizontalScale(10),
    zIndex: 1,
  },
  TitleText: {
    marginTop: verticalScale(16),
  },
  AmountText: {
    marginTop: verticalScale(2),
  },
  container: {
    marginTop: verticalScale(10),
  },
});

export default style;
