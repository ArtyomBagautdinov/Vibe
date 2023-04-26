import React from 'react';
import PlayButton from '@/components/buttons/PlayButton';
import PauseButton from '@/components/buttons/PauseButton';
import PrevButton from '@/components/buttons/PrevButton';
import NextButton from '@/components/buttons/NextButton';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';

interface IPlayerControl {
    isPlaying: boolean, 
    prevHandler():void, 
    nextHandler():void, 
    playHandler(): void, 
    pauseHandler():void
}

const PlayerControl : React.FC <IPlayerControl> = (props) => {

    const { prevHandler, playHandler, pauseHandler, nextHandler, isPlaying } = props;

    return (
        <div className='flex space-x-1'>
            <PrevButton onButtonClick={prevHandler}/>
            {!isPlaying && <PlayButton onButtonClick={playHandler}/>}
            {isPlaying && <PauseButton onButtonClick={pauseHandler}/>}
            <NextButton onButtonClick={nextHandler}/>
        </div>
    );
}


const Player: React.FC = observer(() => {

    const [isPlaying, setState] = useState(false); 

    const prevHandler = () : void => {
        console.log('prev');
    }

    const nextHandler = () : void => {
        console.log('next');
    }
    
    const playHandler = () : void => {
        setState(true);
    }

    const pauseHandler = () : void => {
        setState(false);
    }

    const playerControlParams : IPlayerControl = {
        isPlaying: isPlaying,
        prevHandler: prevHandler,
        nextHandler: nextHandler,
        playHandler: playHandler,
        pauseHandler: pauseHandler
    }

    return (
        <div className='fixed bottom-0 w-full'>
            <div className='container mx-auto px-4 py-6'>
                <PlayerControl {...playerControlParams}/>
            </div>
        </div>
    );
})

export default Player;