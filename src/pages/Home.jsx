import React from "react";
import { Helmet } from "react-helmet";

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

import Thumbnail from "../img/thumbnail.webp"

export default function Home() {
    return(
        <div className="bg-sky-100/50">
            <Helmet>
                {/* Primary Meta Tags */}
                <title>Construction Services | Renobuild</title>
                <meta name="title" content="Construction Services | Renobuild" />
                <meta name="description" content="We are passionate about crafting excellence in every aspect of construction. With a relentless commitment to quality, innovation, and customer satisfaction, we redefine spaces and bring your visions to life. " />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://renobuild.vercel.app" />
                <meta property="og:title" content="Construction Services | Renobuild" />
                <meta property="og:description" content="We are passionate about crafting excellence in every aspect of construction. With a relentless commitment to quality, innovation, and customer satisfaction, we redefine spaces and bring your visions to life. " />
                <meta property="og:image" content={ Thumbnail } />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://renobuild.vercel.app" />
                <meta property="twitter:title" content="Construction Services | Renobuild" />
                <meta property="twitter:description" content="We are passionate about crafting excellence in every aspect of construction. With a relentless commitment to quality, innovation, and customer satisfaction, we redefine spaces and bring your visions to life. " />
                <meta property="twitter:image" content={ Thumbnail } />

                {/* Meta Tags Generated with https://metatags.io */}
                <link rel="canonical" href="https://renobuild.vercel.app" />
            </Helmet>

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