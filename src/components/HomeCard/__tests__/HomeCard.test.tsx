import {describe, expect, it} from '@jest/globals';
import {render} from '@testing-library/react-native';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {darkTheme} from '../../../theme/darkTheme';
import {lightTheme} from '../../../theme/lightTheme';
import {storage} from '../../../utils';
import {HomeCard} from '../HomeCard';

const isDarkTheme = storage.getBoolean('isDarkTheme');

describe('HomeCard', () => {
  it('if passed props show the props and if currencyDolar icon is showing ', () => {
    const {getByText, getByTestId} = render(
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <HomeCard
          amount={'1000'}
          title={'Total'}
          lastTransaction={new Date()}
          type={'total'}
          id={1}
        />
      </ThemeProvider>,
    );

    expect(getByTestId('currencyDolarIcon')).toBeTruthy();
    expect(getByText('Total')).toBeTruthy();
  });

  it('if passed props show the props and if currencyDolar icon is showing ', () => {
    const {getByText} = render(
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <HomeCard
          amount={null}
          title={'SAÍDAS'}
          lastTransaction={null}
          type={'exits'}
          id={2}
        />
      </ThemeProvider>,
    );

    expect(getByText('SAÍDAS')).toBeTruthy();
  });

  it('if passed props show the props and if currencyDolar icon is showing ', () => {
    const {getByText} = render(
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <HomeCard
          amount={'1000'}
          title={'Balanço'}
          lastTransaction={new Date()}
          type={'inputs'}
          id={1}
        />
      </ThemeProvider>,
    );

    expect(getByText('Balanço')).toBeTruthy();
  });
});
