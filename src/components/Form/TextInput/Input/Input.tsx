import React from 'react';
import {FieldValues, UseControllerProps} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import * as S from './InputStyles';

export function Input({
  errorMessage,
  label,
  ...textInputProps
}: UseControllerProps<FieldValues> &
  TextInputProps & {errorMessage?: string; label?: string}) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input {...textInputProps} />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.Container>
  );
}
