import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Simran Kaur Saggu </span>
            from <span className="purple"> Kanpur, UP, India.</span>
            <br />I am a recent graduate in BTech (Computer Science Engineering) from Maharana Pratap Engineering College.
            <br />
             Currently I am a fresher, looking forward for a opportunity to kickstart my career as a software engineer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />Readig Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Expoloring New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Simran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
