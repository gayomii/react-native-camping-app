import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const ResetPasswordPage = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>reset password</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ResetPasswordPage;
