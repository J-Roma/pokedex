import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Pokedex from '../containers/Pokedex';
import PokedexDetails from '../containers/PokedexDetails';

const routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Pokedex} />
                <Route exact path="/pokemon/:id" component={PokedexDetails}/>
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default routes
