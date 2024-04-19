import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

import CustomBottomTab from './components/CustomBottomTab';
import HomePage from './pages/home/HomePage';
import CommunityPage from './pages/community/CommunityPage';
import ArticlePage from './pages/article/ArticlePage';
import SettingsPage from './pages/setting/SettingsPage';
import CampingInfoDetailPage from './pages/home/CampingInfoDetailPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBar = (props: BottomTabBarProps) => <CustomBottomTab {...props} />;

const HomeTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomePage} />
      <Stack.Screen name="campingInfoDetail" component={CampingInfoDetailPage} />
    </Stack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="camping" component={HomeTab} />
      <Tab.Screen name="article" component={ArticlePage} />
      <Tab.Screen name="community" component={CommunityPage} />
      <Tab.Screen name="settings" component={SettingsPage} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};

export default Router;
