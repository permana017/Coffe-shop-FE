import React from "react";
import "src/sections/Footer/style.css"
// import "src/style/Global.css"
import Fade from 'react-reveal/Fade';

function Footer(props) {
    const { children, padding } = props
    return (
        <div>
            <footer className={`footer md:py-10 relative ${padding}`}>
                <div className="container">
                    {children}
                    <div className="relative my-10">
                        <div className="inner">
                            <section className="side-left">
                                <Fade left >
                                    <div className="logo flex width-2/5 items-center">
                                        <img src={require('src/assets/coffee 1.png')} alt="coffe" className="w-8 h-8" />
                                        <h3 className="my-5 ml-3 text-xl font-semibold">permana coffe</h3>
                                    </div>
                                </Fade>
                                <Fade bottom delay={200}>
                                    <p className="description my-5">Coffee Shop is a store that sells some good
                                        meals, and especially coffee. We provide high quality beans</p>
                                </Fade>
                            </section>
                            <div className="flex justify-between w-2/3 md:w-1/3">
                                <div className="product">
                                    <Fade bottom delay={200}>
                                        <p className="my-4 font-bold">Product</p>
                                    </Fade>
                                    <Fade bottom delay={400}>
                                        <p className="my-4 hover:font-bold">Download</p>
                                    </Fade>
                                    <Fade bottom delay={600}>
                                        <p className="my-4 hover:font-bold">Pricing</p>
                                    </Fade>
                                    <Fade bottom delay={800}>
                                        <p className="my-4 hover:font-bold">Pricing</p>
                                    </Fade>
                                    <Fade bottom delay={1000}>
                                        <p className="my-4 hover:font-bold">Countries</p>
                                    </Fade>
                                    <Fade bottom delay={1200}>
                                        <p className="my-4 hover:font-bold">Blog</p>
                                    </Fade>
                                </div>
                                <div className="enagage">
                                    <Fade bottom delay={200}>
                                        <p className="my-4 font-bold">Engage</p>
                                    </Fade>
                                    <Fade bottom delay={400}>
                                        <p className="my-4">Coffe Shop ?</p>
                                    </Fade>
                                    <Fade bottom delay={600}>
                                        <p className="my-4">FAQ</p>
                                    </Fade>
                                    <Fade bottom delay={800}>
                                        <p className="my-4">About Us</p>
                                    </Fade>
                                    <Fade bottom delay={1000}>
                                        <p className="my-4">Privacy Policy</p>
                                    </Fade>
                                    <Fade bottom delay={1200}>
                                        <p className="my-4">Privacy Policy</p>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className="md:absolute md:bottom-4">
                            <div className="sosmed flex my-4">
                                <Fade bottom delay={500}>
                                    <img
                                        src={require('src/assets/facebook.png')}
                                        alt="facebook-logo"
                                        className="mr-2 w-8 h-8" />
                                </Fade>
                                <Fade bottom delay={700}>
                                    <img
                                        src={require('src/assets/tweeter.png')}
                                        alt="tweeter-logo"
                                        className="mr-2 w-8 h-8" />
                                </Fade>
                                <Fade bottom delay={900}>
                                    <img
                                        src={require('src/assets/instagram.png')}
                                        alt="instagram-logo"
                                        className="mr-2 w-8 h-8" />
                                </Fade>
                            </div>
                            <Fade bottom delay={1100}>
                                <p className="copyrigth">©2020CoffeeStore</p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    )
}

export default Footer