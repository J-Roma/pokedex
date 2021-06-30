import React from 'react'
import styled from 'styled-components'

const Scrollbox = styled.div`
    border: none;
    padding: 5px;
    max-width: 100%;
    height: 236px;
    overflow: auto;
`

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
                <Scrollbox className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Moves</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                props.pokemonTarget.moves.map((el, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{el.move.name}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Scrollbox>
            </div>
        </div>
    )
}

export default PokemonData
