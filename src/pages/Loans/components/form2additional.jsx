import React from "react";
import Textinput from "../../../components/ui/Textinput"; // Adjust the import path as necessary

const FormTwoAdditionalLoan = ({ register, errors }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Existing Loan Details</h3>
      <div className="flex gap-x-4 gap-y-2">
        <Textinput
          name="existingLoanAmount"
          label="Existing Loan Amount"
          type="number"
          placeholder="Enter your existing loan amount"
          register={register}
          error={errors.existingLoanAmount}
        />
        <Textinput
          name="existingLoanTerm"
          label="Existing Loan Term"
          type="number"
          placeholder="Enter your existing loan term (months)"
          register={register}
          error={errors.existingLoanTerm}
        />
      </div>
      <div className="flex gap-x-4 gap-y-2">
        <Textinput
          name="outstandingBalance"
          label="Outstanding Balance"
          type="number"
          placeholder="Enter the outstanding balance"
          register={register}
          error={errors.outstandingBalance}
        />
        <Textinput
          name="monthlyEMI"
          label="Monthly EMI"
          type="number"
          placeholder="Enter your monthly EMI"
          register={register}
          error={errors.monthlyEMI}
        />
      </div>

      <h3 className="text-xl font-semibold mb-4">New Loan Request Details</h3>
      <div className="flex gap-x-4 gap-y-2">
        <Textinput
          name="newLoanAmount"
          label="New Loan Amount"
          type="number"
          placeholder="Enter the new loan amount requested"
          register={register}
          error={errors.newLoanAmount}
        />
        <div className="w-1/2">
          <label htmlFor="newLoanTerm" className="block capitalize form-label">
            New Loan Term
          </label>
          <select
            id="newLoanTerm"
            name="newLoanTerm"
            {...register("newLoanTerm")}
            className={`block w-full py-2 px-3 border border-gray-25 rounded-lg focus:outline-blue-200 ${
              errors.newLoanTerm ? "has-error" : ""
            }`}
          >
            <option value="">Select new loan term</option>
            <option value="12">12 months</option>
            <option value="24">24 months</option>
            <option value="36">36 months</option>
            <option value="48">48 months</option>
            <option value="60">60 months</option>
            <option value="other">Other</option>
          </select>
          {errors.newLoanTerm && (
            <p className="text-danger-500">{errors.newLoanTerm.message}</p>
          )}
        </div>
      </div>
      <div className="w-full mt-4">
        <label
          htmlFor="additionalLoanPurpose"
          className="block capitalize form-label"
        >
          Purpose of Additional Loan
        </label>
        <select
          id="additionalLoanPurpose"
          name="additionalLoanPurpose"
          {...register("additionalLoanPurpose")}
          className={`block w-full py-2 px-3 border border-gray-25 rounded-lg focus:outline-blue-200 ${
            errors.additionalLoanPurpose ? "has-error" : ""
          }`}
        >
          <option value="">Select loan purpose</option>
          <option value="debtConsolidation">Debt Consolidation</option>
          <option value="homeImprovement">Home Improvement</option>
          <option value="majorPurchase">Major Purchase</option>
          <option value="medicalExpenses">Medical Expenses</option>
          <option value="other">Other</option>
        </select>
        {errors.additionalLoanPurpose && (
          <p className="text-danger-500">
            {errors.additionalLoanPurpose.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormTwoAdditionalLoan;
