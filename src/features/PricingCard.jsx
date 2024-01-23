function PricingCard() {
  return (
    <div className="flex  min-h-dvh justify-center items-center  bg-slate-800">
      <div className="flex flex-col my-6 space-y-6  md:space-y-0 md:flex-row md:space-x-6 md:my-0 ">
        {/* 1st col  */}
        <div className="bg-slate-700 rounded-xl text-white">
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">Basic</div>
            <h2 className="text-5xl font-serif mt-10 text-center">100GB</h2>
            <h3 className="text-center mt-2">$1.99/Month</h3>
            <div className="flex justify-center">
              <a
                className="inline-block my-6 px-10 py-3 border border-purple-600  rounded-md text-center  duration-200 hover:bg-purple-800 hover:border-purple-800"
                href="#"
              >
                Purchase
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700"></div>
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800 space-y-1">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                ⎷ <span className="ml-1 text-sm">100 GB storage</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                ⎷ <span className="ml-1 text-sm">Option to add members</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                ⎷ <span className="ml-1 text-sm">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd col  */}

        <div className="bg-purple-800 rounded-xl text-white">
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">Standard</div>
            <h2 className="text-5xl font-serif mt-10 text-center">200GB</h2>
            <h3 className="text-center mt-2">$3.99/Month</h3>
            <div className="flex justify-center">
              <a
                className="inline-block my-6 px-10 py-3 border border-purple-800  rounded-md text-center  duration-200 bg-purple-800 hover:border-purple-800"
                href="#"
              >
                Purchase
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700"></div>
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800 space-y-1">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                ⎷ <span className="ml-1 text-sm">200 GB storage</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                ⎷ <span className="ml-1 text-sm">Option to add members</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                ⎷ <span className="ml-1 text-sm">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3d col */}

        <div className="bg-slate-700 rounded-xl text-white">
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">premium</div>
            <h2 className="text-5xl font-serif mt-10 text-center">2TB</h2>
            <h3 className="text-center mt-2">$8.99/Month</h3>
            <div className="flex justify-center">
              <a
                className="inline-block my-6 px-10 py-3 border border-purple-600  rounded-md text-center  duration-200 hover:bg-purple-800 hover:border-purple-800"
                href="#"
              >
                Purchase
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700"></div>
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800 space-y-1">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                ⎷ <span className="ml-1 text-sm">2 TB storage</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                ⎷ <span className="ml-1 text-sm">Option to add members</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                ⎷ <span className="ml-1 text-sm">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
