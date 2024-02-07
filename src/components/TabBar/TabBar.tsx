import React, {useContext, useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {ThemeContext} from '../../theme/theme';
import * as S from './TabBarStyles';
import {TabBarButton} from './utils';
import {ITabBar} from './utils/types';

export function TabBar({state, descriptors, navigation}: ITabBar) {
  const {theme} = useContext(ThemeContext);
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: theme === 'light' ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [theme]);

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', '#121212'],
  });

  return (
    <S.Container>
      <Animated.View
        style={[
          S.viewStyles.contanerView,
          {
            backgroundColor,
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
      </Animated.View>
    </S.Container>
  );
}
