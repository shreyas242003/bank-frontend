import Header from "../../Layout/header";
import CarouselSlider from "./components/carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import { axiosFireApi } from "../../services/config";
import Banner from "./components/banner";
import LoanProduct from "./components/loanProduct";
import TestimonialList from "./components/testimonial";
import Article from "./components/articles";
const Home = () => {
  const [data, setData] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosFireApi("home", "get");

        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <div className={`${menuOpen ? "hidden" : "relative z-0"}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-5 mt-4 mx-4 `}>
          <div className="lg:col-span-3 col-span-1">
            <CarouselSlider data={data?.data?.data?.home?.carouselImages} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 gap-x-2 my-16">
          <Banner data={data?.data?.data?.home?.banner} />
        </div>
        <div className="grid md:grid-cols-3 ml-8 mr-8 gap-x-24 my-16">
          <LoanProduct loanProduct={data?.data?.data?.home?.homeLoanProducts} />
        </div>
        <div className="text-center">
          <h3 className="mb-4 md:text-3xl  text-black-900 font-semibold">
            Testimonials
          </h3>
        </div>
        <div className="grid md:grid-cols-3 ml-8 mr-8 gap-x-4 my-16">
          <TestimonialList
            testimonials={data?.data?.data?.home?.testimonials}
          />
        </div>
        <div className="text-center">
          <button className="bg-white border-1 border-blue-50 text-blue-50 p-2 rounded-lg hover:bg-blue-50 hover:text-white transition-colors duration-300">
            View more
          </button>
        </div>
        <div className="text-center mt-4    ">
          <h3 className="mb-4 md:text-3xl  text-black-900 font-semibold">
            Home Loan Recommended Articles
          </h3>
        </div>
        <div className="grid md:grid-cols-4 ml-8 mr-8 gap-x-4 my-16">
          <Article articles={data?.data?.data?.home?.articles} />
        </div>
      </div>
    </>
  );
};
export default Home;
