import gql from 'graphql-tag';

export const fetchUserList = gql`
  query getUsersWithoutCurrentId($id: String!) {
    getUsersWithoutCurrentId(id: $id) {
      user {
        id
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
