import { useState } from "react";
import styled from "styled-components";
import Button from "@/Button";

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }
  input {
    width: 100%;
    margin-bottom: 2em;
  }
`;

const UserForm = (props) => {
  const [values, setValues] = useState();

  const onChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.action({
      variables: {
        ...values,
      },
    });
  };

  return (
    <Wrapper>
      <h2>Sign {props.formType == "signup" ? "Up" : "In"}</h2>
      <Form onSubmit={onSubmit}>
        {props.formType == "signup" && (
          <>
            <label htmlFor="username">User Name:</label>
            <input
              required
              type="text"
              id="username"
              name="username"
              onChange={onChange}
              placeholder="username"
            />
          </>
        )}
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          onChange={onChange}
          placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          onChange={onChange}
          placeholder="password"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default UserForm;
