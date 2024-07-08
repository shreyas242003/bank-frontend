import React from "react";
import quoteImage from "../../../../public/quotes.png";

const Testimonial = ({ test }) => {
  return (
    <div className="bg-gray-30 rounded-lg p-4 relative">
      <img
        src={quoteImage}
        alt="quote"
        className="absolute top-0 left-0 mt-4 ml-4"
        style={{ width: "50px", height: "auto", color: "black" }}
      />
      <p className="absolute top-2 left-12 text-lg font-bold z-10">
        {test.name}
      </p>
      <div className="flex items-center mt-6">
        {/* Example of manually adding stars */}
        <span className="text-yellow-400 z-10">★★★★★</span>
      </div>
      <p className="mt-4">{test.testimonial}</p>
    </div>
  );
};

const TestimonialList = ({ testimonials }) => {
  return (
    <>
      {testimonials?.map((testimonial, index) => (
        <Testimonial key={index} test={testimonial} />
      ))}
    </>
  );
};
export default TestimonialList;
