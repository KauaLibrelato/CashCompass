import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useTheme} from 'styled-components';
import {ThemeContext} from '../../../../theme/theme';
import {ISelectProps} from '../utils/types';
import * as S from './PickerSelectStyles';

export function PickerSelect({
  label,
  items,
  onChange,
  onBlur,
  value,
  errorMessage,
}: ISelectProps) {
  const styledTheme = useTheme();
  const {theme} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    pickerInput: {
      fontSize: 16,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1,
      marginVertical: 4,
      borderColor: errorMessage
        ? styledTheme.colors.error
        : theme === 'light'
        ? 'rgba(0, 0, 0, 0.1)'
        : 'rgba(255, 255, 255, 0.1)',
      borderRadius: 16,
      color: `${
        errorMessage
          ? styledTheme.colors.error
          : theme === 'light'
          ? '#2B2B2B'
          : '#FFFFFF'
      }`,
    },
  });

  const pickerStyles = {
    inputIOS: styles.pickerInput,
    inputAndroid: styles.pickerInput,
    placeholder: {
      color: errorMessage
        ? styledTheme.colors.error
        : styledTheme.colors.border,
    },
  };

  return (
    <S.Container>
      {label && <S.Label errorMessage={!!errorMessage}>{label}</S.Label>}
      <RNPickerSelect
        onValueChange={onChange}
        items={items}
        onClose={onBlur}
        value={value}
        useNativeAndroidPickerStyle={false}
        style={pickerStyles}
        placeholder={{
          label: 'Selecione uma opção',
          value: null,
        }}
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
}
