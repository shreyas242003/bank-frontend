import React from "react";
import { useForm } from "react-hook-form";
import Collapsible from "../../components/ui/Collapsible";
import FormOne from "./components/form1";
import FormTwoPersonalLoan from "./components/form2personal";

const PersonalLoan = ({ register, errors }) => {
  return (
    <div className="relative w-full bg-[rgba(225,244,253,0.30)] px-6 mt-16 pb-8 shadow-xl ring-1 rounded-lg ring-gray-900/5 sm:mx-auto sm:max-w-4xl sm:px-10">
      <form className="pt-4">
        <Collapsible title="Personal details">
          <FormOne register={register} errors={errors} />
        </Collapsible>
        <Collapsible title="Employment details">
          <FormTwoPersonalLoan register={register} errors={errors} />
        </Collapsible>
      </form>
    </div>
  );
};

export default PersonalLoan;
