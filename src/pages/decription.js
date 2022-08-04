import React from "react";
import { Button, Container, Image } from "react-bootstrap";
const Description = () => {
    return (
      <div>
        <Container>
          <h2 className="text-start text-primary display-5 fw-bold">
            <span className="display-3 fw-bolder" style={{fontFamily:"serif"}}>W</span>ho are we ?
          </h2>
          <p className="text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Container>
      </div>
    );
} 
export default Description;