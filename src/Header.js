import logo from "./images/AF_Logo_spaced.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export default function Header() {
    const navigate = useNavigate();

    const [menuPop, setMenuPop] = useState('popout-menu-hidden');

    function menuToggle() {
        if (menuPop == 'popout-menu-hidden'){
            setMenuPop('popout-menu-active')
        } else {
            setMenuPop('popout-menu-hidden')
        }

    }

    return (
    <>
    <div className="header">
        <div></div>
        {/* ---------------------FULL WIDTH LOGO----------------------- */}
            <div className="header-logo-full" onClick={()=>{
                navigate('/');
            }}>
                {/* <img src={logo} className="header-logo" alt="AFACTOR Media" /> */}
                <div className="logogroup">
                    <h1>A<span className="slash">/</span>FACTOR</h1>
                    <span className="logosub">MEDIA</span>
                </div>
            </div>
        {/* ---------------------MOBILE LOGO----------------------- */}
            <div className="header-logo-short" onClick={()=>{
                navigate('/');
            }}>
                {/* <img src={logo} className="header-logo" alt="AFACTOR Media" /> */}
                <div className="logogroup">
                    <h1>A<span className="slash">/</span>F</h1>
                </div>
            </div>
            <div className="header-spacer"></div>
        {/* ---------------------FULL WIDTH MENU----------------------- */}
            {/* <div className="header-menu-full">
                <div className="menu-links">
                    <div className="menu-item" onClick={() => {console.log('hey')}}>About</div>
                    <div className="menu-item">Work</div>
                    <div className="menu-item">Contact</div>
                    <div className="menu-item">Client Login</div>
                </div>
            </div> */}
            <div className="header-menu-full">
                <ul className="menu-links">
                    <li className="menu-item" onClick={() => {navigate('/')}}>Home</li>
                    <li className="menu-item" onClick={() => {navigate('/construction')}}>Work</li>
                    <li className="menu-item" onClick={() => {navigate('/construction')}}>About</li>
                    <li className="menu-item">Contact</li>
                    <li className="menu-item">Client Login</li>
                </ul>
            </div>
            <div className="hamburger" onClick={()=>{
                menuToggle()
                console.log(menuPop)
                }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={menuPop}>
                <div className="close-button" onClick={()=>{
                menuToggle()
                console.log(menuPop)
                }}>X</div>
                <ul className="menu-links">
                    <li className="menu-item" onClick={() => {
                        menuToggle();
                        navigate('/')}}>HOME</li>
                    <li className="menu-item" onClick={() => {
                        menuToggle();
                        navigate('/construction')}}>WORK</li>
                    <li className="menu-item" onClick={() => {
                        menuToggle();
                        navigate('/construction')}}>ABOUT</li>
                    <li className="menu-item">CONTACT</li>
                    <li className="menu-item">CLIENT LOGIN</li>
                </ul>
            </div>

        <div></div>
    </div>

    </>

    )

}