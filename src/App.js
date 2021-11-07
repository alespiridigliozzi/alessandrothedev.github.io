import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        gsap.to('body', {
            duration: 0,
            css: {
                visibility: "visible"
            }
        })

        const tl = gsap.timeline()

        tl.from(".header__title", {
            delay: 0.5,
            y: 350, 
            duration: 2,
            skewY: 7,
            ease: "power4.out",
            stagger: {
                amount: 0.3
            },
            onStart: () => {
                document.querySelector('.content').classList.add('hidden')
                document.querySelector('.footer-content').classList.add('hidden')
            }
        }).to('.overlay-top', {
            duration: 1.6,
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
                document.querySelector('.content').classList.remove('hidden')
                document.querySelector('.footer-content').classList.remove('hidden')
                document.getElementById('navbar-container').style.zIndex = '15'
            }
        })
    }, [])
      
    return (
    <Router>
        <IntroOverlay />
        <div className="App">
            <NavBar />
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/projects">
                            <Projects />
                        </Route>
                        <Route exact path="/project/:projectID">
                            <ProjectDetails />
                        </Route>
                        <Route exact path="/">
                            <Header />
                            <div className="content">
                                <AboutSection />
                                <FeaturedProjects />
                                <ContactSection />
                            </div>
                        </Route>   
                    </Switch>   
                </ScrollToTop>      
            <div className="footer-content">          
                <Footer />
            </div>
        </div>
    </Router>
    );
}

export default App;
