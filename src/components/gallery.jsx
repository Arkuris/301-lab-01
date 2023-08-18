import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from './hornedbeast.jsx';
import Form from 'react-bootstrap/Form';

class Gallery extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      activeHorns: 0, 
    };
  }

  handleSwitchChange = (event) => {
    const { value } = event.target;
    this.setState({
      activeHorns: parseInt(value, 10), 
    });
  };

  handleMoreInfo = (idx) => {
    this.props.toggleInfo();
    this.props.setBeast(idx);
  }

  render() {
    const { activeHorns } = this.state;
    const { data } = this.props;
    const filteredData = data.filter((beast) => beast.horns === activeHorns);

    return (
      <>
        <Form.Group>
          <Form.Check
            inline
            type="switch"
            id="custom-switch-1"
            label={`Horn Amount 1`}
            value={1}
            onChange={this.handleSwitchChange}
          />
          <Form.Check
            inline
            type="switch"
            id="custom-switch-2"
            label={`Horn Amount 2`}
            value={2}
            onChange={this.handleSwitchChange}
          />
          <Form.Check
            inline
            type="switch"
            id="custom-switch-3"
            label={`Horn Amount 3`}
            value={3}
            onChange={this.handleSwitchChange}
          />
          <Form.Check
            inline
            type="switch"
            id="custom-switch-100"
            label={`Horn Amount 100`}
            value={100}
            onChange={this.handleSwitchChange}
          />
        </Form.Group>
      <Container>
        <Row >
        {/* {this.props.data.map((beast, idx) => ( */}
        {filteredData.map((beast, idx) => (
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