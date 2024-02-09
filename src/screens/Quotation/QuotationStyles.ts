import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 16px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
  text-align: center;
`;
export const DrawerMenuButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: 8px;
  margin-left: -8px;
`;

export const Body = styled.View`
  margin-top: 16px;
`;

export const InputContainer = styled.View`
  margin: 4px 0;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const Footer = styled.View`
  margin-top: 16px;
`;

export const Line = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.text};
`;

export const ValueText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
  margin-left: 4px;
`;
