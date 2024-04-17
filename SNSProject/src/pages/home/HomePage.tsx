import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Icon name="arrow-bold-right" color="#000" size={24} />
      <Text>home page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
});

export default HomePage;
