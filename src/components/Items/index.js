import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./index.css";

function Items(props) {
  const [quantity, setQuantity] = useState(0);

  return (
    <CartContext.Consumer>
      {(value) => {
        const { addCart } = value;
        const { userDetails } = props;
        const { category, image, description, price, title, id } = userDetails;
        const desc = description.slice(0, 30);

        const onClickAddToCart = () => {
          addCart({ ...userDetails, quantity });
        };

        return (
          <div className="li-items-container">
            <div className="li-items">
              <h2 className="title">{title}</h2>
              <h3 style={{ fontSize: "12px", fontFamily: "Roboto" }}>
                {category}
              </h3>
              <img className="image-logo" src={image} alt="title" />
              <p>{desc}....</p>
              <p>{price}</p>
              <div className="button-container">
                <Link to={`/Item/${id}`}>
                  <button type="button" className="button">
                    Buy
                  </button>
                </Link>
                <button
                  type="button"
                  className="button"
                  onClick={onClickAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
}
export default Items;
