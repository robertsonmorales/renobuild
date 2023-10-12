import React from "react";
import { BaseInput, BaseTextArea } from "./BaseFormInput";
import { User, AtSign, PhoneCall } from "react-feather";

const Contact = () => {
    return (
        <div className="grid grid-cols-2 items-center gap-x-10 bg-slate-100 px-24 py-20 relative" id="contact-us">
            <div className="auto-cols-auto flex flex-col items-start gap-8">
                <div className="flex flex-col gap-y-4">
                    <h3 className="text-4xl font-bold">Innovation, Quality, <br /> Expertise, and <br />Trustworthiness</h3>
                    <p className="text-[18px] text-neutral-600">Ready to embark on your construction journey? Contact Renobuild today to unlock a world of tailored solutions, expert guidance, and exceptional craftsmanship. <br /><br />Our team is dedicated to bringing your vision to life, providing personalized attention to every detail. Let's collaborate and create something extraordinary together. Reach out now and let the transformation begin!</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-3xl">
                <h4 className="text-2xl text-center font-bold mb-6">Work With Renobuild!</h4>

                <div className="flex flex-col w-full gap-y-6">
                    <BaseInput 
                        name='name'
                        type='text'
                        label='Name'
                        placeholder='Robertson Morales'
                        isRequired={ true }
                    >
                        <User size={20} />
                    </BaseInput>
                    
                    <BaseInput 
                        name='email_address'
                        type='email'
                        label='Email Address'
                        placeholder='robertson.morales@renobuild.com'
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
                        name='phone_number'
                        label='Phone Number'
                        placeholder='I am seeking to have my building fixed...'
                        isRequired={ true }
                    />

                    <button className="bg-amber-600 p-4 rounded-2xl shadow-2xl text-white hover:bg-amber-600/75 active:bg-amber-600">Let’s get started!</button>
                </div>
            </div>

            <div className="w-80 h-80 rounded-full bg-red-500/50 blur-xxl absolute translate-x-1/2 translate-y-1/2 z-0"></div>
        </div>
    );
}

export default Contact;