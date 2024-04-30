import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_MY_NOTES } from "#/gql/query";
import NoteFeed from "@/NoteFeed";

const MyNotes = () => {
  useEffect(() => {
    document.title = "my notes";
  }, []);
  const { data, loading, error } = useQuery(GET_MY_NOTES);
  if (loading) return "Lodding ...";
  if (error) return `Error! ${error.message}`;
  if (data.me.notes.length != 0) {
    return <NoteFeed notes={data.me.notes} />;
  } else {
    return <p>No content yet</p>;
  }
};

export default MyNotes;
