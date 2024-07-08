import LoginForm from "./common/LoginForm";
import NonAuthLayout from "../../Layout/NonAuthLayout";
const login = () => {
  return (
    <NonAuthLayout
      title="Login to Dashboard"
      subTitle="Enter your details below."
    >
      <LoginForm />
    </NonAuthLayout>
  );
};
export default login;
