import React from "react";
import { Play } from 'react-feather';
import HeroImage from "../img/hero.jpg";

const Hero = () => {
    return(
        <div className="flex justify-center items-center flex-col gap-8 my-20">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">Unleash the Full Potential of Your Space with our Expertise!</h1>
                <p className="text-[18px] text-slate-600">Transform Your Space Where Quality Construction Meets Creative Renovation</p>
            </div>

            <div className="flex gap-4">
                <button className="text-[18px] px-6 py-3 rounded-2xl shadow-2xl active:shadow-1xl bg-amber-700 text-white duration-200 hover:bg-amber-600 active:bg-amber-700">Our Services</button>
                <button className="text-[18px] px-6 py-3 rounded-2xl shadow-2xl duration-200 border-2 border-solid border-slate-700 hover:bg-slate-200 active:bg-slate-300">See Projects →</button>
            </div>

            <div className="flex items-center justify-center w-full">
                <button type="button" className="bg-slate-200 shadow-2xl rounded-full absolute p-4">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.50002V5.94002C0 1.52002 3.13 -0.289983 6.96 1.92002L10.05 3.70002L13.14 5.48002C16.97 7.69002 16.97 11.31 13.14 13.52L10.05 15.3L6.96 17.08C3.13 19.29 0 17.48 0 13.06V9.50002Z" fill="#1A2C3A"/>
                    </svg>
                </button>
                <img src={ HeroImage }
                    className="object-cover w-full h-96 rounded-3xl shadow-2xl" 
                    alt="Hero Banner" />
            </div>
        </div>
    )
}

export default Hero;