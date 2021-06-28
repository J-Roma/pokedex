import React from 'react'
import PokemonCards from './subpokedex/PokemonCards'
import { useState } from 'react'
import { getPokemon, getPokemonDetails } from '../helpers/getPokemonDetails'
import styled from 'styled-components'
import PokemonHome from './subpokedex/PokemonHome'
import { useParams } from 'react-router-dom'
import PokemonDescription from './subpokedex/PokemonDescription'

const ScrollBox = styled.div`
border: none;
padding: 5px;
font: 24px/36px sans-serif;
max-width: 380px;
max-height: 680px;
overflow: auto;
`

const PekedexDetails = () => {
    const { id } = useParams()
    const [pokemonDetailList, setpokemonDetailList] = useState('')
    // const [pokemonTarget, setpokemonTarget] = useState('')
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
    
    // useEffect(() => {
    //     if (pokemonDetailList) {
    //         const  target = pokemonDetailList.find( el => el.id === id);
    //         setpokemonTarget(target)
    //     }
    // }, [pokemonDetailList])

    useEffect(() => {
        fetchPokemons()
    }, [])

    return (
        <div className="container-md-fluid p-3">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <PokemonDescription target={pokemonDetailList} pokemonId={id} />
                </div>
                <ScrollBox className="col-md-4 bg-light rounded p-3" >
                    <h3 className="text-center">Por Numero</h3>
                    <hr />
                    <PokemonCards pokemon={pokemonDetailList} />
                </ScrollBox>
            </div>
        </div>
    )
}

export default PekedexDetails
