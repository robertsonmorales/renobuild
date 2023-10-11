import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import RecentProjects from "../components/RecentProjects";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import FAQs from "../components/FAQs";
import Contact from "../components/Contact";

export default function Home() {
    return(
        <>
            <div className="bg-sky-100/50 px-24 py-9">
                <Navigation />
                <Hero />
            </div>
            
            <Services />
            <RecentProjects />
            <AboutUs />
            <Testimonials />
            <FAQs />
            <Contact />
        </>
    )
}