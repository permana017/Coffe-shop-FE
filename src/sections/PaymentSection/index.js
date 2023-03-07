import React from "react";
import "src/sections/PaymentSection/style.css"

function PaymentSection() {
    return (
        <div>
            <main className="payment-page">
                <section className="container">
                    <section className="box-payment">
                        <div className="summary">
                            <h1 className="text-label text-left my-5 mt-10 tw-60 text-white text-4xl">Checkout your item now!</h1>
                            <section className="card-order">
                                <h2 className="text-2xl font-bold mb-10 text-center">Order Summary</h2>
                                <div className="flex items-center my-5 justify-between ">
                                    <img
                                        src={require("src/assets/image 22.webp")}
                                        alt="Hazelnut Latte"
                                        width="82px"
                                        height="90px"
                                        className="rounded-xl mr-10"/>
                                    <div className="w-[50%]">
                                        <p>Hazelnut Latte</p>
                                        <p>x 1</p>
                                        <p>Regular</p>
                                    </div>
                                    <p>IDR 24.0</p>
                                </div>
                                <div className="flex items-center mb-5 justify-between">
                                    <img
                                        src={require("src/assets/image 22.webp")}
                                        alt="Hazelnut Latte"
                                        width="82px"
                                        height="90px"
                                        className="rounded-xl mr-10"/>
                                    <div className="w-[50%]">
                                        <p>Hazelnut Latte</p>
                                        <p>x 1</p>
                                        <p>Regular</p>
                                    </div>
                                    <p>IDR 24.0</p>
                                </div>
                                <hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700"/>
                                <div className="flex justify-between tw-100 my-1">
                                    <p>SUBTOTAL</p>
                                    <p>IDR 120.000</p>
                                </div>
                                <div className="flex justify-between tw-100 my-1">
                                    <p>TAX & FEES</p>
                                    <p>IDR 20.000</p>
                                </div>
                                <div className="flex justify-between tw-100 my-1">
                                    <p>SHIPPING</p>
                                    <p>IDR 10.000</p>
                                </div>
                                <div className="flex justify-between tw-100 my-4 text-3xl font-bold text-[#362115] mt-10">
                                    <p>TOTAL</p>
                                    <p>IDR 150.000</p>
                                </div>
                            </section>
                        </div>
                        <div className="address">
                            <div className="w-[80%]">
                                <h3 className="mt-[130px] font-bold text-2xl text-[#FFFFFF] my-5">Address details</h3>
                                <div className="card-address bg-[#FFFFFF] rounded-xl p-5">
                                    <p className="font-bold text-xl my-3">Delivery to Iskandar Street</p>
                                    <p className="text-xl my-3">Km 5 refinery road oppsite re public road, effurun, Jakarta</p>
                                    <p className="text-xl my-3">+62 81348287878</p>
                                </div>
                                <h3 className="mt-[50px] font-bold text-2xl text-[#FFFFFF] my-5">Payment method</h3>
                                <form className="card-payment-method bg-[#FFFFFF] rounded-xl p-5">
                                    <div className="flex items-center my-5">
                                        <input
                                            id="default-radio-1"
                                            type="radio"
                                            value=""
                                            name="default-radio"
                                            className="w-4 h-4 accent-[#6A4029]"/>
                                        <img
                                        className="bg-[#F47B0A] w-10 p-2 rounded mx-3" 
                                        src={require("src/assets/Vector-card-atm.png" )} alt="card-atm" />
                                        <label
                                            for="default-radio-1"
                                            className="text-lg font-medium text-[#000000]">Card</label>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <input
                                            id="default-radio-2"
                                            type="radio"
                                            value=""
                                            name="default-radio"
                                            className="w-4 h-4 accent-[#6A4029]"/>
                                            <img
                                                className="bg-[#895537] w-10 p-3 h-9 rounded mx-3" 
                                                src={require("src/assets/icon-bank.png" )} alt="card-atm" />
                                        <label
                                            for="default-radio-2"
                                            className="text-lg font-medium text-gray-900 text-[#000000]">Bank account</label>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <input
                                            id="default-radio-2"
                                            type="radio"
                                            value=""
                                            name="default-radio"
                                            className="w-4 h-4 accent-[#6A4029]"/>
                                            <img
                                                className="bg-[#FFBA33] w-10 p-2 rounded mx-3" 
                                                src={require("src/assets/icon-delivery.png" )} alt="card-atm" />
                                        <label
                                            for="default-radio-2"
                                            className="text-lg font-medium text-gray-900 text-[#000000]">Cash on delivery</label>
                                    </div>
                                </form>
                                <button className="btn btn-secondary w-full mt-10">Confirm and Pay</button>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    )
}

export default PaymentSection