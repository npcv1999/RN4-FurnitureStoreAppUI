import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../utils';

const ScrollTab = ({tabList, selectedTab, onPress, children}) => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{marginHorizontal: SIZES.padding}}
        onPress={() => onPress(item)}>
        <Text style={{color: COLORS.secondary, ...FONTS.body2}}>
          {item.name}
        </Text>
        {selectedTab.id === item.id && (
          <View style={styles.selectedTab}>
            <View style={styles.dotActive}></View>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginTop: SIZES.padding}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
      {children}
    </View>
  );
};

export default ScrollTab;

const styles = StyleSheet.create({
  selectedTab: {
    alignItems: 'center',
    marginTop: SIZES.base,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.blue,
  },
});
