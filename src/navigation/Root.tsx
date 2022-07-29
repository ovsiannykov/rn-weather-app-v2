import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const Root: React.FC = memo(() => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
    </NavigationContainer>
  );
});

export default Root;
