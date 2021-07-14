import gql from 'graphql-tag';

const MISSIONS = gql`
  query Launches($offset: Int!, $limit: Int!) {
    missions(offset: $offset, limit: $limit) {
      id
      name
    }
  }
`;

export default MISSIONS;
