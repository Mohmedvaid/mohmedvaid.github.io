// frontend/src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/stalinist-one";
import "@fontsource/silkscreen";

const root = ReactDOM.createRoot(document.getElementById("root"));

// NOTE: strict mode makes double requests should not happen in prod build
root.render(
  // <React.StrictMode>
  <HashRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </HashRouter>
  // </React.StrictMode>
);
