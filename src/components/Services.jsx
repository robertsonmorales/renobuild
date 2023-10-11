import React from "react";
import Subheadline from "./Subheadline";

import RenovationAndRemodeling from "../img/services/renovation-and-remodel.svg";
import InteriorDesign from "../img/services/interior-design.svg";
import FlooringInstallation from "../img/services/flooring-installation.svg";
import KitchenAndBathroomUpgrades from "../img/services/kitchen&bathroom.svg";
import PaintingAndWallpapering from "../img/services/painting-and-wallpapering.svg";
import LightningAndElectricalServices from "../img/services/lighting-and-electrical-services.svg";

const data = [
    {
        icon: RenovationAndRemodeling,
        title: "Renovation and Remodeling",
        description: "Transform the interiors of your apartment with Renobuild's expert renovation and remodeling services. Enhance the aesthetics, functionality, and overall appeal of your living space to meet your unique style and preferences."
    },
    {
        icon: InteriorDesign,
        title: "Interior Design",
        description: "Collaborate with Renobuild's skilled interior designers to create a personalized and inviting ambiance in your apartment. From color schemes and furniture selection to lighting and decor, achieve a cohesive and visually stunning interior design."
    },
    {
        icon: FlooringInstallation,
        title: "Flooring Installation",
        description: "Upgrade the flooring in your apartment with Renobuild's professional flooring installation services. Choose from a variety of high-quality materials such as hardwood, laminate, tile, or carpet, and achieve a beautiful and durable flooring solution."
    },
    {
        icon: KitchenAndBathroomUpgrades,
        title: "Kitchen and Bathroom Upgrades",
        description: "Renobuild specializes in kitchen and bathroom renovations, delivering functional and stylish spaces. From custom cabinetry and countertops to modern fixtures and appliances, revitalize these essential areas of your apartment."
    },
    {
        icon: PaintingAndWallpapering,
        title: "Painting and Wallpapering",
        description: "Give your apartment a fresh look with Renobuild's painting and wallpapering services. Choose from a wide range of colors, finishes, and patterns to add personality and elegance to your living space."
    },
    {
        icon: LightningAndElectricalServices,
        title: "Lighting and Electrical Services",
        description: "Illuminate your apartment with Renobuild's lighting and electrical solutions. Upgrade to energy-efficient LED lighting, install smart home systems, or enhance safety with electrical repairs and installations."
    }
];

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col justify-between gap-y-6 bg-slate-100 shadow-3xl border border-neutral-300 rounded-3xl p-6 z-10 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-2xl">
            <img src={ icon } alt={ title } width={40} height={40} />

            <h5 className="font-bold text-2xl">{ title }</h5>

            <p className="text-[18px] text-neutral-600">{ description }</p>

            <a href="/read-more" 
                rel="noreferrer noopener" 
                className="text-neutral-600 text-[18px] hover:text-amber-700 active:text-neutral-600">Read More →</a>
            
        </div>
    );
}

function Services() {
    return(
        <div className="bg-sky-100/50 px-24 py-20">

            <div className="flex flex-col gap-y-16">

                <Subheadline 
                    subheadline="Our Services"
                    description="Whether it's renovating, repairing, or constructing, we go above and beyond to exceed your expectations, ensuring that every project is executed with excellence. Experience the difference of our exceptional construction services and elevate your spaces to new heights with Renobuild."
                />

                <div className="grid grid-cols-3 gap-6 relative">

                    { data.map(({icon, title, description}, index) => {
                        return <ServiceCard 
                            key={ index }
                            icon={ icon }
                            title={ title }
                            description={ description }
                        />
                    })}
                    
                    <div className="w-80 h-80 rounded-full bg-red-500/75 blur-xxl absolute translate-x-1/2 translate-y-1/2 z-0"></div>
                </div>
            </div>

        </div>
    );
}

export default Services;