import React from "react";
import Login from "src/sections/LoginSection";
import Footer from "src/sections/Footer";
import CardPromo from "src/component/CardPromo";


function LoginPage() {
    return(
        <div>
            <Login />
            <Footer >
                <CardPromo/>
            </Footer>
        </div>
    )
}



export default LoginPage