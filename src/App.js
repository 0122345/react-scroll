import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { data } from "./components/Imaging";

function App() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 600;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 600;
  };

  return (
    <>
      <img
        className="w-full bg-black h-[360px] bg-auto object-contain"
        src="./img/wallpaperflare.com_wallpaper(6).jpg"
        alt=""
      />

      <div className="relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={50}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-auto scroll whitespace-nowrap scroll-smooth scrollbar-hide md:scrollbar-default"
        >
          {data.map((item) => (
            <div key={item.id} className="relative inline-block">
              <img
                className="max-w-[550px] w-full inline-block p-2 cursor-pointer hover:scale-105 ease-in duration-300"
                src={item.img}
                alt="/"
              />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-white hover:text-xl hover:text-blue-400 hover:scale-125 transition-all duration-300 font-bold drop-shadow-lg">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={50}
        />
      </div>
    </>
  );
}

export default App;
