import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';
import Routes from './routes';
import {darkTheme} from './theme/darkTheme';
import {lightTheme} from './theme/lightTheme';
import {storage} from './utils';

export default function App() {
  const isDarkTheme = storage.getBoolean('isDarkTheme');
  if (isDarkTheme == null) {
    storage.set('isDarkTheme', false);
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <Routes />
        </ThemeProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
