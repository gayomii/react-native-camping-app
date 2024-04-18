import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getCampingList } from '../../apis/campingApi';
import CampingInfo from '../../components/CampingInfo';
import MyHeader from '../../components/MyHeader';

const HomePage = () => {
  const [campingList, setCampingList] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => setPageNo(1), []);

  useEffect(() => {
    const fetchCampingList = async () => {
      const result = await getCampingList({ pageNo });
      setCampingList([...campingList, ...result.response.body.items.item]);
    };

    fetchCampingList();
  }, [pageNo]);

  const onEndReached = () => {
    setPageNo(pageNo + 1);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <MyHeader
          title="캠핑투게더"
          leftIcon={<Icon name="grip-lines" size={18} />}
          // TODO: Image일때, style
          rightIcon={<Icon name="search" size={18} />}
        />
      </View>
      <View style={styles.mainContainer}>
        <FlatList
          data={campingList}
          keyExtractor={({ item, index }) => index}
          renderItem={({ item }) => <CampingInfo {...item} />}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
          style={styles.campingListContainer}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.6}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
  campingListContainer: {
    paddingHorizontal: 16,
  },
  mainContainer: {
    paddingBottom: 64,
    flex: 1,
  },
});

export default HomePage;
