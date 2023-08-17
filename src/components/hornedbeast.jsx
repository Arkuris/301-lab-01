import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SelectBeast from './select-beast';
import Col from 'react-bootstrap/Col';
import heart from '../assets/heart.png';

class HornedBeast extends React.Component {
  constructor() {
    super(); 
    this.state = {
      isLiked: false,
      likeCount: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isLiked: !prevState.isLiked,
      likeCount: prevState.likeCount + 1,
    }));
  };

  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
        <Card style={{ width: '18rem' }}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{`Total Likes: ${this.state.likeCount}`}</Card.Text>
          <Card.Img
            variant="top"
            className="card-image"
            src={this.props.image}
            alt={this.props.description}
            title={this.props.title}
          />
          <Card.Text>{this.props.description}</Card.Text>
          <Button onClick={this.handleClick}>
            <img className="heart-button" src={heart} alt="Heart" />
            Like
          </Button>
          <Button className="info-button" onClick={this.props.toggleInfo}>
            More Info!
          </Button>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;