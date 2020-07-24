import React from 'react';
import {Form, Card, Button} from 'react-bootstrap'; 
import axios from 'axios';

export default function StartProject(){

    var fname = React.createRef();
    var lname = React.createRef();
    var phn = React.createRef();
    var purp = React.createRef();
    const handleOnSubmit = () => {
        console.log(fname.current.value);
        console.log(lname.current.value);
        console.log(phn.current.value);
        console.log(purp.current.value);
    }

    return(
        <div className="container" >
            <Card className="mx-auto my-5" id="carousel1">
                <Card.Body className="mx-2">
                    <Card.Title>
                        Start a Project
                    </Card.Title>

                    
                    <Form>
                        <Form.Control type="text" placeholder="First Name" ref={fname}/>
                        <br />
                        <Form.Control type="text" placeholder="Last Name" ref={lname} />
                        <br />
                        <Form.Control type="text" placeholder="Phone Number" ref={phn}/>
                        <br />
                        <Form.Control as="textarea" rows="3" placeholder="Purpose" ref={purp}/>
                        <br />
                    </Form>

                    <Button className="px-5" onClick={handleOnSubmit} style = {{background:"#D1DB2A", borderColor:"#D1DB2A", color:"white", width:"100%"}}>Start a Project</Button>

                </Card.Body>
            </Card>
        </div>
    );
}