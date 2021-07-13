import React, { useEffect, useState } from "react";
import menuItem from "../kebaab.jpg";

export default function MainContent({ item }) {
  const [catalogues, setCalalogues] = useState([]);

  useEffect(() => {
    getCatalogues();
  }, [catalogues.length]);

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

  const listItems = catalogues.map((item) => (
    <div className="product" key={item._id}>
      <div className="product-content">
        <div className="product-img">
          <img src={menuItem} alt={item.name} />
        </div>
        <div className="product-btns">
          <button type="button" className="btn-cart">
            {" "}
            add to cart
            <span>
              <i className="fas fa-plus"></i>
            </span>
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-info-top">
          <h2 className="sm-title">{item.description}</h2>
          <div className="rating">
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="far fa-star"></i>
            </span>
          </div>
        </div>
        <a href="#" className="product-name">
          {item.name}
        </a>
        <p className="product-price">₹ {item.price}</p>
        <p className="product-price">₹ {item.price}</p>
      </div>

      <div className="off-info">
        <h2 className="sm-title">25% off</h2>
      </div>
    </div>
  ));
  return (
    <div class="products">
      <div class="container">
        <h1 class="lg-title">Cafe Coffee Day With Offers</h1>
        <p class="text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quos sit consectetur, ipsa voluptatem vitae necessitatibus dicta
          veniam, optio, possimus assumenda laudantium. Temporibus, quis cum.
        </p>

        <div class="product-items">{listItems}</div>
      </div>
    </div>
  );
}
