import React from "react";
import ReactDOM from "react-dom/client";
import "././styles/App.css";
import { RootApp } from "./AppProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
);
