import Note from "@/Note";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { GET_NOTE } from "#/gql/query";

const NotePage = (props) => {
  const { id: noteId } = useParams();
  const { loading, error, data } = useQuery(GET_NOTE, {
    variables: { noteId },
  });
  if (loading) return <p> Loading ...</p>;
  if (error) return <p>Error! Note not found</p>;
  return <Note note={data.note} />;
};

export default NotePage;
