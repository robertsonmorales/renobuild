import React from "react";

const Main = ({ children }) => {
    return(
        <main> 
            {/* className="px-6 lg:px-24 py-12 lg:py-20" */}
            { children }
        </main>
    );
}

export default Main;