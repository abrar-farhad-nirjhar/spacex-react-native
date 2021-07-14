import gql from 'graphql-tag';

const ROCKETS = gql`
  query Rockets($offset: Int!, $limit: Int!) {
    rockets(offset: $offset, limit: $limit) {
      id
      name
    }
  }
`;

export default ROCKETS;
