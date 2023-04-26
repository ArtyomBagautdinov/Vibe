import React from 'react';

const PauseButton : React.FC<{onButtonClick():void}> = ({onButtonClick}) => {
    return (
        <button onClick={onButtonClick} className='group'>
            <svg className="w-10 h-10 text-white fill-current transition duration-100 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path d="M28.25 38V10H36v28ZM12 38V10h7.75v28Z"/>
            </svg>
        </button>
    );
}

export default PauseButton;
