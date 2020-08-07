import React, { StrictMode } from "react";
import { Carousel, Nav, Dropdown, Image, Button, Modal } from "react-bootstrap";
import Img from "./static/image.png";
import "./css/home.css";
import { Feature1, CustMod, Feature2, Feature3 } from "./mods";
import { useState, useEffect } from "react";
import { Headings } from "./pricing";
import Cards from "./price_card";
import HowItWorks from "./how_it_works";
import { BootNavWhite } from "./index";
import axios from "axios";
import StartProject from "./start_project";

var arr = [
  ["Insurance", "Insurance"],
  ["Jewellery", "Jewellery"],
  ["Miscellaneous", "Miscellaneous"],
  ["Covid_Safety", "Covid Safety"],
  ["Education", "Education"],
  ["Ayurveda", "Ayurveda"],
  ["Digital_Marketing", "Digital Marketing"],
];

function Home() {
  useEffect(() => {
    var butt = document.getElementById("Insurance");
    console.log(butt);
    butt.click();
  }, []);

  const [index, setIndex] = useState(0);
  const [vids, setVids] = useState([]);

  const [formShow, setFormShow] = useState(false);

  const handleFormClose = () => {
    setFormShow(false);
  };
  const handleFormShow = () => {
    setFormShow(true);
  };

  const handleVideoClick = (selectedKey) => {
    setIndex(selectedKey);
    console.log(selectedKey);
    const response = axios.post(
      "https://backend.tweencraft.com:5001/getSampleVideos",
      { category: arr[parseInt(selectedKey)][0] }
    );
    response.then((response) => {
      setVids(response.data.data.videos);
      console.log(arr[parseInt(selectedKey)][0]);
      console.log(selectedKey);
      console.log(response);
      console.log(vids);
    });
  };

  const listItems = arr.map((name) => (
    <Nav.Item>
      <Nav.Link
        className="small-tab-text cust1"
        eventKey={arr.indexOf(name)}
        id={name[1]}
      >
        {name[1]}
      </Nav.Link>
    </Nav.Item>
  ));
  const listDrops = arr.map((name) => (
    <Dropdown.Item
      onClick={() => handleVideoClick(arr.indexOf(name))}
      className="drop-item"
    >
      {name[1]}
    </Dropdown.Item>
  ));
  return (
    <div>
      <div className="text-center py-2" id="bgimg">
        <BootNavWhite />
        <div className="home-heading-pos container">
          <h2 className="home-head">
            Cost effective animated videos for your business.
          </h2>
        </div>
        <div className="home-head-2-pos container">
          <h3 className="home-head-2">
            We work with businesses to improve their social media marketing with
            animated videos.
          </h3>
        </div>

        <br />

        <a
          className="btn btn-primary btn-lg"
          onClick={handleFormShow}
          style={{
            backgroundColor: "#AAB318",
            border: "none",
            borderRadius: "10px",
            color: "white",
          }}
        >
          Start a Project
        </a>
        <Start_Project show={formShow} handle={handleFormClose} />
        <div className="container">
          <div id="tabs1">
            <br />
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Select Category
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* <Dropdown.Item eventKey={arr.indexOf("Insurance")} className="drop-item">Insurance</Dropdown.Item>
                <Dropdown.Item eventKey={arr.indexOf("Digital Marketing")} className="drop-item">Digital Marketing</Dropdown.Item> */}
                {listDrops}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div id="tabs2">
            <Nav
              fill
              defaultActiveKey="Insurance"
              onSelect={(selectedKey) => handleVideoClick(selectedKey)}
            >
              {listItems}
              <Nav.Item>
                <Nav.Link href="/sample" className="small-tab-text" id="view">
                  View all
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        <br />

        <center>
          <div>
            <ControlledCarousel index={index} vids={vids} />
          </div>
        </center>

        <br />
      </div>

      <div className="text-center small-text" style={{ marginTop: "50px" }}>
        Features
      </div>
      <br />
      <h2 className="heading text-center" style={{ marginTop: "30px" }}>
        Use kalpkriti to drive growth at your business
      </h2>
      <br />
      <br />
      <br />
      <div className="container">
        <Feature1 />
      </div>
      <br />
      <br />

      <div style={{ backgroundColor: "rgba(119, 104, 80, 0.02)" }}>
        <div className="container">
          <Feature2 />
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <Feature3 id="res-center" />
      </div>
      <br />
      <br />
      <br />
      <div>
        <CustMod />
      </div>
      <br />

      <Headings />
      <br />
      <Cards />
      <br />
      <div className="home-how">
        <HowItWorks />
      </div>
    </div>
  );
}

export default Home;

function ControlledCarousel(props) {
  const listCarouselItems = props.vids.map((vid) => (
    <Image
      src={vid.thumbnail}
      onClick={() => handleShow(vid.url)}
      id="sample"
    />
  ));

  const [show, setShow] = useState(false);
  const [vidLink, setVidLink] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (link) => {
    setVidLink(link);
    setShow(true);
  };

  return (
    <div>
      <Carousel
        id="carousel1"
        controls={false}
        indicators={false}
        activeIndex={parseInt(props.index)}
      >
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
        <Carousel.Item>{listCarouselItems}</Carousel.Item>
      </Carousel>

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <video width="100%" height="100%" controls autoPlay>
            <source src={vidLink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function Start_Project(props) {
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.handle}
        size="l"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <StartProject handle={props.handle} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
