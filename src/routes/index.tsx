import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {TabRoutes} from './tabRoutes';

export function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}

export default Routes;
