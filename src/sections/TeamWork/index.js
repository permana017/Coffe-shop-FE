import React from "react";
import "../TeamWork/style.css"
import "../../style/Global.css"
import imgBanner from "../../assets/35744 1.webp"
import imgVektor from "../../assets/Vector (1).png"

function TeamWork() {
    return (
        <div>
            <section className="team-work">
                <div className="container">
                    <div className="content">
                        <div className="box-image">
                            <img src={imgBanner} alt=""/>
                        </div>
                        <div className="description">
                            <h2 className="title">We Provide Good Coffee and Healthy Meals</h2>
                            <p>You can explore the menu that we provide with fun and have their own taste
                                and make your day better.</p>
                            <div className="text-description">
                                <div className="item">
                                    <img src={imgVektor} alt="Vector"/>
                                    <p>High quality beans</p>
                                </div>
                                <div className="item">
                                    <img src={imgVektor} alt="Vector"/>
                                    <p>Healthy meals, you can request the ingredients</p>
                                </div>
                                <div className="item">
                                    <img src={imgVektor} alt="Vector"/>
                                    <p>Chat with our staff to get better experience for ordering</p>
                                </div>
                                <div className="item">
                                    <img src={imgVektor} alt="Vector"/>
                                    <p>Free member card with a minimum purchase of IDR 200.000.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TeamWork