import * as Icon from 'phosphor-react-native';
import React from 'react';
import {GetTabBarIconProps} from '../../types';

export function getTabBarIcon({options, isFocused, theme}: GetTabBarIconProps) {
  let iconComponent;

  switch (options.tabBarIcon) {
    case 'home':
      iconComponent = (
        <Icon.HouseSimple
          size={24}
          color={isFocused ? theme?.colors.primaryDark : theme?.colors.primaryDark}
        />
      );
      break;
    case 'dashboard':
      iconComponent = (
        <Icon.ChartPie
          size={24}
          color={isFocused ? theme?.colors.primaryDark : theme?.colors.primaryDark}
        />
      );
      break;
    case 'register':
      iconComponent = (
        <Icon.Plus
          size={24}
          color={isFocused ? theme?.colors.primaryDark : theme?.colors.primaryDark}
        />
      );
      break;
    case 'transactions':
      iconComponent = (
        <Icon.ArrowsClockwise
          size={24}
          color={isFocused ? theme?.colors.primaryDark : theme?.colors.primaryDark}
        />
      );
      break;
    case 'configurations':
      iconComponent = (
        <Icon.Gear
          size={24}
          color={isFocused ? theme?.colors.primaryDark : theme?.colors.primaryDark}
        />
      );
      break;
    default:
      iconComponent = (
        <Icon.Money
          size={24}
          color={isFocused ? theme?.colors.primaryDark : theme?.colors.warning}
        />
      );
      break;
  }

  return iconComponent;
}
