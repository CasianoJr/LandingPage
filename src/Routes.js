import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home';
import UnderConstruction from './Page/UnderConstruction';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={UnderConstruction} />
        </Switch>
    )
}
