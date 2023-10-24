import React from "react";
import Subheadline from "../Subheadline";
import { RenobuildServices } from "../../data/data";

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col justify-between gap-y-6 bg-slate-100 shadow-3xl border border-neutral-300 rounded-3xl p-6 z-10 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-2xl">
            <img src={ icon } 
                alt={ title } 
                width={ 40 } 
                height={ 40 } />

            <h3 className="font-bold text-2xl">{ title }</h3>

            <p className="text-base lg:text-[18px] text-neutral-600">{ description }</p>

            <a href="/read-more" 
                rel="noreferrer noopener" 
                className="text-base lg:text-[18px] text-neutral-600 hover:text-amber-700 active:text-neutral-600">
                <span className="mr-2">Read More</span>
                <span> →</span>
            </a>
            
        </div>
    );
}

const Services = () => {
    return(
        <section className="bg-sky-100/50 px-6 lg:px-24 py-12 lg:py-20 relative" id="services">

            <div className="flex flex-col gap-y-10 lg:gap-y-16">

                <Subheadline 
                    subheadline="Our Services"
                    description="Whether it's renovating, repairing, or constructing, we go above and beyond to exceed your expectations, ensuring that every project is executed with excellence. Experience the difference of our exceptional construction services and elevate your spaces to new heights with Renobuild."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    { RenobuildServices.map(({ icon, title, description }, index) => 
                        <ServiceCard 
                            key={ index }
                            icon={ icon }
                            title={ title }
                            description={ description }
                        />
                    )}
                </div>
            </div>

            <div className="w-56 h-56 lg:w-80 lg:h-80 rounded-full bg-red-500/50 blur-xxl absolute left-0 top-0 translate-x-1/2 translate-y-1/2 z-0 pointer-events-none"></div>
            
        </section>
    );
}

export default Services;