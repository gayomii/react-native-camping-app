import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyHeader from '../../components/MyHeader';
import { formatDate } from '../../utils/getDate';

const ArticleDetailPage = () => {
  const params: any = useRoute().params;
  const { articleImg, createdAt, title, contents } = params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <MyHeader
          title="아티클 상세 정보"
          leftIcon={
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.goBack()}>
              <Icon name="long-arrow-alt-left" size={18} />
            </TouchableOpacity>
          }
          rightIcon={
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="bookmark-outline" size={18} />
            </TouchableOpacity>
          }
        />
      </View>
      <ScrollView style={styles.articleWrapper}>
        <Image source={articleImg} style={styles.articleImage} />
        <View style={styles.articleDetail}>
          <Text style={styles.articleTitle}>{title}</Text>
          <Text style={styles.articleTime}>{formatDate(new Date(createdAt))}</Text>
          <Text style={styles.articleContents}>{contents}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
  iconButton: {
    backgroundColor: '#eee0da',
    borderRadius: 50,
    padding: 12,
  },
  articleWrapper: {
    paddingHorizontal: 20,
  },
  articleDetail: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 14,
    gap: 14,
    borderRadius: 10,
    height: '100%',
  },
  articleImage: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 14,
  },
  articleTitle: {
    fontSize: 18,
    lineHeight: 25,
    color: '#573353',
    fontWeight: '600',
  },
  articleTime: {
    textAlign: 'right',
    color: 'rgba(87, 51, 83, 0.5)',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
  },
  articleContents: {
    fontSize: 12,
    lineHeight: 14,
  },
});

export default ArticleDetailPage;
