import React from 'react'

const PokemonData = (props) => {



    return (
        <div className="p-3">
            <ul className="nav justify-content-center nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Base Stats</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Moves</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    {
                        props.pokemonTarget.stats.map((stats, index) => (
                            <div key={index} className="row">
                                <div className="col-3 text-end">
                                    <p>{stats.stat.name} </p>
                                </div>
                                <div className="col-2 text-center">
                                    <p>{stats.base_stat}</p>
                                </div>
                                <div className="col-7 progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: `${stats.base_stat}%` }} aria-valuenow={`${stats.base_stat}`} aria-valuemin="0" aria-valuemax="250"></div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    {
                        props.pokemonTarget.moves.map((el, index) => (
                            <p>{el.move.name}</p>
                        ))
                    }
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                </div>
            </div>
        </div>
    )
}

export default PokemonData
