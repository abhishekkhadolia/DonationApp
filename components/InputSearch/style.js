const {StyleSheet} = require('react-native');
import {defaultFontThin} from '../../assets/helper';
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 327,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 15,
    paddingHorizontal: 24,
  },
  icon: {
    color: '#25C0FF',
    margin: 10,
  },
  input: {
    flex: 1,
    fontFamily: defaultFontThin,
    fontSize: 14,
    fontWeight: 400,
  },
});

export default style;
