import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigation } from '@/routes/Navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './store/store';

import './App.css';

const queryClient = new QueryClient();
const persistor = persistStore(store);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </PersistGate>
    </QueryClientProvider>
  );
}

export default App;
