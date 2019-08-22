import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { BrowserRouter, Link } from 'react-router-dom'
import Navbars from './Navbar'
import Home from './home'
import Login from './login-form'

class AppNavbar extends Component {
    state = {
        isOpen: false
    };

toggle = () => { //arrow func allows us not use bind on our constructor props
   this.setState({
      isOpen: !this.state.isOpen
    });
};

render(){
    return(
        <div>
            <BrowserRouter>
            <Navbars />
            
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/jpimentel45">
                                    GitHub
            </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            </BrowserRouter>
        </div>
    )
   
}
}



export default AppNavbar;