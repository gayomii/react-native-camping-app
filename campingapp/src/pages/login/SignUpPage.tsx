import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LoginParamList } from '../../types/types';
import { validateEmail, validatePassword } from '../../utils/validate';
import { signUp } from '../../auth';

const signUpImg = require('../../assets/signUpImg.png');

const SignUpPage = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const [agree, setAgree] = useState(false);

  const navigation = useNavigation<StackNavigationProp<LoginParamList>>();

  const initInput = () => {
    setNameValue('');
    setEmailValue('');
    setPasswordValue('');
    setShowPassword(false);
    setAutoLogin(false);
    setAgree(false);
  };

  const userRegister = async () => {
    try {
      if (!nameValue) throw new Error('이름을 입력해 주세요.');
      if (!emailValue) throw new Error('이메일을 입력해 주세요.');
      if (!passwordValue) throw new Error('비밀번호를 입력해 주세요.');

      if (!validateEmail(emailValue)) throw new Error('이메일 형식에 맞지 않습니다.');
      if (!validatePassword(passwordValue))
        throw new Error('비밀번호는 8자 이상 입력해야 합니다.');

      if (!agree) throw new Error('약관에 동의해주세요.');
      await signUp({ email: emailValue, password: passwordValue, name: nameValue });
    } catch (e) {
      alert(e);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Image style={styles.signUpImg} source={signUpImg} />
        <Text style={styles.title}>회원가입</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.InputWrapper}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="person" size={23} color="#FC9D45" />
            <TextInput
              style={styles.input}
              maxLength={200}
              placeholder="사용자 명"
              placeholderTextColor="rgba(87, 51, 83, 0.2)"
              autoCapitalize="none"
              spellCheck={false}
              autoCorrect={false}
              value={nameValue}
              onChangeText={text => setNameValue(text)}
            />
          </View>
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
              <Text style={[styles.basicFontStyle, { textDecorationLine: 'underline' }]}>
                Show
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.checkBoxWrapper}>
          <View style={styles.checkBox}>
            <Switch value={autoLogin} onValueChange={() => setAutoLogin(!autoLogin)} />
            <Text style={styles.basicFontStyle}>자동 로그인</Text>
          </View>
          <View style={styles.checkBox}>
            <Switch value={agree} onValueChange={() => setAgree(!agree)} />
            <Text style={styles.basicFontStyle}>약관 동의</Text>
          </View>
        </View>
        <TouchableOpacity onPress={userRegister} style={styles.signUpBtn}>
          <Text style={styles.signUpText}>회원가입</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => {
              initInput();
              navigation.navigate('login');
            }}>
            <Text style={styles.basicFontStyle}>
              회원이세요? <Text style={styles.bold}>로그인</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF3E9',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
  },
  header: {
    gap: 20,
  },
  main: { width: '100%', paddingHorizontal: 20, gap: 28 },
  signUpImg: {
    height: 200,
    width: 200,
  },
  title: {
    fontSize: 24,
    color: '#573353',
    textAlign: 'center',
    fontWeight: '600',
  },
  basicFontStyle: {
    fontSize: 16,
    color: '#573353',
    textAlign: 'center',
  },
  bold: {
    fontWeight: '600',
  },
  InputWrapper: {
    gap: 8,
  },
  inputContainer: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    borderRadius: 12,
  },
  input: {
    paddingHorizontal: 20,
    color: '#FDA758',
    fontWeight: '600',
    fontSize: 16,
    flex: 1,
  },
  checkBoxWrapper: { gap: 16 },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  signUpBtn: {
    marginVertical: 20,
    paddingVertical: 22,
    backgroundColor: '#FDA758',
    borderRadius: 12,
  },
  signUpText: { textAlign: 'center', fontSize: 16, fontWeight: '600', color: '#573353' },
});

export default SignUpPage;
