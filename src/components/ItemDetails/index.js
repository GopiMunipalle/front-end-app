import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import "./index.css";

function ItemDetails() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const fetchItemData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const dataItem = await response.json();
    setItem(dataItem);
    console.log(dataItem);
  };

  useEffect(() => {
    fetchItemData();
  }, [id]);

  const { category, image, description, price, title } = item;
  const ratingItem = item.rating || {};
  return (
    <div className="item-details-container">
      <Header />
      <h2>product items</h2>
      <div className="items-view">
        <h2>{title}</h2>
        <p>{category}</p>
        <img className="image-item" src={image} alt={title} />
        <p>{description}</p>
        <h3>Price: {price}</h3>
        <div>
          <p>Count: {ratingItem.count}</p>
          <p>Rating: {ratingItem.rate}</p>
        </div>
        <button type="button" className="button">
          Buy
        </button>
      </div>
    </div>
  );
}

export default ItemDetails;
