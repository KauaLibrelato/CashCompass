import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'styled-components';

export function Transactions() {
  const theme = useTheme();
  return <View style={{backgroundColor: theme.colors.background, flex: 1}} />;
}
