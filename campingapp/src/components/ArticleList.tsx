import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { formatDate } from '../utils/getDate';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ArticleTabParamList, ArticleProps } from '../types/types';

const ArticleList = (item: ArticleProps) => {
  const navigation = useNavigation<StackNavigationProp<ArticleTabParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('articleDetail', { ...item })}
      style={styles.articleItemWrapper}>
      <Image style={styles.articleImage} source={item.articleImg} />
      <View style={styles.articleInfo}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleContents} numberOfLines={2}>
          {item.contents}
        </Text>
        <Text style={styles.articleTime}>{formatDate(new Date(item.createdAt))}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  articleItemWrapper: {
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  articleImage: { width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  articleTitle: {
    color: '#573353',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 25,
  },
  articleInfo: {
    gap: 8,
    paddingVertical: 14,
    paddingHorizontal: 12,
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

export default ArticleList;
