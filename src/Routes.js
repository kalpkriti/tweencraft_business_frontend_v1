import React from 'react';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import Home from './Home.js';
import Sample from './Sample.js';
import HowItWorks from './HowItWorks.js';
import Contact from './Contact';
import Pricing from './Pricing';
import AboutUs from './AboutUs';
import {BootNav} from './index';
import Category from './Category.js';

export default function Routes(){
    

    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home}></Route> 
                <Route exact path='/sample' >
                    <BootNav />
                    <Sample />    
                </Route> 
                <Route exact path='/how-it-works'>
                    <BootNav />
                    <HowItWorks />  
                </Route> 
                <Route exact path='/pricing'>
                    <BootNav />
                    <Pricing />  
                </Route> 
                <Route exact path='/contact'>
                    <BootNav />
                    <Contact /> 
                </Route> 
                <Route exact path='/aboutus'>
                    <BootNav />
                    <AboutUs /> 
                </Route> 
                <Route exact path='/category/:name'>
                    <BootNav />
                    <Category /> 
                </Route> 
            </Switch>
        </Router>
    );
}