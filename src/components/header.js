import React from 'react';
import  "./navbar.css";
import logo from "../logo.svg"

const Header = ()=>(
         <div>
            <header>
                <nav className="nav-bar">
                    <img src={logo} width="50px" alt="logo"/>
                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Servicess</a></li>
                        <li><a href="/">Portfolio</a></li>
                        <li><a href="/">Skills</a></li>  
                    </ul>  
                </nav>
            </header>
         </div>   
    );
export default Header;