import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Main />
  </Router>
);
