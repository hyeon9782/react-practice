import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ModalsProvider from "./provider/ModalsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </React.StrictMode>
);
