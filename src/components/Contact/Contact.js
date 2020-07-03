import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <h1>
        hello<span className="Red">.</span>
      </h1>

      <h2>
        Let's work together to create game-changing experiences that will take
        your brand from bland to buzzworthy
      </h2>

      <h3>CONTACT</h3>
      <h3>hello@buzzworthystudio.com</h3>

      <div className="CardContainer">
        <div className="Card">
          <div className="CardImg">
            <img
              src={require("../../media/contact-sales.png")}
              alt="contact sales"
            />
          </div>
          <div className="CardBody">
            <h3>Want to join RippleNet?</h3>
            <p>Speak with a member of our sales team.</p>
            <button>Contact Sales</button>
          </div>
        </div>
        <div className="Card">
          <div className="CardImg">
            <img
              src={require("../../media/contact-press.png")}
              alt="contact sales"
            />
          </div>
          <div className="CardBody">
            <h3>Want to join RippleNet?</h3>
            <p>Speak with a member of our sales team.</p>
            <button>Contact Press</button>
          </div>
        </div>
        <div className="Card">
          <div className="CardImg">
            <img
              src={require("../../media/contact-xrp.png")}
              alt="contact sales"
            />
          </div>
          <div className="CardBody">
            <h3>Want to join RippleNet?</h3>
            <p>Speak with a member of our sales team.</p>
            <button>See All FAQs</button>
          </div>
        </div>
        <div className="Card">
          <div className="CardImg">
            <img
              src={require("../../media/contact-sales.png")}
              alt="contact sales"
            />
          </div>
          <div className="CardBody">
            <h3>Want to join RippleNet?</h3>
            <p>Speak with a member of our sales team.</p>
            <button>Contact Sales</button>
          </div>
        </div>
        <div className="Card">
          <div className="CardImg">
            <img
              src={require("../../media/contact-press.png")}
              alt="contact sales"
            />
          </div>
          <div className="CardBody">
            <h3>Want to join RippleNet?</h3>
            <p>Speak with a member of our sales team.</p>
            <button>Contact Press</button>
          </div>
        </div>
        <div className="Card">
          <div className="CardImg">
            <img
              src={require("../../media/contact-xrp.png")}
              alt="contact sales"
            />
          </div>
          <div className="CardBody">
            <h3>Want to join RippleNet?</h3>
            <p>Speak with a member of our sales team.</p>
            <button>See All FAQs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
