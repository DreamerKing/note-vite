import { useQuery } from "@apollo/client";
import NoteFeed from "@/NoteFeed";
import Button from "@/Button";
import { GET_NOTES } from "#/gql/query";

const Home = () => {
  const variables = {
    author: "King",
    content: "learn styledComponent",
    cursor: null,
    email: "king@live.cn",
    password: "king",
    username: "King",
  };
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES, {
    variables: {
      cursor: null,
    },
  });

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        cursor: data.noteFeed.cursor,
      },
      updateQuery(previousResult, { fetchMoreResult }) {
        return {
          noteFeed: {
            cursor: fetchMoreResult.noteFeed.cursor,
            hasNext: fetchMoreResult.noteFeed.hasNext,
            notes: [
              ...previousResult.noteFeed.notes,
              ...fetchMoreResult.noteFeed.notes,
            ],
            __typename: "noteFeed",
          },
        };
      },
    });
  };

  if (loading) return <p> Loading ...</p>;
  if (error) return <p>Error!</p>;
  return (
    <>
      <NoteFeed notes={data.noteFeed.notes}></NoteFeed>
      {data.noteFeed.hasNext && <Button>Load more</Button>}
    </>
  );
};

export default Home;
