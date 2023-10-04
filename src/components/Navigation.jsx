import React from "react";
import { Phone } from 'react-feather';

export default function Navigation() {
    return (
        <nav className="sticky flex justify-between items-center">

            <div className="grow-0">
                <h4 className="text-2xl font-bold">
                    Renobuild
                    <span className="text-orange-500">.</span>
                </h4>
            </div>

            <div className="grow">
                <ul className="flex justify-center items-center gap-x-10" role="list">
                    <li className="text-[18px] text-orange-500 font-medium">
                        <a href="#">Home</a>
                    </li>
                    <li className="text-[18px] text-slate-600">
                        <a href="#">Services</a>
                    </li>
                    <li className="text-[18px] text-slate-600">
                        <a href="#">Projects</a>
                    </li>
                    <li className="text-[18px] text-slate-600">
                        <a href="#">About Us</a>
                    </li>
                    <li className="text-[18px] text-slate-600">
                        <a href="#">FAQs</a>
                    </li>
                    <li className="text-[18px] text-slate-600">
                        <a href="#">Contact Us</a>
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