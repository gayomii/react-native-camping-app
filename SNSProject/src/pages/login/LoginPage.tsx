import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LoginParamList } from '../../types/types';

const backgroundImg = require('../../assets/loginBackgroundImg.png');

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation<StackNavigationProp<LoginParamList>>();

  const initInput = () => {
    setEmailValue('');
    setPasswordValue('');
    setShowPassword(false);
  };

  return (
    <ImageBackground source={backgroundImg} resizeMode="cover">
      <View style={styles.main}>
        <Text style={styles.welcomeText}>환영해요!</Text>
        <View style={styles.loginTypesContainer}>
          <TouchableOpacity style={styles.loginType}>
            <FontAwesome name="google" size={23} />
            <Text style={[styles.basicFontStyle, styles.bold]}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginType}>
            <MaterialIcons name="facebook" size={23} />
            <Text style={[styles.basicFontStyle, styles.bold]}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>
        {/* 이메일로 로그인하기 */}
        <View style={styles.emailLoginWrapper}>
          <View style={styles.emailLoginHeader}>
            <Text style={styles.basicFontStyle}>이메일로 로그인하기</Text>
          </View>
          <View style={styles.emailLoginMain}>
            <View style={styles.inputContainer}>
              <MaterialIcons name="email" size={23} color="#FC9D45" />
              <TextInput
                style={styles.input}
                maxLength={200}
                placeholder="이메일"
                placeholderTextColor="rgba(87, 51, 83, 0.2)"
                autoCapitalize="none"
                spellCheck={false}
                autoCorrect={false}
                value={emailValue}
                onChangeText={text => setEmailValue(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <MaterialIcons name="lock-outline" size={23} color="#FC9D45" />
              <TextInput
                style={styles.input}
                maxLength={200}
                placeholder="비밀번호"
                placeholderTextColor="rgba(87, 51, 83, 0.2)"
                autoCapitalize="none"
                spellCheck={false}
                autoCorrect={false}
                value={passwordValue}
                onChangeText={text => setPasswordValue(text)}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text
                  style={[styles.basicFontStyle, { textDecorationLine: 'underline' }]}>
                  Show
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.basicFontStyle, styles.underLineFont]}>
                비밀번호 찾기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                initInput();
                navigation.navigate('signUp');
              }}>
              <Text style={styles.basicFontStyle}>
                아직 회원이 아니세요? <Text style={styles.bold}>회원가입</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
  main: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  basicFontStyle: {
    fontSize: 16,
    color: '#573353',
    textAlign: 'center',
  },
  underLineFont: {
    textDecorationLine: 'underline',
  },
  bold: {
    fontWeight: '600',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#573353',
    marginBottom: 40,
    textAlign: 'center',
  },
  loginTypesContainer: {
    width: '100%',
    paddingHorizontal: 30,
  },
  loginType: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    gap: 30,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 14,
    marginBottom: 8,
  },
  emailLoginWrapper: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 28,
  },
  emailLoginHeader: {
    borderBottomWidth: 1,
    borderColor: '#FFF3E9',
    width: '100%',
    paddingVertical: 12,
    marginBottom: 16,
  },
  emailLoginMain: {
    width: '100%',
    paddingHorizontal: 20,
    gap: 8,
  },
  input: {
    paddingHorizontal: 20,
    color: '#FDA758',
    fontWeight: '600',
    fontSize: 16,
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: '#FFF6ED',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    borderRadius: 12,
  },
  loginBtn: {
    marginVertical: 20,
    paddingVertical: 22,
    backgroundColor: '#FDA758',
    borderRadius: 12,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#573353',
  },
});

export default LoginPage;
