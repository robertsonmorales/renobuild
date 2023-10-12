import React, { useState } from "react";
import Subheadline from "./Subheadline";
import { RenobuildTestimonials } from "../data/data";

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

    const [firstArray, setFirstArray] = useState([RenobuildTestimonials[0], RenobuildTestimonials[1]]);
    const [secondArray, setSecondArray] = useState([RenobuildTestimonials[2], RenobuildTestimonials[3]]);

    return(
        <div className="bg-sky-950 px-24 py-20 flex flex-col gap-y-16" id="testimonials">
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
