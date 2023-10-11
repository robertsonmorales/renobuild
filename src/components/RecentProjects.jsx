import React from "react";
import Subheadline from "./Subheadline";
import { ExternalLink } from "react-feather";

import Project1 from "../img/projects/project-1.webp"
import Project2 from "../img/projects/project-2.webp"
import Project3 from "../img/projects/project-3.webp"

const data = [
    {
        service_type: "Kitchen and Bathroom Upgrades",
        description: "Upgrading the kitchen and bathroom spaces can significantly enhance the functionality, aesthetics, and overall value of a home.",
        image: Project1
    },
    {
        service_type: "Renovation and Remodeling",
        description: "Swimming pool renovation and remodel project with the homeowner.",
        image: Project2
    },
    {
        service_type: "Interior Design",
        description: "Creating beautiful and functional spaces that reflect the client's style and preferences.",
        image: Project3
    }
];

const Project = ({ service_type, description, image }) => {
    const styling = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="flex flex-col border border-neutral-300 rounded-3xl p-2 z-10 h-96 relative"
            dir="ltr"
            style={styling}>

            <div className="flex items-center justify-end">
                <div className="bg-slate-100 rounded-full w-11 h-11 flex items-center justify-center">
                    <ExternalLink size={20} />
                </div>
            </div>

            <div className="flex flex-col gap-y-1 bg-slate-100 shadow-2xl rounded-b-2xl rounded-t-3xl p-4 absolute bottom-2 left-2 right-2">
                <span className="text-orange-500 text-sm">{ service_type }</span>
                <p className="text-xl text-neutral-600">{ description }</p>
            </div>

        </div>
    );
}

const RecentProjects = () => {
    const renderProjects = data.map((project, index) => {
        return <Project 
            key={ index }
            service_type={ project.service_type }
            description={ project.description }
            image={ project.image }
        />
    });

    return(
        <div className="bg-white px-24 py-20">
            <div className="flex flex-col gap-y-16 ">
                <Subheadline
                    subheadline="Our Recent Projects"
                    description="At Renobuild, we take pride in turning dreams into reality through our exceptional project execution. With meticulous planning, expert craftsmanship, and unwavering attention to detail, we bring your vision to life, creating spaces that inspire and delight. From concept to completion, our dedicated team works tirelessly to ensure every aspect of your project is handled with precision and care. Trust Renobuild to make your dream project a stunning reality that exceeds your expectations."
                />

                <div className="grid grid-cols-3 gap-6">
                    { renderProjects }
                </div>
            </div>
        </div>
    )
}

export default RecentProjects;