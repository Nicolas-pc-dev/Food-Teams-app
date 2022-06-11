import React from "react";
import Principal from "./pages/Principal";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Principal />
    </BrowserRouter>
  );
}

export default App;
