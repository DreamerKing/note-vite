import { useEffect } from "react";
import { useMutation, useApolloClient, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import UserForm from "@/UserForm";

const SIGNIN_USER = gql`
  mutation SignIn($username: String, $email: String, $password: String!) {
    signIn(username: $username, email: $email, password: $password)
  }
`;

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign In";
  });

  const client = useApolloClient();
  const [signIn, { loadding, error }] = useMutation(SIGNIN_USER, {
    onCompleted(data) {
      localStorage.setItem("token", data.signIn);
      navigate("/");
    },
  });

  return (
    <>
      <UserForm formType="signin" action={signIn} />
      {loadding && <p>Loadding...</p>}
      {error && <p>Error signin in!</p>}
    </>
  );
};

export default SignIn;
