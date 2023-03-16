import React from "react";
import "src/sections/Footer/style.css"
// import "src/style/Global.css"

function Footer(props) {
    const {children} = props
    return (
        <div>
            <footer className="footer md:py-40">
                <div className="container">
                    {children}
                    <div className="relative my-10">
                        <div className="inner">
                            <section className="side-left">
                                <div className="logo flex width-2/5 items-center">
                                    <img src={require('src/assets/coffee 1.png')} alt="coffe" className="w-8 h-8"/>
                                    <h3 className="my-5 ml-3 text-xl font-semibold">permana coffe</h3>
                                </div>
                                <p className="description my-5">Coffee Shop is a store that sells some good
                                    meals, and especially coffee. We provide high quality beans</p>
                            </section>
                            <div className="flex justify-between w-2/3 md:w-1/3">
                                <div className="product">
                                    <p className="my-4 font-bold">Product</p>
                                    <p className="my-4 hover:font-bold">Download</p>
                                    <p className="my-4 hover:font-bold">Pricing</p>
                                    <p className="my-4 hover:font-bold">Pricing</p>
                                    <p className="my-4 hover:font-bold">Countries</p>
                                    <p className="my-4 hover:font-bold">Blog</p>
                                </div>
                                <div className="enagage">
                                    <p className="my-4 font-bold">Engage</p>
                                    <p className="my-4">Coffe Shop ?</p>
                                    <p className="my-4">FAQ</p>
                                    <p className="my-4">About Us</p>
                                    <p className="my-4">Privacy Policy</p>
                                    <p className="my-4">Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:absolute md:bottom-4">
                            <div className="sosmed flex my-4">
                                <img
                                    src={require('src/assets/facebook.png')}
                                    alt="facebook-logo"
                                    className="mr-2 w-8 h-8"/>
                                <img
                                    src={require('src/assets/tweeter.png')}
                                    alt="tweeter-logo"
                                    className="mr-2 w-8 h-8"/>
                                <img
                                    src={require('src/assets/instagram.png')}
                                    alt="instagram-logo"
                                    className="mr-2 w-8 h-8"/>
                            </div>
                            <p className="copyrigth">©2020CoffeeStore</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer