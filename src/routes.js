import React from 'react';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import Home from './Home.js';
import Sample from './Sample.js';
import HowItWorks from './HowItWorks.js';
import Recipe from './Recipe.js';

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home}></Route> 
                <Route exact path='/sample' component={Sample}></Route> 
                <Route exact path='/how-it-works' component={HowItWorks}></Route> 
                <Route exact path='/pricing' component={Home}></Route> 
                <Route exact path='/recipe' component={Recipe}></Route> 
            </Switch>
        </Router>
    );
}