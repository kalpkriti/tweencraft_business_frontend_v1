import React from 'react';
import {CustMod} from './mods'
import Cards from './price_card';

export default function Pricing(){

    return(
        <div>
        
            <Headings />
        
            <Cards />

            <center>
            <CustMod />
            </center>
            <br />

        </div>
    )
}

export function Headings(){
    return(

        <div>
            <br />
        
        <div className="text-center small-text">
                    Packages
                </div>
            <br />
            
            <center>
                <span className=" heading ">
                Choose tweencraft packages that’s 
                
                </span>
                <br />
                <span className="heading ">
                right for your business
                </span>

                <br />
                
                </center>
        </div>
    )
        

    
}
