import React from "react";
import Subheadline from "./Subheadline";
import Accordion from "./Accordion";
import { MessageCircle } from "react-feather";

const FAQs = () => {
    return(
        <div className="bg-white md:px-6 lg:px-24 md:py-12 lg:py-20 flex flex-col gap-y-16" id="faqs">
            <Subheadline 
                subheadline="Frequently <br> Asked Questions"
                description="Can't find the answer? Chat to us"
                icon={ MessageCircle }
            />
            
            <Accordion />

            <div className="w-80 h-80 rounded-full bg-amber-500/50 blur-xxl absolute translate-x-1/2 translate-y-1/2 z-0 pointer-events-none"></div>

        </div>
    );
}

export default FAQs;