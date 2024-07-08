import React from "react";
import { useState } from "react";
import Textinput from "../../../components/ui/Textinput";

const FormOne = ({ register, errors }) => {
  return (
    <div>
      <div className="flex gap-x-4 gap-y-2">
        <Textinput
          name="name"
          label="Name"
          type="text"
          placeholder="Enter your name"
          register={register}
          error={errors.name}
        />
        <Textinput
          name="lastname"
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          register={register}
          error={errors.lastname}
        />
      </div>
      <div className="flex gap-x-4 gap-y-2">
        <Textinput
          name="netMonthlyIncome"
          label="Net Monthly Income"
          type="number"
          placeholder="Enter your net monthly income"
          register={register}
          error={errors.netMonthlyIncome}
        />
        <div className="w-1/2">
          <label
            htmlFor="maritalStatus"
            className="block capitalize form-label"
          >
            Marital Status
          </label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            {...register("maritalStatus")}
            className={`block w-full py-2 px-3 border border-gray-25 rounded-lg focus:outline-blue-200 ${
              errors.maritalStatus ? "has-error" : ""
            }`}
          >
            <option value="">Select marital status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
          {errors.maritalStatus && (
            <p className="text-danger-500">{errors.maritalStatus.message}</p>
          )}
        </div>
      </div>
      <div className="flex gap-x-4 gap-y-2">
        <div className="w-full">
          <label htmlFor="education" className="block capitalize form-label">
            Education
          </label>
          <select
            id="education"
            name="education"
            {...register("education")}
            className={`block w-full py-2 px-3 border border-gray-25 rounded-lg focus:outline-blue-200 ${
              errors.education ? "has-error" : ""
            }`}
          >
            <option value="">Select education</option>
            <option value="SSC">SSC</option>
            <option value="12TH">12th</option>
            <option value="GRADUATE">Graduate</option>
            <option value="UNDERGRADUATE">Under Graduate</option>
            <option value="POSTGRADUATE">Post Graduate</option>
            <option value="OTHERS">Others</option>
          </select>
          {errors.education && (
            <p className="text-danger-500">{errors.education.message}</p>
          )}
        </div>
        <div className="w-1/2">
          <label htmlFor="gender" className="block capitalize form-label">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            {...register("gender")}
            className={`block w-full py-2 px-3 border border-gray-25 rounded-lg focus:outline-blue-200 ${
              errors.gender ? "has-error" : ""
            }`}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-danger-500">{errors.gender.message}</p>
          )}
        </div>
      </div>
      <div className="flex gap-x-4 gap-y-2">
        <Textinput
          name="fatherName"
          label="Father's Name"
          type="text"
          placeholder="Enter your father's name"
          register={register}
          error={errors.fatherName}
        />
        <Textinput
          name="occupation"
          label="Occupation"
          type="text"
          placeholder="Enter your occupation"
          register={register}
          error={errors.occupation}
        />
      </div>

      <div className="mb-4">
        <label className="block capitalize form-label">
          Are you a resident?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="resident"
              value="yes"
              {...register("resident")}
              className="form-radio"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="resident"
              value="no"
              {...register("resident")}
              className="form-radio"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
        {errors.resident && (
          <p className="text-danger-500">{errors.resident.message}</p>
        )}
      </div>
    </div>
  );
};

export default FormOne;
