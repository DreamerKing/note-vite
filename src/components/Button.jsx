import styled from "styled-components";

const Button = styled.button`
  display: block;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
  background-color: #0077cc;

  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }

  &:active {
    background-color: #005fa3;
  }
`;

export const ButtonAsLink = styled.button`
  display: block;
  padding: 0;
  border: none;
  font-size: 18px;
  color: #0077cc;
  text-decoration: underline;
  background-color: none;
  cursor: pointer;

  &:hover,
  &:active {
    color: #004499;
  }
`;

export default Button;
