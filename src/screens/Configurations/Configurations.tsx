import React, {useContext, useState} from 'react';
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

  return (
    <S.Container>
      <S.Header>
        <S.Photo source={{uri: 'https://github.com/KauaLibrelato.png'}} />
        <S.NameContainer>
          <S.UserName>Kauã Librelato</S.UserName>
        </S.NameContainer>
      </S.Header>
      <S.Content>
        <S.ThemeSelectorContainer>
          <S.ThemeSelectorTexts>
            <S.ThemeSelectorTextMode>Modo</S.ThemeSelectorTextMode>
            <S.ThemeSelectorTextModeName>Escuro</S.ThemeSelectorTextModeName>
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
  );
}
