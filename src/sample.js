import React, { useEffect } from "react";
import {
  Dropdown,
  Image,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import "./style.css";
import Tweenpic from "./static/image.png";

import { CustMod } from "./mods";
import Ad from "./ad";
import axios from "axios";
import "./css/sample.css";
import Search from "./search";
import Footer from "./footer";
import { useState } from "react";

var arr = [
  "General Shop",
  "Insurance",
  "Jewellery",
  "Miscellaneous",
  "Covid Safety",
  "Digital Marketing",
];

var lang = "Hindi";
var cate = "Education";

export default function Sample() {
  useEffect(() => {
    var ed = document.getElementById("def");
    console.log(ed);
    ed.click();
  }, []);
  const fetchLang = (selectedKey) => {
    console.log(selectedKey);
    lang = selectedKey;
    var drop = document.getElementById("dropdown-basic");
    drop.innerText = lang;

    axios
      .post("https://backend.tweencraft.com:5001/getSampleVideos", {
        language: lang,
        category: cate,
      })
      .then((response) => {
        console.log(response);
        console.log(selectedKey);
        var video = document.getElementById("video");
        var source = document.getElementById("source");
        source.setAttribute("src", response.data.data.videos[0].url);

        video.load();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleShow = (url) => {
    var video = document.getElementById("video");
    var source = document.getElementById("source");
    source.setAttribute("src", url);

    video.load();
  };

  const [vids, setVids] = useState([]);

  const fetch = (selectedKey) => {
    cate = selectedKey;
    console.log(vids);
    axios
      .post("https://backend.tweencraft.com:5001/getSampleVideos", {
        language: lang,
        category: cate,
      })
      .then((response) => {
        console.log(selectedKey);
        console.log(response);
        setVids(response.data.data.videos);
        var video = document.getElementById("video");
        var source = document.getElementById("source");
        source.setAttribute("src", response.data.data.videos[0].url);

        video.load();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(vids);
  }, [vids]);

  const listCarouselItems = vids.map((vid) => (
    <Image
      src={vid.thumbnail}
      onClick={() => handleShow(vid.url)}
      id="sample"
    />
  ));

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #F8F8F8 -0.31%, #FFFFFF 52.09%)",
        mixBlendMode: "normal",
      }}
    >
      <br />

      <div className="small-text sample-pos">Sample</div>
      <br />
      <div className="anim-pos">
        <span className="anim-style">Animated Videos for</span>
        <br />
        <span className="anim-style">every type of business</span>
      </div>

      <br />

      <br />

      <div className="search-pos">
        <Search />
      </div>
      <div className="col lang-drop">
        <Dropdown onSelect={fetchLang}>
          <Dropdown.Toggle id="dropdown-basic">Language</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="English" className="drop-item">
              English
            </Dropdown.Item>
            <Dropdown.Item eventKey="Hindi" className="drop-item">
              Hindi
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="col industry-drop">
        <Dropdown onSelect={fetch}>
          <Dropdown.Toggle id="dropdown-basic">Industry</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="Education" className="drop-item">
              Education
            </Dropdown.Item>
            <Dropdown.Item eventKey="Insurance" className="drop-item">
              Insurance
            </Dropdown.Item>
            <Dropdown.Item eventKey="Jewellery" className="drop-item">
              Jewellery
            </Dropdown.Item>
            <Dropdown.Item eventKey="Miscellaneous" className="drop-item">
              Miscellaneous
            </Dropdown.Item>
            <Dropdown.Item eventKey="General_Shop" className="drop-item">
              General Shop
            </Dropdown.Item>
            <Dropdown.Item eventKey="Digital_Marketing" className="drop-item">
              Digital Marketing
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <br />

      <br />
      <div className="container tabpill-pos">
        <TabPills fetch={fetch} />
      </div>
      <br />
      <div className="video-pos">
        <video width="60%" height="60%" loop controls id="video">
          <source
            src="https://tweencraftcrm.s3.ap-south-1.amazonaws.com/samples/1594873289381_teacher_Project28_2020_06_30_1.mp4"
            type="video/mp4"
            id="source"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="thumbs-pos overflow-auto center-text">
        {listCarouselItems}
        {/* <Image
            src={Tweenpic}
            style={{ height: "15%", width: "15%", margin: "1% 1%" }}
          ></Image>
          <Image
            src={Tweenpic}
            style={{ height: "15%", width: "15%", margin: "1% 1%" }}
          ></Image>
          <Image
            src={Tweenpic}
            style={{ height: "15%", width: "15%", margin: "1% 1%" }}
          ></Image>
          <Image
            src={Tweenpic}
            style={{ height: "15%", width: "15%", margin: "1% 1%" }}
          ></Image> */}
      </div>

      <br />
      <div className="container-fluid custmod-pos">
        <CustMod />
      </div>

      <br />
      <div className="ad-pos">
        <Ad />
      </div>
      <div className="sample-footer">
        <Footer />
      </div>
    </div>
  );
}

function TabPills(props) {
  return (
    <div>
      <Nav
        fill
        variant="pills"
        defaultActiveKey="Education"
        onSelect={props.fetch}
        id="tabs2"
      >
        <Nav.Item>
          <Nav.Link
            eventKey="Digital_Marketing"
            className="small-tab-text"
            id="def"
          >
            Digital Marketing
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="Education"
            className="small-tab-text"
            id="Education"
          >
            Education
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Insurance" className="small-tab-text">
            Insurance
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="General_Shop" className="small-tab-text">
            General Shop
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Jewellery" className="small-tab-text">
            Jewellery
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Miscellaneous" className="small-tab-text">
            Miscellaneous
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
