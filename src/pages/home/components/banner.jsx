const Banner = ({ data }) => {
  return (
    <>
      <div
        className="col-span-1 md:py-12 px-2 md:h-80 h-40 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BACKEND_URL}${
            data?.data[0]?.image
          })`,
        }}
      >
        <div className="flex flex-col  md:pl-80 pl-40 bg-opacity-50 text-white">
          <h3 className="text-blue-50 md:text-3xl text-sm font-bold">
            {data?.data[0]?.message}
          </h3>
          <h3 className="text-red-50 md:text-3xl text-sm font-bold">
            Get Answer
          </h3>
          <h2 className="text-black md:text-lg text-sm font-semibold md:pt-4">
            Resolve all your queries instantly on
          </h2>
          <button className="bg-blue-50 md:mt-4 mx-4 md:py-2 md:mx-4 rounded-lg border-1 border-blue-50 hover:bg-white hover:text-black-900">
            Chat With Us
          </button>
        </div>
      </div>
      <div
        className="col-span-1 md:py-12 px-2 md:h-80 h-40 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BACKEND_URL}${
            data?.data[1]?.image
          })`,
        }}
      >
        <div className="flex flex-col md:pl-80 pl-40 bg-opacity-50 text-white">
          <h3 className="text-blue-50 md:text-3xl text-sm font-bold">
            {data?.data[1]?.message}
          </h3>
          <h3 className="text-red-50 md:text-3xl text-sm font-bold">
            Savings account
          </h3>
          <h2 className="text-black md:text-lg  text-sm font-semibold md:pt-4">
            Choose the Account that Fits Your Goals and Lifestyle.
          </h2>
          <button className="bg-blue-50 md:mt-4 mx-4 md:py-2 md:mx-4 rounded-lg border-1 border-blue-50 hover:bg-white hover:text-black-900">
            Know More
          </button>
        </div>
      </div>
    </>
  );
};
export default Banner;
