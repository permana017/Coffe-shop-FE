import React from "react";
import "../Banner/style.css"
import "../../style/Global.css"   
import imgUser from "../../assets/user.webp"



function Banner() {
    return(
        <section className="hero">
            <div className="container">
                <div className="content">
                    <div className="text-box">
                        <h1 className="text-label my-10">Start Your Day with Coffee and Good Meals</h1>
                        <p className="desc tw-550 text-white my-5" >We provide high quality beans,
                            good taste, and healthy meals made by love just for you. Start your day with us
                            for a bigger smile!</p>
                        <button>Get Started</button>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>
                <div className="box-info-wreapper">
                    <div className="info-wrapper bottom-[136px]">
                        <div className="inner">
                            <div className="box-content">
                                <div className="content-inner">
                                    <div className="info">
                                        <section className="part-info flex">
                                            <img src={imgUser} alt="user" height="55px" width="55px" className="mr-10"/>
                                            <div className="flex flex-col ">
                                                <h2 className="tittle m-0">90+</h2>
                                                <p className="m-0">Staff</p>
                                            </div>
                                        </section>
                                        <section className="part-info flex">
                                            <img src={imgUser} alt="user" height="55px" width="55px" className="mr-10"/>
                                            <div className="flex flex-col ">
                                                <h2 className="tittle m-0">90+</h2>
                                                <p className="m-0">Staff</p>
                                            </div>
                                        </section>
                                        <section className="part-info flex">
                                            <img src={imgUser} alt="user" height="55px" width="55px" className="mr-10"/>
                                            <div className="flex flex-col ">
                                                <h2 className="tittle m-0">90+</h2>
                                                <p className="m-0">Staff</p>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner