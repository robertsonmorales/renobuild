import React from "react";

const NavList = ({ behavior, children }) => {
    return (
        <ul className={ behavior }>
            <li className="text-base lg:text-[18px] text-neutral-700 py-2 md:py-auto font-bold hover:text-amber-700/75 active:text-neutral-700">
                <a href="/">Home</a>
            </li>
            <li className="text-base lg:text-[18px] text-slate-600 py-2 md:py-auto transition-all duration-300 ease-in-out hover:text-amber-700 active:text-neutral-700">
                <a href="#services">Services</a>
            </li>
            <li className="text-base lg:text-[18px] text-slate-600 py-2 md:py-auto transition-all duration-300 ease-in-out hover:text-amber-700 active:text-neutral-700">
                <a href="#projects">Projects</a>
            </li>
            <li className="text-base lg:text-[18px] text-slate-600 py-2 md:py-auto transition-all duration-300 ease-in-out hover:text-amber-700 active:text-neutral-700">
                <a href="#about-us">About Us</a>
            </li>
            <li className="text-base lg:text-[18px] text-slate-600 py-2 md:py-auto transition-all duration-300 ease-in-out hover:text-amber-700 active:text-neutral-700">
                <a href="#testimonials">Testimonials</a>
            </li>
            <li className="text-base lg:text-[18px] text-slate-600 py-2 md:py-auto transition-all duration-300 ease-in-out hover:text-amber-700 active:text-neutral-700">
                <a href="#faqs">FAQs</a>
            </li>
            <li className="text-base lg:text-[18px] text-slate-600 py-2 md:py-auto transition-all duration-300 ease-in-out hover:text-amber-700 active:text-neutral-700">
                <a href="#contact-us">Contact Us</a>
            </li>
            <li className="text-base lg:text-[18px] text-slate-600 py-2 md:py-auto transition-all duration-300 ease-in-out hover:text-amber-700 active:text-neutral-700">
                { children }
            </li>
        </ul>
    )
}

export default NavList;