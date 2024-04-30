import { ButtonAsLink } from "./Button";
import { TOGGLE_FAVORITE } from "#/gql/mutation";
import { GET_MY_FAVORITES } from "#/gql/query";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const FavoriteNote = (props) => {
  const [count, setCount] = useState(props.favoritedCount);
  const [favorited, setFavorited] = useState(
    props.me.favorites.filter((note) => note.id == props.noteId).length > 0,
  );
  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: {
      id: props.noteId,
    },
    refecthQuries: [{ query: GET_MY_FAVORITES }],
  });
  return (
    <>
      {favorited ? (
        <ButtonAsLink
          onClick={() => {
            toggleFavorite();
            setFavorited(false);
            setCount(count - 1);
          }}
        >
          Remove Favorite : {count}
        </ButtonAsLink>
      ) : (
        <ButtonAsLink
          onClick={() => {
            toggleFavorite();
            setFavorited(true);
            setCount(count + 1);
          }}
        >
          Add Favorite : {count}
        </ButtonAsLink>
      )}
    </>
  );
};

export default FavoriteNote;
