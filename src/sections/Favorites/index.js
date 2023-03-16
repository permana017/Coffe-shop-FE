import React from "react";
import "src/sections/Favorites/style.css"; 
import "src/style/Global.css"
import imgHazelnut from "src/assets/image 22.webp"
import imgChiken from "src/assets/image 30 (1).webp"
import imgPinky from "src/assets/image 27.webp"
import imgVektor from "src/assets/Vector2.png"


function Favorites() {
    return(
        <div>
            <section className="favorite">
            <div className="container">
                <div className="head">
                    <h2 className="title text-center">Here is People’s Favorite</h2>
                    <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
                </div>
                <div className="box-variant">
                    <div className="card" data-card="1">
                        <img src={imgHazelnut} alt="image22"/>
                        <h4>Hazelnut Latte</h4>
                        <div className="description">
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>HazelnutSyrup</p>
                            </div>
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>Wanilla Whipped Cream</p>
                            </div>
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>Ice / Hot</p>
                            </div>
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>Sliced Banana on Top</p>
                            </div>
                        </div>
                        <h3 className="price">IDR 25.000</h3>
                        <button data-card="1">Order Now</button>
                    </div>
                    <div className="card2" data-card="2">
                        <img src={imgPinky} alt="image22"/>
                        <h4>Pinky Promise</h4>
                        <div className="description">
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>1 Shot of Coffee</p>
                            </div>
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>Vanilla Whipped Cream</p>
                            </div>
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>Chocolate Biscuits</p>
                            </div>
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>Strawberry Syrup</p>
                            </div>
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>Sliced strawberry on Top</p>
                            </div>
                        </div>
                        <h3 className="price">IDR 30.000</h3>
                        <button>Order Now</button>
                    </div>
                    <div className="card2" data-card="3">
                        <img src={imgChiken} alt="image22"/>
                        <h4>Chicken Wings</h4>
                        <div className="description">
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>Wings</p>
                            </div>
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>Drum Sticks</p>
                            </div>
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>Mayonaise and Lemon</p>
                            </div>
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>Hot Fried</p>
                            </div>
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>Secret Recipe</p>
                            </div>
                            <div className="text">
                                <img src={imgVektor} alt="Vector2"/>
                                <p>Buy 1 Get 1 only for Dine in</p>
                            </div>
                        </div>
                        <h3 className="price">IDR 40.000</h3>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}


export default Favorites