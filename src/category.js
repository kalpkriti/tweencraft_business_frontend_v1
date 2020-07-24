import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Image, Modal } from "react-bootstrap";
import { useState } from "react";

const Category = () => {


  const [link, setLink] = useState("");
  var [videos, setVideos] = useState([]);

  var name = useParams();

  useEffect(async () => {
    const response = await axios.post(
      "https://52.66.132.209:5001/getSampleVideos",
      { category: name.name }
    );
    console.log(response.data.data.videos, "asasa");
    setVideos(response.data.data.videos);
  }, []);

  // console.log(arr.length);

  var i;

  // Modal
  
  const [show, setShow] = useState(false);

  const handleClose = () => {
      setShow(false);
      setLink('');
  }

  const handleShow = (link) => {
      
    setShow(true);
    setLink(link);

};
  

  //   for (i = 0; i < response.data.data.videos.length; i++) {
  //     thumbarr.push(response.data.data.videos[i].thumbnail);
  //     vidarr.push(response.data.data.videos[i].url);
  //     namearr.push(response.data.data.videos[i].name);
  //   }

  const listItems = videos.map((vid) =>
        <div className="container">
            {/* <a href={"/view/"+ name.name + "/" +vid._id}> */}
            <Image src={vid.thumbnail} style={{width:"60%"}} onClick={() => {handleShow(vid.url)}}/>
            {/* </a> */}
            <br />
            <h3>{vid.videoName}</h3>
            <br />
        </div>
        
        );

  return (
    <center>
      <span className="heading">{name.name}</span>
      <br />
      <br />

      <div className="container">

        {/* <h1>{videos && videos.map(v => v.videoName)}</h1> */}

        {videos && videos.map((v) => <h1>{v.data.data.videoName}</h1> )}

        {listItems}
        

      </div>

      <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              
            </Modal.Header>
            <Modal.Body>

              <video width="100%" height="100%" controls autoPlay>
                <source src={link} type="video/mp4" />
                
                Your browser does not support the video tag.

              </video>

            </Modal.Body>
            </Modal>
      <br />
    </center>
  );
};

export default Category;
