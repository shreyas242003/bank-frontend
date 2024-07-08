import React from "react";
import Textinput from "../../../components/ui/Textinput";
import Button from "../../../components/ui/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../../../../utils/validationSchema";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { axiosFireApi } from "../../../services/config";
import { handleLogin } from "./store";
import { useDispatch } from "react-redux";
const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginValidation),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await axiosFireApi("login", "post", data);
    if (response.success) {
      dispatch(handleLogin(response.data));
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-8 px-2 ">
      <h1 className="text-center pb-16 text-xl font-black">
        Login using credentials
      </h1>
      <div className="flex gap-x-8">
        <Textinput
          name="email"
          label="Email"
          type="email"
          defaultValue=""
          className=""
          placeholder="Enter email"
          register={register}
          error={errors.email}
          style={{ width: "200px", height: "50px" }}
        />

        <Textinput
          name="password"
          label="Password"
          type="password"
          defaultValue=""
          placeholder="Enter Password"
          register={register}
          error={errors.password}
          style={{ width: "200px", height: "50px" }}
        />
      </div>
      <div className="flex justify-center">
        <Button
          type="submit"
          className="btn btn-dark border-2 bg-[#004a8e]  px-16 py-3 mx-8 mt-12 rounded-lg text-white  text-xl"
          isLoading={isSubmitting}
        >
          LOGIN
        </Button>
      </div>
      <div className="text-center mt-4">
        <span>Kindly </span>
        <Link
          to="/signup"
          className="text-blue-50 hover:underline"
          style={{ transition: "color 0.3s ease" }}
        >
          Sign Up
        </Link>
        <span> if you are a new user.</span>
      </div>
    </form>
  );
};

export default LoginForm;
