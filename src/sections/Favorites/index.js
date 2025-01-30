import React from "react";
import "src/sections/Favorites/style.css";
import "src/style/Global.css";
import imgHazelnut from "src/assets/image 22.webp";
import imgChiken from "src/assets/image 30 (1).webp";
import imgPinky from "src/assets/image 27.webp";
import imgVektor from "src/assets/Vector2.png";
import Fade from "react-reveal/Fade";

function Favorites() {
  const listPavorites = [
    {
      image: imgHazelnut,
      title: "Hazelnut Latte",
      desc: [
        "HazelnutSyrup",
        "Wanilla Whipped Cream",
        "Ice / Hot",
        "Sliced Banana on Top",
      ],
      price: "25.000",
    },
    {
      image: imgPinky,
      title: "Pinky Promise",
      desc: [
        "1 Shot of Coffee",
        "Vanilla Whipped Cream",
        "Chocolate Biscuits",
        "Strawberry Syrup",
        "Sliced strawberry on Top",
      ],
      price: "30.000",
    },
    {
      image: imgChiken,
      title: "Chicken Wings",
      desc: [
        "Wings",
        "Drum Sticks",
        "Mayonaise and Lemon",
        "Hot Fried",
        "Secret Recipe",
        "Buy 1 Get 1 only for Dine in",
      ],
      price: "40.000",
    },
  ];

  return (
    <div>
      <section className="favorite">
        <div className="container">
          <div className="head mb-10 md:mb-0">
            <Fade bottom>
              <h2 className="title text-center">Here is People’s Favorite</h2>
            </Fade>
            <Fade bottom delay={200}>
              <p>
                Let’s choose and have a bit taste of poeple’s favorite. It might
                be yours too!
              </p>
            </Fade>
          </div>
          <div className="box-variant flex flex-col md:flex-row">
            {listPavorites.map((item, i) => (
              <Fade bottom delay={400 + 150 * i}>
                <div className="card" data-card="1" key={i}>
                  <img src={item.image} alt="image22" />
                  <h4>{item.title}</h4>
                  <div className="description">
                    {item.desc.map((desc, idx) => (
                      <div className="text" key={`${idx}-${i}`}>
                        <img src={imgVektor} alt="Vector2" />
                        <p>{desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-col gap-3">
                    <h3 className="price">IDR {item.price}</h3>
                    <button>Order Now</button>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Favorites;
