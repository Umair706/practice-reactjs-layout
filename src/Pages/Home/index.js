import React from "react";
//You can create an individual/seperate .css file for an component and import it on the top
import "C://Code/practice-reactjs-layout/src/Pages/Home/style.css";
import { FaGithub } from "react-icons/fa";
import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Button,
  Jumbotron,
} from "react-bootstrap";
import Header from "../../Components/Header";
/**
 * @author
 * @function Home
 **/

//This is a functional component that takes props and show name passed as a prop

const Home = (props) => {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  //You can find about the Object destruction from the above link
  //This statement below shows you an example of how you can get a key value from an object
  
  const introRef = React.useRef(null);
  const skillsRef = React.useRef(null);
  const hobbiesRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const contactRef = React.useRef(null);


  const scrollToIntro=()=>{
    introRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  

  }
  
  const scrollToSkills=()=>{
    skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  

  }
  const scrollToHobbies=()=>{
    hobbiesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  

  }
  const scrollToProjects=()=>{
    projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  

  }
  
  const [intro, setIntro] = React.useState(
    "As a computer science major, my passion is to be an innovator and strive to be a \
    strong developer and analytical thinker. I am confident and poised at interacting with\
     individuals at all levels. I am committed and focused on any task at hand. ");



  const [skills, setSkills] = React.useState([
    "ReactJs",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
    "Material UI",
    "React-Bootstrap",
    "React Native",
    "JWT Authorization",
    "Shineout",
    "JSX",
    "HTML",
    "CSS",
    "Javascript",
    "Socket.io",
    "Redux",
    "AWS EC2",
    "Heroku",
    "Github",
  ]);
  const [hobbies, setHobbies] = React.useState([
    "Writing Novels",
    "Reading Novels",
    "Video Games",
    "Cricket",
    "Anime",
    "Manga",
    "Reading Newspaper",
  ]);

  return (
    <div> <Header
    scrollToIntro={scrollToIntro}
    scrollToHobbies={scrollToHobbies}
    scrollToProjects={scrollToProjects}
    scrollToSkills={scrollToSkills}
    
    />
    <Container fluid style={{marginTop:4,width:"100%"}}>
     
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
      <Row ref={introRef}  style={{ margin: 10 }}>
        <Col>
          <Jumbotron className="intro">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                style={{
                  height: 80,
                  borderRadius: 40,
                  float: "left",
                  border: "4px solid #38B6FF",
                }}
                src={require("../../asset/profile.png")}
                alt="Profile"
              />
              <h1 style={{ alignSelf: "center", marginLeft: 10 }}>
                Hi! I am Muhammad Umair
              </h1>
            </div>

            <p>{intro}</p>
            <p style={{ alignSelf: "flex-start", marginLeft: 5 }}>
              <Button
                style={{ backgroundColor: "#8C52FF", float: "left" }}
                onClick={() =>
                  window.open("https://github.com/Umair706", "_blank")
                }
              >
                <FaGithub style={{ alignSelf: "center", marginTop: -5 }} />{" "}
                Github
              </Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <h3 ref={skillsRef} style={{ marginLeft: 27 }}>Skills</h3>
      <div className="skills" style={{ margin: 25 }}>
        {skills.map((item, key) => {
          return (
            <div className="inner_skills" key={key}>
              <p style={{ margin: "auto" }}>{item}</p>
            </div>
          );
        })}
      </div>
      <h3 ref={hobbiesRef} style={{ marginLeft: 27 }}>Hobbies</h3>
      <div className="skills" style={{ margin: 25 }}>
        {hobbies.map((item, key) => {
          return (
            <div className="inner_skills2" key={key}>
              <p style={{ margin: "auto" }}>{item}</p>
            </div>
          );
        })}
      </div>
      <h3 ref={projectsRef} style={{ marginLeft: 27 }}>Projects</h3>
      <div className="projects">
        <Col className="column">
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              style={{ height: 180, width: "100%" }}
              src={require("../../asset/BioAI.png")}
            />
            <Card.Body className="cardBody">
              <Card.Title>BioAI</Card.Title>
              <Card.Text>
                <p>
                  A web and moble platform built on MERN Stack, Django and React
                  Native that contains:.
                </p>
                <p>Appointment Scheduling</p>
                <p>Patient's Medical Record Mangement</p>
                <p>Patient's Medical Diagnosis</p>
                <p>Download Patient's Medical Record</p>
                <p>Detect Lung Diseases in X-Ray Images</p>
                <p>Detect Lung Cancer in Biopsy Images</p>
              </Card.Text>
              <Button variant="primary">
                <FaGithub style={{ alignSelf: "center", marginTop: -5 }} />{" "}
                Github
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="column">
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              style={{ height: 180, width: "100%" }}
              src={require("../../asset/NovelWR.png")}
            />
            <Card.Body style={{ height: 550 }}>
              <Card.Title>NovelWR</Card.Title>
              <Card.Text>
                <p>
                  A web platform to read and write web novels. It has following
                  features:
                </p>
                <p>
                  Write amazigly creative novels and publish them for general
                  users
                </p>
                <p>Read Novels published by talented authors</p>
                <p>View Popular novels based on genre</p>
                <p>Get Recommendations for novels</p>
                <p>
                  Review novels and vote for novels to win the popularity race
                </p>
                <br></br>
              </Card.Text>
              <Button variant="primary">
                <FaGithub style={{ alignSelf: "center", marginTop: -5 }} />{" "}
                Github
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="column">
          {" "}
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              style={{ height: 180, width: "100%" }}
              src={require("../../asset/ChatApp.png")}
            />
            <Card.Body style={{ height: 550 }}>
              <Card.Title>ChatApp</Card.Title>
              <Card.Text>
                <p>
                  Live group chat app for communication with following features:
                </p>
                <p>Create User Account</p>
                <p>Sign in to the system</p>
                <p>Create new group</p>
                <p>Search groups to join</p>
                <p>Join any group</p>
                <p>Chat with other members of the group</p>
                <p>Broadcast a message to all users</p>
                <p> `</p>
                {/* <br></br> */}
              </Card.Text>
              <Button variant="primary" style={{ marginTop: -10 }}>
                <FaGithub style={{ alignSelf: "center", marginTop: -5 }} />{" "}
                Github
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="column">
          {" "}
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              style={{ height: 180, width: "100%" }}
              src={require("../../asset/Tuitify.png")}
            />
            <Card.Body style={{ height: 550 }}>
              <Card.Title>Tuitify</Card.Title>
              <Card.Text>
                <p>
                  UI for a react native platform for sharing content. It has
                  following features
                </p>
                <p>User Profiling</p>
                <p>Follow people</p>
                <p>Chat with other people</p>
                <p>Watch videos content</p>
                <p>View different courses and their details</p>
                <p>Post videos online</p>
                <p>View other user's profile</p>
                <br></br>
              </Card.Text>
              <Button variant="primary" style={{ marginTop: -10 }}>
                <FaGithub style={{ alignSelf: "center", marginTop: -5 }} />{" "}
                Github
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </Container>
    </div>
  );
};

//Every component can have only one default export
export default Home;
