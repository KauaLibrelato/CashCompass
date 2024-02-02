import styled from 'styled-components/native';
import {fonts} from '../../theme/fonts';

export const Container = styled.View`
  flex: 1;
  padding: 24px 16px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const NameContainer = styled.View`
  margin-top: 8px;
`;

export const UserName = styled.Text`
  font-size: 24px;
  font-family: ${fonts.bold};
  color: ${({theme}) => theme.colors.text};
`;

export const Content = styled.View`
  margin-top: 24px;
`;

export const ThemeSelectorContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeSelectorTexts = styled.View`
  flex-direction: row;
`;

export const ThemeSelectorTextMode = styled.Text`
  font-size: 16px;
  font-family: ${fonts.regular};
  color: ${({theme}) => theme.colors.text};
`;

export const ThemeSelectorTextModeName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
  margin-left: 4px;
`;
