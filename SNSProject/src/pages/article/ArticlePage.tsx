import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

import MyHeader from '../../components/MyHeader';
import ArticleList from '../../components/ArticleList';

const { width, height } = Dimensions.get('window');

const dummyArticle = [
  {
    contentId: 1,
    title: '지친 당신에게 캠핑을 추천하지 않는다.',
    contents: `캠핑은 휴식이 아니다. 색다른 공간에서 색다른 체험을 하는 하나의 일이라 누군가에겐 더 지치게 하는 활동 일 수 있다.

    라고 그럴듯하게 현대 캠핑 문화에 냉철한 시선으로 비평하는 비평가처럼
    보일 수 있겠지만, 사실 그렇지 않다. 나는 개발을 하다가 갑자기 디자인을 하고 있지만... 이렇게 하기 싫은 일도 해야될 때가 있다.
    
    lolem ipsum을 넣을 수 있지만 그러면 뭔가 찐 데이터가 아닌 것 같아서 이렇게 새벽에 아무 글이나 쓰고 있다.
    
    근데 일 안하고 캠핑 가는게 더 좋다.
    
    언제쯤 일을 안하며 살 수 있을까?
    
    라고 디자인 하면서 푸념합니다...
    
    모두 파이팅! 지치면 퇴사하고 캠핑 같이 가요`,
    articleImg: require('../../assets/dummyArticleImg.png'),
    createdAt: 1702596955893,
  },
  {
    contentId: 2,
    title: '지친 당신에게 캠핑을 추천하지 않는다.',
    contents: `캠핑은 휴식이 아니다. 색다른 공간에서 색다른 체험을 하는 하나의 일이라 누군가에겐 더 지치게 하는 활동 일 수 있다.

    라고 그럴듯하게 현대 캠핑 문화에 냉철한 시선으로 비평하는 비평가처럼
    보일 수 있겠지만, 사실 그렇지 않다. 나는 개발을 하다가 갑자기 디자인을 하고 있지만... 이렇게 하기 싫은 일도 해야될 때가 있다.`,
    articleImg: require('../../assets/dummyArticleImg.png'),
    createdAt: 1713596955893,
  },
  {
    contentId: 3,
    title: '지친 당신에게 캠핑을 추천하지 않는다.',
    contents: `캠핑은 휴식이 아니다. 색다른 공간에서 색다른 체험을 하는 하나의 일이라 누군가에겐 더 지치게 하는 활동 일 수 있다.

    라고 그럴듯하게 현대 캠핑 문화에 냉철한 시선으로 비평하는 비평가처럼
    보일 수 있겠지만, 사실 그렇지 않다. 나는 개발을 하다가 갑자기 디자인을 하고 있지만... 이렇게 하기 싫은 일도 해야될 때가 있다.`,
    articleImg: require('../../assets/dummyArticleImg.png'),
    createdAt: 1712596955893,
  },
];

type SORT_TYPE = {
  display: string;
  value: string;
};

type SORT_TYPES = {
  [key: string]: SORT_TYPE;
};

const SortType: SORT_TYPES = {
  FAVORITE: { display: '즐겨찾기순', value: 'FAVORITE' },
  LATEST: { display: '최신순', value: 'LATEST' },
};

const ArticlePage = () => {
  const [sortedType, setSortedType] = useState<SORT_TYPE>(SortType.FAVORITE);
  const [selectSortType, setSelectSortType] = useState<SORT_TYPE>(sortedType);
  const [infoVisible, setInfoVisible] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sortedArticles, setSortedArticles] = useState(dummyArticle);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;

    if (currentOffset > 1 && infoVisible) {
      setInfoVisible(false);
    } else if (currentOffset <= 1 && !infoVisible) {
      setInfoVisible(true);
    }
  };

  useEffect(() => {
    if (sortedType.value === 'LATEST') {
      setSortedArticles(dummyArticle.sort((a, b) => b.createdAt - a.createdAt));
    } else {
      setSortedArticles(dummyArticle);
    }
  }, [sortedType]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <MyHeader
          title="아티클"
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
      <View style={styles.contentWrapper}>
        {infoVisible && (
          <View>
            <ImageBackground
              source={require('../../assets/articleLogoImg.png')}
              style={styles.articleLogo}
              imageStyle={styles.articleLogoImg}>
              <Text style={styles.articleLogoTitle}>각종 캠핑 정보</Text>
              <Text style={styles.articleLogoComment}>
                캠핑투게더가 제공하는 각종 꿀팁으로 캠핑을 더 풍성하게 즐겨보세요.
              </Text>
            </ImageBackground>
          </View>
        )}
        <View style={styles.sortedWrapper}>
          <Text style={styles.sortLabel}>Sort By: </Text>
          <TouchableOpacity
            style={styles.sortedType}
            activeOpacity={1}
            onPress={() => setIsModalVisible(!isModalVisible)}>
            <Text>{sortedType.display}</Text>
            <AntIcon name="down" size={10} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={sortedArticles}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ArticleList {...item} />}
          onScroll={handleScroll}
          scrollEventThrottle={20}
        />
      </View>
      <Modal
        useNativeDriver
        animationIn={'slideInUp'}
        animationInTiming={300}
        animationOut={'slideOutDown'}
        animationOutTiming={300}
        isVisible={isModalVisible}
        backdropOpacity={0.6}
        style={styles.modalContainer}
        onBackdropPress={() => {
          setSelectSortType(sortedType);
          setIsModalVisible(!isModalVisible);
        }}>
        <View style={styles.modalBox}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => {
                setSelectSortType(sortedType);
                setIsModalVisible(!isModalVisible);
              }}>
              <Text style={styles.modalBtnText}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.modalText}>정렬</Text>
            <TouchableOpacity
              onPress={() => {
                setSortedType(selectSortType);
                setIsModalVisible(!isModalVisible);
              }}>
              <Text style={styles.modalBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalMain}>
            {Object.keys(SortType).map((sortType: string) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectSortType(SortType[sortType]);
                  }}>
                  <Text
                    style={[
                      styles.modalText,
                      selectSortType.display === SortType[sortType].display && {
                        color: '#FC9D45',
                      },
                    ]}>
                    {SortType[sortType].display}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF3E9',
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 64,
    flex: 1,
  },
  iconButton: {
    backgroundColor: '#eee0da',
    borderRadius: 50,
    padding: 12,
  },
  articleLogo: {
    height: 146,
    paddingVertical: 22,
    paddingHorizontal: 25,
    gap: 30,
    marginBottom: 24,
  },
  articleLogoImg: {
    borderRadius: 15,
  },
  articleLogoTitle: {
    color: '#573353',
    fontSize: 36,
    fontWeight: '600',
  },
  articleLogoComment: {
    maxWidth: 212,
  },
  sortedWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sortLabel: {
    fontSize: 16,
    color: '#573353',
  },
  sortedType: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 73,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(87, 51, 83, 0.1)',
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  modalContainer: {
    margin: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalBox: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 16,
    // height: height / 3,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  modalHeader: {
    minHeight: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalMain: {},
  modalText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#573353',
    textAlign: 'center',
    paddingVertical: 16,
  },
  modalBtnText: {
    fontSize: 17,
    color: '#FC9D45',
    fontWeight: '600',
  },
});

export default ArticlePage;
