import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import SearchEngine from "./SearchEngine";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div>
        <h1 class="text-md-center">Weather Search Engine</h1>
        <p class="text-md-center">
          <SearchEngine />
        </p>
      </div>
    </div>
  </StrictMode>
);