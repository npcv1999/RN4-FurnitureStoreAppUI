import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../utils';

const ScrollCard = ({productList, navigation}) => {
  const renderItem = ({item}) => {
    console.log('prod', item.image);
    return (
      <TouchableOpacity
        style={styles.viewProduct}
        onPress={() => navigation.navigate('Detail', {itemInfo: item})}>
        <View style={{width: SIZES.width / 2}}>
          <Image
            source={item.image}
            style={{width: '100%', height: '100%', borderRadius: SIZES.radius}}
          />
          <View style={styles.floatLabel}>
            <Text style={styles.label}>Furniture</Text>
            <Text style={styles.nameProd}>{item.productName}</Text>
          </View>
          <View style={styles.floatPrice}>
            <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={productList}
        renderItem={renderItem}
        keyExtractor={item => item.productId}></FlatList>
    </View>
  );
};

export default ScrollCard;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.base,
  },
  viewProduct: {
    marginLeft: SIZES.padding,
  },
  floatLabel: {
    position: 'absolute',
    top: 15,
    left: '10%',
    right: '10%',
  },
  label: {
    ...FONTS.h3,
    color: COLORS.lightGray2,
    opacity: 0.5,
  },
  nameProd: {
    marginTop: SIZES.base,
    color: COLORS.white,
    ...FONTS.h2,
  },
  floatPrice: {
    position: 'absolute',
    backgroundColor: COLORS.transparentLightGray,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: SIZES.radius,
    bottom: 20,
    left: 30,
  },
  price: {
    ...FONTS.h3,
  },
});
