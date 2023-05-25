import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigate,Link} from 'react-router-dom';

import "../../Styles/Header.css"

const  Header= () => {
  return (
    <header className="header" >
    <div>
     <div>
         <Navbar className= "NAVb" >
        <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <Link to="/Accueil">
          <div className="logo">
            <img src="https://www.actu-mairie.fr/wp-content/uploads/2023/04/actu-mairie-icon-phuesokxoobz1jbl13sjc1r3epjxe6jiwuyq5an0g0.png" width="110" height="65"/>
    </div>
    </Link>
          </div>
          <div  > 
          <Nav className= "Menu-H">
            <Nav.Link as={Link} to="/Accueil">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/Actualités">Actualités</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/Inscriptions">Inscriptions</Nav.Link>
            <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
            </Nav>
            
          </div>
          <div className= "Contact_tel" >
        <h5> 05 82 95 37 61</h5>          
          </div>
          
        </Container>
      </Navbar>

    </div>
    </div>
    </header>
  )
}

export default Header
