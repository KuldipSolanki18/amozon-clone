import React from "react";
import "../css/Home.css";
import logo192 from "../back_image.jpg";
import alexa from "../alexa.jpg";
import mixer from "../mixer.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={logo192} alt="" />
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_AC_SY400.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer"
            price={239.0}
            rating={4}
            image={mixer}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN Smart Watch"
            price={49.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="4903850"
            title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={alexa}
          />
          <Product
            id="4903850"
            title="New Apple iPad Pro"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
