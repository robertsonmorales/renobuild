import React from "react";

function Subheadline({ subheadline, description, theme = 'light', children }) {    
    return (
        <div className="flex flex-col lg:items-center">
            <h3 className={ (theme === 'dark' ? "text-white " : "") + "text-3xl lg:text-4xl text-left lg:text-center font-bold mb-4 lg:w-6/12"  } dangerouslySetInnerHTML={{ __html: subheadline }} />
            <p className={ (theme === 'dark' ? "text-neutral-200 " : "text-neutral-600 ") + "text-base lg:text-[18px] text-left lg:text-center leading-6 w-full lg:w-5/6 flex justify-start lg:justify-center" }>
                <span>{ description }</span>
                <span className="ml-2 hidden md:inline-block">{ children }</span>
            </p>
        </div>
    );
}

export default Subheadline;