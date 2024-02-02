import {format} from 'date-fns';
import * as Icon from 'phosphor-react-native';
import React from 'react';
import {useTheme} from 'styled-components/native';
import * as S from './HomeCardStyles';
import {IHomeCard} from './utils/types';

export function HomeCard({amount, title, lastTransaction, type}: IHomeCard) {
  const theme = useTheme();

  function getColorByType(type: string) {
    switch (type) {
      case 'total':
        return theme.colors.primary;
      case 'inputs':
        return theme.colors.success;
      case 'exits':
        return theme.colors.error;
      default:
        return theme.colors.text;
    }
  }
  return (
    <S.Container>
      <S.SideBar type={type} />
      <S.Content>
        <S.HeaderContainer>
          <S.Type type={type}>{title}</S.Type>
          <S.IconContainer>
            <Icon.CurrencyCircleDollar
              size={32}
              weight="regular"
              color={getColorByType(type)}
            />
          </S.IconContainer>
        </S.HeaderContainer>

        <S.Amount type={type}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Number(amount ?? 0))}
        </S.Amount>

        <S.FooterContainer>
          <S.LastTransaction>
            {lastTransaction
              ? `Última atualização: ${format(
                  new Date(lastTransaction),
                  'dd/MM/yyyy - HH:mm',
                )}`
              : `Sem atualizações`}
          </S.LastTransaction>
        </S.FooterContainer>
      </S.Content>
    </S.Container>
  );
}
