import React from "react";
import SignupSection from "src/sections/SignUpSection";
import Footer from "src/sections/Footer";
import CardPromo from "src/component/CardPromo";

function SignUpPage() {
    return(
        <div>
            <SignupSection/>
            <Footer >
                <CardPromo/>
            </Footer>
        </div>
    )

}


export default SignUpPage