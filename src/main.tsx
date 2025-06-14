import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer
      closeOnClick={true}
      pauseOnHover
      hideProgressBar={false}
      pauseOnFocusLoss={false}
    />
    <App />
  </StrictMode>
);
