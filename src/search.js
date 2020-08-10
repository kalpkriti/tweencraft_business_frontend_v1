import React, { useState } from "react";
import { Form, Button, FormControl, Toast, Modal } from "react-bootstrap";
import axios from "axios";

var arr = [];

export default function Search() {
  var vids = ["general", "grocery", "industrial"];

  let query;

  const [result, setResult] = useState([]);

  const handleOnInputChange = (event) => {
    handleShow();

    query = event.target.value;
    console.log(query);
    axios
      .post("https://backend.tweencraft.com:5001/getSamples", {
        filter: query,
      })
      .then((res) => {
        console.log(res.data.data.videos);
        setResult(res.data.data.videos);
      })
      .catch((err) => {
        console.log(err);
      });

    //   for (var i = 0; i < vids.length; i++) {
    //     let name = vids[i];
    //     if (name.indexOf(query) > -1) {
    //       //console.log(vids[i]);

    //       arr.push(vids[i]);
    //       console.log(arr);
    //     } else {
    //       arr = [];
    //     }
    //   }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Form>
        <FormControl
          type="text"
          placeholder="Search"
          onChange={handleOnInputChange}
        />
      </Form>

      <ShowResult show={show} handleClose={handleClose} result={result} />
    </div>
  );
}

function ShowResult(props) {
  const [show, setShow] = useState(false);
  const [link, setLink] = useState();

  const handleClick = (url) => {
    setShow(true);
    console.log(url);
    setLink(url);
  };
  const handleClose = () => setShow(false);
  const listItems = props.result.map((number) => (
    <li
      onClick={() => {
        handleClick(number.url);
      }}
    >
      {number.videoName}
    </li>
  ));
  return (
    <div>
      <Toast
        show={props.show}
        onClose={props.handleClose}
        style={{ zIndex: "1" }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Results</strong>
        </Toast.Header>

        <Toast.Body>{listItems}</Toast.Body>
      </Toast>
      <DisplayVideo show={show} handleClose={handleClose} url={link} />
    </div>
  );
}

function DisplayVideo(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <video width="100%" height="100%" controls autoPlay>
          <source src={props.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal.Body>
    </Modal>
  );
}
