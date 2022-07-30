import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from '../HomeNavigator/HomeNavigator';
import TimeListScreen from '../../screens/TimeListScreen/TimeListScreen';
import {
  TAB_BAR_SCREEN_OPTIONS,
  HOME_STACK_SCREEN_OPTIONS,
  TIME_LIST_SCREEN_OPTIONS,
} from './TabBar.options';

const Tab = createBottomTabNavigator();

const TabBar = memo(() => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={TAB_BAR_SCREEN_OPTIONS}>
      <Tab.Screen name="HomeStack" component={HomeNavigator} options={HOME_STACK_SCREEN_OPTIONS} />
      <Tab.Screen name="TimeList" component={TimeListScreen} options={TIME_LIST_SCREEN_OPTIONS} />
    </Tab.Navigator>
  );
});

export default TabBar;
