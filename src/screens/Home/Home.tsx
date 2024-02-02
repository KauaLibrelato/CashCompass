import React, {useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {useTheme} from 'styled-components';
import {HomeCard, TransactionCard} from '../../components';
import {IHomeCard} from '../../components/HomeCard/utils/types';
import * as S from './HomeStyles';
import {setSwitchProps, switchOptions} from './utils';

export function Home() {
  const theme = useTheme();
  const [switchValue, setSwitchValue] = useState(switchOptions[0].value);

  const data = [
    {
      id: 1,
      title: 'TOTAL',
      amount: '10000',
      lastTransaction: new Date(),
      type: 'total',
    },
    {
      id: 2,
      title: 'ENTRADAS',
      amount: '10000',
      lastTransaction: new Date(),
      type: 'inputs',
    },
    {
      id: 3,
      title: 'SAÍDAS',
      amount: null,
      lastTransaction: null,
      type: 'exits',
    },
  ];

  const switchProps = setSwitchProps({
    switchValue,
    setSwitchValue,
  });

  const switchStyleOptions = {
    selectedColor: theme.colors.background,
    textColor: theme.colors.text,
    buttonColor: theme.colors.primary,
  };

  const renderItem: ListRenderItem<IHomeCard> = ({item}) => {
    return <HomeCard {...item} />;
  };

  return (
    <S.Container>
      <S.Header>
        <S.Photo source={{uri: 'https://github.com/KauaLibrelato.png'}} />
        <S.GreetingContainer>
          <S.GreetingText>Olá,</S.GreetingText>
          <S.UserName>Kauã Librelato</S.UserName>
        </S.GreetingContainer>
      </S.Header>
      <S.Content>
        <S.CardsContainer>
          <FlatList
            data={data as IHomeCard[]}
            keyExtractor={item => String(item.id)}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </S.CardsContainer>

        <S.SwitchContainer>
          <SwitchSelector
            {...switchProps}
            {...switchStyleOptions}
            backgroundColor={theme.colors.background}
          />
        </S.SwitchContainer>

        <S.TransactionsContainer>
          <TransactionCard />
        </S.TransactionsContainer>
      </S.Content>
    </S.Container>
  );
}
