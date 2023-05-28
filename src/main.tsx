import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';
import { Preloader } from './components/preloader/Preloader';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={<Preloader />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
