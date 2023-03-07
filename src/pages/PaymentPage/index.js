import React from "react";
import PaymentSection from "src/sections/PaymentSection";
import { Navbar, Footer } from "src/sections";




function PaymentPage() {
    return(
        <div>
            <Navbar/>
            <PaymentSection/>
            <Footer/>
        </div>
    )
}

export default PaymentPage