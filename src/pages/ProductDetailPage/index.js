import React from "react";
import ProductDetail from "src/sections/ProductDetail";
import Navbar  from "src/sections/Navbar";
import { Footer } from "src/sections";



function ProductDetailPage() {
    return(
        <div>
            <Navbar/>
            <ProductDetail/>
            <Footer/>
        </div>
    )
}


export default ProductDetailPage