import React, { memo } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import DetailScreen from '../../screens/DetailScreen/DetailScreen';
import { HOME_NAVIGATOR_SCREEN_OPTIONS } from './HomeNavigator.options';

const Stack = createStackNavigator();

const HomeNavigator = memo(() => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={HOME_NAVIGATOR_SCREEN_OPTIONS}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
});

export default HomeNavigator;
