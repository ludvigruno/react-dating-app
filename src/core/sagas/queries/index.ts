import gql from 'graphql-tag';

export const getCurrentUser = gql`
  query getCurrentUser($token: String!) {
    getCurrentUser(token: $token) {
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
