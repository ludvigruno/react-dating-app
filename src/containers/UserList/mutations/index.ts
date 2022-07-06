import gql from 'graphql-tag';

export const putUserProfile = gql`
  mutation updateConsumer($params: UpdateConsumerRequest!) {
    updateConsumer(params: $params) {
      user {
        surname
        name
        phone
        userName
      }
    }
  }
`;
