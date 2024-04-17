import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const CommunityPage = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>community page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
});

export default CommunityPage;
