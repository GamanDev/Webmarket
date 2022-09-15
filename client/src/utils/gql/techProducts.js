import { gql } from "@apollo/client";

export const techProducts = gql`
  query {
    category(input: { title: "tech" }) {
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
