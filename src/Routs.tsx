import { BrowserRouter, Routes, Route } from "react-router";
import { StrictMode } from "react";
import { useState } from "react";

import "./output.css";
import App from "./App.tsx";
import LogIn from "./LogIn.tsx";

function Routs(props) {
  const [keyWord, setKeyWord] = useState<string>("nepal");

  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<App searchWord={keyWord} setSearchWord={setKeyWord} />}
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/" element={<LogIn />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </>
  );
}

export default Routs;
