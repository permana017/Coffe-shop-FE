import { useNavigate } from "react-router-dom"



const BeforeLogin = () => {
    const navigate = useNavigate()
    return (
        <div className="flex gap-3 text-brown">
            <button className="font-semibold" onClick={() => navigate('/loginpage')} >Login</button>
            <button className="font-semibold p-1.5 px-3 bg-orange rounded-full whitespace-nowrap" onClick={() => navigate('/register')}>Sign Up</button>
        </div>
    )
}

export default BeforeLogin