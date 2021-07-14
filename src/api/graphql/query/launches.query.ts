import gql from 'graphql-tag';

const LAUNCHES = gql`
  query Launches($offset: Int!, $limit: Int!) {
    launches(offset: $offset, limit: $limit) {
      id
      details
      launch_site {
        site_name
      }
      launch_year
      mission_name
    }
  }
`;

export default LAUNCHES;
