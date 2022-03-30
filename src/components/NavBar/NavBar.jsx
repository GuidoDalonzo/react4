import React from 'react'
import  Navbar  from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
/* import carritos from 'carritos.png' */
import carrito from '../../media/carrito.png'
import nautico from '../../media/nautico.png'


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"> <img src={ nautico } alt="nautico" width={25} /> Club Nautico Arrecifes </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Socios</Nav.Link>
      <Nav.Link href="#pricing">Instalaciones</Nav.Link>
      <NavDropdown title="Nosotros" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Nosotros</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Eventos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Galeria</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Historia</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Carrito</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        
        <img src={ carrito } alt="carrito" width={25} />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar