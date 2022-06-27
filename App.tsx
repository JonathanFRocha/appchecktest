import 'react-native-gesture-handler';

import React from 'react';

import Routes from './src/routes';
import { RealmContext } from './src/infrastructure/realm';

export default function App() {
  const { RealmProvider } = RealmContext;
  return (
    <RealmProvider>
      <Routes />
    </RealmProvider>
  );
}
