import React, {useContext, useEffect, useState} from 'react';
import {Animated, StatusBar} from 'react-native';
import ToggleButton from 'react-native-toggle-element';
import {useTheme} from 'styled-components';
import {ThemeContext, ThemeType} from '../../theme/theme';
import * as S from './ConfigurtionsStyles';
import {toggleButtonProps} from './utils/constants';
import {handleToggle} from './utils/functions';

export function Configurations() {
  const styledTheme = useTheme();
  const {toggleTheme, theme} = useContext(ThemeContext);
  const [toggleValue, setToggleValue] = useState(theme === ThemeType.dark);
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

  const textColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#121212', '#FFFFFF'],
  });

  return (
    <>
      <StatusBar
        animated
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={theme === 'light' ? '#FFFFFF' : '#121212'}
      />
      <S.Container style={{backgroundColor}}>
        <S.Header>
          <S.NameContainer>
            <S.UserName style={{color: textColor}}>Configurações</S.UserName>
          </S.NameContainer>
        </S.Header>
        <S.Content>
          <S.ThemeSelectorContainer>
            <S.ThemeSelectorTexts>
              <S.ThemeSelectorTextMode style={{color: textColor}}>
                Modo
              </S.ThemeSelectorTextMode>
              <S.ThemeSelectorTextModeName style={{color: textColor}}>
                Escuro
              </S.ThemeSelectorTextModeName>
            </S.ThemeSelectorTexts>
            <ToggleButton
              value={toggleValue}
              onPress={() =>
                handleToggle(toggleValue, setToggleValue, toggleTheme)
              }
              {...toggleButtonProps(styledTheme)}
            />
          </S.ThemeSelectorContainer>
        </S.Content>
      </S.Container>
    </>
  );
}
