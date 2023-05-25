import React from 'react'
import { container, Row, Col, Carousel } from "reactstrap";
import { Link } from "react-router-dom";
import news from '../../Images/news.png'
import '../../Styles/InfoP.css'
const InfoP = () => {
  return (

     <container >
    
      <Row className="Info__P">
      <Col lg="4" md="4">
              <div className="Mairie__slogon">
                <h1 className="info1">L'info de Proximité!</h1>
                <h5 className="info2">
                  <span> Disponible sur :</span>
                </h5>
                <Row className ="Info__BT" >
                <Col lg="8" md="6">
                  <Link to="https://play.google.com/store/apps/details?id=com.webcom.actumairie&gl=FR">
                  <img  src="https://www.actu-mairie.fr/wp-content/uploads/2021/12/1-Page-1.png" width="200" height="59"/>
                  </Link>
                  </Col>

                  <Col lg="4" md="6">
                  <Link to="https://apps.apple.com/fr/app/actumairie/id1612618345">
                  <img  src="https://www.actu-mairie.fr/wp-content/uploads/2021/12/2-Page-1.png"width="200" height="59"/>
                  </Link>
                  </Col>
                  
                   
                    
              
                  </Row>
              </div>
            </Col>

            <Col lg="8" md="8">
            <div className="news__img">
                <img src={news} alt="news-mairie" />
              </div>
             
              
              </Col>
           
                
          </Row>
          </container>


)
}
export default InfoP
