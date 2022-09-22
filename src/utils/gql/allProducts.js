import { gql } from "@apollo/client";

export const allProducts = gql`
  query {
    category(input: { title: "all" }) {
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
