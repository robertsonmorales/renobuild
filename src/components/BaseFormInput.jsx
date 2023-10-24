import React from "react";

export const BaseInput = ({ name, type, label, placeholder = null, children, isRequired = false, isAutoFocus = false }) => {
    return (
        <div className="flex items-center border-neutral-300 border px-4 py-3 rounded-2xl ring-offset-1 focus-within:ring">
            <div className="flex flex-col w-full gap-1">
                <label htmlFor="name" className="text-neutral-600 text-sm">{ label } { isRequired ? <span className="text-red-600">*</span> : '' }</label>
                <input type={ type }
                    name={ name }
                    id={ name }
                    placeholder={ placeholder }
                    autoFocus={ isAutoFocus }
                    className="text-[18px] text-sky-950 border-0 focus:outline-0" />
            </div>

            <div className="text-neutral-600">
                { children }
            </div>
        </div>
    );
}

export const BaseTextArea = ({ name, label, placeholder = null, isRequired = false }) => {
    return (
        <div className="flex flex-col items-start border-neutral-300 border px-4 py-3 rounded-2xl ring-offset-1 h-52 focus-within:ring">
            <label htmlFor="name" className="text-neutral-600 text-sm">{ label } { isRequired ? <span className="text-red-600">*</span> : '' }</label>
            <textarea 
                name={ name } 
                id={ name } 
                rows="10"
                placeholder={ placeholder }
                className="text-[18px] text-sky-950 border-0 w-full resize-none focus:outline-0"></textarea>
        </div>
    );
}