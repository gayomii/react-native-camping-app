import React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { userLogout } from '../../auth';

const SettingsPage = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>settings page</Text>
      <TouchableOpacity onPress={userLogout} style={styles.buttonContainer}>
        <Text>로그아웃</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
  buttonContainer: {
    backgroundColor: '#FDA758',
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 48,
    alignItems: 'center',
  },
});

export default SettingsPage;
