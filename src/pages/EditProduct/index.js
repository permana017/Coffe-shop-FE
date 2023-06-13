import React,{useState} from "react";
import Navbar from "src/sections/Navbar"
import "src/style/Global.css"
import Footer from "src/sections/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

function EditProduct() {
    const location = useLocation();
    let data = location?.state.data
    

    let dataUser = localStorage.getItem('@userLogin')
    if (dataUser !== "undefined") {  
        dataUser = JSON.parse(dataUser)   
    }
    
    let token = dataUser?.data?.token

    // const [img,setImg] = useState('')
    const [isData, setIsData] = useState({ tittle: "", description: "", category: "", price: "", image: "" })


    const handleUpdateData = (e, params) => {
        setIsData({ ...isData, [params]: e.target.value })
    }
    const onSubmit= ()=>{

        axios.put(`https://permana-coffee.cyclic.app/api/v1/products/${data?.id}`,
         {
           ...isData
          }, {
            headers: {
            'Access-Control-Allow-Headers':'*',
            'content-type': 'multipart/form-data; boundary=<calculated when request is sent>',
            'token':token
            }
        })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    
    }
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center mt-[200px]">
                <main className="container flex w-full">
                    <section className="flex flex-col w-3/6 pr-20 justify-between">
                        {/* {img ? (
                            <img
                            className="w-full"
                            src={img}
                            alt=""/>
                        ):(
                            )} */}
                            <img
                            className="w-full"
                            src={require("src/assets/edit-product-image.webp")}
                            alt=""/>
                        <p className="text-base my-8">Delivery only on<span className="font-bold"> Monday to <br/> friday </span>at <span className="font-bold">1 - 7 pm</span></p>
                    </section>
                    <section className="flex flex-col w-3/6">
                        <div className="flex flex-col ">
                            <input
                                onChange={(e)=> handleUpdateData(e,"tittle")}
                                type="text"
                                defaultValue={data?.tittle}
                                className="border-b-2 px-3 mt-3 text-6xl font-black"/>
                            <input
                                onChange={(e)=> handleUpdateData(e,"price")}
                                type="text"
                                defaultValue={data?.price}
                                className="border-b-2 px-3 mt-5 text-4xl"></input>
                            <input
                                onChange={(e)=> handleUpdateData(e,"category")}
                                type="text"
                                defaultValue={data?.category}
                                className="border-b-2 px-3 mt-5 text-4xl"></input>
                            <textarea 
                            onChange={(e)=> handleUpdateData(e,"description")}
                            defaultValue={data?.description} className="border-b-2  px-3 mt-3 h-36 "/>
                            <input
                                placeholder="Select Size"
                                className="border-b-2 py-5 px-3 mt-14 border-solid border-2"/>
                            <input
                                placeholder="Select Delivery Methods"
                                className="border-b-2 py-5 px-3 mt-10 mb-10 border-solid border-2"/>
                        </div>
                        <div className="mt-3 flex">
                            <button
                                className="hover:bg-amber-500 mr-3 hover:shadow-lg shadow-black-500/50 text-black font-bold py-5 px-1 rounded-xl text-xl border-solid border-2 w-1/3 ">+ 2 -</button>
                            <button
                                className="bg-amber-400 hover:bg-amber-500 mr-3 hover:shadow-lg shadow-black-500/50 text- font-bold py-5 px-7 rounded-xl text-xl w-2/3">Add to Cart</button>
                        </div>
                        <button
                            onClick={()=> onSubmit()}
                            className="bg-yellow-800 hover:bg-yellow-900 mr-3 hover:shadow-lg shadow-black-500/50 text-white font-bold py-5 px-7 rounded-xl text-xl w-full my-9">Save Change</button>
                    </section>
                </main>
            </div>
            <Footer/>
        </div>
    )
}

export default EditProduct