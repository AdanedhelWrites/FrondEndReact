// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import { createRoot } from "react-dom/client"

import { App } from "./App";
import { StrictMode } from "react";

const rootEl = document.getElementById("root");

const root = createRoot(rootEl);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

//Fonksiyonun baş harfi büyükse Component

//Fonksiyon baş harf büyük değilse Component değil
// function app() {

// }