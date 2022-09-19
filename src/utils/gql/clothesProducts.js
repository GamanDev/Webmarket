import { gql } from "@apollo/client";

export const clothesProducts = gql`
  query {
    category(input: { title: "clothes" }) {
      name
      products {
        name
        gallery
        inStock
        id
        prices {
          amount
          currency {
            label
            symbol
          }
        }
      }
    }
  }
`;
