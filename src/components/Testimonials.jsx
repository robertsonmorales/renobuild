import React, { useEffect, useState } from "react";
import Subheadline from "./Subheadline";

import ProfilePic1 from "../img/testimonials/profile-pic-1.webp";
import ProfilePic2 from "../img/testimonials/profile-pic-2.webp";
import ProfilePic3 from "../img/testimonials/profile-pic-3.webp";
import ProfilePic4 from "../img/testimonials/profile-pic-4.webp";

const data = [
    {
        comment: "“I want to express my utmost satisfaction with Renobuild Construction. The team at Renobuild Construction completed our project with precision and delivered outstanding results. Their attention to detail and commitment to excellence were impressive. I highly recommend Renobuild Construction for their top-notch service and professionalism.”",
        name: "Jason Thompson",
        company: "@Johnson&Johnson",
        profilePic: ProfilePic1
    },
    {
        comment: "“I am extremely pleased with the exceptional service provided by Renobuild. Renobuild’s professionalism, expertise, and commitment to excellence were commendable. The team at Renobuild executed our construction project flawlessly, delivering high-quality results. Their attention to detail and craftsmanship were outstanding. I highly recommend Renobuild for their excellent service and exceptional workmanship.”",
        name: "Kathryn Murphy",
        company: "@OakraCorp.",
        profilePic: ProfilePic3
    },
    {
        comment: "“I want to express my utmost satisfaction with EliteBuilders Construction and their representative, Jason Thompson. Jason's expertise, communication, and dedication to customer satisfaction were exceptional. The team at EliteBuilders Construction completed our project with precision and delivered outstanding results. Their attention to detail and commitment to excellence were impressive. I highly recommend EliteBuilders Construction and Jason Thompson for their top-notch service and professionalism.”",
        name: "Mark Davis",
        company: "@PizzaHut",
        profilePic: ProfilePic2
    },
    {
        comment: "“I want to express my utmost satisfaction with Renobuild. The team at Renobuild completed our project with precision and delivered outstanding results. Their attention to detail and commitment to excellence were impressive. I highly recommend Renobuild for their top-notch service and professionalism.”",
        name: "Jennifer Roberts",
        company: "@AcmeCo.",
        profilePic: ProfilePic4
    },
];

const TestimonialCard = ({ comment, name, company, profilePic }) => {
    return (
        <div className="flex items-start">
            <div className="flex flex-col gap-y-6 bg-slate-100 shadow-3xl border border-neutral-300 rounded-3xl p-6 z-10">
                <blockquote className="text-sky-950 text-2xl">{ comment }</blockquote>

                <div className="flex items-center gap-4">
                    <img src={ profilePic }
                        alt={ name } 
                        width={ 50 } 
                        height={ 50 } />

                    <div className="flex flex-col items-start">
                        <h5 className="text-2xl font-bold">{ name }</h5>
                        <p className="text-sm text-neutral-600">{ company }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Testimonials = () => {

    const [firstArray, setFirstArray] = useState([data[0], data[1]]);
    const [secondArray, setSecondArray] = useState([data[2], data[3]]);

    return(
        <div className="bg-sky-950 px-24 py-20 flex flex-col gap-y-16">
            <Subheadline 
                theme="dark"
                subheadline="Discover What Our <br> Clients Have to Say"
                description="Dive into the experiences and testimonials shared by our cherished clients, showcasing the exceptional work, dedication, and satisfaction they have found in our services"
            />

            <div className="grid grid-cols-2 gap-10">
                <div className="auto-cols-auto">
                    <div className="flex flex-col gap-10">
                        { firstArray.map(({ name, comment, profilePic, company }, index) => {
                            return <TestimonialCard 
                                key={ index }
                                name={ name }
                                comment={ comment }
                                company={ company }
                                profilePic={ profilePic }
                            />
                        })}
                    </div>
                </div>
                <div className="auto-cols-auto">
                    <div className="flex flex-col gap-10">
                        { secondArray.map(({ name, comment, profilePic, company }, index) => (
                            <TestimonialCard 
                                key={ index }
                                name={ name }
                                comment={ comment }
                                company={ company }
                                profilePic={ profilePic }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
