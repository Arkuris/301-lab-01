import React from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';

class SelectBeast extends React.Component {
  constructor(){
    super();
    this.state = {
    };
  }
  render() {
    console.log(this.props)
    return (
      <Modal show={this.props.info} onHide={this.props.toggleInfo}>o
        <Modal.Title>{this.props.beast.title}</Modal.Title>
        {/* <p>{`Total Likes: ${this.state.likeCount}`}</p> */}
        <img
          className="card-image"
          src={this.props.beast.image}
          alt={this.props.beast.description}
          title={this.props.beast.title}
        />
        <p>{this.props.beast.description}</p>
      </Modal>
    );
  }
}
export default SelectBeast;