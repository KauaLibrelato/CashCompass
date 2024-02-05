import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';
import {fonts} from '../../theme/fonts';

interface TypeProps {
  type: 'inputs' | 'exits' | 'total';
}

export const Container = styled.View`
  width: ${Dimensions.get('window').width - 32}px;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 16px;
  flex-direction: row;
  margin-right: 16px;
`;

export const SideBar = styled.View<TypeProps>`
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: ${({theme}) => theme.colors.primary};
  ${props =>
    props.type === 'inputs'
      ? css`
          background-color: ${({theme}) => theme.colors.success};
        `
      : props.type === 'exits' &&
        css`
          background-color: ${({theme}) => theme.colors.error};
        `}
  width: 8px;
`;

export const Content = styled.View`
  padding: 8px 16px;
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.View.attrs({
  testID: 'currencyDolarIcon',
})``;

export const Type = styled.Text<TypeProps>`
  font-size: 14px;
  color: ${({theme}) => theme.colors.primary};
  ${props =>
    props.type === 'inputs'
      ? css`
          color: ${({theme}) => theme.colors.success};
        `
      : props.type === 'exits' &&
        css`
          color: ${({theme}) => theme.colors.error};
        `}
`;

export const Amount = styled.Text<TypeProps>`
  font-size: 24px;
  font-weight: bold;
  font-family: ${fonts.bold};
  color: ${({theme}) => theme.colors.success};
  ${props =>
    props.type === 'inputs'
      ? css`
          color: ${({theme}) => theme.colors.success};
        `
      : props.type === 'exits' &&
        css`
          color: ${({theme}) => theme.colors.error};
        `}
`;

export const FooterContainer = styled.View``;

export const LastTransaction = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text};
  margin-top: 8px;
`;
