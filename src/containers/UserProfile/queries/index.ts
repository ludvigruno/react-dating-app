import gql from 'graphql-tag';

export const getUserById = gql`
  query getUserById($id: String!) {
    getUserById(id: $id) {
      user {
        name
        surname
        username
        email
        avatar
        age
      }
    }
  }
`;
