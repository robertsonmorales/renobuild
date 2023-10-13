import React from "react";
import Subheadline from "./Subheadline";
import { RenobuildServices } from "../data/data";

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col justify-between gap-y-6 bg-slate-100 shadow-3xl border border-neutral-300 rounded-3xl p-6 z-10 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-2xl hover:scale-y-105">
            <img src={ icon } alt={ title } width={40} height={40} />

            <h5 className="font-bold text-2xl">{ title }</h5>

            <p className="text-[18px] text-neutral-600">{ description }</p>

            <a href="/read-more" 
                rel="noreferrer noopener" 
                className="text-neutral-600 text-[18px] hover:text-amber-700 active:text-neutral-600">Read More →</a>
            
        </div>
    );
}

const Services = () => {
    return(
        <div className="bg-sky-100/50 md:px-6 lg:px-24 md:py-12 lg:py-20" id="services">

            <div className="flex flex-col md:gap-y-12 lg:gap-y-16">

                <Subheadline 
                    subheadline="Our Services"
                    description="Whether it's renovating, repairing, or constructing, we go above and beyond to exceed your expectations, ensuring that every project is executed with excellence. Experience the difference of our exceptional construction services and elevate your spaces to new heights with Renobuild."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">

                    { RenobuildServices.map(({icon, title, description}, index) => {
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