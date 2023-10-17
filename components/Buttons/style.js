const {StyleSheet} = require('react-native');
import {defaultFont} from '../../assets/helper';
const style = StyleSheet.create({
  button: {
    height: 55,
    width: 327,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2979F2',
    borderRadius: 50,
  },
  text: {
    color: 'white',
    fontFamily: defaultFont,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default style;
