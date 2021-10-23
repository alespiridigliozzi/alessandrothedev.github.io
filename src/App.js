import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';

function App() {
  return (
    <Router>
        <div className="App">
            <NavBar />
                <ScrollToTop>
                    <Switch>

                        <Route path="/about">
                        <About />
                        </Route>

                        <Route exact path="/projects">
                            <Projects />
                        </Route>

                        <Route exact path="/project/:projectID">
                            <ProjectDetails />
                        </Route>

                        <Route exact path="/">
                            <Header />
                            <AboutSection />
                            <FeaturedProjects />
                            <ContactSection />
                        </Route>
                        
                    </Switch>   
                </ScrollToTop>                
            <Footer />
        </div>
    </Router>
  );
}

export default App;
