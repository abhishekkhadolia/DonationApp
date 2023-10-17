const {StyleSheet} = require('react-native');
import {defaultFont, textColor1} from '../../assets/helper';
const style = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#A7A7A7',
  },
  text: {
    color: textColor1,
    fontFamily: defaultFont,
    fontWeight: '400',
  },
  input: {
    marginTop: 12,
    marginBottom: 12,
  },
});

export default style;
