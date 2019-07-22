import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <NavBar expand="lg">
      <Navbar.Brand href="/">derrick</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">about</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </NavBar>
  </Styles>
);
