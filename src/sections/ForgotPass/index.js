import React from "react";
import "src/sections/ForgotPass/style.css"
import "src/style/Global.css"

function ForgotPass() {
    return(
        <div className="forgot-password">
            <section className="hero-banner">
                <section className="container flex flex-col items-center" >
                    <div className="text">
                        <h1 className="text-label text-center">
                            Forgot your password?
                        </h1>
                        <p className="text-description text-white text-2xl font-bold text-center">Don’t worry, we got your back!</p>
                    </div>
                    <form action="#" className="flex .justify-between m-xy-125" >
                            <input className=" pl-[35px] py-8 rounded-xl mr-40 text-3xl font-normal w-[41vw]" id="password-input" type="password"
                                placeholder="Enter your password"/>
                            <input className="btn btn-submit rounded-xl" id="submit" type="submit" value="Send" />                    
                    </form>
                    <p className="text-description tw-600 font-semibold text-white text-3xl text-center my-5">Click here if you didn’t receive any link in 2 minutes</p>
                    <button className="btn btn-forgot rounded-xl">
                        Resend Link
                    </button>
                    <p className="text-description font-semibold text-white text-3xl text-center my-5">01:54</p>
                </section>
            </section>
        </div>
    )
}



export default ForgotPass