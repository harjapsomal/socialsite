import React from "react";
import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

function Navbar() {
  return (
    <div style={{ height: "10vh", backgroundColor: "yellow", width: "100vw" }}>
      <Nav className="me-auto">
        <Nav.Link href="/testing#">Add Posts </Nav.Link>
        <Nav.Link href="/testing#/testing">Show posts</Nav.Link>
      </Nav>
    </div>
  );
}

export default Navbar;
