import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import WildPage from './Pages/WildPage';
import Layout from './Components/Layout';

//In react you have the freedom to design the code, however you like.
//But try to create the structure of the project like this one. It will
//be easier to manage and read.

function App() {
  return (

    //For helpful comments look at index.js in HomeComponent and index.js in LayoutComponent

    //This the route table for the ReactJs.
    //You have to define the routes(path,component) and a switch for routes.
   
    <Router>
      <Switch>
      <Route  exact path="/" component={()=>{return <Layout><Home name="Umair" age={80}/></Layout>}}/>
      <Route  path="/contact" component={()=>{return <Layout><Contact/></Layout>}}/>
      <Route  path="/login" component={()=>{return <Layout><Login/></Layout>}}/>
      <Route  path="/signup" component={()=>{return <Layout><Signup/></Layout>}}/>
      <Route  path="/about" component={()=>{return <Layout><About/></Layout>}}/>
      <Route  path="*" component={()=>{return <Layout><WildPage/></Layout>}}/>
      </Switch>
    </Router>
   
  );
}

export default App;
