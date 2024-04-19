import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyHeader from '../../components/MyHeader';
import { formatDate } from '../../utils/getDate';

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
    createdAt: new Date().getTime(),
  },
];

const ArticlePage = () => {
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
      <ScrollView style={styles.contentWrapper}>
        <ImageBackground
          source={require('../../assets/articleLogoImg.png')}
          style={styles.articleLogo}
          imageStyle={styles.articleLogoImg}>
          <Text style={styles.articleLogoTitle}>각종 캠핑 정보</Text>
          <Text style={styles.articleLogoComment}>
            캠핑투게더가 제공하는 각종 꿀팁으로 캠핑을 더 풍성하게 즐겨보세요.
          </Text>
        </ImageBackground>
        <View>
          <View>
            <Text>Sort By: </Text>
          </View>
        </View>
        <FlatList
          data={dummyArticle}
          renderItem={({ item }) => (
            <View>
              <Image source={require('../../assets/dummyArticleImg.png')} />
              <View style={styles.articleInfo}>
                <Text style={styles.articleTitle}>{item.title}</Text>
                <Text style={styles.articleContents} numberOfLines={2}>
                  {item.contents}
                </Text>
                <Text style={styles.articleTime}>
                  {formatDate(new Date(item.createdAt))}
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
  contentWrapper: {
    paddingHorizontal: 20,
  },
  iconButton: {
    backgroundColor: '#eee0da',
    borderRadius: 50,
    padding: 12,
  },
  articleLogo: {
    flex: 1,
    height: 146,
    paddingVertical: 22,
    paddingHorizontal: 25,
    gap: 30,
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
  articleTitle: {
    color: '#573353',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 25,
  },
  articleInfo: {
    gap: 8,
  },
  articleContents: {
    color: '#573353',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
  },
  articleTime: {
    color: '#573353',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    opacity: 0.5,
  },
});

export default ArticlePage;
