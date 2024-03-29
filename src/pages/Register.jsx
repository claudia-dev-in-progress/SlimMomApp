import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Helmet } from "react-helmet";
import { Hero } from "components/Herosection/Herosection";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Hero />
      <RegisterForm />
    </>
  );
};

export default Register;
