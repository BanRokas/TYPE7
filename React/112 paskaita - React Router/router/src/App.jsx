import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import Add from "./components/pages/Add";

const App = () => {
  
  const links = [
    {
      title : "Home",
      link : '/'
    },
    {
      title : "Add",
      link : '/add'
    }
  ];

  return (
    <>
      <Nav 
        data={links}
      />
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/add" element={
          <Add />
        } />
      </Routes>
    </>
  );
}

export default App;
