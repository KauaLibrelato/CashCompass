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
  it('should render TransactionCard component correctly', () => {
    render(
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <TransactionCard />
      </ThemeProvider>,
    );
  });
});
