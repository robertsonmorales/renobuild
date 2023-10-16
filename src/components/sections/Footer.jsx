import React, { useState, useEffect } from "react";
import { Instagram,
    Facebook,
    Youtube,
    Twitter,
    Linkedin,
    MessageCircle,
    MapPin,
    PhoneCall
} from "react-feather";

import List from "../List";

const services = [
    {
        route: '/',
        name: 'Renovation and Remodeling'
    },
    {
        route: '/',
        name: 'Interior Design'
    },
    {
        route: '/',
        name: 'Flooring Installation'
    },
    {
        route: '/',
        name: 'Kitchen and Bathroom Upgrades'
    },
    {
        route: '/',
        name: 'Painting and Wallpapering'
    },
    {
        route: '/',
        name: 'Lighting and Electrical Services'
    }
];

const quickLinks = [
    {
        route: '#services',
        name: 'Services'
    },
    {
        route: '#projects',
        name: 'Projects'
    },
    {
        route: '#about-us',
        name: 'About Us'
    },
    {
        route: '#testimonials',
        name: 'Testimonials'
    },
    {
        route: '#faqs',
        name: 'FAQs'
    },
    {
        route: '#contact-us',
        name: 'Contact Us'
    }
];

const Footer = () => {
    const [service, setServices] = useState([]);
    const [quickLink, setQuickLinks] = useState([]);

    useEffect(() => {
        setServices(services);
        setQuickLinks(quickLinks);
    }, [service, quickLink]);

    return (
        <footer className="bg-sky-950 px-6 md:px-12 lg:px-24 py-12 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-x-6">
                
                <div className="flex flex-col gap-y-6">
                    <h3 className="text-3xl font-bold text-neutral-100">Renobuild<span className="text-amber-600">.</span></h3>
                    
                    <p className="text-neutral-300/75 text-[18px]">We are a leading construction services company dedicated to transforming spaces and creating exceptional environments.</p>

                    <ul className="flex justify-start gap-x-4">
                        <li className="text-neutral-300/75 transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="www.google.com?q=cat" target="_blank">
                                <Instagram size={ 24 } />
                            </a>
                        </li>
                        <li className="text-neutral-300/75 transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="www.google.com?q=cat" target="_blank">
                                <Facebook size={ 24 } />
                            </a>
                        </li>
                        <li className="text-neutral-300/75 transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="www.google.com?q=cat" target="_blank">
                                <Youtube size={ 24 } />
                            </a>
                        </li>
                        <li className="text-neutral-300/75 transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="www.google.com?q=cat" target="_blank">
                                <Twitter size={ 24 } />
                            </a>
                        </li>
                        <li className="text-neutral-300/75 transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="www.google.com?q=cat" target="_blank">
                                <Linkedin size={ 24 } />
                            </a>
                        </li>
                    </ul>
                </div>

                <List title="Services" listItems={ service }></List>
                <List title="Quick Links" listItems={ quickLink }></List>
                <List title="Contacts" isRaw={ true }>
                    <ul className="flex flex-col justify-center gap-y-10">
                        <li className="text-base lg:text-[18px] text-neutral-300/75 leading-6">
                            <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
                                <MessageCircle size={ 24 } />

                                <ul className="flex flex-col">
                                    <li className="text-neutral-300/75 text-left">Email us</li>
                                    <li className="text-neutral-300/75 text-left">Our friendly team is here to help.</li>
                                    <li className="text-neutral-300/75 text-left">sayhello@renobuild.com</li>
                                </ul>
                            </div>
                        </li>
                        <li className="text-base lg:text-[18px] text-neutral-300/75 leading-6">
                            <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
                                <MapPin size={ 24 } />

                                <ul className="flex flex-col">
                                    <li className="text-neutral-300/75 text-left">Visit us</li>
                                    <li className="text-neutral-300/75 text-left">Say hello at our Office HQ.</li>
                                    <li className="text-neutral-300/75 text-left">123 Oak Street, Mandaluyong, Philippines</li>
                                </ul>
                            </div>
                        </li>
                        <li className="text-base lg:text-[18px] text-neutral-300/75 leading-6">
                            <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
                                <PhoneCall size={ 24 } />

                                <ul className="flex flex-col">
                                    <li className="text-neutral-300/75 text-left">Call us</li>
                                    <li className="text-neutral-300/75 text-left">We’re available from Mon-Fri, 9am to 6pm.</li>
                                    <li className="text-neutral-300/75 text-left">+63 9123456789</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </List>
            </div>

            <div className="border border-neutral-400 w-full my-14"></div>

            <div className="text-left md:text-center">
                <p className="text-base lg:text-[18px] text-neutral-300/75">© 2023 Renobuild. All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;