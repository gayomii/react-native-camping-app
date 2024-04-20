import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
          title="캠핑장 상세 정보"
          leftIcon={
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.goBack()}>
              <Icon name="long-arrow-alt-left" size={18} />
            </TouchableOpacity>
          }
          // TODO: Image일때, style
          rightIcon={<View style={{ width: 20, height: 20 }}></View>}
        />
      </View>
      <ScrollView style={styles.articleWrapper}>
        {/* <Image source={articleImg} /> */}
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
