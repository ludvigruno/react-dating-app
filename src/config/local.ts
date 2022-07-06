const apiHost = process.env.REACT_APP_API_SERVER_ADDRESS || 'localhost:3001';

export default {
  graphqlUrl: `http://${apiHost}/graphql`,
  restApiHost: `http://${apiHost}/`,
  secretKey: process.env.REACT_APP_PASSWORD_SECRET_KEY || 'secret',
};
