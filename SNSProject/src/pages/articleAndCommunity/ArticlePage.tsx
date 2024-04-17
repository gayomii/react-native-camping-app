import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const ArticlePage = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>article page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
});

export default ArticlePage;
