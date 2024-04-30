import { useQuery, gql } from "@apollo/client";
import { Navigate } from "react-router-dom";

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const PrivateRoute = ({ children }) => {
  const { loadding, error, data } = useQuery(IS_LOGGED_IN);
  console.log("data:", data);
  if (loadding) return <p>Lodding ...</p>;
  if (error) return <p>Error</p>;
  if (data.isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/signin"></Navigate>;
  }
};

export default PrivateRoute;
