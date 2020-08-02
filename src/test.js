import React from "react";
import { Nav } from "react-bootstrap";

export default function Test() {
  const handleEvent1 = () => {
    var div = document.getElementById("anim-exp");
    console.log(div);
    div.className = "anim-test1";
  };

  const handleEvent2 = () => {
    var div = document.getElementById("anim-exp");
    console.log(div);
    div.className = "anim-test2";
  };

  const handleReset = () => {
    var div = document.getElementById("anim-exp");
    console.log(div);
    div.className = "";
  };

  return (
    <div className="text-center">
      <br />
      <br />
      <button className="btn btn-primary mx-2" onClick={handleEvent1}>
        Test 1
      </button>
      <button className="btn btn-primary" onClick={handleEvent2}>
        Test 2
      </button>
      <br />
      <center>
        <div
          style={{
            backgroundColor: "red",
            width: "300px",
            height: "300px",
            textAlign: "center",
            marginTop: "50px",
          }}
          id="anim-exp"
        ></div>
        <br />
        <br />
        <button onClick={handleReset}>Reset</button>
      </center>
      <Nav fill defaultActiveKey="Jewellery">
        <Nav.Item>
          <Nav.Link eventKey="Insurance" className="small-tab-text">
            Insurance
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Jewellery" className="small-tab-text">
            Jewellery
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Education" className="small-tab-text">
            Education
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/sample" className="small-tab-text">
            View all
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
