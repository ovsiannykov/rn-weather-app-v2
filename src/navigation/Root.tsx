import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import TabBar from './TabBar/TabBar';

const Root = memo(() => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <TabBar />
    </NavigationContainer>
  );
});

export default Root;
