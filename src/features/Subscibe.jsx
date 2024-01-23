import image from "../assets/image.jpg";

function Subscibe() {
  return (
    <div className="flex items-center justify-center h-dvh bg-zinc-700">
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div className="flex flex-col md:flex-row rounded-l-xl ">
          <img
            src={image}
            alt=""
            className="object-fit h-80 rounded-xl  md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
          />

          <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl font-medium text-white text-center md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs my-4 text-xs text-white tracking-wide leading-5 text-center md:text-left">
              Eat better and exersise better! Subscripe up for the dialy email
              tips
            </p>

            <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-2 px-4 text-center bg-zinc-800 text-white border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none rounded-md"
              />
              <button className="text-zinc-800 px-5 py-3 bg-lime-500 rounded-md text-xs  md:py-0 hover:bg-lime-700 hover:text-white active:bg-lime-800 duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscibe;
