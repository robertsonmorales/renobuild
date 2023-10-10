import React from "react";

function Subheadline({ subheadline, description }) {
    return (
        <div className="flex justify-center items-center flex-col">
            <h3 className="text-4xl font-bold mb-4">{ subheadline } </h3>
            <p className="text-[18px] text-center text-slate-600 leading-6 w-7/12">{ description }</p>
        </div>
    );
}

export default Subheadline;