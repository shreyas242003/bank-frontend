import SignUpForm from "./common/SignupForm";
import NonAuthLayout from "../../Layout/NonAuthLayout";
const Signup = () => {
  return (
    <NonAuthLayout
      title="Singup to Dashboard"
      subTitle="Enter your details below."
    >
      <SignUpForm />
    </NonAuthLayout>
  );
};
export default Signup;
