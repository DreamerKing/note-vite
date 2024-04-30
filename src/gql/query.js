import { gql } from "@apollo/client";

export const GET_NOTES = gql`
  query NoteFeed($cusor: String) {
    noteFeed(cursor: $cusor) {
      cursor
      hasNext
      notes {
        author {
          id
          email
          username
          avatar
        }
        content
        id
        favoritedCount
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_NOTE = gql`
  query Note($noteId: ID!) {
    note(id: $noteId) {
      id
      content
      author {
        username
        id
        email
        avatar
      }
      updatedAt
      createdAt
      favoritedCount
    }
  }
`;

export const GET_MY_NOTES = gql`
  query me {
    me {
      email
      id
      username
      avatar
      notes {
        id
        content
        favoritedCount
        createdAt
        author {
          id
          username
          avatar
        }
      }
    }
  }
`;

export const GET_MY_FAVORITES = gql`
  query MyFavorites {
    me {
      id
      username
      favorites {
        id
        content
        createdAt
        favoritedCount
        author {
          id
          username
        }
      }
    }
  }
`;

export const GET_MY_FAVORITES_ID = gql`
  query MyFavoriteIds {
    me {
      id
      favorites {
        id
      }
    }
  }
`;

export const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

export const NEW_NOTE = gql`
  mutation CreateNote($content: String!, $author: String) {
    createNote(content: $content, author: $author) {
      id
      content
      createdAt
      favoritedCount
      author {
        id
        username
      }
      favoritedBy {
        id
        username
      }
    }
  }
`;
