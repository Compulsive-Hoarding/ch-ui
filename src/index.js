import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import userService from "./services/UserService";
import httpService from "./services/HttpService";

const root = ReactDOM.createRoot(document.getElementById('root'));
userService.initKeycloak(() => root.render(<App />));
httpService.configure();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
