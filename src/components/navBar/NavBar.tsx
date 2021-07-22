import React, { useState, Component } from "react"
import { Nav, Navbar, Container, Image } from 'react-bootstrap'
import logo from "../../assets/img/logo.png"
import "./NavBar.css"
interface Props {
    name?: String;
}

class NavBar extends Component<Props>{
    public static defaultProps = {
        name: "World"
    };
    componentDidMount = () => { }

    render() {
        return <Navbar bg="ligth" expand="lg" className="border">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={logo} alt="" className='img' fluid={false} roundedCircle />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Películas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    }
}
export default NavBar;