import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const SettingsPage = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>settings page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
});

export default SettingsPage;
