import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Routes from './routes';
import {ThemeProvider} from './theme/theme';
import {mmkvStorage} from './utils/storage/mmkvStorage';
import {initializeStorage} from './utils/storage/storageService';

export default function App() {
  initializeStorage(mmkvStorage);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
