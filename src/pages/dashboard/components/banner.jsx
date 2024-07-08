const Banner = () => {
  return (
    <div className="grid lg:grid-cols-4 ">
      <div className="col-span-1">
        <div className="border-r-2 border-gray-100">
          <h3 className=" text-gray-700 font-roboto pl-14  text-xl pt-4">
            Available Balance
          </h3>
          <div className="flex items-center  p-12 pt-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7b59f8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-credit-card"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
            <h3 className="font-semibold pl-2 text-2xl">₹ 61,832</h3>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="border-r-2 border-gray-100">
          <h3 className=" text-gray-700 font-roboto pl-14  text-xl pt-4">
            Income
          </h3>
          <div className="flex  items-center  p-12 pt-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#cc00c5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-indian-rupee"
            >
              <path d="M6 3h12" />
              <path d="M6 8h12" />
              <path d="m6 13 8.5 8" />
              <path d="M6 13h3" />
              <path d="M9 13c6.667 0 6.667-10 0-10" />
            </svg>
            <h3 className="pl-2  font-semibold text-2xl">₹ 6,832</h3>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="border-r-2 border-gray-100">
          <h3 className=" text-gray-700 font-roboto pl-14  text-xl pt-4">
            State Tax Return
          </h3>
          <div className="flex  items-center  p-12 pt-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f98806"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bar-chart-2"
            >
              <line x1="18" x2="18" y1="20" y2="10" />
              <line x1="12" x2="12" y1="20" y2="4" />
              <line x1="6" x2="6" y1="20" y2="14" />
            </svg>
            <h3 className="pl-2  font-semibold text-2xl">5.41%</h3>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="border-r-2 border-gray-100">
          <h3 className=" text-gray-700 font-roboto pl-14  text-xl pt-4">
            Open Trades
          </h3>
          <div className="flex  items-center  p-12 pt-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#06d0f9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-text"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
            <h3 className="pl-2  font-semibold text-2xl">32</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
