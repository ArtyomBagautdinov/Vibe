import React from "react";

const PrevButton : React.FC<{onButtonClick():void}> = ({onButtonClick}) => {
    return (
        <button onClick={onButtonClick} className='group'>
            <svg className="w-10 h-10 text-white fill-current transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path d="M11 36V12h3v24Zm26 0L19.7 24 37 12Zm-3-12Zm0 6.25v-12.5L24.95 24Z"/>
            </svg>
        </button>
    );
}

export default PrevButton;