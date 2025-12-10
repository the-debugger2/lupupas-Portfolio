// src/components/Navbar.js
import React from "react";
import { Link } from 'react-scroll';
import logo from '../Assets/Images/logo.jpg';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <img id="logo" src={logo} alt="Logo"/>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link 
                            to="hero" 
                            smooth={true} 
                            duration={800} 
                            offset={-80}
                            spy={true}
                            activeClass="active"
                            className="nav-link"
                        >
                            Introduction
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="about" 
                            smooth={true} 
                            duration={800} 
                            offset={-80}
                            spy={true}
                            activeClass="active"
                            className="nav-link"
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="gallery" 
                            smooth={true} 
                            duration={800} 
                            offset={-80}
                            spy={true}
                            activeClass="active"
                            className="nav-link"
                        >
                            Gallery
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="vision" 
                            smooth={true} 
                            duration={800} 
                            offset={-80}
                            spy={true}
                            activeClass="active"
                            className="nav-link"
                        >
                            Vision
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="highlights" 
                            smooth={true} 
                            duration={800} 
                            offset={-80}
                            spy={true}
                            activeClass="active"
                            className="nav-link"
                        >
                            Highlights
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="contact" 
                            smooth={true} 
                            duration={800} 
                            offset={-80}
                            spy={true}
                            activeClass="active"
                            className="nav-link"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}