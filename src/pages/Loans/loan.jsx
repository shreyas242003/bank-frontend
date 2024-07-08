import Header from "../../Layout/header";
import React, { useState } from "react";
import { ChakraProvider, Select } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import HomeLoan from "./HomeLoan";
import PersonalLoan from "./PersonalLoan";
import { axiosFireApi } from "../../services/config";
import AdditionalLoan from "./AdditionalLoan";
import ConsumerLoan from "./ConsumerLoan";
import { loanValidation } from "../../../utils/validationSchema"; // Path to your validation schema
const Loan = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [selectedLoanType, setSelectedLoanType] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm({
    //resolver: yupResolver(loanValidation),
  });
  const onSubmit = async (data) => {
    const user = localStorage.getItem(import.meta.env.VITE_USER_INFO);
    const userInfo = JSON.parse(user);
    const userId = userInfo.id;

    const requestData = {
      ...data,
      id: userId,
      loanType: selectedLoanType,
    };

    // Now you can proceed with your API call
    try {
      const response = await axiosFireApi("loan", "post", requestData);
      console.log(response.data); // Handle response as needed
    } catch (error) {
      console.error("Error submitting loan:", error);
    }

    console.log(requestData); // Log the data submitted (excluding userId)
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <div className="bg-[url('/public/pl-banner.jpg')] h-[200px]"></div>
      <ChakraProvider>
        <div className="relative w-full bg-[rgba(225,244,253,0.30)] px-6 mt-16 pb-8 shadow-xl ring-1 rounded-lg ring-gray-900/5 sm:mx-auto sm:max-w-4xl sm:px-10">
          <div className="pt-4">
            <Select
              placeholder="Select loan type"
              onChange={(e) => setSelectedLoanType(e.target.value)}
              mb={4}
            >
              <option value="home">Home Loan</option>
              <option value="personal">Personal Loan</option>
              <option value="additional">Additional Loan</option>
              <option value="consumer">Consumer Loan</option>
            </Select>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
            {selectedLoanType === "home" && (
              <HomeLoan register={register} errors={errors} />
            )}
            {selectedLoanType === "personal" && (
              <PersonalLoan register={register} errors={errors} />
            )}
            {selectedLoanType === "additional" && (
              <AdditionalLoan register={register} errors={errors} />
            )}
            {selectedLoanType === "consumer" && (
              <ConsumerLoan register={register} errors={errors} />
            )}
            <button type="submit" disabled={isSubmitting} className="mt-4">
              Submit
            </button>
          </form>
        </div>
      </ChakraProvider>
    </>
  );
};

export default Loan;
