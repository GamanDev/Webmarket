import { gql } from "@apollo/client";

export const productById = (id) => gql`
  query {
    product(id: "${id}") {
    id, name, inStock,category, brand,description, 
    attributes{
      id,name,type,items{displayValue,value,id}
    },
    prices{currency{label,symbol},amount}
    gallery,
  }
}
`;
