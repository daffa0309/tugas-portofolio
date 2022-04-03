import React, { Component } from 'react';
import './App.css';
import {Layout, Navigation, Drawer, Content} from 'react-mdl';
// import styled from 'styled-components';
import Wrapper from './components/styled/Wrapper'
// import PageContent from './components/styled/PageContent'
import Router from './components/router'
import logo from './assets/images/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg';
import {Link} from 'react-router-dom';

class App extends Component {
  
  render() {
    const mystyle = {
      backgroundColor: "orangeRed",
      paddingTop: "50px",
      color: "white",
      fontFamily: "Arial",
      fontWeight: "bold",
    };
    const link = {
      color: "white",
      fontFamily: "Arial",
      fontWeight: "bold",
      hover: "white",
    };
    const im = {
      borderRadius: '50%',
      paddingLeft: '10px'
    };

    return (
      // {/* No header, and the drawer stays open on larger screens (fixed drawer). */}
      <Wrapper>
      <Layout fixedDrawer>
        <Drawer style={mystyle} title="">
        
          <img src={logo} width="200" height="200" alt="avatar"  style={im}/>
            <Navigation>
                <Link style={link} to="/about">ABOUT</Link>
                <Link style={link} to="/experience">EXPERIENCE</Link>
                <Link style={link} to="/education">EDUCATION</Link>
                <Link style={link} to="/skill">SKILL</Link>
                <Link style={link} to="/interest">INTEREST</Link> 
                <Link style={link} to="/awards">AWARDS</Link> 

            </Navigation>
        </Drawer>
        <Content>
          <Router/>


        </Content>
      </Layout>
      </Wrapper>
    );
  }
}

export default App;

