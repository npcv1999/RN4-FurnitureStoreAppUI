import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import RenderHeader from '../../components/Home/RenderHeader';
import RenderPromotion from '../../components/Home/RenderPromotion';
import RenderTitle from '../../components/Home/RenderTitle';
import ScrollCard from '../../components/Home/ScrollCard';
import ScrollTab from '../../components/Home/ScrollTab';
import {dataSelectList, dataTabList} from '../../utils';
import {styles} from './styles';

const Home = ({navigation}) => {
  const [tabList, setTablist] = useState(dataTabList);

  const [selectedTab, setSelectedTab] = useState(dataSelectList);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header cpn */}
      <RenderHeader></RenderHeader>

      {/* Title comp */}
      <RenderTitle title={selectedTab.title}></RenderTitle>

      {/* Menu tab */}
      <ScrollTab
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={item => setSelectedTab(item)}
        // onPress={item => console.log('value', item)}
      ></ScrollTab>

      {/* View product with selected tab */}
      <View style={{flex: 1}}>
        <ScrollCard
          productList={selectedTab.productList}
          navigation={navigation}></ScrollCard>
      </View>

      {/* Footer */}
      <View style={{height: '20%', justifyContent: 'flex-end'}}>
        <RenderPromotion></RenderPromotion>
      </View>
    </SafeAreaView>
  );
};

export default Home;
