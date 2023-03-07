import React, { useState, useEffect } from "react";
// import {BrowserRouter as Router, } from "react-router-dom";
import Home from "../pages/Home";
import Products from "src/pages/Products";
import History from "src/pages/History";
import NewProduct from "src/pages/NewProduct";
import EditProduct from "src/pages/EditProduct";
import ProductAdmin from "src/pages/ProductAdmin";
import LoginPage from "src/pages/Login";
import SignUpPage from "src/pages/SignUpPage";
import ForgotPassPage from "src/pages/ForgotPasswordPage";
import ProductDetailPage from "src/pages/ProductDetailPage";
import PaymentPage from "src/pages/PaymentPage";
import Profile from "src/pages/Profile";
import { BrowserRouter as Router, Routes , Route, Navigate, redirect } from 'react-router-dom';
import { useSelector } from "react-redux";


const App = () => {
    const [isAdmin,setAdmin] = useState(false)
    const {auth} = useSelector((state) => state)


    useEffect(() => {
        let dataUser = localStorage.getItem('@userLogin')
        dataUser = JSON.parse(dataUser)
        console.log("data user", dataUser?.data?.user?.role);
        let role = dataUser?.data?.user?.role
        if (role === "admin") {
            setAdmin(true)

        } else {
            setAdmin(false)

        }        
        
        console.log("ieu data di routers",dataUser );
        console.log("auth",auth);
    }, [auth])

    useEffect(() => {
        console.log("cheking");
        if (isAdmin) {
    
            // navigate("/ProductAdmin")
            redirect("/ProductAdmin")
            // goToProduct()
        } else {

            redirect("/products")
            // navigate("/products")
        }        
        
    }, [isAdmin])

    // const goToProduct = () =>{
    //    return redirect("/ProductAdmin")
    // }


    let userAdmin = [
        {
            path: "/",
            element: <Home/>
        }, {
            path: "/products",
            element: <Products/>
        }
        , {
            path: "/history",
            element: <History/>
        }
        , {
            path: "/newProduct",
            element: <NewProduct/>
        },
        {
            path: "/editProduct",
            element: <EditProduct/>
        },
        {
            path: "/ProductAdmin",
            element: <ProductAdmin/>
        },
        {
            path: "/loginpage",
            element: <LoginPage/>
        },
        {
            path: "/register",
            element: <SignUpPage/>
        },
        {
            path: "/forgotpassword",
            element: <ForgotPassPage/>
        },
        {
            path: "/detailproduct",
            element: <ProductDetailPage/>
        },
        {
            path: "/payment",
            element: <PaymentPage/>
        },
        {
            path: "/Profile",
            element: <Profile/>
        }
    ]


    
    let userPublic = [
        {
            path: "/",
            element: <Home/>
        }, {
            path: "/products",
            element: <Products/>
        }
        , {
            path: "/history",
            element: <History/>
        },
        {
            path: "/loginpage",
            element: <LoginPage/>
        },
        {
            path: "/register",
            element: <SignUpPage/>
        },
        {
            path: "/forgotpassword",
            element: <ForgotPassPage/>
        },
        {
            path: "/detailproduct",
            element: <ProductDetailPage/>
        },
        {
            path: "/payment",
            element: <PaymentPage/>
        },
        {
            path: "/Profile",
            element: <Profile/>
        }
    ]



    return (
        <Router>
            <Routes>
                {isAdmin?userAdmin.map((item,i)=>(
                     <Route  path={item.path} element={item.element} />
                )):userPublic.map((item,i)=>(
                     <Route  path={item.path} element={item.element} />
                ))}
                <Route path="/404" element={(<div className="m-5">404 : PAGE NOT FOUND</div>) } />
                <Route path="*" element={ <Navigate to="/404" replace />} />
            </Routes>
        </Router>
    );
};

export default App;