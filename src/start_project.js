import React, { useState } from "react";
import { Form, Card, Button, Modal } from "react-bootstrap";
import axios from "axios";

export default function StartProject(props) {
  var fname = React.createRef();
  var lname = React.createRef();
  var phn = React.createRef();
  var purp = React.createRef();

  const [showGreet, setShowGreet] = useState(false);

  const handleClose = () => {
    setShowGreet(false);
    props.handle();
  };

  const handleOnSubmit = () => {
    setShowGreet(true);

    console.log(fname.current.value);
    console.log(lname.current.value);
    console.log(phn.current.value);
    console.log(purp.current.value);

    axios
      .post("https://backend.tweencraft.com:5001/createCustomer", {
        firstName: fname.current.value,
        lastName: lname.current.value,
        phone: phn.current.value,
        business: purp.current.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="" style={{ width: "100%" }}>
      <Card className="mx-auto" id="carousel1">
        <Card.Body className="mx-2">
          <Card.Title>Start a Project</Card.Title>

          <Form>
            <Form.Control type="text" placeholder="First Name" ref={fname} />
            <br />
            <Form.Control type="text" placeholder="Last Name" ref={lname} />
            <br />
            <Form.Control type="text" placeholder="Phone Number" ref={phn} />
            <br />
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Purpose"
              ref={purp}
            />
            <br />
          </Form>

          <Button
            className="px-5"
            onClick={handleOnSubmit}
            style={{
              background: "#AAB318",
              borderColor: "#AAB318",
              color: "white",
              width: "100%",
            }}
          >
            Start a Project
          </Button>
        </Card.Body>
      </Card>

      <Modal
        show={showGreet}
        onHide={handleClose}
        size="l"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {" "}
        <Modal.Header closeButton>Thank you !!</Modal.Header>
        <Modal.Body>We will get back to you in 30 mins</Modal.Body>
      </Modal>
    </div>
  );
}
