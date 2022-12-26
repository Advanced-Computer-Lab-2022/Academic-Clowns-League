import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from "./App";


import { ProSidebarProvider } from 'react-pro-sidebar';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
    <App />
    </ProSidebarProvider>
  </React.StrictMode>
);
