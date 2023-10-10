import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import RecentProjects from "../components/RecentProjects";

export default function Home() {
    return(
        <>
            <div className="bg-sky-100/50 px-24 py-9">
                <Navigation />
                <Hero />
            </div>
            
            <Services />
            <RecentProjects />
        </>
    )
}