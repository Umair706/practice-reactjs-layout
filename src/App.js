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
function App() {
  return (
    <Router>
      <Switch>
      <Route  exact path="/" component={()=>{return <Layout><Home/></Layout>}}/>
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
