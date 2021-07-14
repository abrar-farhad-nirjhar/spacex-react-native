import gql from 'graphql-tag';

const SHIPS = gql`
  query Ships($offset: Int!, $limit: Int!) {
    ships(offset: $offset, limit: $limit) {
      id
      name
      image
    }
  }
`;

export default SHIPS;
