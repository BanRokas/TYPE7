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

  const tableData = [
    {
      id : 123,
      number_of_people: 5,
      price: 64
    },{
      id : 124,
      number_of_people: 3,
      price: 20
    },{
      id : 125,
      number_of_people: 1,
      price: 31
    }
  ]

  return (
    <>
      <Nav
        place="top"
        data = {links}
      />
      <Routes>
        <Route path="/" element={
          <Home 
            table = {tableData}
          />
        } />
        <Route path="/add" element={
          <Add />
        } />
      </Routes>
    </>
  );
}

export default App;
