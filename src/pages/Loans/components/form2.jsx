import React from "react";
import { useForm } from "react-hook-form";
import Textinput from "../../../components/ui/Textinput"; // Assuming TextInput is in the same directory

const FormTwo = ({ register, errors }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Property Details</h3>
      <div className="flex gap-x-4 gap-y-2">
        <Textinput
          name="propertyAddress"
          label="Property Address"
          type="text"
          placeholder="Enter the property address"
          register={register}
          error={errors.propertyAddress}
        />
        <div className="w-1/2">
          <label htmlFor="propertyType" className="block capitalize form-label">
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            {...register("propertyType")}
            className={`block w-full py-2 px-3 border border-gray-25 rounded-lg focus:outline-blue-200 ${
              errors.propertyType ? "has-error" : ""
            }`}
          >
            <option value="">Select property type</option>
            <option value="singleFamily">Single Family Home</option>
            <option value="multiFamily">Multi-Family Home</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
            <option value="other">Other</option>
          </select>
          {errors.propertyType && (
            <p className="text-danger-500">{errors.propertyType.message}</p>
          )}
        </div>
      </div>
      <div className="flex gap-x-4 gap-y-2">
        <Textinput
          name="purchasePrice"
          label="Purchase Price"
          type="number"
          placeholder="Enter the purchase price"
          register={register}
          error={errors.purchasePrice}
        />
        <Textinput
          name="downPayment"
          label="Down Payment"
          type="number"
          placeholder="Enter the down payment amount"
          register={register}
          error={errors.downPayment}
        />
      </div>
      <div className="flex gap-x-4 gap-y-2">
        <Textinput
          name="loanAmount"
          label="Loan Amount"
          type="number"
          placeholder="Enter the loan amount requested"
          register={register}
          error={errors.loanAmount}
        />
        <div className="w-1/2">
          <label htmlFor="loanTerm" className="block capitalize form-label">
            Loan Term
          </label>
          <select
            id="loanTerm"
            name="loanTerm"
            {...register("loanTerm")}
            className={`block w-full py-2 px-3 border border-gray-25 rounded-lg focus:outline-blue-200 ${
              errors.loanTerm ? "has-error" : ""
            }`}
          >
            <option value="">Select loan term</option>
            <option value="15">15 years</option>
            <option value="30">30 years</option>
            <option value="other">Other</option>
          </select>
          {errors.loanTerm && (
            <p className="text-danger-500">{errors.loanTerm.message}</p>
          )}
        </div>
      </div>
      <div className="w-full mt-4">
        <label htmlFor="propertyUse" className="block capitalize form-label">
          Property Use
        </label>
        <select
          id="propertyUse"
          name="propertyUse"
          {...register("propertyUse")}
          className={`block w-full py-2 px-3 border border-gray-25 rounded-lg focus:outline-blue-200 ${
            errors.propertyUse ? "has-error" : ""
          }`}
        >
          <option value="">Select property use</option>
          <option value="primary">Primary Residence</option>
          <option value="secondary">Secondary Residence</option>
          <option value="investment">Investment Property</option>
        </select>
        {errors.propertyUse && (
          <p className="text-danger-500">{errors.propertyUse.message}</p>
        )}
      </div>
    </div>
  );
};

export default FormTwo;
