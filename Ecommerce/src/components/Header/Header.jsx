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
                        </ul>
                    </div>
               </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header