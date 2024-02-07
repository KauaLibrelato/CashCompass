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

export const Body = styled.View``;

export const InputContainer = styled.View``;
