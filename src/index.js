import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { StoreProvider } from './Store';
const container = document.getElementById('root');
render(
  <StoreProvider>
    <App></App>
  </StoreProvider>,
  container
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
