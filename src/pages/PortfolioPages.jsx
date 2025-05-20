import React, { useEffect } from 'react'
import Home from './Home'
import Service from './Service'
import Project from './Project'
import Skill from './Skill'
import About from './About'
import Contact from './Contact'
import Footer from '../Components/Footer'
import { useAppContext } from '../context/AppContext'
const PortfolioPages = () => {
    const {  setActiveOnglet } = useAppContext();
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveOnglet(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0,
            }
        );

        const sections = document.querySelectorAll('section');

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, [setActiveOnglet]);
    return (
        <>
            <Home />
            <Service />
            <Project />
            <Skill />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default PortfolioPages