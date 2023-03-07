import React from "react";
import "src/style/Global.css"
import "src/sections/ProductDetail/style.css"
import { useLocation } from "react-router-dom";



function ProductDetail() {
    const location = useLocation();
    let data = location?.state?.data
    console.log("loc", data);
    return (

        <div>
            <main className="detail-product">
            <section className="container flex">
                <section className="image">
                    <img
                        src={
                            `http://localhost:5000/upload/images/${data?.images[0]?.filename}`
                          }
                        alt="cold-brew"
                        width="100%"
                        className="rounded-max mt-100"/>
                    <h1 className="text-6xl mb-3 text-center">{location?.state?.data?.tittle}</h1>
                    <h3 className="text-4xl m-0 font-normal text-center">{location?.state?.data?.price}</h3>
                    <button
                        className="btn2 btn-secondary btn-block font-black mt-53 mb-3 text-2xl py-[25px]"
                        >Add to Cart</button>
                    <button
                        className="btn2 btn-primary btn-block mb-220 text-2xl py-[25px]"
                        >Ask a Staff</button>
                </section>
                <section className="description">
                    <div className="desc-product text-2xl text-secondary">
                        <p>Delivery only on Monday to friday at 1 - 7 pm</p>
                        <p>Cold brewing is a method of brewing that combines ground coffee and cool
                            water and uses time instead of heat to extract the flavor. It is brewed in small
                            batches and steeped for as long as 48 hours.</p>
                        <h4 className="text-center text-block ">Choose a size</h4>
                        <div className="box-btn">
                            <button className="btn-size ">R</button>
                            <button className="btn-size">L</button>
                        <button className="btn-size">XL</button>
                    </div>
                </div>
                <h4 className="text-center text-block ">Choose Delivery Methods</h4>
                <div className="box-btn">
                    <button className="btn p-xy-20  mr-10 btn-secondary">Dine in</button>
                    <button className="btn p-xy-20 mr-10">Door Delivery</button>
                    <button className="btn p-xy-20">Pick up</button>
                </div>
                <div className="set-time">
                    <label for="set-time">Set time :</label>
                    <input type="text" placeholder="Enter the time you’ll arrived"/>
                </div>
            </section>
        </section>
    </main>
        </div>
    )
}

export default ProductDetail