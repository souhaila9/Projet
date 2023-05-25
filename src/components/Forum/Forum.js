import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addThread } from '../../Actions/forumActions';
import  "../../Styles/Forum.css"
import { Container } from 'reactstrap';
import { container , Row, Col, Carousel } from "reactstrap";


const Forum = () => {
  const threads=useSelector(state=> state.forum.threads);
  const [threadTitle, setThreadTitle] = useState('');
  const dispatch=useDispatch();
  const handleAddThread = () => {
    if (threadTitle.trim() !== '') {
      dispatch(addThread(threadTitle))

      setThreadTitle('');
    }
    console.log('threadTitle :; ',threadTitle)   
  };

  return (
    <Container className='Fr_con'>
      <Row>
      <Col lg="6" md="6">
    <div className='Form'>
      <h1>Forum</h1>
      <input className='InP'
        type="text" placeholder='ajouter votre commentaire' 
        value={threadTitle}
        onChange={(e) => setThreadTitle(e.target.value)}
      />
      <button className='BTn' onClick={handleAddThread}>Commentez</button>
      <ul className='Ul-For'>
        {threads.map((thread, index) => (
          <h6 key={index}>{thread}</h6>
        ))}
      </ul>
    </div>
    </Col>

    <Col lg="6" md="6">
    <div className="Mairie__img2">
                <img  src="https://static.vecteezy.com/system/resources/previews/002/121/262/original/flat-illustration-of-internet-forum-concept-vector.jpg" width="500" height="500" />
              </div>
    </Col>
    </Row>
    </Container>
  );
};

export default Forum;
