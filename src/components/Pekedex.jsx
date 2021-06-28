import React from 'react'
import PokemonCards from './subpokedex/PokemonCards'

const Pekedex = () => {
    return (
        <div className="container-md-fluid p-3">
            <div className="row">
                <div className="col-md-8">
                    hola
                </div>
                <div className="col-md-4 bg-light rounded p-3">
                    <h3 className="text-center">Por Numero</h3>
                    <hr />
                    <PokemonCards/>
                </div>
            </div>
        </div>

    )
}

export default Pekedex
