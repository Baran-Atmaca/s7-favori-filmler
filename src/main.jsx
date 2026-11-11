import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

/* react-router-dom@5 paketini kur */
/* Routing kullanmak için gereken react-router wrapperı ile App componentını sar. */

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
