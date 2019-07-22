import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

const Styles = styled.div`
  .navbar {
    background-color: transparent !important;
    border-color: transparent;
    background-image: none;
    box-shadow: none;
    font-family: 'Work Sans', sans-serif;
  }
  .navbar-nav .nav-link {
    color: black;

    &:hover {
      color: blue;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <NavBar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/work">work</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </NavBar>
  </Styles>
);
