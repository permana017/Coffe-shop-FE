import React, { useState } from "react";
import "src/style/Global.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";




function SignupSection() {

    const navigate = useNavigate()
    const [data, setData] = useState({
        email : "",
        password : ""
    })

    const handleSignup=(e,params)=>{
        e.preventDefault()
        setData({...data,[params]:e.target.value})
    }

    const postDataUser = () =>{
        axios.post('https://permana-coffee.cyclic.app/api/v1/auth/register',{
            ...data
        },{
            headers: {
                'Access-Control-Allow-Headers':'*',
                'content-type': 'application/x-www-form-urlencoded'
                }
        }).then((res) => {
            navigate("/loginpage")
        }).catch((err)=> {
            console.log(err);
        })
    }


    return(
    <div>
        <main className="container2">
            <section className="auth-bg"></section>
            <section className="auth-form">
                <nav className="flex w-full justify-between md:p-[55px] px-4 py-8">
                    <div className="brand" onClick={()=> navigate("/")}>
                        <img src={require("src/assets/coffee 1.png")} alt="" className="w-[20px] h-[20px] hover:cursor-pointer"/>
                        <h3 className="text-lg md:text-xl font-bold hover:cursor-pointer">PermanaCoffe</h3>
                    </div>
                    <button 
                    onClick={()=> navigate("/loginpage")}
                    className="btn-primary rounded-full flex items-center md:py-2 py-1 md:px-7 px-4 font-semibold">
                        Login
                    </button>
                </nav>
                <div className="flex flex-col items-center">
                    <h3 className="text-center text-secondary text-2xl md:text-3xl font-bold">signup</h3>
                    <div 
                    className="md:w-[75%] w-[90%] py-[50px] md:mb-28">
                        <div className="mb-5">
                            <label className="form-label" for="email-input">email :</label>
                            <input 
                            onChange={(e)=>handleSignup(e ,"email")}
                            className="form-input rounded-xl" id="email-input" type="email"
                                placeholder="Enter your email" />
                        </div>
                        <div className="mb-5">
                            <label className="form-label" for="password">Password :</label>
                            <input
                                onChange={(e)=>handleSignup(e ,"password")}
                                className="form-input rounded-xl" id="password" type="password"
                                placeholder="Enter your password" />
                        </div>
                        <div className="mb-5">
                            <label className="form-label" for="phone-number-input">username :</label>
                            <input className="form-input rounded-xl" id="password-input" type="text"
                                placeholder="Enter username :" />
                        </div>
                        <button
                        onClick={()=> postDataUser()}
                        className="btn btn-primary rounded-xl btn-block mb-5">
                            Sign Up
                        </button>
                        <div>
                            <hr width="100%" color="#C4C4C4" className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                            <div className="text-account top-[-44px]">Already have an account?</div>
                        </div>
                        <button 
                        className="flex w-full justify-center p-4 text-lg font-bold shadow-md mb-5 z-40 relative hover:shadow-xl duration-1000">
                            <img src={require("src/assets/google-icon.png")} alt="google-icon" width="27px" height="28px" className="mr-10"/>
                            Login with Google
                        </button>
                    </div>
                </div>
            </section>
        </main>
    </div>
   ) 
}


export default SignupSection