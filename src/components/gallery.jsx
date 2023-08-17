import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from './hornedbeast.jsx';
// import Image1 from '../assets/dog horns.png';
// import Image2 from '../assets/GoodBoiHorns.png';

class Gallery extends React.Component{

  handleMoreInfo = (idx) => {
    this.props.toggleInfo();
    this.props.setBeast(idx);
  }

  render() {
    return (
      <>
      <Container>
        <Row >
        {this.props.data.map((beast, idx) => (
            <HornedBeast
              toggleInfo={() => this.handleMoreInfo(idx)}
              // setBeast={() => this.props.setBeast(idx)} // Call setBeast with the index
              key={idx}
              title={beast.title}
              className={beast.name}
              image={beast.image_url}
              description={beast.description}
            />
          ))}
        </Row>
      </Container>
      </>
    )
  }
 }
export default Gallery;