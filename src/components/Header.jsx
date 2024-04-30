import { useQuery, gql } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { ButtonAsLink } from "@/Button";
import { IS_LOGGED_IN } from "#/gql/query";

const HeaderBar = styled.div``;

const UserState = styled.div`
  margin-left: auto;
`;

const LogoText = styled.span`
  padding: 1em;
`;

const Header = () => {
  const navigate = useNavigate();
  const { data, client } = useQuery(IS_LOGGED_IN);
  const logOut = () => {
    localStorage.removeItem("token");
    client.resetStore();
    console.log("client:", client);
    // client.writeData({ data: { isLoggedIn: false } });
    navigate("/");
  };

  return (
    <HeaderBar>
      <img src={logo} height={40} />
      <LogoText>Note</LogoText>
      <UserState>
        {data?.isLoggedIn ? (
          <ButtonAsLink onClick={logOut}>Log out</ButtonAsLink>
        ) : (
          <p>
            <Link to={"/signin"}>Sign In</Link>
            <Link to={"/signup"}>Sign Up</Link>
          </p>
        )}
      </UserState>
    </HeaderBar>
  );
};

export default Header;
