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
  font-family: ${fonts.bold};
  color: ${({theme}) => theme.colors.text};
`;

export const Content = styled.View`
  margin-top: 24px;
`;

export const CardsContainer = styled.View``;

export const SwitchContainer = styled.View`
  margin: 24px 0;
`;

export const TransactionsContainer = styled.View``;
