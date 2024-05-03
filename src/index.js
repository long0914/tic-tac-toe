import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Board from "./App"; //can name anything

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Board/>
  </StrictMode>
);