import gql from 'graphql-tag';

const ROCKETDETAILS = gql`
  query Rocket($id: ID!) {
    rocket(id: $id) {
      company
      id
      first_flight
      description
      country
      success_rate_pct
      wikipedia
      type
      name
    }
  }
`;

export default ROCKETDETAILS;
