import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Page from "./components/Page.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:domainName" element={<Page />} />
    </Routes>
  </BrowserRouter>
);
