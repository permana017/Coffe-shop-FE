import React from "react";
import "../ReviewCard/style.css"
import "src/style/Global.css"

function ReviewCard() {
    return (
        <div>
            <section className="review-costumer">
                <div className="container">
                    <div className="inner">
                        <div className="text">
                            <h2 className="title tw-500 text-center">Loved by Thousands of Happy Customer</h2>
                            <p className="desc tw-550">These are the stories of our customers who have visited us with great pleasure.</p>
                        </div>
                        <div className="box-card">
                            <div className="card">
                                <div className="navbar-card">
                                    <div className="profile">
                                        <img src={require("src/assets/Ellipse 175.webp")} alt="Ellipse"/>
                                        <div>
                                            <h5>Viezh Robert</h5>
                                            <p>Warsaw, Poland</p>
                                        </div>
                                    </div>
                                    <div className="ratting">
                                        <p>4.5</p>
                                        <img src={require("src/assets/star.png")}  alt="star"/>
                                    </div>
                                </div>
                                <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and
                                    the coffee and meals tho. I like it here!! Very recommended!</p>
                            </div>
                            <div className="card">
                                <div className="navbar-card">
                                    <div className="profile">
                                        <img src={require("src/assets/Ellipse-176.webp")} alt="Ellipse"/>
                                        <div>
                                            <h5>Yessica Christy</h5>
                                            <p>Shanxi, China</p>
                                        </div>
                                    </div>
                                    <div className="ratting">
                                        <p>4.5</p>
                                        <img src={require("src/assets/star.png")} alt="star"/>
                                    </div>
                                </div>
                                <p>“I like it because I like to travel far and still can make my day better just
                                    by drinking their Hazelnut Latte</p>
                            </div>
                            <div className="card">
                                <div className="navbar-card">
                                    <div className="profile">
                                        <img src={require("src/assets/Ellipse 177.webp")} alt="Ellipse"/>
                                        <div>
                                            <h5>Kim Young Jou</h5>
                                            <p>Seoul, South Korea</p>
                                        </div>
                                    </div>
                                    <div className="ratting">
                                        <p>4.5</p>
                                        <img src={require("src/assets/star.png")} alt="star"/>
                                    </div>
                                </div>
                                <p>“This is very unusual for my taste, I haven’t liked coffee before but their
                                    coffee is the best! and yup, you have to order the chicken wings, the best in
                                    town!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReviewCard