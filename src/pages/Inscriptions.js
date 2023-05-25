import React from 'react'
import { Container, Row, Col } from "reactstrap";
import FormulaireINS from '../UI/FormulaireINS';

const Inscriptions = () => {
  return (
    <div>
      <section>   
        <Container className="align-items-center" >
          <Row>
          <Col lg="4" md="4">
          <h1 className="INS-1">Inscription</h1><br></br>

             <h6> Faire la demande d'inscription</h6><br></br>
             <h6> Nous planifions avec vous un rendez-vous,<br></br>
             afin de vous expliquer le fonctionnement de l'outil et vous former à son administration.</h6><br></br>
             <h6> 
Renvoyer le formulaire ci dessous complété à <br></br> contact@actu-mairie.fr</h6>
</Col>
<Col lg="4" md="4">

<FormulaireINS/>

</Col>
      



          </Row>
          </Container>
          </section>
    </div>
  )
}

export default Inscriptions;
