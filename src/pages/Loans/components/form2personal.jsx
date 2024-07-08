import Textinput from "../../../components/ui/Textinput";
const FormTwoPersonalLoan = ({ register, errors }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">
        Employment and Loan Details
      </h3>
      <div className="flex gap-x-4 gap-y-2">
        <Textinput
          name="employerName"
          label="Employer Name"
          type="text"
          placeholder="Enter your employer's name"
          register={register}
          error={errors.employerName}
        />
        <Textinput
          name="jobTitle"
          label="Job Title"
          type="text"
          placeholder="Enter your job title"
          register={register}
          error={errors.jobTitle}
        />
      </div>
      <div className="flex gap-x-4 gap-y-2">
        <Textinput
          name="annualIncome"
          label="Annual Income"
          type="number"
          placeholder="Enter your annual income"
          register={register}
          error={errors.annualIncome}
        />
        <Textinput
          name="loanAmount"
          label="Loan Amount"
          type="number"
          placeholder="Enter the loan amount requested"
          register={register}
          error={errors.loanAmount}
        />
      </div>
      <div className="flex gap-x-4 gap-y-2">
        <div className="w-full">
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
        <div className="w-full">
          <label htmlFor="loanPurpose" className="block capitalize form-label">
            Loan Purpose
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
    </div>
  );
};

export default FormTwoPersonalLoan;
