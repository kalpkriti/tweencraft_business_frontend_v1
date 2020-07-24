import React from 'react';

export default function Ad(){
    return(

    <div className="jumbotron container">
                    <div className="row text-left">
                        <div className="col-sm-8">
                            
                            <span className="mx-5 px-1 small-orange-text">
                                Want to discuss with us.
                            </span>
                            
                        </div>
                        <div className="col-sm">
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg px-auto">
                            <span className="heading">
                            Tell us what you need, We'll tell you the best way for an animated video.
                            </span>
                        </div>
                        <div className="col-sm my-2">
                            <button className="btn btn-primary btn-lg" style={{backgroundColor:"#D1DB2A", border:"none"}}>
                                Schedule a Call
                            </button>

                            <br/>
                            <div className="my-2">
                            <span >
                                Already a member?
                                <a href="#" className="text-dark">Log In</a>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
    );

}
