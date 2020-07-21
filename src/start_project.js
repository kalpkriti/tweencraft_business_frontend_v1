import React from 'react';
import {Form, Card, Button} from 'react-bootstrap'; 

export default function StartProject(){

    var fname = React.createRef();
    var lname = React.createRef();
    var phn = React.createRef();
    var purp = React.createRef();

    return(
        <div className="container" >
            <Card className="mx-auto my-5" id="carousel1">
                <Card.Body className="mx-2">
                    <Card.Title>
                        Start a Project
                    </Card.Title>

                    
                    <Form>
                        <Form.Control type="text" placeholder="First Name" />
                        <br />
                        <Form.Control type="text" placeholder="Last Name" />
                        <br />
                        <Form.Control type="text" placeholder="Phone Number" />
                        <br />
                        <Form.Control as="textarea" rows="3" placeholder="Purpose" />
                        <br />
                    </Form>

                    <Button className="px-5" style = {{background:"#FF784B", borderColor:"#FF784B", color:"white", width:"100%"}}>Start a Project</Button>

                </Card.Body>
            </Card>
        </div>
    );
}