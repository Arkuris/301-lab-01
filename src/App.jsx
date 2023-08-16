import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer.jsx'
import Gallery from './components/gallery.jsx'


function App() {

  return (
    <>
      <div>
        <Header />
        <Gallery />
        <Footer />
      </div>
    </>
  )
}

export default App
