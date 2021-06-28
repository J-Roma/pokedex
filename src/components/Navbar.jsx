import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const NavStyle = styled.div`
    font-size: 20px;
    color: white;
`



const Navbar = () => {
    return (
        <NavStyle>
            <nav className="navbar navbar-expand-lg navbar-light bg-trasparent">
                <div className="container-fluid">
                    <img src="https://i.imgur.com/2vI3fVq.png" alt="pokedex" height="60px" width="65px" />
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#"><strong>Pokedex</strong></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#"><strong>Favoritos</strong></a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <h4 style={{fontFamily: "pokemon-font, monospace"}}><strong>Cuenta</strong> <FontAwesomeIcon className="fs-1" icon={faUserCircle} /></h4>
                        </form>
                    </div>
                </div>
            </nav>
        </NavStyle>
    )
}

export default Navbar
