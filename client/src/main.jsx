import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {  } from "@react-oauth/google";



console.log(import.meta.env.VITE_CLIENT_ID);
const config = {
  googleClientId: import.meta.env.VITE_CLIENT_ID,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);