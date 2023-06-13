import React, {useEffect, useState} from "react";
import "src/style/Global.css"
import "src/sections/Product/style.css"
import {CardProduct, CardProductAdmin} from "src/component/CardProduct";
import { useNavigate } from "react-router-dom";
import search from "src/assets/search.svg"


function  Product(props) {
    const navigate = useNavigate()
    const {buttonPost} = props
    const [admin, setAdmin] = useState(false)
    const [filter, setFilter] = useState("")
    const [getSearch, setGetSearch] = useState("")

    

    useEffect(() => {
        let dataUser = localStorage.getItem('@userLogin')
        if (dataUser !== "undefined") {
            dataUser = JSON.parse(dataUser)
        }
        let role = dataUser?.data?.user?.role
        if ( role === "admin") {
            setAdmin(true)
        } else {
            setAdmin(false)
        }

    }, [filter])

    return (
        <div className="w-full">
            <main className="w-full flex justify-center border-t-[4px] border-[#9F9F9F]">
                <section className="p-0 flex max-w-[1440px]">
                    <section className="product-promo hidden ">
                        <div className="flex flex-col items-start">
                            <h3 className=" title text-secondary text-2xl font-semibold my-6 mt-20">Promo for you</h3>
                            <p className=" mb-10 text-xs w-3/4">Coupons will be updated every weeks. Check them out!
                            </p>
                        </div>
                        <div className="card-promo mt-14">
                            <div className="inner rounded-xl">
                                <div className="content-promo">
                                    <img
                                        src={require("src/assets/Beef-Spaghetti.webp")}
                                        alt=""
                                        width="128px"
                                        height="128px"
                                        className="rounded-full mt-10"/>
                                    <h3 className="mb-0 text-xl font-semibold">Beef Spaghetti</h3>
                                    <h3 className="m-0 text-xl font-semibold">20% OFF</h3>
                                    <p className="text-sm mb-5 tw-250 text-sm my-5">Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
                                    <hr width="100%"/>
                                </div>
                                <div className="coupun-code">
                                    <p className="mb-3 text-center text-base">COUPON CODE</p>
                                    <h2 className="mb-3 text-center text-2xl font-semibold">FNPR15RG</h2>
                                    <p className="m-0 text-center text-xs">Valid untill October 10th 2020</p>
                                </div>
                            </div>
                            <div className="box-black rounded-xl"></div>
                            <div className="box-brown rounded-xl"></div>
                        </div>
                        <button className="btn btn-secondary mt-12 mb-20 my-6 text-white">
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
                    <section className="w-[70%]">
                        <nav className="nav-product mb-5 mt-3">
                            <ul>
                                <button
                                    onClick={() => (setFilter(""),setGetSearch(""))}
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
                            <div className="mt-5 w-[100%]  flex justify-end">
                                <div className="w-1/2 flex  relative items-center">
                                    <div className="absolute top-[15px] left-4 border-r-2 border-[#4F5665] ">
                                        <img src={search} width={20} alt="search" className="mr-2"/>
                                    </div>
                                    <input type="text" placeholder="Search" className="px-4 py-3 w-full bg-[#EFEEEE] rounded-full pl-12 focus:outline-none" onChange={(e)=>setGetSearch(e.target.value)}/>
                                </div>
                            </div>
                        </nav>
                        <section className="pl-[131px] pr-[150px] mt-20">
                            {
                                admin
                                    ? (<CardProductAdmin isFilter={filter} isSearch={getSearch} />)
                                    : (<CardProduct isFilter={filter} isSearch={getSearch}/>)
                            }
                            <div className="mt-20">
                            {
                                admin
                                    ? (
                                        <div className="w-full flex justify-center">
                                            <button
                                                onClick={() => navigate('/newProduct')}
                                                className="bottom-[40px] relative bg-yellow-800 hover:bg-yellow-900 hover:shadow-lg shadow-black-500/50 text-white font-bold py-7 px-7 rounded-xl text-xl w-full">Add New Product</button>
                                        </div>
                                    )
                                    : (null)
                            }
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        </div>
    )
}

export default Product