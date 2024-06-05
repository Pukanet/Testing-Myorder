import React from 'react';
import icondot from './assets/dot.svg'

import './App.css';

function App() {
  return (
    <div className="App h-screen bg-blue-900 flex justify-center items-center">
      <div className='flex'>
        <div className='w-[360px] bg-white max-w-[100%] h-[600px]'>
          <div className='flex flex-wrap items-center'>
          <div className='absolute rounded-full bg-gradient-to-t w-[49px] h-[49px] from-yellow-500 via-red-500 to-pink-500 mx-[15px] p-[2px]'>
            <img src='https://i.showdown.space/e01/sky.jpeg' className='w-[45px] h-[45px] rounded-full  border-[1px] ' alt='' />
            </div>
            <div className='flex font-semibold grow mx-[75px] my-[25px]'>travel_desh</div>
            <img src={icondot} className='w-[18px] mr-[15px]' alt="" />
          </div>
          <img src='https://i.showdown.space/e01/beach.jpeg' className='w-[360px]' alt='' />
          <div className='flex flex-wrap items-center justify-between'>
            <img src='https://i.showdown.space/e01/heart.svg' className='flex m-[15px]' alt="" />
            <div className='flex'>
              <div className='w-[7px] h-[7px] rounded-full bg-blue-500'></div>
              <div className='w-[4px] h-[4px] rounded-full bg-gray-300 mt-[1px] ml-[4px]'></div>
              <div className='w-[4px] h-[4px] rounded-full bg-gray-300 mt-[1px] ml-[4px]'></div>
              <div className='w-[4px] h-[4px] rounded-full bg-gray-300 mt-[1px] ml-[4px]'></div>
              <div className='w-[4px] h-[4px] rounded-full bg-gray-300 mt-[1px] ml-[4px]'></div>
              <div className='w-[3px] h-[3px] rounded-full bg-gray-300 mt-[2px] ml-[4px]'></div>
            </div>
            <img src='https://i.showdown.space/e01/bookmark.svg' className='m-[15px]' alt="" />
          </div>
          <div className='flex mb-[4px]'>
            <div className='text-[14px] font-bold ml-[15px]'>23,046 likes</div>
          </div>
          <div className='flex flex-row mb-[4px]'>
            <div className='text-[14px] font-bold ml-[15px]'>travel_desh</div>
            <div className='text-[14px] ml-[4px]'>Somewhere in the world, live</div>
            <div className='text-[14px] text-gray-400 ml-[4px]'>....more</div>
          </div>
          <div className='flex'>
            <div className='text-[14px] text-gray-400 ml-[15px]'>View all 1,012 comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
