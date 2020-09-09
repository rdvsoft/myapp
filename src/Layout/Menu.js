import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
function Menu() {
    return (
        <div>
            <Navbar bg="light" expand="lg" style={{marginBottom:'10px'}}>
                <Navbar.Brand className="navMenu" as={Link} to="/Home">APP-TECNO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navMenu">
                        <Nav.Link as={Link} to="/GetProduct">Productos</Nav.Link>
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/RegistroUsuario">Registrarse</Nav.Link>
                        <Nav.Link as={Link} to="/ProductoAlta">Producto Alta</Nav.Link>
                    </Nav>            
                </Navbar.Collapse>
            </Navbar>
            
        </div >
    );
}
export default Menu;