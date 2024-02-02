import {Platform, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  margin-bottom: ${Platform.OS === 'ios' ? 38 : 24}px;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0;
  background-color: ${({theme}) => theme.colors.background};
  flex-direction: row;
  border-radius: 99px;
  gap: 8px;
  border: 1px solid #000;
`;

export const TabButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  padding: 4px;
  align-items: center;
`;

export const InsideButtonContainer = styled.View<{isFocused?: boolean}>`
  padding: 8px;
  border-radius: 100px;
  background-color: ${(props: {isFocused?: boolean}) =>
    props?.isFocused ? ({theme}) => theme.colors.primaryLight : 'transparent'};
`;

export const viewStyles = StyleSheet.create({
  contanerView: {
    marginBottom: Platform.OS === 'ios' ? 38 : 24,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: `#fff`,
    flexDirection: 'row',
    borderRadius: 99,
    gap: 8,
    elevation: 5,
    shadowColor: `#1565C0`,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
  },
});
