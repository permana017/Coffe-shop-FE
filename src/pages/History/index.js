import React from "react";
import Navbar from "src/sections/Navbar"
import HistoryPage from "src/sections/HistorySection";
import Footer  from "src/sections/Footer";


function History() {
    return(
        <div>
            <Navbar/>
            <HistoryPage/>
            <Footer/>
        </div>
    )
}


export default History