import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './views/Home/index';
import List from './views/Auto/index';

export default () => (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/list" component={ List }/>
    </Switch>
)
