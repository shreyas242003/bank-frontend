import { Link, useNavigate } from "react-router-dom";
import mountains from "@/assets/images/auth/mountains.png";
import Illustration from "@/assets/images/auth/ils1.svg";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "../../auth.module.css";
const NonAuthLayout = ({ title, subTitle, children }) => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth.user) || {};

  useEffect(() => {
    if (isAuth) {
      navigate("/home");
    }
  }, [isAuth, navigate]);

  return (
    <section
      className="bg-cover bg-center h-screen w-full grid grid-cols-5 justify-center"
      style={{ backgroundImage: `url('public/background.png')` }}
    >
      <div className="col-span-4 relative overflow-hidden ">
        <div className="pt-8">
          <img
            src="public/life_img.png"
            alt="Life"
            className="absolute bottom-0  w-full object-cover z-0"
          />
        </div>

        <div className="absolute top-4 left-4 z-10 flex flex-col items-start">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="border-b-2 border-r-2 border-t-2 border-white mb-2"
            />
          </Link>
          <p className="text-xl mb-2 text-white pl-32 pt-16">
            Fast &emsp;•&emsp; Online &emsp;•&emsp; Paperless
          </p>
          <p className="text-2xl pl-32   font-roboto mb-2 text-white">
            Easy and Simple way to <br /> apply for a Home Loan online
          </p>
        </div>
      </div>
      <div className="col-span-1 bg-white flex items-center justify-center z-10 mr-80 my-8">
        <div className="border-2 rounded-lg bg-white border-gray-300 w-150 h-90 mr-80 pt-4 px-16">
          {children}
        </div>
      </div>
    </section>
  );
};

export default NonAuthLayout;
