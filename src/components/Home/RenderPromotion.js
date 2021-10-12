import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../../utils';

const RenderPromotion = () => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View
        style={{
          backgroundColor: COLORS.lightGray2,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}>
        <Image
          source={images.sofa}
          resizeMode="contain"
          style={{width: '60%', height: '60%'}}></Image>
      </View>
      <View
        style={{
          flex: 1,
          marginLeft: SIZES.radius,
          justifyContent: 'center',
        }}>
        <Text style={{...FONTS.h3}}>Special Offer </Text>
        <Text style={{...FONTS.body3}}>Adding to your cart </Text>
      </View>
      <View style={{marginLeft: SIZES.radius, justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: '70%',
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            borderRadius: 10,
          }}
          onPress={() => console.log('Promotion clicked')}>
          <Image source={icons.chevron} style={{width: 25, height: 25}}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderPromotion;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    borderRadius: 20,
    padding: SIZES.radius,
    marginHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 5,
  },
});
