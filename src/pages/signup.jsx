import { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import UserForm from "@/UserForm";

const SIGNUP_USER = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

const SignUp = (props) => {
  const navigate = useNavigate();

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signUp);
      // client.writeData({ data: { isLoggedIn: true }})
      navigate("/");
    },
  });

  useEffect(() => {
    document.title = "Sign up";
  });

  return <UserForm formType="signup" action={signUp}></UserForm>;
};

export default SignUp;
