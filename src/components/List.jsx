import React from "react";

const ListItem = ({ route, name }) => {
    return (
        <li className="text-neutral-300/75 leading-6 text-[18px] text-center md:text-left transition-all duration-300 ease-out hover:text-neutral-100">
            {/* { (isClickable && isClickable ? <a href="www.google.com?q=cat" target="_blank">{ children }</a> : { children }) } */}
            <a href={`/${ route }`}>{ name }</a>
        </li>
    );
}

const List = ({ title, listItems = [], isRaw = false, children }) => {
    return (
        <div className="flex flex-col items-center md:items-start gap-y-6">
            <h4 className="text-neutral-100 text-2xl font-bold">{ title }</h4>
        
            <ul className="flex flex-col items-center md:items-start gap-y-4">
                {(!isRaw) ? listItems.map(({ route, name }, index) => <ListItem key={ index } route={ route } name={ name } /> 
                ) : children }
            </ul>
        </div>
    );
}

export default List;