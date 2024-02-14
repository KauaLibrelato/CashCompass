import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import * as Icon from 'phosphor-react-native';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {useTheme} from 'styled-components';
import {
  ControlledSelect,
  ControlledTextInput,
  FillButton,
} from '../../components';
import * as S from './QuotationStyles';
import {Coins, fetchCalculation} from './utils';

export function Quotation() {
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();
  const {
    control,
    reset,
    formState: {errors},
    handleSubmit,
  } = useForm({
    defaultValues: {value: '', of: '', to: ''},
  });
  const theme = useTheme();
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  const handleCalculate = handleSubmit(async data => {
    if (Object.keys(errors).length === 0) {
      const calculatedResult = await fetchCalculation(
        data.value,
        data.of,
        data.to,
        setLoading,
      );
      setResult(calculatedResult);
    }
  });

  useEffect(() => {
    if (isFocused) {
      reset();
    }
  }, [isFocused]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              label="Valor"
              control={control}
              name="value"
              placeholder="Valor a ser convertido"
              keyboardType="numeric"
              placeholderTextColor={theme.colors.text}
              rules={{required: 'Campo obrigatório'}}
            />
          </S.InputContainer>

          <S.InputContainer>
            <ControlledSelect
              name="of"
              control={control}
              items={Coins}
              label="Converter de"
              rules={{required: 'Campo obrigatório'}}
            />
          </S.InputContainer>

          <S.InputContainer>
            <ControlledSelect
              name="to"
              control={control}
              items={Coins}
              label="Para"
              rules={{required: 'Campo obrigatório'}}
            />
          </S.InputContainer>

          <S.ButtonContainer>
            <FillButton
              text="Calcular"
              onPress={handleCalculate}
              loading={loading}
              disabled={loading}
            />
          </S.ButtonContainer>
        </S.Body>

        <S.Footer>
          <S.Line>
            <S.Description>Resultado:</S.Description>
            {result && !loading && (
              <S.ValueText>{parseFloat(result.toFixed(4))}</S.ValueText>
            )}
          </S.Line>
        </S.Footer>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
