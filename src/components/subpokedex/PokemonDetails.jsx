import React from 'react'
import styled from 'styled-components'
const Info = styled.div`
    background: url('https://i.imgur.com/zXu1fj6.jpg');
    background-size: 100% 100%;
    width: 100%;
    height: 100%;

`
const PokemonDetails = () => {
    return (
        <Info className="rounded">
            <h1>Por favor seleccione un pokemon</h1>
        </Info>
    )
}

export default PokemonDetails
