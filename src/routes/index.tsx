import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/Home';
import ChecklistScreen from '../screens/Checklist';
import TemplateScreen from '../screens/Template';

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Checklist" component={ChecklistScreen} />
        <Stack.Screen name="Template" component={TemplateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
