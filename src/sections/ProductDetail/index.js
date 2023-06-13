import React from "react";
import "src/style/Global.css"
import "src/sections/ProductDetail/style.css"
import {useLocation, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetail() {
    const navigate = useNavigate()
    const location = useLocation();
    let data = location?.state?.data
    const [btnactive, setBtnactive] = useState("")
    const [qty, setQty] = useState(1)
    const [dataId, setDataId] = useState("")
    
    useEffect(() => {
        let dataUser = localStorage.getItem('@userLogin')
        if (dataUser !== "undefined") {
            dataUser = JSON.parse(dataUser)
            setDataId(dataUser?.data?.user?.id) 
        }
    }, [])

    const total = Number(data?.price) * qty

    const dataOrder = {
        user_id: dataId,
        product_id:data?.id,
        title:data.tittle,
        price:total,
        size:btnactive,
        qty:qty,
        img:data?.images[0].filename
    }
    const handleOrder =()=>{
        let isLoggin = localStorage.getItem('@userLogin')
        if (!isLoggin) {
            navigate('/loginPage')
        } else {
            if (btnactive === "") {
                alert("masukan size")
            } else {
                navigate("/payment")
                localStorage.setItem('@dataOrder', JSON.stringify(dataOrder))   
            }
        }
    }

    const size = () =>{
        if (btnactive === "R") {
            return ("Regular")
        } else if (btnactive === "L") {
            return ("Large")
        }else if (btnactive === "XL"){
            return ("Xtra Large")
        }
    }


    return (
        <div className="">
            <main className="detail-product">
                <div className="container flex flex-col items-center">
                    <section className="flex w-full">
                        <section className="image">
                            <div className="w-full px-5">
                                <img
                                    src={`https://permana-coffee.cyclic.app/upload/images/${data?.images[0]?.filename}`}
                                    alt="cold-brew"
                                    width="100%"
                                    className="rounded-full mt-20 h-[380px]"/>
                            </div>
                            <h1 className="text-6xl mb-3 text-center font-black mt-5">{location?.state?.data?.tittle}</h1>
                            <h3 className="text-4xl m-0 text-center font-semibold">IDR {location?.state?.data?.price}</h3>
                            <button
                                className="rounded-xl btn-secondary btn-block font-black mt-53 mb-3 text-2xl py-[25px]">Add to Cart</button>
                            <button className="rounded-xl btn-primary btn-block mb-54 text-2xl py-[25px] font-bold">Ask a Staff</button>
                        </section>
                        <section className="description">
                            <div className="desc-product text-2xl text-secondary rounded-xl">
                                <p>Delivery only on Monday to friday at 1 - 7 pm</p>
                                <p>Cold brewing is a method of brewing that combines ground coffee and cool
                                    water and uses time instead of heat to extract the flavor. It is brewed in small
                                    batches and steeped for as long as 48 hours.</p>
                                <h4 className="text-center text-block mt-10">Choose a size</h4>
                                <div className="box-btn mt-10">
                                    <button className={btnactive === "R" ? "btn-size-active" :  "btn-size" } onClick={()=>setBtnactive("R")}>R</button>
                                    <button className={btnactive === "L" ? "btn-size-active" :  "btn-size" } onClick={()=>setBtnactive("L")}>L</button>
                                    <button className={btnactive === "XL" ? "btn-size-active" :  "btn-size" } onClick={()=>setBtnactive("XL")}>XL</button>
                                </div>
                            </div>
                            <h4 className="text-center text-block text-xl font-bold mt-12 mb-6">Choose Delivery Methods</h4>
                            <div className="">
                                <button className="py-3 px-3 rounded-xl mr-3 bg-[#F4F4F8] text-[#9F9F9F]">Dine in</button>
                                <button className="py-3 px-3 rounded-xl mr-3 bg-[#F4F4F8] text-[#9F9F9F]">Door Delivery</button>
                                <button className="py-3 px-3 rounded-xl mr-3 bg-[#F4F4F8] text-[#9F9F9F]">Pick up</button>
                            </div>
                            <div className="set-time">
                                <label for="set-time">Set time :</label>
                                <input type="text" placeholder="Enter the time you’ll arrived"/>
                            </div>
                        </section>
                    </section>
                    <section className="flex w-[90%] justify-between m-[-75px] z-20">
                        <div className="flex w-[70%] bg-[#FFFFFF] px-10 py-9 rounded-xl justify-between shadow-md">
                            <div className="flex items-center">
                                <img
                                src={`https://permana-coffee.cyclic.app/upload/images/${data?.images[0]?.filename}`}
                                alt="cold-brew"
                                className="rounded-full w-20 h-20 mr-12"/>
                                <div>
                                    <p className="text-2xl font-black">{data.tittle}</p> 
                                    {btnactive !== "" ? (<p className="text-xl font-normal">x{qty} ({size()})</p>) : null}
                                    {/* <p className="text-xl font-normal">x1 (Regular)</p>  */}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button 
                                onClick={()=> qty >= 1 ? setQty(qty - 1) : null }
                                className="h-8 w-8 flex items-center font-black text-3xl justify-center bg-[#E7AA3685] rounded-full">-</button> 
                                <p className="mx-5 font-black text-2xl w-5">{qty}</p>
                                <button
                                onClick={()=> setQty(qty + 1)} 
                                className="h-8 w-8 flex items-center font-black text-3xl justify-center bg-[#E7AA3685] rounded-full">+</button> 
                            </div>
                        </div>
                        <div className="w-[25%] shadow-md rounded-2xl ">
                            <button
                            onClick={handleOrder}
                             className="btn-primary w-full h-full bg-green-900 rounded-2xl font-semibold text-2xl">CHECKOUT</button>    
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default ProductDetail