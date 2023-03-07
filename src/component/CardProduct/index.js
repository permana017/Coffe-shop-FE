import React, {useEffect, useState} from "react";
import {useNavigate, Link } from "react-router-dom";
import "src/component/CardProduct/style.css"
import axios from "axios";


function CardProduct() {
    
    const [data, setData] = useState([])
    const [filter, setFilter]= useState("")

    const getData = () => {
        axios
            .get(`http://localhost:5000/api/v1/products?cat=${filter}`)
            .then(res => {
                setData(res?.data?.data)
            })
            .catch(err => console.log(err))
        }

    useEffect(() => {
        getData()
    }, []);

    // console.log('cee', data)

    return (
        <div>
            <section className="list-product">
                {
                    data
                        ?.map((item, i) => (
                            <Link className="card-list-product"  to="/detailproduct" state={{ data: item }} >
                                <img
                                    src={
                                        `http://localhost:5000/upload/images/${item.images[0].filename}`
                                      }
                                    alt="Veggie-tomato"
                                    className="avatar rounded-full"/>
                                <h2 className="mt-20 text-center text-2xl font-bold w-[70%]">{item.tittle}</h2>
                                <h3 className="text  text-secondary text-base font-semibold absolute bottom-6">{item.price}</h3>
                            </Link>
                        ))
                }
            </section>
        </div>
    )

}











function CardProductAdmin(props) {
    const {isFilter} = props
    const navigate = useNavigate();
    const [data, setData] = useState([])
    // const [isDeleteId, SetDeletId] = useState([])

    const getData = () => {
        axios
            .get(`http://localhost:5000/api/v1/products?cat=${isFilter}`)
            .then(res => {
                console.log("data dari be");
                setData(res.data.data)
            })
            .catch(err => console.log(err))
        }

    useEffect(() => {
        getData()

    }, [isFilter]);

    const deleteCard = (id)=>{
        let dataUser = localStorage.getItem('@userLogin')
        dataUser = JSON.parse(dataUser)
        let token = dataUser?.data.token
        axios
        .delete(`http://localhost:5000/api/v1/products/${id}`,{
            headers: {
                'Access-Control-Allow-Headers':'*',
                'content-type': 'multipart/form-data',
                'token': token
                }
        })
            
        .then(res => {
            console.log("success delete", res);
            getData()
        })
        .catch(err => console.log(err))
    }
    return (
        <section className="list-product">
            {data?.map((item,i)=>(
                <div className="card-list-product flex justify-between">
                    <img
                        src={
                            `http://localhost:5000/upload/images/${item.images[0].filename}`
                          }
                        alt="Veggie-tomato"
                        className="avatar rounded-full"/>
                    <h2 className="mt-20 text-center text-2xl font-bold w-[70%]">{item.tittle}</h2>
                    <h3 className="text  text-secondary text-base font-semibold absolute bottom-6">{item.price}</h3>
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
