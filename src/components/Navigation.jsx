import React from "react";
import { Phone } from 'react-feather';

export default function Navigation() {
    return (
        <nav>
            <h4>Renobuild<span className="text-accent">.</span></h4>
            <ul className="nav-list">
                <li className="nav-list-item">Home</li>
                <li className="nav-list-item">Services</li>
                <li className="nav-list-item">Projects</li>
                <li className="nav-list-item">About Us</li>
                <li className="nav-list-item">FAQs</li>
                <li className="nav-list-item">Contact Us</li>
            </ul>
            <div className="call-now">
                <a href="tel:+639123456789">
                    <Phone />
                    <span>+63 9123456789</span>
                </a>
            </div>
        </nav>
    );
}