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
        }).then((res)=> {
            console.log(res.data.data)
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
                <nav className="flex  w-full justify-between p-[55px]">
                    <div className="brand">
                        <img src={require("src/assets/coffee 1.png")} alt="" width="20" height="20"/>
                        <h3 className="font-bold text-xl">Permana Coffe</h3>
                    </div>
                    <button 
                    onClick={()=> navigate("/loginpage")}
                    className="btn-primary rounded-full flex items-center py-2 px-7 font-semibold">
                        Login
                    </button>
                </nav>
                <div className="flex flex-col items-center">
                    <h3 className="text-center text-secondary text-3xl font-bold">signup</h3>
                    <div 
                    className="w-[75%] py-[50px] mb-28">
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
                        className="btn btn-google arounded-xl btn-block mb-5 z-40 relative">
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