import React from 'react';
import * as S from './TransactionCardStyles';
import {TypeProps} from './utils/types';

export function TransactionCard({type}: TypeProps) {
  return (
    <S.Container>
      <S.Sidebar type={type} />
      <S.Content>
        <S.Header>
          <S.Transaction>Salário</S.Transaction>
        </S.Header>
        <S.Body>
          <S.Amount type={type}>R$ 5000,00</S.Amount>
        </S.Body>
        <S.Footer>
          <S.Category>Salário</S.Category>
          <S.TransactionDate>12/04/2021</S.TransactionDate>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
}
