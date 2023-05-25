import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { container , Row, Col, Carousel } from "reactstrap";
import { Link } from "react-router-dom";
import SectionPA from '../UI/Sections/SectionPA';
import Solution from '../UI/Sections/Solution';
import InfoP from '../UI/Sections/InfoP';

import slide from '../Images/slide.png'
import "../Styles/Accueil.css"
import Affichage from '../UI/Sections/Affichage';
const Accueil = () => {
  return (
    <Helmet title="Acceuil">
    <section >   
        <container className="fff" >
          <Row >
            <Col lg="4" md="4">
              <div className="Mairie__slogon">
                <h1 className="mb-3"> <style>
                  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
                  </style>Actu Mairie <br></br>L'info de proximité!</h1>
                <h5 className="mb-4">
                  <span> Disponible sur :</span>
                </h5>
                <Row className ="R_Ow" align-items= "center">
                <Col lg="6" md="6">
                  <Link to="https://play.google.com/store/apps/details?id=com.webcom.actumairie&gl=FR">
                  <img  src="https://www.actu-mairie.fr/wp-content/uploads/2021/12/1-Page-1.png" width="150" height="45"/>
                  </Link>
                  </Col>

                  <Col lg="6" md="6">
                  <Link to="https://apps.apple.com/fr/app/actumairie/id1612618345">
                  <img  src="https://www.actu-mairie.fr/wp-content/uploads/2021/12/2-Page-1.png"width="150" height="45"/>
                  </Link>
                  </Col>
                  
                    <br></br>
                    <br></br>
                    <div className ="Bt__Insc" >
                    <button className="Insc__Commun-btn" >
                          Inscrire ma commune
                  <Link to="/Inscriptions">
                    
                  </Link>
                  </button>
                  </div>
              
                  </Row>
              </div>
            </Col>

            <Col lg="8" md="8">
            <div className="slide__img" >
                <img src={slide} height="800" alt="slide-mairie"  />
              </div>
             
              
              </Col>
           
                
          </Row>
          </container>
     </section>
     <section> 
     <container-fluid className="Info__mairie" >
          <Row>
            <Col lg="6" md="6">
            <div className="Mairie__img2">
                <img  src="https://www.actu-mairie.fr/wp-content/uploads/2021/12/4753175.png" width="500" height="500" />
              </div>
            </Col>
            <Col lg="6" md="6">
            <h1 className="mb-2">Restez informés des informations de votre mairie !</h1>
            <br></br>
            <h6 className="mb-1">
                  <span> Actu Mairie, c’est la solution gratuite N°1 pour connaître les actualités de sa mairie en temps réel ! Toutes les informations seront dans la poche de vos concitoyens, accessibles et disponibles à n’importe quel moment ! Simple, rapide et sécurisée, cette application est devenue la référence des applications mobiles pour les mairies. Le but de cette application ? Apporter à tous les citoyens qui le souhaitent les informations utiles et les dernières actualités sur la vie de leur collectivité. Actu Mairie est l’application par excellence, qui alerte et informe les utilisateurs 24h/24 et 7j/7 !</span>
                </h6>

            </Col>

             </Row>
            </container-fluid >

     </section>
     <br></br>
     <section> 

<SectionPA/>
    
     </section>
     <section>
      <Solution/>
      <section> 
        <Affichage/>
        </section>
     </section>
     <section> <InfoP/></section>
     
    </Helmet>
  );
};

export default Accueil
