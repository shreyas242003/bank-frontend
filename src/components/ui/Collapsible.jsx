import { useState } from "react";

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-1 border-blue-50 rounded-xl my-4 py-2 bg-white">
      <div className="mx-auto my-2 max-w-xl ">
        <details className="group">
          <summary
            className="flex flex-1 cursor-pointer items-center justify-between text-blue-50 font-medium outline-none"
            onClick={toggleCollapse}
          >
            <span>{title}</span>
            <span
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </span>
          </summary>
          <div className={`group-open:block hidden mt-3`}>{children}</div>
        </details>
      </div>
    </div>
  );
};

export default Collapsible;
