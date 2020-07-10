import React from 'react';
import {Carousel} from 'react-bootstrap';

function Home() {
  return (
    <div>
      <div className="text-center">
        <br />
        <br />
        <h2 className="display-4">Cost effective animated</h2>
        
        <h2 className="display-4"> videos for your business.</h2>

        <br />

        <h3 className="lead font-weight-normal">We work with businesses to improve </h3>
        <h3 className="lead font-weight-normal">their social media marketing with animated videos.</h3>
        <br />
        
        <button className="btn btn-primary btn-lg" style={{backgroundColor:"#FF784B", border:"none"}}>Start a Project</button>
        <br />
        <br />
        <br />

        <a className="lead font-weight-normal" style={{padding:"2rem"}}>Grocery</a>
        <a className="lead font-weight-normal" style={{padding:"2rem"}}>Restaurant</a>
        <a className="lead font-weight-normal" style={{padding:"2rem"}}>Spa & Salon</a>
        <a className="lead font-weight-normal" style={{padding:"2rem"}}>Retail</a>
        <a className="lead font-weight-normal" style={{padding:"2rem"}}>Home Decor</a>
        <a className="lead font-weight-normal" style={{padding:"2rem"}}>Automotive</a>
        <a className="lead font-weight-normal" style={{padding:"2rem"}}>Electronics</a>
        <br />
        <br />

        <center>
          <div>
                  <Carousel style = {{width: "60%", height: "20%"}}>
                <Carousel.Item>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" className="d-block w-100" alt="#"/>
                        
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" className="d-block w-100" alt="#"/>

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" className="d-block w-100" alt="#"/>

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
          </div>
        </center>

        <br />
  
        <h2 className="display-4">Use tweencraft to drive growth</h2>
        <h2 className="display-4">at your business</h2>
        
      </div>
      <br />
      <br />
      <div className="px-lg-5">
        <span style={{fontSize:"2rem"}}>
         Low cost animated videos 
        </span>
        <br />
        <span style={{fontSize:"2rem"}}>
          for your business.
        </span>
        <br />
        <br />
        <span className="text-dark ">
        Using animated videos helps improve the reach and engagement for your social media ads.
        </span>

      </div>

      

    </div>
  );
}

export default Home;
