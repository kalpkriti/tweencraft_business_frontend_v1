import React from "react";
import { Image, Card, Button, Form } from "react-bootstrap";
import illus from "./static/illustration1.png";
import Footer from "./footer";

export default function Contact() {
  return (
    <div>
      <div className="cont-div" />
      <span className="contact-head-title">Start your project now.</span>
      <br />
      <span className="contact-head-text">
        Ready for cost effective animated videos now
      </span>
      <br />
      <div className="contact-img">
        <Image src={illus} style={{ width: "100%" }} />
      </div>
      <div className="contact-form-card">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="contact-svg-1"
        >
          <path
            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
            fill="#AAB318"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.5556 22.8149C26.4536 22.8149 25.3716 22.6426 24.3462 22.3037C23.8437 22.1323 23.226 22.2896 22.9194 22.6045L20.8955 24.1324C18.5483 22.8794 17.1025 21.4341 15.8667 19.1045L17.3496 17.1334C17.7348 16.7486 17.873 16.1866 17.7075 15.6592C17.3672 14.6285 17.1943 13.5469 17.1943 12.4444C17.1943 11.648 16.5464 11 15.75 11H12.4444C11.648 11 11 11.648 11 12.4444C11 21.5733 18.4268 29 27.5556 29C28.352 29 29 28.352 29 27.5556V24.2593C29 23.4629 28.352 22.8149 27.5556 22.8149Z"
            fill="white"
          />
        </svg>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="contact-svg-2"
        >
          <path
            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
            fill="#2D8B7A"
          />
          <rect x="11" y="12" width="19.2" height="16" rx="3" fill="white" />
          <path
            d="M27.0002 15.1997L21.377 19.5411C21.0251 19.8129 20.536 19.8196 20.1767 19.5576L14.2002 15.1997"
            stroke="#2D8B7A"
            stroke-width="1.6"
            stroke-linecap="round"
          />
        </svg>

        <span className="contact-form-head-1 cont-call-pos">Direct Call</span>
        <span className="contact-form-head-2 cont-num-pos">+918744032032</span>

        <span className="contact-form-head-1 cont-mail-pos">WhatsApp No.</span>
        <span className="contact-form-head-2 cont-id-pos">+918105942244</span>

        <br />
        <span className="contact-card-title">Help us with animated videos</span>

        <br />

        <Form className="cont-form">
          <Form.Control type="text" placeholder="Name" />
          <br />
          <Form.Control type="email" placeholder="Email Address" />
          <br />
          <Form.Control type="text" placeholder="Phone Number" />
          <br />
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Describe your project briefly"
          />
          <br />
        </Form>

        <Button
          className="cont-form-button"
          style={{
            background: "#AAB318",
            borderColor: "#AAB318",
            color: "white",
          }}
        >
          Start a Project
        </Button>

        <br />
      </div>
      <div className="contact-footer">
        <Footer />
      </div>
    </div>
  );
}
