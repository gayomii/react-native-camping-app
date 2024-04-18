import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, Image } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { bottomImages } from '../constants/images';

type ButtonIconProps = {
  name: string;
  type?: string;
};

const iconNames: { [key: string]: string } = {
  camping: 'camping',
  community: 'community',
  article: 'article',
  settings: 'settings',
};

const BottomIcon = ({ name, type = 'inactive' }: ButtonIconProps) => {
  const imgName = type === 'inactive' ? `${name}_off` : name;
  return (
    <View>
      <Image source={bottomImages[imgName]} style={styles.bottomIconImage} />
    </View>
  );
};

const CustomBottomTab = ({ state, navigation, insets }: BottomTabBarProps) => {
  const { routes, index: focusedIndex } = state;

  const onPress = (route: any, index: any) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    const isFocused = routes[focusedIndex].name === route.name;
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <View style={[styles.bottomTabBarWrapper, { paddingBottom: insets.bottom }]}>
      {routes.map((route, index) => {
        const isFocused = routes[focusedIndex].name === route.name;
        return (
          <TouchableOpacity
            style={styles.bottomTabBar}
            onPress={() => onPress(route, index)}
            key={route.key}
            activeOpacity={0.7}>
            <Animated.View style={styles.bottomTabBarItem}>
              {BottomIcon({
                name: iconNames[route.name],
                type: isFocused ? 'active' : 'inactive',
              })}
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBarWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    zIndex: 10,
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
  bottomTabBar: {
    flex: 1,
    alignItems: 'center',
  },
  bottomTabBarItem: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  bottomTabBarText: {
    fontSize: 12,
  },
  bottomIconImage: {
    width: 40,
    height: 40,
  },
});

export default CustomBottomTab;
