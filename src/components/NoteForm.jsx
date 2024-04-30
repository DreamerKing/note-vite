import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  height: 100%;
`;
const Form = styled.form`
  height: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80%;
`;

const NoteForm = (props) => {
  const [values, setValues] = useState({ content: props.content ?? "" });
  const onChangeTextArea = ({ target: { value, name } }) => {
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
      <Form onSubmit={onSubmit}>
        <TextArea
          required
          type="text"
          name="content"
          value={values.content}
          onChange={onChangeTextArea}
        ></TextArea>
        <Button type="submit">Save</Button>
      </Form>
    </Wrapper>
  );
};

export default NoteForm;
