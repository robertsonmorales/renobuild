import React from "react";
import { BaseInput, BaseTextArea } from "../BaseFormInput";
import { User, AtSign, PhoneCall } from "react-feather";

const Contact = () => {
    return (
        <section className="grid md:grid-cols-1 lg:grid-cols-2 lg:items-center gap-y-6 lg:gap-x-10 px-6 lg:px-24 py-12 lg:py-20 bg-slate-100 relative" id="contact-us">
            <div className="auto-cols-auto flex flex-col gap-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-left md:w-3/4 lg:w-full">Innovation, Quality, Expertise, and Trustworthiness</h3>
                <p className="text-base lg:text-[18px] text-neutral-600 md:w-3/4 lg:w-full">Ready to embark on your construction journey? Contact Renobuild today to unlock a world of tailored solutions, expert guidance, and exceptional craftsmanship. <br /><br />Our team is dedicated to bringing your vision to life, providing personalized attention to every detail. Let's collaborate and create something extraordinary together. Reach out now and let the transformation begin!</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-3xl">
                <h4 className="text-xl lg:text-2xl text-left lg:text-center font-bold mb-6">Work With Renobuild!</h4>

                <div className="flex flex-col w-full gap-y-6">
                    <BaseInput 
                        name='name'
                        type='text'
                        label='Name'
                        placeholder='John Doe'
                        isRequired={ true }
                    >
                        <User size={20} />
                    </BaseInput>
                    
                    <BaseInput 
                        name='email_address'
                        type='email'
                        label='Email Address'
                        placeholder='example@company.com'
                        isRequired={ true }
                    >
                        <AtSign size={20} />
                    </BaseInput>
                    
                    <BaseInput 
                        name='phone_number'
                        type='text'
                        label='Phone Number'
                        placeholder='+63123654789'
                        isRequired={ true }
                    >
                        <PhoneCall size={20} />
                    </BaseInput>
                    
                    <BaseTextArea 
                        name='message'
                        label='Your Message'
                        placeholder='I am seeking to have my building fixed...'
                        isRequired={ true }
                    />

                    <button className="bg-amber-700 p-4 rounded-2xl shadow-2xl text-white hover:bg-amber-700/75 active:bg-amber-700">Let’s get started!</button>
                </div>
            </div>
            
            <div className="w-56 h-56 lg:w-80 lg:h-80 rounded-full bg-orange-500/50 blur-xxl absolute z-0 pointer-events-none"></div>
        </section>
    );
}

export default Contact;