import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-space-between">
          <Navbar.Brand>
            <Link to="/" className="text-white ms-3 text-decoration-none">
              🍕
            </Link>
            Pizzería Mamma Mia!
          </Navbar.Brand>
          <Link to="/Pedido" className="text-white ms-3 text-decoration-none">
            🛒 $
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegacion;
