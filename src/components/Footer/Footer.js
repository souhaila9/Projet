import React from "react";
import { Container, ListGroup, Row , Col } from "reactstrap";
import "../../Styles/Footer.css"
import Groupe from '../../Images/Groupe.png'
const Footer = () => {
  return (
    <footer className="footer-Mairie ">
      <div className="container-footer-Mairie ">
        <Container>
          <Row>
          <Col lg= '3' md='4' sm='6'>
        <div className="footer__logo">
        <img src={Groupe} alt="news-mairie"/>
        <br></br> <br></br>
        <p>Actu Mairie est la plateforme N°1 d’alertes et d’informations pour les habitants d’une commune. C’est la meilleure alternative pour obtenir les actualités locales en temps réel !</p>
        </div>
       </Col>

       <Col lg= '3' md='4' sm='6'>
       <div>
        <h4 className="footer__Contact">Contactez-nous</h4>
        <ListGroup>
          <div className="Footer-C">
            <span>185 avenue des USA 31200 Toulouse</span>
            
            </div>
          <div className="Footer-C">
            <span>contact@actu-mairie.fr</span>
          </div>
        
          <div className="Footer-C">
            <span>05 82 95 37 61</span>
          </div>
          </ListGroup>
      </div>
        </Col>
        <Col lg= '3' md='4' sm='6'>
       <div>
        <h4 className="footer__lien">Liens utiles</h4>
        <ListGroup>
          <div className="Footer-L">
            <span>Communication</span>
            
            </div>
          <div className="Footer-L">
            <span>Inscriptions</span>
          </div>
        
          <div className="Footer-L">
            <span>Presse</span>
          </div>
          <div className="Footer-L">
            <span>FAQ</span>
          </div>
          </ListGroup>
      </div>
        </Col>

        <Col lg= '3' md='4' sm='6'>
       <div>
        <h4 className="Footer-Suive">Suivez-nous</h4>
        <ListGroup>
          <div className="Footer-Sv">
            <span> Facebook</span>
            
            </div>
          <div className="Footer-Sv">
            <span> Instagram</span>
          </div>
        
          <div className="Footer-Sv">
            <span> Linkedin</span>
          </div>
          <div className="Footer-Sv">
            <span>Twitter</span>
          </div>
          <div className="Footer-Sv">
            <span>Youtube</span>
          </div>
          </ListGroup>
      </div>
        </Col>
        
       
      </Row>
      <div className="news " >
        <h4 className="newsletter "> Newsletters</h4>
       <input className="INP-NEW " type="email" placeholder="Adresse mail"/>
       <button className="BT-NEW " > Envoyer</button>
       </div>
     
      <div className="Texte-Cpyr">
        
        <p> @Copyright 2022 ActuMairie – Solution Mairie Digitale</p>
       <p> Mentions légales – Cookies – Politique de confidentialité</p>
        </div>
      </Container>
      
      </div>
    </footer>
  );
};

export default Footer;