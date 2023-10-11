import React from "react";
import * as Icon from 'react-feather';

function Subheadline({ subheadline, description, theme = 'light', icon = null}) {    
    const showIcon = (icon != null) ? <Icon.MessageCircle /> : '';
    return (
        <div className="flex justify-center items-center flex-col">
            <h3 className={ (theme === 'dark' ? "text-white " : "") + "text-4xl text-center font-bold mb-4"  } dangerouslySetInnerHTML={{ __html: subheadline }} />
            <p className={ (theme === 'dark' ? "text-neutral-200 " : "text-neutral-600 ") + "text-[18px] text-center leading-6 w-7/12 flex items-center justify-center" }>
                <span>{ description }</span>
                <span className="ml-2">{ showIcon }</span>
            </p>
        </div>
    );
}

export default Subheadline;