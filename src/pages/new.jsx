import { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
import NoteForm from "@/NoteForm";
import { useNavigate } from "react-router-dom";
import { NEW_NOTE, GET_NOTES, GET_MY_NOTES } from "#/gql/query";

const NewNote = (props) => {
  useEffect(() => {
    document.title = "create note";
  }, []);
  const navigate = useNavigate();
  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
    onCompleted(data) {
      navigate(`/note/${data.createNote.id}`);
    },
  });
  return (
    <>
      {loading && <p>Loadding ...</p>}
      {error && <p>Error saving then Note!</p>}
      <NoteForm action={data} />
    </>
  );
};

export default NewNote;
