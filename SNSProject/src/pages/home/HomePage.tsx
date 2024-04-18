import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getCampingList } from '../../apis/campingApi';
import CampingInfo from '../../components/CampingInfo';
import MyHeader from '../../components/MyHeader';

const HomePage = () => {
  const [campingList, setCampingList] = useState([]);

  useEffect(() => {
    const fetchCampingList = async () => {
      const result = await getCampingList();
      setCampingList(result.response.body.items.item);
    };

    fetchCampingList();
  }, []);

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
          keyExtractor={item => item.contentId}
          renderItem={({ item }) => <CampingInfo {...item} />}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
          style={styles.campingListContainer}
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
    paddingBottom: 60,
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default HomePage;
