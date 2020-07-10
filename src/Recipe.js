import React from 'react';
import {Card, Button} from 'react-bootstrap';

export default function Recipe(){

    return(
        <div>
            <br />
            <br />
            <center>
            <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
            <Card.Body>
                <center>
                <Card.Title>Milk Fruit Fresh with Vegies</Card.Title>
                <Card.Text style={{color:"grey"}}>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="light" style={{border: "round", borderRadius: "20px", borderColor:"#e0e0e0", borderWidth: "1px", padding: "5px 15px", margin: "5px"}}>Milk</Button>
                <Button variant="light" style={{border: "round", borderRadius: "20px", borderColor:"#e0e0e0", borderWidth: "1px", padding: "5px 15px", margin: "5px"}}>Lemon</Button>
                <Button variant="light" style={{border: "round", borderRadius: "20px", borderColor:"#e0e0e0", borderWidth: "1px", padding: "5px 15px", margin: "5px"}}>Sayur</Button>
                </center>
            </Card.Body>
            </Card>
            </center>
        </div>
    )
}