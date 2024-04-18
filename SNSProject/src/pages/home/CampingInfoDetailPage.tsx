import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const CampingInfoDetailPage = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>camping info detail</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
});

export default CampingInfoDetailPage;
