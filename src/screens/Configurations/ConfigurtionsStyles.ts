import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {fonts} from '../../theme/fonts';

export const Container = styled(Animated.View)`
  flex: 1;
  padding: 16px;
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

export const UserName = styled(Animated.Text)`
  font-size: 20px;
  font-weight: bold;
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

export const ThemeSelectorTextMode = styled(Animated.Text)`
  font-size: 16px;
  font-family: ${fonts.regular};
`;

export const ThemeSelectorTextModeName = styled(Animated.Text)`
  font-size: 16px;
  font-weight: bold;
  margin-left: 4px;
`;
