import React from 'react';
import { hasNotch } from 'react-native-device-info';

import CalendarIcon from '../../assets/icons/calendar.svg';
import ListIcon from '../../assets/icons/list.svg';

const IS_NOTH = hasNotch();

export const TAB_BAR_SCREEN_OPTIONS = {
  headerShown: false,
  tabBarActiveTintColor: '#E9F4ED',
  tabBarInactiveTintColor: '#8A919E',
  tabBarItemStyle: {
    paddingBottom: IS_NOTH ? 0 : 10,
  },
  tabBarStyle: {
    backgroundColor: '#1D314F',
    borderTopWidth: 0,
    height: IS_NOTH ? 80 : 60,
  },
};

export const HOME_STACK_SCREEN_OPTIONS = {
  title: 'Сalendar',
  tabBarIcon: ({ focused }) => (
    <CalendarIcon
      width={IS_NOTH ? 30 : 26}
      height={IS_NOTH ? 30 : 26}
      stroke={focused ? 'white' : 'gray'}
    />
  ),
};

export const TIME_LIST_SCREEN_OPTIONS = {
  title: 'Time List',
  tabBarIcon: ({ focused }) => (
    <ListIcon
      width={IS_NOTH ? 38 : 32}
      height={IS_NOTH ? 38 : 32}
      stroke={focused ? 'white' : 'gray'}
    />
  ),
};
