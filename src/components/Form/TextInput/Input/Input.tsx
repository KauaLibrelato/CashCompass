import React from 'react';
import {FieldValues, UseControllerProps} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components';
import * as S from './InputStyles';

export function Input({
  errorMessage,
  label,
  ...textInputProps
}: UseControllerProps<FieldValues> &
  TextInputProps & {errorMessage?: string; label?: string}) {
  const theme = useTheme();
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.Input {...textInputProps} placeholderTextColor={theme.colors.border} />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
}
