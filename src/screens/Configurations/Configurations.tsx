import React, {useState} from 'react';
import ToggleButton from 'react-native-toggle-element';
import {useTheme} from 'styled-components';
import {storage} from '../../utils';
import * as S from './ConfigurtionsStyles';
import {toggleButtonProps} from './utils/constants';
import {handleToggle} from './utils/functions';

export function Configurations() {
  const theme = useTheme();
  const themeValue = storage.getBoolean('isDarkTheme');
  const [toggleValue, setToggleValue] = useState(themeValue ?? false);

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
              handleToggle(toggleValue, setToggleValue)
            }
            {...toggleButtonProps(theme)}
          />
        </S.ThemeSelectorContainer>
      </S.Content>
    </S.Container>
  );
}
