import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgNavbar from "../../assets/coffee 1.png";
import "../Navbar/style.css"
import "../../style/Global.css"
import AfterLogin from "./afterLogin";
import BeforeLogin from "./beforeLogin";






function Navbar() {
    const [login, setLogin]=useState(false)

    const [admin, setAdmin]=useState(true)
    const navigate = useNavigate();
    
        useEffect(()=> {
        
        if(localStorage.getItem('@userLogin')) {
            setLogin(true)
        }else {
            setLogin(false)
        }
        },[])

    useEffect(() => {
        let dataUser = localStorage.getItem('@userLogin')
        dataUser = JSON?.parse(dataUser)
        let role = dataUser?.data?.user?.role
        console.log("role in product", role)
        if (role === "admin") {
            setAdmin(true)
        } else {
            setAdmin(false)
        }        
        
    }, [])


    return (<div>
        <nav className="navbar">
            <div className="container">
                <div className="inner">
                    <div className="logo">
                        <img src={imgNavbar} alt="coffe"/>
                            <h3>permana coffe</h3>
                        </div>
                        <div className="menu">
                            <p onClick={() => navigate('/')} className="cursor-pointer hover:text-amber-800 hover:font-bold">Home</p>
                            <p onClick={() => admin ? (navigate('/productAdmin')) : navigate('/products') }  className="cursor-pointer hover:text-amber-800 hover:font-bold">Product</p>
                            <p onClick={() => navigate('/payment')} className="cursor-pointer hover:text-amber-800 hover:font-bold">Your Cart</p>
                            <p onClick={() => navigate('/history')}  className="cursor-pointer hover:text-amber-800 hover:font-bold">History</p>
                        </div>
                            {login?(<AfterLogin/>):(<BeforeLogin/>)}
                    </div>
                </div>
            </nav>
        </div>
     )
}


export default Navbar