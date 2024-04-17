import React, { useState, useEffect } from "react";
import Header from "../Header";
import Items from "../Items";
import "./index.css";

function Home() {
  const [data, setApiData] = useState([]);

  const fetchUserApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const fetchedData = await response.json();
    setApiData(fetchedData);
  };

  useEffect(() => {
    fetchUserApi();
  }, []);

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <ul className="ul-container">
        {data.map((each) => (
          <Items key={each.id} userDetails={each} />
        ))}
      </ul>
    </div>
  );
}
export default Home;
