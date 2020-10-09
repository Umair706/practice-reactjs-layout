import React from "react";
//You can create an individual/seperate .css file for an component and import it on the top
import "./style.css";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
/**
 * @author
 * @function Home
 **/

//This is a functional component that takes props and show name passed as a prop

const Home = (props) => {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  //You can find about the Object destruction from the above link
  //This statement below shows you an example of how you can get a key value from an object
  const { name, age } = props;
  return (
    <Container fluid>
      <Row>
        <Col>
          {/* You can show the data using {} in the JSX */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: 500 }}
                src={require("../../asset/pix3.jpg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: 500 }}
                src={require("../../asset/pix2.jpg")}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: 500 }}
                src={require("../../asset/pix.jpg")}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row style={{ margin: "35px 40px" }}>
        <Col className="col-">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{ height: 180, width: "100%" }}
              src={require("../../asset/pix.jpg")}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Click Here</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{ height: 180, width: "100%" }}
              src={require("../../asset/pix.jpg")}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Click Here</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-"> <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{ height: 180, width: "100%" }}
              src={require("../../asset/pix.jpg")}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Click Here</Button>
            </Card.Body>
          </Card></Col>
        <Col > <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{ height: 180, width: "100%" }}
              src={require("../../asset/pix.jpg")}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Click Here</Button>
            </Card.Body>
          </Card></Col>
      </Row>
     
    </Container>
  );
};

//Every component can have only one default export
export default Home;
