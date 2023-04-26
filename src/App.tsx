import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Player from '@/components/Player';
import AlbumHead from '@/components/AlbumHead';
import store from '@/store/mainStore';
import { observer } from 'mobx-react-lite';
import secondsConverter from '@/helpers/secondsConverter';
import PlayButton from './components/buttons/PlayButton';

const PlayLists : React.FC = observer(() => {

  const { songs_list } = store.songsStore;


  useEffect(()=> {
    store.songsStore.loadSongs();
  }, [])

  return (
    <div className='w-full flex flex-col'>
      {
        songs_list.map((item, index) => {
          return (
            <div className='relative w-full h-9 flex justify-between items-center cursor-pointer group'>
              <div className='absolute z-10 -translate-x-5 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition duration-300 ease-in-out'>
                <PlayButton onButtonClick={()=>{}}/>
              </div>
              <div className='flex justify-start items-center space-x-3'>
                <span className='text-gray-500 text-base group-hover:-translate-x-2 group-hover:opacity-0 transition duration-500 ease'>{index + 1}</span>
                <span className='text-white group-hover:translate-x-1 transition duration-300 ease'>{item.title}</span>
              </div>
              <span className='text-white'>{secondsConverter(item.duration_in_seconds)}</span>
            </div>
          );
        })
      }
    </div>
  );
})

const App : React.FC = () => {
  return (
    <div className='bg-black w-screen h-screen'>
      <Header/>
      <main>
        <div className='w-full container mx-auto px-4'>
          <AlbumHead/>
          <PlayLists/>
        </div>
      </main>
      <Player/>
    </div>
  );
}

export default App;
