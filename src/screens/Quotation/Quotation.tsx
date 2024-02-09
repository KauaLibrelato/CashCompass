import {zodResolver} from '@hookform/resolvers/zod';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import * as Icon from 'phosphor-react-native';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {useTheme} from 'styled-components';
import z from 'zod';
import {
  ControlledSelect,
  ControlledTextInput,
  FillButton,
} from '../../components';
import * as S from './QuotationStyles';
import {Coins} from './utils/constants';
import {fetchCalculation} from './utils/functions';

export function Quotation() {
  const validationSchema = z.object({
    value: z.string({
      required_error: 'Valor é obrigatório',
      invalid_type_error: 'Valor é obrigatório',
    }),
    of: z.string({
      required_error: 'Moeda de origem é obrigatória',
      invalid_type_error: 'Moeda de origem é obrigatória',
    }),
    to: z.string({
      required_error: 'Moeda de destino é obrigatória',
      invalid_type_error: 'Moeda de destino é obrigatória',
    }),
  });

  type TFormData = z.infer<typeof validationSchema>;
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    control,
    reset,
    formState: {errors},
    handleSubmit,
  } = useForm<TFormData>({
    defaultValues: {value: '', of: '', to: ''},
    resolver: zodResolver(validationSchema),
  });
  const theme = useTheme();
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

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
            />
          </S.InputContainer>

          <S.InputContainer>
            <ControlledSelect
              name="of"
              control={control}
              items={Coins}
              label="Converter de"
            />
          </S.InputContainer>

          <S.InputContainer>
            <ControlledSelect
              name="to"
              control={control}
              items={Coins}
              label="Para"
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
              <S.ValueText>
                {result ? String(result).slice(0, 4) : '00.00'}
              </S.ValueText>
            )}
          </S.Line>
        </S.Footer>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
