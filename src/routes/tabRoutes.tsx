import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TabBar} from '../components';
import {Configurations, Dashboard, Home, Register, Transactions} from '../screens';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: any) => <TabBar {...props} />}>
      <Screen
        component={Home}
        name="Home"
        options={{
          tabBarIcon: 'home' as any,
        }}
      />

      <Screen
        component={Transactions}
        name="Transactions"
        options={{
          tabBarIcon: 'transactions' as any,
        }}
      />

      <Screen
        component={Register}
        name="Register"
        options={{
          tabBarIcon: 'register' as any,
        }}
      />

      <Screen
        component={Dashboard}
        name="Dashboard"
        options={{
          tabBarIcon: 'dashboard' as any,
        }}
      />

      <Screen
        component={Configurations}
        name="Configurations"
        options={{
          tabBarIcon: 'configurations' as any,
        }}
      />
    </Navigator>
  );
}
