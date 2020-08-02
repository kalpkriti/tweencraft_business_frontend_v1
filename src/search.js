import React, { useState } from "react";
import { Form, Button, FormControl, Toast } from "react-bootstrap";

var arr = [];

export default function Search() {
  var vids = ["general", "grocery", "industrial"];

  let query;

  const handleOnInputChange = (event) => {
    handleShow();

    query = event.target.value;
    console.log(query);

    for (var i = 0; i < vids.length; i++) {
      let name = vids[i];
      if (name.indexOf(query) > -1) {
        //console.log(vids[i]);

        arr.push(vids[i]);
        console.log(arr);
      } else {
        arr = [];
      }
    }
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

      <ShowResult show={show} handleClose={handleClose} />
    </div>
  );
}

function ShowResult(props) {
  const listItems = arr.map((number) => <li>{number}</li>);
  return (
    <div>
      <Toast show={props.show} onClose={props.handleClose}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Results</strong>
          <small>11 mins ago</small>
        </Toast.Header>

        <Toast.Body>{listItems}</Toast.Body>
      </Toast>
    </div>
  );
}
