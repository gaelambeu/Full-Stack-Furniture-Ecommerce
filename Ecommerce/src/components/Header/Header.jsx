import React from 'react'

import logo from "../../assets/images/eco-logo.png"

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="nav__wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                            <h1>Multimart</h1>
                            <p>Since 1995</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header