import RMK from "react-markdown";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import { IS_LOGGED_IN } from "#/gql/query";
import NoteUser from "./NoteUser";

const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

const MetaInfo = styled.div`
  padding-left: 1em;
`;

const UserAction = styled.div`
  margin-left: auto;
`;

const Note = ({ note }) => {
  const { loadding, error, data } = useQuery(IS_LOGGED_IN);
  if (loadding) return "Loadding ...";
  if (error) return <p>Error!</p>;
  return (
    <StyledNote key={note.id}>
      <MetaData>
        {/*  <MetaInfo>
          <img
            src={note.author.avatar}
            alt={note.author.username}
            width="50px"
            height="50px"
          />
        </MetaInfo> */}
        <MetaInfo>
          {note.author.username} {format(note.createdAt, "MMM Do yyyy")}
        </MetaInfo>

        <UserAction>
          {data.isLoggedIn ? (
            <NoteUser note={note} />
          ) : (
            <>
              <em>favorites:</em> {note.favoritedCount}
            </>
          )}
        </UserAction>
      </MetaData>
      <RMK>{note.content}</RMK>
    </StyledNote>
  );
};

export default Note;
