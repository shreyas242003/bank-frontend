import React, { useState, useEffect } from "react";
import Textinput from "../../../components/ui/Textinput";
import Button from "../../../components/ui/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupValidation } from "../../../../utils/validationSchema";

import { useNavigate } from "react-router-dom";
import { axiosFireApi } from "../../../services/config";
import { handleLogin } from "./store";

const SignUpForm = () => {
  const navigate = useNavigate();

  // Form state and validation using react-hook-form and yup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    resolver: yupResolver(signupValidation),
  });

  const [step, setStep] = useState(1);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  // Watch the initial fields to track their values
  const username = watch("username");
  const email = watch("email");
  const firstName = watch("firstName");
  const lastName = watch("lastName");

  // Function to check if the initial fields are filled
  const areInitialFieldsFilled = () => {
    return username && email && firstName && lastName;
  };
  const handleNextClick = () => {
    if (areInitialFieldsFilled()) {
      setStep(2);
    }
  };
  const onSubmit = async (data) => {
    console.log(data);
    const transformedData = {
      username: data.username,
      email: data.email,
      role: "user", // assuming role is always 'user'
      personalInfo: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        address: {
          street: data.address, // assuming address is a single input field, adjust if it's separate fields
          city: data.address,
          state: data.address,
          zip: "411030",
          country: data.address,
        },
      },
      dateOfBirth: data.dob,
    };
    console.log(transformedData);
    if (step === 1) {
      setStep(2);
    } else {
      const response = await axiosFireApi("signup", "post", transformedData);
      if (response.success) {
        setIsSubmittedSuccessfully(true);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-8 px-2">
      {/* Success message */}
      {isSubmittedSuccessfully ? (
        <div className="flex items-center space-x-2 text-green-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4ef207"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-check-big"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
          </svg>
          <span className="whitespace-nowrap text-lg font-semibold">
            Your request for account creation is sent successfully.
          </span>
        </div>
      ) : (
        <>
          {/* Input fields for step 1 */}
          {step === 1 && (
            <>
              <div className="flex gap-x-8">
                <Textinput
                  name="username"
                  label="Username"
                  type="text"
                  defaultValue=""
                  placeholder="Enter username"
                  register={register}
                  error={errors.username}
                  style={{ width: "200px", height: "50px" }}
                />

                <Textinput
                  name="email"
                  label="Email"
                  type="email"
                  defaultValue=""
                  placeholder="Enter email"
                  register={register}
                  error={errors.email}
                  style={{ width: "200px", height: "50px" }}
                />
              </div>
              <div className="flex gap-x-8">
                <Textinput
                  name="firstName"
                  label="First Name"
                  type="text"
                  defaultValue=""
                  placeholder="Enter first name"
                  register={register}
                  error={errors.firstName}
                  style={{ width: "200px", height: "50px" }}
                />

                <Textinput
                  name="lastName"
                  label="Last Name"
                  type="text"
                  defaultValue=""
                  placeholder="Enter last name"
                  register={register}
                  error={errors.lastName}
                  style={{ width: "200px", height: "50px" }}
                />
              </div>
            </>
          )}

          {/* Input fields for step 2 */}
          {step === 2 && (
            <>
              <div className="flex gap-x-8">
                <Textinput
                  name="phone"
                  label="Phone"
                  type="tel"
                  defaultValue=""
                  placeholder="Enter phone number"
                  register={register}
                  error={errors.phone}
                  style={{ width: "200px", height: "50px" }}
                />

                <Textinput
                  name="address"
                  label="Address"
                  type="text"
                  defaultValue=""
                  placeholder="Enter address"
                  register={register}
                  error={errors.address}
                  style={{ width: "200px", height: "50px" }}
                />
              </div>
              <div>
                <Textinput
                  name="dob"
                  label="Date of Birth"
                  type="date"
                  defaultValue=""
                  placeholder="Enter date of birth"
                  register={register}
                  error={errors.dob}
                  style={{ width: "200px", height: "50px" }}
                />
              </div>
            </>
          )}

          {/* Buttons */}
          {!isSubmitting && (
            <div className="flex justify-center mt-4">
              {step === 1 && (
                <Button
                  type="button"
                  onClick={handleSubmit(handleNextClick)}
                  className={`btn btn-dark border-2 bg-[#004a8e] px-16 py-3 mx-8 mt-12 rounded-lg text-white text-xl ${
                    !areInitialFieldsFilled()
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={!areInitialFieldsFilled()}
                >
                  Next
                </Button>
              )}
              {step === 2 && (
                <Button
                  type="submit"
                  className="btn btn-dark border-2 bg-[#004a8e] px-16 py-3 mx-8 mt-12 rounded-lg text-white text-xl"
                  isLoading={isSubmitting}
                >
                  Sign Up
                </Button>
              )}
            </div>
          )}
        </>
      )}
    </form>
  );
};

export default SignUpForm;
