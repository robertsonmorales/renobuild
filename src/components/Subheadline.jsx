import React from "react";

function Subheadline({ subheadline, description, theme = 'light', children }) {    
    return (
        <div className="flex justify-center items-center flex-col">
            <h3 className={ (theme === 'dark' ? "text-white " : "") + "text-4xl text-center font-bold mb-4"  } dangerouslySetInnerHTML={{ __html: subheadline }} />
            <p className={ (theme === 'dark' ? "text-neutral-200 " : "text-neutral-600 ") + "text-[18px] text-center leading-6 w-full lg:w-7/12 flex justify-center" }>
                <span>{ description }</span>
                <span className="ml-2 hidden md:inline-block">{ children }</span>
            </p>
        </div>
    );
}

export default Subheadline;