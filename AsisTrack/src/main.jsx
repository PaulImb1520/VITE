import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CustomProvider } from "rsuite";
import { BrowserRouter } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CustomProvider theme="dark">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CustomProvider>
);
