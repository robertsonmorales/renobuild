import React, { useEffect, useState, useRef } from "react";
import { Phone, Menu, X } from 'react-feather';
import NavList from "./NavList";

export default function Navigation() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [background, setBackground] = useState('bg-transparent');
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

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <header className="sticky top-0 w-full z-50 transition-all duration-300 ease-in-out" id="home">

            <nav className={`flex flex-col lg:flex-row justify-between items-between lg:items-center ${ (showSidebar) ? 'bg-white' : background } py-4 lg:py-0 lg:h-24 px-6 lg:px-24`}>  {/* h-16 */}
                <div className="grow flex items-center justify-between lg:grow-0">
                    <a href="/" className="text-xl md:text-2xl font-bold">
                        Renobuild
                        <span className="text-amber-700">.</span>
                    </a>

                    <button type="button" 
                        className="lg:hidden active:text-amber-800"
                        onClick={ toggleSidebar }>
                            {showSidebar ? <X /> : <Menu />}
                    </button>
                </div>

                <div className="grow-0 lg:grow">
                    <NavList
                        behavior="hidden lg:flex justify-center items-center gap-x-7"
                    />                    
                </div>                

                <div className="grow-0 hidden lg:inline">
                    <a href="tel:+639123456789" className="text-[18px] flex items-center text-amber-700">
                        <Phone />
                        <span className="ml-1">+63 9123456789</span>
                    </a>
                </div>

                <div className="grow lg:grow-0 lg:inline">
                    <NavList behavior={`${showSidebar ? '' : 'hidden ' }lg:hidden justify-start lg:justify-center items-center gap-x-7 bg-white absolute left-0 w-full px-6 py-4 border-b transition-all duration-300 ease-in-out`}>
                        <div className="border my-2"></div>
                        <a href="tel:+639123456789" className="text-base lg:text-[18px] flex items-center text-amber-700 py-2 lg:pt-auto">+63 9123456789</a>
                    </NavList>
                </div>
            </nav>

        </header>
    );
}