import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import * as Icon from 'phosphor-react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import SwitchSelector from 'react-native-switch-selector';
import {useTheme} from 'styled-components';
import {HomeCard, TransactionCard} from '../../components';
import {IHomeCard} from '../../components/HomeCard/utils/types';
import * as S from './HomeStyles';
import {setSwitchProps, switchOptions} from './utils';

export function Home() {
  const theme = useTheme();
  const [switchValue, setSwitchValue] = useState(switchOptions[0].value);
  const [currentPage, setCurrentPage] = useState(0);
  const navigation = useNavigation<DrawerNavigationProp<any>>();

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
  const width = Dimensions.get('window').width;

  return (
    <S.Container>
      <S.Header>
        <S.DrawerMenuButton onPress={() => navigation.openDrawer()}>
          <Icon.List size={24} color={theme.colors.text} weight="bold" />
        </S.DrawerMenuButton>
        <S.GreetingContainer>
          <S.GreetingText>Olá,</S.GreetingText>
          <S.UserName>Bem-vindo ao Cash Compass</S.UserName>
        </S.GreetingContainer>
      </S.Header>
      <S.Content>
        <S.CardsContainer>
          <Carousel
            width={width}
            height={120}
            loop={false}
            data={data as IHomeCard[]}
            renderItem={({item}) => <HomeCard {...item} />}
            onScrollEnd={index => setCurrentPage(index)}
          />
          <S.PaginationContainer>
            {data.map((_, index) => {
              return (
                <S.PaginationDot
                  key={String(index)}
                  active={index === currentPage}
                />
              );
            })}
          </S.PaginationContainer>
        </S.CardsContainer>

        <S.SwitchContainer>
          <SwitchSelector
            {...switchProps}
            {...switchStyleOptions}
            backgroundColor={theme.colors.background}
          />
        </S.SwitchContainer>

        <S.TransactionsContainer>
          <TransactionCard type="inputs" />
        </S.TransactionsContainer>
      </S.Content>
    </S.Container>
  );
}
