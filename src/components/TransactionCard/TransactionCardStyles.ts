import styled, {css} from 'styled-components/native';

interface TypeProps {
  type: 'inputs' | 'exits' | 'total';
}

export const Container = styled.View`
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 16px;
  margin-bottom: 16px;
  flex-direction: row;
`;

export const Sidebar = styled.View<TypeProps>`
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
  width: 100%;
`;

export const Header = styled.View``;

export const Transaction = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text};
  margin-top: 8px;
`;

export const Body = styled.View`
  margin: 8px 0;
`;

export const Amount = styled.Text<TypeProps>`
  font-size: 24px;
  font-weight: bold;
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

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.text};
`;

export const TransactionDate = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.text};
`;
