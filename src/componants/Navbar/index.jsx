import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../context/login-context";

export const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!isMenuOpen);

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

    const [selectedLang, setSelectedLang] = useState('');

    const languages = [
        { code: 'EN', label: 'English' },
        { code: 'हिं', label: 'हिंदी' },
        { code: 'த', label: 'தமிழ்' },
        { code: 'বা', label: 'বাংলা' },
    ];

    const handleChange = (e) => {
        setSelectedLang(e.target.value);
        console.log("Selected language:", e.target.value);
    };

    return (
        <header>
            <div className="main-header">
                <img src={`${process.env.PUBLIC_URL}/hamburger.png`} alt="menu" className="menu-icon" onClick={toggleMenu}/>
                <img className="logo" src={`${process.env.PUBLIC_URL}/square.png`} alt="logo"/> 
                <h1 className="website-title">LOGO</h1>
                <nav className="nav">
                    <img className="nav-icon search" src={`${process.env.PUBLIC_URL}/search.png`} alt="search" onClick={()=> navigate('/')}/>
                    <img className="nav-icon wishlist-icon" src={`${process.env.PUBLIC_URL}/wishlist.png`} alt="wishlist" onClick={()=> navigate('/wishlist')}/>
                    <img className="nav-icon shopping-bag" src={`${process.env.PUBLIC_URL}/shopping-bag.png`} alt="shopping-bag"/>

                    <div className="login">
                        <img className="nav-icon account" src={`${process.env.PUBLIC_URL}/user.png`} alt="user" onClick={()=>setIsAccountDropDownOpen(!isAccountDropDownOpen)}/>
                        {
                            isAccountDropDownOpen && <p onClick={onLoginClick}>
                                {
                                    token?.access_token ? 'Logout' : 'Login'
                                }</p> 
                        }
                        
                    </div> 
                    <div className="language-dropdown">
                        <select value={selectedLang} onChange={handleChange}>
                            {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.code}
                            </option>
                            ))}
                        </select>
                    </div>       
                </nav>
            </div>
            <div className={`nav-bottom ${isMenuOpen ? "mobile-menu" : ""}`}>
                <h4 onClick={()=> navigate('/')}>SHOP</h4>
                <h4>SKILLS</h4>
                <h4>STORIES</h4>
                <h4>ABOUT</h4>
                <h4 onClick={()=> navigate('/contact')}>CONTACT US</h4>
            </div>
        </header>
        
    )
}