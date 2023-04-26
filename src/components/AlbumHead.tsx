import React from "react";
import PlayButton from "@/components/buttons/PlayButton";

const AlbumCover : React.FC = () => {
    return (
        <div className='group relative transform-gpu hover:scale-95 transition duration-700 ease flex flex-col justify-center items-center w-[250px] h-[250px] rounded-full overflow-hidden cursor-pointer'>
              <img className='w-full h-full' src={require('@/assets/images/randomAccessMemories.jpg')} alt="" />
              <div className='w-full h-full absolute z-10 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-700 ease'/>
              <div className='w-full h-full absolute z-20 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-700 ease'>
                <div className="hover:scale-105 transition duration-300 ease bg-black bg-opacity-50 rounded-full">
                    <PlayButton onButtonClick={() => console.log('adasd')}/>
                </div>
              </div>
          </div>
    );
}

const AlbumHead : React.FC = () => {
    

    return (
      <div className='flex flex-row justify-start py-7'>
        <div className='flex flex-col justify-start items-start h-full'>
            <h1 className='flex flex-col space-y-2'>
              <span className='text-gray-600 text-md uppercase'>Альбом</span>
              <span className='text-white text-5xl font-medium shine '>Random Access Memories</span>
              <span className='text-white text-md block'>Daft Punk</span>
              <div className='flex items-center space-x-1'>
                <span className='text-white text-md block'>2013</span>
                <div className='w-1 h-1 bg-gray-200 rounded-full'/>
                <span className='text-gray-600 text-md block cursor-pointer'>Хаус</span>
              </div>
            </h1>
        </div>
      </div>
    );
  }

  export default AlbumHead;