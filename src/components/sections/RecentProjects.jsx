import React from "react";
import Subheadline from "../Subheadline";
import { ExternalLink } from "react-feather";
import { RenobuildRecentProjects } from "../../data/data";

const Project = ({ service_type, description, image }) => {
    const styling = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="flex flex-col border border-neutral-300 rounded-3xl p-2 z-10 h-96 relative transition-all duration-300 ease-in-out hover:opacity-9 hover:shadow-2xl"
            dir="ltr"
            style={styling}>

            <div className="flex items-center justify-end">
                <button type="button"
                    title={ service_type }
                    className="bg-white rounded-full w-11 h-11 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-amber-700 hover:text-white hover:shadow-2xl">
                    <ExternalLink size={20} />
                    <span className="hidden">View Project</span>
                </button>
            </div>

            <div className="flex flex-col gap-y-1 bg-white rounded-2xl p-4 absolute bottom-2 left-2 right-2">
                <span className="text-amber-700 text-sm">{ service_type }</span>
                <p className="text-base lg:text-[18px] text-neutral-600">{ description }</p>
            </div>

        </div>
    );
}

const RecentProjects = () => {
    return(
        <section className="bg-white px-6 lg:px-24 py-12 lg:py-20" id="projects">
            <div className="flex flex-col gap-y-10 lg:gap-y-16">
                <Subheadline
                    subheadline="Our Recent Projects"
                    description="At Renobuild, we take pride in turning dreams into reality through our exceptional project execution. With meticulous planning, expert craftsmanship, and unwavering attention to detail, we bring your vision to life, creating spaces that inspire and delight. From concept to completion, our dedicated team works tirelessly to ensure every aspect of your project is handled with precision and care. Trust Renobuild to make your dream project a stunning reality that exceeds your expectations."
                />

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                    { RenobuildRecentProjects.map((project, index) =>
                        <Project 
                            key={ index }
                            service_type={ project.service_type }
                            description={ project.description }
                            image={ project.image }
                        />
                    )}
                </div>

                <div className="text-center">
                    <a href="/view-more" className="text-amber-700 font-medium font-base hover:underline">View More</a>
                </div>

                <div className="w-56 h-56 lg:w-80 lg:h-80 rounded-full bg-orange-500/50 blur-xxl absolute z-0 pointer-events-none"></div>
                
            </div>
        </section>
    )
}

export default RecentProjects;