import React, { ReactElement } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

type HeaderProps = {
  title: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
};

const { width } = Dimensions.get('window');

const MyHeader = ({ title, leftIcon, rightIcon }: HeaderProps) => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity style={styles.iconButton}>{leftIcon}</TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.iconButton}>{rightIcon}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#FFF3E9',
    width,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#573353',
  },
  iconButton: {
    backgroundColor: '#eee0da',
    borderRadius: 50,
    padding: 12,
  },
});

export default MyHeader;
