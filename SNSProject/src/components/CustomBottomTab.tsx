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
  return (
    <View>
      <Image
        source={bottomImages[name]}
        style={[styles.bottomIconImage, type === 'inactive' && { opacity: 0.3 }]}
      />
    </View>
  );
};

const CustomBottomTab = ({ state, navigation, insets }: BottomTabBarProps) => {
  const { routes, index: focusedIndex } = state;
  const leftRoutes = routes.slice(0, 2);
  const rightRoutes = routes.slice(2);

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
    <View style={[styles.bottomTabBarWrapper]}>
      <View style={[styles.leftBottomChild, { paddingBottom: insets.bottom }]}>
        {leftRoutes.map((route, index) => {
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
      <View style={[styles.rightBottomChild, { paddingBottom: insets.bottom }]}>
        {rightRoutes.map((route, index) => {
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
  leftBottomChild: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 50,
    paddingTop: 24,
    backgroundColor: '#fff',
  },
  rightBottomChild: {
    flex: 1,
    flexDirection: 'row',
    borderTopLeftRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
    backgroundColor: '#fff',
  },
});

export default CustomBottomTab;
