import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../utils';

const RenderTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collection of</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default RenderTitle;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.base,
    marginHorizontal: SIZES.padding,
  },
  title: {color: COLORS.black, ...FONTS.largeTitle},
});
