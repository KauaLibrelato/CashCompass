import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {useTheme} from 'styled-components';
import {Crypto, Quotation} from '../screens';
import {TabRoutes} from './tabRoutes';

const {Navigator, Screen} = createDrawerNavigator();
export function DrawerRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          color: theme.colors.text,
          fontSize: 14,
          fontWeight: 'bold',
        },
        drawerStyle: {
          width: '60%',
          backgroundColor: theme.colors.background,
        },
      }}>
      <Screen
        component={TabRoutes}
        name="Home"
        options={{drawerLabel: 'Inicío'}}
      />
      <Screen
        component={Crypto}
        name="Crypto"
        options={{
          drawerLabel: 'Criptomoedas',
        }}
      />
      <Screen
        component={Quotation}
        name="Quotation"
        options={{
          drawerLabel: 'Câmbio',
        }}
      />
    </Navigator>
  );
}
