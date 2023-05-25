import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../Styles/Solution.css';

const Solution = () => {
    return (
<Carousel  className="Car__1" variant="dark">
<h1> Une solution puissante et facile <br></br>
d’utilisation !</h1>
      <Carousel.Item>
        <img
          className="Item1"
          src="https://www.actu-mairie.fr/wp-content/uploads/2021/12/iPhone.png"
          width="309" height="554"/>
          </Carousel.Item>
          <Carousel.Item>
         <img
          className="Item2"
          src="https://www.actu-mairie.fr/wp-content/uploads/2021/12/iPhone.png"
          width="309" height="554"/>
          </Carousel.Item>
         
          <Carousel.Item>
          <img
          className="Item3"
          src="https://www.actu-mairie.fr/wp-content/uploads/2021/12/iPhone.png"
          width="309" height="554"/>
          </Carousel.Item>
           
   
          <Carousel.Item>
          <img
          className="Item4"
          src="https://www.actu-mairie.fr/wp-content/uploads/2021/12/iPhone.png"
          width="309" height="554"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
          className="Item5"
          src="https://www.actu-mairie.fr/wp-content/uploads/2021/12/iPhone.png"
          width="309" height="554"/>
          </Carousel.Item>
          
          </Carousel>
          
           
   

    )
}
export default Solution