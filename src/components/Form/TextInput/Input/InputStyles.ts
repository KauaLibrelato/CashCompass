import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.colors.text};
`;

export const Input = styled.TextInput`
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 16px;
  color: ${({theme}) => theme.colors.text};
  padding: 8px 16px;
  margin: 4px 0;
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.colors.error};
`;
