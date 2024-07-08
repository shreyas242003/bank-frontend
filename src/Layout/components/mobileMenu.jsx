import { Link } from "react-router-dom";

const MobileMenu = () => (
  <div className="lg:hidden fixed top-20 left-0 w-full h-full bg-white transition z-50">
    <ul className="text-center text-xl text-black-900 pt-20">
      <Link to="/home-loan-product">
        <li className="my-4 py-4 border-b hover:border-slate-800">
          Home Loan Product
        </li>
      </Link>
      <Link to="/checklist-calculators">
        <li className="my-4 py-4 border-b hover:border-slate-800">
          Checklist & Calculators
        </li>
      </Link>
      <Link to="/banking-products">
        <li className="my-4 py-4 border-b hover:border-slate-800">
          Banking Products
        </li>
      </Link>
      <Link to="/login">
        <li className="my-4 py-4 border-b hover:border-slate-800">Login</li>
      </Link>
    </ul>
  </div>
);

export default MobileMenu;
