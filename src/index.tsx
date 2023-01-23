import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const rootElement: HTMLElement | null = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
