import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import auth from '@react-native-firebase/auth';

function App(): React.JSX.Element {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    console.log('user not found');
  } else {
    console.log(user);
  }

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
