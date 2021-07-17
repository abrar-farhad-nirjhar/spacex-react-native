import gql from 'graphql-tag';

const SHIPDETAILS = gql`
  query Ship($id: ID!) {
    ship(id: $id) {
      id
      image
      missions {
        name
      }
      name
      speed_kn
      year_built
      url
      successful_landings
      status
      attempted_landings
    }
  }
`;

export default SHIPDETAILS;
