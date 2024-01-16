 import React from 'react' 
import { data } from "./components/Imaging"

function App() {
  return (
     <>
     <img className='w-full h-[360px] bg-auto object-cover' src="https://motionbgs.com/media/1474/rengoku-in-fire-demon-slayer.jpg" alt="" />

     {/* <div className='relative flex items-center'>

      {data.map((item)=> {
        <img className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in duration-300' src={item.img} alt='/'/> 
      })}

     </div> */}

     <>
     <img src="./img/wallpaperflare.com_wallpaper.jpg" alt="sinz" />
     </>
     </>
  );
}
   
export default App;
