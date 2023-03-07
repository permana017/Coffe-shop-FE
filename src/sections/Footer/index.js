import React from "react";
import "src/sections/Footer/style.css"
// import "src/style/Global.css"

function Footer(props) {
    const {children} = props
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    {children}
                    <div className="inner">
                        <section className="side-left">
                            <div className="logo flex width-2/5 items-center">
                                <img src={require('src/assets/coffee 1.png')} alt="coffe"/>
                                <h3 className="my-5 ml-3 text-xl font-semibold">permana coffe</h3>
                            </div>
                            <p className="description my-5">Coffee Shop is a store that sells some good meals, and
                                especially coffee. We provide high quality beans</p>
                            <div className="sosmed flex my-4">
                                <img src={require('src/assets/facebook.png')} alt="facebook-logo" className="mr-2"/>
                                <img src={require('src/assets/tweeter.png')} alt="tweeter-logo" className="mr-2"/>
                                <img src={require('src/assets/instagram.png')} alt="instagram-logo" className="mr-2"/>
                            </div>
                            <p className="copyrigth">©2020CoffeeStore</p>
                        </section>
                        <div className="product">
                            <p className="my-4">Product</p>
                            <p className="my-4">Download</p>
                            <p className="my-4">Pricing</p>
                            <p className="my-4">Pricing</p>
                            <p className="my-4">Countries</p>
                            <p className="my-4">Blog</p>
                        </div>
                        <div className="enagage">
                            <p className="my-4">Engage</p>
                            <p className="my-4">Coffe Shop ?</p>
                            <p className="my-4">FAQ</p>
                            <p className="my-4">About Us</p>
                            <p className="my-4">Privacy Policy</p>
                            <p className="my-4">Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer