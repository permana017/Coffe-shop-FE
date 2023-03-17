import React, {useEffect, useState} from "react";
import {useNavigate, Link } from "react-router-dom";
import "src/component/CardProduct/style.css"
import axios from "axios";



function CardProduct(props) {
    const {isFilter, isSearch} = props
    const [data, setData] = useState([])
    const [filter, setFilter]= useState("")


    const url = ()=>{
        if (isFilter !== "") {
             return (`https://permana-coffee.cyclic.app/api/v1/products?cat=${isFilter}`)
        } else if (isSearch !== "") {
            return (`https://permana-coffee.cyclic.app/api/v1/products?search=${isSearch}`)
        }else{
            return (`https://permana-coffee.cyclic.app/api/v1/products`)
        }
    }

    const getData = () => {
        axios
            .get(url())
            .then(res => {
                setData(res?.data?.data)
            })
            .catch(err => console.log(err))
        }

    useEffect(() => {
        getData()
    }, [isFilter, isSearch]);


    return (
        <div>
            <section className="list-product">
                {
                    data
                        ?.map((item, i) => (
                            <Link  key={i} className="card-list-product"  to="/detailproduct" state={{ data: item }} >
                                <img
                                    src={
                                        `https://permana-coffee.cyclic.app/upload/images/${item.images[0].filename}`
                                      }
                                    alt="Veggie-tomato"
                                    className="avatar rounded-full"/>
                                <h2 className="mt-20 text-center text-2xl font-bold w-[70%]">{item.tittle}</h2>
                                <h3 className="text  text-secondary text-base font-semibold absolute bottom-6">IDR {item.price}</h3>
                            </Link>
                        ))
                }
            </section>
        </div>
    )

}











function CardProductAdmin(props) {


    const {isFilter, isSearch} = props
    console.log("in admin",isSearch);
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [isDeleteId, SetDeletId] = useState([])

    const url = () =>{
        if (isFilter !== "") {
            return (`https://permana-coffee.cyclic.app/api/v1/products?cat=${isFilter}`)
       } else if (isSearch !== "") {
           return (`https://permana-coffee.cyclic.app/api/v1/products?search=${isSearch}`)
       }else{
           return (`https://permana-coffee.cyclic.app/api/v1/products`)
       } 
    }

    console.log(url());

    const getData = () => {
        axios
            .get(url())
            .then(res => {
                // console.log("data dari be");
                setData(res.data.data)
            })
            .catch(err => console.log(err))
        }

    useEffect(() => {
        getData()

    }, [isFilter]);

    const deleteCard = (id)=>{
        let dataUser = localStorage.getItem('@userLogin')
        if (dataUser !== "undefined") { 
            dataUser = JSON.parse(dataUser)
        }
        let token = dataUser?.data.token
        axios
        .delete(`https://permana-coffee.cyclic.app/api/v1/products/${id}`,{
            headers: {
                'Access-Control-Allow-Headers':'*',
                'content-type': 'multipart/form-data',
                'token': token
                }
        })
            
        .then(res => {
            alert("Succes Deleted")
            // console.log("success delete", res);
            getData()
        })
        .catch(err => console.log(err.response.data.message))
    }
    return (
        <section className="list-product">
            {data?.map((item,i)=>(
                <div key={i} className="card-list-product flex justify-between">
                    <img
                        src={
                            `https://permana-coffee.cyclic.app/upload/images/${item.images[0].filename}`
                          }
                        alt="Veggie-tomato"
                        className="avatar rounded-full"/>
                    <h2 className="mt-20 text-center text-2xl font-bold w-[70%]">{item.tittle}</h2>
                    <h3 className="text  text-secondary text-base font-semibold absolute bottom-6">IDR {item.price}</h3>
                    <Link to="/editproduct" state={{ data: item }}>
                        <img 
                        className="absolute icon-edit "
                        src={require("src/assets/circle-edit.png")}
                        alt=""></img>
                        <img onClick={() => navigate('/editProduct')} className="absolute pena" src={require("src/assets/pena.png")} alt=""></img>
                    </Link>
                    <button 
                    onClick={()=> deleteCard(item.id)}
                    >
                        <img className="icon-delete" src={require("src/assets/delete-icon.png")} alt="" />
                        <img className="icon-trash" src={require("src/assets/trash.png")} alt="" />
                    </button>
                </div>
            ))}
        </section>

        
    )
}

export {
    CardProduct,
    CardProductAdmin
}
