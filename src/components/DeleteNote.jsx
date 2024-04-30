import { useMutation } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonAsLink } from "@/Button";
import { DELETE_NOTE } from "#/gql/mutation";
import { GET_MY_NOTES, GET_NOTES } from "#/gql/query";

const DeleteNote = (props) => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const id = props.noteId;
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: { id },
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
    onCompleted() {
      navigate(`/mynotes`);
    },
  });
  return <ButtonAsLink onClick={deleteNote}>Delete Note</ButtonAsLink>;
};

export default DeleteNote;
