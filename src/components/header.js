import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";

const header = () => (
  <header>
    <Navbar expand="xl" bg="dark" variant="dark">
      <Navbar.Brand href="#">CRUD Application</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="posts">
            Posts
          </Link>
          <Link className="nav-link" to="comments">
            Comments
          </Link>
          <Link className="nav-link" to="users">
            Users
          </Link>
          <NavDropdown title="Search" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Posts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Comments</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Users</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default header;
