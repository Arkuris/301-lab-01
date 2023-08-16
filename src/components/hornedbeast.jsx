import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
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
        <Button onClick={this.handleClick}> <img className="heart-button" src={heart} />Like</Button>
      </Card>
    );
  }
}

export default HornedBeast;