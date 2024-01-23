import image from "../assets/headphone.png";
import weigth from "../assets/weight.png";
import heart from "../assets/heart.png";

function ProductModal() {
  return (
    <div className="flex items-center justify-center min-h-dvh bg-slate-100">
      {/* card */}
      <div className="flex flex-col p-6 m-3 bg-white space-y-10 rounded-2xl shadow-2xl  md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        {/* image div */}
        <div>
          <img
            src={image}
            alt=""
            className="mx-auto hover:scale-105 duration-200 w-60"
          />
        </div>

        {/* content  */}
        <div className="flex flex-col space-y-6">
          {/* Label & Discription container  */}
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <div className="inline-block  text-sm bg-black rounded-full text-white  px-3 py-1">
                Free shipping
              </div>
            </div>
            {/* discription  */}
            <div className="max-w-sm text-2xl font-medium">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </div>

            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p className=" line-through">$799</p>
              <p className="font-bold text-5xl">$599</p>
              <p className="text-sm text-gray-400 font-light">
                The offer is valid until April 3 or as long as stock lasts!
              </p>
            </div>
            {/* button */}
            <div className="group">
              <button className="bg-blue-700 transition-all duration-150 w-full text-white rounded-lg border-b-8 border-b-blue-700 group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                <div className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                  Add to cart
                </div>
              </button>
            </div>

            {/* animated part */}
            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping "></div>
              <div className="text-sm ">50+ pcs in stock.</div>
            </div>
            {/* Button buttons  container */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <button className="flex items-center justify-center py-3 px-5 border-2 border-gray-300 rounded-lg space-x-3 shadow-sm hover:shadow-lg hover:bg-opacity-30 hover:-translate-y-0.5 transition-all duration-150">
                <img src={weigth} alt="" className="w-8" />
                <span>Add to cart</span>
              </button>

              <button className="flex items-center justify-center py-3 px-5 border-2 border-gray-300 rounded-lg space-x-3 shadow-sm hover:shadow-lg hover:bg-opacity-30 hover:-translate-y-0.5 transition-all duration-150">
                <img src={heart} alt="" className="w-8" />
                <span>Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
