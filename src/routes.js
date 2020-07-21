import React from 'react';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import Home from './home.js';
import Sample from './sample.js';
import HowItWorks from './how_it_works.js';
import Contact from './contact';
import Pricing from './pricing';
import AboutUs from './about_us';
import {BootNav} from './index';
import Category from './category.js';
import StartProject from './start_project';
import View from './view';

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
                <Route exact path='/startproject'>
                    <BootNav />
                    <StartProject /> 
                </Route> 
                <Route exact path='/view/:cate/:id'>
                    <BootNav />
                    <View /> 
                </Route> 
            </Switch>
        </Router>
    );
}