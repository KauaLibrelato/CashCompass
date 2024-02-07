import styled from 'styled-components/native';
import {fonts} from '../../theme/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DrawerMenuButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: 8px;
  margin-left: -8px;
`;

export const Photo = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 16px;
`;

export const GreetingContainer = styled.View`
  margin-left: 8px;
`;

export const GreetingText = styled.Text`
  font-size: 14px;
  font-family: ${fonts.regular};
  color: ${({theme}) => theme.colors.text};
`;

export const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

export const Content = styled.View`
  margin-top: 24px;
`;

export const CardsContainer = styled.View``;

export const PaginationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PaginationDot = styled.View<{active?: boolean}>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({theme, active}) =>
    active ? theme.colors.primary : theme.colors.text};
  margin-right: 8px;
`;

export const SwitchContainer = styled.View`
  margin: 24px 0;
`;

export const TransactionsContainer = styled.View``;
