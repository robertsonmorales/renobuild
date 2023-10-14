import React from "react";
import Subheadline from "./Subheadline";
import Accordion from "./Accordion";
import { MessageCircle } from "react-feather";

const FAQs = () => {
    return(
        <section className="bg-white px-6 lg:px-24 py-12 lg:py-20 flex flex-col gap-y-16" id="faqs">
            <Subheadline 
                subheadline="Frequently <br> Asked Questions"
                description="Can't find the answer? Chat to us"
            >
                <MessageCircle />
            </Subheadline>
            
            <Accordion />

            <div className="w-80 h-80 rounded-full bg-amber-500/50 blur-xxl absolute translate-x-1/2 translate-y-1/2 z-0 pointer-events-none"></div>

        </section>
    );
}

export default FAQs;