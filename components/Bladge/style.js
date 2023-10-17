import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const {StyleSheet} = require('react-native');
const {backgroudGreen, textWhite, defaultFont} = require('../../assets/helper');

const style = StyleSheet.create({
  container: {
    width: 84,
    height: 26,
    alignItems: 'center',
    backgroundColor: backgroudGreen,
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
    borderRadius: 20,
  },
  inputTitle: {
    fontSize: 10,
    fontWeight: '600',
    fontFamily: defaultFont,
    color: textWhite,
  },
});

export default style;
