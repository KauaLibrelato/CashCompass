import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext, ThemeType} from '../../theme/theme';
import * as S from './TabBarStyles';
import {TabBarButton} from './utils';
import {ITabBar} from './utils/types';

export function TabBar({state, descriptors, navigation}: ITabBar) {
  const {theme} = useContext(ThemeContext);

  return (
    <S.Container>
      <View
        style={[
          S.viewStyles.contanerView,
          {
            backgroundColor: `${
              theme === ThemeType.dark ? '#121212' : '#FFFFFF'
            }`,
          },
        ]}>
        {state.routes.map(
          (route: {key: string | number; name: string; index: number}) => (
            <TabBarButton
              key={route.key}
              route={route}
              descriptors={descriptors}
              state={state}
              navigation={navigation}
            />
          ),
        )}
      </View>
    </S.Container>
  );
}
