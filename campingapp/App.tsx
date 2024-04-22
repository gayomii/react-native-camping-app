import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack, LoginStack } from './src/router';
import auth from '@react-native-firebase/auth';

function App(): React.JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>{user ? <MainStack /> : <LoginStack />}</NavigationContainer>
  );
}

export default App;
