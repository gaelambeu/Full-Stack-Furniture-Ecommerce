import React from 'react'
import { Container, Row } from "reactstrap"
import { NavLink } from 'react-router-dom'

import logo from "../../assets/images/eco-logo.png"

const Header = () => {
  return (
    <header className="header">
        <Container>
            <Row>
               <div className="nav__wrapper">
                <div className="logo">
                    <img src={logo} alt="" />
                    <div>
                        <h1>Multimart</h1>
                        <p>Since 1995</p>
                    </div>
                </div>

                    <div className="navigation">
                        <ul className="menu">
                            <li className="nav__item">
                                <NavLink to='home'>Home</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to='home'>Shop</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to='home'>Cart</NavLink>
                            </li>

                        </ul>
                    </div>

                    <div className="nav__icons">
                        <span className="cart__icon">
                            <i class="ri-shopping-bag-line"></i>
                        </span>
                    </div>
               </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header