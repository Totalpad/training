import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";
import bookmark from "../assets/bookmark.svg";

function ImageGalary() {
  return (
    // global container
    <div className="flex items-center justify-center min-h-dvh bg-cyan-50">
      {/* Card container  */}
      <div className="bg-white p-6 m-3 shadow-2xl space-y-10 rounded-3xl md:p-40">
        {/* Menu container  */}
        <div className="flex items-center flex-col justify-center  space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
          {/* items */}
          <div className="group">
            <a href="#">Vector</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-300 group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <a href="#">Illustrations</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-300 group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <a href="#">Images</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-300 group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <a href="#">Icons</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-300 group-hover:opacity-100"></div>
          </div>
        </div>
        {/* Search container  */}
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0">
          <div className="flex justify-between border-b">
            <input
              type="text"
              placeholder="Search"
              className="border-none ml-6 md:w-80 placeholder:font-thin focus:outline-none"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="15" y2="15"></line>
              </svg>
            </button>
          </div>
          {/* Upload button */}
          <button className="bg-black text-white text-lg font-normal border border-black px-14 py-3 rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>
        {/* Galary container  */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative group">
            <img src={img1} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 ">
              <div className="flex justify-between w-full ">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">453 likes</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img src={img2} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 ">
              <div className="flex justify-between w-full ">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">453 likes</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={img3} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 ">
              <div className="flex justify-between w-full ">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">453 likes</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={img4} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 ">
              <div className="flex justify-between w-full ">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">453 likes</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={img5} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 ">
              <div className="flex justify-between w-full ">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">453 likes</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src={img6} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 ">
              <div className="flex justify-between w-full ">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">453 likes</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //
  );
}

export default ImageGalary;
