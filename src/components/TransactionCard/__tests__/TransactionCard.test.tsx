import {describe, it} from '@jest/globals';
import {render} from '@testing-library/react-native';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {darkTheme} from '../../../theme/darkTheme';
import {lightTheme} from '../../../theme/lightTheme';
import {storage} from '../../../utils';
import {TransactionCard} from '../TransactionCard';

const isDarkTheme = storage.getBoolean('isDarkTheme');

describe('TransactionCard', () => {
  describe('if passed x props, show the component', () => {
    it('if passed inputs type props, show the component', () => {
      render(
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <TransactionCard type="inputs" />
        </ThemeProvider>,
      );
    });

    it('if passed exits type props, show the component', () => {
      render(
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <TransactionCard type="exits" />
        </ThemeProvider>,
      );
    });
  });
});
