import './App.css';
import AboutSection from './components/AboutSection/AboutSection';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Header />
        <AboutSection />
        <FeaturedProjects />
    </div>
  );
}

export default App;
