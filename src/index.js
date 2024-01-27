import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// #region declare firebase app and analitics
const firebaseConfig = {
  apiKey: "AIzaSyDfBXrIFsDiwYZn72PpCYKmo4veqhlliAU",
  authDomain: "sounboard-89a7d.firebaseapp.com",
  projectId: "sounboard-89a7d",
  storageBucket: "sounboard-89a7d.appspot.com",
  messagingSenderId: "465433159996",
  appId: "1:465433159996:web:5ba77137ab37abb1c29639",
  measurementId: "G-48Z285SZF6"
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
// #endregion

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter> {/* browser router react-router-dom */}

      <App /> {/* app */}

    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
