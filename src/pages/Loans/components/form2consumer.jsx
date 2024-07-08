import Textinput from "../../../components/ui/Textinput"; // Adjust the import path as necessary

const FormTwoConsumerLoan = ({ register, errors }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Purchase Details</h3>
      <div className="flex gap-x-4 gap-y-2">
        <Textinput
          name="itemToPurchase"
          label="Item to Purchase"
          type="text"
          placeholder="Enter the item to purchase"
          register={register}
          error={errors.itemToPurchase}
        />
        <Textinput
          name="retailerName"
          label="Retailer Name"
          type="text"
          placeholder="Enter the retailer's name"
          register={register}
          error={errors.retailerName}
        />
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

      <h3 className="text-xl font-semibold mb-4">Loan Request Details</h3>
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
            <option value="12">12 months</option>
            <option value="24">24 months</option>
            <option value="36">36 months</option>
            <option value="48">48 months</option>
            <option value="60">60 months</option>
            <option value="other">Other</option>
          </select>
          {errors.loanTerm && (
            <p className="text-danger-500">{errors.loanTerm.message}</p>
          )}
        </div>
      </div>
      <div className="w-full mt-4">
        <label htmlFor="loanPurpose" className="block capitalize form-label">
          Purpose of Loan
        </label>
        <select
          id="loanPurpose"
          name="loanPurpose"
          {...register("loanPurpose")}
          className={`block w-full py-2 px-3 border border-gray-25 rounded-lg focus:outline-blue-200 ${
            errors.loanPurpose ? "has-error" : ""
          }`}
        >
          <option value="">Select loan purpose</option>
          <option value="debtConsolidation">Debt Consolidation</option>
          <option value="homeImprovement">Home Improvement</option>
          <option value="majorPurchase">Major Purchase</option>
          <option value="medicalExpenses">Medical Expenses</option>
          <option value="other">Other</option>
        </select>
        {errors.loanPurpose && (
          <p className="text-danger-500">{errors.loanPurpose.message}</p>
        )}
      </div>
    </div>
  );
};

export default FormTwoConsumerLoan;
