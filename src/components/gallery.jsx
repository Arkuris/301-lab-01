import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hornedBeastData from '../assets/data.json';
import HornedBeast from './hornedbeast.jsx';
import Image1 from '../assets/dog horns.png';
import Image2 from '../assets/GoodBoiHorns.png';

class Gallery extends React.Component{
  render() {
    return (
      <>
      <Container>
        <Row >
          <Col md>  
            <HornedBeast className="doggos" title="Doggo gone Goat" image={Image1} description="This is a dog with Horns" />

           <HornedBeast className="doggos" title="A Distiguished Gentleman" image={Image2} description="This is a fancy doge, also known as a good boi." />
  
           {hornedBeastData.map((beast, idx) => <HornedBeast key={idx} className={beast.name} image={beast.image_url} description={beast.description}/>)};
          </Col>
        </Row>
      </Container>
      </>
    )
  }
 }
export default Gallery;