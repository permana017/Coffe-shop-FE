import React from "react";
import Login from "src/sections/LoginSection";
import Footer from "src/sections/Footer";
import CardPromo from "src/component/CardPromo";


function LoginPage() {
    return(
        <div>
            <Login />
            <Footer >
                <CardPromo
                    title="Get your member card now!"
                    btn="Create Now"
                    desc="Let's join with our member and enjoy the deals."
                    bottom="bottom-[51px]"
                />
            </Footer>
        </div>
    )
}



export default LoginPage