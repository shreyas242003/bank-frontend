// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// const Nav = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => {
//     setClick(!click);
//   };
//   const content = (
//     <>
//       <div className="lg:hidden fixed top-10 left-0 w-full h-full bg-white transition z-50">
//         <ul className="text-center text-xl text-black-900 pt-20">
//           <Link to="/home-loan-product">
//             <li className="my-4 py-4 border-b hover:border-slate-800">
//               Home Loan Product
//             </li>
//           </Link>
//           <Link to="/checklist-calculators">
//             <li className="my-4 py-4 border-b hover:border-slate-800">
//               Checklist & Calculators
//             </li>
//           </Link>
//           <Link to="/banking-products">
//             <li className="my-4 py-4 border-b hover:border-slate-800">
//               Banking Products
//             </li>
//           </Link>
//           <Link to="/login">
//             <li className="my-4 py-4 border-b hover:border-slate-800">Login</li>
//           </Link>
//         </ul>
//       </div>
//     </>
//   );
//   return (
//     <nav>
//       <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-12">
//         <div className="flex items-center border-b-2 border-r-2 border-t-2 border-white">
//           <img src="public/logo.png" alt="Logo" className="h-8 w-100" />
//         </div>
//         <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
//           <div className="">
//             <ul className="flex gap-x-32   text-[18px]">
//               <Link spy={true} smooth={true} to="home-loan-product">
//                 <li>Home Loan Product</li>
//               </Link>
//               <Link spy={true} smooth={true} to="checklist & calculators">
//                 <li>Checklist & calculators</li>
//               </Link>
//               <Link spy={true} smooth={true} to="banking-products">
//                 <li>Banking Products</li>
//               </Link>
//               <Link spy={true} smooth={true} to="login">
//                 <li>Login</li>
//               </Link>
//             </ul>
//           </div>
//         </div>
//         <div>{click && content}</div>
//         <button className="block sm:hidden transition" onClick={handleClick}>
//           {click ? <X /> : <Menu />}
//         </button>
//       </div>
//     </nav>
//   );
// };
// export default Nav;
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "./navlinks";
import MobileMenu from "./mobileMenu";
import { Link } from "react-router-dom";

const Nav = ({ toggleMenu }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    toggleMenu();
  };

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white  px-12 font-titillium">
        <div className="flex items-center border-b-2 border-r-2 border-t-2 border-white my-6">
          <Link to="/">
            <img src="public/logo.png" alt="Logo" className="h-10 w-100" />
          </Link>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center  justify-end  hidden">
          <NavLinks />
        </div>

        {click && <MobileMenu />}
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
