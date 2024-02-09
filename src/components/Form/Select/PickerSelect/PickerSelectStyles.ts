import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.colors.text};
`;


export const ErrorMessage = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.colors.error};
`;
