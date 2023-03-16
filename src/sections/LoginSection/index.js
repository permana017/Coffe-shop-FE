import React, {useEffect, useState} from "react";
import "src/style/Global.css"
import "../../sections/LoginSection/style.css"
import {signIn} from "src/redux/Auth/authAction";
import {useDispatch, useSelector} from "react-redux";
import {redirect, useNavigate} from "react-router-dom";



function Login() {
    const navigate = useNavigate()
    const {auth} = useSelector((state) => state)
    const dispatch = useDispatch();
    const [loginForm, setLoginForm] = useState(
        {email: "", password: ""}
    )
    const [error, setError] = useState(false)

    useEffect(() => {
        let dataUser = localStorage.getItem('@userLogin')
        if (dataUser !== "undefined") {
            dataUser = JSON.parse(dataUser)   
        }
        let token = dataUser?.data?.token
        if (token) {
            navigate('/products')
        }
        
    }, [auth])

    const handleLogin = (event) => {
        event.preventDefault()
        dispatch(signIn(loginForm))
    }

    return (
        <div>
            <main className="container2">
                <section className="auth-bg"></section>
                <section className="auth-form">
                    <nav className="flex w-full justify-between p-[55px]">
                        <div className="brand">
                            <img
                                src={require("src/assets/coffee 1.png")}
                                alt=""
                                className="w-[20px] h-[20px]"/>
                            <h3 className="text-xl font-bold " onClick={() => navigate('/newproduct')}>Permana Coffe</h3>
                        </div>
                        <button
                            onClick={()=>navigate("/register")}
                            className="btn-primary rounded-full flex items-center py-2 px-7 font-semibold">
                            Sign Up
                        </button>
                    </nav>
                    <div className="flex flex-col items-center">
                        <h3 className="text-center text-secondary font-bold mb-12 text-3xl">Login</h3>
                        <form onSubmit={handleLogin} className="pb-[200px] z-40 mt-0 w-[75%]">
                            <div className="mb-5">
                                <label className="form-label" for="email-input">email :</label>
                                <input
                                    onChange={(e) => setLoginForm({
                                        ...loginForm,
                                        email: e.target.value

                                    }, )}
                                    className="form-input rounded-xl"
                                    id="email-input"
                                    type="email"
                                    placeholder="Example: johndoe@gmail.com"/>
                            </div>
                            <div className="mb-5">
                                <label className="form-label" for="password-input">Password :</label>
                                <input
                                    onChange={(e) => setLoginForm({
                                        ...loginForm,
                                        password: e.target.value

                                    }, )}
                                    className="form-input rounded-xl"
                                    id="password-input"
                                    type="password"
                                    placeholder="Example: ****"/>
                            </div>
                            <div></div>
                            <button type="submit" className="btn btn-primary rounded-xl btn-block mb-5 ">
                                Login
                            </button>
                            <div>
                                <hr
                                    width="100%"
                                    color="#C4C4C4"
                                    className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                                <div className="text-account top-[-44px]">Already have an account?</div>
                            </div>
                            <button className="btn btn-google arounded-xl btn-block mb-5 btn-primary:hover">
                                <img
                                    src={require("src/assets/google-icon.png")}
                                    alt="google-icon"
                                    width="27px"
                                    height="28px"
                                    className="mr-10"/>
                                Login with Google
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Login