import React, {useEffect, useState} from "react";
import "src/style/Global.css"
import "src/sections/Product/style.css"
import {CardProduct, CardProductAdmin} from "src/component/CardProduct";

function    Product(props) {
    const {buttonPost} = props
    const [admin, setAdmin] = useState(true)
    const [filter, setFilter] = useState("")
    console.log(filter);
    

    useEffect(() => {
        let dataUser = localStorage.getItem('@userLogin')
        dataUser = JSON?.parse(dataUser)
        let role = dataUser?.data?.user?.role
        console.log("ini admin?",role)
        if ( role == "admin") {
            setAdmin(true)
        } else {
            setAdmin(false)
        }

    }, [filter])

    return (
        <div>
            <main className="container2 flex  justify-center">
                <section className="container p-0 flex">
                    <section className="product-promo">
                        <div className="flex flex-col items-center">
                            <h3 className="text-center title text-secondary text-2xl font-semibold my-6">Promo for you</h3>
                            <p className="text-center mb-50 text-xs tw-40  ">Coupons will be updated every weeks. Check them out!
                            </p>
                        </div>
                        <div className="card-promo">
                            <div className="inner rounded-xl">
                                <div className="content-promo">
                                    <img
                                        src={require("src/assets/Beef-Spaghetti.webp")}
                                        alt=""
                                        width="128px"
                                        height="128px"
                                        className="rounded-full mt-53"/>
                                    <h3 className="mb-0 text-xl font-semibold my-6">Beef Spaghetti</h3>
                                    <h3 className="m-0 text-xl font-semibold my-6">20% OFF</h3>
                                    <p className="text-sm mb-5 tw-250 text-sm my-5">Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
                                    <hr width="100%"/>
                                </div>
                                <div className="coupun-code">
                                    <p className="mb-3 text-center text-base my-6">COUPON CODE</p>
                                    <h2 className="mb-3 text-center text-2xl font-semibold my-6">FNPR15RG</h2>
                                    <p className="m-0 text-center text-xs">Valid untill October 10th 2020</p>
                                </div>
                            </div>
                            <div className="box-black rounded-xl"></div>
                            <div className="box-brown rounded-xl"></div>
                        </div>
                        <button className="btn btn-secondary mt-12 mb-220 my-6 text-white">
                            Apply Coupon
                        </button>
                        <div className="desc-product mb-5 ">
                            <h5>Terms and Condition</h5>
                            <p>
                                1. You can only apply 1 coupon per day
                                <br/>
                                2. It only for dine in
                                <br/>
                                3. Buy 1 get 1 only for new user
                                <br/>
                                4. Should make member card to apply coupon
                                <br/>
                            </p>
                        </div>
                    </section>
                    <section className="product">
                        <nav className="nav-product mb-5 mt-3">
                            <ul>
                                <button
                                    onClick={() => setFilter("")}
                                    className="hover:text-[#6A4029] hover:font-bold hover:underline-offset-8 hover:underline">Favorite Product</button>
                                <button
                                    onClick={() => setFilter("coffee")}
                                    
                                    className={filter == "coffee"
                                        ? "text-[#6A4029] font-bold underline-offset-8 underline"
                                        : "hover:text-[#6A4029] hover:font-bold hover:underline-offset-8 hover:underline"}>
                                    Coffee</button>
                                <button
                                    onClick={() => setFilter("non coffee")}
                                    className={filter == "non-coffe"
                                        ? "text-[#6A4029] font-bold underline-offset-8 underline"
                                        : "hover:text-[#6A4029] hover:font-bold hover:underline-offset-8 hover:underline"}>Non Coffee</button>
                                <button
                                    onClick={() => setFilter("food")}
                                    className={filter == "food"
                                        ? "text-[#6A4029] font-bold underline-offset-8 underline"
                                        : "hover:text-[#6A4029] hover:font-bold hover:underline-offset-8 hover:underline"}>Foods</button>
                            </ul>
                        </nav>
                        <section className="flex flex-col justify-between">
                            {
                                admin
                                    ? (<CardProductAdmin isFilter={filter}/>)
                                    : (<CardProduct/>)
                            }
                            <div className="">
                                {buttonPost}
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        </div>
    )
}

export default Product