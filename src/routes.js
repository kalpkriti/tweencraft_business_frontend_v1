import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Home from "./home.js";
import Sample from "./sample.js";
import HowItWorks from "./how_it_works.js";
import Contact from "./contact";
import Pricing from "./pricing";
import AboutUs from "./about_us";
import { BootNav } from "./index";
import Category from "./category.js";
import StartProject from "./start_project";
import View from "./view";
import WebRoute from "./webapp/routes";
import Footer from "./footer";

export default function Routes(){
    

    return(
        <Router>
            <Switch>
        <Route exact path="/">
          <Home />
          <Footer />
        </Route>
        <Route exact path="/sample">
                    <BootNav />
                    <Sample />    
          <Footer />
                </Route> 
        <Route exact path="/how-it-works">
                    <BootNav />
                    <HowItWorks />  
          <Footer />
                </Route> 
        <Route exact path="/pricing">
                    <BootNav />
                    <Pricing />  
          <Footer />
                </Route> 
        <Route exact path="/contact">
                    <BootNav />
                    <Contact /> 
          <Footer />
                </Route> 
        <Route exact path="/aboutus">
                    <BootNav />
                    <AboutUs /> 
          <Footer />
                </Route> 
        <Route exact path="/category/:name">
                    <BootNav />
                    <Category /> 
          <Footer />
                </Route> 
        <Route exact path="/startproject">
                    <BootNav />
                    <StartProject /> 
          <Footer />
                </Route> 
        <Route exact path="/login">
          <WebRoute />
                </Route> 
            </Switch>
        </Router>
    );
}