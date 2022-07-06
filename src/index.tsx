import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { I18nextProvider } from 'react-i18next';
import './index.css';
import { client } from './apollo';
import store from './core/store';
import Routes from './core/router';
import sagaMiddleware from './core/sagas/sagaMiddleware';
import rootSaga from './core/sagas';
import reportWebVitals from './reportWebVitals';
import i18next from './i18next';

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <ApolloProvider client={client}>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <React.StrictMode>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </React.StrictMode>
      </Provider>
    </I18nextProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
