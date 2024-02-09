import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import * as S from './FillButtonStyles';
import {IFillButtonProps} from './utils/types';

export function FillButton({
  text,
  color,
  disabled,
  loading,
  ...rest
}: IFillButtonProps & TouchableOpacityProps) {
  return (
    <S.Container {...rest} loading={loading} disabled={disabled}>
      {loading ? <S.Loading color={color} /> : <S.Text>{text}</S.Text>}
    </S.Container>
  );
}
