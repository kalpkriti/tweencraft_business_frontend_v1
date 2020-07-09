import React from 'react';


function App() {
  return (
    <div className="text-center">
      <br />
      <br />
      <h2 className="display-4">Cost effective animated</h2>
      
      <h2 className="display-4"> videos for your business.</h2>

      <br />

      <span className="lead font-weight-normal">We work with businesses to improve </span>
      <br />
      <span className="lead font-weight-normal">their social media marketing with animated videos.</span>
      <br />
      <br />
      <button className="btn btn-primary" style={{backgroundColor:"#FF784B", border:"none"}}>Start a Project</button>
      <br />
      <br />
      <a className="lead font-weight-normal" style={{padding:"2rem"}}>Grocery</a>
      <a className="lead font-weight-normal" style={{padding:"2rem"}}>Restaurant</a>
      <a className="lead font-weight-normal" style={{padding:"2rem"}}>Spa & Salon</a>
      <a className="lead font-weight-normal" style={{padding:"2rem"}}>Retail</a>
      <a className="lead font-weight-normal" style={{padding:"2rem"}}>Home Decor</a>
      <br />
      <br />
      <center>
        <div style={{ height:"1rem", width:"50rem"}}>
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" class="d-block w-100" alt="#"/>
              </div>
              <div class="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" class="d-block w-100" alt="#"/>
              </div>
              <div class="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" class="d-block w-100" alt="#"/>
              </div>
            </div>
          </div>
        </div>
      </center>
      
      
    </div>
  );
}

export default App;
