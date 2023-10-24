import React, { useState } from "react";
import Subheadline from "../Subheadline";
import { RenobuildTestimonials } from "../../data/data";

const TestimonialCard = ({ comment, name, company, profilePic }) => {
    return (
        <div className="flex items-start">
            <div className="flex flex-col gap-y-6 bg-slate-100 shadow-3xl border border-neutral-300 rounded-3xl p-6 z-10 transition-all duration-300 ease-linear hover:bg-white hover:shadow-2xl">
                <blockquote className="text-[18px]] lg:text-2xl text-sky-950">{ comment }</blockquote>

                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <img src={ profilePic }
                        alt={ name } 
                        width={ 50 } 
                        height={ 50 }
                        className="shadow-3xl rounded-full hover:opacity-90"
                    />

                    <div className="flex flex-col items-start">
                        <h3 className="text-xl lg:text-2xl font-bold">{ name }</h3>
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
        <section className="bg-sky-950 px-6 lg:px-24 py-12 lg:py-20 flex flex-col gap-y-10 lg:gap-y-16" id="testimonials">
            <Subheadline 
                theme="dark"
                subheadline="Discover What Our Clients Have to Say"
                description="Dive into the experiences and testimonials shared by our cherished clients, showcasing the exceptional work, dedication, and satisfaction they have found in our services"
            />            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                <div className="auto-cols-auto">
                    <div className="flex flex-col gap-6 lg:gap-10">
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
                    <div className="flex flex-col gap-6 lg:gap-10">
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
        </section>
    );
}

export default Testimonials;
