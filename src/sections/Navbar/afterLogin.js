import imgSearch from "src/assets/search.svg"
import imgChat from "src/assets/chat.svg"
import imgProfile from "src/assets/profile.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



const AfterLogin = ({setLogin}) =>{
    const navigate = useNavigate()
    const[show,setShow]=useState(false)


    const onLogout  = () =>{
        localStorage.removeItem('@userLogin')
        navigate('/')
    }

    const ShowLogout = () =>(
        <form className="flex flex-col absolute bg-white w-[150px] right-[-9px] p-3 top-[80px] z-20 shadow-lg">
            <button 
            onClick={() => navigate('/profile')}
            className="my-1 text-lg font-medium text-[#4F5665] hover:bg-[#4F5665] hover:text-white py-1 rounded-lg">Profile</button>
            <button className="my-1 text-lg font-medium text-[#4F5665] hover:bg-[#4F5665] hover:text-white py-1 rounded-lg">Setting</button>
            <button
            type="submit"   
            onClick={()=> onLogout()}
            className="my-1 text-lg font-medium text-[#4F5665] hover:bg-[#4F5665] hover:text-white py-1 rounded-lg">Logout</button>
        </form>
    )

    return(
    <div className="nav-profile relative">
        <img src={imgSearch} alt="search"/>
        <img src={imgChat} alt="chat"/>
        <img src={imgProfile} onClick={()=>setShow(!show)} alt="profile" className="rounded-full" width="33px" height="33px" />
        {show ? (<ShowLogout/>):null}
    </div>   
    )
}

export default AfterLogin