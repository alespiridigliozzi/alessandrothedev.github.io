import './App.css';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Header />
        <AboutSection />
        <FeaturedProjects />
        <ContactSection />
        <Footer />
    </div>
  );
}

export default App;
