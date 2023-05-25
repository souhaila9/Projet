import React from 'react'
import { Container, Row, Col } from "reactstrap";
import "../Sections/SectionPA.css"


const SectionPA = () => {
  return (
    <Container className="Icon__Info" >
      <h1> Pourquoi utiliser Actu Mairie ?</h1>
      <br></br>
      <br></br>
     <Row>
     <Col lg="4" md="4">
               <div className="Info__img">
              <img  src="https://www.actu-mairie.fr/wp-content/uploads/elementor/thumbs/1-phuesjvt67owfivimrzq3wnzhrq7rlpo42bdodhsts.png"/>
              <h6> Informations en <br></br> temps réel</h6>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="Inst__img">
              <img  src="https://www.actu-mairie.fr/wp-content/uploads/elementor/thumbs/2-phuesmpbqpsrecrf6b7ltdyd9xcbep0v4g9u47dmb4.png"/>
              <h6> Installation <br></br> multi-support</h6>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="Comm__img">
              <img  src="https://www.actu-mairie.fr/wp-content/uploads/elementor/thumbs/3-phuesmpbqpsrecrf6b7ltdyd9xcbep0v4g9u47dmb4.png"/>
              <h6> Communication facilitée <br></br> entre habitants & collectivités</h6>
              </div>
            </Col>
            
            </Row>
               
               <br></br>

            <Row>
            <Col lg="4" md="4">
              <div className="hero__img">
              <img  src="https://www.actu-mairie.fr/wp-content/uploads/elementor/thumbs/5-phuesnn5xju1pyq20tm8dvptvb7ome4lgkxblhc84w.png"/>
              <h6> Facilité <br></br> d'utilisation</h6>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="hero__img">
              <img  src="https://www.actu-mairie.fr/wp-content/uploads/elementor/thumbs/6-phuesnn5xju1pyq20tm8dvptvb7ome4lgkxblhc84w.png"/>
              <h6> Application 100% gratuite <br></br> et sans engagement </h6>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="hero__img">
              <img  src="https://www.actu-mairie.fr/wp-content/uploads/elementor/thumbs/4-phuesmpbqpsrecrf6b7ltdyd9xcbep0v4g9u47dmb4.png"/>
              <h6> Inscription commune <br></br> en 5 mn </h6>
              </div>
            </Col>
            
            </Row>


    </Container>
  )
}

export default SectionPA
