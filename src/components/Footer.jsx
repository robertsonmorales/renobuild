import React from "react";
import { Instagram,
    Facebook,
    Youtube,
    Twitter,
    Linkedin,
    MessageCircle,
    MapPin,
    PhoneCall
} from "react-feather";

const Footer = () => {
    return (
        <div className="bg-sky-950 md:px-12 lg:px-24 md:py-12 lg:py-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-y-6 lg:gap-x-6">
                
                <div className="flex flex-col gap-y-6">
                    <h3 className="text-3xl font-bold text-neutral-100">Renobuild<span className="text-amber-600">.</span></h3>
                    
                    <p className="text-neutral-300/75 text-[18px]">Renobuild is a leading construction services company dedicated to transforming spaces and creating exceptional environments.</p>

                    <ul className="flex place-items-center gap-x-4">
                        <li className="text-neutral-300/75 transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="">
                                <Instagram size={ 24 } />
                            </a>
                        </li>
                        <li className="text-neutral-300/75 transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="">
                                <Facebook size={ 24 } />
                            </a>
                        </li>
                        <li className="text-neutral-300/75 transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="">
                                <Youtube size={ 24 } />
                            </a>
                        </li>
                        <li className="text-neutral-300/75 transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="">
                                <Twitter size={ 24 } />
                            </a>
                        </li>
                        <li className="text-neutral-300/75 transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="">
                                <Linkedin size={ 24 } />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-y-6">
                    <h4 className="text-neutral-100 text-2xl font-bold">Services</h4>

                    <ul className="flex flex-col place-items-start gap-y-4">
                        <li className="text-neutral-300/75 leading-6 text-[18px] transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="/read-more">Renovation and Remodeling</a>
                        </li>
                        <li className="text-neutral-300/75 leading-6 text-[18px] transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="/read-more">Interior Design</a>
                        </li>
                        <li className="text-neutral-300/75 leading-6 text-[18px] transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="/read-more">Flooring Installation</a>
                        </li>
                        <li className="text-neutral-300/75 leading-6 text-[18px] transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="/read-more">Kitchen and Bathroom Upgrades</a>
                        </li>
                        <li className="text-neutral-300/75 leading-6 text-[18px] transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="/read-more">Painting and Wallpapering</a>
                        </li>
                        <li className="text-neutral-300/75 leading-6 text-[18px] transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="/read-more">Lighting and Electrical Services</a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-y-6">
                    <h4 className="text-neutral-100 text-2xl font-bold">Quick Links</h4>

                    <ul className="flex flex-col place-items-start gap-y-4">
                        <li className="text-neutral-300/75 leading-6 text-[18px] transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="#services">Services</a>
                        </li>
                        <li className="text-neutral-300/75 leading-6 text-[18px] transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="text-neutral-300/75 leading-6 text-[18px] transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="#about-us">About Us</a>
                        </li>
                        <li className="text-neutral-300/75 leading-6 text-[18px] transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li className="text-neutral-300/75 leading-6 text-[18px] transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="#faqs">FAQs</a>
                        </li>
                        <li className="text-neutral-300/75 leading-6 text-[18px] transition-all duration-300 ease-out hover:text-neutral-100">
                            <a href="#contact-us">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-y-6">
                    <h4 className="text-neutral-100 text-2xl font-bold">Contacts</h4>

                    <ul className="flex flex-col place-items-start gap-y-4">
                        <li className="text-neutral-300/75 leading-6 text-[18px]">
                            <div className="flex items-start gap-x-4">
                                <MessageCircle size={ 24 } />

                                <ul className="flex flex-col">
                                    <li className="text-neutral-300/75">Email us</li>
                                    <li className="text-neutral-300/75">Our friendly team is here to help.</li>
                                    <li className="text-neutral-300/75">sayhello@renobuild.com</li>
                                </ul>
                            </div>
                        </li>
                        <li className="text-neutral-300/75 leading-6 text-[18px]">
                            <div className="flex items-start gap-x-4">
                                <MapPin size={ 24 } />

                                <ul className="flex flex-col">
                                    <li className="text-neutral-300/75">Visit us</li>
                                    <li className="text-neutral-300/75">Say hello at our Office HQ.</li>
                                    <li className="text-neutral-300/75">123 Oak Street, Willowville, USA</li>
                                </ul>
                            </div>
                        </li>
                        <li className="text-neutral-300/75 leading-6 text-[18px]">
                            <div className="flex items-start gap-x-4">
                                <PhoneCall size={ 24 } />

                                <ul className="flex flex-col">
                                    <li className="text-neutral-300/75">Email us</li>
                                    <li className="text-neutral-300/75">We’re available from Mon-Fri, 9am to 6pm.</li>
                                    <li className="text-neutral-300/75">123 Oak Street, Willowville, USA</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border border-neutral-400 w-full my-14"></div>

            <div className="text-center">
                <p className="text-[18px] text-neutral-300/75">© 2023 Renobuild. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;