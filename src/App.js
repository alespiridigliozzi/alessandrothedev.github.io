import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import { gsap } from "gsap";
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import Projects from "./pages/Projects/Projects";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import IntroOverlay from './components/IntroOverlay/IntroOverlay';

function App() {

    useEffect(() => {
        const tl = gsap.timeline()

        tl.from(".header__title", {
            delay: 0.5,
            y: '110vh', 
            duration: 1.2,
            skewY: 7,
            ease: "power4.out",
            stagger: {
                amount: 0.3
            }
        }).to('.overlay-top', {
            duration: 1,
            height: 0,
            ease: 'expo.inOut',
            stagger: {
                amount: 0.4
            }
        }).to('.intro-overlay', {
            duration: 0,
            css: {
                display: 'none'
            },
            onComplete: () => {
                document.getElementById('navbar-container').style.zIndex = '15'
            }
        })
    }, [])
      
    return (
    <HashRouter>
        <IntroOverlay />
        <div className="App">
            <NavBar />
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/project/:projectID">
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
            <div className="footer-content">          
                <Footer />
            </div>
        </div>
    </HashRouter>
    );
}

export default App;
