import {defaultFont, textColor1} from '../../assets/helper';

const {StyleSheet} = require('react-native');
const {verticalScale, horizontalScale} = require('../../assets/styles/scaling');

const style = StyleSheet.create({
  container: {
    marginTop: verticalScale(100),
    marginLeft: horizontalScale(25),
  },
  figerPrint: {
    fontSize: 200,
    color: '#2979F2',
  },
  InputPadding: {
    marginTop: verticalScale(24),
    marginLeft: horizontalScale(25),
  },
  CaptionText: {
    alignItems: 'center',
    marginTop: verticalScale(24),
  },
  button: {
    height: 55,
    width: 327,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2979F2',
    borderRadius: 50,
  },
  errorMessage: {
    color: 'red',
    marginHorizontal: horizontalScale(24),
    marginVertical: verticalScale(10),
    textTransform: 'capitalize',
  },
  successMessage: {
    color: 'green',
    marginHorizontal: horizontalScale(24),
    marginVertical: verticalScale(10),
    textTransform: 'capitalize',
  },
  text: {
    color: 'white',
    fontFamily: defaultFont,
    fontSize: 18,
    fontWeight: '500',
  },
  container1: {
    borderBottomWidth: 1,
    borderBottomColor: '#A7A7A7',
  },
  text1: {
    color: textColor1,
    fontFamily: defaultFont,
    fontWeight: '400',
  },
  input: {
    marginTop: 12,
    marginBottom: 12,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#2979F2',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    color: '#2979F2',
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#2979F2',
  },
});

export default style;
