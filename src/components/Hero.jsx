import React from "react";
import HeroImage from "../img/hero.jpg";

const Hero = () => {
    return(
        <section className="flex justify-center items-center flex-col gap-8 my-12 lg:my-20" id="home">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Unleash the Full Potential of Your Space with our Expertise!</h1>
                <p className="text-base lg:text-[18px] text-slate-600">Transform Your Space Where Quality Construction Meets Creative Renovation</p>
            </div>

            <div className="w-full flex flex-col md:flex-row md:justify-center gap-4">
                <button className="md:text-base lg:text-[18px] px-6 py-3 rounded-2xl shadow-2xl active:shadow-1xl bg-amber-700 text-white duration-200 hover:bg-amber-600 active:bg-amber-700">Our Services</button>
                <button className="md:text-base lg:text-[18px] px-6 py-3 rounded-2xl shadow-2xl duration-200 border-2 border-solid border-slate-700 hover:bg-sky-950/75 hover:text-white active:bg-sky-950 active:text-white">See Projects →</button>
            </div>

            <div className="flex items-center justify-center w-full">
                <button type="button" className="bg-slate-200 shadow-2xl rounded-full absolute p-4">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.50002V5.94002C0 1.52002 3.13 -0.289983 6.96 1.92002L10.05 3.70002L13.14 5.48002C16.97 7.69002 16.97 11.31 13.14 13.52L10.05 15.3L6.96 17.08C3.13 19.29 0 17.48 0 13.06V9.50002Z" fill="#1A2C3A"/>
                    </svg>
                </button>
                <img src={ HeroImage }
                    className="object-cover w-full lg:h-96 rounded-3xl shadow-2xl" 
                    alt="Hero Banner" />
            </div>

            <div className="w-56 h-56 lg:w-80 lg:h-80 rounded-full bg-orange-500/75 blur-xxl absolute z-0 pointer-events-none"></div>
        </section>
    )
}

export default Hero;