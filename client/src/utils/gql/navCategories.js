import { gql } from "@apollo/client";

export const navCategories = gql`
  query {
    categories {
      name
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
