import React from "react";
import AboutImage from '../img/about.webp';

const data = [
    { count: 15, label: "Successful <br> Years" },
    { count: 210, label: "Worldwide <br> Projects" },
    { count: 199, label: "Happy <br> Clients" }
];

const Stats = ({ count, label, isLastItem }) => {
    const markup = { __html: label };
    const lastItem = (isLastItem) ? '' : <div className="border h-11"></div>;

    return (
        <>
            <div className="flex flex-col items-center px-6">
                <h3 className="text-4xl text-amber-700 font-semibold">{ count }</h3>
                <p className="text-center text-neutral-600" dangerouslySetInnerHTML={ markup } />
            </div>

            { lastItem }
        </>
    );
}

const AboutUs = () => {
    const AboutUsStyling = {
        backgroundImage: `url(${AboutImage})`
    };

    const renderStats = data.map((d, index) => {
        return <Stats 
            key={ index }
            count={ d.count }
            label={ d.label }
            isLastItem={(data.length === (index + 1))}
        />;
    });

    return(
        <div className="grid md:grid-cols-1 lg:grid-cols-2 md:gap-y-10 lg:gap-x-10 bg-sky-100/50 md:px-6 lg:px-24 md:py-12 lg:py-20 relative" id="about-us">
            <div className="auto-cols-auto flex flex-col md:justify-center lg:items-start gap-8">
                <div className="flex flex-col md:items-center gap-y-4">
                    <h3 className="text-4xl font-bold">About Us</h3>
                    <p className="text-[18px] text-neutral-600 md:text-center md:w-3/4">We are passionate about crafting excellence in every aspect of construction. With a relentless commitment to quality, innovation, and customer satisfaction, we redefine spaces and bring your visions to life. Our experienced team of professionals combines expertise with creativity to deliver exceptional results that exceed expectations. From concept to completion, Renobuild stands as your trusted partner, transforming properties into extraordinary spaces that inspire and captivate. With us, your construction journey is characterized by professionalism, integrity, and a dedication to creating environments that truly make a difference.</p>
                </div>
                <div className="w-full md:text-center">
                    <button type="button" 
                        className="text-[18px] px-6 py-3 rounded-2xl shadow-2xl duration-200 bg-sky-950 hover:bg-sky-950/75 active:bg-sky-950 text-white">Meet Our Team</button>
                </div>
            </div>
            <div className="auto-cols-auto">
                <div className="flex items-end bg-cover bg-center md:h-96 lg:h-full rounded-3xl shadow-2xl relative" 
                    style={ AboutUsStyling }>
                    <div className="flex items-center justify-between rounded-b-2xl rounded-t-3xl bg-white p-4 absolute bottom-2 left-2 right-2">
                        { renderStats }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;