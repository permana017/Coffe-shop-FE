import React,{useState,useEffect} from "react";
import Navbar from "src/sections/Navbar"
import "src/style/Global.css"
import Footer from "src/sections/Footer";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function NewProduct() {
    let dataUser = localStorage.getItem('@userLogin')
    if (dataUser !== "undefined") {
        dataUser = JSON.parse(dataUser)   
    }
    let token = dataUser?.data?.token
    const [data, setData] = useState({tittle:"", description:"",category:"", price:"", image:"" })

    const [img,setImg] = useState('')
    // console.log("data img", img);

    const navigate = useNavigate()





    const handleUpdateData=(e,params)=>{
        if([params] == 'image'){
            let file = e.target.files[0];
            let fileReader = new FileReader();
            fileReader.onload = (e) => {
              const { result } = e.target;
              setImg(result);
            }
            fileReader.readAsDataURL(file);
            setData({...data,[params]:file})
        }else{
            setData({...data,[params]:e.target.value})
        }
    }


    

    const onSubmit= (e)=>{
        e.preventDefault()
        axios.post('https://permana-coffee.cyclic.app/api/v1/products', {
           ...data
          }, {
            headers: {
            'Access-Control-Allow-Headers':'*',
            'content-type': 'multipart/form-data',
            'token':token
            }
        })
            .then(function (response) {
            console.log(response);
            alert("add Product Success")
                
            })
            .catch(function (error) {
                console.log(error);
            })
    
    }
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center mt-40">
                <form className="container flex w-full">
                    <section className="flex flex-col w-3/6 pr-40">
                        <div className="flex flex-col items-center">

                                {img?(  <img
                                src={img}
                                alt="Img-product"
                                className="w-80 relative rounded-full w-[400px] h-[400px]"/>):(<>    <img
                                    src={require("src/assets/Ellipse 211.webp")}
                                    alt="Img-product"
                                    className="w-80 relative"/>
                                <img
                                    src={require("src/assets/photo-camera-black-tool 4 (1).webp")}
                                    alt="iconCamera"
                                    className="w-24 absolute top-60 w-[90px] h-[83px]"/></>)}
                        </div>
                        {/* <button
                            className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-5 px-7  rounded my-3 hover:shadow-lg shadow-black-500/50">
                            Take a Picture
                        </button> */}
                        <button
                            className="btn3 btn-input py-5 my-8" type="button">
                            Take a picture
                        </button>
                        <div>
                            <input 
                                type="file" accept="image/*" id="file" onChange={(e)=>handleUpdateData(e,"image")}/>
                            <label 
                            for="file"  
                            className="btn3 btn-primary py-5 flex w-full justify-center">Choose from gallery</label>
                        </div>
                        <div className="flex flex-col mt-28">
                            <label for="delivery-hour" className="text-xl font-semibold">Delevery Hours:</label>
                            <input
                                placeholder="select start hours"
                                className="border-solid border-2 rounded py-5 px-3 "></input>
                            <input
                                placeholder="select start hours"
                                className="border-solid border-2 rounded py-5 px-3 mt-3"></input>
                        </div>
                        <div className="flex flex-col mt-28 mb-20">
                            <label for="delivery-hour" className="text-xl font-bold">Input Stok:</label>
                            <input
                                placeholder="select start hours"
                                className="border-solid border-2 rounded py-5 px-3 mt-3"></input>
                        </div>
                    </section>
                    <section className="flex flex-col w-3/6">
                        <div className="flex flex-col ">
                            <label for="delivery-hour" className="text-xl font-bold">Name:</label>
                            <input onChange={(e)=>handleUpdateData(e ,"tittle")} placeholder="Click size you want to use for this product" className="border-b-2 py-5 px-3 mt-3"></input>
                        </div>
                        <div className="flex flex-col mt-8 ">
                            <label for="delivery-hour" className="text-xl font-bold">Price:</label>
                            <input onChange={(e)=>handleUpdateData(e,"price")} placeholder="Type the price" className="border-b-2 py-5 px-3 mt-3"></input>
                        </div>
                        <div className="flex flex-col mt-8 ">
                            <label for="delivery-hour" className="text-xl font-bold">Description:</label>
                            <input onChange={(e)=>handleUpdateData(e,"description")} placeholder="Describe your product min. 150 characterss" className="border-b-2 py-5 px-3 mt-3"></input>
                        </div>
                        <div className="flex flex-col mt-8 ">
                            <label for="delivery-hour" className="text-xl font-bold">Category:</label>
                            <input onChange={(e)=>handleUpdateData(e,"category")} placeholder="Describe your product min. 150 characterss" className="border-b-2 py-5 px-3 mt-3"></input>
                        </div>
                        <div className="flex flex-col mt-8 ">
                            <label for="delivery-hour" className="text-xl font-bold">Input product size:</label>
                            <input  placeholder="Click size you want to use for this product" className=" py-1 px-3 mt-3"></input>
                        </div>
                        <div className="mt-3 flex">
                            <button type="button" className="bg-amber-400 hover:bg-amber-500 mr-3 hover:shadow-lg shadow-black-500/50 text-white font-bold py-5 px-7 rounded-full text-xl">R</button>
                            <button type="button" className="bg-amber-400 hover:bg-amber-500 mr-3 hover:shadow-lg shadow-black-500/50 text-white font-bold py-5 px-7 rounded-full text-xl">L</button>
                            <button type="button" className="bg-amber-400 hover:bg-amber-500 mr-3 hover:shadow-lg shadow-black-500/50 text-white font-bold py-5 px-5 rounded-full text-xl">XL</button>
                        </div>
                        <div className="flex flex-col mt-8 ">
                            <label for="delivery-hour" className="text-xl font-bold">Input delivery methods:</label>
                            <input placeholder="Click size you want to use for this product" className="py-1 px-3 mt-3"></input>
                        </div>
                        <div className="mt-3 flex">
                            <button type="button" className="bg-amber-400 hover:bg-amber-500 mr-3 hover:shadow-lg shadow-black-500/50 text-white font-bold py-4 px-7 rounded-xl text-xl">Home Delivery</button>
                            <button type="button" className="bg-amber-400 hover:bg-amber-500 mr-3 hover:shadow-lg shadow-black-500/50 text-white font-bold py-4 px-7 rounded-xl text-xl">Home Delivery</button>
                            <button type="button" className="bg-amber-400 hover:bg-amber-500 mr-3 hover:shadow-lg shadow-black-500/50 text-white font-bold py-4 px-5 rounded-xl text-xl">Take away</button>
                        </div>
                        <div>
                        <button
                            onClick={(e)=> onSubmit(e)}
                            type="button"
                            className="btn3 btn-secondary btn-block py-6 rounded-xl mt-20">
                            Save Product
                        </button>
                        <button
                            type="button"
                            className="btn3 btn-light btn-block py-6 rounded-xl mt-5 mb-12">
                            Cancle
                        </button>  
                        </div>
                    </section>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default NewProduct