import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../context/login-context";

export const Navbar = () => {

    const navigate = useNavigate();
    const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);
    const { token, email, loginDispatch } = useLogin();

    console.log(email);
    console.log('token',token);
    const onLoginClick = () => {
        if(!token?.access_token){
            navigate('/auth/login')
        } else {
            loginDispatch({
                type:"LOGOUT",
            })
            navigate('/auth/login')
        }

    }

    return (
        <header>
            <div>
                <h1 onClick={()=> navigate('/')}>Shop It</h1>
            </div>
            <nav className="nav">
                <img src={`${process.env.PUBLIC_URL}/shopping_cart.png`} onClick={()=> navigate('/cart')}/>

                <div className="login">
                    <img src={`${process.env.PUBLIC_URL}/account_circle.png`} onClick={()=>setIsAccountDropDownOpen(!isAccountDropDownOpen)}/>
                    {
                        isAccountDropDownOpen && <p onClick={onLoginClick}>
                            {
                                token?.access_token ? 'Logout' : 'Login'
                            }</p> 
                    }
                    
                </div>        
            </nav>
        </header>
    )
}