import { gql } from "@apollo/client";

export const currency = gql`
  query {
    categories {
      products {
        prices {
          currency {
            symbol
            label
          }
        }
      }
    }
  }
`;
