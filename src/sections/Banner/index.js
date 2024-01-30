import React from "react";
import "../Banner/style.css"
import "../../style/Global.css"
import imgUser from "../../assets/user.webp"
import imgLocation from "src/assets/location.png"
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';





function Banner() {
    return (
        <section className="hero">
            <div className="container mt-10 md:mt-0">
                <div className="content">
                    <div className="text-box w-full">
                        <Fade left delay={200}>
                            <h1 className="my-10 md:text-5xl text-3xl font-bold md:font-black">Start Your Day with Coffee and Good Meals</h1>
                        </Fade>
                        <Fade left delay={400}>
                            <p className="mb-10 md:text-xl font-semibold md:font-bold" >We provide high quality beans,
                                good taste, and healthy meals made by love just for you. Start your day with us
                                for a bigger smile!</p>
                        </Fade>
                        <Bounce left delay={400}>
                            <button>Get Started</button>
                        </Bounce>
                    </div>
                </div>
                <div className="box-info-wreapper">
                    <div className="info-wrapper bottom-[136px]">
                        <div className="inner">
                            <div className="box-content">
                                <div className="content-inner">
                                    <div className="info p-4 md:p-12">
                                        <section className="md:flex md:flex-row flex flex-col justify-center">
                                            <Fade bottom>
                                                <img src={imgUser} alt="user" height="55px" width="55px" className="md:mr-10 mb-5 md:mb-0" />
                                                <div className="flex flex-col ">
                                                    <h2 className="w-full text-center">90+</h2>
                                                    <p className="w-full text-center">Staff</p>
                                                </div>
                                            </Fade>
                                        </section>
                                        <section className="md:flex md:flex-row flex flex-col justify-center">
                                            <Fade bottom delay={200}>
                                                <img src={imgLocation} alt="user" height="55px" width="55px" className="md:mr-10 mb-5 md:mb-0" />
                                                <div className="flex flex-col ">
                                                    <h2 className="w-full text-center">30+</h2>
                                                    <p className="w-full text-center">Stores</p>
                                                </div>
                                            </Fade>
                                        </section>
                                        <section className="md:flex md:flex-row flex flex-col justify-center">
                                            <Fade bottom delay={400}>
                                                <img src={imgUser} alt="user" height="55px" width="55px" className="md:mr-10 mb-5 md:mb-0" />
                                                <div className="flex flex-col ">
                                                    <h2 className="w-full text-center">800+</h2>
                                                    <p className="w-full text-center">Costumer</p>
                                                </div>
                                            </Fade>
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