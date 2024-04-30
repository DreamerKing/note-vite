import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_NOTE, GET_MY_FAVORITES_ID } from "#/gql/query";
import { EDIT_NOTE } from "#/gql/mutation";
import NoteForm from "@/NoteForm";

const EditNote = (props) => {
  const { id: noteId } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_NOTE, {
    variables: { noteId },
  });
  const { data: userData } = useQuery(GET_MY_FAVORITES_ID);
  const [editNote] = useMutation(EDIT_NOTE, {
    variables: {
      id: noteId,
    },
    onCompleted() {
      navigate(`/note/${noteId}`);
    },
  });
  if (loading) return <p> Loading ...</p>;
  if (error) return <p>Error! Note not found</p>;
  if (userData.me.id !== data.note.author.id) {
    return <p>You don't have access to edit this note</p>;
  }
  return <NoteForm content={data.note.content} action={editNote} />;
};

export default EditNote;
