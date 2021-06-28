import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { getPokemon, getPokemonDetails } from '../../helpers/getPokemonDetails'

const Cards = styled.div`
    width: 90%;
    background: whitesmoke;
    margin: 15px auto;
    padding: 15px;
`

const PokemonCards = () => {
    const [pokemonList, setpokemonList] = useState('');
    const [pokemonDetailList, setpokemonDetailList] = useState('')
    const [next, setnext] = useState('')

    const fetchPokemons = async () => {
        try {
            const data = await getPokemon()
            setnext(data.next)
            const promise = data.results.map(async (el) => {
                return await getPokemonDetails(el.name)
            })
            const results = await Promise.all(promise)
            console.log(results);

            setpokemonDetailList(results)
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchPokemons()
    }, [])


    return (
        <>

            {
                !pokemonDetailList ? <h1>Cargando...</h1> :
                    pokemonDetailList.map((pokemon, index) => (
                        <Cards key={index} className="rounded" type="button">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <img className="img-fluid" src={`${pokemon.sprites.front_default}`} alt="pokemonSprite" />
                                </div>
                                <div className="col-8">
                                    <h5>N° {pokemon.id}</h5>
                                    <h5>{pokemon.species.name}</h5>
                                </div>
                            </div>
                        </Cards>
                    ))
            }


        </>
    )
}

export default PokemonCards
