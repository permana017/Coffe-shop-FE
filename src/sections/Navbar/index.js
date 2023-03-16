import React from "react";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import imgNavbar from "../../assets/coffee 1.png";
import "../Navbar/style.css"
import "../../style/Global.css"
import AfterLogin from "./afterLogin";
import BeforeLogin from "./beforeLogin";
import NavMobile from "src/component/NavMobile";

function Navbar() {
    const [login, setLogin] = useState(false)
    const [admin, setAdmin] = useState(true)
    const [img, setImg] = useState("")
    // console.log("data img", img);
    const [showMobile, setShowMobile] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {

        if (localStorage.getItem('@userLogin')) {
            setLogin(true)
        } else {
            setLogin(false)
        }
    }, [])

    useEffect(() => {
        let dataUser = localStorage.getItem('@userLogin')
        if (dataUser !== "undefined") {
            dataUser = JSON.parse(dataUser)
        }
        let role = dataUser
            ?.data
                ?.user
                    ?.role
        if (role === "admin") {
            setAdmin(true)
        } else {
            setAdmin(false)
        }

    }, [])

    const handleOnClick = (route) => {
        setImg(route)
        navigate(route)
    }

    return (
        <div>
            <nav className="navbar">
                {
                    showMobile
                        ? <div className="relative w-full bg-transparent">
                                <div className="absolute w-[80%] h-[100vh]  bg-[#F2F2F2] rounded-tr-[30px]">
                                    <NavMobile/>
                                </div>
                            </div>
                        : null
                }
                <div className="container">
                    <div className="inner">
                        <div className="logo">
                            <img src={imgNavbar} alt="coffe"/>
                            <h3>permana coffe</h3>
                        </div>
                        <div className="hidden md:flex">
                            <p
                                onClick={() => handleOnClick("/")}
                                className="cursor-pointer mr-5 hover:text-amber-800 hover:font-bold">Home</p>
                            <p
                                onClick={() => handleOnClick('/products')}
                                className="cursor-pointer mr-5 hover:text-amber-800 hover:font-bold">Product</p>
                            <p
                                onClick={() => handleOnClick("/payment")}
                                className="cursor-pointer mr-5 hover:text-amber-800 hover:font-bold">Your Cart</p>
                            <p
                                onClick={() => handleOnClick("/history")}
                                className="cursor-pointer mr-5 hover:text-amber-800 hover:font-bold">History</p>
                        </div>
                        <div className="hidden md:flex">
                            {
                                login
                                    ? (<AfterLogin isLogin={img}/>)
                                    : (<BeforeLogin/>)
                            }
                        </div>
                        <div onClick={()=> setShowMobile(!showMobile)} className="md:hidden">
                            <img src={require("src/assets/hambuger-menu.png")} alt="menu-icon"/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar