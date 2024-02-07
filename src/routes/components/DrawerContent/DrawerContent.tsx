import {DrawerItemList} from '@react-navigation/drawer';
import React from 'react';
import * as S from './DrawerContentStyles';

export function DrawerContent(props) {
  return (
    <S.Container>
      <DrawerItemList {...props} />
    </S.Container>
  );
}
