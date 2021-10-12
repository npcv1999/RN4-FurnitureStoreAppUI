import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {icons, SIZES} from '../../utils';

const RenderHeader = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => console.log('menu')}>
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{width: 25, height: 25}}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('cart')}>
          <Image
            source={icons.cart}
            resizeMode="contain"
            style={{width: 25, height: 25}}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
});
