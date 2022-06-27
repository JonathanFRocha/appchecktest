import 'react-native-gesture-handler';

import React from 'react';

import RealmContextProvider from './src/context/RealmContext';
import Routes from './src/routes';

export default function App() {
  return (
    <RealmContextProvider>
      <Routes />
    </RealmContextProvider>
  );
}
