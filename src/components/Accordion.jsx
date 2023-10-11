import React, { useState } from 'react';
import { ChevronUp } from "react-feather";

const data = [
    {
      title: 'How long does a typical construction project take?',
      content: 'The duration of a construction project depends on various factors such as the size, complexity, and scope of the project. Smaller projects may take weeks to months, while larger projects can take several months to years.',
    },
    {
      title: 'How can I ensure that my construction project stays within budget?',
      content: 'To keep your construction project within budget, it is crucial to have a detailed plan and communicate your budget constraints with the construction services provider. Regularly review project costs, prioritize essential elements, and make informed decisions throughout the process.',
    },
    {
      title: 'What permits and approvals are necessary for a construction project?',
      content: `The permits and approvals required for a construction project vary depending on your location and the nature of the project. Common permits include building permits, zoning permits, electrical permits, and plumbing permits. It's essential to consult with local authorities and professionals to ensure compliance.`,
    },
    {
      title: 'How do I select the right construction services provider for my project?',
      content: `When choosing a construction services provider, consider their experience, expertise, track record, and reputation. Request references, review past projects, and inquire about their certifications and licenses. Additionally, seek out testimonials and feedback from previous clients to make an informed decision.`,
    },
    {
      title: 'What measures are taken to ensure safety during construction?',
      content: `Safety is a top priority in construction projects. Construction services providers implement various safety measures, including providing proper safety training to workers, conducting regular safety inspections, adhering to building codes and regulations, and implementing appropriate safety equipment and protocols on-site.`,
    }
];

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-slate-400 border rounded-2xl mb-4 overflow-hidden">
        <div className={`flex justify-between items-center bg-sky-950 py-4 px-6 text-white transition-all duration-300 ease-in-out hover:bg-sky-950/75 active:bg-sky-950 ${!isOpen ? '' : 'rounded-t-2xl' } cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <p className="text-[18px] ">{ title }</p>
            <span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}><ChevronUp size={16} /></span>
        </div>
        <div className={`${isOpen
                ? 'py-4 px-6 max-h-screen transition-all duration-300 ease-in-out opacity-100'
                : 'max-h-0 opacity-0'
            }`}>
            <p className='text-[18px] text-neutral-600 leading-6'>{ content }</p>
        </div>
    </div>
  );
}

const Accordion = () => {
  return (
    <div className="container mx-auto">
      { data.map((item, index) => {
        return (<AccordionItem key={index} title={item.title} content={item.content} />);
      })}
    </div>
  );
}

export default Accordion;
