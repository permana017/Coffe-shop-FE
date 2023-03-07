import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "src/sections/Navbar";
import Product from "src/sections/Product";
import Footer from "src/sections/Footer";

function ProductAdmin() {
    const navigate = useNavigate();
    const buttonProducAdmin = () => {
        return (
            <div className="w-full flex justify-center">
                <button
                    onClick={() => navigate('/newProduct')}
                    className="absolute bottom-10 bg-yellow-800 hover:bg-yellow-900 hover:shadow-lg shadow-black-500/50 text-white font-bold py-7 px-7 rounded-xl text-xl w-4/5">Add New Product</button>

            </div>
        )
    }
    return (
        <div>
            <Navbar/>
            <Product buttonPost={buttonProducAdmin()}/>
            <Footer/>
        </div>
    )
}

export default ProductAdmin