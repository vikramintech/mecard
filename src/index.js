import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const el = document.querySelector("#root");
const root = createRoot(el);

root.render(<App />);