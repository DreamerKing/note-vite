import { gql } from "@apollo/client";

export const EDIT_NOTE = gql`
  mutation EditNote($id: ID!, $content: String!, $author: String) {
    updateNote(id: $id, content: $content, author: $author) {
      id
      content
      createdAt
      favoritedCount
      favoritedBy {
        id
        username
      }
      author {
        id
        username
      }
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;

export const TOGGLE_FAVORITE = gql`
  mutation ToggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
      favoritedCount
    }
  }
`;
