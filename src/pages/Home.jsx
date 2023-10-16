import React from "react";
import Main from "../components/Main";
import Navigation from "../components/Navigation";

import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import RecentProjects from "../components/sections/RecentProjects";
import AboutUs from "../components/sections/AboutUs";
import Testimonials from "../components/sections/Testimonials";
import FAQs from "../components/sections/FAQs";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
    return(
        <div className="container bg-sky-100/50">
            <Navigation />
            
            <Main>
                <Hero />
                <Services />
                <RecentProjects />
                <AboutUs />
                <Testimonials />
                <FAQs />
                <Contact />
            </Main>

            <Footer />
        </div>
    )
}