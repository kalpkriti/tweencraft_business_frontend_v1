import React from 'react';
import works from './static/works.png';
import Ad from './Ad';

export default function HowItWorks(){
    return (
        <div>
            <div className="text-center small-text">
                <br />
                <br />
                How it Works
            </div>
            <br />
            <div className="heading text-center ">
            How animated video through 

                </div>
                
                <div className="heading text-center">
                Tweencraft works
                <br />
                
                <img src={works} style={{height:"50%", width:"50%"}} className="my-4 py-4"/>

                
                </div>
                <center>                   
                    <Ad />
                </center>

                
                
                
        </div>
    );

}