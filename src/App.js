import React, { useState, useEffect } from "react";
import "./App.css";
import MenuItemCard from "./components/card";

function App() {
  const [catalogues, setCalalogues] = useState([]);

  useEffect(() => {
    getCatalogues();
  }, []);

  const getCatalogues = () => {
    fetch("http://localhost:5000/api/v1/catalogues", {
      method: "GET",
    })
      .then((response) => {
        response.json().then((data) => {
          setCalalogues(data.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="row">
        {catalogues.map((data, i) => (
          <div key={i} className="col">
            <MenuItemCard item={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
