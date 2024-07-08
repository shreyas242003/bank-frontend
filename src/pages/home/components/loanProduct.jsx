import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const LoanProduct = ({ loanProduct }) => {
  return (
    <>
      {loanProduct?.data?.map((product, index) => (
        <div
          key={index}
          className="col-span-1 bg-white shadow-md  overflow-hidden  border-b-4 border-blue-50"
        >
          <div className="flex flex-col">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${product.image}`}
              className="h-72 w-full bg-cover bg-center"
              alt={product.name}
            />
            <div className="p-4 h-64">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <ul>
                {product.types?.map((type, typeIndex) => (
                  <li
                    key={typeIndex}
                    className="text-gray-700 mb-2 pb-2 border-b border-gray-200"
                    style={{
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <Link
                      to={`/loan/${type.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center justify-between space-x-2"
                      style={{
                        transition: "color 0.3s ease",
                      }}
                    >
                      <span>{type}</span>
                      <ArrowRight
                        size={16}
                        className="text-blue-50 group-hover:translate-x-2"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoanProduct;
