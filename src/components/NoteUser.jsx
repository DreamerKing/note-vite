import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import DeleteNote from "./DeleteNote";
import { GET_MY_FAVORITES_ID } from "#/gql/query";
import FavoriteNote from "./FavoriteNote";

const NoteUser = (props) => {
  const { loading, error, data } = useQuery(GET_MY_FAVORITES_ID);
  if (loading) return "Lodding ...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <FavoriteNote
        me={data.me}
        noteId={props.note.id}
        favoritedCount={props.note.favoritedCount}
      ></FavoriteNote>
      {data.me.id == props.note.author.id && (
        <>
          <Link to={`/edit/${props.note.id}`}>Edit</Link>
          <DeleteNote noteId={props.note.id} />
        </>
      )}
    </>
  );
};

export default NoteUser;
