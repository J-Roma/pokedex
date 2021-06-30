import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PokemonData from './PokemonData'
const Info = styled.div`
    background: url('https://i.imgur.com/zXu1fj6.jpg');
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
`
const Overlay = styled.div`
    position: relative;
    ${props => props.topics && `
        position: absolute;
        width: 215px;
        top: 0;
        left: 15px;
        background: white;
    `}
     ${props => props.types && `
        position: absolute;
        width: 200px;
        top: 0;
        right: 15px;
        background: white;
    `}

    
`

const PokemonDescription = (props) => {
    const [pokemonTarget, setpokemonTarget] = useState('')

    const getTarget = (list) => {
        const data = list.find(pokemon => pokemon.id == props.pokemonId)
        setpokemonTarget(data)
    }


    useEffect(() => {
        const list = props.pokemon
        if (props.pokemon) {
            getTarget(list)
        }
    }, [props.pokemonId])

    return (
        <Info className="rounded">
            {
                !pokemonTarget ? <h1>Cargando...</h1> : (
                    <div className="row row-cols-1 justify-content-center">
                        <div className="col text-center py-5">
                            <Overlay>
                                <img height="226px" width="227px" src={`${pokemonTarget.sprites.other.dream_world.front_default}`} alt="" />
                                <Overlay className="rounded" topics>
                                    <h5 className="text-start bg-info bg-gradient py-1 px-2">Height:</h5>
                                    <p>{pokemonTarget.height} m</p>
                                    <h5 className="text-start bg-info bg-gradient py-1 px-2">Weight:</h5>
                                    <p>{pokemonTarget.weight} kg</p>
                                </Overlay>
                                <Overlay className="rounded" types>
                                <h5 className="text-start bg-info bg-gradient py-1 px-2">Type:</h5>
                                    {pokemonTarget.types.map( el => (
                                        <p className="py-2">{el.type.name}</p>
                                    ))}
                                </Overlay>
                            </Overlay>

                        </div>
                        <div className="col-11 rounded bg-white">
                            <PokemonData pokemonTarget={pokemonTarget} />
                        </div>
                    </div>
                )

            }

        </Info>
    )
}

export default PokemonDescription
