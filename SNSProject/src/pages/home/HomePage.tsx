import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { getCampingList } from '../../apis/campingApi';
import CampingInfo from '../../components/CampingInfo';
import MyHeader from '../../components/MyHeader';

const HomePage = () => {
  const [campingList, setCampingList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchCampingList = async () => {
    try {
      const result = await getCampingList({ pageNo });
      return result.response.body.items.item;
    } catch (e) {
      console.log(e);
    }
  };

  // reset
  const initData = async () => {
    setPageNo(1);
    const result = await fetchCampingList();
    setCampingList(result);
  };

  useEffect(() => {
    initData();
  }, []);

  const onEndReached = async () => {
    setPageNo(pageNo + 1);
    setLoading(true);
    if (loading) {
      const result = await fetchCampingList();
      setCampingList([...campingList, ...result]);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <MyHeader
          title="캠핑투게더"
          leftIcon={
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="grip-lines" size={18} />
            </TouchableOpacity>
          }
          rightIcon={
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="search" size={18} />
            </TouchableOpacity>
          }
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
          onEndReached={onEndReached}
          onEndReachedThreshold={0.2}
          ListFooterComponent={
            loading && (
              <View style={styles.loadingIcon}>
                <Icon name="ellipsis-h" size={30} />
              </View>
            )
          }
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
  iconButton: {
    backgroundColor: '#eee0da',
    borderRadius: 50,
    padding: 12,
  },
  loadingIcon: {
    alignItems: 'center',
    paddingVertical: 12,
    opacity: 0.2,
  },
});

export default HomePage;
