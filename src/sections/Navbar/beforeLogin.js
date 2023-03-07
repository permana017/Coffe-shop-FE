import { useNavigate } from "react-router-dom"



const BeforeLogin = () =>{
    const navigate = useNavigate()
    return(
    <div className="login-signup">
        <button className="login" onClick={() => navigate('/loginpage')} >Login</button>
        <button className="signup" onClick={() => navigate('/register')}>Sign Up</button>
    </div>
    )
}

export default BeforeLogin