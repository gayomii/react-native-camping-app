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
import ArticleDetailPage from './pages/article/ArticleDetailPage';
import LoginPage from './pages/login/LoginPage';
import NewPostPage from './pages/community/NewPostPage';
import SignUpPage from './pages/login/SignUpPage';
import ResetPasswordPage from './pages/login/ResetPasswordPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBar = (props: BottomTabBarProps) => <CustomBottomTab {...props} />;

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="signUp" component={SignUpPage} />
      <Stack.Screen name="resetPassword" component={ResetPasswordPage} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomePage} />
      <Stack.Screen name="campingInfoDetail" component={CampingInfoDetailPage} />
    </Stack.Navigator>
  );
};

const ArticleStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="articleList" component={ArticlePage} />
      <Stack.Screen name="articleDetail" component={ArticleDetailPage} />
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
      <Tab.Screen name="camping" component={HomeStack} />
      <Tab.Screen name="article" component={ArticleStack} />
      <Tab.Screen name="newPost" component={NewPostPage} />
      <Tab.Screen name="community" component={CommunityPage} />
      <Tab.Screen name="settings" component={SettingsPage} />
      {/* <Tab.Screen name="loginText" component={LoginPage} /> */}
    </Tab.Navigator>
  );
};

const Router = () => {
  // TODO: test
  const isLogin = false;

  return isLogin ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  ) : (
    <LoginStack />
  );
};

export default Router;
