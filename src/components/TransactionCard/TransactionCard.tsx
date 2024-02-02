import React from 'react';
import * as S from './TransactionCardStyles';

export function TransactionCard() {
  return (
    <S.Container>
      <S.Sidebar type="inputs" />
      <S.Content>
        <S.Header>
          <S.Transaction>Salário</S.Transaction>
        </S.Header>
        <S.Body>
          <S.Amount type="inputs">R$ 5000,00</S.Amount>
        </S.Body>
        <S.Footer>
          <S.Category>Salário</S.Category>
          <S.TransactionDate>12/04/2021</S.TransactionDate>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
}
