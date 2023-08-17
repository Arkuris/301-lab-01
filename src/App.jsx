import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer.jsx';
import Gallery from './components/gallery.jsx';
import SelectBeast from './components/select-beast';
import hornedBeastData from './assets/data.json';
// import Image1 from './assets/dog horns.png';
// import Image2 from './assets/GoodBoiHorns.png';


class App extends React.Component{
constructor() {
  super()
  this.state = {
    beast: {
      title: '', 
      description: '', 
      image: '',
      },
    info: false,
  }
}
  toggleInfo = () => {
    this.setState({info: !this.state.info })
  };

  setBeast = (index) => {
    const selectedBeast = hornedBeastData[index];
    this.setState({
      beast: {
        title: selectedBeast.title, 
        description: selectedBeast.description, 
        image: selectedBeast.image_url,
      }
    });
  }

    render() {
      return (
        <>
          <div>
            <Header />
            <SelectBeast beast={this.state.beast} info={this.state.info} toggleInfo={this.toggleInfo}/>
            <Gallery data={hornedBeastData} toggleInfo={this.toggleInfo} />
            <Footer />
          </div>
        </>
    )
  }
}
export default App;
