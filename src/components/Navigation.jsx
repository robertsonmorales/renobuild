import React from "react";
import { Phone } from 'react-feather';

export default function Navigation() {
    return (
        <nav className="sticky flex justify-between items-center">

            <div className="grow-0">
                <h4 className="text-2xl font-bold">
                    Renobuild
                    <span className="text-amber-700">.</span>
                </h4>
            </div>

            <div className="grow">
                <ul className="flex justify-center items-center gap-x-7" role="list">
                    <li className="text-[18px] text-amber-700 font-medium hover:text-amber-700/75 active:text-amber-700 hover:scale-105">
                        <a href="#">Home</a>
                    </li>
                    <li className="text-[18px] text-slate-600 transition-all duration-300 ease-in-out hover:scale-105 active:text-amber-700">
                        <a href="#services">Services</a>
                    </li>
                    <li className="text-[18px] text-slate-600 transition-all duration-300 ease-in-out hover:scale-105 active:text-amber-700">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="text-[18px] text-slate-600 transition-all duration-300 ease-in-out hover:scale-105 active:text-amber-700">
                        <a href="#about-us">About Us</a>
                    </li>
                    <li className="text-[18px] text-slate-600 transition-all duration-300 ease-in-out hover:scale-105 active:text-amber-700">
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li className="text-[18px] text-slate-600 transition-all duration-300 ease-in-out hover:scale-105 active:text-amber-700">
                        <a href="#faqs">FAQs</a>
                    </li>
                    <li className="text-[18px] text-slate-600 transition-all duration-300 ease-in-out hover:scale-105 active:text-amber-700">
                        <a href="#contact-us">Contact Us</a>
                    </li>
                </ul>
            </div>

            <div className="grow-0">
                <a href="tel:+639123456789" className="text-[18px] flex items-center text-orange-500">
                    <Phone />
                    <span className="ml-1">+63 9123456789</span>
                </a>
            </div>

        </nav>
    );
}