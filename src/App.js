import Header from './components/header'
import Footer from './components/footer'
import Nav from './components/nav'
import Services from './components/services'
import Contact from './components/contact'
import About from './components/about'
import Testimonials from './components/testimonials'
import Portfolio from './components/portfolio'
import Experience from './components/experience'


function App() {
  return (
    <>
      <Header />
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio />
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
