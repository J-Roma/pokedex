import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar.jsx'
import Pekedex from '../components/Pekedex.jsx'

const Container = styled.div`
    background: rgb(58,104,180);
    background: linear-gradient(0deg, rgba(58,104,180,1) 15%, rgba(29,253,230,1) 100%, rgba(69,246,252,1) 100%);
    max-width: 80%;
    margin: 0 auto;
    margin-top: 2%;
    border-radius: 14px;
    padding: 13px;
`

const Pokedex = () => {
    return (
        <Container>
            <Navbar/>
            <Pekedex/>
        </Container>
    )
}

export default Pokedex
