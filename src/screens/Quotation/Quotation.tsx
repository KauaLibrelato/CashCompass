import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import * as Icon from 'phosphor-react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {useTheme} from 'styled-components';
import {ControlledTextInput} from '../../components/Form/TextInput/ControlledTextInput';
import * as S from './QuotationStyles';

export function Quotation() {
  const {
    register,
    control,
    formState: {errors},
  } = useForm({defaultValues: {teste: ''}});
  const theme = useTheme();
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  return (
    <S.Container>
      <S.Header>
        <S.DrawerMenuButton onPress={() => navigation.openDrawer()}>
          <Icon.List size={24} color={theme.colors.text} weight="bold" />
        </S.DrawerMenuButton>
        <S.Title>Conversão de Moedas</S.Title>
      </S.Header>
      <S.Body>
        <S.InputContainer>
          <ControlledTextInput
            label="Teste"
            control={control}
            name="teste"
            placeholder="Valor a ser convertido"
            keyboardType="numeric"
            placeholderTextColor={theme.colors.text}
          />
        </S.InputContainer>
      </S.Body>
    </S.Container>
  );
}
