import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { WishListProvider } from './context/wish-context';
import { LoginProvider } from "./context/login-context";
import { FilterProvider } from './context/filter-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/*React won't know how to navigate between pages or track the history of the application.*/}
      <WishListProvider>
        <FilterProvider>
          <LoginProvider>
          <App />
          </LoginProvider>
          </FilterProvider>
      </WishListProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
