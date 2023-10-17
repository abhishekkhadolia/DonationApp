import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const {StyleSheet} = require('react-native');
const {defaultFont, textWhite} = require('../../assets/helper');

const style = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: defaultFont,
    fontWeight: '500',
    color: textWhite,
  },
  CategoryContainer: {
    marginLeft: horizontalScale(10),
  },
  button: {
    backgroundColor: '#2979F2',
    borderRadius: 100,
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: horizontalScale(33),
    paddingVertical: verticalScale(17),
  },
});

export default style;
