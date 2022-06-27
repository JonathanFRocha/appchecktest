import * as React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <View>
      <StatusBar style="auto" />
      <Text>Home Screen</Text>
      <TouchableOpacity>Hello</TouchableOpacity>
    </View>
  );
}
