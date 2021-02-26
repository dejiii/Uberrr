import React from 'react';
import {StatusBar} from 'react-native';

// SCREENS
import Homescreen from './src/Screens/Homepage';

const App = () => {
  return (
    <>
      <StatusBar barStyle="transparent" />
      <Homescreen />
    </>
  );
};

export default App;
