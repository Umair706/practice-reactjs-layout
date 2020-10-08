import React from 'react'
//You can create an individual/seperate .css file for an component and import it on the top
import "./style.css";
import {Carousel,Container,Row,Col} from "react-bootstrap";
/**
* @author
* @function Home
**/

//This is a functional component that takes props and show name passed as a prop

const Home = (props) => {

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//You can find about the Object destruction from the above link
//This statement below shows you an example of how you can get a key value from an object
const {name,age} = props; 
  return(
      
    <Container fluid>
        <Row>
          <Col>
      {/* You can show the data using {} in the JSX */}
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height:500}}
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height:500}}
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
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
      style={{height:500}}
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Col>
</Row>
<Row>
    <Col>1 of 1</Col>
  </Row> <Row>
    <Col>1 of 1</Col>
  </Row> <Row>
    <Col>1 of 1</Col>
  </Row> <Row>
    <Col>1 of 1</Col>
  </Row> <Row>
    <Col>1 of 1</Col>
  </Row>


 
</Container>
   )

 }

 //Every component can have only one default export
export default Home