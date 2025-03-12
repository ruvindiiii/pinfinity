import { BrowserRouter, Routes, Route } from "react-router";
import { StrictMode } from "react";
import { useState } from "react";
import Search from "./pages/Search.tsx";
import Login from "./pages/Login.tsx";

import "./output.css";

function App() {
  const [keyWord, setKeyWord] = useState<string>("Asia");

  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Search searchWord={keyWord} setSearchWord={setKeyWord} />
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </>
  );
}

export default App;
