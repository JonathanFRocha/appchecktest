import * as React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View>
      <StatusBar style="auto" />
      <Text>Home Screen</Text>
    </View>
  );
}
