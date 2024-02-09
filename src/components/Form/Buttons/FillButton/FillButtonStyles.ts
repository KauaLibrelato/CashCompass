import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<{disabled?: boolean; color?: string; loading?: boolean}>`
  ${props =>
    props.loading
      ? css`
          width: 10%;
        `
      : css`
          width: 100%;
        `}
  padding: 8px 16px;
  align-items: center;
  justify-content: center;

  ${props =>
    props.loading
      ? css`
          border-radius: 32px;
        `
      : css`
          border-radius: 16px;
        `}
  ${props =>
    props.disabled &&
    css`
      background-color: ${({theme}) => theme.colors.disabled};
    `}
  ${props =>
    props.color
      ? css`
          background-color: color;
        `
      : css`
          background-color: ${({theme}) => theme.colors.primary};
        `}
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.background};
`;

export const Loading = styled.ActivityIndicator.attrs(props => ({
  size: 'small',
  color: props.color || '#FFF',
}))``;
