import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import MyRoutes from './Routes';
import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <MyRoutes/>
    <GlobalStyle/>
  </>

);


