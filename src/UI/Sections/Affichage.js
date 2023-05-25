import { useSelector, useDispatch, dispatch} from 'react-redux';
import { addThread } from '../../Actions/forumActions';
import React, {useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'reactstrap';
import'.././Sections/Affichage.css'


const Affichage = () => {
  const thread = useSelector(state => state.forum.threads);
  const test = useSelector(state => state.forum);

  console.log("thread affiche",thread)
  console.log("forum affiche",test)

  return (
    <div className='comm'>
      <h2>Commentaires</h2>
      <Carousel className='car' controls>
      <Carousel.Item>
        <Card className='card'>
  <p> {thread} </p>
  </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card className='card'>
  <p> {thread} </p>
  </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card className='card'>
  <p> {thread} </p>
  </Card>
  </Carousel.Item>
</Carousel>
      
    </div>
  );
};

export default Affichage;