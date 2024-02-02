import * as Icon from 'phosphor-react-native';
import {DefaultTheme} from 'styled-components/native';
import {ToggleButtonProps} from './types';

export const toggleButtonProps = (theme: DefaultTheme): ToggleButtonProps => ({
  thumbActiveComponent: <Icon.Moon size={16} color={theme.colors.text} />,
  thumbInActiveComponent: <Icon.Sun size={16} color={theme.colors.text} />,
  containerStyle: {width: 50, height: 30},
  thumbButton: {width: 30, height: 30},
  thumbStyle: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    borderRadius: 15,
    elevation: 5,
    shadowColor: theme.colors.text,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  trackBar: {
    activeBackgroundColor: theme.colors.success,
    inActiveBackgroundColor: theme.colors.text,
    borderActiveColor: theme.colors.border,
    borderInActiveColor: theme.colors.border,
    borderWidth: 2,
    width: 60,
    height: 30,
  },
});
