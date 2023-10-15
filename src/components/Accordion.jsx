import React, { useState } from 'react';
import { ChevronUp } from "react-feather";
import { RenobuildFAQs } from "../data/data";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-slate-300 border rounded-2xl mb-4 overflow-hidden">
        <div className={`flex justify-between items-center ${isOpen ? 'bg-white text-sky-950' : 'bg-sky-950 text-white'} py-4 px-6 transition-all duration-300 ease-in-out hover:bg-white hover:text-sky-950 ${!isOpen ? '' : 'rounded-t-2xl' } cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <p className="text-base lg:text-[18px] ">{ title }</p>
            <span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}><ChevronUp size={16} /></span>
        </div>
        <div className={`${isOpen
                ? 'bg-white py-4 px-6 max-h-screen transition-all duration-300 ease-in-out opacity-100'
                : 'max-h-0 opacity-0'
            }`}>
            <p className='text-base lg:text-[18px] text-neutral-600 leading-6'>{ content }</p>
        </div>
    </div>
  );
}

const Accordion = () => {
  return (
    <div className="container mx-auto z-10">
      { RenobuildFAQs.map((item, index) => {
        return (<AccordionItem key={index} title={item.title} content={item.content} />);
      })}
    </div>
  );
}

export default Accordion;
