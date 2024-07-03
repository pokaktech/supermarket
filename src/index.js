// index.js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { OrderProvider } from "./components/OrderSlice";


ReactDOM.render(
  <OrderProvider>
    <App />
  </OrderProvider>,
  document.getElementById('root')
);
