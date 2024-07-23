import React from "react";
import HeroImage from "../../img/hero.webp";
import HeroPattern from "../../img/bg-pattern.webp";

const Hero = () => {
    const heroStyling = {
        backgroundImage: `url(${ HeroPattern })`
    }
    return(
        <section className="bg-sky-100/50 flex justify-center items-center flex-col gap-8 py-6 px-6 lg:px-24 lg:pb-20"
            style={ heroStyling }>
            <div className="text-left lg:text-center mt-5">
                <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Unleash the Full Potential of Your Space with our Expertise!</h1>
                <p className="text-base lg:text-[18px] text-slate-600">Transform Your Space Where Quality Construction Meets Creative Renovation</p>
            </div>

            <div className="w-full flex flex-col md:flex-row lg:justify-center gap-2 md:gap-4">
                <a href="#contact-us" 
                    className="text-base lg:text-[18px] font-medium px-6 py-3 flex justify-center items-center rounded-2xl shadow-2xl bg-amber-700 text-white duration-200 active:shadow-1xl hover:bg-amber-600 active:bg-amber-700">Get a Quote</a>
                <a href="#projects" 
                    className="text-base lg:text-[18px] font-medium pl-10 pr-6 lg:px-6 py-3 flex justify-center rounded-2xl shadow-2xl duration-200 border-2 border-solid border-slate-700 hover:bg-sky-950/75 hover:text-white active:bg-sky-950 active:text-white">Our Projects →</a>
            </div>

            <div className="flex items-center justify-center w-full z-10">
                <button type="button" 
                    id="btn-watch-video"
                    title="Watch Video"
                    className="bg-white shadow-2xl rounded-full absolute p-4 hover:opacity-8">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.50002V5.94002C0 1.52002 3.13 -0.289983 6.96 1.92002L10.05 3.70002L13.14 5.48002C16.97 7.69002 16.97 11.31 13.14 13.52L10.05 15.3L6.96 17.08C3.13 19.29 0 17.48 0 13.06V9.50002Z" fill="#1A2C3A"/>
                    </svg>
                </button>
                <img src={ HeroImage }
                    className="object-cover w-full lg:h-96 rounded-3xl shadow-3xl" 
                    alt="Hero Banner"
                    width="auto"
                    height={384} />
            </div>

            <div className="w-56 h-56 lg:w-80 lg:h-80 rounded-full bg-orange-500/75 blur-xxl absolute z-0 pointer-events-none"></div>
        </section>
    )
}

export default Hero;