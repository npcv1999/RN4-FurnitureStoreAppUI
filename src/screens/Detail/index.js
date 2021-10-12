import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../utils';
import {styles} from './styles';

const Detail = ({route, navigation}) => {
  const {itemInfo} = route.params;
  console.log('item info', itemInfo);

  const renderHeader = navigation => (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.menu} style={{width: 25, height: 25}}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Search item')}>
          <Image
            source={icons.search}
            style={{width: 25, height: 25, tintColor: COLORS.black}}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );

  function renderBackGround(itemInfo) {
    return itemInfo ? (
      <ImageBackground
        source={itemInfo.image}
        style={{width: '100%', height: '100%'}}>
        {renderHeader(navigation)}

        {/* Product Tag */}
        <View style={styles.viewTag}>
          <View style={styles.dotTag}>
            <View style={styles.dotIn}></View>
          </View>
          <View style={styles.tagInfo}>
            <Text style={{...FONTS.body3, color: COLORS.darkGray}}>
              {itemInfo.productName.includes('Chair')
                ? `${itemInfo.productName.slice(
                    0,
                    6,
                  )}\n${itemInfo.productName.slice(6)}`
                : itemInfo.productName}
            </Text>
            <View
              style={{
                marginLeft: SIZES.padding,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  color: COLORS.darkGreen,
                  ...FONTS.body3,
                  fontWeight: 'bold',
                }}>
                $ {itemInfo.price.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Furniture title */}
        <View style={styles.furnitureTitle}>
          <Text style={styles.labelFur}>Furniture</Text>
          <Text style={styles.txtFur}>MX Chair-modern design</Text>
        </View>
      </ImageBackground>
    ) : (
      <View></View>
    );
  }

  function renderFooter(navigation) {
    return (
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={icons.dashboard}
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.lightGray,
            }}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            width: 50,
            height: 50,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={icons.plus}
            style={{width: 20, height: 20, tintColor: 'white'}}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={icons.user}
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.lightGray,
            }}></Image>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderBackGround(itemInfo)}
      {renderFooter(navigation)}
    </View>
  );
};

export default Detail;
