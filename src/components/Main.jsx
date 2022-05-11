import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./index";

const Main = () => {
  return (
    <div className="main-page">
      <header>
        <NavBar />
        <h1 className="main-title">Hello Main</h1>
      </header>
      <div className="main-container">
        <Routes>
          {/* <Route path={"/"} element={} />
          <Route path={"/somewhereelse"} element={} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Main;
