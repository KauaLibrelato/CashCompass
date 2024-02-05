import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Routes from './routes';
import {ThemeProvider} from './theme/theme';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
