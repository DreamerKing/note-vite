import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_MY_FAVORITES } from "#/gql/query";
import NoteFeed from "@/NoteFeed";

const Favorities = () => {
  useEffect(() => {
    document.title = "my favorites";
  }, []);
  const { data, loading, error } = useQuery(GET_MY_FAVORITES);
  if (loading) return "Lodding ...";
  if (error) return `Error! ${error.message}`;
  if (data.me.favorites.length != 0) {
    return <NoteFeed notes={data.me.favorites} />;
  } else {
    return <p>No content yet</p>;
  }
};

export default Favorities;
