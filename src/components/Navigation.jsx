import React, { useEffect, useState, useRef } from "react";
import { Phone, Menu } from 'react-feather';

export default function Navigation() {
    const [background, setBackground] = useState();
    const scrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            scrollY.current = window.scrollY;

            if (scrollY.current <= 0) {
                setBackground('bg-transparent');
            } else {
                setBackground('bg-white shadow-sm');
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => { window.removeEventListener("scroll", handleScroll); }
    }, [scrollY, background]);

    return (
        <header className="sticky top-0 w-full z-50 transition-all duration-300 ease-in-out" id="home">

            <nav className={`flex justify-between items-center ${ background } h-16 lg:h-24 px-6 lg:px-24`}>
                <div className="grow-0">
                    <a href="/" className="text-xl md:text-2xl font-bold">
                        Renobuild
                        <span className="text-amber-700">.</span>
                    </a>
                </div>

                <div className="grow-0 lg:grow">
                    <ul className="hidden lg:flex justify-center items-center gap-x-7">
                        <li className="text-[18px] text-amber-700 font-medium hover:text-amber-700/75 active:text-amber-700 hover:scale-105">
                            <a href="/">Home</a>
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

                    <div className="lg:hidden">
                        <Menu />
                    </div>
                </div>

                <div className="grow-0 hidden lg:inline">
                    <a href="tel:+639123456789" className="text-[18px] flex items-center text-amber-600">
                        <Phone />
                        <span className="ml-1">+63 9123456789</span>
                    </a>
                </div>
            </nav>

        </header>
    );
}