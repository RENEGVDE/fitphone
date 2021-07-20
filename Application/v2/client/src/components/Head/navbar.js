import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import './navbar.css'
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar variant='light' className='header-container'>
                <Navbar.Brand href='/' className='header-text'>

                    Agreement
                </Navbar.Brand>
            </Navbar>
         );
    }
}
 
export default NavBar;