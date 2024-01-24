import water from "../assets/water.jpg";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";

function LoginModal() {
  return (
    // Container
    <div className="flex items-center justify-center min-h-dvh bg-rose-100">
      {/* card */}
      <div className="flex relative bg-white rounded-xl shadow-xl ">
        {/* close icon  */}
        <div className="bg-gray-100  flex justify-center items-center absolute rounded-full right-0 top-0 px-3 py-1 m-4 hover:-translate-y-0.5 duration-150 hover:bg-opacity-90 transition-all hover:cursor-pointer">
          X
        </div>
        <div className="flex flex-col p-4 md:p-14 space-y-5">
          {/* left part  */}
          <div className="flex flex-col max-w-xs space-y-4">
            <h2 className="font-bold text-2xl">Log In</h2>
            <h3 className="text-md font-light text-gray-500">
              Log in to your account to upload or download pictures, videos or
              music.
            </h3>
          </div>

          {/* input */}
          <input
            type="text"
            placeholder="Enter your email address"
            className="my-4 p-4 border-2 rounded-md"
          />

          <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
            <a
              href="#"
              className="text-cyan-700 flex justify-center items-center py-4  "
            >
              Forgot password
            </a>
            <button className=" bg-cyan-700 py-4 px-10 rounded-md text-white text-xl hover:-translate-y-0.5 duration-150 hover:bg-opacity-90 hover:shadow-lg  transition-all ">
              Next ⇨
            </button>
          </div>

          <div className="border-b-2 py-5"></div>

          <div className="text-gray-500 text-sm flex justify-center">
            or log in with
          </div>
          <div className="flex flex-col md:flex-row md:justify-between space-y-5 md:space-y-0">
            <button className="font-light flex justify-center space-x-3 items-center rounded-md border-2 p-4 hover:-translate-y-1 hover:shadow-md duration-150 transition-all">
              <img src={facebook} alt="" className="w-8" />

              <div>Facebook</div>
            </button>

            <button className="font-light flex justify-center space-x-3 items-center rounded-md border-2 py-4 px-7 hover:-translate-y-1 hover:shadow-md duration-150 transition-all">
              <img src={google} alt="" className="w-8" />

              <div>Google</div>
            </button>
          </div>
        </div>

        {/* right part  */}
        <div className="hidden md:block">
          <img src={water} alt="" className=" w-96  rounded-r-xl" />
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
