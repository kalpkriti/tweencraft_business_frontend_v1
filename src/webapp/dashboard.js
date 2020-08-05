import React from "react";
import "./css/dashboard.css";
import { Accordion, Card, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div
      className=""
      style={{
        padding: "2%",
        margin: "0%",
        background: "rgba(57, 63, 66, 0.02)",
      }}
    >
      <br />
      <h2 className="dash-greeting">Hi Alexa!</h2>
      <span className="dash-text">Here's your current projects</span>
      <br />
      <br />
      <Accordion defaultActiveKey="0">
        <Card style={{ borderRadius: "10px" }}>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            style={{
              borderBottom: "none",
              backgroundColor: "rgba(57, 63, 66, 0.02)",
            }}
          >
            Ongoing Projects
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body style={{ backgroundColor: "rgba(57, 63, 66, 0.02)" }}>
              <Card className="inner-card">
                <Card.Title className="inner-card-title">Promotion</Card.Title>
                <Card.Text className="inner-card-text">
                  Next update in 2 days
                </Card.Text>
                <Button className="review-button" variant="review-button">
                  <span className="review-button-text">Review Script</span>
                </Button>
                <div className="d-flex stage-indicators">
                  <div className="stage-indicator-active" />
                  <div className="stage-indicator-inactive" />
                  <div className="stage-indicator-inactive" />
                  <div className="stage-indicator-inactive" />
                  <div className="stage-indicator-inactive" />
                  <span className="stage-indicator-num">1/5</span>
                </div>
                <Button
                  className="proj-button"
                  variant="proj-button"
                  style={{ margin: "5%" }}
                >
                  View Project
                </Button>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
