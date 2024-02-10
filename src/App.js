 import {MdChevronLeft,MdChevronRight} from 'react-icons/md';
 import { data } from './components/Imaging';

 
function App() {
    
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 600
  }


  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 600
  }




  return (
     <>
     <img className='w-full bg-black h-[360px] bg-auto object-contain' src="./img/wallpaperflare.com_wallpaper(6).jpg" alt="" />

     <div className='relative flex items-center'>
      <MdChevronLeft onClick={slideLeft} className='opacity-50 cursor-pointer hover:opacity-100'  size={50} />
      <div 
      id="slider"
      className='w-full h-full overflow-hidden  scroll whitespace-nowrap scroll-smooth  scrollbar-hide md:scrollbar-default'
        >
         {data.map((item) => {
      return  <img 
        className='w-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in duration-300'
        src={item.img}
        alt='/'
        />
       })}
      </div>
      <MdChevronRight onClick={slideRight } className='opacity-50 cursor-pointer hover:opacity-100' size={50} />
     </div>
     </>
  );
}
   
export default App;
