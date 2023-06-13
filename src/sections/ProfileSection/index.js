import React,{useState, useEffect} from "react";
import "src/sections/ProfileSection/style.css"
import axios from "axios";
import avatar from "src/assets/PngItem_786293.png"




 function ProfileSection() {


    const [dataId, setDataId] = useState("")
     const [defaultData, setDefaultData] = useState([])
    const [imgDisplay, setImgDisplay] = useState("")
    useEffect(() => {
        let dataUser = localStorage.getItem('@userLogin')
        if (dataUser !== "undefined") {
            dataUser = JSON.parse(dataUser)
            setDataId(dataUser?.data?.user?.id);
        }
    }, [])

    const [formEdit, setFormEdit] = useState({
        username:"",
        email:"",
        phone:"",
        address:"",
        img:""
    })


    useEffect(() => {
        if (dataId !== "") {
            axios.get(`https://permana-coffee.cyclic.app/api/v1/users/${dataId}`)
            .then(function (response) {
            setDefaultData(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }, [dataId])
    
    

    const handleUpdateData=(e)=>{
        e.preventDefault();
        const file = e.target.files[0];
        setFormEdit({...formEdit, img:file})
        setImgDisplay(URL.createObjectURL(file))
    }



    const handleEdit = () => {
        const body = new FormData();
        body.append('username',formEdit.username);
        body.append('email', formEdit.email);
        body.append('phone', formEdit.phone);
        body.append('address', formEdit.address);
        body.append('img', formEdit.img);
        axios.patch(`https://permana-coffee.cyclic.app/api/v1/users/${dataId}`,body, {
          method: 'PATCH',
          headers: {
            'Content-type': 'multipart/form-data',
          }
        }).then(function (response) {
        alert("success update data")
          })
          .catch(function (error) {
              console.log(error);
          })
      }

    const Profile = () =>{
        if (defaultData.img) {
            return ( <img className="mb-3 rounded-full h-48 w-48" src={`https://permana-coffee.cyclic.app/upload/images/${defaultData.img}`} alt="profile"/>) 
        } else {
            return (<img className="mb-3 rounded-full h-48 w-48" src={avatar} alt="profile"/>)  
        }
    }

    const ImgChange =()=>{
        return (<img className="mb-3 rounded-full h-48 w-48" src={imgDisplay} alt="profile"/>)
    } 

    return (
        <div>
            <main className="bg-profile">
                <div className="container">
                    <div className="text-3xl mt-[200px] text-white font-bold">User Profile</div>
                    <div
                        className="bg-[#F8F8F8] w-full h-[951px] mt-10 mb-20 rounded-3xl p-12 flex">
                        <div className=" w-[35%] h-full flex justify-center p-10">
                            <div className="w-full flex items-center flex-col px-8">
                                <div className="text-center">
                                    {formEdit.img === "" ? <Profile/> : <ImgChange/>}
                                    <p className="">{defaultData.username}</p>
                                    <p>{defaultData.email}</p>
                                </div>
                                <div className="w-full mt-5">
                                    <input 
                                        multiple hidden
                                        type="file" accept="image/*" id="file" 
                                        onChange={(e)=>handleUpdateData(e)}/>
                                    <label 
                                    for="file"  
                                    className="btn-primary py-4 flex w-full justify-center rounded-md font-bold">Choose Photo</label>
                                </div>
                                <button className="px-0 btn-secondary btn-block py-4 mt-3 rounded-md font-bold">
                                    Remove Photo
                                </button>
                                <button
                                    className="border-2 border-[#9F9F9F] rounded-xl py-4 w-full my-10 text-xl text-[#6A4029] font-bold">
                                    Edit Password
                                </button>
                                <p className="text-xl text-center text-xl font-bold text-[#6A4029]">Do you want to save the change?</p>
                                <button
                                onClick={handleEdit} 
                                className="px-0 btn-secondary btn-block py-4 mt-10 rounded-2xl  font-bold">
                                    Save Change
                                </button>
                                <button className="px-0 btn-primary  btn-block py-4 mt-3 rounded-2xl  font-bold">
                                    Cancle
                                </button>
                            </div>
                        </div>
                        <div
                            className="bg-[#fff] w-[65%] h-full rounded-2xl shadow-xl px-5 py-3 flex flex-col">
                            <div className="flex">
                                <div className="w-[50%]">
                                    <div className="flex flex-col">
                                        <p className="text-[#4F5665] font-bold text-2xl">Contacts</p>
                                        <label className="text-xl text-[#9F9F9F] mt-10">Email adress :</label>
                                        <input
                                            onChange={(e)=>setFormEdit({...formEdit,email:e.target.value})}
                                            type="email"
                                            placeholder=""
                                            defaultValue={defaultData.email}
                                            className="border-b-2 text-xl focus:outline-none"/>
                                        <label className="text-xl text-[#9F9F9F] mt-10">Delivery adress :</label>
                                        <textarea
                                            onChange={(e)=>setFormEdit({...formEdit,address:e.target.value})}
                                            placeholder=""
                                            defaultValue={defaultData.address}
                                            className="border-b-2 text-xl"/>
                                    </div>
                                    <div className="flex flex-col mt-10">
                                        <p className="text-[#4F5665] font-bold text-2xl">Details</p>
                                        <label className="text-xl text-[#9F9F9F] mt-10">Display name :</label>
                                        <input placeholder="" type="text" defaultValue={defaultData.username} className="border-b-2 text-xl focus:outline-none"/>
                                        <label className="text-xl text-[#9F9F9F] mt-10">First name :</label>
                                        <input
                                        onChange={(e)=>setFormEdit({...formEdit,username:e.target.value})} 
                                        placeholder="" type="text" defaultValue={defaultData.username} className="border-b-2 text-xl focus:outline-none"/>
                                        <label className="text-xl text-[#9F9F9F] mt-10">Last name :</label>
                                        <input placeholder="" type="text" defaultValue={defaultData.username} className="border-b-2 text-xl focus:outline-none"/>
                                    </div>
                                </div>
                                <div className="w-[50%] px-10">
                                    <div className="flex flex-col mt-8">
                                        <label className="text-xl text-[#9F9F9F] mt-10">Mobile number :</label>
                                        <input
                                        onChange={(e)=>setFormEdit({...formEdit,phone:e.target.value})} type="number"
                                        defaultValue={defaultData.phone} className="border-b-2 text-xl focus:outline-none"/>
                                    </div>
                                    <div className="flex flex-col mt-60">
                                        <label className="text-xl text-[#9F9F9F]" >DD/MM/YY</label>
                                        <input placeholder="" className="border-b-2 text-xl" type="date" onChange={(e)=>console.log(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <form className="flex mt-16 justify-center">
                                
                                <div className="flex items-center">
                                    <input
                                    type="radio"
                                    className="w-4 h-4 accent-[#6A4029] text-[#9F9F9F] " placeholder=""/>
                                    <label className="text-[#9F9F9F] ml-3">
                                        Male 
                                    </label>
                                </div>
                                <div className="flex items-center ml-10">
                                    <input type="radio" className="w-4 h-4 accent-[#6A4029]" placeholder=""/>
                                    <label className="text-[#9F9F9F] ml-3">
                                        Female
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProfileSection