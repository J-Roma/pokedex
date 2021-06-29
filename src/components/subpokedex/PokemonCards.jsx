import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
// import { useState } from 'react'
// import { getPokemon, getPokemonDetails } from '../../helpers/getPokemonDetails'

const Cards = styled.div`
    width: 90%;
    background: whitesmoke;
    margin: 15px auto;
    padding: 15px;
`

const PokemonCards = (props) => {
    return (
        <>

            {
                !props.pokemon ? <h1>Cargando...</h1> :
                    props.pokemon.map((pokemon, index) => (
                        <Link key={index} to={`/pokemon/${pokemon.id}`}>
                        <Cards  className="rounded" type="button">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <img className="img-fluid" src={`${pokemon.sprites.front_default}`} alt="pokemonSprite" />
                                </div>
                                <div className="col-4">
                                    <h5>N° {pokemon.id}</h5>
                                    <h5>{pokemon.species.name}</h5>
                                </div>
                                <div className="col-4">
                                    {pokemon.types.map( types => (
                                        <h5>
                                            {types.type.name}
                                        </h5>
                                    ))}
                                </div>
                            </div>
                        </Cards>
                        </Link>
                    ))
            }


        </>
    )
}

export default PokemonCards
