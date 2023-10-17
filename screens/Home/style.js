import {defaultFont} from '../../assets/helper';

const {StyleSheet} = require('react-native');
const {horizontalScale, verticalScale} = require('../../assets/styles/scaling');

const style = StyleSheet.create({
  profileImage: {
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: 100,
    marginRight: 24,
  },
  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  list: {
    marginVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  singleItem: {
    maxWidth: '45%',
  },
  ProfileName: {
    marginHorizontal: horizontalScale(24),
    marginTop: horizontalScale(5),
  },
  greetingText: {
    fontFamily: defaultFont,
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(24),
    color: '#636776',
    fontSize: 16,
    fontWeight: '600',
  },
  search: {
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(24),
  },
  highlightedImage: {
    width: horizontalScale(280),
    height: verticalScale(140),
    resizeMode: 'contain',
  },
  highlightedImageContainer: {
    marginTop: verticalScale(15),
    marginHorizontal: horizontalScale(24),
  },
  categoryTitle: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(15),
  },
  categoryContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(16),
  },
  productList: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default style;
