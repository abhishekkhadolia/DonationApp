const {StyleSheet} = require('react-native');
const {verticalScale, horizontalScale} = require('../../assets/styles/scaling');

const style = StyleSheet.create({
  container: {
    marginTop: verticalScale(100),
    marginLeft: horizontalScale(25),
  },
  InputPadding: {
    marginTop: verticalScale(24),
    marginLeft: horizontalScale(25),
  },
  CaptionText: {
    alignItems: 'center',
    marginTop: verticalScale(24),
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
});

export default style;
