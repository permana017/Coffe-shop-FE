import React,{useEffect, useState} from "react";
import "src/sections/HistorySection/style.css"
import "src/style/Global.css"
import image from "src/assets/Veggie-tomato-mix.webp"
import axios from "axios";


function HistoryPage() {

    const [data, setData] = useState([])
    const [idUser, setIdUser] = useState("")
    // console.log("set", data);
    console.log("id history",idUser);

    useEffect(() => {
        let dataUser = localStorage?.getItem('@userLogin')
        if (dataUser !== "undefined") {
            dataUser = JSON.parse(dataUser)   
        }
        setIdUser(dataUser.data.user.id)
    }, [])

    const  getData  = () => {
         axios
            .get(`https://permana-coffee.cyclic.app/api/v1/order/${idUser}`)
            .then(res => {
                // console.log("data dari be");
                setData(res.data.data)
            })  
            .catch(err => console.log(err))
        }

    useEffect(() => {
        getData()
    }, [idUser]);


    return(
        <div>
            <main className="history-page">
                <section className="container min-h-[1000px] mt-[150px]">
                        <section className="desc-history">
                            <h1 className="text-label text-center mb-3">Let’s see what you have bought!</h1>
                            <p className="text-center m-0">Long press to delete item</p>
                        </section>
                        <section className="box-history">
                            {data.map((item, i)=>(
                                <div className="card-history" key={i}>
                                    <img src={`https://permana-coffee.cyclic.app/upload/images/${item.img}`} alt="Veggie-tomato-mix" width="75px" height="75px" className="rounded-full mr-10"/>
                                    <div>
                                        <h2 className="text-block m-0 text-2xl">{item.title}</h2>
                                        <p className="text-secondary mb-0 text-xl">IDR {item.price}</p>
                                        <p className="text-secondary m-0 text-xl">Delivered</p>
                                    </div>
                                </div>
                            ))}
                        </section>
                </section>
            </main>
        </div>
    )
}

export default HistoryPage