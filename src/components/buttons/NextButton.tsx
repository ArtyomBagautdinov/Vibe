import React from "react";

const NextButton : React.FC<{onButtonClick():void}> = ({onButtonClick}) => {
    return (
        <button onClick={onButtonClick} className='group'>
            <svg className="w-10 h-10 text-white fill-current transition duration-100 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path d="M34 36V12h3v24Zm-23 0V12l17.3 12Zm3-12Zm0 6.25L23.05 24 14 17.75Z"/>
            </svg>
        </button>
    );
}

export default NextButton;