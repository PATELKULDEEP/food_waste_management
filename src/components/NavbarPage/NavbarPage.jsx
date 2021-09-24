import React from 'react'
import { Link } from 'react-router-dom'
import './navbarStyle.css';

function NavbarPage() {
    return (
        <div className="navbar">
            <div className="navbar-item">
                <Link to='/'>Home</Link>
            </div>
            <div className="navbar-item">
                <Link to='/login'>Login</Link>
            </div >
            <div className="navbar-item">
                <Link to='/signup'>Signup</Link>
            </div>
            <div className="navbar-item">
                <Link to='/profile'>Profile</Link>
            </div>
        </div>
    )
}

export default NavbarPage
