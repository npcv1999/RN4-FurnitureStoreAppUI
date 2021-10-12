import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: SIZES.base * 2,
    marginHorizontal: SIZES.padding,
  },
  viewTag: {
    position: 'absolute',
    top: '43%',
    left: '15%',
    right: '15%',

    flexDirection: 'row',
    alignItems: 'center',
  },
  dotTag: {
    backgroundColor: COLORS.transparentLightGray1,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotIn: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.blue,
  },
  tagInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: SIZES.padding,
    padding: SIZES.radius * 1.5,
    backgroundColor: COLORS.transparentLightGray1,
    borderRadius: 10,
  },
  furnitureTitle: {
    position: 'absolute',
    bottom: '15%',
    paddingHorizontal: SIZES.padding,
  },
  labelFur: {
    ...FONTS.h2,
    color: COLORS.lightGray2,
    marginBottom: SIZES.base,
  },
  txtFur: {
    ...FONTS.h1,
    color: COLORS.white,
  },
  footer: {
    position: 'absolute',
    bottom: '5%',
    backgroundColor: COLORS.white,
    height: 70,
    borderRadius: 35,
    left: SIZES.padding,
    right: SIZES.padding,
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
