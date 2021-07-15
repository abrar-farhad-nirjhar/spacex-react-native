import gql from 'graphql-tag';

const MISSIONDETAILS = gql`
  query Mission($id: ID!) {
    mission(id: $id) {
      description
      id
      name
      twitter
      website
      wikipedia
    }
  }
`;

export default MISSIONDETAILS;
