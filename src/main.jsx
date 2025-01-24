import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Gallery from "./Gallery.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/hemlata-portfolio">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
);
